// Standalone project pages have real HTML summaries, canonical URLs and project-specific metadata.
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const replaceOne=(str,from,to)=>{const pieces=str.split(from);if(pieces.length!==2)throw Error("Expected one template anchor: "+from.slice(0,65));return pieces[0]+to+pieces[1];};
const renderPage=function renderPage(p,template){
 if(!/^[a-z0-9-]+$/.test(p.id))throw Error('Invalid project ID');
 const name=esc(p.name),title=name+' — ADOPT | INAF Padova';
 const short=String(p.blurb||p.description||'Astronomical instrumentation and research at INAF Padova.').trim();
 const description=esc(short.slice(0,220));
 const url=`https://inaf-adopt.github.io/project-${p.id}.html`;
 let html=template;
 html=replaceOne(html,'<title>Project — ADOPT | INAF Padova</title>',`<title>${title}</title>`);
 html=replaceOne(html,'<meta name="description" content="Instrument science, technology and the ADOPT group’s contribution.">',`<meta name="description" content="${description}">`);
 html=replaceOne(html,'<meta property="og:title" content="Project — ADOPT">',`<meta property="og:title" content="${name} — ADOPT">`);
 html=replaceOne(html,'<meta property="og:description" content="Instrument science, technology and the ADOPT group’s contribution.">',`<meta property="og:description" content="${description}">`);
 if(p.id!=='soxs')html=replaceOne(html,'<meta property="og:image" content="https://inaf-adopt.github.io/assets/photos/soxs.jpg">','');
 const schema={'@context':'https://schema.org','@type':'WebPage',name:p.name,description:short,url,isPartOf:{'@type':'WebSite',name:'ADOPT',url:'https://inaf-adopt.github.io/'}};
 const seo=`<link rel="canonical" href="${url}"><meta property="og:url" content="${url}"><meta name="twitter:card" content="summary"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>`;
 html=replaceOne(html,'</head>',seo+'</head>');
 const back=p.status==='past'?'projects.html#past-projects':'projects.html';
 const fallback=`<section class="container inner-hero detail-hero"><a class="back-link" href="${back}">← All projects</a><p class="eyebrow">${esc(p.overline||'Research project')}</p><h1>${name}</h1><p class="page-lede">${description}</p><p>${esc(p.description||'')}</p>${p.contribution?`<h2>${esc(p.contributionHeading||'Our contribution')}</h2><p>${esc(p.contribution)}</p>`:''}<p><a class="text-link" href="${back}">Browse projects →</a></p></section>`;
 html=replaceOne(html,'<div data-project-detail></div>',`<div data-project-detail data-project-id="${p.id}">${fallback}</div>`);
 // Keep the shared script's layout-version key from the template; only normalize data-script keys.
 html=html.replace(/(<script src="(?:people-data|project-papers|member-publications|publication-catalogue|search-index|site-data|profile-live)\.js)(?:\?[^"]*)?"/g,'$1?v=20261101-audit"');
 return html;
};
if (typeof require==='function' && require.main===module) {
 const fs=require('node:fs'),path=require('node:path');
 const root=path.resolve(__dirname,'..');global.window={};require(path.join(root,'site-data.js'));
 const template=fs.readFileSync(path.join(root,'project.html'),'utf8');
 const check=process.argv.includes('--check');
 // Two instrument pages have curated, structured four-section narratives rather
 // than the brief shared fallback. Keep the generator from overwriting them.
 const curated=new Set(['shark','nirvana']);
 for(const p of window.ADOPT_PROJECTS){
   const target=path.join(root,'project-'+p.id+'.html');
   if(curated.has(p.id)){
     if(check){
       if(!fs.existsSync(target))throw Error('Curated project page missing: '+target);
       const html=fs.readFileSync(target,'utf8');
       if(!html.includes('<div data-project-detail data-project-id="'+p.id+'">')||
          !html.includes('<title>'+p.name+' — ADOPT | INAF Padova</title>')||
          !html.includes('id="project-publications"')||
          (html.match(/class="shark-story-block"/g)||[]).length!==4)
         throw Error('Curated project page incomplete: '+target);
     }
     continue;
   }
   const expected=renderPage(p,template);
   if(check){if(!fs.existsSync(target)||fs.readFileSync(target,'utf8')!==expected)throw Error('Project page stale: '+target);}
   else fs.writeFileSync(target,expected);
 }
 console.log((check?'Verified ':'Generated ')+window.ADOPT_PROJECTS.length+' indexed project pages.');
}
module.exports={renderPage};
