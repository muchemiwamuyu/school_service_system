"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  Map,
  PieChart,
  SchoolIcon,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar(props) {
  const [adminData, setAdminData] = React.useState(null)

  React.useEffect(() => {
    const stored = localStorage.getItem("adminData")
    if (stored) {
      setAdminData(JSON.parse(stored))
    } else {
      console.error("No admin data found in localStorage")
    }
  }, [])

  if (!adminData) return null // or a loader if you want

  // School dashboard data
  const data = {
    user: {
      name: adminData.admin_name,
      email: adminData.admin_email,
      avatar: "/avatars/admin.jpg",
    },
    departments: [
      { name: "Primary School", logo: SchoolIcon, level: "Grades 1-6" },
      { name: "Secondary School", logo: AudioWaveform, level: "Grades 7-12" },
      { name: "Administration", logo: Command, level: "Staff & Management" },
      { name: "Library & Labs", logo: BookOpen, level: "Resources & Facilities" },
      { name: "Transport & Sports", logo: Map, level: "Extra-Curricular" },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: "Overview", url: "/dashboard/overview" },
          { title: "Notifications", url: "/dashboard/notifications" },
          { title: "Quick Actions", url: "/dashboard/actions" },
        ],
      },
      {
        title: "Students",
        url: "/dashboard/students",
        icon: Bot,
        items: [
          { title: "All Students", url: "/dashboard/students" },
          { title: "Grades & Reports", url: "/dashboard/grades-reports" },
          { title: "Disciplinary Records", url: "/dashboard/disciplinary" },
        ],
      },
      {
        title: "Staff",
        url: "#",
        icon: BookOpen,
        items: [
          { title: "All Staff", url: "/dashboard/staff" },
          { title: "Attendance", url: "/dashboard/attendance" },
          { title: "Assignments & Schedules", url: "/dashboard/assignment-schedules" },
          { title: "Payroll", url: "/dashboard/payroll" },
        ],
      },
      {
        title: "Classes & Subjects",
        url: "#",
        icon: Settings2,
        items: [
          { title: "Class List", url: "/dashboard/classes" },
          { title: "Assign Teachers", url: "/dashboard/teachers" },
          { title: "Timetable", url: "/dashboard/timetable" },
          { title: "Curriculum", url: "/dashboard/curriculum" },
        ],
      },
      {
        title: "Finance",
        url: "#",
        icon: PieChart,
        items: [
          { title: "Fee Collection", url: "#" },
          { title: "Invoices & Receipts", url: "#" },
          { title: "Scholarships & Discounts", url: "#" },
          { title: "Financial Reports", url: "#" },
        ],
      },
      {
        title: "Events & Calendar",
        url: "#",
        icon: Map,
        items: [
          { title: "School Calendar", url: "#" },
          { title: "Exams & Results", url: "#" },
          { title: "Upcoming Events", url: "#" },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          { title: "School Profile", url: "#" },
          { title: "User Roles & Permissions", url: "#" },
          { title: "System Settings", url: "#" },
          { title: "Backup & Restore", url: "#" },
        ],
      },
    ],
    projects: [
      { name: "Admissions", url: "#", icon: Frame },
      { name: "Examinations", url: "#", icon: PieChart },
      { name: "Library Management", url: "#", icon: Map },
      { name: "Transportation", url: "#", icon: Map },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.departments} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
