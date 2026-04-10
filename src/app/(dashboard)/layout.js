import Navbar from "@/components/sharedComponents/navbar/navbar";
import dashboardData from "@/data/dasboardData.json";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <Navbar activeUser={dashboardData.activeUser} />
      <div className="flex flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
