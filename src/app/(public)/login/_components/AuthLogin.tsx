'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().default(false),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function AuthLogin() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setServerError(null)
    setIsLoading(true)

    try {
      console.log('Login attempt:', { email: data.email })
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Login successful! (Mock - Phase 2 will implement actual auth)')
      
    } catch (error) {
      console.error('Login error:', error)
      setServerError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-[#2a3547] dark:text-white mb-2 block">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          className="h-10 bg-white dark:bg-transparent border-[#e5e5e5] dark:border-[#333f55] text-[#2a3547] dark:text-white placeholder:text-[#5a6a85] focus:border-[#5d87ff] focus:ring-0"
        />
        {errors.email && (
          <p className="text-sm text-[#ef4444] mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <Label htmlFor="password" className="text-sm font-medium text-[#2a3547] dark:text-white mb-2 block">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            {...register('password')}
            className="h-10 pr-10 bg-white dark:bg-transparent border-[#e5e5e5] dark:border-[#333f55] text-[#2a3547] dark:text-white placeholder:text-[#5a6a85] focus:border-[#5d87ff] focus:ring-0"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a6a85] hover:text-[#2a3547] dark:hover:text-white"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-[#ef4444] mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Remember & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox 
            id="remember" 
            {...register('remember')}
            className="border-[#e5e5e5] dark:border-[#333f55] data-[state=checked]:bg-[#5d87ff] data-[state=checked]:border-[#5d87ff]"
          />
          <Label 
            htmlFor="remember" 
            className="text-sm font-normal cursor-pointer text-[#5a6a85] dark:text-[#7c8fac]"
          >
            Remember this device
          </Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-[#5d87ff] hover:text-[#4a6fd9] font-medium"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Error Message */}
      {serverError && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-[#ef4444]">{serverError}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full h-10 bg-gradient-to-r from-[#5d87ff] to-[#8754ec] hover:from-[#4a6fd9] hover:to-[#6d31bd] text-white font-medium text-sm shadow-[0_9px_17.5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all hover:-translate-y-0.5"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  )
}
