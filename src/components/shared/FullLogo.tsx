'use client'

export default function FullLogo() {
  return (
    <div className="inline-flex items-center gap-3">
      {/* Colorful gradient icon */}
      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-lg"></div>
      {/* Modernize text */}
      <span className="text-white dark:text-white text-2xl font-bold">Modernize</span>
    </div>
  )
}

