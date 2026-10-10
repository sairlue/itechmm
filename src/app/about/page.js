import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Compass,
  CheckCircle,
  Shield,
  Lightbulb,
  HeartHandshake,
  Cpu,
  Building,
  Info,
} from "lucide-react";

export const metadata = {
  title: "About Us | iTech MM Solutions",
  description:
    "Learn about iTech MM Solutions (Intas MN Technology), our mission, vision, engineering principles, and commitment to delivering exceptional software solutions.",
};

const VALUES = [
  {
    icon: Lightbulb,
    title: "Engineering Innovation",
    desc: "We stay ahead of modern technology curves, adopting proven, high-performance tools like Next.js, cloud automation, and AI workflows.",
  },
  {
    icon: Shield,
    title: "Reliability & Security",
    desc: "Code safety, secure data handling, parameterized database querying, and robust uptime are non-negotiable foundations.",
  },
  {
    icon: HeartHandshake,
    title: "Transparency & Partnership",
    desc: "We believe in clear communication, realistic timelines, and collaborative problem solving from sprint planning to deployment.",
  },
  {
    icon: Cpu,
    title: "Pragmatic Architecture",
    desc: "We build scalable, clean codebases designed for maintainability—avoiding unnecessary complexity while preparing for future scale.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            About Our Organization
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-sky-400">iTech MM Solutions</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Intas MN Technology is a technology solutions provider focused on software development, digital engineering, and cloud deployment in Myanmar.
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Brand showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md relative">
                <div className="flex justify-center mb-6">
                  <div className="relative h-16 w-56">
                    <Image
                      src="/images/logo.png"
                      alt="iTech MM Solutions Logo"
                      fill
                      sizes="224px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-2 text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Official Brand:</span>
                    <span className="text-slate-900 font-medium">iTech MM Solutions</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Company Name:</span>
                    <span className="text-slate-900 font-medium">Intas MN Technology</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Headquarters:</span>
                    <span className="text-slate-900 font-medium">Yangon, Myanmar</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-slate-700">Industry:</span>
                    <span className="text-slate-900 font-medium">Information Technology & Software</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-sky-50 text-sky-800 text-xs flex items-start gap-2">
                  <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    Company information can be customized and updated by administrators via the admin dashboard.
                  </span>
                </div>
              </div>
            </div>

            {/* Story & Background */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-md">
                Company Profile
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Empowering businesses with purpose-built digital infrastructure.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                iTech MM Solutions (Intas MN Technology) was established to bridge the gap between business objectives and technical execution. We combine contemporary frontend engineering, scalable backend microservices, and reliable VPS hosting architectures to build platforms that perform reliably under pressure.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Whether you need a bespoke web portal, an iOS/Android mobile product, or an automated workflow connecting your internal databases, our team adheres to modern development standards, secure coding practices, and high test coverage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Next.js App Router & React</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Tailored MySQL Data Schemas</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Ubuntu VPS & Nginx Deployments</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>Cross-Platform Mobile Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-6 border border-sky-400/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                To deliver tailored, robust, and cost-effective digital technology solutions that accelerate productivity, enhance user experiences, and empower Myanmar businesses to compete efficiently in local and global markets.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-sky-900 to-slate-900 text-white p-8 sm:p-10 rounded-2xl shadow-lg relative overflow-hidden border border-sky-800">
              <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-6 border border-sky-300/30">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                To become a trusted premier software engineering house recognized across Southeast Asia for technical excellence, architectural integrity, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-md">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Values That Drive Every Line of Code
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our cultural standards ensure every project is engineered with discipline, security, and pride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">{val.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Information Disclaimer Note */}
      <section className="py-10 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-6 rounded-xl border border-slate-300/80 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-800 flex items-center justify-center gap-1.5">
              <Building className="w-4 h-4 text-sky-600" />
              Company Details & Profile Notice
            </p>
            <p>
              Detailed corporate filings, registration certificates, leadership bios, and client case studies are managed through the authorized administration portal and will be published upon verified provision.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-semibold underline">
                Have specific vendor inquiries? Contact our team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to collaborate with iTech MM Solutions?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Whether you are starting a new digital product or looking to modernize legacy infrastructure, we are here to assist.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
