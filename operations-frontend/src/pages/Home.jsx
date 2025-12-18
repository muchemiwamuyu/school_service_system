import AboutSection from '@/components/AboutSection'
import LandingPage from '@/components/LandingPage'
import React from 'react'

function Home() {

  return (
    <div className='p-4 bg-background text-foreground'>
        {/* landing page */}
        <LandingPage/>

        <div>
            <AboutSection />
        </div>
    </div>
  )
}

export default Home