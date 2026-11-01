// Static profiles remain available when the profile data is offline.
window.ADOPT_PROFILE_READY = (async function () {
  const people = window.ADOPT_PEOPLE || [];
  const pageId = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (!['people', 'search', 'member-login'].includes(pageId) && !people.some(p => p.id === pageId)) return;
  try {
    const selected = ['people','search'].includes(pageId) ? people : people.filter(p => p.id === pageId);
    if (pageId === 'member-login') return; // Draft editor loads its selected file directly.
    const rows = (await Promise.all(selected.map(async p => {
      try {
        const response = await fetch('members/'+encodeURIComponent(p.id)+'.json', {signal:AbortSignal.timeout(3500),cache:'no-cache'});
        return response.ok ? await response.json() : null;
      } catch { return null; }
    }))).filter(Boolean);
    for (const row of rows) {
      const person = people.find(p => p.id === row.member_id);
      if (!person) continue;
      for (const field of ['role', 'tag', 'bio', 'orcid']) if (typeof row[field] === 'string') person[field] = row[field];
      if (typeof row.long_bio === 'string') person.longBio = row.long_bio;
      if (Array.isArray(row.links)) person.links = row.links.filter(l => typeof l.label === 'string' && /^https:\/\//i.test(l.url));
      if (Array.isArray(row.projects)) person.projects = row.projects.filter(p => typeof p === 'string');
    }
    const person = people.find(p => p.id === pageId);
    if (!person || !document.querySelector('.member-page')) return;
    for (const [selector, value] of [['.profile-role',person.role],['.profile-eyebrow',person.tag],['.profile-intro',person.bio],['[data-profile-about]',person.longBio || person.bio]]) {
      const element=document.querySelector(selector); if(element) element.textContent=value;
    }
    const meta=document.querySelector('meta[name=description]'); if(meta) meta.content=person.bio;
    const jsonld=document.querySelector('script[type="application/ld+json"]');
    if(jsonld){const data=JSON.parse(jsonld.textContent);data.mainEntity.description=person.bio;data.mainEntity.sameAs=person.orcid?['https://orcid.org/'+person.orcid]:[];jsonld.textContent=JSON.stringify(data).replace(/</g,'\\u003c');}
    const sidebar=document.querySelector('.profile-sidebar');
    const link=(url,text)=>{const a=document.createElement('a');a.href=url;a.textContent=text;a.target='_blank';a.rel='noopener noreferrer';return a;};
    sidebar.replaceChildren();
    if(person.orcid){const p=document.createElement('p');p.className='profile-orcid';p.append(link('https://orcid.org/'+person.orcid,'ORCiD '+person.orcid+' ↗'));sidebar.append(p);}
    if(person.links?.length){const h=document.createElement('h2');h.textContent='Research & profile links';const ul=document.createElement('ul');for(const l of person.links){const li=document.createElement('li');li.append(link(l.url,l.label+' ↗'));ul.append(li);}sidebar.append(h,ul);}
    const h=document.createElement('h2');h.textContent='ADOPT';const p=document.createElement('p');p.textContent='Adaptive optics and astronomical instrumentation at INAF Padova.';const contact=document.createElement('a');contact.href='contact.html';contact.textContent='Group contact information →';sidebar.append(h,p,contact);const edit=document.createElement('p'),editLink=document.createElement('a');edit.className='profile-edit-link';editLink.href='member-login.html?member='+encodeURIComponent(person.id);editLink.textContent='Suggest an update to this profile →';edit.append(editLink);sidebar.append(edit);
    let section=document.querySelector('.profile-projects')?.closest('section');
    if(section)section.remove();
    const projects=(window.ADOPT_PROJECTS||[]).filter(p=>person.projects.includes(p.name));
    if(projects.length){section=document.createElement('section');section.className='profile-section';const h=document.createElement('h2');h.textContent='Projects';const ul=document.createElement('ul');ul.className='profile-projects';for(const project of projects){const li=document.createElement('li'),title=document.createElement('h3'),a=document.createElement('a'),desc=document.createElement('p');a.href='project.html?id='+encodeURIComponent(project.id);a.textContent=project.name;a.className='notranslate';a.setAttribute('translate','no');title.append(a);desc.textContent=project.blurb;li.append(title,desc);ul.append(li);}section.append(h,ul);document.querySelector('.profile-layout>div').append(section);}
  } catch { /* Retain the published static profile on network failure. */ }
})();
