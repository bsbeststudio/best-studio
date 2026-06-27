export type TopicType = 'Decision' | 'Guide' | 'Myth' | 'Resource' | 'Data' | 'FAQ' | 'Case Study';
export type TopicStatus = 'Planned' | 'Draft' | 'Published';

export type TopicPlaceholder = {
  slug: string;
  title: string;
  type: TopicType;
  status: TopicStatus;
  headings?: string[];
};

export type TopicCluster = {
  slug: string;
  navTitle: string;
  title: string;
  kicker: string;
  description: string;
  primaryQuestion: string;
  audience: string[];
  pillars: string[];
  placeholders: TopicPlaceholder[];
};

export type TopicPage = TopicPlaceholder & {
  cluster: TopicCluster;
  canonical: string;
  description: string;
  breadcrumbs: Array<{ text: string; href: string }>;
};

const defaultHeadings = [
  'Overview',
  'Who this is for',
  'Key questions',
  'Pros',
  'Cons',
  'Timeline',
  'Application process',
  'Common mistakes',
  'FAQ',
  'Related articles',
];

const faqHeadings = ['Overview', 'Questions to add', 'Short answers placeholder', 'Related articles'];
const caseStudyHeadings = ['Overview', 'Case study slots', 'Decision context', 'Outcome notes', 'Related articles'];

export const topicClusters: TopicCluster[] = [
  {
    slug: 'research-careers',
    navTitle: 'Research Careers',
    title: 'Research Careers',
    kicker: 'Hub 01',
    description:
      'The entry point for deciding whether a research-oriented academic path is worth pursuing before optimizing applications.',
    primaryQuestion: 'Should I build my early career around research?',
    audience: [
      'Students exploring PhD paths',
      'Applicants comparing academia and industry',
      'Readers unsure whether PhD incentives fit them',
    ],
    pillars: [
      'What research careers actually look like',
      'Academic vs industry tradeoffs',
      'PhD readiness and opportunity cost',
    ],
    placeholders: [
      { slug: 'should-you-do-a-phd', title: 'Should you do a PhD?', type: 'Decision', status: 'Published' },
      {
        slug: 'what-academic-careers-look-like',
        title: 'What academic careers look like after the brochure ends',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'academic-research-vs-industry-research',
        title: 'Academic research vs industry research',
        type: 'Decision',
        status: 'Planned',
      },
      {
        slug: 'opportunity-cost-of-academic-track',
        title: 'The opportunity cost of staying on the academic track',
        type: 'Decision',
        status: 'Planned',
      },
      {
        slug: 'myth-every-strong-student-should-apply-to-phd',
        title: 'Myth: every strong student should apply to PhD programs',
        type: 'Myth',
        status: 'Planned',
      },
      {
        slug: 'research-fields-guide',
        title: 'Field guide: economics, policy, finance, business, political science, statistics',
        type: 'Guide',
        status: 'Planned',
      },
    ],
  },
  {
    slug: 'research-experience',
    navTitle: 'Research Experience',
    title: 'Research Experience',
    kicker: 'Hub 02',
    description:
      'How to build, evaluate, and explain research experience so it becomes credible evidence of research potential.',
    primaryQuestion: 'What counts as meaningful research experience?',
    audience: [
      'Undergraduates seeking first RA roles',
      'Master students trying to improve research fit',
      'Applicants evaluating whether their experience is strong enough',
    ],
    pillars: [
      'Finding first research opportunities',
      'Turning execution work into thinking work',
      'Building evidence for recommendation letters',
    ],
    placeholders: [
      {
        slug: 'what-counts-as-research-experience',
        title: 'What counts as research experience?',
        type: 'Myth',
        status: 'Published',
      },
      {
        slug: 'how-to-find-first-ra-opportunity',
        title: 'How to find your first RA opportunity',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'independent-research-vs-assistant-work',
        title: 'Independent research vs assistant work',
        type: 'Decision',
        status: 'Planned',
      },
      {
        slug: 'how-to-build-research-portfolio',
        title: 'How to build a research portfolio',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'how-to-work-with-professor',
        title: 'How to work with a professor without wasting the relationship',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'research-experience-self-audit',
        title: 'Research experience self-audit checklist',
        type: 'Resource',
        status: 'Planned',
      },
    ],
  },
  {
    slug: 'ra-predoc',
    navTitle: 'RA & Predoc',
    title: 'RA & Predoc',
    kicker: 'Hub 03',
    description:
      'Full-time and part-time research assistant paths, with special attention to predoc roles as a bridge into PhD programs.',
    primaryQuestion: 'Will an RA or predoc role materially improve my trajectory?',
    audience: [
      'Students considering predoc applications',
      'Applicants deciding between master programs and predoc roles',
      'Current RAs trying to improve placement odds',
    ],
    pillars: ['RA vs predoc differences', 'Predoc selection strategy', 'Cold outreach and interview preparation'],
    placeholders: [
      {
        slug: 'what-is-a-predoc',
        title: 'What is a Predoc?',
        type: 'Guide',
        status: 'Published',
        headings: [
          'Overview',
          'Who should consider a Predoc?',
          'Pros',
          'Cons',
          'Salary',
          'Timeline',
          'Application process',
          'Common mistakes',
          'FAQ',
          'Related articles',
        ],
      },
      { slug: 'ra-vs-predoc', title: 'RA vs predoc: the real difference', type: 'Guide', status: 'Published' },
      { slug: 'who-should-not-do-a-predoc', title: 'Who should not do a predoc?', type: 'Decision', status: 'Planned' },
      { slug: 'predoc-application-timeline', title: 'Predoc application timeline', type: 'Guide', status: 'Planned' },
      {
        slug: 'ra-predoc-cold-email-templates',
        title: 'Cold email templates for RA and predoc roles',
        type: 'Resource',
        status: 'Planned',
      },
      {
        slug: 'predoc-offer-comparison-worksheet',
        title: 'Predoc offer comparison worksheet',
        type: 'Resource',
        status: 'Planned',
      },
      {
        slug: 'predoc-compensation-location-database',
        title: 'Predoc compensation and location database',
        type: 'Data',
        status: 'Planned',
      },
    ],
  },
  {
    slug: 'phd-applications',
    navTitle: 'PhD Applications',
    title: 'PhD Applications',
    kicker: 'Hub 04',
    description: 'The application layer: school lists, CV, SOP, recommendation letters, interviews, and timing.',
    primaryQuestion: 'How do I turn my background into a coherent PhD application?',
    audience: [
      'Applicants preparing this cycle',
      'Predocs planning school lists',
      'Students diagnosing weak application materials',
    ],
    pillars: ['Application strategy', 'Materials and recommendations', 'Program selection and interviews'],
    placeholders: [
      { slug: 'phd-application-timeline', title: 'PhD application timeline', type: 'Guide', status: 'Published' },
      {
        slug: 'recommendation-letters-committee-reading',
        title: 'Recommendation letters: what committees are really reading',
        type: 'Myth',
        status: 'Published',
      },
      { slug: 'academic-cv-guide', title: 'Academic CV guide', type: 'Guide', status: 'Planned' },
      {
        slug: 'sop-guide-research-oriented-applicants',
        title: 'SOP guide for research-oriented applicants',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'school-list-strategy',
        title: 'School list strategy: reach, target, and floor programs',
        type: 'Decision',
        status: 'Planned',
      },
      { slug: 'phd-interview-preparation', title: 'PhD interview preparation', type: 'Guide', status: 'Planned' },
      {
        slug: 'recommendation-request-email-templates',
        title: 'Recommendation request email templates',
        type: 'Resource',
        status: 'Planned',
      },
    ],
  },
];

