import { SignupForm } from '@/components/signup-form'
import React from 'react'

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-10">

      {/* Page header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Sign Up</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Create your admin account to manage the school system efficiently.
        </p>
      </div>

      {/* Form container */}
      <div className="w-full max-w-lg bg-muted/10 backdrop-blur-md border border-muted/30 rounded-xl shadow-lg p-8">
        <SignupForm />
      </div>

      {/* Extra info or CTA (optional) */}
      <p className="mt-6 text-sm text-muted-foreground text-center max-w-md">
        Already have an account? <a href='/login' className="text-primary cursor-pointer hover:underline">Login here</a>
      </p>

    </div>
  )
}

export default SignUp
