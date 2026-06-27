import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Guides', href: getBlogPermalink() },
    { text: 'Mentoring', href: getPermalink('/mentoring') },
    { text: 'Resources', href: getPermalink('/resources') },
    { text: 'About', href: getPermalink('/about') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Best Studio',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Guides', href: getBlogPermalink() },
        { text: 'Mentoring', href: getPermalink('/mentoring') },
        { text: 'Resources', href: getPermalink('/resources') },
        { text: 'About', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="text-muted">Best Studio</span> &middot; All rights reserved.
  `,
};
