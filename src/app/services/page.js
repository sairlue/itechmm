import Link from "next/link";
import {
  Code,
  Smartphone,
  Layers,
  Cloud,
  Cpu,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Database,
  Terminal,
  ExternalLink,
  SlidersHorizontal,
} from "lucide-react";

export const metadata = {
  title: "Services & Solutions | iTech MM Solutions",
  description:
    "Explore our full suite of technology services: web application engineering, cross-platform mobile apps, cloud DevOps, custom software, and AI automation.",
};

const SERVICES = [
  {
    id: "web",
    title: "Web Application Engineering",
    category: "Web & Frontend",
    icon: Code,
    summary:
      "Enterprise-grade, responsive web platforms and dynamic portals built with Next.js, React, Tailwind CSS, and Node.js.",
    description:
      "We build web applications that load quickly, look great on mobile and desktop, and scale to thousands of simultaneous users. Our frontends prioritize intuitive UX, accessibility standards, and SEO performance.",
    features: [
      "Next.js App Router & Server Components",
      "Responsive UI built with Tailwind CSS",
      "Progressive Web Apps (PWA) capability",
      "Secure authentication & RBAC integration",
      "Clean API integrations (REST & GraphQL)",
      "Automated testing & linting workflows",
    ],
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "TypeScript / JS"],
  },
  {
    id: "mobile",
    title: "Cross-Platform Mobile Development",
    category: "Mobile Apps",
    icon: Smartphone,
    summary:
      "Fluid, native-feel iOS and Android mobile applications engineered for high responsiveness and offline reliability.",
    description:
      "Reach your users on smartphones and tablets. We develop cross-platform mobile apps using Flutter and React Native, cutting development cycles in half while maintaining top-tier performance.",
    features: [
      "Unified iOS & Android codebase",
      "Offline-first data caching & synchronization",
      "Push notification systems (FCM / APNs)",
      "Secure on-device biometric login",
      "Native device sensor & camera integrations",
      "App Store & Google Play submission assistance",
    ],
    tech: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
  },
  {
    id: "software",
    title: "Custom Enterprise Software & ERP",
    category: "Custom Software",
    icon: Layers,
    summary:
      "Bespoke ERP, inventory control, billing systems, and workflow engines tailored to your unique operational pipelines.",
    description:
      "Off-the-shelf software often forces you into awkward workarounds. We design custom business applications built around how your organization actually operates, streamlining manual tasks and eliminating data silos.",
    features: [
      "Custom business logic & process automation",
      "Centralized MySQL / PostgreSQL database models",
      "Role-based permission controls & audit logs",
      "Automated PDF invoicing & reporting",
      "Legacy data migration & CSV exports",
      "Internal team training & documentation",
    ],
    tech: ["MySQL", "Express / Next API", "Prisma / Raw SQL", "REST APIs"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud & Servers",
    icon: Cloud,
    summary:
      "Production-ready Ubuntu VPS setups, Nginx reverse proxy routing, SSL hardening, Docker, and zero-downtime CI/CD.",
    description:
      "We configure and maintain secure server environments. From setting up Linux VPS hosts with automated backups to configuring Nginx reverse proxies with Let's Encrypt certificates, we ensure your applications stay online 24/7.",
    features: [
      "Ubuntu VPS setup & firewall configuration (UFW)",
      "Nginx reverse proxy with HTTPS/SSL certificates",
      "Process management via PM2 & Systemd",
      "Docker containerization & staging environments",
      "Automated daily database backups to cloud storage",
      "Uptime monitoring & alert notifications",
    ],
    tech: ["Ubuntu Linux", "Nginx", "Docker", "PM2", "Certbot SSL", "Git CI/CD"],
  },
  {
    id: "ai",
    title: "AI & Process Automation",
    category: "AI & Automation",
    icon: Cpu,
    summary:
      "Automated customer service bots, document parsing pipelines, LLM-powered assistants, and workflow automations.",
    description:
      "Harness the power of practical AI. We build real-world workflow automation tools that reduce manual administrative overhead, parse incoming documents, and deliver automated instant responses to customer inquiries.",
    features: [
      "AI chatbots trained on custom company knowledge",
      "Automated email & inquiry triage pipelines",
      "Document data extraction & OCR processing",
      "Third-party integrations via webhooks & APIs",
      "Analytics dashboards with predictive insights",
      "Scheduled cron scripts & background jobs",
    ],
    tech: ["Python", "Node.js", "OpenAI / Claude APIs", "LangChain", "n8n / Webhooks"],
  },
  {
    id: "consulting",
    title: "IT Advisory & Security Code Audits",
    category: "Consulting",
    icon: ShieldCheck,
    summary:
      "Strategic technical audits, vulnerability reviews, performance optimization, and architectural roadmaps.",
    description:
      "Unsure whether your existing systems are secure or scalable? Our senior engineers evaluate your codebase, server architecture, and database indexes, delivering an actionable roadmap for stability and performance.",
    features: [
      "Full-stack architecture & code quality reviews",
      "SQL injection & OWASP security assessments",
      "Database indexing & query performance tuning",
      "Tech stack migration planning",
      "Developer mentorship & team training",
      "Vendor evaluation & RFP scoping assistance",
    ],
    tech: ["OWASP Standards", "SQL Optimization", "Security Auditing", "Code Review"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Services Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Capabilities & Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-sky-400">Services</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Engineering scalable web applications, mobile platforms, cloud systems, and intelligent digital workflows.
          </p>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES.map((srv, idx) => {
              const IconComp = srv.icon;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Details & Overview */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded">
                            {srv.category}
                          </span>
                          <h2 className="text-2xl font-bold text-slate-900 mt-1">
                            {srv.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base pt-2">
                        {srv.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="pt-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">
                          Core Technologies:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {srv.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA to inquire specifically about this service */}
                      <div className="pt-4">
                        <Link
                          href={`/contact?service=${encodeURIComponent(srv.title)}`}
                          className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm shadow-sky-600/20 transition-all hover:scale-[1.02]"
                        >
                          <span>Request Proposal for this Service</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Key Deliverables & Features */}
                    <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                        Key Capabilities & Deliverables
                      </h3>
                      <ul className="space-y-3">
                        {srv.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Lifecycle Process */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
              Our Delivery Model
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              How We Work with Clients
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              A transparent, structured engineering lifecycle ensuring on-time delivery and predictable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Discovery & Specs</h4>
              <p className="text-xs text-slate-600">
                Understanding goals, mapping data architecture, and detailing functional specifications.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Design & Prototype</h4>
              <p className="text-xs text-slate-600">
                Interactive mockups, UX wireframes, and validating flows before writing backend code.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Agile Development</h4>
              <p className="text-xs text-slate-600">
                Iterative sprints with Next.js, database migrations, automated tests, and regular demos.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center relative">
              <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">Deployment & SLA</h4>
              <p className="text-xs text-slate-600">
                Nginx VPS deployment, SSL configuration, automated backups, and ongoing technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl font-bold">Need a Custom Solution or Specialized Stack?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our engineering team is flexible and experienced across multiple modern stacks. Tell us what you want to build.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
            >
              <span>Speak with an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
