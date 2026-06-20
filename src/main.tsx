import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowUpRight,
  BellRing,
  BrainCircuit,
  Code2,
  DatabaseZap,
  FileText,
  Languages,
  Mail,
  MessageCircle,
  Palette,
  Phone,
  Route,
  Send,
  Sparkles,
  TestTube2,
  Workflow,
} from 'lucide-react';
import {
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import './styles.css';

const heroPortraitVideo = new URL('./liam3.mp4', import.meta.url).href;
const universityBikeGif = new URL('./hero2-once.GIF', import.meta.url).href;
const universityBikeStill = new URL('./hero2-still.png', import.meta.url).href;

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const projects = [
  {
    number: '01',
    eyebrow: 'AI Trend Platform',
    name: 'AI Trend & Vibe Coding Discovery',
    status: 'Deployed',
    url: 'https://dora439965.github.io/AItrend/',
    description:
      'AI 趋势追踪与个性化推荐平台，每日自动采集 GitHub 热门 AI 项目和行业新闻，支持多维度排序筛选，并根据用户画像匹配适合的新手项目。',
    highlights: ['GitHub 热榜', 'AI 新闻', '画像推荐', '自动化更新'],
  },
  {
    number: '02',
    eyebrow: 'AI Scheduling Demo',
    name: 'Intelligent Scheduling',
    status: 'AI Demo',
    url: 'https://dora439965.github.io/Intelligent-Scheduling/',
    description:
      '基于已有算法更新智能排程应用的功能设计和交互设计，并借助 Kiro 平台搭建新的应用 demo，降低用户理解和使用智能排程能力的门槛。',
    highlights: ['功能设计', '交互设计', 'Kiro 搭建', '智能排程'],
  },
];

const professionalSkills = [
  {
    title: 'AI 应用与 Agent 开发',
    label: 'AI Stack',
    level: 94,
    icon: Sparkles,
    summary:
      '熟练使用 Codex、Claude Code、Kiro 等智能体平台进行产品设计、产品开发、Demo 搭建；熟练运用 Coze、Dify 等低代码平台进行工作流搭建和 Agent 开发。',
    tools: ['Codex', 'Claude Code', 'Kiro', 'Coze', 'Dify', 'Agent Workflow'],
  },
  {
    title: '英语与跨文化沟通',
    label: 'Language',
    level: 86,
    icon: Languages,
    summary:
      '英语六级 500+，具备熟练的英语听说读写能力，能够快速浏览英语专业文件及书籍，并多次参加学校组织的海外交流访学活动。',
    tools: ['CET-6 500+', '英文文档阅读', '美国赛', '西班牙暑期营'],
  },
  {
    title: '设计与产品表达',
    label: 'Design',
    level: 88,
    icon: Palette,
    summary:
      '熟悉 Figma、Axure、AutoCAD、Photoshop、Pr 等设计软件，能够完成产品原型、视觉表达、工程图纸与演示材料的设计协同。',
    tools: ['Figma', 'Axure', 'AutoCAD', 'Photoshop', 'Premiere Pro'],
  },
  {
    title: '数据处理与分析',
    label: 'Data',
    level: 82,
    icon: Workflow,
    summary:
      '熟练运用 Python、Matlab 等工具处理数据，能够围绕业务问题进行结构化拆解、指标分析和实验验证。',
    tools: ['Python', 'Matlab', '数据分析', '指标拆解'],
  },
  {
    title: 'Office 与汇报交付',
    label: 'Delivery',
    level: 92,
    icon: FileText,
    summary:
      '精通 Word、Excel、PowerPoint，能够完成结构化文档、数据表格、项目汇报和面向业务方的方案表达。',
    tools: ['Word', 'Excel', 'PowerPoint', '报告撰写', 'PPT 汇报'],
  },
];

type FadeInProps<T extends React.ElementType> = {
  as?: T;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>;

function FadeIn<T extends React.ElementType = 'div'>({
  as,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
  ...props
}: FadeInProps<T>) {
  const Component = React.useMemo(
    () => motion.create((as || 'div') as React.ElementType),
    [as],
  );

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      {...props}
    >
      {children}
    </Component>
  );
}

type MagnetProps = {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  maxOffset?: number;
  stiffness?: number;
  damping?: number;
  className?: string;
};

function Magnet({
  children,
  padding = 150,
  strength = 18,
  maxOffset = 34,
  stiffness = 120,
  damping = 18,
  className,
}: MagnetProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness, damping, mass: 0.45 });
  const y = useSpring(rawY, { stiffness, damping, mass: 0.45 });

  React.useEffect(() => {
    const clamp = (value: number) =>
      Math.max(-maxOffset, Math.min(maxOffset, value));

    const onMove = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const insideX =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding;
      const insideY =
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!insideX || !insideY) {
        rawX.set(0);
        rawY.set(0);
        return;
      }

      rawX.set(clamp((event.clientX - (rect.left + rect.width / 2)) / strength));
      rawY.set(clamp((event.clientY - (rect.top + rect.height / 2)) / strength));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [maxOffset, padding, rawX, rawY, strength]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}

