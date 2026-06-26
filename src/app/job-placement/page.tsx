import { Metadata } from 'next'
import { Briefcase, Shield, Clock, Star, Phone, MapPin, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Job Placement — GCC Salon Jobs Dubai | Caregiver Academia Pokhara',

}

const categories = [
  { title: 'Caregiving Roles', desc: 'Elderly, pediatric, and special-needs care — live-in and live-out positions across UAE, Qatar, Saudi Arabia, and Kuwait.' },
  { title: 'Hospitality & F&B', desc: 'Hotel, restaurant, and food & beverage roles with Gulf employers across all four destination countries.' },
  { title: 'Salon & Beauty', desc: 'Nail technician, hairdresser, beautician, and spa roles in high-demand Gulf salons.' },
  { title: 'Admin & Office Support', desc: 'Office administration, data entry, and customer service roles for English-proficient candidates.' },
  { title: 'Security Personnel', desc: 'Security officer and guard positions with licensed Gulf employers.' },
  { title: 'Visa & Documentation', desc: 'Full visa processing, medical coordination, and MOHRE-compliant documentation handled in-house.' },
]

const destinations = [
  { country: 'UAE', flag: '🇦🇪', cities: 'Dubai · Abu Dhabi · Sharjah' },
  { country: 'Saudi Arabia', flag: '🇸🇦', cities: 'Riyadh · Jeddah · Dammam' },
  { country: 'Qatar', flag: '🇶🇦', cities: 'Doha · Al Wakrah' },
  { country: 'Kuwait', flag: '🇰🇼', cities: 'Kuwait City · Hawalli' },
]

const steps = [
  { step: '01', title: 'Contact Pokhara Branch', desc: 'Call or WhatsApp our Pokhara office to register your interest and confirm your eligibility.' },
  { step: '02', title: 'Profile Sourcing & Screening', desc: 'Your profile is matched to open employer roles based on your training, skills, and target country.' },
  { step: '03', title: 'Skills Test & Training Top-up', desc: 'A short skills assessment is conducted and any gaps are filled with targeted training.' },
  { step: '04', title: 'Documentation & Visa Handling', desc: 'GCC Salon Jobs handles all documentation, medicals, and MOHRE-compliant visa processing.' },
  { step: '05', title: 'Deployment', desc: 'Average deployment timeline is 2–4 weeks from documentation completion.' },
  { step: '06', title: '30/60/90-Day Aftercare', desc: 'Post-arrival support calls at 30, 60, and 90 days to ensure your transition is smooth.' },
]

const advantages = [
  'On-ground Dubai office with direct employer relationships — no middlemen.',
  'No duplicate evaluations — same organization family as your training institute.',
  'MOHRE compliance and proper UAE work permits included.',
  'Transparent process with no upfront fees charged to workers.',
  'Pre-departure orientation included for all placed candidates.',
  '90-day replacement guarantee for employers and candidates.',
]

export default function JobPlacementPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm mb-6">
            <Briefcase className="w-4 h-4 text-accent-green" />
            Sister Company — GCC Salon Jobs Dubai
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Gulf Job Placement for Caregivers
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-6">
            GCC Salon Jobs — the Dubai-headquartered recruitment partner in the Caregiver Academia family — handling end-to-end overseas job placement for caregivers, hospitality, salon, admin, and security roles across the UAE, Qatar, Saudi Arabia, and Kuwait.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { icon: Star, value: '500+', label: 'Workers Placed' },
              { icon: Star, value: '4.9 ★', label: 'Verified Rating' },
              { icon: Clock, value: '2–4 wk', label: 'Avg. Deployment' },
              { icon: Shield, value: '90-day', label: 'Replacement Guarantee' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-white font-heading">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Register Your Interest
          </a>
        </div>
      </section>

      {/* Priority Pipeline */}
      <section className="py-12 bg-accent-teal/5 border-b border-accent-teal/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 border border-accent-teal/30 rounded-full text-accent-teal text-sm font-semibold mb-4">
            🎓 Pokhara Student Benefit
          </div>
          <h2 className="text-2xl font-bold text-primary font-heading mb-3">
            Pokhara Students Get Priority Placement
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Enrolled or graduated Caregiver Academia Pokhara students receive priority access to Gulf placements ahead of general applicants. Contact the Pokhara branch first to register your priority status.
          </p>
        </div>
      </section>

      {/* Placement Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Placement Categories</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Six role categories placed across four Gulf countries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-accent-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-accent-teal" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">{cat.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Gulf Destinations</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Four Gulf countries with active employer networks and direct office support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {destinations.map((dest) => (
              <div key={dest.country} className="card p-5 text-center">
                <span className="text-5xl block mb-3">{dest.flag}</span>
                <h3 className="font-heading font-bold text-primary mb-1">{dest.country}</h3>
                <p className="text-text-muted text-sm">{dest.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">The 6-Step Placement Process</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              From first contact to post-arrival support — a clear, transparent process with no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item) => (
              <div key={item.step} className="card p-6">
                <p className="text-4xl font-extrabold text-accent-teal/20 font-heading mb-2">{item.step}</p>
                <h3 className="font-heading font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Why GCC Salon Jobs</h2>
            <p className="text-text-muted">Established 2014 · Dubai Business Bay · 500+ placements</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv) => (
              <div key={adv} className="flex items-start gap-3 card p-4">
                <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                <p className="text-text-dark text-sm">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to Work in the Gulf?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact Caregiver Academia Pokhara to register your interest and get priority placement as a Pokhara student or graduate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Visit Pokhara Branch
            </Link>
          </div>
          <p className="text-white/40 text-xs max-w-2xl mx-auto">
            <strong className="text-white/60">Disclaimer:</strong> GCC Salon Jobs operates as an independent sister company. Caregiver Academia Pokhara accepts no liability for third-party arrangements or outcomes.
          </p>
        </div>
      </section>
    </div>
  )
}
