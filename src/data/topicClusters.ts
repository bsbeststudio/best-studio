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

export type ClusterFaq = {
  q: string;
  a: string;
};

export type TopicCluster = {
  slug: string;
  navTitle: string;
  title: string;
  kicker: string;
  description: string;
  primaryQuestion: string;
  audience: string[];
  pillars: Array<{ title: string; description: string }>;
  intro: string;
  faqs: ClusterFaq[];
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
    intro: `很多中国学生在本科或硕士阶段走上科研路径，并不是因为想清楚了"我要做研究"，而是因为成绩好、老师鼓励、或者不知道还有什么别的选择。这三个出发点都不够稳固。

学术职业路径——从 PhD 到博士后到助理教授——是一条机会成本极高、充满不确定性的路。在这条路上，决定你走多远的不是课程成绩，而是你是否真的能在没有指引的情况下独立提出并推进一个研究问题。这种能力，只有在真实的研究环境里才能判断。

这个 Hub 的目的是帮你在做出任何申请承诺之前，把这个判断真正做一遍。`,
    faqs: [
      {
        q: '成绩好是否意味着适合做研究？',
        a: '不直接等价。课程里的优秀需要快速理解和复现已知知识的能力，而研究需要的是在已知边界上发现新问题的能力。两者有重叠，但不是同一件事。成绩好是进入竞争性 PhD 项目的必要条件，但不是"你适合做研究"的证据。',
      },
      {
        q: '学术界和工业界的核心区别是什么？',
        a: '学术路径的核心货币是发表记录和引用量，工业路径的核心货币是技能栈和项目经验。学术路径需要 5-6 年 PhD 加博士后，推迟了大量工业界的经验积累窗口。两条路在宏观金融研究这类高技术型方向上 placement 重叠极小，需要提前明确优先级。',
      },
      {
        q: '我需要先读 PhD 再判断适不适合吗？',
        a: '不需要。最有效的判断方式是先做一段 RA 或 Predoc——在真实研究环境里工作一到两年，观察自己的状态：你是在完成任务，还是对这个问题本身感到真实的投入？这个区别，是任何课程都无法模拟的。',
      },
    ],
    pillars: [
      { title: '真实的学术职业路径', description: '从 PhD 到助理教授到终身教职，这条路的真实时间线、成功率和日常体验是什么样的。' },
      { title: '学术界 vs 工业界的取舍', description: '两条路径在核心货币、推荐信价值、地理约束和时间线上的结构性差异，以及如何根据自己的情况判断优先级。' },
      { title: 'PhD 准备度与机会成本', description: '在做出五年承诺之前，如何评估自己是否真的适合做研究，以及这个决定放弃了什么。' },
    ],
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
    intro: `"我做过 RA"和"我有科研经历"是两件不同的事。招生委员会看 CV 上的 RA 经历，读的不是职位头衔，而是这段经历里有没有你做出研究判断的证据。

执行型工作——按照教授指令清理数据、跑回归、整理表格——在简历上写出来和真正独立提出假设、设计数据策略的经历，给推荐信提供的素材完全不同。委员会不会只看你做了什么，还会看你的推荐信里，教授是否能具体描述你解决了什么问题、如何做出判断。

这个 Hub 解答一个核心问题：如何把已有的经历变成更强的信号，以及如何在早期就往正确的方向积累。`,
    faqs: [
      {
        q: 'Replication 算科研经历吗？',
        a: '算，但有条件。独立完成已发表论文的复现（含数据清洗、回归重现、可视化）可在 CV 中列为 Research Experience。面试中被追问时需能解释复现结论与原文的异同。Replication 证明技术能力，但不证明研究创新能力——两者在申请里的信号价值不同。',
      },
      {
        q: '没有科研经历，直接申请 Predoc 可行吗？',
        a: '很难。大多数 Predoc 职位要求申请者有基本的研究基础：能独立处理数据、有基本计量经济学背景。从零开始的学生通常需要先积累一段 RA 经历，再申请 Predoc。起点是找到第一段 RA，而不是直接申请 Predoc。',
      },
      {
        q: '如何在 RA 工作中积累推荐信素材？',
        a: '核心是让教授"看见"你的判断，而不只是你的执行。主动汇报遇到的数据问题和你的处理决策，提出对分析方向的疑问，在会议前准备问题而不是被动等待——这些行为给推荐信提供可描述的具体细节，而不只是"这个学生做事认真"的泛泛评语。',
      },
    ],
    pillars: [
      { title: '找到第一段科研机会', description: '没有科研经历时如何接触教授、写冷邮件、通过课程关系建立连接——从零到第一段 RA 的完整路径。' },
      { title: '从执行任务走向研究判断', description: '如何在 RA 过程中主动提升参与深度，从"完成任务"走向"参与研究决策"，积累推荐信可描述的素材。' },
      { title: '为推荐信积累可描述的证据', description: '推荐信的信息量取决于教授能描述的具体细节。如何在合作过程中创造这些细节。' },
    ],
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
    intro: `Predoc 招募的本质是 PI 在寻找能立即上手项目的短期研究人员，同时评估候选人未来申请 PhD 时是否能为 PI 带来声誉回报。这和 PhD 招生委员会看长期潜力的逻辑完全不同——PI 看短期能力加长期声誉。

这个区别理解了，很多申请策略上的问题就有了答案：为什么通用冷邮件几乎没有回复；为什么"我对经济学很有热情"在 Cover Letter 里完全没有用；为什么拿到 Predoc offer 但导师从不指导，对 PhD 申请的帮助可能还不如一段高参与度的 RA。

不是所有 Predoc 都是好机会。评估 offer 时最重要的单一指标，是这位 PI 能为你写出多强的推荐信——而不是机构的名气或薪资水平。`,
    faqs: [
      {
        q: 'Predoc 和全职 RA 的本质区别是什么？',
        a: 'Predoc 明确以 PhD 申请为方向，有固定薪资，通常深度参与研究全流程（设计、数据、分析、写作）。全职 RA 的参与深度差异很大——有些接近 Predoc，有些只是执行型任务。关键不在于职位名称，而在于实际参与深度和推荐信质量。',
      },
      {
        q: 'Predoc 申请应该发多少封冷邮件？',
        a: '高度定制化的少量申请（15-20 封）优于大量通用申请（100+ 封）。低回复率的根本原因是定制化不足，而非候选人背景弱。有效冷邮件需要具体指出 PI 某篇论文中候选人能贡献的地方，并附上可验证的技术能力证明（GitHub 链接、Coding Sample）。',
      },
      {
        q: '如何判断一个 Predoc offer 值不值得接？',
        a: '核心评估三个维度：（1）PI 能为你提供多强的推荐信——这是最重要的指标，看 PI 在北美学术网络中的位置以及过去学生的 PhD placement 记录；（2）项目技能是否与你的 PhD 方向对齐；（3）历史上这个 Predoc 出去的人申请了哪些 PhD 项目、成功率如何。薪资是次要因素。',
      },
    ],
    pillars: [
      { title: 'RA 与 Predoc 的本质区别', description: '兼职 RA、全职 RA、Predoc 在投入深度、职业信号、推荐信质量上的真实差异，以及如何根据自己的情况选择路径。' },
      { title: 'Predoc 申请策略', description: 'PI 招募的真实逻辑、冷邮件的有效写法、时间线规划，以及不同类型机构（顶级项目 vs PI 主导）的申请差异。' },
      { title: '导师评估与项目选择', description: '接受 offer 前如何评估导师质量、项目状态和历史 placement，避免把一两年浪费在低质量的 Predoc 上。' },
    ],
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
    intro: `PhD 申请最常见的失误，不是材料不够好，而是材料之间没有一条连贯的叙事主线。CV 说的技能、SOP 写的研究方向、推荐信描述的能力——三者不一致，委员会读完之后记住的是混乱，不是候选人。

在经济学 PhD 申请里，推荐信是权重最高的单一材料，原因是委员会需要一个可信渠道来处理信息过载。写信人在北美学术网络中的位置，比信件本身的热情程度更重要——这是大多数国内背景申请者没有意识到的系统性劣势，也是 Predoc 路径在中国学生里如此普遍的根本原因。

这个 Hub 帮你把背景转化成一套内部一致、说服力强的申请材料。`,
    faqs: [
      {
        q: '推荐信最重要的决定因素是什么？',
        a: '写信人在北美学术网络中的位置是第一因素——北美终身轨教授 > 博士后 > 讲师 > 业界人士。观察情境是第二因素——科研直接观察（PI-RA 关系）>  课程观察。热情程度与网络位置是独立维度：一个非常热情但在北美网络中处于边缘的教授，其推荐信权重仍然有限。',
      },
      {
        q: 'SOP 的核心目的是什么？',
        a: 'SOP 需要回答一个问题：这个候选人有没有成为独立研究者的潜力？最有效的方式不是按时间顺序列经历，而是通过一条研究问题的主线串联所有经历——展示你在整个学术生涯里一直在追的是什么，以及这件事为什么要在这个项目继续。',
      },
      {
        q: '选校时排名和 research fit 哪个更重要？',
        a: 'Research fit 更重要，但两者都不能忽略。排名高但 fit 差的学校，录取概率不比排名低但 fit 强的学校高，而且录了之后的研究体验也会差很多。选校策略里，选那些有教授在做你真正感兴趣的问题的学校，比只看 QS 或 US News 排名更有效。',
      },
    ],
    pillars: [
      { title: '申请策略与叙事主线', description: '如何在申请材料之间建立一条连贯的叙事，以及如何诊断自己的材料在委员会眼里是否有说服力。' },
      { title: 'CV、SOP 与推荐信', description: '三份核心材料各自的评审逻辑、常见失误，以及它们如何互相配合传递一致的信号。' },
      { title: '选校与面试', description: '如何通过 research fit 而非排名来制定选校策略，以及如何准备 PhD 面试让委员会对你产生更强的信心。' },
    ],
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
