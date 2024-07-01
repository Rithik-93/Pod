import LeftSideBar from "@/components/leftSideBar";
import RightSidebar from "@/components/rightSideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="relative flex flex-col">
    <main className="flex relative bg-black-3">
      <LeftSideBar/>

      <section className="border-2 border-red-600 flex min-h-screen 
      flex-1 flex-col px-4 sm:px-14">
        <div className="mx-auto">
          <div>
           {children}
            
            MobileNav
          </div>
        </div>
      </section>
      <RightSidebar/>
    </main>
  </div> 
  )
}
