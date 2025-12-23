import { useAuth } from '@/components/context/AuthContext'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {

    const {user} = useAuth()

    if (!user) {
        return <Navigate to='/login' replace/>
    }
  return (
    <Outlet />
  )
}

export default ProtectedRoutes