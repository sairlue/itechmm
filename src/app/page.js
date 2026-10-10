import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Users,
  Award,
} from "lucide-react";

export const metadata = {
  title: "iTech MM Solutions | Modern Software, Web & Cloud Engineering",
  description:
    "Empowering businesses across Myanmar and Southeast Asia with modern web applications, mobile platforms, enterprise systems, and AI automation.",
};

const FEATURED_SERVICES = [
  {
    icon: Code2,
    title: "Web Application Development",
    desc: "Custom high-performance web systems built with modern frameworks like Next.js, React, and Node.js.",
    badge: "Full Stack",
    link: "/services#web",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Fluid iOS and Android native & hybrid applications designed with Flutter and React Native.",
    badge: "iOS & Android",
    link: "/services#mobile",
  },
  {
    icon: Layers,
    title: "Enterprise Software & ERP",
    desc: "Tailored business management software, inventory tracking, POS systems, and API integrations.",
    badge: "Enterprise",
    link: "/services#software",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Infrastructure",
    desc: "Robust Ubuntu VPS & cloud orchestration, automated CI/CD pipelines, Docker, and Nginx deployment.",
    badge: "Cloud / VPS",
    link: "/services#cloud",
  },
  {
    icon: Cpu,
    title: "AI & Process Automation",
    desc: "Intelligent workflows, AI chatbots, data pipelines, and business process automation.",
    badge: "AI Powered",
    link: "/services#ai",
  },
  {
    icon: ShieldCheck,
    title: "IT Consulting & Auditing",
    desc: "Technology architecture advisory, cybersecurity compliance, code audits, and performance tuning.",
    badge: "Consulting",
    link: "/services#consulting",
  },
];

const METRICS = [
  { value: "100%", label: "Custom Tailored Code", sub: "No generic templates" },
  { value: "99.9%", label: "Uptime & High Reliability", sub: "Enterprise architecture" },
  { value: "24/7", label: "Technical Support & SLA", sub: "Always here for you" },
  { value: "10+", label: "Tech Stacks Mastered", sub: "Next.js, React, MySQL & more" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>iTech MM Solutions • Intas MN Technology</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Engineering Intelligent{" "}
                <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Digital Solutions
                </span>{" "}
                for Modern Growth
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                We design and develop high-speed web systems, cross-platform mobile apps, cloud architectures, and intelligent workflows tailored to drive real business impact.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-sky-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium px-6 py-3.5 rounded-xl border border-slate-700/80 transition-all hover:border-slate-600"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Quick highlights */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Agile Delivery</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Myanmar & Global SLA</span>
                </div>
              </div>
            </div>

            {/* Right Graphic / Interactive Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl blur-lg opacity-30"></div>

                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
                  {/* Card Header with Logo mark */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800/60 p-1 flex items-center justify-center">
                        <Image
                          src="/images/logo-mark.png"
                          alt="iTech MM Logo Mark"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">iTech MM Core Engine</h4>
                        <p className="text-xs text-slate-400">Software Architecture</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                      Active
                    </span>
                  </div>

                  {/* Capabilities Stack Items */}
                  <div className="mt-5 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Code2 className="w-5 h-5 text-sky-400" />
                        <div>
                          <p className="text-sm font-semibold text-white">Full-Stack Web</p>
                          <p className="text-xs text-slate-400">Next.js • React • Tailwind</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-sky-400">Fast SSR</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-sky-400" />
                        <div>
                          <p className="text-sm font-semibold text-white">Mobile Engineering</p>
                          <p className="text-xs text-slate-400">iOS & Android Ecosystem</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-sky-400">Cross-Platform</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cloud className="w-5 h-5 text-sky-400" />
                        <div>
                          <p className="text-sm font-semibold text-white">Cloud & MySQL DB</p>
                          <p className="text-xs text-slate-400">Ubuntu VPS • Nginx • SSL</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-sky-400">99.9% Uptime</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-sky-400" />
                        <div>
                          <p className="text-sm font-semibold text-white">Smart Automation</p>
                          <p className="text-xs text-slate-400">AI Pipelines & Custom APIs</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-sky-400">Automated</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Ready for enterprise scale</span>
                    <Link href="/about" className="text-sky-400 hover:text-sky-300 font-medium">
                      Learn about our stack →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-white border-y border-slate-200 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="text-center md:text-left border-l-2 border-sky-500 pl-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-sky-700 mt-1">{metric.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Overview Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                About Intas MN Technology
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Empowering businesses with robust, high-caliber software engineering.
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At <strong>iTech MM Solutions</strong> (Intas MN Technology), we believe technology should be an accelerator, not an obstacle. Our multidisciplinary engineering team combines modern frontend experiences, robust backend systems, and rock-solid cloud infrastructure to deliver digital products that scale.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-sky-100 text-sky-600 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Custom Architecture</h4>
                    <p className="text-xs text-slate-500">Every solution is designed from the ground up to fit your exact business workflows.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-sky-100 text-sky-600 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Reliable Performance & Security</h4>
                    <p className="text-xs text-slate-500">Built with rigorous data protection, parameterized queries, and SSL encryption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-sky-100 text-sky-600 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dedicated Partnership</h4>
                    <p className="text-xs text-slate-500">We work closely with your stakeholders from concept to production deployment and beyond.</p>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm group"
                >
                  <span>Learn more about our mission and story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Core Principles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <Zap className="w-6 h-6 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Velocity & Quality</h4>
                    <p className="text-xs text-slate-500 mt-1">Rapid iterative releases without compromising code quality or security.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="w-6 h-6 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Security-First</h4>
                    <p className="text-xs text-slate-500 mt-1">Strict adherence to data safety, sanitization, and best encryption practices.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <Users className="w-6 h-6 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Client Centric</h4>
                    <p className="text-xs text-slate-500 mt-1">Transparent communication, direct access to engineers, and aligned goals.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <Award className="w-6 h-6 text-sky-600 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Scalable Engineering</h4>
                    <p className="text-xs text-slate-500 mt-1">Architecture built to handle higher loads as your operations expand.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-3">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              End-to-End Technology Services
            </h2>
            <p className="text-slate-600 text-base mt-3">
              We provide full-lifecycle digital solutions—from strategy and UI/UX design to custom coding, cloud deployment, and continuous enhancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_SERVICES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 group-hover:bg-sky-600 text-sky-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors pt-2"
                  >
                    <span>Learn more details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md shadow-slate-900/10"
            >
              <span>View All Services & Tech Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Box Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/80 text-sky-300 text-xs font-bold uppercase tracking-wider">
            Let&apos;s Build Together
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind? Let&apos;s discuss the right architecture.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Reach out to our technical team today for a free project scoping session, architectural assessment, or tailored cost estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@itechmm.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-medium px-6 py-3.5 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Email: contact@itechmm.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
