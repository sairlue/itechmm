import AdminLayoutClient from "./AdminLayoutClient";

export const metadata = {
  title: "Admin Dashboard | iTech MM Solutions",
};

export default function AdminLayout({ children }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
