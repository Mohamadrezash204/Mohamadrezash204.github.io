Copy these files into your repository root: Mohamadrezash204.github.io

Important:
1) Delete .nojekyll if it exists.
2) This package replaces your manual blog index with automatic Jekyll blog lists.
3) English and Persian posts live together in _posts/ and are separated by lang: en/fa.
4) To add a new Persian post, create _posts/YYYY-MM-DD-title.md with lang: fa and dir: rtl.
5) To add a new English post, create _posts/YYYY-MM-DD-title.md with lang: en.

Easy writing workflow:
1) Copy content-templates/persian-post.md or content-templates/english-post.md.
2) Paste it into _posts/ and rename it like YYYY-MM-DD-short-title.md.
3) Change title, date, permalink, excerpt, and then replace the body text.
4) Persian and English paragraphs are aligned automatically based on their first strong letter.
5) For manual control, wrap a block with:
   <div class="ltr-block">English text here</div>
   <div class="rtl-block">متن فارسی اینجا</div>

After copying:
  git add .
  git commit -m "Convert site to Jekyll automatic blog"
  git push origin main

Live URLs:
  /blog/
  /fa/blog/
  /fa/blog/dar-bab-e-esalat/
