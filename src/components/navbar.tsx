'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { courses } from '@/data/courses'
import { cn } from '@/lib/utils'

const VERIFICATION_LINKS = [
  {
    label: 'Certification Verification',
    href: 'https://crm.caregiveracademia.com/certificate',
    description: 'Verify a course certificate',
  },
  {
    label: 'Student Verification',
    href: 'https://crm.caregiveracademia.com/student-details-request',
    description: 'Request student details',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [verifyOpen, setVerifyOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = cn(
    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
    isScrolled
      ? 'text-text-dark hover:text-primary hover:bg-slate-50'
      : 'text-white/90 hover:text-white hover:bg-white/10'
  )

  const dropdownBtnClass = cn(
    'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
    isScrolled
      ? 'text-text-dark hover:text-primary hover:bg-slate-50'
      : 'text-white/90 hover:text-white hover:bg-white/10'
  )

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-primary'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Caregiver Academia Pokhara"
              width={240}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setCoursesOpen(!coursesOpen); setVerifyOpen(false) }}
                onBlur={() => setTimeout(() => setCoursesOpen(false), 200)}
                className={dropdownBtnClass}
              >
                Courses <ChevronDown className={cn('w-4 h-4 transition-transform', coursesOpen && 'rotate-180')} />
              </button>
              {coursesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  <Link
                    href="/courses"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-slate-50 border-b border-slate-100 mb-1"
                  >
                    All Courses →
                  </Link>
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.slug}`}
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-slate-50 hover:text-accent-teal"
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Verification Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setVerifyOpen(!verifyOpen); setCoursesOpen(false) }}
                onBlur={() => setTimeout(() => setVerifyOpen(false), 200)}
                className={dropdownBtnClass}
              >
                Verification <ChevronDown className={cn('w-4 h-4 transition-transform', verifyOpen && 'rotate-180')} />
              </button>
              {verifyOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {VERIFICATION_LINKS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 group"
                    >
                      <ShieldCheck className="w-4 h-4 text-accent-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-text-dark group-hover:text-accent-teal">{item.label}</p>
                        <p className="text-xs text-text-muted">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="/job-placement" className={linkClass}>GCC Salon Jobs</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>

            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                'flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium',
                isScrolled ? 'text-primary' : 'text-white/90'
              )}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>

            <a
              href={siteConfig.crmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-accent-teal text-white text-sm font-semibold rounded-lg hover:bg-sky-600 transition-colors"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn('md:hidden p-2 rounded-md', isScrolled ? 'text-primary' : 'text-white')}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">

            {/* Mobile Courses */}
            <div>
              <Link
                href="/courses"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-text-dark hover:text-primary hover:bg-slate-50 rounded-md font-medium"
              >
                All Courses
              </Link>
              <div className="pl-4 space-y-1">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-sm text-text-muted hover:text-accent-teal"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Verification */}
            <div>
              <p className="px-3 py-2 text-text-dark font-medium">Verification</p>
              <div className="pl-4 space-y-1">
                {VERIFICATION_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-1.5 text-sm text-text-muted hover:text-accent-teal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/job-placement"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-text-dark hover:text-primary hover:bg-slate-50 rounded-md font-medium"
            >
              GCC Salon Jobs
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-text-dark hover:text-primary hover:bg-slate-50 rounded-md font-medium"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.crmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 w-full text-center px-4 py-2.5 bg-accent-teal text-white font-semibold rounded-lg"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
