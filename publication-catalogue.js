// Shared by the browser and the static member-page builder.
(function(){
  const records=[],byId=new Map(),byTitle=new Map();
  const key=p=>(p.doi||p.url||'').toLowerCase().replace(/^https?:\/\/(?:dx\.)?doi\.org\//,'');
  const titleKey=p=>String(p.title||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'')+'|'+p.year;
  function add(p,project,kind,origin){
    if(!p.title||!/^https:\/\//i.test(p.url||''))return;
    const id=key(p),tk=titleKey(p);
    let record=byId.get(id)||(tk.length>35?byTitle.get(tk):null);
    if(!record){record={...p,projects:[],kinds:[],memberIds:[],verifiedMemberIds:[],orcidSources:[]};records.push(record);}
    byId.set(id,record);if(tk.length>35)byTitle.set(tk,record);
    if(!record.doi&&p.doi){record.doi=p.doi;record.url=p.url;}
    if(!record.year&&p.year)record.year=p.year;
    if(p.authors)record.authors=p.authors;
    if(!record.journal&&p.journal)record.journal=p.journal;
    const authorship=(window.ADOPT_PUBLICATION_AUTHORSHIP||{})[id];
    if(authorship)record.authorship=authorship;
    const ordered=(record.authorship?.members||[]).map(m=>m.memberId);
    record.memberIds=[...new Set([...record.memberIds,...(p.members||[]),...ordered])];
    if(origin!=='orcid')record.verifiedMemberIds=[...new Set([...record.verifiedMemberIds,...(p.members||[]),...ordered])];
    record.orcidSources=[...new Set([...record.orcidSources,...(p.orcidSources||[])])];
    if(project&&!record.projects.some(x=>x.id===project.id))record.projects.push(project);
    if(kind&&!record.kinds.includes(kind))record.kinds.push(kind);
  }
  const projects=window.ADOPT_PROJECTS||[];
  projects.forEach(project=>{
    const entry=(window.ADOPT_PROJECT_PAPERS||{})[project.id]||{};
    [...(entry.recent||[]),...(entry.foundational||[])].forEach(p=>add(p,project,'instrument','project'));
    ((window.ADOPT_INSTRUMENT_SCIENCE_PAPERS||{})[project.id]?.papers||[]).forEach(p=>add(p,project,'science','project'));
  });
  (window.ADOPT_MEMBER_PUBLICATIONS||[]).forEach(p=>add(p,projects.find(x=>x.id===p.project),p.project?'instrument':'research','curated'));
  (window.ADOPT_ORCID_PUBLICATIONS||[]).forEach(p=>add(p,null,'research','orcid'));
  window.ADOPT_CATALOGUE=records.sort((a,b)=>Number(b.year)-Number(a.year)||a.title.localeCompare(b.title));
})();
