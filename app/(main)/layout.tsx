import SidebarLeft from "@/components/sidebars/sidebar-left";
import SidebarRight from "@/components/sidebars/sidebar-right";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex-1 flex justify-center">
        <SidebarLeft/>
        <div className="border-x min-h-screen lg:w-[600px]">
        {children}
        </div>
        <SidebarRight/>
      </main>
    );
  }
  
  
  