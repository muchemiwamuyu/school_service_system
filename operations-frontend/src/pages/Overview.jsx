import React from "react"

function Overview() {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border p-4">
          <h3 className="text-sm text-muted-foreground">Students</h3>
          <p className="text-2xl font-bold">1,240</p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="text-sm text-muted-foreground">Teachers</h3>
          <p className="text-2xl font-bold">86</p>
        </div>

        <div className="rounded-xl border p-4">
          <h3 className="text-sm text-muted-foreground">Revenue</h3>
          <p className="text-2xl font-bold">$12,430</p>
        </div>
      </section>

      <div className="text-xl font-semibold">
        Welcome to the Overview
      </div>
    </div>
  )
}

export default Overview
