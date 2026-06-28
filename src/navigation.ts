import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '从这里开始', href: getPermalink('/start-here') },
    { text: '科研职业', href: getPermalink('/research-careers') },
    { text: '科研经历', href: getPermalink('/research-experience') },
    { text: 'RA & Predoc', href: getPermalink('/ra-predoc') },
    { text: 'PhD 申请', href: getPermalink('/phd-applications') },
    { text: '资源', href: getPermalink('/resources') },
    { text: '辅导', href: getPermalink('/mentoring') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '主题 Hub',
      links: [
        { text: '科研职业', href: getPermalink('/research-careers') },
        { text: '科研经历', href: getPermalink('/research-experience') },
        { text: 'RA & Predoc', href: getPermalink('/ra-predoc') },
        { text: 'PhD 申请', href: getPermalink('/phd-applications') },
      ],
    },
    {
      title: '开始阅读',
      links: [
        { text: '从这里开始', href: getPermalink('/start-here') },
        { text: '全部指南', href: getPermalink('/guides') },
        { text: '内容地图', href: getPermalink('/content-map') },
      ],
    },
    {
      title: '支持',
      links: [
        { text: '资源', href: getPermalink('/resources') },
        { text: '辅导', href: getPermalink('/mentoring') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '关于', href: getPermalink('/about') },
    { text: '隐私', href: getPermalink('/privacy') },
    { text: '条款', href: getPermalink('/terms') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    <span class="text-muted">Best Studio</span> - 面向中国学生的学术早期职业规划知识库。
  `,
};
