import Link from 'next/link'
import FullLogo from '@/components/shared/FullLogo'
import AuthLogin from './_components/AuthLogin'
import LarkSuiteButton from './_components/LarkSuiteButton'
import LeftSidebar from './_components/LeftSidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Modernize',
  description: 'Sign in to your account',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1c2536]">
      {/* Main Content */}
      <div className="relative overflow-hidden min-h-screen">
        <div className="grid grid-cols-12 min-h-screen">
          {/* Left Side - Illustration */}
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 bg-gradient-to-br from-[#5d87ff] to-[#49beff] lg:block hidden relative overflow-hidden">
            {/* Logo on top of gradient */}
            <div className="absolute top-0 left-0 p-5 z-20">
              <FullLogo />
            </div>
            <LeftSidebar />
          </div>

          {/* Right Side - Login Form */}
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 flex items-center justify-center p-5 sm:p-12 bg-white dark:bg-[#1c2536]">
            {/* Mobile logo - only show on small screens */}
            <div className="lg:hidden absolute top-5 left-5">
              <FullLogo />
            </div>
            
            <div className="w-full max-w-[420px] space-y-6">
              {/* Welcome Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-[28px] font-semibold text-[#2a3547] dark:text-white leading-tight">
                  Welcome to Modernize
                </h1>
                <p className="mt-2 text-sm text-[#5a6a85] dark:text-[#7c8fac]">
                  Your Admin Dashboard
                </p>
              </div>

              {/* LarkSuite OAuth Button */}
              <LarkSuiteButton />

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 my-6">
                <hr className="flex-1 border-[#e5e5e5] dark:border-[#333f55]" />
                <p className="text-sm text-[#5a6a85] dark:text-[#7c8fac] font-medium">
                  or sign in with
                </p>
                <hr className="flex-1 border-[#e5e5e5] dark:border-[#333f55]" />
              </div>

              {/* Email/Password Login Form */}
              <AuthLogin />

              {/* Footer */}
              <div className="text-center space-y-2 mt-6 pt-6">
                <p className="text-sm text-[#5a6a85] dark:text-[#7c8fac]">
                  Wrong page?
                </p>
                <Link
                  href="https://renoxpert.my"
                  className="text-sm font-medium text-[#5d87ff] hover:text-[#4a6fd9]"
                >
                  Go to RenoXpert Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