const moods = [
  {
    eye: '#BBCCD7',
    glow: 'rgba(187, 204, 215, 0.32)',
    ring: 'rgba(187, 204, 215, 0.42)',
  },
  {
    eye: '#F2B5FF',
    glow: 'rgba(182, 0, 168, 0.42)',
    ring: 'rgba(242, 181, 255, 0.48)',
  },
  {
    eye: '#FFB86B',
    glow: 'rgba(190, 76, 0, 0.42)',
    ring: 'rgba(255, 184, 107, 0.48)',
  },
];

function HeroPortrait() {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-[360px] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 sm:w-[500px] md:w-[640px] lg:w-[760px]">
      <FadeIn delay={0.6} y={30} className="relative w-full">
        <Magnet padding={170} strength={18} maxOffset={34} className="relative">
          <motion.div className="relative w-full select-none">
            <motion.video
              src={heroPortraitVideo}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback"
              tabIndex={-1}
              aria-label="Liu He portrait animation"
              onContextMenu={(event: React.MouseEvent<HTMLVideoElement>) => event.preventDefault()}
              className="hero-portrait-gif relative z-10 w-full object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            />

          </motion.div>
        </Magnet>
      </FadeIn>
    </div>
  );
}

function BlinkingEyelid({ className }: { className: string }) {
  return (
    <motion.span
      className={`pointer-events-none absolute z-20 block origin-top rounded-b-full rounded-t-[45%] bg-gradient-to-b from-[#2A1517] via-[#7A3F35] to-[#C88062] shadow-[0_2px_5px_rgba(0,0,0,0.28)] ${className}`}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{
        scaleY: [0, 0, 1, 0, 0, 0, 0.86, 0],
        opacity: [0, 0, 1, 0, 0, 0, 0.9, 0],
      }}
      transition={{
        duration: 5.6,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.68, 0.715, 0.765, 0.86, 0.93, 0.955, 1],
      }}
    />
  );
}

function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 -outline-offset-[3px] outline-white transition duration-200 hover:scale-[1.03] sm:px-9 sm:py-3.5 sm:text-sm md:px-10 md:py-4"
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      <Mail size={16} strokeWidth={2.4} />
      <span>Contact Me</span>
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3.5 sm:text-sm"
    >
      <span>Live Project</span>
      <ArrowUpRight size={16} />
    </a>
  );
}

function Navbar() {
  const links = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <FadeIn
      as="nav"
      delay={0}
      y={-20}
      className="relative z-30 flex w-full justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-8 md:pt-8 lg:text-[1.4rem]"
    >
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="transition-opacity duration-200 hover:opacity-70"
        >
          {link}
        </a>
      ))}
    </FadeIn>
  );
}

function HeroAtmosphere() {
  return (
    <div className="hero-atmosphere pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <span className="hero-atmosphere__grid" />
      <span className="hero-atmosphere__scan hero-atmosphere__scan--left" />
      <span className="hero-atmosphere__scan hero-atmosphere__scan--right" />
      <span className="hero-atmosphere__beam hero-atmosphere__beam--left" />
      <span className="hero-atmosphere__beam hero-atmosphere__beam--right" />
      <span className="hero-atmosphere__arc hero-atmosphere__arc--left" />
      <span className="hero-atmosphere__arc hero-atmosphere__arc--right" />
      <span className="hero-atmosphere__rail hero-atmosphere__rail--top" />
      <span className="hero-atmosphere__rail hero-atmosphere__rail--bottom" />
      <span className="hero-atmosphere__ticks hero-atmosphere__ticks--left" />
      <span className="hero-atmosphere__ticks hero-atmosphere__ticks--right" />
      <span className="hero-atmosphere__sparks" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <HeroAtmosphere />
      <Navbar />
      <div className="relative z-20 mt-6 w-full overflow-hidden sm:mt-6 md:-mt-5">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i'm Liu He
        </FadeIn>
      </div>

      <HeroPortrait />

      <div className="relative z-30 mt-auto flex items-end justify-between gap-5 px-6 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          delay={0.35}
          y={20}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          Turning complex business scenarios into clear AI product logic and
          usable Agent solutions.
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const rowOne = marqueeImages.slice(0, 11);
  const rowTwo = marqueeImages.slice(11);

  return (
    <section className="overflow-hidden bg-[#0C0C0C] pt-8 pb-10 sm:pt-10 md:pt-12">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={rowOne} direction="left" duration={52} />
        <MarqueeRow images={rowTwo} direction="right" duration={48} />
      </div>
    </section>
  );
}

function MarqueeRow({
  images,
  direction,
  duration,
}: {
  images: string[];
  direction: 'left' | 'right';
  duration: number;
}) {
  const rowWidth = images.length * 432;
  const startX = direction === 'left' ? 0 : -rowWidth;
  const endX = direction === 'left' ? -rowWidth : 0;

  return (
    <motion.div
      className="flex gap-3"
      initial={{ x: startX }}
      animate={{ x: endX }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ willChange: 'transform' }}
    >
      {[...images, ...images].map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="h-[270px] w-[420px] shrink-0 overflow-hidden rounded-2xl"
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}

function AnimatedText({ text }: { text: string }) {
  const phrases = text
    .split(/(?<=[，。；])/)
    .map((phrase) => phrase.trim())
    .filter(Boolean);

  return (
    <motion.p
      className="max-w-[760px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.12,
          },
        },
      }}
    >
      {phrases.map((phrase, index) => (
        <motion.span
          key={`${phrase}-${index}`}
          className="inline"
          variants={{
            hidden: {
              opacity: 0,
              y: 14,
              filter: 'blur(8px)',
            },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 0.62,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
        >
          {phrase}
        </motion.span>
      ))}
    </motion.p>
  );
}

