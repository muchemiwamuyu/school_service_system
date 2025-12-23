import DashboardLayout from '@/layouts/DashboardLayout'
import React from 'react'

function Admin() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
                Welcome back 👋
            </p>
        </DashboardLayout>
    )
}

export default Admin