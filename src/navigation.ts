import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Start Here', href: getPermalink('/start-here') },
    { text: 'Research Careers', href: getPermalink('/research-careers') },
    { text: 'Research Experience', href: getPermalink('/research-experience') },
    { text: 'RA & Predoc', href: getPermalink('/ra-predoc') },
    { text: 'PhD Applications', href: getPermalink('/phd-applications') },
    { text: 'Resources', href: getPermalink('/resources') },
    { text: 'Mentoring', href: getPermalink('/mentoring') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Topic Hubs',
      links: [
        { text: 'Research Careers', href: getPermalink('/research-careers') },
        { text: 'Research Experience', href: getPermalink('/research-experience') },
        { text: 'RA & Predoc', href: getPermalink('/ra-predoc') },
        { text: 'PhD Applications', href: getPermalink('/phd-applications') },
      ],
    },
    {
      title: 'Start',
      links: [
        { text: 'Start Here', href: getPermalink('/start-here') },
        { text: 'All Guides', href: getPermalink('/guides') },
        { text: 'Content Map', href: getPermalink('/content-map') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'Mentoring', href: getPermalink('/mentoring') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    <span class="text-muted">Best Studio</span> - Academic career planning for research-oriented students.
  `,
};
