import {portfolioAssets} from './portfolioAssets.js';
let energyId=0;
export function HologramPlaceholder(name){
 const id=`placeholder-${++energyId}`;
 return `<span class="abstract-hologram" role="img" aria-label="${name} holographic placeholder; artwork awaiting input"><svg viewBox="0 0 140 260" aria-hidden="true"><defs><clipPath id="${id}"><path d="M70 18Q102 18 108 55L112 92 128 119 106 224 70 245 34 224 12 119 28 92 32 55Q38 18 70 18Z"/></clipPath></defs><path class="placeholder-contour" d="M70 18Q102 18 108 55L112 92 128 119 106 224 70 245 34 224 12 119 28 92 32 55Q38 18 70 18Z"/><g clip-path="url(#${id})" class="placeholder-texture"><path d="M32 0Q112 40 32 80T32 160 32 240M108 0Q28 40 108 80T108 160 108 240"/><path d="M42 20H98M32 60H108M42 100H98M32 140H108M42 180H98M32 220H108"/></g><g class="placeholder-fragments"><rect x="17" y="126" width="18" height="2"/><rect x="103" y="182" width="20" height="3"/><rect x="90" y="75" width="10" height="2"/></g></svg><span class="placeholder-mode">${name.toUpperCase()}<small>ARTWORK SLOT / AWAITING PNG</small></span></span>`;
}
// Abstract interface energy, not character artwork: one component shared across chambers.
export function AlienEnergyMorph(variant='hero'){
 const id=`energy-cutout-${++energyId}`;
 return `<svg class="alien-energy energy-${variant}" viewBox="0 0 600 850" aria-hidden="true"><defs><mask id="${id}"><rect width="600" height="850" fill="white"/><path d="M80 0C100 110 360 80 325 180S80 260 240 370 435 465 300 550 235 700 360 850H480C300 650 510 540 435 420S445 230 380 120 200 85 220 0Z" fill="black"/><ellipse cx="140" cy="350" rx="38" ry="74" fill="black" transform="rotate(-32 140 350)"/><circle cx="368" cy="640" r="26" fill="black"/><circle cx="262" cy="146" r="17" fill="black"/></mask></defs><g class="energy-mass" mask="url(#${id})"><path d="M100-40C200 85 405 25 400 180S280 290 465 370 430 550 470 630 380 740 550 900H210C170 780 45 820 105 650S210 550 85 445 150 260 130 160 30 100 100-40Z" fill="#79ff00"/><path d="M120 0C65 165 240 210 195 355S350 460 250 610 210 725 340 850" fill="none" stroke="#d7ff9e" stroke-width="5"/><path d="M155 95C320 130 410 90 365 250S370 510 420 600" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/></g><g class="energy-droplets" fill="#b6ff45"><ellipse cx="60" cy="315" rx="9" ry="20" transform="rotate(-28 60 315)"/><circle cx="460" cy="270" r="8"/><circle cx="155" cy="575" r="5"/><ellipse cx="520" cy="610" rx="6" ry="14"/><circle cx="82" cy="750" r="10"/></g></svg>`;
}
function mechanicalFrame(){return `<span class="mechanical-housing" aria-hidden="true"><i class="metal-rim"></i><i class="selector-rim"></i><i class="glass-reflection"></i>${[0,90,180,270].map(angle=>`<b class="device-bolt" style="--bolt-angle:${angle}deg"></b>`).join('')}</span>`;}
function circuit(){return `<svg class="bio-circuit" viewBox="0 0 500 260" preserveAspectRatio="none" aria-hidden="true"><g fill="none"><path d="M0 210H45Q70 210 70 180V130Q70 100 105 100H185Q220 100 225 60T270 25H500M70 160H150Q180 160 185 195T225 225H410M225 60H325Q355 60 355 100V170H500"/><path class="circuit-signal" d="M0 210H45Q70 210 70 180V130Q70 100 105 100H185Q220 100 225 60T270 25H500"/></g><g class="circuit-nodes"><circle cx="70" cy="160" r="4"/><circle cx="225" cy="60" r="4"/><circle cx="355" cy="170" r="4"/></g></svg>`;}
export function enhanceVisuals({DNAHelix,availableAssets,symbol,hydrateAssets}){
 document.body.classList.add('visual-enhanced');
 document.querySelectorAll('#omnitrix-core,#nav-toggle,#activate-contact,.mission-selector-symbol,.radar-core').forEach(el=>el.insertAdjacentHTML('afterbegin',mechanicalFrame()));
 if(availableAssets.includes(portfolioAssets.symbol))document.querySelectorAll('.device-symbol').forEach(svg=>{const img=new Image();img.src=portfolioAssets.symbol;img.alt='';img.className='device-symbol supplied-symbol';svg.replaceWith(img);});
 const hero=document.querySelector('.hero'),heroCore=document.querySelector('.hero-core');
 hero.insertAdjacentHTML('afterbegin',`<div class="hero-energy-field">${AlienEnergyMorph('hero')}</div><div class="hero-halftone"></div><div class="hero-scanner-beam"></div>`);
 heroCore.insertAdjacentHTML('beforeend',`<button class="hero-activation mechanical-core" aria-label="Activate hero scanner">${mechanicalFrame()}${symbol}</button>`);
 document.querySelector('.hero-activation').onclick=()=>{hero.classList.remove('hero-activated');void hero.offsetWidth;hero.classList.add('hero-activated');setTimeout(()=>hero.classList.remove('hero-activated'),800);};
 // Deliberately non-specific, replaceable dormant slots. No generated character artwork.
 ['upgrade','humungousaur','bigChill','xlr8'].forEach((asset,i)=>hero.insertAdjacentHTML('afterbegin',`<div class="dormant-alien dormant-${i}" data-asset="${asset}" data-alt="" aria-hidden="true"></div>`));
 hydrateAssets(hero);
 [['.records-section','diamondhead'],['.archive-section#archive','bigChill'],['.toolkit-section','upgrade']].forEach(([selector,asset])=>{const section=document.querySelector(selector);if(section){section.insertAdjacentHTML('afterbegin',`<div class="atmospheric-alien atmosphere-${asset}" data-asset="${asset}" data-alt="" aria-hidden="true"></div>`);hydrateAssets(section);}});
 document.querySelector('.transformation-overlay').insertAdjacentHTML('beforeend','<div class="transition-alien" data-asset="xlr8" data-alt="" aria-hidden="true"></div>');
 hydrateAssets(document.querySelector('.transformation-overlay'));
 document.querySelector('.ability-device').insertAdjacentHTML('beforeend',`<div class="matrix-energy-field">${AlienEnergyMorph('matrix')}</div>`);
 document.querySelector('.contact-radar').insertAdjacentHTML('beforeend',`<div class="contact-energy-field">${AlienEnergyMorph('contact')}</div><div class="orbit-dna">${DNAHelix()}</div><svg class="signal-wave" viewBox="0 0 400 50" aria-hidden="true"><path d="M0 25H70l12-10 12 20 14-30 15 40 12-20H210l12-8 10 16 10-8H400"/></svg>`);
 document.querySelector('.profile-scanner').insertAdjacentHTML('beforeend',`<div class="profile-dna-overlay dna">${DNAHelix()}</div><svg class="scan-wireframe" viewBox="0 0 400 600" aria-hidden="true"><g fill="none" stroke="currentColor"><ellipse cx="200" cy="185" rx="70" ry="93"/><ellipse cx="200" cy="185" rx="35" ry="93"/><ellipse cx="200" cy="185" rx="70" ry="40"/><path d="M120 360Q200 300 280 360L315 525H85Z M200 278V525 M120 360L280 470M280 360L120 470 M85 525L200 320 315 525"/></g></svg>`);
 document.querySelectorAll('.scanner-overlay span').forEach((el,i)=>el.textContent=['SUBJECT // PDY-06 · VERIFIED','ANALYTICAL PATTERN // DETECTED','RESEARCH DATA // FOUND'][i]);
 document.querySelectorAll('.tool').forEach(el=>el.insertAdjacentHTML('afterbegin',circuit()));
 document.querySelectorAll('.mission-image').forEach(el=>el.insertAdjacentHTML('beforeend',`<div class="mission-corner-brackets" aria-hidden="true"></div><svg class="mission-waveform" viewBox="0 0 160 30" aria-hidden="true"><path d="M0 15H30l8-8 8 16 8-20 8 12H95l8-12 8 20 8-8H160"/></svg>`));
 document.querySelector('.records-section').insertAdjacentHTML('afterbegin',`<svg class="crystal-environment" viewBox="0 0 500 600" aria-hidden="true"><g stroke="#b6ff45" stroke-width="2"><path d="M270 0L470 150 410 480 250 600 90 410 30 180Z" fill="#79ff0013"/><path d="M270 0L250 600 30 180 470 150 90 410 410 480Z" fill="none"/><path d="M30 180L260 275 470 150M90 410L260 275 410 480" fill="none"/></g></svg>`);
 document.querySelectorAll('.achievement .crystal').forEach(el=>el.insertAdjacentHTML('afterend',`<span class="crystal-shards" aria-hidden="true"><i></i><i></i><i></i></span>`));
 const recordObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('record-revealed');recordObserver.unobserve(entry.target);}});},{threshold:.45});document.querySelectorAll('.achievement').forEach(el=>recordObserver.observe(el));
 document.querySelector('.transformation-overlay').insertAdjacentHTML('afterbegin',`<div class="transition-energy">${AlienEnergyMorph('transition')}</div><div class="transition-dna dna">${DNAHelix()}</div>`);
 document.querySelectorAll('.memory-caption').forEach(el=>el.insertAdjacentHTML('beforeend','<b class="archive-detected">XEM KHOẢNH KHẮC</b>'));
 document.querySelectorAll('.dna').forEach(el=>el.querySelectorAll('.node').forEach((node,i)=>{node.style.setProperty('--node-delay',`${(i%50)*.055}s`);}));
 enhanceEnvironments(DNAHelix);
}

