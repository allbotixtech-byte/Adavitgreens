import AdminShell from "@/components/layout/AdminShell";

/**
 * Server layout wrapping the interactive admin shell. Exists so the admin
 * area can carry `noindex` - metadata cannot be exported from a Client
 * Component, and the shell needs client hooks.
 */
export const metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
