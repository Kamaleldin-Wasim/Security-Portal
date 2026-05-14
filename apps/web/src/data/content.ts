import { Locale } from "@/lib/i18n";

export type ServiceKey =
  | "guards"
  | "vip"
  | "events"
  | "cctv"
  | "access"
  | "patrol"
  | "consulting";

type LocalizedText = Record<Locale, string>;

export const brand = {
  name: {
    ar: "شركة درع الحماية للحراسات الأمنية",
    en: "ShieldGuard Security Services"
  },
  tagline: {
    ar: "حلول أمنية احترافية تحمي المنشآت والفعاليات والشخصيات المهمة في المملكة",
    en: "Premium security solutions for facilities, events, and VIP operations across Saudi Arabia"
  },
  phone: "+20 10 70238755",
  whatsapp: "+201070238755",
  email: "kimowasim123@gmail.com",
  address: {
    ar: "الرياض، المملكة العربية السعودية",
    en: "Riyadh, Kingdom of Saudi Arabia"
  }
};

export const navItems = [
  { href: "", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/about", label: { ar: "من نحن", en: "About" } },
  { href: "/services", label: { ar: "الخدمات", en: "Services" } },
  { href: "/sectors", label: { ar: "القطاعات", en: "Sectors" } },
  { href: "/projects", label: { ar: "المشاريع", en: "Projects" } },
  { href: "/clients", label: { ar: "العملاء", en: "Clients" } },
  { href: "/blog", label: { ar: "المدونة", en: "Insights" } },
  { href: "/careers", label: { ar: "الوظائف", en: "Careers" } },
  { href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } }
];

export const hero = {
  eyebrow: {
    ar: "شركة أمنية سعودية بمعايير تشغيل احترافية",
    en: "Saudi security operations built for trust, discipline, and rapid response"
  },
  title: {
    ar: "نحمي منشأتك وفعالياتك وكوادرك الأمنية بحلول موثوقة تليق باسمك",
    en: "We secure your facilities, events, and people with credible protection built for your reputation"
  },
  description: {
    ar: "من الحراسات الأمنية إلى الحماية الخاصة وأنظمة المراقبة، نوفر حلولاً متكاملة مصممة للجهات الحكومية والشركات والمنشآت التجارية والفعاليات الكبرى في المملكة.",
    en: "From manned guarding and executive protection to surveillance and access control, we deliver integrated security services for government entities, corporations, commercial facilities, and major events in Saudi Arabia."
  },
  stats: [
    {
      number: "24/7",
      label: { ar: "غرفة متابعة وتشغيل", en: "Operations coverage" }
    },
    {
      number: "90+",
      label: { ar: "خطة تشغيل مخصصة", en: "Tailored deployment plans" }
    },
    {
      number: "15m",
      label: { ar: "استجابة أولية سريعة", en: "Rapid first response" }
    }
  ]
};

export const metrics = [
  {
    value: "100%",
    title: { ar: "التزام بالتقارير التشغيلية", en: "Operational reporting compliance" }
  },
  {
    value: "24/7",
    title: { ar: "إشراف ومتابعة ميدانية", en: "Field supervision" }
  },
  {
    value: "KSA",
    title: { ar: "حلول مصممة للسوق السعودي", en: "Saudi-first deployment" }
  },
  {
    value: "B2B",
    title: { ar: "جاهزية للتعامل مع القطاعات الحساسة", en: "Enterprise-grade procurement readiness" }
  }
];

