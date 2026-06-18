import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { courses } from '@/data/courses'

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white">
      {/* Accreditation Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-white/60 mb-4 font-medium uppercase tracking-wider">
            Our Accreditations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {siteConfig.accreditations.map((acc) => (
              <div key={acc.name} className="flex flex-col items-center gap-1">
                <div className="h-10 w-20 relative">
                  <Image
                    src={acc.logo}
                    alt={acc.fullName}
                    fill
                    className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-xs text-white/50">{acc.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-heading font-bold text-xl mb-3">
              <span className="text-white">Caregiver Academia</span>
              <br />
              <span className="text-accent-teal">Pokhara</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {`Gandaki Province's #1 CTEVT-affiliated caregiver training institute. Training Nepal's future international caregivers.`}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-teal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-accent-teal transition-colors text-sm font-bold"
                aria-label="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-white/60 hover:text-accent-teal text-sm transition-colors">
                  All Courses
                </Link>
              </li>
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-white/60 hover:text-accent-teal text-sm transition-colors"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/fees', label: 'Course Fees' },
                { href: '/contact', label: 'Contact' },
                { href: siteConfig.crmUrl, label: 'Enroll Now', external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-accent-teal text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-white/60 hover:text-accent-teal text-sm transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-3">Sister Companies</h3>
              <ul className="space-y-2">
                {[
                  { href: 'https://gccsalonjobs.com', label: 'GCC Salon Jobs' },
                  { href: 'https://nextedupath.com', label: 'Next EduPath' },
                  { href: 'https://nailsacademia.com', label: 'Nails Academia' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-accent-teal text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-teal mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Pokhara, Kaski District<br />
                  Gandaki Province, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${siteConfig.phone}`} className="text-white/60 hover:text-white block">
                    {siteConfig.phone}
                  </a>
                  <a href={`tel:${siteConfig.secondaryPhone}`} className="text-white/60 hover:text-white block">
                    {siteConfig.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-white text-sm">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <span className="text-white/60 text-sm">{siteConfig.businessHours}</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-white/40 mb-2">Service Districts (Gandaki Province):</p>
              <p className="text-xs text-white/50">{siteConfig.serviceDistricts.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
            <p>CTEVT Affiliated · CPD UK No. 20520 · SDC Canada Code 1226 · ISO 9001:2015 Cert. E95ABA38</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
