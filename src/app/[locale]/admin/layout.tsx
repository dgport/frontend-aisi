import AdminSidebar from "./_components/AdminSidebar";

 
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <div className="flex min-h-screen ">
      <AdminSidebar />
      <div className="flex-grow pl-64 pt-24">{children}</div>
    </div>
  );
}
