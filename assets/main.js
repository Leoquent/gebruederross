// Nav scroll state
const nav=document.getElementById('nav');
if (nav) {
  // ⚡ Bolt Optimization: Throttle resize and scroll events using requestAnimationFrame
  // Impact: Reduces main thread blocking by ensuring DOM updates only happen once per render frame
  // instead of firing continuously, resulting in significantly smoother scrolling and resizing performance.
  let letzteY = scrollY;
  let windowWidth = innerWidth;
  let scrollTicking = false;
  let resizeTicking = false;

  addEventListener('resize', () => {
    if (!resizeTicking) {
      window.requestAnimationFrame(() => {
        windowWidth = innerWidth;
        resizeTicking = false;
      });
      resizeTicking = true;
    }
  }, { passive: true });

  addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const y = scrollY;
        nav.classList.toggle('scrolled', y > 40);

        // Kopfzeile auf Mobil beim Herunterscrollen ausblenden (schneidet sonst Text durch)
        if (windowWidth > 640 || nav.classList.contains('menu-open')) {
          nav.classList.remove('nav-hidden');
        } else if (y > letzteY + 8 && y > 140) {
          nav.classList.add('nav-hidden');
        } else if (y < letzteY - 8) {
          nav.classList.remove('nav-hidden');
        }
        letzteY = y;

        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}

// Mobile menu
const burger=document.getElementById('burger'),links=document.getElementById('navLinks');
if (burger && links && nav) {
  burger.addEventListener('click',()=>{links.classList.toggle('open');nav.classList.toggle('menu-open')});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');nav.classList.remove('menu-open')}));
}

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Mobile-Aufklapper: ab 641px immer offen (Desktop unverändert), darunter zu.
// Ohne JavaScript bleibt alles offen (open im Markup) – nichts verschwindet.
const folds=document.querySelectorAll('details.fold');
const desktop=matchMedia('(min-width:641px)');
if (folds.length > 0) {
  function syncFolds(){folds.forEach(d=>{d.open=desktop.matches})}
  folds.forEach(d=>d.addEventListener('toggle',()=>{
    if(d.open){d.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
  }));
  desktop.addEventListener('change',syncFolds);
  addEventListener('DOMContentLoaded',syncFolds);
  addEventListener('load',syncFolds);
  syncFolds();
}

// Leistungen: am Desktop Karten (alle offen), auf Mobil ein Akkordeon mit nur einer offenen Zeile.
// Ohne JavaScript bleiben alle Zeilen offen und damit lesbar.
const accs=document.querySelectorAll('details.svc-acc');
const kannName=('name' in HTMLDetailsElement.prototype);
if (accs.length > 0) {
  function syncAcc(){
    const mobil=!desktop.matches;
    accs.forEach(d=>{
      if(mobil){ if(kannName){d.setAttribute('name','leistungen')} } else { d.removeAttribute('name') }
      d.open=!mobil;
    });
  }
  if(!kannName){
    accs.forEach(d=>d.addEventListener('toggle',()=>{
      if(d.open&&!desktop.matches){accs.forEach(o=>{if(o!==d)o.open=false})}
    }));
  }
  accs.forEach(d=>d.addEventListener('toggle',()=>{
    if(d.open){d.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
  }));
  desktop.addEventListener('change',syncAcc);
  addEventListener('DOMContentLoaded',syncAcc);
  addEventListener('load',syncAcc);
  syncAcc();
}
