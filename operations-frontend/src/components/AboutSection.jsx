import React from 'react'
import mission from '../assets/mission.jpg'
import vision from '../assets/vision.jpg'

function AboutSection() {
  return (
    <section className="w-full bg-background text-foreground">
      
      {/* Section Title */}
      <div className="text-center pt-16 pb-8 px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          About
        </h3>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
          Learn more about our mission and vision for modern school management.
        </p>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <img
          src={mission}
          alt="SchoolSys mission"
          className="w-full max-w-md mx-auto md:max-w-none rounded-xl shadow-lg"
        />

        <div className="max-w-xl mx-auto md:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Mission
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            SchoolSys is a comprehensive school management system designed to
            streamline administrative tasks, enhance communication, and improve
            operational efficiency.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            Our platform reduces paperwork and allows educators to focus on what
            matters most — teaching and learning.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text first on desktop */}
        <div className="max-w-xl mx-auto md:mx-0 md:order-1 order-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Vision
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            We envision schools empowered by smart digital tools that improve
            transparency, collaboration, and decision-making.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            SchoolSys aims to become the backbone of efficient and connected
            educational institutions.
          </p>
        </div>

        <img
          src={vision}
          alt="SchoolSys vision"
          className="w-full max-w-md mx-auto md:max-w-none rounded-xl shadow-lg md:order-2 order-1"
        />
      </div>
    </section>
  )
}

export default AboutSection
