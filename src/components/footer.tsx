import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { courses } from '@/data/courses'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
)

const branches = [
  { label: 'HEAD OFFICE', name: 'New Baneshwor', location: 'Thulokhari Bot, Kathmandu', here: false },
  { label: 'BRANCH', name: 'Butwal Branch', location: 'Kalikanagar, Rupandehi', here: false },
  { label: 'BRANCH', name: 'Ithari', location: 'Sunsari, Koshi Province', here: false },
  { label: 'BRANCH', name: 'Bijuli Bazar', location: 'Kathmandu', here: false },
  { label: 'YOU ARE HERE', name: 'Pokhara', location: 'Gandaki Province', here: true },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f1623' }} className="text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Caregiver Academia Pokhara"
                width={180}
                height={60}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Premium Caregiver Training: Global Standards, Local Expertise. Nepal&apos;s #1 ISO 9001:2015 certified caregiver training institute — now in Pokhara, Gandaki Province.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent-teal transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent-teal transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent-teal transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent-teal transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/fees', label: 'Fees & Pricing' },
                { href: '/courses', label: 'Courses' },
                { href: '/contact', label: 'Contact' },
                { href: '/#faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 hover:text-accent-teal text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-5">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-white/55 hover:text-accent-teal text-sm transition-colors"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pokhara Branch Contact */}
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider text-sm mb-5">Pokhara Branch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  Anupama Marga, 12th Street,<br />
                  New Road, Pokhara,<br />
                  Kaski, Nepal.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Hotline</span>
                  <a href="tel:+9779714528274" className="block text-white hover:text-accent-teal text-sm font-medium">
                    +977-9714528274
                  </a>
                  <span className="text-xs text-white/35">Business WhatsApp</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Support</span>
                  <a href="tel:+9779768566099" className="block text-white hover:text-accent-teal text-sm font-medium">
                    +977-9768566099
                  </a>
                  <span className="text-xs text-white/35">WhatsApp</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Call</span>
                  <a href="tel:+9779714528275" className="block text-white hover:text-accent-teal text-sm font-medium">
                    +977-9714528275
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/55 hover:text-accent-teal text-sm">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Branch Network Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs whitespace-nowrap">
              Caregiver Academia — Branch Network
            </h4>
            <p className="text-white/35 text-xs md:ml-auto">
              5 branches across Nepal · Same curriculum · Free transfer between branches
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className={`rounded-lg px-4 py-3 border ${
                  branch.here
                    ? 'border-accent-teal/60 bg-accent-teal/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${branch.here ? 'text-accent-teal' : 'text-white/40'}`}>
                  {branch.label}
                </p>
                <p className="text-white text-sm font-semibold">{branch.name}</p>
                <p className="text-white/45 text-xs mt-0.5">{branch.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer + Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-xs text-white/40 mb-3 leading-relaxed">
            <span className="font-semibold text-white/55">Caregiver Academia Pokhara</span> is an official branch of{' '}
            <span className="text-white/55">Caregiver Academia</span>, delivering caregiver and aged care training in Pokhara
            under a standardized curriculum and international certification frameworks.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/35 border-t border-white/10 pt-3">
            <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
            <p>CTEVT Affiliated · CPD UK No. 20520 · SDC Canada Code 1226 · ISO 9001:2015 Cert. E95ABA38</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
