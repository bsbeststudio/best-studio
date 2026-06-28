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
    audience: ['正在考虑 PhD 的本科生或硕士生', '在学术界和工业界之间摇摆的申请者', '不确定自己是否适合长期科研训练的学生'],
    pillars: ['真实的学术职业路径', '学术界 vs 工业界的取舍', 'PhD 准备度与机会成本'],
    placeholders: [
      { slug: 'should-you-do-phd', title: '你真的适合读 PhD 吗？', type: 'Decision', status: 'Published' },
      { slug: 'gpa-myth', title: '误区：为什么高 GPA 还不够？', type: 'Myth', status: 'Published' },
      { slug: 'what-academic-careers-look-like', title: '学术职业真实长什么样？', type: 'Guide', status: 'Planned' },
      { slug: 'academic-research-vs-industry-research', title: '学术研究 vs 工业界研究：怎么选？', type: 'Decision', status: 'Planned' },
      { slug: 'opportunity-cost-of-academic-track', title: '继续走学术路线的机会成本', type: 'Decision', status: 'Planned' },
      { slug: 'research-fields-guide', title: '研究型学科地图：经济、政策、金融、商科、政治学、统计', type: 'Guide', status: 'Planned' },
    ],
  },
  {
    slug: 'research-experience',
    navTitle: '科研经历',
    title: '科研经历',
    kicker: 'Hub 02',
    description: '解释什么样的科研经历真的有含金量，以及如何把经历转化为申请中的可信证据。',
    primaryQuestion: '什么才算有意义的科研经历？',
    audience: ['想找第一段 RA 机会的本科生', '希望补强科研背景的硕士生', '不确定自己经历是否足够强的申请者'],
    pillars: ['找到第一段科研机会', '从执行任务走向研究判断', '为推荐信积累可描述的证据'],
    placeholders: [
      { slug: 'research-experience-quality', title: '什么算科研经历？不是所有 RA 都等价', type: 'Myth', status: 'Published' },
      { slug: 'how-to-find-first-ra-opportunity', title: '如何找到第一段 RA 机会？', type: 'Guide', status: 'Published' },
      { slug: 'cold-email-guide', title: '套磁邮件怎么写？给教授发邮件的完整指南', type: 'Guide', status: 'Published' },
      { slug: 'how-to-work-with-professor', title: '如何和教授合作，而不浪费这段关系？', type: 'Guide', status: 'Published' },
      { slug: 'independent-research-vs-assistant-work', title: '独立研究 vs 辅助工作：哪个更有价值？', type: 'Decision', status: 'Planned' },
      { slug: 'how-to-build-research-portfolio', title: '如何建立你的科研档案？', type: 'Guide', status: 'Planned' },
      { slug: 'research-experience-self-audit', title: '科研经历自查清单', type: 'Resource', status: 'Planned' },
    ],
  },
  {
    slug: 'ra-predoc',
    navTitle: 'RA & Predoc',
    title: 'RA & Predoc',
    kicker: 'Hub 03',
    description: '系统梳理兼职 RA、全职 RA、Predoc 的区别，以及它们如何影响 PhD 申请竞争力。',
    primaryQuestion: 'RA 或 Predoc 是否真的能改善我的申请路径？',
    audience: ['正在考虑 Predoc 的学生', '在硕士和 Predoc 之间选择的申请者', '希望提高 PhD 申请竞争力的 RA 或 Predoc'],
    pillars: ['RA 与 Predoc 的本质区别', 'Predoc 申请策略', '导师评估与项目选择'],
    placeholders: [
      { slug: 'predoc-complete-guide', title: '什么是 Predoc？经济学 Predoc 完整指南', type: 'Guide', status: 'Published' },
      { slug: 'ra-vs-predoc', title: 'RA vs Predoc：真正的区别是什么？', type: 'Guide', status: 'Published' },
      { slug: 'advisor-signal-decoding', title: '如何判断一个 Predoc 或 RA 导师是否值得合作？', type: 'Guide', status: 'Published' },
      { slug: 'work-authorization-strategy', title: '工作签证与身份：中国学生申请 Predoc 和 RA 前必须知道的事', type: 'Guide', status: 'Published' },
      { slug: 'who-should-not-do-a-predoc', title: '谁不应该做 Predoc？', type: 'Decision', status: 'Planned' },
      { slug: 'predoc-application-timeline', title: 'Predoc 申请时间线', type: 'Guide', status: 'Planned' },
      { slug: 'predoc-offer-comparison-worksheet', title: 'Predoc Offer 对比表', type: 'Resource', status: 'Planned' },
      { slug: 'predoc-compensation-location-database', title: 'Predoc 薪资与地点数据库', type: 'Data', status: 'Planned' },
    ],
  },
  {
    slug: 'phd-applications',
    navTitle: 'PhD 申请',
    title: 'PhD 申请',
    kicker: 'Hub 04',
    description: '覆盖选校、CV、SOP、推荐信、面试和时间线，帮助学生把背景转化成清晰的申请叙事。',
    primaryQuestion: '如何把我的背景组织成一套有说服力的 PhD 申请？',
    audience: ['准备本轮申请的学生', '正在做 school list 的 Predoc', '想诊断申请材料短板的申请者'],
    pillars: ['申请策略', '材料与推荐信', '选校与面试'],
    placeholders: [
      { slug: 'phd-application-timeline', title: 'PhD 申请时间线：12 个月规划指南', type: 'Guide', status: 'Published' },
      { slug: 'recommendation-letters', title: '推荐信：招生委员会真正看什么？', type: 'Myth', status: 'Published' },
      { slug: 'academic-cv-guide', title: 'Academic CV 怎么写？经济学 PhD 申请简历指南', type: 'Guide', status: 'Published' },
      { slug: 'narrative-fragmentation', title: '为什么你的申请材料讲不出一个完整故事？', type: 'Guide', status: 'Published' },
      { slug: 'sop-guide', title: '研究型申请者的 SOP 指南', type: 'Guide', status: 'Published' },
      { slug: 'school-list-strategy', title: '选校策略：冲刺、匹配和保底项目怎么分配？', type: 'Decision', status: 'Published' },
      { slug: 'phd-interview-prep', title: 'PhD 面试准备：经济学 PhD 面试会问什么？', type: 'Guide', status: 'Published' },
      { slug: 'recommendation-request-email-templates', title: '推荐信请求邮件模板', type: 'Resource', status: 'Planned' },
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

export const getTopicPages = (): TopicPage[] =>
  topicClusters.flatMap((cluster) =>
    [...cluster.placeholders, getClusterFaqPage(cluster), getClusterCaseStudyPage(cluster)].map((topic) => ({
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
    }))
  );

export const findTopicCluster = (slug: string) => {
  const cluster = topicClusters.find((item) => item.slug === slug);
  if (!cluster) throw new Error(`Unknown topic cluster: ${slug}`);
  return cluster;
};
