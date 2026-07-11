(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const supported = new Set(['index.html', 'pantry.html', 'download.html', 'faq.html', 'about.html', 'support.html', 'privacy.html', 'terms.html']);
  const target = supported.has(page) ? page : 'index.html';
  const depth = location.pathname.includes('/en/') || location.pathname.includes('/zh-cn/');
  const root = depth ? '../' : '';
  const current = document.documentElement.lang;
  const nav = document.createElement('nav');
  nav.className = 'language-switcher';
  nav.setAttribute('aria-label', current === 'ja' ? '言語切替' : current === 'zh-CN' ? '语言切换' : 'Language selector');
  nav.innerHTML = [
    ['ja', '日本語', `${root}${target}`],
    ['en', 'English', `${root}en/${target}`],
    ['zh-CN', '简体中文', `${root}zh-cn/${target}`]
  ].map(([lang, label, href]) => `<a href="${href}" lang="${lang}"${current === lang ? ' aria-current="page"' : ''}>${label}</a>`).join('<span aria-hidden="true">|</span>');
  document.querySelector('.header-inner')?.append(nav);
})();
