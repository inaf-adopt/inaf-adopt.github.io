(async function(){
  // Source content is English. Machine translation is optional and provided by GTranslate.
  window.gtranslateSettings={default_language:'en',native_language_names:true,languages:["en","it","af","sq","am","ar","hy","az","eu","be","bn","bs","bg","ca","ceb","ny","zh-CN","zh-TW","co","hr","cs","da","nl","eo","et","tl","fi","fr","fy","gl","ka","de","el","gu","ht","ha","haw","iw","hi","hmn","hu","is","ig","id","ga","ja","jw","kn","kk","km","ko","ku","ky","lo","la","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mn","my","ne","no","ps","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd","si","sk","sl","so","es","su","sw","sv","tg","ta","te","th","tr","uk","ur","uz","vi","cy","xh","yi","yo","zu"],wrapper_selector:'.gtranslate_wrapper',select_language_label:'Translate (automatic)',horizontal_position:'inline'};
  // GTranslate honors .notranslate. Wrap proper names in inline spans, leaving
  // the surrounding sentence available for automatic translation.
  // Team member names can also be listed in ADOPT_PEOPLE or tagged data-person-name.
  const properNames = [
    ...(window.ADOPT_PROTECTED_NAMES || []),
    ...((window.ADOPT_PEOPLE || []).map(person => person.name).filter(Boolean))
  ];
  const escapedNames = [...new Set(properNames)].filter(Boolean)
    .sort((a,b)=>b.length-a.length)
    .map(name=>name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  const nameRegex = escapedNames.length
    ? new RegExp('(?<![\\p{L}\\p{N}_])(?:'+escapedNames.join('|')+')(?![\\p{L}\\p{N}_])','giu')
    : null;
  function protectProperNames(root){
    if(!root) return;
    // Future staff-directory entries are protected even if not in the list.
    if(root.querySelectorAll){
      root.querySelectorAll('[data-person-name], .person-name, .team-member-name, .member-name')
        .forEach(el=>{el.classList.add('notranslate');el.setAttribute('translate','no');el.setAttribute('lang','en')});
    }
    if(!nameRegex) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        const parent = node.parentElement;
        if(!parent || !node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
        if(parent.closest('script,style,noscript,textarea,select,option,.notranslate,[translate="no"],.gtranslate_wrapper,[contenteditable="true"]'))return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes=[];
    while(walker.nextNode())textNodes.push(walker.currentNode);
    for(const node of textNodes){
      const text = node.nodeValue;
      const matches = [...text.matchAll(nameRegex)];
      if(!matches.length)continue;
      const fragment = document.createDocumentFragment();
      let previous = 0;
      for(const match of matches){
        const index = match.index;
        if(index > previous)fragment.append(document.createTextNode(text.slice(previous,index)));
        const span = document.createElement('span');
        span.className='notranslate';
        span.setAttribute('translate','no');
        span.setAttribute('lang','en');
        span.textContent=match[0];
        fragment.append(span);
        previous = index + match[0].length;
      }
      if(previous < text.length)fragment.append(document.createTextNode(text.slice(previous)));
      node.replaceWith(fragment);
    }
  }
  const path=location.pathname.split('/').pop()||'index.html';
  const route=(name)=>(path===name||(name==='people.html'&&document.body.classList.contains('member-page'))) ? ' aria-current="page"' : '';
  const navLinks=[['index.html','Home'],['research.html','Research'],['projects.html','Projects'],['facilities.html','Facilities'],['opportunities.html','Opportunities'],['people.html','People'],['publications.html','Publications'],['contact.html','Contact'],['feedback.html','Feedback']];
  const header=document.querySelector('[data-header]');
  if(header) header.innerHTML=`<div class="nav-shell container"><a class="identity" href="index.html" aria-label="Home"><span class="brand-icon"><img src="assets/adopt-mark.svg" alt="" /></span><span class="identity-type"><strong class="notranslate" translate="no">ADOPT<span class="brand-period">.</span></strong><small>INAF · PADOVA</small></span></a><nav class="desktop-nav" aria-label="Main navigation">${navLinks.map(([url,label])=>`<a href="${url}"${route(url)}>${label}</a>`).join('')}</nav><div class="nav-right"><div class="nav-tools"><button type="button" class="search-nav-link header-search-toggle" aria-label="Search this website" title="Search this website" aria-expanded="false" aria-controls="header-search-panel"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button><div class="language-nav" role="group" aria-label="Automatic translation"><span class="translation-label">Auto-translate</span><svg class="language-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M3.5 12h17M12 3c-5 5-5 13 0 18m0-18c5 5 5 13 0 18" stroke="currentColor" stroke-width="1.3" fill="none"/></svg><div class="gtranslate_wrapper notranslate" translate="no"></div><span class="gtranslate-fallback" role="status" title="Automatic translation is temporarily unavailable">English</span></div></div><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></div></div><nav id="mobile-menu" class="mobile-nav" aria-label="Mobile navigation" hidden>${navLinks.map(([url,label])=>`<a href="${url}"${route(url)}>${label} <span aria-hidden="true">↗</span></a>`).join('')}</nav>`;
  // A single accessible search field shared by desktop and mobile.
  if(header)header.insertAdjacentHTML('beforeend',
    '<div class="header-search-panel" id="header-search-panel" aria-label="Search ADOPT" role="region" hidden>'+
    '<form class="header-search-form" role="search" autocomplete="off">'+
    '<label class="sr-only" for="header-search-input">Search the ADOPT website</label>'+
    '<div class="header-search-input-wrap">'+
    '<svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><circle cx="10.8" cy="10.8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'+
    '<input id="header-search-input" name="q" type="search" maxlength="120" enterkeyhint="search" placeholder="Search people, projects, papers…" aria-describedby="header-search-help">'+
    '<button type="button" class="header-search-close" aria-label="Close search">&times;</button>'+
    '</div></form>'+
    '<p class="header-search-help" id="header-search-help">Search this website without leaving the page.</p>'+
    '<div class="header-search-results" aria-live="polite" aria-label="Search results"></div></div>');
  const footer=document.querySelector('[data-footer]');
  if(footer)footer.innerHTML=`<div class="container"><div class="footer-top"><div><div class="footer-brand"><img src="assets/adopt-mark.svg" alt=""/><span class="notranslate" translate="no">ADOPT<span class="brand-period">.</span></span></div><p>Adaptive Optics and Astronomical Instrumentation Group.<br/>INAF · Osservatorio Astronomico di Padova</p><a class="footer-inaf-mark" href="https://www.inaf.it/" target="_blank" rel="noopener noreferrer" aria-label="INAF — Istituto Nazionale di Astrofisica"><img src="assets/logos/inaf-logo.webp" alt="INAF logo" width="130" height="125" loading="lazy" decoding="async"></a></div><div class="footer-links"><div><h4>Explore</h4><a href="research.html">Research</a><a href="projects.html">Projects</a><a href="facilities.html">Facilities</a><a href="opportunities.html">Opportunities</a><a href="people.html">People</a></div><div><h4>Resources</h4><a href="publications.html">Publications</a><a href="contact.html">Contact</a><a href="feedback.html">Website feedback</a><a href="https://www.oapd.inaf.it/" target="_blank" rel="noopener noreferrer">INAF OAPd ↗</a></div></div></div><div class="footer-bottom"><span>ADOPT · INAF Osservatorio Astronomico di Padova</span><span><a href="member-login.html">Member profile updates</a> · <a href="credits.html">Credits &amp; sources</a></span></div></div>`;
  protectProperNames(document.body);
  // Third-party translators insert their <select> asynchronously. Provide an
  // accessible name for screen-reader users whenever the control appears.
  const translateContainer=header?.querySelector('.gtranslate_wrapper');
  if(translateContainer){
    const labelTranslationControl=()=>{
      translateContainer.querySelectorAll('select').forEach(select=>{
        select.setAttribute('aria-label','Choose language — automatic translation');
        select.setAttribute('title','Choose language — automatic translation');
      });
    };
    labelTranslationControl();
    const languageObserver=new MutationObserver(labelTranslationControl);
    languageObserver.observe(translateContainer,{childList:true,subtree:true});
  }
  const btn=header?.querySelector('.menu-toggle'),menu=header?.querySelector('#mobile-menu');
  btn?.addEventListener('click',()=>{const open=btn.getAttribute('aria-expanded')!=='true';btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.hidden=!open;header.classList.toggle('is-open',open)});
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.hidden=true;btn.setAttribute('aria-expanded','false');header.classList.remove('is-open')}));
  // Close the expanded mobile navigation with Escape and restore keyboard focus.
  menu?.addEventListener('keydown',event=>{
    if(event.key==='Escape' && !menu.hidden){
      menu.hidden=true;
      btn?.setAttribute('aria-expanded','false');
      btn?.setAttribute('aria-label','Open navigation');
      header?.classList.remove('is-open');
      btn?.focus();
    }
  });
  // Build the shared header and translation widget before awaiting profile data.
  // GTranslate's deferred script needs both settings and a DOM wrapper already present.
  await window.ADOPT_PROFILE_READY;
  protectProperNames(document.body);
  // Searchable directory sourced from people-data.js. All text remains readable without images.
  const people=window.ADOPT_PEOPLE||[];
  const peopleGrid=document.querySelector('[data-people-grid]');
  if(peopleGrid){
    const peopleSearch=document.querySelector('#people-search');
    const peopleCount=document.querySelector('[data-people-count]');
    const peopleEmpty=document.querySelector('[data-people-empty]');
    const initials=(name)=>name.trim().split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0].toUpperCase()).join('');
    const clean=(value)=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const projectNameToId={
      'SHARK-NIR':'shark','MAVIS':'mavis','MORFEO':'morfeo','EKARUS':'ekarus','Mezzocielo':'mezzocielo',
      'MATTO':'matto','NIRVANA-VIS':'nirvana','PLATO':'plato','VSTPol':'vstpol','INGOT':'ingot','SOXS':'soxs',
      'Space Debris':'space-debris','TRACE-AO':'trace-ao','OSCAR':'oscar','TDT':'tdt','MICADO Science':'micado-science',
      'Einstein Telescope':'einstein-telescope','HAYDIN':'haydin','LBCmos':'lbcmos','LINC-NIRVANA':'linc-nirvana'
    };
    function personCard(p){
      const safeName=clean(p.name),letters=clean(initials(p.name));
      const photo=p.photo?`<img class="team-photo" src="${clean(p.photo)}" alt="Portrait of ${safeName}" loading="lazy" decoding="async"${p.photoPosition?` style="object-position:${clean(p.photoPosition)}"`:''} onerror="this.hidden=true;this.parentElement.classList.add('photo-unavailable')"/>`:'';
      const chips=(p.projects||[]).slice(0,5).map(name=>{const id=projectNameToId[name];return id?`<a class="team-chip notranslate" translate="no" href="project-${encodeURIComponent(id)}.html">${clean(name)}</a>`:`<span class="team-chip notranslate" translate="no">${clean(name)}</span>`}).join('');
      const refs=(p.links||[]).slice(0,4).filter(x=>/^https:\/\//i.test(x.url)).map(x=>`<a class="team-reference" href="${clean(x.url)}" target="_blank" rel="noopener noreferrer">${clean(x.label)}<span aria-hidden="true"> ↗</span></a>`).join('');
      const orcidCard=p.orcid?`<a class="team-reference team-orcid-link" href="https://orcid.org/${clean(p.orcid)}" target="_blank" rel="noopener noreferrer" aria-label="ORCiD profile for ${safeName}">ORCiD <span aria-hidden="true">↗</span></a>`:'';
      const more=`<a class="team-profile-link" href="${encodeURIComponent(p.id)}.html">View profile <span aria-hidden="true">→</span></a>`;
      
      return `<article class="team-card" id="${clean(p.id)}"><div class="team-portrait${p.photo?' has-photo':' photo-unavailable'}"><span class="team-initials" aria-hidden="true">${letters}</span>${photo}</div><div class="team-card-content"><div class="team-field">${clean(p.tag)}</div><h3 class="notranslate" translate="no"><a href="${encodeURIComponent(p.id)}.html">${safeName}</a></h3><p class="team-role">${clean(p.role)}</p><p class="team-bio">${clean(p.bio)}</p>${more}${orcidCard}${chips?`<div class="team-projects" aria-label="Associated research projects">${chips}</div>`:''}</div></article>`;
    }
    function renderPeople(){
      const q=(peopleSearch?.value||'').trim().toLocaleLowerCase();
      const matches=people.filter(p=>[p.name,p.role,p.bio,p.longBio||'',p.tag,...(p.projects||[])].join(' ').toLocaleLowerCase().includes(q));
      peopleGrid.innerHTML=matches.map(personCard).join('');
      peopleCount.textContent=matches.length+' of '+people.length+' group members';
      peopleEmpty.hidden=matches.length>0;
      protectProperNames(peopleGrid);
    }
    peopleSearch?.addEventListener('input',renderPeople);
    renderPeople();
    if(location.hash){requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'start'}));}
  }
  const proj=window.ADOPT_PROJECTS||[];
  const currentProjects=proj.filter(p=>p.status!=='past');
  const pastProjects=proj.filter(p=>p.status==='past');
  function projectCard(p,i){
    const pending=!!p.pending;
    const projectPicture=p.id==='soxs'?'<img class="soxs-project-photo" src="assets/photos/soxs.jpg" alt="SOXS spectrograph installed on the New Technology Telescope at La Silla" width="1280" height="964" loading="lazy" decoding="async">':`<span class="art-orbit art-orbit-one"></span><span class="art-orbit art-orbit-two"></span><span class="art-core">${p.icon}</span>`;
    return `<a class="project-card reveal${pending?' project-card-pending':''}" style="--stagger:${(i%6)*75}ms" href="project-${encodeURIComponent(p.id)}.html"><div class="project-art art-${p.accent}${p.id==='soxs'?' project-art-soxs':''}">${projectPicture}<span class="art-mini">${p.status==='past'?'PREVIOUS INVOLVEMENT':'RESEARCH PROJECT'}</span></div><div class="project-info"><span class="project-meta">${p.overline}</span><div class="project-card-title"><h3>${p.name}</h3><span class="circle-arrow" aria-hidden="true">↗</span></div><p>${p.blurb}</p></div></a>`;
  }
  const featured=document.querySelector('[data-featured-projects]');
  if(featured){featured.innerHTML=['mavis','morfeo','soxs'].map(id=>currentProjects.find(p=>p.id===id)).filter(Boolean).map(projectCard).join('');protectProperNames(featured);}
  const grid=document.querySelector('[data-project-grid]');
  const pastGrid=document.querySelector('[data-past-project-grid]');
  if(grid&&pastGrid){
    const curSection=document.querySelector('[data-current-projects-section]');
    const pastSection=document.querySelector('[data-past-projects-section]');
    const count=document.querySelector('[data-project-count]');
    function render(filter){
      const showCurrent=filter!=='Past';
      const showPast=filter==='All'||filter==='Past';
      const entries=showCurrent?currentProjects.filter(p=>filter==='All'||p.category===filter):[];
      grid.innerHTML=entries.map(projectCard).join('');
      pastGrid.innerHTML=showPast?pastProjects.map(projectCard).join(''):'';
      curSection.hidden=!showCurrent;
      pastSection.hidden=!showPast;
      document.querySelector('[data-current-total]').textContent=entries.length+' projects';
      const n=entries.length+(showPast?pastProjects.length:0);
      count.textContent=`Showing ${n} ${n===1?'project':'projects'}${showPast&&showCurrent?' · '+currentProjects.length+' main directory · '+pastProjects.length+' previous involvement':''}`;
      protectProperNames(grid);protectProperNames(pastGrid);observeReveals();
    }
    document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
      document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.remove('active');el.setAttribute('aria-pressed','false')});
      b.classList.add('active');b.setAttribute('aria-pressed','true');render(b.dataset.filter);
    }));
    render('All');
  }
  const detail=document.querySelector('[data-project-detail]');
  if(detail){
    const id=detail.dataset.projectId||new URLSearchParams(location.search).get('id');
    const p=proj.find(x=>x.id===id);
    const escapeText=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const referenceLink=(label,url)=>{
      try{
        const parsed=new URL(url);
        if(!['https:','http:'].includes(parsed.protocol))return '';
        return `<li><a href="${escapeText(parsed.href)}" target="_blank" rel="noopener noreferrer">${escapeText(label)} <span aria-hidden="true">↗</span></a></li>`;
      }catch{return ''}
    };
    if(!p){
      detail.innerHTML='<section class="container inner-hero"><p class="eyebrow">Project not found</p><h1>No project found.</h1><a class="btn btn-dark" href="projects.html">All projects ↗</a></section>';
    }else{
      document.title=p.name+' — ADOPT | INAF Padova';
      // Preserve legacy project.html?id= links, while exposing the corresponding canonical page.
      if(!detail.dataset.projectId){
        const url='https://inaf-adopt.github.io/project-'+encodeURIComponent(p.id)+'.html';
        let canonical=document.querySelector('link[rel="canonical"]');
        if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.append(canonical);}
        canonical.href=url;
        const meta=document.querySelector('meta[name="description"]');
        if(meta)meta.content=p.blurb||p.description||'';
      }
      const back=p.status==='past'?'projects.html#past-projects':'projects.html';
      const note=p.pending
        ?'<p class="project-profile-note" role="note">This project’s public identity and technical baseline still need verification. The name is retained as supplied by the research group.</p>'
        :p.partial
          ?'<p class="project-profile-note" role="note">Some links or project details are provisional. Any unconfirmed association is identified below.</p>'
          :'';
      const facility=p.telescope?`<div class="fact-block"><span>Facility / context</span><strong>${escapeText(p.telescope)}</strong></div><div class="fact-block"><span>Project context</span><strong>${escapeText(p.phase)}</strong></div><p class="source-caption">Content reviewed ${escapeText(p.reviewed)}. Project context describes the referenced work; schedules may change.</p>`:'';
      const science=Array.isArray(p.science)&&p.science.length
        ?`<ul class="project-science-list">${p.science.map(x=>`<li>${escapeText(x)}</li>`).join('')}</ul>`
        :'<p>The project science goals are being reviewed.</p>';
      const specs=Array.isArray(p.specs)&&p.specs.length
        ?`<dl class="project-specs">${p.specs.map(([name,value])=>`<div><dt>${escapeText(name)}</dt><dd>${escapeText(value)}</dd></div>`).join('')}</dl>`
        :'';
      const associatedPeople=people.filter(person=>(person.projects||[]).some(name=>name.toLowerCase()===p.name.toLowerCase()));
      const teamLinks=associatedPeople.length?`<div class="project-team"><h3>People connected with this work</h3><ul>${associatedPeople.map(person=>`<li><a href="${encodeURIComponent(person.id)}.html">${escapeText(person.name)}</a></li>`).join('')}</ul></div>`:'';
      const references=(p.refs||[]).map(([name,url])=>referenceLink(name,url)).filter(Boolean);
      if(!references.length && p.source) references.push(referenceLink('Project reference',p.source));
      const links=references.length?`<ul class="project-source-list">${references.join('')}</ul>`:'<p>No official project webpage has been confirmed for this entry yet.</p>';
      // Curated per-project bibliography, with separate research papers and contextual materials.
      // Missing entries remain visibly unverified instead of being filled with unrelated matches.
      const bibliography=(window.ADOPT_PROJECT_PAPERS||{})[p.id]||{recent:[],foundational:[]};
      const safePaperLink=(paper)=>{
        try{
          const u=new URL(paper.url);
          return ['https:','http:'].includes(u.protocol)?escapeText(u.href):'';
        }catch{return ''}
      };
      const paperItem=(item)=>{
        const href=safePaperLink(item);
        const title=escapeText(item.title);
        const label=href?`<a class="paper-title" href="${href}" target="_blank" rel="noopener noreferrer">${title} <span aria-hidden="true">↗</span></a>`:`<strong class="paper-title">${title}</strong>`;
        const metadata=`${escapeText(item.authors)} · <time datetime="${escapeText(item.year)}">${escapeText(item.year)}</time>`;
        const type=escapeText(item.type||'Research paper');
        const note=item.note?`<p class="paper-context">${escapeText(item.note)}</p>`:'';
        const doi=item.doi?`<span class="paper-doi">DOI: ${escapeText(item.doi)}</span>`:'';
        const journal=item.journal?`<div class="paper-journal">${escapeText(item.journal)}</div>`:'';
        return `<li class="project-paper"><div class="paper-meta"><span class="paper-kind">${type}</span>${doi}</div>${label}<div class="paper-byline">${metadata}</div>${journal}${note}</li>`;
      };
      const papersSection=(key,heading,emptyMessage)=>{
        const items=Array.isArray(bibliography[key])?bibliography[key]:[];
        if(!items.length)return '';
        return `<div class="paper-column"><h3>${heading} <span class="paper-count">${items.length}</span></h3>${items.length?`<ol class="paper-list">${items.map(paperItem).join('')}</ol>`:`<p class="paper-empty">${emptyMessage}</p>`}</div>`;
      };
      const extras=(bibliography.resources||[]);
      const extraSection=extras.length?`<div class="paper-resources"><h3>Related conference materials</h3><ul class="paper-list paper-list-extra">${extras.map(paperItem).join('')}</ul></div>`:'';
      const bibNote=bibliography.note?`<p class="paper-verification-note" role="note">${escapeText(bibliography.note)}</p>`:'';
      // Observational science is distinct from the instrument-design and commissioning bibliography.
      // Do not display this section unless at least one verified, directly instrument-based paper exists.
      const scienceResults=(window.ADOPT_INSTRUMENT_SCIENCE_PAPERS||{})[p.id];
      const observationalPapers=Array.isArray(scienceResults?.papers)?scienceResults.papers.filter(item=>item.title&&item.url&&safePaperLink(item)):[];
      const scienceResultsSection=observationalPapers.length
        ?`<section class="container instrument-science-publications" id="instrument-science-papers" aria-label="Published science using the ${escapeText(p.name)} instrument">

          <h2>${p.id==='cheops'?'Science with CHEOPS':'Science with the instrument'}</h2>
          <p class="project-publications-intro">${escapeText(scienceResults.intro)}</p>
          <ol class="paper-list science-results-list">${observationalPapers.map(paperItem).join('')}</ol>
          <p class="project-source-note">Selected refereed science studies, not an exhaustive or automatically updated bibliography. Papers based on multiple observatories identify the role of this instrument; inclusion does not imply authorship by ADOPT.</p>
        </section>`:'';
      const hasBibliography=[...(bibliography.recent||[]),...(bibliography.foundational||[]),...extras].length>0;
      const publications=hasBibliography?`<section class="container project-publications" aria-label="Selected project publications" id="project-publications">
        <h2>Selected publications</h2>
        <p class="project-publications-intro">${p.id==='shark'?'Featured papers first-authored by Luca Marafatto, Jacopo Farinato, Domenico Barbato and Davide Ricci, with earlier related proceedings listed separately. Observational science papers using SHARK-NIR data appear below.':p.id==='nirvana'?'Selected instrument design and development papers from 2023–2026, followed by a related conference poster. The project is still preparing for first light.':p.id==='mavis'?'Selected adaptive-optics, instrument and system-design papers, with the proposed science case listed separately. MAVIS has not yet acquired observational science data.':p.id==='mezzocielo'?'Selected optical-design, materials and engineering publications, with the ESO scientific white paper listed separately. Design goals should not be read as achieved on-sky performance.':p.id==='ekarus'?'Direct EKARUS project references are separated from research on PAPYRUS, its predecessor. First-light observations are reported by the project and INAF; they are not presented as peer-reviewed science results.':p.id==='matto'?'Selected MATTO design and early-implementation contributions, with conference abstracts and real-time-control presentations listed separately. Design specifications are not measured on-sky performance.':p.id==='soxs'?'Selected refereed instrumentation papers and proceedings documenting SOXS design, integration, control software and verification. The first-light spectrum above is a commissioning observation, not a refereed science paper.':p.id==='ingot'?'Selected optical-design, alignment, sensitivity and laboratory development papers. The concept is still under evaluation and has not demonstrated an operational on-sky performance gain.':p.id==='vstpol'?'Selected VSTPol optical-design, systems-engineering and electronics papers. Planned science programmes are not on-sky results.':p.id==='plato'?'Selected Padova-led PLATO optical design and performance-verification papers, plus mission and field-selection references. The spacecraft is in pre-launch verification and has not yet produced science observations.':p.id==='lbcmos'?'The 2026 LBCmos detector-upgrade proposal is separated from references about the original CCD instrument and the LBT observatory. Commissioned CMOS performance is not claimed.':p.id==='cheops'?'Selected telescope optical-design and AIV papers led by INAF Padova, with separate mission references and observational science results.':'Up to three recent research papers and two defining or foundational papers, selected for relevance and linked to their publisher or research archive. The bibliography was checked in October 2026 and is not an automatically updated feed.'}</p>
        <div class="paper-columns">
          ${papersSection('recent',p.id==='shark'?'Instrumentation and commissioning':p.id==='nirvana'?'Instrument development':p.id==='mezzocielo'?'Design, prototyping and materials':p.id==='ekarus'?'EKARUS references':p.id==='matto'?'Design and early implementation':p.id==='mavis'?'Engineering and instrumentation':p.id==='soxs'?'Instrumentation and verification':p.id==='ingot'?'Optical design and lab studies':p.id==='plato'?'Optics and verification' :p.id==='lbcmos'?'LBCmos concept and observatory context':p.id==='cheops'?'Telescope optical design and AIV':'Recent papers','No recent project-specific research papers could be confirmed from public sources.')}
          ${papersSection('foundational',p.id==='shark'?'Additional proceedings':p.id==='nirvana'?'Original concept':p.id==='mezzocielo'?'Concept and engineering foundations':p.id==='mavis'?'Adaptive-optics architecture':p.id==='ekarus'?'PAPYRUS predecessor':p.id==='soxs'?'Instrument concept and development':p.id==='ingot'?'Foundational work':p.id==='plato'?'Mission and scientific foundations':p.id==='lbcmos'?'Original LBC camera':p.id==='cheops'?'Mission and instrument background':'Defining papers','No defining papers have been verified for this listing yet.')}
        </div>${extraSection}${bibNote}
        <p class="project-source-note">Conference papers and preprints are identified by type. Related instruments or predecessor studies are marked explicitly; references are not automatically attributed to ADOPT authors.</p>
      </section>`:'';


      // Featured projects share a concise four-section layout.
      const isFeaturedProject=p.id==='shark'||p.id==='nirvana'||p.id==='mezzocielo'||p.id==='mavis'||p.id==='soxs'||p.id==='matto'||p.id==='ekarus'||p.id==='ingot'||p.id==='vstpol'||p.id==='plato'||p.id==='lbcmos'||p.id==='cheops';
      const storySections=(p.id==='shark'||p.id==='soxs'||p.id==='ingot')
        ? [['context','Context'],['objectives','Objectives'],['methods','Methods'],['results','Results']]
        : p.id==='mezzocielo' ? [['overview','Overview'],['science','Scientific objectives'],['optics','Optical concept and engineering'],['development','Development and status']]
        : p.id==='mavis' ? [['context','Context'],['science','Scientific objectives'],['concept','Adaptive-optics system'],['development','Development and status']]
        : p.id==='matto' ? [['overview','Overview'],['objectives','Objectives'],['architecture','Architecture and methods'],['status','Development and status']]
        : p.id==='ekarus' ? [['context','Context'],['objectives','Objectives'],['methods','System and methods'],['results','First light and outlook']]
        : p.id==='vstpol' ? [['context','Context'],['objectives','Scientific objectives'],['design','Optical design and methods'],['status','Development and status']]
        : p.id==='lbcmos' ? [['context','Context'],['objectives','Scientific objectives'],['design','Detector upgrade concept'],['status','Development and status']]
        : p.id==='plato' ? [['context','Context'],['objectives','Scientific objectives'],['optics','Optical design and payload'],['development','Development and status']]
        : p.id==='cheops' ? [['context','Context'],['objectives','Scientific objectives'],['methods','Optical design and AIV'],['results','Mission and results']]
        : [['overview','Overview'],['concept','Adaptive optics and imaging'],['science','Scientific objectives'],['development','Development and status']];
      const featuredOverview = (isFeaturedProject && p.overview) ? [
        '<section class="container shark-overview" aria-label="'+escapeText(p.name)+' project summary">',
        '<div class="shark-story">',
        storySections.map(([key,title])=>'<section class="shark-story-block"><h2>'+title+'</h2><p>'+escapeText(p.overview[key])+'</p></section>').join(''),
        '</div><aside class="shark-at-a-glance"><h2>At a glance</h2>'+specs+facility+'</aside></section>',
        ...(p.id==='shark'||p.id==='mezzocielo'||p.id==='nirvana'||p.id==='mavis'||p.id==='soxs'||p.id==='matto'||p.id==='ekarus'||p.id==='ingot'||p.id==='vstpol'||p.id==='plato'||p.id==='lbcmos'||p.id==='cheops'?[
          '<section class="container shark-figures" aria-labelledby="shark-figures-heading"><h2 id="shark-figures-heading">Figures</h2><div class="shark-figure-grid">',
          (p.figures||[]).map((f,i)=>'<figure class="shark-figure"><img loading="lazy" decoding="async" src="'+escapeText(f.src)+'" alt="'+escapeText(f.alt)+'"><figcaption><strong>Figure '+(i+1)+'.</strong> '+escapeText(f.caption)+'<span class="shark-figure-credit">Credit: '+(f.source?'<a href="'+escapeText(f.source)+'" target="_blank" rel="noopener noreferrer" title="'+escapeText(f.credit)+'">'+escapeText(f.shortCredit||f.credit)+' ↗</a>':'<span title="'+escapeText(f.credit)+'">'+escapeText(f.shortCredit||f.credit)+'</span>')+'</span></figcaption></figure>').join(''),
          '</div>',
          p.id==='shark'
            ? '<p class="shark-source-caption">A SHARK-NIR image showing the four known planets around HR 8799 is published in the <a href="https://www.lbto.org/wp-content/uploads/2024/05/LBT-annual-report-2023-final-web.pdf#page=25" target="_blank" rel="noopener noreferrer">LBTO 2023 annual report ↗</a>.</p></section>'
            : p.id==='nirvana'
              ? '<p class="shark-source-caption">The first image is an explanatory concept diagram; the second shows hardware from the earlier LINC-NIRVANA instrument, not the NIRVANA-VIS camera.</p></section>'
              : p.id==='mavis'
              ? '<p class="shark-source-caption">Both illustrations show design concepts, not photographs of an installed or operational MAVIS instrument.</p></section>'
              : p.id==='ekarus'
              ? '<p class="shark-source-caption">The optical schematic shows EKARUS; the telescope photograph shows its host facility, not the instrument bench.</p></section>'
              : p.id==='ingot'
              ? '<p class="shark-source-caption">These are cropped figures from the cited research works. The revised 2026 optical bench is a design layout, not a demonstration of achieved on-sky performance.</p></section>'
              : p.id==='soxs'
              ? '<p class="shark-source-caption">The supernova spectrum is from SOXS first-light observations, not a peer-reviewed astrophysical science paper.</p></section>'
              : p.id==='lbcmos' ? '<p class="shark-source-caption">The instrument photo shows the existing CCD-based LBC cameras. The CMOS figure is an explanatory concept, not a verified detector arrangement or finished upgrade.</p></section>'
              : p.id==='vstpol' ? '<p class="shark-source-caption">Figure 1 is an archival ESO photograph of the VST, not a photograph of installed VSTPol hardware. Figure 2 is an original explanatory concept diagram, not an engineering drawing.</p></section>'
              : p.id==='plato' ? '<p class="shark-source-caption">Figure 1 is an artist’s impression. Figure 2 documents pre-launch ground testing in 2026, not observations from space.</p></section>'
              : p.id==='cheops' ? '<p class="shark-source-caption">Figure 1 is an artist’s impression; Figure 2 shows cleanroom work at the University of Bern, not the earlier INAF Padova demonstration model.</p></section>'
              : '<p class="shark-source-caption">These are original explanatory illustrations based on the cited project studies, not photographs, optical simulations or drawings of a completed instrument.</p></section>'
        ]:[]),
        '<section class="container project-knowledge shark-contribution" aria-label="ADOPT contribution and project sources"><div class="project-knowledge-main"><h2>Our contribution</h2><p>'+escapeText(p.contribution)+'</p>'+teamLinks+'</div><aside class="project-knowledge-aside"><h2>Learn more</h2>'+links+'</aside></section>'
      ].join('') : '';
      detail.innerHTML=`
        <section class="container inner-hero detail-hero">
          <a class="back-link" href="${back}">← ${p.status==='past'?'Previous involvement':'All projects'}</a>
          ${isFeaturedProject?'':`<div class="eyebrow"><span class="small-line"></span> ${escapeText(p.overline)}</div>`}
          <h1>${escapeText(p.name)}</h1>
          <p class="page-lede">${escapeText(p.blurb)}</p>${note}
        </section>
        ${featuredOverview}
        <section class="container detail-grid${isFeaturedProject?' shark-superseded':''}" aria-label="Project background">
          ${p.id==='soxs'?`<figure class="detail-photo"><img src="assets/photos/soxs.jpg" alt="SOXS on the New Technology Telescope at La Silla" width="1280" height="964"><figcaption>Credit: <a href="https://www.eso.org/public/images/ann25011b/">P. Schipani/INAF</a> · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></figcaption></figure>`:`<div class="detail-visual art-${escapeText(p.accent)}"><span class="detail-ring ring-a"></span><span class="detail-ring ring-b"></span><span class="detail-symbol">${escapeText(p.icon)}</span><span class="detail-label">${p.status==='past'?'PREVIOUS INVOLVEMENT':'RESEARCH PROJECT'}</span></div>`}
          <div class="detail-copy">
            <h2>About the project</h2><p>${escapeText(p.description)}</p>
            <h2>Scientific purpose</h2>${science}
            ${facility}
          </div>
        </section>
        <section class="container project-knowledge${isFeaturedProject?' shark-superseded':''}" aria-label="Technical details and references">
          <div class="project-knowledge-main">
            <h2>Technical details</h2>
            <p>${escapeText(p.technical||'A verified public technical description is not yet available.')}</p>${specs}
          </div>
          <aside class="project-knowledge-aside" aria-label="Project context and sources">
            <h2>${escapeText(p.contributionHeading||"Our contribution")}</h2><p>${escapeText(p.contribution)}</p>${teamLinks}
            <h2>Learn more</h2>${links}
            <p class="project-source-note">Instrument specifications refer to the cited designs. Official project websites provide further information about the collaboration.</p>
          </aside>
        </section>
        ${publications}
        ${scienceResultsSection}
        <section class="container detail-bottom"><div><span class="eyebrow">EXPLORE MORE</span><h2>Explore other projects</h2></div><a class="btn btn-dark" href="projects.html">View all projects <span aria-hidden="true">↗</span></a></section>`;
    }
    protectProperNames(detail);
  }

  const escapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const catalogue=window.ADOPT_CATALOGUE||[];
  const publicationList=document.querySelector('[data-publication-list]');
  if(publicationList){
    const search=document.getElementById('publication-search'),filter=document.getElementById('publication-project'),kind=document.getElementById('publication-kind'),memberFilter=document.getElementById('publication-member');
    proj.filter(p=>catalogue.some(item=>item.projects.some(x=>x.id===p.id))).sort((a,b)=>a.name.localeCompare(b.name)).forEach(p=>{const option=document.createElement('option');option.value=p.id;option.textContent=p.name;filter.append(option)});
    people.slice().sort((a,b)=>a.name.localeCompare(b.name)).forEach(p=>{const option=document.createElement('option');option.value=p.id;option.textContent=p.name;memberFilter.append(option)});
    const views=[...document.querySelectorAll('[name="publication-view"]')];
    const params=new URLSearchParams(location.search);search.value=params.get('q')||'';
    views.find(v=>v.value===(['member','all'].includes(params.get('scope'))?params.get('scope'):'group')).checked=true;
    if([...memberFilter.options].some(o=>o.value===params.get('member')))memberFilter.value=params.get('member');
    if([...filter.options].some(o=>o.value===params.get('project')))filter.value=params.get('project');
    if(['all','instrument','science'].includes(params.get('kind')))kind.value=params.get('kind');
    let visibleLimit=30;
    const moreButton=document.querySelector('[data-publication-more]');
    function renderPublications(event){
      if(event?.target!==moreButton)visibleLimit=30;
      const terms=search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      const scope=views.find(v=>v.checked).value;
      const pool=scope==='all'?catalogue:scope==='member'?catalogue.filter(item=>item.memberIds?.length):catalogue.filter(item=>item.authorship?.members.length);
      memberFilter.disabled=false;
      const matches=pool.filter(item=>(memberFilter.disabled||memberFilter.value==='all'||(scope==='group'?(item.authorship?.members||[]).some(m=>m.memberId===memberFilter.value):(item.memberIds||[]).includes(memberFilter.value)))&&(filter.value==='all'||item.projects.some(p=>p.id===filter.value))&&(kind.value==='all'||item.kinds.includes(kind.value))&&terms.every(term=>[item.title,item.authors,...(item.authorship?.firstTwo||[]),...(item.memberIds||[]).map(id=>people.find(p=>p.id===id)?.name||''),item.year,item.doi,...item.projects.map(p=>p.name)].join(' ').toLowerCase().includes(term)));
      publicationList.innerHTML=matches.slice(0,visibleLimit).map(item=>`<li class="project-paper"><div class="paper-meta"><span class="paper-kind">${escapeHtml(item.type||'Research paper')}</span><span>${item.kinds.includes('science')?'Observational science':item.kinds.includes('research')&&!item.kinds.includes('instrument')?'Research paper':'Instrument research'}</span></div><h2><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)} <span aria-hidden="true">↗</span></a></h2><p class="paper-byline">${escapeHtml(item.authorship?item.authorship.firstTwo.join(', ')+', et al.':item.authors||'')}${item.authorship||item.authors?' · ':''}${escapeHtml(item.year||'Year not listed')}${item.journal?' · '+escapeHtml(item.journal):''}</p>${item.authorship?`<p class="paper-group-authors">${item.authorship.members.map(m=>`<a href="${encodeURIComponent(m.memberId)}.html">${escapeHtml(m.name)}</a> · ${m.position===1?'first':'second'} author`).join('; ')}</p>`:''}${item.memberIds?.length?`<p class="paper-group-authors">Group members: ${item.memberIds.map(id=>{const person=people.find(x=>x.id===id);return person?`<a href="${encodeURIComponent(id)}.html">${escapeHtml(person.name)}</a>`:''}).filter(Boolean).join(', ')}</p>`:''}${item.note?`<p class="paper-context">${escapeHtml(item.note)}</p>`:''}<div class="paper-projects">${item.projects.map(p=>`<a href="project-${encodeURIComponent(p.id)}.html">${escapeHtml(p.name)}</a>`).join(' ')}${item.doi?`<span class="paper-doi">DOI: ${escapeHtml(item.doi)}</span>`:''}</div></li>`).join('');
      document.querySelector('[data-publication-count]').textContent=`${matches.length} of ${pool.length} ${scope==='all'?'publications across projects and team':scope==='member'?'member publications':'selected first/second-author publications'} · newest first${matches.length>visibleLimit?` · showing ${visibleLimit}`:''}`;
      moreButton.hidden=matches.length<=visibleLimit;
      document.querySelector('[data-publication-empty]').hidden=matches.length>0;
      const url=new URL(location.href);[['q',search.value.trim()],['project',filter.value],['kind',kind.value]].forEach(([key,value])=>value&&value!=='all'?url.searchParams.set(key,value):url.searchParams.delete(key));if(scope!=='group')url.searchParams.set('scope',scope);else url.searchParams.delete('scope');
      if(!memberFilter.disabled&&memberFilter.value!=='all')url.searchParams.set('member',memberFilter.value);else url.searchParams.delete('member');
      history.replaceState(null,'',url.pathname+url.search);
      protectProperNames(publicationList);
    }
    moreButton.addEventListener('click',event=>{visibleLimit+=30;renderPublications(event)});
    views.forEach(view=>view.addEventListener('change',renderPublications));
    search.addEventListener('input',renderPublications);filter.addEventListener('change',renderPublications);kind.addEventListener('change',renderPublications);memberFilter.addEventListener('change',renderPublications);renderPublications();
  }

  function observeReveals(){const elements=document.querySelectorAll('.reveal:not(.visible)');if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){elements.forEach(e=>e.classList.add('visible'));return}if(!('IntersectionObserver' in window)){elements.forEach(e=>e.classList.add('visible'));return}const obs=new IntersectionObserver((items,o)=>{items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');o.unobserve(item.target)}})},{threshold:.07});elements.forEach(e=>obs.observe(e))}
  observeReveals();
  const aoSlider=document.getElementById('ao-range');if(aoSlider){const before=document.getElementById('ao-before');const score=document.getElementById('ao-score');aoSlider.addEventListener('input',()=>{const v=Number(aoSlider.value);before.style.clipPath=`inset(0 ${v}% 0 0)`;score.textContent=v>=75?'Adaptive correction dominant':v<=25?'Atmospheric blur dominant':'Compare the correction';});aoSlider.dispatchEvent(new Event('input'))}
  // In-header site search stays on the current page until a result is selected.
  const headerSearchToggle=header?.querySelector('.header-search-toggle');
  const headerSearchPanel=header?.querySelector('#header-search-panel');
  if(headerSearchToggle && headerSearchPanel){
    const form=headerSearchPanel.querySelector('.header-search-form');
    const input=headerSearchPanel.querySelector('#header-search-input');
    const results=headerSearchPanel.querySelector('.header-search-results');
    const closeButton=headerSearchPanel.querySelector('.header-search-close');
    const normal=value=>String(value??'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const fallbackPapers=Object.entries(window.ADOPT_PROJECT_PAPERS||{}).flatMap(([id,entry])=>
      ['recent','foundational','papers'].flatMap(key=>(entry[key]||[]).map(p=>({...p,projectId:id}))));
    const papers=catalogue.length?catalogue:(window.ADOPT_MEMBER_PUBLICATIONS||[]).concat(fallbackPapers);
    const rawRecords=[
      ...(window.ADOPT_SEARCH_INDEX||[]),
      ...proj.map(p=>({title:p.name,url:'project-'+encodeURIComponent(p.id)+'.html',
        type:p.status==='past'?'Past project':'Project',
        section:p.telescope||'',text:[p.blurb,p.description,p.contribution,p.category,p.telescope].join(' ')})),
      ...people.map(p=>({title:p.name,url:encodeURIComponent(p.id)+'.html',
        type:'Team member',section:p.tag||'',text:[p.role,p.bio,p.longBio,...(p.projects||[])].join(' ')})),
      ...papers.filter(p=>p.title).map(p=>({title:p.title,
        url:'publications.html?scope=all&q='+encodeURIComponent(p.doi||p.title),
        type:'Publication',section:(p.projects||[]).map(x=>x.name).join(', ')||'Publications',
        text:[p.authors,p.year,p.doi,p.note].join(' ')}))
    ];
    const seen=new Set();
    const records=rawRecords.filter(r=>{
      if(!r.title||!r.url||!/^[-a-z0-9_]+\.html(?:[?#].*)?$/i.test(r.url))return false;
      const key=r.type==='Publication'?'paper:'+normal(r.title):r.url.split('#')[0];
      if(seen.has(key))return false;
      seen.add(key);
      return true;
    }).map(r=>({...r,heading:normal(r.title),sectionSearch:normal(r.section),
      contentSearch:normal([r.title,r.section,r.text].join(' '))}));
    let currentResults=[];
    function renderInlineSearch(){
      const query=input.value.trim().slice(0,120);
      const terms=[...new Set(normal(query).split(/\s+/).filter(Boolean))].slice(0,10);
      results.replaceChildren();
      currentResults=[];
      if(!terms.length){
        const hint=document.createElement('p');
        hint.className='header-search-message';
        hint.textContent='Start typing to find people, projects or publications.';
        results.append(hint);
        return;
      }
      currentResults=records.filter(r=>terms.every(t=>r.contentSearch.includes(t)))
        .map(r=>({record:r,score:terms.reduce((total,t)=>total+(r.heading.includes(t)?12:0)
          +(r.sectionSearch.includes(t)?4:0),0)+(r.heading===normal(query)?30:0)}))
        .sort((a,b)=>b.score-a.score||a.record.title.localeCompare(b.record.title))
        .slice(0,8).map(x=>x.record);
      if(!currentResults.length){
        const empty=document.createElement('p');
        empty.className='header-search-message';
        empty.textContent='No matches. Try another name or keyword.';
        results.append(empty);
        return;
      }
      const group=document.createDocumentFragment();
      currentResults.forEach(r=>{
        const link=document.createElement('a');
        link.href=r.url;
        link.className='header-search-result';
        const label=document.createElement('span');
        label.className='header-search-type';
        label.textContent=r.type||'Page';
        const title=document.createElement('span');
        title.className='header-search-title';
        title.textContent=r.title;
        link.append(label,title);
        group.append(link);
      });
      results.append(group);
    }
    function openInlineSearch(){
      if(menu && !menu.hidden){
        menu.hidden=true;
        btn?.setAttribute('aria-expanded','false');
        header?.classList.remove('is-open');
      }
      headerSearchPanel.hidden=false;
      headerSearchToggle.setAttribute('aria-expanded','true');
      renderInlineSearch();
      input.focus();
    }
    function closeInlineSearch(returnFocus=false){
      headerSearchPanel.hidden=true;
      headerSearchToggle.setAttribute('aria-expanded','false');
      if(returnFocus)headerSearchToggle.focus();
    }
    headerSearchToggle.addEventListener('click',()=>{
      if(headerSearchPanel.hidden)openInlineSearch();
      else closeInlineSearch(true);
    });
    closeButton.addEventListener('click',()=>closeInlineSearch(true));
    input.addEventListener('input',renderInlineSearch);
    form.addEventListener('submit',event=>{
      event.preventDefault();
      if(currentResults[0])location.assign(currentResults[0].url);
    });
    headerSearchPanel.addEventListener('keydown',event=>{
      if(event.key==='Escape'){
        event.preventDefault();
        closeInlineSearch(true);
      }else if(event.key==='ArrowDown' && event.target===input){
        const first=results.querySelector('a');
        if(first){event.preventDefault();first.focus();}
      }else if(event.key==='ArrowUp' && event.target?.matches?.('.header-search-result')){
        event.preventDefault();
        input.focus();
      }
    });
    document.addEventListener('pointerdown',event=>{
      if(!headerSearchPanel.hidden && !headerSearchPanel.contains(event.target)
        && !headerSearchToggle.contains(event.target))closeInlineSearch();
    });
    document.addEventListener('keydown',event=>{
      const el=event.target;
      const typing=el instanceof HTMLElement &&
        (el.isContentEditable || ['INPUT','TEXTAREA','SELECT'].includes(el.tagName));
      if((event.key==='/' && !typing)
        ||((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k')){
        event.preventDefault();
        openInlineSearch();
      }else if(event.key==='Escape' && !headerSearchPanel.hidden
        && !headerSearchPanel.contains(event.target)){
        closeInlineSearch(true);
      }
    });
  }
  const searchPage=document.querySelector('[data-search-page]');
  if(searchPage){
    const form=searchPage.querySelector('.site-search-form');
    const input=document.getElementById('site-search-input');
    const status=searchPage.querySelector('[data-search-status]');
    const results=searchPage.querySelector('[data-search-results]');
    const suggestions=searchPage.querySelector('[data-search-suggestions]');
    const normalize=text=>(text||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const escapeHtml=text=>String(text).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const scienceRecords=Object.entries(window.ADOPT_INSTRUMENT_SCIENCE_PAPERS||{}).flatMap(([id,entry])=>
      (entry.papers||[]).filter(p=>p.title&&p.url).map(p=>({
        title:p.title,section:'Science with '+entry.instrument,
        url:'project-'+encodeURIComponent(id)+'.html#instrument-science-papers',type:'Observational science paper',
        text:[p.authors,p.year,p.journal,p.note,entry.instrument].join(' ')
      })));
    const allRecordsRaw=[...(window.ADOPT_SEARCH_INDEX||[]),...proj.map(p=>({title:p.name,section:p.overline,url:'project-'+encodeURIComponent(p.id)+'.html',type:p.status==='past'?'Past project':'Project',text:[p.blurb,p.description,(p.science||[]).join(' '),p.technical,(p.specs||[]).flat().join(' '),p.contribution,p.telescope,p.category,(p.refs||[]).map(x=>x[0]).join(' '),p.status==='past'?'Past Projects':''].join(' ')})),...catalogue.map(p=>({title:p.title,section:p.projects.map(x=>x.name).join(', '),url:'publications.html?scope=all&q='+encodeURIComponent(p.doi||p.title),type:'Publication',text:[p.authors,p.year,p.doi,p.note].join(' ')})),...people.map(p=>({title:p.name,section:'People · '+p.tag,url:p.id+'.html',type:'Group member',text:[p.role,p.bio,p.longBio||'',p.tag,...(p.projects||[])].join(' ')}))];
    const seenResults=new Set();
    const allRecords=allRecordsRaw.filter(item=>{const key=item.type==='Publication'?'paper:'+normalize(item.title):item.url.split('#')[0];if(seenResults.has(key))return false;seenResults.add(key);return true;});
    // Map normalized positions back to the original text (ellipsis/accents can change length).
    const normalizedMap=text=>{let normalized='',starts=[],ends=[],offset=0;for(const char of String(text)){const part=normalize(char);normalized+=part;for(let i=0;i<part.length;i++){starts.push(offset);ends.push(offset+char.length);}offset+=char.length;}return {normalized,starts,ends};};
    // Avoid regex on user strings; escape every snippet before adding highlight markup.
    const markText=(text,terms)=>{
      const src=String(text),map=normalizedMap(src),low=map.normalized;const matches=[];
      terms.forEach(t=>{let start=0,idx;while(start<low.length&&(idx=low.indexOf(t,start))>=0){matches.push([map.starts[idx],map.ends[idx+t.length-1]]);start=idx+Math.max(t.length,1)}});
      matches.sort((a,b)=>a[0]-b[0]);let out='',pos=0;for(const [start,end] of matches){if(start<pos)continue;out+=escapeHtml(src.slice(pos,start))+'<mark>'+escapeHtml(src.slice(start,end))+'</mark>';pos=end;}return out+escapeHtml(src.slice(pos));
    };
    const excerpt=(text,terms)=>{const src=String(text).replace(/\s+/g,' ').trim();const map=normalizedMap(src),norm=map.normalized;let idx=Math.min(...terms.map(t=>{const v=norm.indexOf(t);return v<0?Infinity:v}));idx=Number.isFinite(idx)?map.starts[idx]:0;const start=Math.max(0,idx-75);const end=Math.min(src.length,start+315);return (start>0?'…':'')+src.slice(start,end)+(end<src.length?'…':'')};
    function renderSearch(){
      const q=input.value.trim().slice(0,200);const terms=[...new Set(normalize(q).split(/\s+/).filter(Boolean))];
      const next=new URL(location.href);if(q)next.searchParams.set('q',q);else next.searchParams.delete('q');history.replaceState(null,'',next.pathname+next.search+next.hash);
      results.innerHTML='';
      suggestions.hidden=!!q;
      if(!terms.length){status.textContent='Search across our research, instruments, projects and resources.';return;}
      const scored=allRecords.map(item=>{
        const title=normalize(item.title),section=normalize(item.section||''),body=normalize(item.text||'');
        if(!terms.every(t=>title.includes(t)||section.includes(t)||body.includes(t)))return null;
        const score=terms.reduce((sum,t)=>sum+(title.includes(t)?12:0)+(section.includes(t)?6:0)+(body.includes(t)?1:0),0)+(title.includes(normalize(q))?18:0)+(section.includes(normalize(q))?8:0)+(body.includes(normalize(q))?2:0);
        return {...item,score};
      }).filter(Boolean).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title));
      status.textContent=scored.length?`${scored.length} result${scored.length===1?'':'s'} for “${q}”`:`No results for “${q}”`;
      if(!scored.length){results.innerHTML='<div class="search-empty"><h2>No matches found.</h2><p>Try a different term, fewer keywords, or a project name such as MAVIS, SOXS or MORFEO.</p></div>';protectProperNames(results);return;}
      const fragment=document.createDocumentFragment();
      scored.slice(0,30).forEach(item=>{
        const link=document.createElement('a');link.className='search-result';link.href=item.url;
        const title=document.createElement('h2'),label=document.createElement('div'),snippet=document.createElement('p');
        title.innerHTML=markText(item.title+(item.section && normalize(item.section)!==normalize(item.title)?' — '+item.section:''),terms);
        label.className='search-result-kicker';label.textContent=item.type||'Research';
        snippet.innerHTML=markText(excerpt(item.text,terms),terms);
        link.append(label,title,snippet);fragment.append(link);
      });
      results.append(fragment);
      protectProperNames(results);
    }
    input.value=new URLSearchParams(location.search).get('q')||'';
    input.addEventListener('input',renderSearch);
    form.addEventListener('submit',event=>{event.preventDefault();renderSearch();});
    window.addEventListener('popstate',()=>{input.value=new URLSearchParams(location.search).get('q')||'';renderSearch()});
    renderSearch();
  }
})();
