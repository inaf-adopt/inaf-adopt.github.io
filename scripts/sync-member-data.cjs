// Mirrors approved editable member JSON fields into people-data.js without changing names or portraits.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const sourcePath=path.join(root,'people-data.js');
const source=fs.readFileSync(sourcePath,'utf8');
global.window={};
require(sourcePath);
const people=window.ADOPT_PEOPLE;
const keys={role:'role',tag:'tag',bio:'bio',longBio:'long_bio',orcid:'orcid',links:'links',projects:'projects'};
for(const person of people){
  const filename=path.join(root,'members',person.id+'.json');
  if(!fs.existsSync(filename))throw Error('Missing member record: '+person.id);
  const row=JSON.parse(fs.readFileSync(filename,'utf8'));
  if(row.member_id!==person.id)throw Error('Mismatched member ID: '+person.id);
  for(const [dest,key] of Object.entries(keys))person[dest]=row[key];
}
const prefix=source.slice(0,source.indexOf('window.ADOPT_PEOPLE = '));
if(!prefix)throw Error('Cannot find team data declaration.');
const desired=prefix+'window.ADOPT_PEOPLE = '+JSON.stringify(people,null,2)+';\n';
if(process.argv.includes('--check')){
  if(source!==desired)throw Error('people-data.js is not synchronized with approved member JSON records.');
  console.log('Verified synchronization for '+people.length+' members.');
}else{
  if(source!==desired)fs.writeFileSync(sourcePath,desired);
  console.log('Synchronized '+people.length+' members'+(source===desired?' (no changes)':' (updated)')+'.');
}
