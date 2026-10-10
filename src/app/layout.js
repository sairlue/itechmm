import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    template: "%s | iTech MM Solutions",
    default: "iTech MM Solutions | Innovative Digital & Software Engineering",
  },
  description:
    "iTech MM Solutions  provides cutting-edge web applications, mobile apps, enterprise software, cloud infrastructure, and AI automation.",
  keywords: [
    "iTech MM Solutions",
    "Software Development Myanmar",
    "Web Application Development",
    "Mobile App Development",
    "Cloud Solutions",
    "AI Automation",
  ],
  icons: {
    icon: "/images/icon-256.png",
    shortcut: "/images/icon-256.png",
    apple: "/images/icon-256.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-sky-500 selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
