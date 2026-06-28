import { getCollection } from 'astro:content';

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

export const typeLabels: Record<TopicType, string> = {
  Decision: '决策',
  Guide: '指南',
  Myth: '误区',
  Resource: '资源',
  Data: '数据',
  FAQ: '问答',
  'Case Study': '案例',
};

export const statusLabels: Record<TopicStatus, string> = {
  Planned: '规划中',
  Draft: '草稿',
  Published: '已发布',
};

const defaultHeadings = ['概览', '适合谁', '核心问题', '常见错误', 'FAQ', '相关文章'];
const faqHeadings = ['概览', '常见问题', '相关文章'];
const caseStudyHeadings = ['概览', '案例背景', '决策过程', '结果', '相关文章'];

export const topicClusters: TopicCluster[] = [
  {
    slug: 'research-careers',
    navTitle: '科研职业',
    title: '科研职业',
    kicker: 'Hub 01',
    description: '帮助中国学生判断自己是否适合研究型路径，再决定要不要投入 PhD、RA 或 Predoc 申请。',
    primaryQuestion: '我应该把早期职业路径建立在科研上吗？',
    audience: [
      '正在考虑 PhD 的本科生或硕士生',
      '在学术界和工业界之间摇摆的申请者',
      '不确定自己是否适合长期科研训练的学生',
    ],
    pillars: ['真实的学术职业路径', '学术界 vs 工业界的取舍', 'PhD 准备度与机会成本'],
    placeholders: [
      {
        slug: 'what-academic-careers-look-like',
        title: '学术职业真实长什么样？',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'academic-research-vs-industry-research',
        title: '学术研究 vs 工业界研究：怎么选？',
        type: 'Decision',
        status: 'Planned',
      },
      {
        slug: 'opportunity-cost-of-academic-track',
        title: '继续走学术路线的机会成本',
        type: 'Decision',
        status: 'Planned',
      },
      {
        slug: 'research-fields-guide',
        title: '研究型学科地图：经济、政策、金融、商科、政治学、统计',
        type: 'Guide',
        status: 'Planned',
      },
    ],
  },
  {
    slug: 'research-experience',
    navTitle: '科研经历',
    title: '科研经历',
    kicker: 'Hub 02',
    description: '解释什么样的科研经历真的有含金量，以及如何把经历转化为申请中的可信证据。',
    primaryQuestion: '什么才算有意义的科研经历？',
    audience: [
      '想找第一段 RA 机会的本科生',
      '希望补强科研背景的硕士生',
      '不确定自己经历是否足够强的申请者',
    ],
    pillars: ['找到第一段科研机会', '从执行任务走向研究判断', '为推荐信积累可描述的证据'],
    placeholders: [
      {
        slug: 'how-to-build-research-portfolio',
        title: '如何建立你的科研档案？',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'research-experience-self-audit',
        title: '科研经历自查清单',
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
    description: '系统梳理兼职 RA、全职 RA、Predoc 的区别，以及它们如何影响 PhD 申请竞争力。',
    primaryQuestion: 'RA 或 Predoc 是否真的能改善我的申请路径？',
    audience: [
      '正在考虑 Predoc 的学生',
      '在硕士和 Predoc 之间选择的申请者',
      '希望提高 PhD 申请竞争力的 RA 或 Predoc',
    ],
    pillars: ['RA 与 Predoc 的本质区别', 'Predoc 申请策略', '导师评估与项目选择'],
    placeholders: [
      {
        slug: 'predoc-application-timeline',
        title: 'Predoc 申请时间线',
        type: 'Guide',
        status: 'Planned',
      },
      {
        slug: 'predoc-offer-comparison-worksheet',
        title: 'Predoc Offer 对比表',
        type: 'Resource',
        status: 'Planned',
      },
      {
        slug: 'predoc-compensation-location-database',
        title: 'Predoc 薪资与地点数据库',
        type: 'Data',
        status: 'Planned',
      },
    ],
  },
  {
    slug: 'phd-applications',
    navTitle: 'PhD 申请',
    title: 'PhD 申请',
    kicker: 'Hub 04',
    description: '覆盖选校、CV、SOP、推荐信、面试和时间线，帮助学生把背景转化成清晰的申请叙事。',
    primaryQuestion: '如何把我的背景组织成一套有说服力的 PhD 申请？',
    audience: [
      '准备本轮申请的学生',
      '正在做 school list 的 Predoc',
      '想诊断申请材料短板的申请者',
    ],
    pillars: ['申请策略', '材料与推荐信', '选校与面试'],
    placeholders: [
      {
        slug: 'recommendation-request-email-templates',
        title: '推荐信请求邮件模板',
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
  title: `${cluster.title} 案例库`,
  type: 'Case Study',
  status: 'Planned',
  headings: caseStudyHeadings,
});

/** Hub 页和 content-map 用：合并了已发布文章（来自 .md）和规划中占位（来自此文件）。 */
export type ClusterItem = {
  slug: string;
  title: string;
  type: TopicType;
  status: TopicStatus;
  /** 已发布文章指向 /guides/，规划中占位指向 /topics/ */
  href: string;
};

export const getClusterItems = async (clusterSlug: string): Promise<ClusterItem[]> => {
  const cluster = topicClusters.find((c) => c.slug === clusterSlug);
  if (!cluster) return [];

  const posts = await getCollection('post');

  const published: ClusterItem[] = posts
    .filter((p) => p.data.topicCluster === clusterSlug)
    .map((p) => {
      const slug = p.id.replace(/\.mdx?$/, '');
      return {
        slug,
        title: p.data.title,
        type: (p.data.topicType ?? 'Guide') as TopicType,
        status: 'Published' as const,
        href: `/guides/${slug}`,
      };
    });

  const planned: ClusterItem[] = cluster.placeholders.map((item) => ({
    slug: item.slug,
    title: item.title,
    type: item.type,
    status: item.status,
    href: topicPath(item),
  }));

  return [...published, ...planned];
};

export const getTopicPages = async (): Promise<TopicPage[]> => {
  const posts = await getCollection('post');

  return topicClusters.flatMap((cluster) => {
    // 已发布文章：从 .md frontmatter 读取，/topics/ 路由只作 301 跳转
    const publishedPages: TopicPage[] = posts
      .filter((p) => p.data.topicCluster === cluster.slug)
      .map((p) => {
        const slug = p.id.replace(/\.mdx?$/, '');
        return {
          slug,
          title: p.data.title,
          type: (p.data.topicType ?? 'Guide') as TopicType,
          status: 'Published' as const,
          cluster,
          canonical: topicPath({ slug }),
          description: p.data.excerpt ?? `${p.data.title} — Best Studio「${cluster.title}」主题下的中文指南。`,
          breadcrumbs: [
            { text: '首页', href: '/' },
            { text: cluster.title, href: `/${cluster.slug}` },
            { text: p.data.title, href: topicPath({ slug }) },
          ],
        };
      });

    // 规划中占位：仍从此文件读取，/topics/ 路由渲染占位页
    const plannedPages: TopicPage[] = [
      ...cluster.placeholders,
      getClusterFaqPage(cluster),
      getClusterCaseStudyPage(cluster),
    ].map((topic) => ({
      ...topic,
      headings: topic.headings ?? defaultHeadings,
      cluster,
      canonical: topicPath(topic),
      description: `${topic.title} — Best Studio「${cluster.title}」主题下的中文指南。`,
      breadcrumbs: [
        { text: '首页', href: '/' },
        { text: cluster.title, href: `/${cluster.slug}` },
        { text: topic.title, href: topicPath(topic) },
      ],
    }));

    return [...publishedPages, ...plannedPages];
  });
};

export const findTopicCluster = (slug: string) => {
  const cluster = topicClusters.find((item) => item.slug === slug);
  if (!cluster) throw new Error(`Unknown topic cluster: ${slug}`);
  return cluster;
};
