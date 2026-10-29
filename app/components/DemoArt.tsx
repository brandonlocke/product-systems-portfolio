export function VehicleArt() {
  return <svg viewBox="0 0 300 120" className="demo-car-art" aria-label="Illustration of a vehicle" role="img"><ellipse cx="150" cy="102" rx="120" ry="8" fill="#d9dfdc"/><path d="m28 77 18-13 35-8 35-32h68l43 33 39 10 11 15-4 15H28Z" fill="#467b70"/><path d="m93 55 27-25h59l32 25Z" fill="#dce8e9"/><path d="m151 30-2 25m-55 4h117" stroke="#244e46" strokeWidth="3"/><path d="m31 82 27 1m186-10 24 7" stroke="#edeee7" strokeWidth="5"/><path d="M99 65h105m-48-2v23m-42-18h9m53 0h9" stroke="#27594f" strokeWidth="2"/><path d="M32 95h235" stroke="#274f48" strokeWidth="5"/><circle cx="80" cy="94" r="20" fill="#283330"/><circle cx="80" cy="94" r="10" fill="#c1ccc8"/><circle cx="80" cy="94" r="4" fill="#7c938c"/><circle cx="225" cy="94" r="20" fill="#283330"/><circle cx="225" cy="94" r="10" fill="#c1ccc8"/><circle cx="225" cy="94" r="4" fill="#7c938c"/><path d="m31 71 48-10M215 62l44 11" stroke="#9ab5ad" strokeWidth="2" opacity=".7"/></svg>;
}

export function FilterArt() {
  return <svg viewBox="0 0 280 150" className="demo-filter-art" aria-label="Illustration of a cabin air filter" role="img"><ellipse cx="140" cy="129" rx="108" ry="10" fill="#ddd8ce"/><path d="m32 81 82-58 138 39-80 66Z" fill="#596962"/><path d="m32 81 140 47v12L32 94Zm140 47 80-66v12l-80 66Z" fill="#364a42"/><path d="m45 79 71-47 120 33-66 54Z" fill="#f6f2e6"/>{Array.from({length:16},(_,i)=><path key={i} d={`m${51+i*7.6} ${82+i*2.5} 68-48`} stroke={i%2?"#a4aaa0":"#dfdfd3"} strokeWidth="4"/>)}<path d="m45 79 125 40 66-54" stroke="#849087" strokeWidth="3" fill="none"/></svg>;
}

export function ShopArt({ variant = 0 }: { variant?: number }) {
  const accent = ["#477c70", "#7685a1", "#b08967"][variant];
  return <svg viewBox="0 0 120 74" className="demo-shop-art" aria-hidden="true"><path d="M4 66h112" stroke="#ced6d0" strokeWidth="3"/><path d="M16 30h88v35H16Z" fill="#f7f8f4" stroke="#bdc9bf"/><path d="m11 30 10-18h78l10 18Z" fill={accent}/><path d="M25 40h24v25H25Zm45 0h24v25H70Z" fill="#d6dfd9"/><path d="M31 42h12m-12 6h12m33-6h12m-12 6h12" stroke="#acbbb2" strokeWidth="2"/><path d="M54 36h12v29H54Z" fill={accent}/><circle cx="61" cy="50" r="1" fill="white"/><rect x="43" y="16" width="35" height="7" rx="1" fill="white" opacity=".8"/></svg>;
}

export function CheckArt() {
  return <svg viewBox="0 0 72 72" className="demo-check-art" aria-hidden="true"><circle cx="36" cy="36" r="32" fill="#e6f0e8"/><circle cx="36" cy="36" r="23" fill="#39755b"/><path d="m24 36 8 8 17-18" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
