import { Language } from '@/types';

export interface KnowledgeTopic {
  slug: string;
  category: 'fundamentals' | 'speed-performance' | 'seo-authority' | 'analytics' | 'ecommerce' | 'ui-components' | 'ai-search';
  categoryLabel: {
    id: string;
    en: string;
    ar: string;
  };
  title: {
    id: string;
    en: string;
    ar: string;
  };
  shortSummary: {
    id: string;
    en: string;
    ar: string;
  };
  quickAnswerSnippet: { // Optimized for Google Featured Snippet & AI Overview citation
    id: string;
    en: string;
    ar: string;
  };
  detailedContent: {
    id: string[];
    en: string[];
    ar: string[];
  };
  keyTakeaways: {
    id: string[];
    en: string[];
    ar: string[];
  };
  relatedKeywords: string[];
  faqs: {
    q: { id: string; en: string; ar: string };
    a: { id: string; en: string; ar: string };
  }[];
}

export const knowledgeCategories = [
  { id: 'all', label: { id: 'Semua Topik', en: 'All Topics', ar: 'جميع المواضيع' } },
  { id: 'fundamentals', label: { id: 'Dasar & Bisnis Website', en: 'Website Fundamentals', ar: 'أساسيات وتطوير المواقع' } },
  { id: 'speed-performance', label: { id: 'Kecepatan & Core Web Vitals', en: 'Speed & Performance', ar: 'سرعة التحميل والأداء' } },
  { id: 'seo-authority', label: { id: 'SEO, GSC & Google Ranking', en: 'SEO & Google Ranking', ar: 'السيو وتصدر محركات البحث' } },
  { id: 'analytics', label: { id: 'Google Tag & Analytics', en: 'Analytics & Tracking', ar: 'التحليلات وتتبع الزوار' } },
  { id: 'ecommerce', label: { id: 'Toko Online & Ekspor B2B', en: 'E-Commerce & B2B Export', ar: 'المتاجر والتصدير الدولي' } },
  { id: 'ui-components', label: { id: 'Komponen & UI/UX', en: 'UI Components & UX', ar: 'المكونات وتجربة المستخدم' } },
  { id: 'ai-search', label: { id: 'Optimasi Pencarian AI', en: 'AI Search Optimization', ar: 'الظهور في محركات الذكاء الاصطناعي' } }
];

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    slug: 'what-is-a-website-and-why-businesses-need-it',
    category: 'fundamentals',
    categoryLabel: { id: 'Dasar Website', en: 'Website Fundamentals', ar: 'أساسيات المواقع' },
    title: {
      id: 'Apa Itu Website dan Mengapa Bisnis Modern Tidak Bisa Bertahan Tanpanya?',
      en: 'What is a Website and Why Can Modern Businesses Not Survive Without One?',
      ar: 'ما هو الموقع الإلكتروني ولماذا لا يمكن للشركات الحديثة البقاء بدونه؟'
    },
    shortSummary: {
      id: 'Panduan lengkap mengenai definisi website, perbedaan dengan media sosial, dan mengapa website adalah aset digital paling bernilai.',
      en: 'Comprehensive guide to what a website is, why it differs from rented social media, and how it drives business valuation.',
      ar: 'دليل شامل لتعريف الموقع الإلكتروني وأهميته كأصل رقمي لا غنى عنه لأي نشاط تجاري.'
    },
    quickAnswerSnippet: {
      id: 'Website adalah aset digital milik penuh (100% proprietary) yang berfungsi sebagai markas operasional 24/7 di internet. Berbeda dengan media sosial di mana bisnis menyewa audiens dan terancam banned algoritma, website memberikan kendali penuh atas branding, database pelanggan, dan konversi penjualan.',
      en: 'A website is a 100% owned digital property acting as a 24/7 operational headquarters. Unlike social media where businesses rent reach subject to algorithmic shifts or bans, a website gives total control over customer data, direct search rankings, and sales funnels.',
      ar: 'الموقع الإلكتروني هو أصل رقمي مملوك بالكامل يعمل كمقر رئيسي لعمليات شركتك على الإنترنت على مدار 24 ساعة، ويمنحك السيطرة الكاملة على بيانات العملاء وتصدر نتائج قوقل دون الاعتماد على خوارزميات السوشيال ميديا.'
    },
    detailedContent: {
      id: [
        'Kredibilitas adalah alasan nomor 1: 84% konsumen dan 91% pengambil keputusan B2B menganggap bisnis dengan website resmi jauh lebih kredibel dibanding bisnis yang hanya memiliki akun media sosial.',
        'Kepemilikan Penuh Aset: Mengandalkan Instagram atau TikTok berarti Anda membangun bisnis di atas tanah sewa. Satu perubahan regulasi atau pelanggaran tak disengaja dapat mematikan jalur penjualan Anda.',
        'Mendatangkan Pembeli Berniat Tinggi: Pengguna media sosial berselancar untuk hiburan, sedangkan pencari di Google sedang aktif mencari solusi untuk dibeli saat itu juga.'
      ],
      en: [
        'Credibility is paramount: 84% of consumers and 91% of B2B procurement managers consider businesses with official domains far more trustworthy than social-only vendors.',
        'Asset Ownership: Relying entirely on Instagram or TikTok is building on rented land. Algorithm shifts or policy changes can evaporate distribution overnight.',
        'High-Intent Buyer Capture: Social media users consume entertainment passively, whereas search engine visitors are actively hunting for solutions with intent to purchase.'
      ],
      ar: [
        'المصداقية أولاً: تشير الدراسات إلى أن أكثر من 84% من العملاء يعتبرون الشركات التي تمتلك موقعاً رسمياً أكثر موثوقية واحترافية.',
        'ملكية الأصول: الاعتماد على وسائل التواصل الاجتماعي يشبه البناء على أرض مستأجرة، في حين أن موقعك ملك دائم لك.',
        'الوصول للعميل الجاهز للشراء: مستخدمو قوقل يبحثون بنية شرائية مؤكدة لحل مشاكلهم فوراً.'
      ]
    },
    keyTakeaways: {
      id: ['Website adalah aset permanen', 'Meningkatkan closing rate penjualan', 'Menangkap pencarian Google berdaya beli tinggi'],
      en: ['Websites are permanent owned equity', 'Significantly lifts sales conversion rates', 'Captures high-intent commercial Google searches'],
      ar: ['الموقع ملكية رقمية دائمة', 'يرفع معدلات إتمام الصفقات', 'يستحوذ على العملاء الجادين في الشراء']
    },
    relatedKeywords: ['apa itu website', 'fungsi website bisnis', 'keuntungan punya website', 'why business needs website'],
    faqs: [
      {
        q: { id: 'Apakah media sosial sudah cukup tanpa website?', en: 'Is social media enough without a website?', ar: 'هل تكفي وسائل التواصل الاجتماعي دون موقع؟' },
        a: { id: 'Tidak. Media sosial bagus untuk awareness, tetapi transaksi bernilai tinggi dan pencarian Google membutuhkan website resmi berbadan hukum.', en: 'No. Social platforms build brand awareness, but closing high-ticket deals and Google search visibility strictly require a domain.', ar: 'لا، السوشيال ميديا لجذب الانتباه بينما إغلاق الصفقات الكبرى وتصدر قوقل يتطلب موقعاً رسمياً.' }
      }
    ]
  },
  {
    slug: 'what-is-google-search-console-gsc-and-how-to-use-it',
    category: 'seo-authority',
    categoryLabel: { id: 'SEO & Google Tools', en: 'SEO & Search Tools', ar: 'أدوات السيو وقوقل' },
    title: {
      id: 'Apa Itu Google Search Console (GSC) dan Cara Menggunakannya untuk Melejitkan Trafik?',
      en: 'What is Google Search Console (GSC) and How to Use It to Skyrocket Traffic?',
      ar: 'ما هي أداة مشرفي المواقع (Google Search Console) وكيف تضاعف زوار موقعك؟'
    },
    shortSummary: {
      id: 'Memahami metrik GSC: Impressions, Clicks, CTR, Average Position, dan cara memperbaiki error indeks halaman.',
      en: 'Deep-dive into GSC metrics: Impressions, Clicks, CTR, Average Position, and resolving indexing crawl errors.',
      ar: 'شرح شامل لبيانات GSC: مرات الظهور، النقرات، ومعدل النقر إلى الظهور وحل مشاكل الفهرسة.'
    },
    quickAnswerSnippet: {
      id: 'Google Search Console (GSC) adalah platform resmi gratis dari Google untuk memantau performa pencarian organik website Anda. GSC menunjukkan kata kunci persis yang diketik orang untuk menemukan situs Anda, jumlah tayang (Impressions), jumlah klik, serta status kesehatan pengindeksan halaman.',
      en: 'Google Search Console (GSC) is Google’s official diagnostic dashboard reporting organic search visibility. It reveals exact user query strings, impression volume, click-through rates (CTR), average SERP positions, and crawl health issues directly from Google’s index.',
      ar: 'أداة مشرفي المواقع من قوقل (GSC) هي لوحة التحكم الرسمية لمراقبة أداء موقعك في نتائج البحث، وتكشف الكلمات المفتاحية الدقيقة ومرات ظهور موقعك ومشاكل الفهرسة.'
    },
    detailedContent: {
      id: [
        'Impressions vs Clicks: Impressions adalah berapa kali link website Anda muncul di layar Google pencari. Clicks adalah berapa kali link tersebut benar-benar diklik.',
        'CTR (Click-Through Rate): Persentase klik dibanding tayang. CTR tinggi menandakan judul (Title) dan deskripsi (Meta) Anda sangat memikat dan relevan.',
        'Sitemap Submission: Mengirimkan sitemap.xml ke GSC memastikan ratusan halaman baru Anda terindeks oleh Google dalam hitungan jam.'
      ],
      en: [
        'Impressions vs Clicks: Impressions denote how many times your SERP snippet appeared. Clicks measure actual visits generated.',
        'CTR (Click-Through Rate): The ratio of clicks to impressions. High CTR indicates irresistible meta titles and schema rich snippets.',
        'Sitemap Pipeline: Submitting dynamic sitemap.xml files alerts Google bots to ingest hundreds of programmatic pages within hours.'
      ],
      ar: [
        'مرات الظهور مقابل النقرات: تقيس مرات ظهور موقعك في قوقل وعدد الزوار الفعليين.',
        'نسبة النقر إلى الظهور (CTR): تعكس مدى جاذبية العناوين والوصف في جذب الزائر.',
        'إرسال خريطة الموقع: يضمن أرشفة مئات الصفحات الجديدة بسرعة وكفاءة.'
      ]
    },
    keyTakeaways: {
      id: ['Wajib untuk setiap pemilik website', 'Melihat kata kunci rahasia pembeli', 'Memperbaiki error halaman tidak terindeks'],
      en: ['Indispensable tool for organic search', 'Uncovers hidden buyer keyword strings', 'Fixes indexing bottlenecks immediately'],
      ar: ['أداة ضرورية لكل موقع ناجح', 'تكشف كلمات البحث الحقيقية للعملاء', 'تضمن سرعة الأرشفة في قوقل']
    },
    relatedKeywords: ['apa itu gsc', 'cara pakai google search console', 'google search console tutorial', 'fix gsc index errors'],
    faqs: [
      {
        q: { id: 'Apakah Google Search Console berbayar?', en: 'Is Google Search Console free?', ar: 'هل أداة GSC مجانية؟' },
        a: { id: '100% Gratis selamanya dari Google untuk semua pemilik domain terverifikasi.', en: '100% free forever directly provided by Google.', ar: 'مجانية تماماً 100% مدى الحياة من شركة قوقل.' }
      }
    ]
  },
  {
    slug: 'what-is-core-web-vitals-and-why-sub-second-speed-matters',
    category: 'speed-performance',
    categoryLabel: { id: 'Kecepatan & Performa', en: 'Speed & Performance', ar: 'سرعة التحميل' },
    title: {
      id: 'Apa Itu Core Web Vitals dan Mengapa Loading di Bawah 1 Detik Melipatgandakan Omset?',
      en: 'What are Core Web Vitals and Why Does Sub-Second Speed Double Revenue?',
      ar: 'ما هي معايير Core Web Vitals ولماذا تضاعف سرعة الموقع الأرباح؟'
    },
    shortSummary: {
      id: 'Penjelasan metrik LCP, CLS, INP, dan bagaimana kecepatan loading ekstrem memicu ranking #1 Google.',
      en: 'Explaining LCP, CLS, INP metrics and how sub-second Jamstack architectures trigger #1 organic rankings.',
      ar: 'شرح مقاييس سرعة قوقل وكيف يؤدي تحميل الموقع في أجزاء من الثانية لتصدر نتائج البحث.'
    },
    quickAnswerSnippet: {
      id: 'Core Web Vitals adalah 3 metrik kecepatan resmi Google untuk mengukur kepuasan pengunjung: LCP (kecepatan render konten utama < 2.5s), INP (responsivitas klik < 200ms), dan CLS (stabilitas visual < 0.1). Website dengan skor 95+ mendapatkan prioritas ranking tertinggi dari algoritma Google.',
      en: 'Core Web Vitals are Google’s official user experience ranking signals: LCP (Largest Contentful Paint < 2.5s), INP (Interaction to Next Paint < 200ms), and CLS (Cumulative Layout Shift < 0.1). Sites passing all 3 thresholds receive preferential ranking treatment in Google algorithms.',
      ar: 'هي مقاييس قوقل الرسمية لتجربة المستخدم: سرعة ظهور المحتوى الأساسي (LCP)، سرعة الاستجابة للنقرات (INP)، وثبات العناصر البصرية (CLS)، وتعد عاملاً أساسياً لتصدر الترتيب.'
    },
    detailedContent: {
      id: [
        'Dampak Finansial: Setiap perlambatan 1 detik menurunkan konversi penjualan hingga 20%. 53% pengguna mobile akan meninggalkan situs jika loading lebih dari 3 detik.',
        'Keunggulan Jamstack: Tidak seperti WordPress yang harus memproses database MySQL setiap kali dibuka, Jamstack menyajikan file HTML statis dari cache Cloudflare terdekat dalam 0.3 detik.',
        'Efisiensi Bot Google: Google mengalokasikan "crawl budget" lebih banyak pada website cepat, memungkinkan ribuan halaman Anda diindeks jauh lebih cepat.'
      ],
      en: [
        'Revenue Impact: Every 1-second delay reduces conversions by up to 20%. Over 53% of mobile shoppers abandon pages taking longer than 3 seconds.',
        'Jamstack Advantage: Unlike traditional WordPress running heavy PHP/MySQL queries per visit, static Jamstack serves pre-rendered HTML from Cloudflare edge caches in 300ms.',
        'Crawl Budget Efficiency: Google bots reward ultra-fast infrastructure with deeper crawl allowances, indexing thousands of programmatic URLs seamlessly.'
      ],
      ar: [
        'التأثير على المبيعات: كل تأخير بمقدار ثانية واحدة يخفض المبيعات بنسبة 20%، ويغادر 53% من الزوار إذا زاد التحميل عن 3 ثوان.',
        'تفوق تقنية جامستاك: الاستغناء عن قواعد البيانات الثقيلة والاعتماد على صفحات مهيأة مسبقاً وسريعة جداً.',
        'كفاءة زواحف قوقل: تتم أرشفة مئات الصفحات بسرعة أكبر للمواقع السريعة.'
      ]
    },
    keyTakeaways: {
      id: ['Faktor ranking resmi Google', 'Menurunkan bounce rate drastis', 'Meningkatkan konversi penjualan mobile'],
      en: ['Confirmed Google ranking factor', 'Dramatically reduces mobile bounce rates', 'Directly boosts checkout and lead conversion rates'],
      ar: ['عامل ترتيب مباشر في قوقل', 'يقلل معدل الارتداد للهواتف', 'يرفع معدل إتمام الشراء والتواصل']
    },
    relatedKeywords: ['core web vitals explanation', 'cara mempercepat website', 'lcp cls inp tutorial', 'website speed optimization'],
    faqs: [
      {
        q: { id: 'Berapa skor PageSpeed yang ideal?', en: 'What is an ideal PageSpeed score?', ar: 'ما هي نتيجة السرعة المثالية؟' },
        a: { id: 'Skor 90–100 pada Google PageSpeed Insights (zona hijau) adalah standar emas yang kami garansi.', en: 'A score of 90–100 (green tier) on Google PageSpeed Insights is the industry benchmark.', ar: 'الدرجات بين 90 إلى 100 في مؤشرات قوقل هي المعيار الذهبي.' }
      }
    ]
  },
  {
    slug: 'how-to-optimize-websites-for-ai-search-engines-chatgpt-perplexity-gemini',
    category: 'ai-search',
    categoryLabel: { id: 'AI Search Optimization', en: 'AI Search Optimization', ar: 'السيو لمحركات الذكاء الاصطناعي' },
    title: {
      id: 'Cara Mengoptimasi Website Agar Direkomendasikan oleh ChatGPT, Perplexity & Google Gemini (GEO)',
      en: 'How to Optimize Websites to be Cited by ChatGPT, Perplexity & Google Gemini (GEO)',
      ar: 'كيف تهيئ موقعك لتوصي به محركات الذكاء الاصطناعي مثل ChatGPT وPerplexity وقوقل؟'
    },
    shortSummary: {
      id: 'Panduan Generative Engine Optimization (GEO): bagaimana AI memilih sumber rujukan dan cara membuat website Anda dikutip.',
      en: 'Generative Engine Optimization (GEO) blueprint: how LLMs retrieve citations and how to make your platform the authority source.',
      ar: 'دليل السيو الحديث للذكاء الاصطناعي: كيف تختار النماذج اللغوية مصادر إجاباتها وكيف تظهر شركتك كمرجع موثوق.'
    },
    quickAnswerSnippet: {
      id: 'Generative Engine Optimization (GEO) adalah seni menstrukturkan konten website dengan data faktual, skema terstruktur JSON-LD, ringkasan ringkas (Q&A snippets), dan otoritas topik mendalam sehingga mesin pencari AI (Google AI Overviews, Perplexity, ChatGPT Search) memilih dan mencantumkan website Anda sebagai sumber rujukan utama.',
      en: 'Generative Engine Optimization (GEO) is the practice of structuring web content with entity-based factual schema, concise direct answers, and deep topical authority so that LLM search engines (Google AI Overviews, Perplexity, ChatGPT Search) cite your domain as the primary definitive source.',
      ar: 'تحسين محركات الذكاء الاصطناعي (GEO) هو هيكلة محتوى موقعك ببيانات منظمة وإجابات دقيقة وموثقة تجعل روبوتات الذكاء الاصطناعي تقتبس موقعك كأفضل إجابة موثوقة للمستخدمين.'
    },
    detailedContent: {
      id: [
        'Format Pertanyaan & Jawaban Langsung: AI menyukai konten yang langsung menjawab pertanyaan di paragraf pertama sebelum menjelaskan rincian mendalam.',
        'Schema Markup Semantik: Menyediakan JSON-LD TechArticle, FAQPage, dan ProfessionalService memudahkan AI memahami entitas bisnis dan keahlian Anda tanpa ambiguitas.',
        'Kerapian Kode Tanpa Bloat: Website yang bersih dari script berat memungkinkan crawler AI (seperti GPTBot, PerplexityBot) mengekstrak data dalam hitungan milidetik.'
      ],
      en: [
        'Direct Question-Answer Framing: LLMs preferentially ingest passages that state direct answers upfront before expanding into contextual analysis.',
        'Semantic Entity Schema: Rich JSON-LD microdata (TechArticle, FAQPage, Organization) anchors your domain as a verified real-world entity.',
        'Zero Bloat Extraction: Clean, server-rendered static markup allows AI crawlers (GPTBot, PerplexityBot) to parse facts in milliseconds without client-side rendering failures.'
      ],
      ar: [
        'صياغة الأسئلة والأجوبة المباشرة: تفضل نماذج الذكاء الاصطناعي النصوص التي تعطي الإجابة في الفقرة الأولى مباشرة.',
        'البيانات المنظمة للمخططات: استخدام ترميز JSON-LD يساعد الروبوتات على فهم هوية شركتك ومجال تخصصك بدقة.',
        'كود نظيف خالي من التعقيد: يتيح لروبوتات الذكاء الاصطناعي قراءة المحتوى وفهرسته بسهولة.'
      ]
    },
    keyTakeaways: {
      id: ['Mendominasi era pencarian modern', 'Mendapatkan rujukan AI otomatis', 'Trafik masa depan tanpa biaya iklan'],
      en: ['Dominates modern generative search', 'Secures automated AI citations and referrals', 'Future-proof zero-ad-cost traffic pipeline'],
      ar: ['تصدر نتائج البحث التوليدي الحديث', 'الحصول على ترشيحات مباشرة من الذكاء الاصطناعي', 'تدفق زوار دائم دون إعلانات مدفوعة']
    },
    relatedKeywords: ['generative engine optimization', 'geo seo guide', 'how to rank in chatgpt search', 'perplexity seo ranking'],
    faqs: [
      {
        q: { id: 'Apakah SEO tradisional akan mati karena AI?', en: 'Is traditional SEO dying because of AI?', ar: 'هل ينتهي السيو التقليدي بسبب الذكاء الاصطناعي؟' },
        a: { id: 'Tidak. AI mencari sumber dari website berkecepatan tinggi dan berstruktur data rapi. SEO berevolusi menjadi GEO.', en: 'No. AI models synthesize answers from fast, structured authority websites. SEO has evolved into GEO.', ar: 'كلا، بل يعتمد الذكاء الاصطناعي على المواقع السريعة والمنظمة كمصادر أساسية لمعلوماته.' }
      }
    ]
  },
  {
    slug: 'what-is-google-tag-and-event-tracking-for-leads',
    category: 'analytics',
    categoryLabel: { id: 'Analytics & Tracking', en: 'Analytics & Tracking', ar: 'التحليلات وتتبع الزوار' },
    title: {
      id: 'Apa Itu Google Tag, GTM & Event Tracking untuk Menghitung ROI Konversi WhatsApp?',
      en: 'What is Google Tag, GTM & Event Tracking to Measure WhatsApp Lead ROI?',
      ar: 'ما هو Google Tag وكيف تتتبع نقرات الواتساب ومعدل العائد على الاستثمار؟'
    },
    shortSummary: {
      id: 'Panduan melacak setiap klik tombol WhatsApp, pembelian produk, dan menghitung secara akurat biaya per prospek (Cost Per Lead).',
      en: 'Guide to tracking every WhatsApp button click, product inquiry, and calculating precise Cost Per Lead (CPL) metrics.',
      ar: 'دليل تتبع نقرات أزرار الواتساب وحساب تكلفة العميل بدقة متناهية.'
    },
    quickAnswerSnippet: {
      id: 'Google Tag (GTM / GA4) adalah sistem kode pelacak yang merekam tindakan spesifik pengunjung di website (seperti mengklik tombol WhatsApp, mengunduh proposal, atau melihat katalog). Dengan Google Tag, pemilik bisnis tahu persis berapa biaya iklan yang dikeluarkan dan berapa omset penjualan yang dihasilkan.',
      en: 'Google Tag (GTM / GA4) is a unified tracking snippet that logs micro-conversions (such as WhatsApp clicks, proposal downloads, or catalog views). It bridges the gap between ad spend and closed revenue, computing precise customer acquisition costs.',
      ar: 'هو كود تتبع متطور يسجل تفاعلات الزوار على موقعك مثل النقر على زر الواتساب أو تحميل العروض، مما يساعدك في قياس كفاءة حملاتك التسويقية وأرباحك بدقة.'
    },
    detailedContent: {
      id: [
        'Mengapa Klik WhatsApp Wajib Dilacak: Tanpa event tracking, Anda tidak tahu dari kampanye iklan mana (Google vs TikTok vs Instagram) pelanggan berasal.',
        'Pixel Retargeting: Pengunjung yang mengklik tombol WhatsApp namun belum menyelesaikan transaksi dapat ditargetkan kembali dengan penawaran promo khusus.',
        'Data Akurat Tanpa Tebak-tebakan: Mengambil keputusan bisnis berbasis angka konversi nyata, bukan sekadar perkiraan.'
      ],
      en: [
        'Why WhatsApp Clicks Must Be Tracked: Without custom event tracking, you cannot attribute which marketing channel generated your highest-value clients.',
        'Audience Retargeting: Visitors who clicked WhatsApp but did not close can be cleanly retargeted with dedicated promotional incentives.',
        'Data-Driven Decision Making: Allocating marketing budgets based on real cost-per-lead mathematics rather than guesswork.'
      ],
      ar: [
        'أهمية تتبع نقرات واتساب: لمعرفة الحملة الإعلانية التي جلبت العميل الأعلى ربحية بالضبط.',
        'إعادة الاستهداف الذكي: استهداف الزوار المهتمين بعروض خاصة لإتمام الشراء.',
        'قرارات تسويقية مبنية على الأرقام: توجيه ميزانيتك الإعلانية للقنوات الأكثر تحقيقاً للأرباح.'
      ]
    },
    keyTakeaways: {
      id: ['Mengukur setiap rupiah iklan', 'Pelacakan konversi WhatsApp presisi', 'Meningkatkan ROI bisnis secara terukur'],
      en: ['Measures every marketing dollar spent', 'Precision WhatsApp click attribution', 'Measurably scales business marketing ROI'],
      ar: ['قياس دقيق لكل استثمار تسويقي', 'تتبع دقيق لنقرات واتساب', 'مضاعفة العائد المالي على الإعلانات']
    },
    relatedKeywords: ['google tag tutorial', 'cara pasang google tag manager', 'track whatsapp click ga4', 'conversion tracking roi'],
    faqs: [
      {
        q: { id: 'Apakah pemasangan Google Tag memperlambat website?', en: 'Does Google Tag slow down websites?', ar: 'هل يؤثر كود التتبع على سرعة الموقع؟' },
        a: { id: 'Jika dipasang secara asynchronous (async) seperti standar Jamstack kami, loading website tetap berada di bawah 0.5 detik.', en: 'When implemented asynchronously as in our Jamstack standard, it produces zero render-blocking latency.', ar: 'عند تحميله بشكل غير متزامن كما نفعل في تقنياتنا، لا يؤثر إطلاقاً على سرعة التحميل الفائقة.' }
      }
    ]
  },
  {
    slug: 'how-esellers-and-exporters-use-websites-to-get-international-buyers',
    category: 'ecommerce',
    categoryLabel: { id: 'Toko Online & Ekspor B2B', en: 'E-Commerce & Export', ar: 'المتاجر والتصدير' },
    title: {
      id: 'Bagaimana Penjual & Eksportir Memakai Website Multi-Bahasa untuk Menggaet Pembeli Internasional?',
      en: 'How Sellers & Exporters Use Multi-Language Websites to Win High-Paying International Buyers',
      ar: 'كيف تستخدم المتاجر والمصانع المواقع متعددة اللغات لكسب عملاء ومستوردين دوليين؟'
    },
    shortSummary: {
      id: 'Strategi ekspor digital: bagaimana UMKM dan pabrik lokal menjual komoditas ke Eropa, Arab, dan Amerika dengan margin 300%+.',
      en: 'Digital export playbook: how manufacturers sell commodities to Europe, Gulf countries, and the US with 300%+ margins.',
      ar: 'استراتيجية التصدير الرقمي: كيف تبيع منتجاتك للمستوردين في أوروبا والخليج بهوامش ربح مضاعفة.'
    },
    quickAnswerSnippet: {
      id: 'Eksportir dan penjual produk yang memiliki website multi-bahasa (Inggris, Arab, Indonesia) dapat melewati perantara (tengkulak) dan menjual langsung ke importir luar negeri. Dengan menampilkan katalog spesifikasi, sertifikasi standar ekspor, dan tombol RFQ (Request for Quote) via WhatsApp, bisnis lokal bisa menjual produk dengan harga mata uang kuat (USD/EUR/GBP) tanpa potongan komisi marketplace.',
      en: 'Exporters and brand owners with multi-language Jamstack websites bypass middlemen and sell directly to overseas importers. By showcasing high-res product catalogs, export compliance certifications, and WhatsApp RFQ (Request for Quote) routing, businesses capture high-margin USD, EUR, and GBP contracts commission-free.',
      ar: 'المواقع متعددة اللغات (عربي وإنجليزي) تمكن المصانع والمصدرين من الوصول المباشر للمستوردين العالميين دون وسطاء أو عمولات، مع طلب عروض أسعار حاويات البضائع مباشرة عبر واتساب.'
    },
    detailedContent: {
      id: [
        'Arbitrase Nilai Tukar: Produk furnitur, kopi, rempah, arang briket, atau garmen yang bernilai Rp 50.000 di pasar lokal dapat dijual seharga $10–$25 (Rp 160.000–Rp 400.000) ke pembeli di London atau Dubai.',
        'Bebas Potongan Marketplace: Menjual lewat platform pihak ketiga memakan 15%–30% fee dan menempatkan Anda berdampingan dengan perang harga kompetitor murah.',
        'Kepercayaan Dokumen Resmi: Pembeli internasional membutuhkan kejelasan Incoterms (FOB, CIF), sertifikasi ISO, dan bukti kapasitas produksi bulanan yang dipajang rapi di website.'
      ],
      en: [
        'Currency Arbitrage: Commodities and consumer goods valued modestly domestically command 3x–5x premium price points when packaged for UK, European, or Gulf buyers.',
        'Zero Marketplace Fees: Selling direct on an authoritative branded domain preserves 100% of profit margins and shields you from marketplace price wars.',
        'B2B Credibility Requirements: Global procurement agents demand verifiable Incoterms (FOB, CIF), lab test certificates, and factory capacity stats displayed cleanly.'
      ],
      ar: [
        'فرق العملة ومضاعفة الأرباح: بيع المنتجات مباشرة للمشترين في أوروبا والخليج بالدولار واليورو بأسعار تفوق السوق المحلي بأضعاف.',
        'التخلص من عمولات المنصات: الاحتفاظ بكامل أرباحك وتجنب حروب الأسعار في الأسواق المفتوحة.',
        'بناء ثقة المستوردين: عرض شروط الشحن الدولية (FOB, CIF) وشهادات الجودة وقدرة المصنع الإنتاجية.'
      ]
    },
    keyTakeaways: {
      id: ['Mendapatkan buyer luar negeri langsung', 'Margin keuntungan 3x–5x lipat', 'Membangun merk dagang global yang berharga'],
      en: ['Direct international wholesale leads', '3x to 5x higher profit margins', 'Builds an enduring global B2B brand asset'],
      ar: ['جلب مشترين ومستوردين دوليين مباشرة', 'هوامش ربح تفوق 3 إلى 5 أضعاف', 'بناء علامة تجارية عالمية موثوقة']
    },
    relatedKeywords: ['cara cari buyer luar negeri', 'website b2b ekspor', 'export website design', 'international trade website'],
    faqs: [
      {
        q: { id: 'Apakah pembeli luar negeri mau kontak via WhatsApp?', en: 'Do international buyers contact via WhatsApp?', ar: 'هل يستخدم المستوردون العالميون واتساب؟' },
        a: { id: 'Sangat suka! Lebih dari 2 miliar orang di UK, Eropa, Timur Tengah, dan Amerika Latin menggunakan WhatsApp untuk komunikasi bisnis cepat.', en: 'Absolutely. Over 2 billion professionals across the UK, Europe, Middle East, and Latin America rely on WhatsApp Business for rapid trade deals.', ar: 'نعم بشدة، واتساب للأعمال هو الوسيلة المفضلة لآلاف المستوردين في الخليج وأوروبا لسرعة إنجاز الصفقات.' }
      }
    ]
  }
];
