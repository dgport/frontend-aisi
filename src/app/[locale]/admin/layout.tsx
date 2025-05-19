import AdminSidebar from "./_components/AdminSidebar";
import { isAuthServer } from "@/auth/isAuthServer";
import { redirect } from "next/navigation";
 
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authResult = await isAuthServer();

  if (!authResult.authenticated) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen ">
      <AdminSidebar />
      <div className="flex-grow pl-64 pt-24">{children}</div>
    </div>
  );
}