export const services: Array<{
  slug: ServiceKey;
  title: LocalizedText;
  summary: LocalizedText;
  bullets: Record<Locale, string[]>;
}> = [
  {
    slug: "guards",
    title: { ar: "حراسات أمنية رجالية ونسائية", en: "Security Guards" },
    summary: {
      ar: "كوادر أمنية مدربة لحماية المداخل والمرافق والزوار مع انضباط تشغيلي كامل.",
      en: "Disciplined male and female security teams for entrances, facilities, visitors, and daily operations."
    },
    bullets: {
      ar: ["إدارة بوابات", "تفتيش وتحقق", "سجلات زوار", "تقارير ورديات"],
      en: ["Gate control", "Screening", "Visitor logs", "Shift reporting"]
    }
  },
  {
    slug: "vip",
    title: { ar: "حماية الشخصيات المهمة", en: "VIP Protection" },
    summary: {
      ar: "خدمات حماية خاصة للمسؤولين والتنفيذيين والوفود الرسمية والضيوف المهمين.",
      en: "Discrete executive protection for leadership teams, delegations, and high-profile guests."
    },
    bullets: {
      ar: ["تقييم مخاطر", "مرافقة شخصية", "تأمين تنقلات", "تنسيق مسبق للمواقع"],
      en: ["Risk assessment", "Close protection", "Secure transport", "Advance planning"]
    }
  },
  {
    slug: "events",
    title: { ar: "أمن الفعاليات والمعارض", en: "Event Security" },
    summary: {
      ar: "تأمين الفعاليات من التخطيط المسبق وحتى إدارة الحشود وتنظيم الدخول.",
      en: "End-to-end event security covering planning, crowd management, and access screening."
    },
    bullets: {
      ar: ["تنظيم حشود", "إدارة مداخل", "خطة طوارئ", "تنسيق مع المنظمين"],
      en: ["Crowd control", "Entry screening", "Emergency plans", "Organizer coordination"]
    }
  },
  {
    slug: "cctv",
    title: { ar: "أنظمة المراقبة والكاميرات", en: "CCTV & Surveillance" },
    summary: {
      ar: "تصميم وتركيب ومراقبة أنظمة CCTV لرفع الوعي الأمني وتوثيق الأحداث.",
      en: "CCTV design, deployment, and monitoring to strengthen visibility and evidence capture."
    },
    bullets: {
      ar: ["تغطية ذكية", "غرف مراقبة", "ربط تنبيهات", "صيانة دورية"],
      en: ["Smart coverage", "Control rooms", "Alert integration", "Scheduled maintenance"]
    }
  },
  {
    slug: "access",
    title: { ar: "أنظمة التحكم في الدخول", en: "Access Control Systems" },
    summary: {
      ar: "ضبط صلاحيات الوصول للمباني والمناطق الحساسة عبر حلول موثوقة وقابلة للتوسع.",
      en: "Scalable access control for buildings and sensitive areas with reliable authorization workflows."
    },
    bullets: {
      ar: ["بطاقات دخول", "بصمة وحضور", "بوابات ذكية", "تقارير صلاحيات"],
      en: ["Card access", "Biometric attendance", "Smart gates", "Permission reports"]
    }
  },
  {
    slug: "patrol",
    title: { ar: "الدوريات الأمنية", en: "Patrol Security" },
    summary: {
      ar: "دوريات ثابتة ومتحركة لرفع الجاهزية ومتابعة المواقع الحساسة على مدار الساعة.",
      en: "Static and mobile patrol coverage for perimeter control and routine site assurance."
    },
    bullets: {
      ar: ["جولات مجدولة", "تحقق من المحيط", "تقارير فورية", "متابعة نقاط حساسة"],
      en: ["Scheduled rounds", "Perimeter checks", "Live reports", "Critical-point coverage"]
    }
  },
  {
    slug: "consulting",
    title: { ar: "الاستشارات الأمنية", en: "Security Consulting" },
    summary: {
      ar: "دراسات مخاطر وخطط تشغيل وتوصيات تطوير لرفع كفاءة المنظومة الأمنية.",
      en: "Risk studies, operating plans, and security improvement recommendations for complex sites."
    },
    bullets: {
      ar: ["تقييم مخاطر", "مراجعة مواقع", "خطط تشغيل", "تقارير تنفيذية"],
      en: ["Risk audits", "Site reviews", "Operating plans", "Executive reports"]
    }
  }
];

export const sectors = [
  { ar: "الجهات الحكومية", en: "Government Entities" },
  { ar: "الشركات والمكاتب الرئيسية", en: "Corporations & HQ Offices" },
  { ar: "المجمعات التجارية", en: "Commercial Facilities" },
  { ar: "المعارض والفعاليات", en: "Events & Exhibitions" },
  { ar: "المستودعات والمراكز اللوجستية", en: "Warehouses & Logistics" },
  { ar: "الضيافة والمواقع الراقية", en: "Hospitality & Premium Venues" }
];

export const certifications = [
  {
    ar: "جاهزية لإبراز التراخيص النظامية والاعتمادات التشغيلية",
    en: "Ready for licensing, compliance, and operating approvals display"
  },
  {
    ar: "برامج تدريب ميداني ورفع كفاءة مستمر",
    en: "Field training and continuous readiness programs"
  },
  {
    ar: "إجراءات تشغيل وتقارير متابعة مهيكلة",
    en: "Structured SOPs and reporting procedures"
  }
];

export const testimonials = [
  {
    quote: {
      ar: "المنهجية التشغيلية واضحة، والتواصل سريع، والفريق كان منضبطاً طوال فترة الفعالية.",
      en: "The operating model was clear, communication was fast, and the team stayed disciplined throughout the event."
    },
    author: {
      ar: "مدير فعاليات إقليمي",
      en: "Regional Events Director"
    }
  },
  {
    quote: {
      ar: "وجدنا شريكاً يفهم حساسية المواقع التنفيذية ويعمل باحترافية عالية.",
      en: "We found a partner that understands executive-site sensitivity and operates with strong professionalism."
    },
    author: {
      ar: "مدير إداري، قطاع الشركات",
      en: "Administration Manager, Corporate Sector"
    }
  }
];

