"""Static HTML pages are authored directly. This command refreshes the search index."""
import runpy
from pathlib import Path
if __name__ == '__main__':
    runpy.run_path(str(Path(__file__).with_name('build_search_index.py')), run_name='__main__')