function enhanceEnvironments(DNAHelix){
 document.querySelectorAll('main section').forEach(section=>{
  const id=section.id;
  const structure=id==='profile'?'<i class="environment-panel"></i><i class="environment-ribs"></i><i class="environment-orbit"></i>':id==='missions'?'<i class="environment-wall"></i><i class="environment-monitor"></i><i class="environment-ribs"></i>':id==='records'?'<i class="environment-facet"></i><i class="environment-facet facet-secondary"></i>':id==='toolkit'?circuit():['home','ability','contact'].includes(id)?'<i class="environment-orbit"></i><i class="environment-orbit orbit-distant"></i>':'';
  const dna=['profile','ability'].includes(id)?`<div class="environment-dna dna">${DNAHelix()}</div>`:'';
  const energy=['profile','missions','toolkit','archive'].includes(id)?`<div class="environment-energy">${AlienEnergyMorph(id)}</div>`:'';
  section.insertAdjacentHTML('afterbegin',`<div class="environment environment-${id}" aria-hidden="true"><div class="environment-haze"></div><div class="environment-grid"></div><div class="environment-architecture">${structure}</div>${dna}${energy}<div class="environment-dust"></div><div class="environment-texture"></div></div>`);
  if(['home','ability','profile','toolkit'].includes(id)){
   const chamber=`<div class="bio-suspension"><div class="bio-glass"><div class="bio-fluid"><i class="bio-meniscus"></i>${Array.from({length:7},(_,i)=>`<i class="bio-bubble" style="--bubble-x:${15+(i*29)%70}%;--bubble-delay:${-i*3}s;--bubble-size:${3+i%3*2}px"></i>`).join('')}</div><i class="bio-glass-seam"></i></div></div>`;
   const cells=`<svg class="molecular-suspension" viewBox="0 0 320 300"><g class="membrane-group" fill="#7dbb6810" stroke="#9fce8938" stroke-width="1"><ellipse cx="165" cy="145" rx="82" ry="65"/><ellipse cx="165" cy="145" rx="72" ry="55"/><ellipse cx="173" cy="140" rx="23" ry="20" fill="#90ce7520"/><path d="M86 127Q166 60 241 159M91 168Q161 219 233 111" fill="none" stroke="#79b66620"/><circle cx="60" cy="59" r="18"/><circle cx="60" cy="59" r="6"/><circle cx="261" cy="246" r="27"/><circle cx="261" cy="246" r="10"/><path d="M73 74L104 103M222 185L244 225" stroke-dasharray="2 6"/><circle cx="101" cy="237" r="3"/><circle cx="253" cy="64" r="4"/></g></svg>`;
   section.querySelector('.environment').insertAdjacentHTML('beforeend',chamber+cells+(id==='home'?`<div class="dna environment-dna dna-fragment">${DNAHelix()}</div>`:''));
  }
 });
 document.querySelectorAll('.environment-dna .node').forEach((node,i)=>node.style.setProperty('--node-delay',`${(i%50)*.065}s`));
}
