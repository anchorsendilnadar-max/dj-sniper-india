// DJ SNIPER INDIA - Menu + Music Player + Year
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
if(menuToggle){
  menuToggle.addEventListener('click', ()=>{
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    if(!isOpen){ nav.style.position='absolute'; nav.style.top='72px'; nav.style.left='0'; nav.style.right='0'; nav.style.background='rgba(0,0,0,0.95)'; nav.style.flexDirection='column'; nav.style.padding='20px 28px'; nav.style.borderBottom='1px solid rgba(255,255,255,0.08)'; }
  });
}
document.addEventListener('scroll', ()=>{ if(window.scrollY>20) header.style.background='rgba(0,0,0,0.92)'; else header.style.background='rgba(0,0,0,0.75)'; });

document.getElementById('year').textContent = new Date().getFullYear();

// MUSIC PLAYER LOGIC
document.querySelectorAll('.track').forEach(track=>{
  const btn = track.querySelector('.playBtn');
  const audio = track.querySelector('audio');
  const src = track.dataset.src;
  if(src) audio.src = src;
  btn.addEventListener('click', ()=>{
    const isPlaying = !audio.paused;
    // stop all others
    document.querySelectorAll('.track audio').forEach(a=>{ a.pause(); a.currentTime=0; });
    document.querySelectorAll('.track').forEach(t=>{ t.classList.remove('playing'); t.querySelector('.playBtn').textContent='▶'; });
    if(!isPlaying){
      audio.play().catch(()=>{ alert('MP3 file अजून upload केलेला नाही. /music/ folder मध्ये '+src+' टाका.'); });
      track.classList.add('playing');
      btn.textContent='❚❚';
    }
  });
  audio.addEventListener('ended', ()=>{ track.classList.remove('playing'); btn.textContent='▶'; });
});

function playDemo(btn){ btn.closest('.track').querySelector('.playBtn').click(); }