export const topicPath = (topic: Pick<TopicPlaceholder, 'slug'>) => `/topics/${topic.slug}`;

export const getClusterFaqPage = (cluster: TopicCluster): TopicPlaceholder => ({
  slug: `${cluster.slug}-faq`,
  title: `${cluster.title} FAQ`,
  type: 'FAQ',
  status: 'Planned',
  headings: faqHeadings,
});

export const getClusterCaseStudyPage = (cluster: TopicCluster): TopicPlaceholder => ({
  slug: `${cluster.slug}-case-studies`,
  title: `${cluster.title} Case Studies`,
  type: 'Case Study',
  status: 'Planned',
  headings: caseStudyHeadings,
});

export const getTopicPages = (): TopicPage[] =>
  topicClusters.flatMap((cluster) =>
    [...cluster.placeholders, getClusterFaqPage(cluster), getClusterCaseStudyPage(cluster)].map((topic) => ({
      ...topic,
      headings: topic.headings ?? defaultHeadings,
      cluster,
      canonical: topicPath(topic),
      description: `${topic.title} placeholder page in the ${cluster.title} hub.`,
      breadcrumbs: [
        { text: 'Home', href: '/' },
        { text: cluster.title, href: `/${cluster.slug}` },
        { text: topic.title, href: topicPath(topic) },
      ],
    }))
  );

export const findTopicCluster = (slug: string) => {
  const cluster = topicClusters.find((item) => item.slug === slug);

  if (!cluster) {
    throw new Error(`Unknown topic cluster: ${slug}`);
  }

  return cluster;
};
