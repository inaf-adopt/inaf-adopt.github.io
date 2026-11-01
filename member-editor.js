(function(){
  'use strict';
  const $=id=>document.getElementById(id),people=window.ADOPT_PEOPLE||[],projects=window.ADOPT_PROJECTS||[];
  const status=(message,error=false)=>{$('editor-status').textContent=message;$('editor-status').dataset.error=String(error);};
  let currentId='',dirty=false;
  function option(value,label){const o=document.createElement('option');o.value=value;o.textContent=label;return o;}
  for(const p of people)$('profile-select').append(option(p.id,p.name));
  for(const project of projects){const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=project.name;input.name='project';label.append(input,document.createTextNode(project.name));$('edit-projects').append(label);}
  function formValue(){
    const norm=v=>v.trim().replace(/[\t ]+/g,' ');
    const orcid=$('edit-orcid').value.trim();
    if(orcid){if(!/^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(orcid))throw Error('Enter a valid ORCiD, or leave the field empty.');let total=0;for(const digit of orcid.replace(/-/g,'').slice(0,15))total=(total+Number(digit))*2;const result=(12-total%11)%11;if((result===10?'X':String(result))!==orcid.slice(-1))throw Error('The ORCiD check digit is not valid. Please check the identifier.');}
    const links=$('edit-links').value.split('\n').filter(x=>x.trim()).map(line=>{const split=line.indexOf('|');if(split<1)throw Error('Use label | https://address for each profile link.');const label=norm(line.slice(0,split)),url=line.slice(split+1).trim();let parsed;try{parsed=new URL(url);}catch{throw Error('A profile link has an invalid address.');}if(parsed.protocol!=='https:'||parsed.username||parsed.password||label.length>160||url.length>1000)throw Error('Profile links must use HTTPS, with a short label and no embedded credentials.');return {label,url};});
    if(links.length>8)throw Error('Please use no more than eight profile links.');
    return {role:norm($('edit-role').value),tag:norm($('edit-tag').value),bio:norm($('edit-bio').value),long_bio:$('edit-about').value.trim().replace(/[\t ]+/g,' ').replace(/\n{3,}/g,'\n\n'),orcid,links,projects:Array.from($('edit-projects').querySelectorAll('input:checked'),x=>x.value)};
  }

  async function loadProfile(){
    $('profile-form').hidden=true;$('prepared-panel').hidden=true;$('profile-select').disabled=true;
    const id=$('profile-select').value;
    try{
      const response=await fetch('members/'+encodeURIComponent(id)+'.json',{cache:'no-cache',signal:AbortSignal.timeout(10000)});
      if(!response.ok)throw Error('Unable to load the current profile. Please try again.');
      const row=await response.json();
      for(const [input,key] of [['edit-role','role'],['edit-tag','tag'],['edit-bio','bio'],['edit-about','long_bio'],['edit-orcid','orcid']])$(input).value=row[key]||'';
      $('edit-links').value=(row.links||[]).map(l=>l.label+' | '+l.url).join('\n');
      for(const input of $('edit-projects').querySelectorAll('input'))input.checked=(row.projects||[]).includes(input.value);
      $('view-profile').href=id+'.html';$('github-edit').href='https://github.com/inaf-adopt/inaf-adopt.github.io/edit/main/members/'+encodeURIComponent(id)+'.json';
      currentId=id;dirty=false;$('profile-form').hidden=false;status('Editing a local draft for '+people.find(p=>p.id===id).name+'. Submit it through GitHub when ready.');
    }catch(error){status(error.message,true);}finally{$('profile-select').disabled=false;}
  }
  $('profile-select').addEventListener('change',()=>{if(dirty&&!window.confirm('Discard this unsent draft and choose another profile?')){$('profile-select').value=currentId;return;}loadProfile();});
  $('profile-form').addEventListener('input',()=>{dirty=true;$('prepared-panel').hidden=true;});
  $('profile-form').addEventListener('submit',event=>{event.preventDefault();try{$('prepared-json').value=JSON.stringify({member_id:currentId,...formValue()},null,2)+'\n';$('prepared-panel').hidden=false;status('Draft prepared. Copy it into GitHub and submit a pull request for review. Nothing has been published yet.');$('prepared-json').focus();}catch(error){status(error.message,true);}});
  $('copy-update').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('prepared-json').value);status('Copied. Open the GitHub editor, replace the file contents, and propose your change.');}catch{$('prepared-json').focus();$('prepared-json').select();status('Select and copy the prepared text using your keyboard.');}});
  const requested=new URLSearchParams(location.search).get('member');if(people.some(p=>p.id===requested))$('profile-select').value=requested;
  window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
  loadProfile();
})();