export const faq = [
  {
    q: {
      ar: "هل توفرون خطط تشغيل مخصصة لكل موقع؟",
      en: "Do you provide tailored operating plans for each site?"
    },
    a: {
      ar: "نعم، نقوم بدراسة احتياج العميل وطبيعة المخاطر والموقع ثم نبني الخطة التشغيلية والكوادر المناسبة.",
      en: "Yes. We assess the client’s site, risk profile, and operational requirements before building the staffing and execution plan."
    }
  },
  {
    q: {
      ar: "هل يمكن التعاقد للفعاليات المؤقتة؟",
      en: "Can we hire your team for temporary events?"
    },
    a: {
      ar: "بالتأكيد، نوفر تأميناً للفعاليات والمعارض والمؤتمرات وفق حجم الحدث ومتطلبات الدخول والتنظيم.",
      en: "Absolutely. We support exhibitions, conferences, and temporary events based on scale, flow, and access requirements."
    }
  },
  {
    q: {
      ar: "هل تشمل خدماتكم الأنظمة التقنية؟",
      en: "Do your services include technical systems?"
    },
    a: {
      ar: "نعم، نقدم حلول CCTV وأنظمة التحكم في الدخول ضمن حزمة متكاملة أو كمشاريع منفصلة.",
      en: "Yes. We deliver CCTV and access control either as stand-alone projects or as part of a complete security package."
    }
  }
];

export const clients = [
  "ALFA HOLDING",
  "RIYADH EXPO",
  "SAUDI URBAN",
  "NEXUS TOWERS",
  "ALMAJD FACILITIES",
  "GULF VISION"
];

export const projects = [
  {
    title: {
      ar: "تأمين معرض أعمال في الرياض",
      en: "Riyadh Business Exhibition Security"
    },
    result: {
      ar: "تنظيم دخول وحماية محيطية وإدارة حشود على مدى ثلاثة أيام تشغيلية.",
      en: "Managed access, perimeter protection, and crowd flow across a three-day exhibition."
    }
  },
  {
    title: {
      ar: "تطوير منظومة مراقبة لمجمع تجاري",
      en: "Commercial Complex Surveillance Upgrade"
    },
    result: {
      ar: "رفع التغطية البصرية وربط نقاط المراقبة بتقارير متابعة أكثر دقة.",
      en: "Expanded visual coverage and improved reporting through a structured monitoring setup."
    }
  },
  {
    title: {
      ar: "تشغيل دوريات وحراسات لمنشأة لوجستية",
      en: "Logistics Facility Patrol Operations"
    },
    result: {
      ar: "رفع مستوى الانضباط الموقعي ومراقبة الحركة الخارجية والداخلية.",
      en: "Improved site discipline through scheduled patrols and better internal-external movement control."
    }
  }
];

export const blogPosts = [
  {
    slug: "event-readiness",
    title: {
      ar: "كيف تجهز خطتك الأمنية للفعاليات الكبرى؟",
      en: "How to build an event security readiness plan"
    },
    excerpt: {
      ar: "خطوات عملية لتخطيط الحشود والمداخل والطوارئ قبل انطلاق الحدث.",
      en: "A practical approach to crowd planning, access points, and emergency readiness."
    }
  },
  {
    slug: "cctv-strategy",
    title: {
      ar: "متى تحتاج منشأتك إلى تحديث أنظمة المراقبة؟",
      en: "When should your facility upgrade its CCTV strategy?"
    },
    excerpt: {
      ar: "إشارات تدل على أن تغطيتك الحالية لا تواكب المخاطر التشغيلية.",
      en: "Signals that your current coverage no longer matches your operational risks."
    }
  }
];

export const careersHighlights = [
  {
    ar: "فرص وظيفية للحراسات الأمنية الرجالية والنسائية",
    en: "Career opportunities for male and female security guards"
  },
  {
    ar: "بيئة تشغيل منضبطة ومسارات تدريب وتطوير",
    en: "Disciplined operations with training and growth paths"
  },
  {
    ar: "فرص عمل في المشاريع والفعاليات والمنشآت المختلفة",
    en: "Assignments across events, facilities, and long-term contracts"
  }
];

export const ctaLabels = {
  quote: { ar: "اطلب عرض سعر", en: "Request a Quote" },
  call: { ar: "اتصل الآن", en: "Call Now" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" }
};

export function text(locale: Locale, value: LocalizedText) {
  return value[locale];
}
