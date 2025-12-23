import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeContext } from "@/components/context/ThemeContext"

function DashboardLayout() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content area */}
        <SidebarInset className="flex flex-col flex-1">
          {/* Header */}
          <header className="flex h-14 items-center justify-between border-b px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>

            <button
              onClick={toggleTheme}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Theme
            </button>
          </header>

          {/* Routed page content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
