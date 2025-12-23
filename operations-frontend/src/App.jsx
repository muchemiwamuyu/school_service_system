import React from "react"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Admin from "./pages/Admin"

import Header from "./components/Header"
import DashboardLayout from "./layouts/DashboardLayout"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import Overview from "./pages/Overview"
import Notifications from "./pages/Notifications"
import Actions from "./pages/Actions"
import Students from "./pages/Students"
import Attendance from "./pages/Attendance"
import Grades from "./pages/Grades"
import Discipline from "./pages/Discipline"
import Staff from "./pages/Staff"
import Assignment from "./pages/Assignment"
import Payroll from "./pages/Payroll"
import Classes from "./pages/Classes"
import Teachers from "./pages/Teachers"
import Timetable from "./pages/Timetable"
import Curriculum from "./pages/Curriculum"

function App() {
  return (
    <>
      <Routes>
        {/* Public layout (WITH header) */}
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="sign" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/*Private Layout Dashboard layout (NO header) */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />}/>
            <Route path="notifications" element={<Notifications />}/>
            <Route path="actions" element={<Actions />}/>
            <Route path="students" element={<Students />}/>
            <Route path="attendance" element={<Attendance />}/>
            <Route path="grades-reports" element={<Grades />}/>
            <Route path="disciplinary" element={<Discipline />}/>
            <Route path="staff" element={<Staff />}/>
            <Route path="assignment-schedules" element={<Assignment />}/>
            <Route path="payroll" element={<Payroll />}/>
            <Route path="classes" element={<Classes />}/>
            <Route path="teachers" element={<Teachers />}/>
            <Route path="timetable" element={<Timetable />}/>
            <Route path="curriculum" element={<Curriculum />}/>
            
          </Route>
        </Route>
      </Routes>

      <Toaster theme="dark" position="top-right" />
    </>
  )
}

export default App

