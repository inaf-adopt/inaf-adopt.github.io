// Check index, project-page metadata, current member data, and publication provenance.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');global.window={};
for(const file of ['site-data.js','people-data.js','search-index.js','project-papers.js','member-publications.js'])require(path.join(root,file));
const people=window.ADOPT_PEOPLE,projects=window.ADOPT_PROJECTS;
const ids=new Set(people.map(x=>x.id));
assert.equal(ids.size,people.length,'Duplicate member ID');
const projectNames=new Set(projects.map(x=>x.name));
assert.equal(new Set(projects.map(x=>x.id)).size,projects.length,'Duplicate project ID');
const drift=[];
for(const person of people){
 const file=path.join(root,'members',person.id+'.json');
 assert(fs.existsSync(file),'Missing member JSON for '+person.id);
 const row=JSON.parse(fs.readFileSync(file,'utf8'));
 if(!process.argv.includes('--allow-profile-drift')){
  for(const [a,b] of [['role','role'],['tag','tag'],['bio','bio'],['longBio','long_bio'],['orcid','orcid'],['projects','projects'],['links','links']]){
   if(JSON.stringify(person[a])!==JSON.stringify(row[b]))drift.push(person.id+':'+a);
  }
 }
 for(const name of person.projects)assert(projectNames.has(name),'Unknown project in '+person.id+': '+name);
}
assert.deepEqual(drift,[],'Member JSON/People data are out of sync');
for(const project of projects){
 const filename='project-'+project.id+'.html';
 const html=fs.readFileSync(path.join(root,filename),'utf8');
 assert(html.includes('data-project-id="'+project.id+'"'),'Missing project ID in '+filename);
 assert(html.includes('https://inaf-adopt.github.io/'+filename),'Missing canonical link in '+filename);
 assert(html.includes('<meta name="description"'),'Missing description in '+filename);
}
const records=window.ADOPT_SEARCH_INDEX||[];
const indexedUrls=records.map(r=>r.url);
assert.equal(new Set(indexedUrls).size,indexedUrls.length,'Duplicate search URLs');
for(const url of indexedUrls)assert(!ids.has(url.replace(/\.html$/,''))&&!/^project-/.test(url),'Search index duplicates dynamic record: '+url);
for(const pub of window.ADOPT_MEMBER_PUBLICATIONS||[]){
 assert(Number.isInteger(pub.year)&&pub.year>=1900&&pub.year<=2026,'Unverified or missing publication year: '+pub.title);
 assert(pub.url&&/^https:\/\//.test(pub.url),'Missing secure publication URL');
 for(const member of pub.members||[])assert(ids.has(member),'Unknown publication member: '+member);
}
console.log('Site checks passed: '+people.length+' people, '+projects.length+' projects, '+records.length+' static index entries, '+(window.ADOPT_MEMBER_PUBLICATIONS||[]).length+' curated member publications.');