function AboutSection() {
  const aboutText =
    '我本科毕业于同济大学道路工程专业，目前在同济大学攻读交通运输工程硕士，研究方向包括光伏道路与功率预测。本科期间 GPA 90.75/100，专业排名第 2，曾获国家奖学金、茅以升奖学金、上海市优秀毕业生等荣誉。我具备较强的逻辑分析、数据分析、共情沟通和用户需求洞察能力，也在班级管理与学生工作中积累了组织策划和协调管理经验。我长期关注 LLM、RAG、AI Agent 与 AI 在真实业务场景中的落地，希望把复杂问题拆解成清晰的产品逻辑，并设计真正可用、可解释、可持续迭代的智能化解决方案。';

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <DecorativeImage
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
        className="top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
        delay={0.1}
        x={-80}
      />
      <DecorativeImage
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
        className="bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
        delay={0.25}
        x={-80}
      />
      <DecorativeImage
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
        className="top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
        delay={0.15}
        x={80}
      />
      <DecorativeImage
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
        className="bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
        delay={0.3}
        x={80}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          About me
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-18 md:gap-20">
          <AnimatedText text={aboutText} />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function DecorativeImage({
  src,
  className,
  delay,
  x,
}: {
  src: string;
  className: string;
  delay: number;
  x: number;
}) {
  return (
    <FadeIn
      delay={delay}
      x={x}
      y={0}
      duration={0.9}
      className={`pointer-events-none absolute z-0 select-none ${className}`}
    >
      <img src={src} alt="" loading="lazy" className="w-full object-contain" />
    </FadeIn>
  );
}

const universityMilestones = [
  {
    year: '2021',
    x: 6,
    y: 76,
    title: '进入同济大学',
    description: '本科进入同济大学道路工程专业，开启交通与土木方向的系统学习。',
  },
  {
    year: '2022',
    x: 28,
    y: 62,
    title: '组织与管理',
    description: '成为同济大学新生院文体部部长、21级土木三班班长，积累组织策划与协调管理经验。',
  },
  {
    year: '2023',
    x: 50,
    y: 46,
    title: '全球竞赛突破',
    description: '参加美国土木工程师竞赛，带领项目获得全球第二名的成绩。',
  },
  {
    year: '2024',
    x: 72,
    y: 30,
    title: '奖学金与荣誉',
    description: '获得国家奖学金、茅以升奖学金，并获评同济大学优秀学生。',
  },
  {
    year: '2025',
    x: 94,
    y: 20,
    title: '升学与新阶段',
    description: '获得上海市优秀毕业生，进入同济大学交通学院继续攻读研究生。',
  },
];

function UniversityCurveSection() {
  const segmentTimerRef = React.useRef<number | null>(null);
  const [position, setPosition] = React.useState(universityMilestones[0].x);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isRiding, setIsRiding] = React.useState(false);
  const [bikeRunId, setBikeRunId] = React.useState(0);
  const activeMilestone = universityMilestones[activeIndex];

  React.useEffect(() => {
    return () => {
      if (segmentTimerRef.current !== null) {
        window.clearTimeout(segmentTimerRef.current);
      }
    };
  }, []);

  const moveToMilestone = React.useCallback(
    (targetIndex: number) => {
      if (isRiding || targetIndex === activeIndex) return;

      const direction = targetIndex > activeIndex ? 1 : -1;
      let currentIndex = activeIndex;

      setIsRiding(true);

      const rideNextSegment = () => {
        const nextIndex = currentIndex + direction;
        setBikeRunId((runId) => runId + 1);
        setPosition(universityMilestones[nextIndex].x);

        segmentTimerRef.current = window.setTimeout(() => {
          currentIndex = nextIndex;
          setActiveIndex(currentIndex);

          if (currentIndex === targetIndex) {
            setIsRiding(false);
            segmentTimerRef.current = null;
            return;
          }

          rideNextSegment();
        }, 1500);
      };

      rideNextSegment();
    },
    [activeIndex, isRiding],
  );

  const linePoints = universityMilestones
    .map((milestone) => `${milestone.x},${milestone.y}`)
    .join(' ');
  const avatarY = interpolateCurveY(position);

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(182,0,168,0.18),transparent_36%),radial-gradient(circle_at_20%_80%,rgba(187,204,215,0.12),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading text-center text-[clamp(3rem,11vw,150px)] font-black uppercase leading-none tracking-tight"
        >
          University Curve
        </FadeIn>
        <FadeIn
          delay={0.15}
          y={30}
          className="mt-8 text-center text-sm font-light uppercase tracking-[0.35em] text-[#D7E2EA]/70 sm:text-base"
        >
          Liu He bikes upward through each milestone
        </FadeIn>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] lg:items-center">
          <div
            className="relative h-[520px] select-none rounded-[36px] border border-[#D7E2EA]/16 bg-[#111]/70 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8 lg:h-[560px]"
          >
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-visible sm:inset-8 sm:h-[calc(100%-4rem)] sm:w-[calc(100%-4rem)]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0" x2="1" y1="1" y2="0">
                <stop offset="0%" stopColor="#646973" />
                <stop offset="48%" stopColor="#BBCCD7" />
                <stop offset="100%" stopColor="#B600A8" />
              </linearGradient>
              <filter id="curveGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Horizontal guide lines */}
            {[30, 46, 62, 76].map((y) => (
              <line
                key={y}
                x1="4"
                y1={y}
                x2="96"
                y2={y}
                stroke="rgba(215,226,234,0.08)"
                strokeWidth="0.4"
                strokeDasharray="0.8 3"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {/* X axis */}
            <line
              x1="4"
              y1="86"
              x2="96"
              y2="86"
              stroke="rgba(215,226,234,0.6)"
              strokeWidth="1.4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            {/* X axis arrow */}
            <polygon points="97.5,86 94,84.2 94,87.8" fill="rgba(215,226,234,0.6)" />
            {/* Y axis */}
            <line
              x1="4"
              y1="86"
              x2="4"
              y2="12"
              stroke="rgba(215,226,234,0.6)"
              strokeWidth="1.4"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
            {/* Y axis arrow */}
            <polygon points="4,10.5 2.2,14 5.8,14" fill="rgba(215,226,234,0.6)" />
            {/* Glow behind curve */}
            <polyline
              points={linePoints}
              fill="none"
              stroke="rgba(182,0,168,0.2)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              filter="url(#curveGlow)"
            />
            {/* Main gradient curve */}
            <polyline
              points={linePoints}
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              filter="url(#curveGlow)"
            />
          </svg>

          <div className="absolute inset-4 sm:inset-8">
            {universityMilestones.map((milestone, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={milestone.year}
                  className={`absolute flex items-center justify-center p-3 ${
                    isRiding ? 'pointer-events-none' : 'cursor-pointer'
                  }`}
                  style={{
                    left: `${milestone.x}%`,
                    top: `${milestone.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onPointerDown={(event) => {
                    event.stopPropagation();
                    moveToMilestone(index);
                  }}
                >
                  <motion.div
                    className="relative flex h-6 w-6 items-center justify-center rounded-full border border-[#D7E2EA]/70 bg-[#0C0C0C]/90 shadow-[0_0_36px_rgba(187,204,215,0.38)] backdrop-blur"
                    animate={{
                      scale: isActive ? 1.2 : [1, 1.04, 1],
                      borderColor: isActive
                        ? 'rgba(187,204,215,0.95)'
                        : 'rgba(215,226,234,0.58)',
                      boxShadow: isActive
                        ? '0 0 44px rgba(182,0,168,0.78), 0 0 18px rgba(187,204,215,0.5) inset'
                        : '0 0 30px rgba(187,204,215,0.32), 0 0 12px rgba(182,0,168,0.24)',
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.12,
                    }}
                  >
                    <motion.span
                      className="pointer-events-none absolute inset-[-14px] rounded-full border border-[#B600A8]/55 shadow-[0_0_20px_rgba(182,0,168,0.34)]"
                      animate={{
                        opacity: isActive ? [0.58, 0.12, 0.58] : [0.38, 0.06, 0.38],
                        scale: isActive ? [0.78, 1.65, 0.78] : [0.84, 1.46, 0.84],
                      }}
                      transition={{
                        duration: isActive ? 1.35 : 1.85,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.16,
                      }}
                    />
                    <motion.span
                      className="pointer-events-none absolute inset-[-7px] rounded-full bg-[#BBCCD7]/12 shadow-[0_0_16px_rgba(187,204,215,0.28)]"
                      animate={{
                        opacity: isActive ? [0.24, 0.48, 0.24] : [0.14, 0.3, 0.14],
                        scale: [0.9, 1.22, 0.9],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.12,
                      }}
                    />
                    <motion.span
                      className="relative h-2.5 w-2.5 rounded-full bg-[#D7E2EA]"
                      animate={{
                        backgroundColor: isActive ? '#B600A8' : '#D7E2EA',
                        boxShadow: isActive
                          ? '0 0 22px rgba(182,0,168,0.86), 0 0 8px rgba(255,255,255,0.45)'
                          : '0 0 14px rgba(215,226,234,0.48)',
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}

            {universityMilestones.map((milestone) => (
              <span
                key={`axis-${milestone.year}`}
                className="absolute top-[88%] -translate-x-1/2 text-[0.65rem] font-medium tracking-widest text-white sm:text-xs"
                style={{ left: `${milestone.x}%` }}
              >
                {milestone.year}
              </span>
            ))}

            <motion.div
              className="pointer-events-none absolute z-20 w-[86px] touch-none sm:w-[108px] md:w-[128px]"
              animate={{
                left: `${position}%`,
                top: `${avatarY}%`,
              }}
              transition={{ duration: isRiding ? 1.5 : 0.25, ease: 'linear' }}
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="pointer-events-none absolute inset-[22%] -z-10 rounded-full bg-[#B600A8]/38 blur-2xl" />
                <img
                  key={isRiding ? bikeRunId : 'still'}
                  src={isRiding ? universityBikeGif : universityBikeStill}
                  alt=""
                  aria-label="Liu He biking along the university curve"
                  className="university-bike-avatar w-full object-contain drop-shadow-[0_18px_34px_rgba(0,0,0,0.55)]"
                  draggable={false}
                  onContextMenu={(event) => event.preventDefault()}
                />
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/60 sm:left-8 sm:top-8 sm:text-xs">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-70"><path d="M7 12V2M7 2L4 5M7 2l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Achievement
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-[#D7E2EA]/60 sm:bottom-8 sm:right-8 sm:text-xs">
            Time
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-70"><path d="M2 7h10M12 7L9 4M12 7l-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          </div>

          <motion.div
            className="relative mx-auto w-[min(100%,640px)] overflow-hidden rounded-[28px] p-[1.5px] shadow-[0_24px_90px_rgba(0,0,0,0.5)] lg:mx-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(182,0,168,0.55) 0%, rgba(118,33,176,0.28) 38%, rgba(187,204,215,0.18) 70%, rgba(190,76,0,0.4) 100%)',
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden rounded-[27px] bg-[#0C0C0C]/90 px-7 py-8 text-center text-[#D7E2EA] backdrop-blur-xl sm:px-10 sm:py-9 lg:px-9 lg:py-10">
              <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#B600A8]/25 blur-[60px]" />
              <div key={activeMilestone.year} className="relative">
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold tracking-[0.4em] text-white"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 0%, #B600A8 45%, #7621B0 100%)',
                    boxShadow: '0 6px 18px rgba(181,1,167,0.35)',
                  }}
                >
                  {activeMilestone.year}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mt-5 text-[clamp(1.5rem,3.4vw,2.6rem)] font-black uppercase leading-none tracking-tight text-white"
                >
                  {activeMilestone.title}
                </motion.h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                  className="mx-auto mt-5 h-px w-16 origin-center bg-gradient-to-r from-transparent via-[#BBCCD7]/70 to-transparent"
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#D7E2EA]/90 sm:text-base"
                >
                  {activeMilestone.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function interpolateCurveY(position: number) {
  const milestones = universityMilestones;

  if (position <= milestones[0].x) return milestones[0].y;
  if (position >= milestones[milestones.length - 1].x) {
    return milestones[milestones.length - 1].y;
  }

  for (let index = 0; index < milestones.length - 1; index += 1) {
    const current = milestones[index];
    const next = milestones[index + 1];

    if (position >= current.x && position <= next.x) {
      const progress = (position - current.x) / (next.x - current.x);
      return current.y + (next.y - current.y) * progress;
    }
  }

  return milestones[0].y;
}

const envisionStats = [
  { value: '40+', label: '指标异常判断机制' },
  { value: '23', label: '风电/光伏菜单场景' },
  { value: '280+', label: 'EAM 自动化测试用例' },
  { value: '3x+', label: 'Agent 辅助开发效率提升' },
];

const envisionModules = [
  {
    icon: BrainCircuit,
    title: '智能洞察 Agent',
    tag: 'Insight Agent',
    description:
      '设计 40+ 指标异常判断机制，参与搭建风场/风机指标洞察图谱与指标血缘关系，定义 related to、cal from 等关系类型，并设计“目标指标 - 关联指标 - 分析工具 - 根因总结”的局部图谱执行逻辑。',
    points: [
      '规划 Agent 可调用分析工具能力，明确输入、输出参数和 LLM 总结要求。',
      '设计洞察结果输出模板，将异常结果、工具分析结论、关联指标判断与总结建议整合为自然语言分析报告。',
      '提升复杂指标异常问题的可解释性与可行动性，让业务用户更容易理解和处理问题。',
    ],
  },
  {
    icon: BellRing,
    title: '智能监盘 Agent',
    tag: 'Monitoring Agent',
    description:
      '参与设计自然语言创建告警规则能力，梳理规则模板库、触发模式知识库、测点知识库与业务名词知识库，支持 LLM 将用户语义转换为规则引擎可校验的结构化 JSON。',
    points: [
      '基于真实用户场景构建告警规则管理测试集。',
      '验证模型输出 JSON 的结构正确率与规则可校验性。',
      '推动自然语言需求到监盘规则配置之间的产品闭环。',
    ],
  },
  {
    icon: DatabaseZap,
    title: '业务知识库构建',
    tag: 'Knowledge Base',
    description:
      '基于公司已有应用软件，独立梳理风电/光伏业务系统应用菜单知识库，共沉淀 23 个核心菜单场景，增强 Agent 对业务菜单、功能边界和跳转参数的理解能力。',
    points: [
      '按“应用名称 - 菜单名称 - 一级分类 - 二级分类 - 菜单描述 - 常用功能 - 支持带参 - 跳转对话示例”结构沉淀字段。',
      '帮助 Agent 更准确地完成导航、功能理解与带参跳转。',
      '把分散的软件菜单经验转化为可复用的 Agent 业务知识。',
    ],
  },
  {
    icon: TestTube2,
    title: '自动化测试集',
    tag: 'Test Set',
    description:
      '搭建 EAM 缺陷单单轮自动化测试集，设计自动化用例生成规则，覆盖正确填写、缺少必填等多个典型场景，共生成 280+ 测试用例。',
    points: [
      '将测试集接入 Agent 开发流程，提升迭代验证效率。',
      '通过场景化用例覆盖表单填写、字段缺失、格式校验等关键路径。',
      '为 Agent 输出质量提供更稳定的评估依据。',
    ],
  },
  {
    icon: Code2,
    title: 'AI Demo 与 Agent 辅助开发',
    tag: 'AI Demo',
    description:
      '基于已有算法更新智能排程应用功能设计和交互设计，并借助 Kiro 平台搭建新的智能排程应用 demo；同时将织信低代码平台 MCP 接入 Kiro，建立 steering - hook - docs 三层架构。',
    points: [
      '采用 requirements - design - task 的任务链条推进产品开发。',
      '借助 Agent 辅助开发，一天内完成 3 个表单功能开发。',
      '降低智能排程应用使用门槛，并验证 AI 辅助产品开发的效率增益。',
    ],
  },
];

const experienceIntroText =
  '围绕智能洞察 Agent、智能监盘 Agent、业务菜单知识库、自动化测试集与 AI Demo 搭建，将复杂新能源业务场景拆解为可被大模型理解、调用、校验和交付的产品逻辑。';

const TextCascade = React.memo(function TextCascade({
  text,
}: {
  text: string;
}) {
  return (
    <motion.p
      className="max-w-4xl text-base font-light leading-relaxed text-[#D7E2EA]/72 sm:text-lg md:text-xl"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.018,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
            show: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {char === ' ' ? '\u00a0' : char}
        </motion.span>
      ))}
    </motion.p>
  );
});

function ExperienceModulePanel() {
  const [activeModule, setActiveModule] = React.useState(0);
  const active = envisionModules[activeModule];
  const ActiveIcon = active.icon;

  return (
    <>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {envisionModules.map((module, index) => {
          const Icon = module.icon;
          const isActive = activeModule === index;
          return (
            <motion.button
              key={module.title}
              type="button"
              className={`group flex min-h-[118px] flex-col items-start justify-between rounded-[28px] border-2 p-5 text-left transition-colors duration-300 ${
                isActive
                  ? 'border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] shadow-[0_0_42px_rgba(187,204,215,0.22)]'
                  : 'border-[#D7E2EA]/14 bg-white/[0.035] text-[#D7E2EA] hover:border-[#D7E2EA]/44 hover:bg-white/[0.06]'
              }`}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                setActiveModule(index);
              }}
              whileHover={{ y: -6, rotate: isActive ? 0 : -0.6 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex w-full items-center justify-between gap-4">
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  className={isActive ? 'text-[#0C0C0C]' : 'text-[#BBCCD7]'}
                />
                <span
                  className={`text-[0.65rem] font-bold uppercase tracking-[0.22em] ${
                    isActive ? 'text-[#0C0C0C]/55' : 'text-[#D7E2EA]/45'
                  }`}
                >
                  {module.tag}
                </span>
              </div>
              <p className="mt-5 text-xl font-black leading-tight tracking-tight">
                {module.title}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-6 rounded-[32px] border border-[#D7E2EA]/16 bg-[#111]/88 p-6 text-white shadow-[0_26px_90px_rgba(0,0,0,0.42)] sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#BBCCD7]/72">
              Selected Module
            </p>
            <h4 className="mt-3 text-[clamp(1.6rem,4vw,3.6rem)] font-black leading-none tracking-tight">
              {active.title}
            </h4>
          </div>
          <motion.div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.08]"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ActiveIcon size={28} strokeWidth={1.7} />
          </motion.div>
        </div>
        <p className="mt-6 text-base font-light leading-relaxed text-white/74 sm:text-lg">
          {active.description}
        </p>
        <ul className="mt-7 grid gap-3">
          {active.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-light leading-relaxed text-white/78 sm:text-base"
            >
              <Route
                size={18}
                className="mt-0.5 shrink-0 text-[#BBCCD7]"
                strokeWidth={1.8}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 text-[#D7E2EA] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(215,226,234,0.06),transparent_24%),radial-gradient(circle_at_20%_18%,rgba(187,204,215,0.12),transparent_30%),radial-gradient(circle_at_82%_48%,rgba(182,0,168,0.15),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/30 to-transparent" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(182,0,168,0.18),transparent_62%)] blur-2xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading relative z-10 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
      >
        Experience
      </FadeIn>

      <div className="relative z-10 mx-auto mt-14 grid max-w-7xl gap-8 md:mt-20 md:grid-cols-[0.82fr_1.18fr]">
        <FadeIn
          delay={0.15}
          y={30}
          className="border-t border-[#D7E2EA]/18 pt-5"
        >
          <p className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-none tracking-tight">
            01
          </p>
          <p className="mt-5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/58">
            2026.03 - 2026.07
          </p>
          <h3 className="mt-6 text-[clamp(2.2rem,5vw,5rem)] font-black uppercase leading-none tracking-tight">
            远景科技
          </h3>
          <p className="mt-4 text-lg font-semibold uppercase tracking-wide text-[#BBCCD7]/84 sm:text-xl">
            AI & 新能源产品经理
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {envisionStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-[24px] border border-[#D7E2EA]/14 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -6,
                  backgroundColor: 'rgba(215,226,234,0.075)',
                }}
                transition={{
                  delay: 0.22 + index * 0.06,
                  duration: 0.55,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-[clamp(2rem,5vw,3.8rem)] font-black leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase leading-snug tracking-widest text-[#D7E2EA]/58">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.25}
          y={30}
          className="border-t border-[#D7E2EA]/18 pt-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#D7E2EA]/22 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D7E2EA]/78">
              Agent Product Design
            </span>
            <span className="rounded-full border border-[#BBCCD7]/20 bg-[#D7E2EA] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0C0C0C]">
              Energy AI
            </span>
          </div>
          <div className="mt-8">
            <TextCascade text={experienceIntroText} />
          </div>

          <ExperienceModulePanel />
        </FadeIn>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-4 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(187,204,215,0.08),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(182,0,168,0.13),transparent_32%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn
          delay={0.05}
          y={24}
          className="text-lg font-light tracking-wide text-[#BBCCD7] sm:text-2xl md:text-3xl"
        >
          My work
        </FadeIn>
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading mt-4 text-[clamp(4.5rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          Projects
        </FadeIn>
      </div>

      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl gap-8 md:mt-16 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectTile key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.12} y={42}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group block focus:outline-none"
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.985 }}
        aria-label={`Open ${project.name}`}
      >
        <div className="relative overflow-hidden rounded-[34px] border border-[#D7E2EA]/10 bg-[#1F1F1F] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.38)] transition-colors duration-300 group-hover:border-[#D7E2EA]/34 sm:rounded-[42px] sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#B600A8]/18 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-[#BBCCD7]/10 blur-3xl" />
          </div>
          <div className="relative overflow-hidden rounded-[22px] bg-[#0C0C0C] shadow-[inset_0_0_0_1px_rgba(215,226,234,0.08)] sm:rounded-[28px]">
            <div className="flex h-9 items-center gap-2 border-b border-white/6 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B600A8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#BBCCD7]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#646973]" />
              <span className="ml-auto text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/40">
                {project.eyebrow}
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <iframe
                src={project.url}
                title={`${project.name} preview`}
                loading="lazy"
                className="pointer-events-none h-full w-full origin-top-left scale-[0.78] border-0 bg-[#111]"
                style={{
                  width: '128.5%',
                  height: '128.5%',
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(12,12,12,0.72)_100%)]" />
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-start justify-between gap-5 px-2 text-[#D7E2EA] sm:mt-8 sm:px-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-black tracking-[0.22em] text-[#BBCCD7]/58">
                {project.number}
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/48">
                {project.status}
              </span>
            </div>
            <h3 className="mt-3 text-[clamp(2rem,4.3vw,3.6rem)] font-black leading-none tracking-tight">
              {project.name}
            </h3>
            <p className="mt-4 max-w-[620px] text-sm font-light leading-relaxed text-[#D7E2EA]/62 sm:text-base">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D7E2EA]/14 px-3 py-1.5 text-xs font-medium tracking-wide text-[#D7E2EA]/66"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D7E2EA]/14 bg-white/[0.03] text-[#D7E2EA]/70 transition-colors duration-300 group-hover:border-[#D7E2EA]/36 group-hover:text-white sm:h-16 sm:w-16">
              <Code2 size={28} strokeWidth={1.8} />
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D7E2EA]/14 bg-white/[0.03] text-[#D7E2EA]/70 transition-colors duration-300 group-hover:border-[#D7E2EA]/36 group-hover:text-white sm:h-16 sm:w-16">
              <ArrowUpRight size={30} strokeWidth={1.8} />
            </span>
          </div>
        </div>
      </motion.a>
    </FadeIn>
  );
}

const SkillCardSwapDeck = React.memo(function SkillCardSwapDeck({
  onActiveChange,
}: {
  onActiveChange: (index: number) => void;
}) {
  return (
    <CardSwap
      width="min(78vw, 390px)"
      height={340}
      cardDistance={58}
      verticalDistance={66}
      skewAmount={5}
      easing="elastic"
      onSwapStart={onActiveChange}
    >
      {professionalSkills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <Card
            key={skill.title}
            customClass="skill-swap-card flex flex-col overflow-hidden p-6 text-left text-[#D7E2EA] shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition-colors hover:border-[#D7E2EA]/42"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(215,226,234,0.16),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%),radial-gradient(circle_at_85%_86%,rgba(182,0,168,0.24),transparent_32%)]" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#D7E2EA]/10" />
            <div className="relative z-10 flex items-start justify-between gap-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D7E2EA]/28 bg-white/[0.05] text-[#D7E2EA]">
                <Icon size={28} strokeWidth={1.7} />
              </span>
              <span className="rounded-full border border-[#D7E2EA]/14 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#BBCCD7]/68">
                {String(index + 1).padStart(2, '0')} / {skill.label}
              </span>
            </div>

            <div className="relative z-10 mt-8">
              <h4 className="text-[clamp(1.5rem,4vw,2.6rem)] font-black leading-[0.95] tracking-tight">
                {skill.title}
              </h4>
              <p className="mt-5 line-clamp-3 text-sm font-light leading-relaxed text-[#D7E2EA]/68">
                {skill.summary}
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="mb-3 flex items-center justify-between text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#BBCCD7]/56">
                <span>Mastery</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#BBCCD7,#B600A8,#C9653A)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </Card>
        );
      })}
    </CardSwap>
  );
});

function ProfessionalSkillsSection() {
  const [activeSkill, setActiveSkill] = React.useState(0);
  const active = professionalSkills[activeSkill];
  const handleActiveSkillChange = React.useCallback((index: number) => {
    setActiveSkill(index);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(187,204,215,0.1),transparent_28%),radial-gradient(circle_at_12%_70%,rgba(182,0,168,0.13),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/22 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn
          y={24}
          className="text-lg font-light tracking-wide text-[#BBCCD7] sm:text-2xl md:text-3xl"
        >
          Professional toolkit
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.08}
          y={40}
          className="hero-heading mt-4 text-[clamp(4rem,12vw,150px)] font-black uppercase leading-none tracking-tight"
        >
          Skills
        </FadeIn>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-[0.96fr_1.04fr]">
          <FadeIn
            delay={0.12}
            y={34}
            className="relative min-h-[560px] overflow-hidden rounded-[36px] border border-[#D7E2EA]/14 bg-[#111]/76 p-5 shadow-[0_34px_110px_rgba(0,0,0,0.42)] sm:p-8 lg:min-h-[620px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(215,226,234,0.06),transparent_35%),radial-gradient(circle_at_78%_20%,rgba(182,0,168,0.2),transparent_34%),radial-gradient(circle_at_20%_82%,rgba(187,204,215,0.11),transparent_30%)]" />
            <div className="pointer-events-none absolute bottom-8 right-8 h-px w-28 bg-gradient-to-r from-transparent to-[#D7E2EA]/42" />
            <motion.div
              className="pointer-events-none absolute -right-24 top-14 h-72 w-72 rounded-full border border-[#D7E2EA]/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10 flex min-h-[500px] flex-col justify-between lg:min-h-[560px]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#BBCCD7]/58">
                  Card swap deck
                </p>
                <h3 className="mt-4 max-w-[420px] text-[clamp(2rem,4.8vw,4.4rem)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
                  Practical ability stack
                </h3>
              </div>

              <div className="relative mt-8 h-[410px] sm:h-[440px]">
                <SkillCardSwapDeck onActiveChange={handleActiveSkillChange} />
              </div>

            </div>
          </FadeIn>

          <div>
            <div className="rounded-[36px] border border-[#D7E2EA]/14 bg-white/[0.035] p-6 text-[#D7E2EA] shadow-[0_34px_110px_rgba(0,0,0,0.36)] sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#BBCCD7]/62">
                    Active Skill
                  </p>
                  <h3 className="mt-4 text-[clamp(2rem,5vw,4.6rem)] font-black leading-none tracking-tight">
                    {active.title}
                  </h3>
                </div>
                <div className="shrink-0 rounded-full border border-[#D7E2EA]/16 px-4 py-2 text-sm font-black tracking-[0.18em] text-[#BBCCD7]">
                  {active.level}%
                </div>
              </div>

              <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#646973,#BBCCD7,#B600A8)]"
                  style={{ width: `${active.level}%` }}
                />
              </div>

              <p className="mt-8 text-base font-light leading-relaxed text-[#D7E2EA]/72 sm:text-lg">
                {active.summary}
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {active.tools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-2xl border border-[#D7E2EA]/12 bg-[#0C0C0C]/54 px-4 py-3 text-sm font-medium tracking-wide text-[#D7E2EA]/74"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contactItems = [
  {
    label: 'Phone',
    value: '15246553355',
    href: 'tel:15246553355',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'liuhe040503@163.com',
    href: 'mailto:liuhe040503@163.com',
    icon: Mail,
  },
  {
    label: 'WeChat',
    value: '-031203atw',
    href: undefined,
    icon: MessageCircle,
  },
];

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(187,204,215,0.1),transparent_28%),radial-gradient(circle_at_78%_58%,rgba(182,0,168,0.16),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/24 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn
          y={24}
          className="text-lg font-light tracking-wide text-[#BBCCD7] sm:text-2xl md:text-3xl"
        >
          Let&apos;s build something useful
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.08}
          y={40}
          className="hero-heading mt-4 text-[clamp(4.2rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          Contact
        </FadeIn>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                className="group relative h-full overflow-hidden rounded-[32px] border border-[#D7E2EA]/14 bg-white/[0.035] p-6 text-[#D7E2EA] shadow-[0_26px_80px_rgba(0,0,0,0.32)] transition-colors duration-300 hover:border-[#D7E2EA]/36 hover:bg-white/[0.06] sm:p-7"
                whileHover={{ y: -8 }}
                whileTap={item.href ? { scale: 0.985 } : undefined}
              >
                <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-[#B600A8]/16 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D7E2EA]/45">
                      {item.label}
                    </p>
                    <p className="mt-5 break-all text-[clamp(1.35rem,3vw,2.2rem)] font-black leading-tight tracking-tight">
                      {item.value}
                    </p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D7E2EA]/14 bg-[#0C0C0C] text-[#BBCCD7]">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                </div>
              </motion.div>
            );

            return (
              <FadeIn key={item.label} delay={0.12 + index * 0.08} y={34}>
                {item.href ? (
                  <a href={item.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </FadeIn>
            );
          })}
        </div>

        <FadeIn
          delay={0.24}
          y={30}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[34px] border border-[#D7E2EA]/14 bg-[#111]/82 p-6 text-[#D7E2EA] shadow-[0_30px_100px_rgba(0,0,0,0.36)] sm:p-8 md:mt-12 md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#BBCCD7]/64">
              Open to Product / AI Agent opportunities
            </p>
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/68 sm:text-lg">
              如果你正在寻找能把业务场景、AI 能力和产品落地连接起来的人，可以直接通过邮件联系我。
            </p>
          </div>
          <a
            href="mailto:liuhe040503@163.com"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-200 hover:border-white/50 hover:bg-white/[0.08]"
          >
            <Send size={18} strokeWidth={2} />
            Email Me
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <UniversityCurveSection />
      <ExperienceSection />
      <ProjectsSection />
      <ProfessionalSkillsSection />
      <ContactSection />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
