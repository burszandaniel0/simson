setInterval(() => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const start = new Date(currentYear, 5, 20);
  const end = new Date(currentYear, 8, 1);
  let diff = end - now;
  if (diff < 0) {
    diff = 0;
  }
  let rem = diff;
  const mo = Math.floor(rem / 2629800000); rem %= 2629800000;
  const wk = Math.floor(rem / 604800000); rem %= 604800000;
  const d = Math.floor(rem / 86400000); rem %= 86400000;
  const h = Math.floor(rem / 3600000); rem %= 3600000;
  const m = Math.floor(rem / 60000); rem %= 60000;
  const s = (rem / 1000).toFixed(3).padStart(6, "0");
  const daysLeft = (diff / 86400000).toFixed(2);
  const totalDuration = end - start;
  const elapsed = now - start;
  let percent = 0;
  if (elapsed > 0) {
    percent = (elapsed / totalDuration) * 100;
  }
  if (percent > 100) {
    percent = 100;
  }
  const n = document.getElementById("countdown");
  const t = document.getElementById("totalcount");
  const p = document.getElementById("progressbar");
  const pr = document.getElementById("percentage");
  if (n) n.textContent = `${mo}hó ${wk}hét ${d}n ${h}ó ${m}p ${s}mp`;
  if (t) t.textContent = `${daysLeft} hátralévő nap`;
  if (p) p.value = percent;
  if (pr) pr.textContent = `${percent.toFixed(2)}% felhasználva`;
}, 33);