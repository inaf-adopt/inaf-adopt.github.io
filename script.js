(function(){
  // Source content is English. Machine translation is optional and provided by GTranslate.
  window.gtranslateSettings={default_language:'en',native_language_names:true,languages:["af","sq","am","ar","hy","az","eu","be","bn","bs","bg","ca","ceb","ny","zh-CN","zh-TW","co","hr","cs","da","nl","en","eo","et","tl","fi","fr","fy","gl","ka","de","el","gu","ht","ha","haw","iw","hi","hmn","hu","is","ig","id","ga","it","ja","jw","kn","kk","km","ko","ku","ky","lo","la","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mn","my","ne","no","ps","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd","si","sk","sl","so","es","su","sw","sv","tg","ta","te","th","tr","uk","ur","uz","vi","cy","xh","yi","yo","zu"],wrapper_selector:'.gtranslate_wrapper',select_language_label:'Language',horizontal_position:'inline'};
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
  const route=(name)=>path===name ? ' aria-current="page"' : '';
  const navLinks=[['index.html','Home'],['research.html','Research'],['projects.html','Projects'],['people.html','People'],['publications.html','Publications'],['contact.html','Contact']];
  const header=document.querySelector('[data-header]');
  if(header) header.innerHTML=`<div class="nav-shell container"><a class="identity" href="index.html" aria-label="Home"><span class="brand-icon"><img src="assets/adopt-mark.svg" alt="" /></span><span class="identity-type"><strong class="notranslate" translate="no">ADOPT<span class="brand-period">.</span></strong><small>INAF · PADOVA</small></span></a><nav class="desktop-nav" aria-label="Main navigation">${navLinks.map(([url,label])=>`<a href="${url}"${route(url)}>${label}</a>`).join('')}</nav><div class="nav-right"><div class="nav-tools"><a class="search-nav-link" href="search.html" aria-label="Search this website" title="Search this website"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></a><div class="language-nav" role="group" aria-label="Website language"><svg class="language-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M3.5 12h17M12 3c-5 5-5 13 0 18m0-18c5 5 5 13 0 18" stroke="currentColor" stroke-width="1.3" fill="none"/></svg><div class="gtranslate_wrapper notranslate" translate="no"></div><a class="gtranslate-fallback" href="https://translate.google.com/?op=websites" target="_blank" rel="noopener noreferrer" title="Translate this website using Google Translate">Translate ↗</a></div></div><a class="nav-contact" href="contact.html">Get in touch <span aria-hidden="true">↗</span></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button></div></div><nav id="mobile-menu" class="mobile-nav" aria-label="Mobile navigation" hidden>${navLinks.map(([url,label])=>`<a href="${url}"${route(url)}>${label} <span aria-hidden="true">↗</span></a>`).join('')}<div class="mobile-tools"><a class="search-nav-link" href="search.html" aria-label="Search this website"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></a></div></nav>`;
  const footer=document.querySelector('[data-footer]');
  if(footer)footer.innerHTML=`<div class="container"><div class="footer-top"><div><div class="footer-brand"><img src="assets/adopt-mark.svg" alt=""/><span class="notranslate" translate="no">ADOPT<span class="brand-period">.</span></span></div><p>Wavefronts. Instruments.<br/>New perspectives.</p></div><div class="footer-links"><div><h4>Explore</h4><a href="research.html">Research</a><a href="projects.html">Projects</a><a href="people.html">People</a></div><div><h4>Resources</h4><a href="search.html">Search</a><a href="publications.html">Publications</a><a href="contact.html">Contact</a><a href="https://www.oapd.inaf.it/" target="_blank" rel="noopener noreferrer">INAF OAPd ↗</a></div></div></div><div class="footer-bottom"><span>ADOPT · Research group website concept · INAF Osservatorio Astronomico di Padova</span><span>Made for discovery · <a href="credits.html">Image credits &amp; notices</a></span></div></div>`;
  protectProperNames(document.body);
  // Third-party translators insert their <select> asynchronously. Provide an
  // accessible name for screen-reader users whenever the control appears.
  const translateContainer=header?.querySelector('.gtranslate_wrapper');
  if(translateContainer){
    const labelTranslationControl=()=>{
      translateContainer.querySelectorAll('select').forEach(select=>{
        select.setAttribute('aria-label','Choose website language');
        select.setAttribute('title','Choose website language');
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
  const proj=window.ADOPT_PROJECTS||[];
  const currentProjects=proj.filter(p=>p.status!=='past');
  const pastProjects=proj.filter(p=>p.status==='past');
  function projectCard(p,i){
    const pending=!!p.pending;
    return `<a class="project-card reveal${pending?' project-card-pending':''}" style="--stagger:${(i%6)*75}ms" href="project.html?id=${encodeURIComponent(p.id)}"><div class="project-art art-${p.accent}"><span class="art-orbit art-orbit-one"></span><span class="art-orbit art-orbit-two"></span><span class="art-core">${p.icon}</span><span class="art-mini">${p.status==='past'?'PAST PROJECT':'ADOPT / PROJECT'}</span></div><div class="project-info"><span class="project-meta">${p.overline}</span><div class="project-card-title"><h3>${p.name}</h3><span class="circle-arrow" aria-hidden="true">↗</span></div><p>${p.blurb}</p></div></a>`;
  }
  const featured=document.querySelector('[data-featured-projects]');
  if(featured){featured.innerHTML=currentProjects.filter(p=>!p.pending).slice(0,3).map(projectCard).join('');protectProperNames(featured);}
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
      count.textContent=`Showing ${n} ${n===1?'project':'projects'}${showPast&&showCurrent?' · '+currentProjects.length+' main directory · '+pastProjects.length+' past':''}`;
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
    const id=new URLSearchParams(location.search).get('id');
    const p=proj.find(x=>x.id===id);
    if(!p){
      detail.innerHTML='<section class="container inner-hero"><p class="eyebrow">Project not found</p><h1>No project found.</h1><a class="btn btn-dark" href="projects.html">All projects ↗</a></section>';
    }else{
      document.title=p.name+' — ADOPT | INAF Padova';
      const back=p.status==='past'?'projects.html#past-projects':'projects.html';
      const note=p.pending?'<p class="project-profile-note">Project information is being prepared. This listing does not yet describe technical details or team contributions.</p>':'';
      const facility=p.telescope?`<div class="fact-block"><span>Facility / context</span><strong>${p.telescope}</strong></div>`:'';
      const source=p.source?`<a href="${p.source}" target="_blank" rel="noopener noreferrer" class="text-link">Visit project reference <span aria-hidden="true">↗</span></a>`:'';
      detail.innerHTML=`<section class="container inner-hero detail-hero"><a class="back-link" href="${back}">← ${p.status==='past'?'Past Projects':'All projects'}</a><div class="eyebrow"><span class="small-line"></span> ${p.overline}</div><h1>${p.name}<span class="title-period">.</span></h1><p class="page-lede">${p.blurb}</p>${note}</section><section class="container detail-grid"><div class="detail-visual art-${p.accent}"><span class="detail-ring ring-a"></span><span class="detail-ring ring-b"></span><span class="detail-symbol">${p.icon}</span><span class="detail-label">${p.status==='past'?'ADOPT / PAST PROJECT':'ADOPT / RESEARCH PROJECT'}</span></div><div class="detail-copy"><div class="detail-overline">01 / OVERVIEW</div><h2>${p.pending?'Project overview':'Behind the technology'}</h2><p>${p.description}</p><div class="detail-overline margin-top">02 / RESEARCH INTERESTS</div><h2>Where our expertise connects</h2><p>${p.contribution}</p>${facility}${source}</div></section><section class="container detail-bottom"><div><span class="eyebrow">EXPLORE MORE</span><h2>Connected by curiosity.</h2></div><a class="btn btn-dark" href="projects.html">View all projects <span aria-hidden="true">↗</span></a></section>`;
    }
    protectProperNames(detail);
  }
  function observeReveals(){const elements=document.querySelectorAll('.reveal:not(.visible)');if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){elements.forEach(e=>e.classList.add('visible'));return}if(!('IntersectionObserver' in window)){elements.forEach(e=>e.classList.add('visible'));return}const obs=new IntersectionObserver((items,o)=>{items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');o.unobserve(item.target)}})},{threshold:.07});elements.forEach(e=>obs.observe(e))}
  observeReveals();
  const aoSlider=document.getElementById('ao-range');if(aoSlider){const before=document.getElementById('ao-before');const score=document.getElementById('ao-score');aoSlider.addEventListener('input',()=>{const v=Number(aoSlider.value);before.style.clipPath=`inset(0 ${v}% 0 0)`;score.textContent=v>=75?'Adaptive correction dominant':v<=25?'Atmospheric blur dominant':'Compare the correction';});aoSlider.dispatchEvent(new Event('input'))}
  // Keyboard shortcut for site search on every page (except when editing a field).
  document.addEventListener('keydown',event=>{
    const el=event.target;
    const typing=el instanceof HTMLElement && (el.isContentEditable || ['INPUT','TEXTAREA','SELECT'].includes(el.tagName));
    if((event.key==='/'&&!typing)||((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k')){
      event.preventDefault();
      if(path==='search.html')document.getElementById('site-search-input')?.focus();
      else location.href='search.html';
    }
  });
  const searchPage=document.querySelector('[data-search-page]');
  if(searchPage){
    const form=searchPage.querySelector('.site-search-form');
    const input=document.getElementById('site-search-input');
    const status=searchPage.querySelector('[data-search-status]');
    const results=searchPage.querySelector('[data-search-results]');
    const suggestions=searchPage.querySelector('[data-search-suggestions]');
    const normalize=text=>(text||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const escapeHtml=text=>String(text).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
    const allRecords=[...(window.ADOPT_SEARCH_INDEX||[]),...proj.map(p=>({title:p.name,section:p.overline,url:'project.html?id='+encodeURIComponent(p.id),type:p.status==='past'?'Past project':'Project',text:[p.blurb,p.description,p.contribution,p.telescope,p.category,p.status==='past'?'Past Projects':''].join(' ')}))];
    // Avoid regex on user strings; render snippets safely into text with explicit <mark> nodes.
    const markText=(text,terms)=>{
      const src=String(text),low=normalize(src);const matches=[];
      terms.forEach(t=>{let start=0,idx;while(start<low.length&&(idx=low.indexOf(t,start))>=0){matches.push([idx,idx+t.length]);start=idx+Math.max(t.length,1)}});
      matches.sort((a,b)=>a[0]-b[0]);let out='',pos=0;for(const [start,end] of matches){if(start<pos)continue;out+=escapeHtml(src.slice(pos,start))+'<mark>'+escapeHtml(src.slice(start,end))+'</mark>';pos=end;}return out+escapeHtml(src.slice(pos));
    };
    const excerpt=(text,terms)=>{const src=String(text).replace(/\s+/g,' ').trim();const norm=normalize(src);let idx=Math.min(...terms.map(t=>{const v=norm.indexOf(t);return v<0?Infinity:v}));if(!Number.isFinite(idx))idx=0;const start=Math.max(0,idx-75);const end=Math.min(src.length,start+315);return (start>0?'…':'')+src.slice(start,end)+(end<src.length?'…':'')};
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