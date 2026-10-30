from pathlib import Path
import json, re
from bs4 import BeautifulSoup
root=Path(__file__).parent
records=[]
for fname in ('index.html','research.html','projects.html','people.html','publications.html','contact.html','credits.html'):
    dom=BeautifulSoup((root/fname).read_text(encoding='utf-8'),'html.parser')
    title=(dom.title.get_text(' ',strip=True).split(' — ADOPT')[0] if dom.title else fname)
    for section in dom.select('main section'):
        # Every section is a separate search hit, with real text and source page.
        for trash in section.select('script,style,svg,.project-grid,.search-results'):
            trash.decompose()
        label=section.select_one('h1,h2,h3')
        label=label.get_text(' ',strip=True) if label else title
        text=re.sub(r'\s+',' ',section.get_text(' ',strip=True)).strip()
        if len(text)<30:continue
        # Omit duplicated fixed CTA text if already indexed in another section.
        records.append({'title':title,'section':label,'url':fname,'type':'Site page','text':text[:4500]})
# Search dynamic project descriptions in `site-data.js` at runtime, so they stay in sync.
(root/'search-index.js').write_text('/* Generated from site HTML. Regenerate with: python build_search_index.py */\nwindow.ADOPT_SEARCH_INDEX = '+json.dumps(records,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Indexed',len(records),'page sections')