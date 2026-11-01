const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');global.window={};require(path.join(root,'people-data.js'));require(path.join(root,'site-data.js'));
const allowed=new Set(['member_id','role','tag','bio','long_bio','orcid','links','projects']);
function validate(row,id){
 assert.equal(row.member_id,id,'Member ID must match the filename');assert.deepEqual(Object.keys(row).sort(),[...allowed].sort(),'Unexpected or missing field');
 for(const [key,max] of [['role',160],['tag',100],['bio',800],['long_bio',6000]]){assert.equal(typeof row[key],'string');assert(row[key].trim().length>0&&row[key].length<=max,'Invalid '+key);assert(!/[<>]/.test(row[key]),'Use plain text');}
 assert.equal(typeof row.orcid,'string');
 if(row.orcid){assert(/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(row.orcid),'Invalid ORCiD');let total=0;for(const d of row.orcid.replace(/-/g,'').slice(0,15))total=(total+Number(d))*2;const check=(12-total%11)%11;assert.equal(row.orcid.slice(-1),check===10?'X':String(check),'ORCiD checksum mismatch');}
 assert(Array.isArray(row.links)&&row.links.length<=8,'Invalid links');for(const l of row.links){assert.deepEqual(Object.keys(l).sort(),['label','url']);assert(typeof l.label==='string'&&l.label.trim()&&l.label.length<=160);const u=new URL(l.url);assert(u.protocol==='https:'&&!u.username&&!u.password&&l.url.length<=1000,'Use HTTPS links without credentials');}
 assert(Array.isArray(row.projects)&&row.projects.length<=40);for(const p of row.projects)assert(window.ADOPT_PROJECTS.some(x=>x.name===p),'Unknown project: '+p);
}
const members=window.ADOPT_PEOPLE;
assert.equal(fs.readdirSync(path.join(root,'members')).filter(f=>f.endsWith('.json')).length,members.length);
for(const p of members){validate(JSON.parse(fs.readFileSync(path.join(root,'members',p.id+'.json'),'utf8')),p.id);}
if(process.argv.includes('--self-test')){
 const id=members[0].id,good=JSON.parse(fs.readFileSync(path.join(root,'members',id+'.json'),'utf8'));
 for(const patch of [{member_id:'other-member'},{bio:'<script>alert(1)</script>'},{orcid:'0000-0000-0000-0000'},{projects:['Unknown instrument']},{links:[{label:'Bad',url:'javascript:alert(1)'}]},{role:''}])assert.throws(()=>validate({...good,...patch},id));
 console.log('Invalid identifiers, markup, ORCiDs, projects, links and empty roles rejected.');
}
console.log('Validated '+members.length+' member profile files.');
