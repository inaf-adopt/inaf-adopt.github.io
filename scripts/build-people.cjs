// Run from any directory: node scripts/build-people.cjs
// Edit people-data.js, then regenerate and commit the resulting HTML pages.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');global.window={};
for(const file of ['people-data.js','site-data.js'])require(path.join(root,file));
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const external=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`;
for(const p of window.ADOPT_PEOPLE){
 const url=`https://inaf-adopt.github.io/${p.id}.html`;
 const projects=(p.projects||[]).map(name=>window.ADOPT_PROJECTS.find(x=>x.name.toLowerCase()===name.toLowerCase())).filter(Boolean);
 const links=(p.links||[]).filter(x=>/^https:\/\//.test(x.url));
 const photo=p.photo?`<figure class="profile-portrait"><img src="${esc(p.photo)}" alt="${esc(p.name)}" ${p.photoPosition?`style="object-position:${esc(p.photoPosition)}"`:''} width="280" height="320"><figcaption>${p.photoCredit?.startsWith('https://')?`Photo: ${external(p.photoCredit,'MAVIS consortium')}`:esc(p.photoCredit||'')}</figcaption></figure>`:'';
 const orcidBlock=p.orcid?`<p class="profile-orcid"><a href="https://orcid.org/${esc(p.orcid)}" target="_blank" rel="noopener noreferrer"><span class="orcid-icon" aria-hidden="true">iD</span> ORCID <span class="orcid-id">${esc(p.orcid)}</span> ↗</a></p>`:'';
 const schema={'@context':'https://schema.org','@type':'ProfilePage',url,name:p.name+' — ADOPT',mainEntity:{'@type':'Person',name:p.name,url,description:p.bio}};
 if(p.orcid)schema.mainEntity.sameAs=['https://orcid.org/'+p.orcid];
 const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#10253b">
<title>${esc(p.name)} — ADOPT</title><meta name="description" content="${esc(p.bio)}"><link rel="canonical" href="${url}"><link rel="icon" type="image/svg+xml" href="assets/favicon.svg"><link rel="stylesheet" href="styles.css?v=member-pages-1"><meta property="og:type" content="profile"><meta property="og:title" content="${esc(p.name)} — ADOPT"><meta property="og:description" content="${esc(p.bio)}"><meta property="og:url" content="${url}">${p.photo?`<meta property="og:image" content="${esc(new URL(p.photo,'https://inaf-adopt.github.io/').href)}">`:''}
<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script></head>
<body class="member-page"><a class="skip-link" href="#main">Skip to content</a><header class="site-header" data-header></header><main id="main" class="container profile-page"><a class="profile-back" href="people.html">← All group members</a><section class="profile-hero${p.photo?'':' profile-no-photo'}"><div><p class="profile-eyebrow">${esc(p.tag)}</p><h1 class="notranslate" translate="no">${esc(p.name)}</h1><p class="profile-role">${esc(p.role)}</p><p class="profile-intro">${esc(p.bio)}</p></div>${photo}</section><div class="profile-layout"><div><section class="profile-section"><h2>About</h2><p>${esc(p.longBio||p.bio)}</p></section>${projects.length?`<section class="profile-section"><h2>Projects</h2><ul class="profile-projects">${projects.map(x=>`<li><h3><a href="project.html?id=${esc(x.id)}" class="notranslate" translate="no">${esc(x.name)}</a></h3><p>${esc(x.blurb)}</p></li>`).join('')}</ul></section>`:''}</div><aside class="profile-sidebar" aria-label="Profile links">${orcidBlock}${links.length?`<h2>Research &amp; profile links</h2><ul>${links.map(l=>`<li>${external(l.url,l.label)}</li>`).join('')}</ul>`:''}<h2>ADOPT</h2><p>Adaptive optics and astronomical instrumentation at INAF Padova.</p><a href="contact.html">Group contact information →</a></aside></div></main><footer class="site-footer" data-footer></footer>${['protected-names.js','site-data.js','people-data.js','project-papers.js','instrument-science-papers.js','search-index.js','script.js'].map(f=>`<script src="${f}${f==='script.js'?'?v=member-pages-1':''}" defer></script>`).join('')}<script src="https://cdn.gtranslate.net/widgets/latest/dropdown.js" defer></script></body></html>\n`;
 fs.writeFileSync(path.join(root,p.id+'.html'),html);
}
const urls=['index.html','research.html','projects.html','people.html','publications.html','contact.html',...window.ADOPT_PEOPLE.map(p=>p.id+'.html')];
fs.writeFileSync(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(u=>`  <url><loc>https://inaf-adopt.github.io/${u}</loc></url>`).join('\n')+'\n</urlset>\n');
console.log(`Generated ${window.ADOPT_PEOPLE.length} member pages and sitemap.xml`);
