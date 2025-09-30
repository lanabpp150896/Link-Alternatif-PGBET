// Tahun di footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simulasi kirim form
const btnKirim = document.getElementById('kirim');
if (btnKirim) {
  btnKirim.addEventListener('click', function(){
    const nama  = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const status = document.getElementById('status');

    if(!nama || !email){
      status.textContent = 'Lengkapi nama & email dulu ya.';
      status.style.borderColor = 'rgba(255,255,255,.3)';
      return;
    }
    status.textContent = 'Mengirim…';

    // Demo sukses setelah 700ms
    setTimeout(()=>{
      status.textContent = 'Terkirim! (demo)';
      status.style.borderColor = 'transparent';
      status.style.background = 'linear-gradient(135deg, #35d399, #7df3ff)';
      document.getElementById('contactForm').reset();
    }, 700);
  });
}

// Aksesibilitas kecil: fokus saat pindah hash
window.addEventListener('hashchange', ()=>{
  const id = location.hash.replace('#','');
  if(!id) return;
  const el = document.getElementById(id);
  if(el){ el.tabIndex = -1; el.focus({preventScroll:true}); }
});