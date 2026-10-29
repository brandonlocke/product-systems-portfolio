import assert from "node:assert/strict";
import test from "node:test";

const { default: worker } = await import("../dist/server/index.js");
const environment = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };
const request = path => worker.fetch(new Request(`https://brandonlocke.co${path}`, { headers: { accept: "text/html" } }), environment, context);

test("homepage renders the primary work and keeps supplementary cases discoverable", async () => {
  const response = await request("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const slug of ["rewards", "declined-services", "booking-journey", "lifecycle-systems", "feedback-system"]) assert.ok(html.includes(`/work/${slug}`));
  assert.match(html, /<details class="more-work">/);
  assert.doesNotMatch(html, /name="codex-preview"/);
});

for (const slug of ["rewards", "declined-services", "booking-journey", "lifecycle-systems", "feedback-system"]) {
  test(`${slug} renders contribution, evidence, and a route-specific canonical`, async () => {
    const response = await request(`/work/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /My contribution/);
    assert.match(html, /Evidence note/);
    const initialContent = html.split("<details")[0];
    assert.match(initialContent, /<figure[^>]*aria-label="[^"]*Simplified product model/);
    assert.match(initialContent, /Portfolio reconstruction/);
    assert.ok(html.includes(`https://brandonlocke.co/work/${slug}`));
    assert.match(html, /<details class="artifact-details">/);
    assert.doesNotMatch(html, /CONFLT2025-|members\.ebay\.com|CARCARE10/);
  });
}

test("unknown case returns 404 with a useful route back", async () => {
  const response = await request("/work/does-not-exist");
  assert.equal(response.status, 404);
  const html = await response.text();
  assert.match(html, /Explore selected work/);
});
