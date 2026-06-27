import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Start Here',
      href: getPermalink('/start-here'),
    },
    {
      text: 'Career Decisions',
      links: [
        { text: 'Is a PhD Right for Me?', href: getBlogPermalink() },
        { text: 'Should I Do a Predoc?', href: getBlogPermalink() },
        { text: "Master's vs Predoc", href: getBlogPermalink() },
        { text: 'Choosing Research Fields', href: getBlogPermalink() },
      ],
    },
    {
      text: 'Research Experience',
      links: [
        { text: 'Finding an RA Position', href: getBlogPermalink() },
        { text: 'Working with a PI', href: getBlogPermalink() },
        { text: 'Building Research Skills', href: getBlogPermalink() },
      ],
    },
    {
      text: 'Applications',
      links: [
        { text: 'CV', href: getBlogPermalink() },
        { text: 'Statement of Purpose', href: getBlogPermalink() },
        { text: 'Recommendation Letters', href: getBlogPermalink() },
        { text: 'Interviews', href: getBlogPermalink() },
        { text: 'School Lists', href: getBlogPermalink() },
      ],
    },
    {
      text: 'Regions',
      links: [
        { text: 'US & Canada', href: getBlogPermalink() },
        { text: 'UK', href: getBlogPermalink() },
        { text: 'Europe', href: getBlogPermalink() },
        { text: 'Hong Kong', href: getBlogPermalink() },
      ],
    },
    {
      text: 'Resources',
      href: getPermalink('/resources'),
    },
  ],
  actions: [
    {
      text: '申请辅导',
      href: getPermalink('/mentoring'),
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '决策指南',
      links: [
        { text: 'Is a PhD Right for Me?', href: getBlogPermalink() },
        { text: 'Should I Do a Predoc?', href: getBlogPermalink() },
        { text: "Master's vs Predoc", href: getBlogPermalink() },
        { text: 'Choosing Research Fields', href: getBlogPermalink() },
      ],
    },
    {
      title: '研究经历',
      links: [
        { text: 'Finding an RA Position', href: getBlogPermalink() },
        { text: 'Working with a PI', href: getBlogPermalink() },
        { text: 'Building Research Skills', href: getBlogPermalink() },
      ],
    },
    {
      title: '申请材料',
      links: [
        { text: 'CV', href: getBlogPermalink() },
        { text: 'Statement of Purpose', href: getBlogPermalink() },
        { text: 'Recommendation Letters', href: getBlogPermalink() },
        { text: 'Interviews', href: getBlogPermalink() },
        { text: 'School Lists', href: getBlogPermalink() },
      ],
    },
    {
      title: '地区',
      links: [
        { text: 'US & Canada', href: getBlogPermalink() },
        { text: 'UK', href: getBlogPermalink() },
        { text: 'Europe', href: getBlogPermalink() },
        { text: 'Hong Kong', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Start Here', href: getPermalink('/start-here') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Resources', href: getPermalink('/resources') },
    { text: 'Mentoring', href: getPermalink('/mentoring') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'WeChat', icon: 'tabler:brand-wechat', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="text-muted">Best Studio</span> · Decision Intelligence for Early Academic Careers · All rights reserved.
  `,
};
