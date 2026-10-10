import { Suspense } from "react";
import AdminLoginForm from "./AdminLoginForm";

export const metadata = {
  title: "Admin Portal Login | iTech MM Solutions",
  description: "Secure administrator authentication portal for iTech MM Solutions.",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <Suspense
          fallback={
            <div className="text-center text-slate-400 py-10">Loading portal...</div>
          }
        >
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
