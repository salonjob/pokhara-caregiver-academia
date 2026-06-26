import { Metadata } from 'next'
import { Briefcase, Shield, Clock, Star, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'GCC Salon Jobs — Nail Technician, Beautician & Caregiver Placement Dubai | Caregiver Academia Pokhara',
  description: 'GCC Salon Jobs connects professional nail technicians, beauticians, and caregivers with employers in the Gulf and abroad. Caregiver Academia Pokhara provides documentation support.',
}

const placements = [
  {
    rank: '01',
    title: 'Professional Nail Technician',
    badge: 'Highest Demand',
    badgeColor: 'bg-accent-teal/10 text-accent-teal border border-accent-teal/30',
    desc: 'Gel, acrylic, nail art, and spa nail services for premium salons across Dubai and the UAE. Strong demand year-round with competitive salary packages.',
    details: [
      'Gel & acrylic extensions',
      'Nail art & 3D design',
      'Manicure & pedicure (spa grade)',
      'UV/LED gel polish specialist',
    ],
  },
  {
    rank: '02',
    title: 'All-Rounder Beautician',
    badge: 'Top Placement',
    badgeColor: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    desc: 'Full-service beauty professionals covering hair, skin, makeup, waxing, and threading for ladies salons across Dubai and UAE.',
    details: [
      'Hair cutting, colouring & styling',
      'Facial & skin care treatments',
      'Bridal & event makeup',
      'Waxing, threading & eyebrow shaping',
    ],
  },
  {
    rank: '03',
    title: 'Professional Caregiver',
    badge: 'Dubai & UAE Only',
    badgeColor: 'bg-blue-50 text-blue-700 border border-blue-200',
    desc: 'Elderly, special-needs, and pediatric caregiving roles exclusively in Dubai and the UAE. Priority given to Caregiver Academia Pokhara graduates with valid CTEVT certification.',
    details: [
      'Elderly live-in & live-out care',
      'Special-needs support',
      'Pediatric care',
      'CTEVT certificate required',
    ],
  },
]

const steps = [
  { step: '01', title: 'Contact Pokhara Branch', desc: 'Call or WhatsApp to register your interest and get priority access as a Caregiver Academia student or graduate.' },
  { step: '02', title: 'Profile & Skills Assessment', desc: 'Your skills are assessed and your profile is matched to open roles at GCC Salon Jobs partner salons and employers.' },
  { step: '03', title: 'Documentation Support', desc: 'We support you with your documentation process. Note: visa and employment decisions are made by employers and UAE authorities.' },
  { step: '04', title: 'Deployment', desc: 'Average deployment timeline is 2–4 weeks from completed documentation. Pre-departure orientation is included.' },
  { step: '05', title: '30/60/90-Day Aftercare', desc: 'Post-arrival support calls at 30, 60, and 90 days to ensure your transition is smooth.' },
]

const advantages = [
  'On-ground Dubai office — direct relationships with UAE salon and care employers.',
  'No upfront fees charged to workers.',
  'MOHRE-compliant UAE work permits handled in-house.',
  '90-day replacement guarantee for all placed candidates.',
  'Pre-departure orientation included for every placement.',
  'Priority access for Caregiver Academia Pokhara students and graduates.',
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
            Nail Technician, Beautician &amp; Caregiver Placement in Dubai
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            GCC Salon Jobs is a Dubai-based recruitment specialist placing professional nail technicians, all-rounder beauticians, and certified caregivers with top employers across Dubai and the UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { value: '500+', label: 'Workers Placed' },
              { value: '4.9 ★', label: 'Verified Rating' },
              { value: '2–4 wk', label: 'Avg. Deployment' },
              { value: '90-day', label: 'Replacement Guarantee' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-white font-heading">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Register Your Interest
            </a>
            <a
              href="https://gccsalonjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Visit gccsalonjobs.com
            </a>
          </div>
        </div>
      </section>

      {/* Priority Banner */}
      <section className="py-10 bg-accent-teal/5 border-b border-accent-teal/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 border border-accent-teal/30 rounded-full text-accent-teal text-sm font-semibold mb-3">
            🎓 Caregiver Academia Pokhara Benefit
          </div>
          <p className="text-text-dark font-medium">
            Enrolled or graduated students receive <strong>priority placement access</strong> ahead of general applicants. Contact the Pokhara branch first to register your priority status.
          </p>
        </div>
      </section>

      {/* Placement Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">What We Place</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Three core placement categories — ranked by demand. All placements are in Dubai and the UAE only.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placements.map((p) => (
              <div key={p.rank} className="card p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <p className="text-5xl font-extrabold text-accent-teal/15 font-heading leading-none">{p.rank}</p>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-text-dark">
                      <CheckCircle className="w-4 h-4 text-accent-teal flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nails Academia — Victoria Vynn Course */}
      <section className="py-20 bg-gradient-to-br from-[#0a1e38] to-[#0f2d52] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold mb-6">
              🌸 Partner Training Programme
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-3 leading-tight">
              International Nail Technician Course in Nepal
            </h2>
            <p className="text-accent-teal font-semibold text-base mb-5">
              By Victoria Vynn · In Association with Nails Academia
            </p>
            <p className="text-white/65 max-w-2xl mx-auto leading-relaxed text-sm">
              Nails Academia is the <span className="text-white font-semibold">only Victoria Vynn certified academy in South Asia</span> — training professional nail technicians to European championship standards. Graduates carry the exact skills demanded by premium Dubai and UAE salons.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '4 Months', label: 'Course Duration' },
              { value: '#1 in South Asia', label: 'Only VV Certified Academy' },
              { value: 'AED 3k–5k', label: 'Avg. Dubai Salary / Month' },
              { value: '500+', label: 'Graduates in GCC Salons' },
            ].map((s) => (
              <div key={s.label} className="bg-white/8 border border-white/12 rounded-2xl p-5 text-center">
                <p className="text-xl font-extrabold text-white font-heading mb-1">{s.value}</p>
                <p className="text-white/50 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Course highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {[
              'Russian manicure & e-file techniques',
              'Gel extensions, sculpting & 3D nail art',
              'Victoria Vynn product mastery',
              'Championship competition preparation',
              'Victoria Vynn International Certification',
              'Direct pathway to GCC Salon Jobs placement',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-3">
                <CheckCircle className="w-4 h-4 text-accent-teal flex-shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.nailsacademia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors shadow-lg text-base"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Nails Academia
            </a>
          </div>

        </div>
      </section>

      {/* Destination */}
      <section className="py-14 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary font-heading mb-3">Destination — Dubai &amp; UAE Only</h2>
          <p className="text-text-muted mb-8 max-w-2xl mx-auto">
            GCC Salon Jobs places candidates exclusively across the UAE through its on-ground Dubai office in Business Bay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['🇦🇪 Dubai', '🇦🇪 Abu Dhabi', '🇦🇪 Sharjah', '🇦🇪 Ajman', '🇦🇪 Al Ain'].map((city) => (
              <span key={city} className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-primary font-medium shadow-sm">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">The Placement Process</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Clear steps from registration to deployment — no hidden fees, no surprises.
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

      {/* Why GCC Salon Jobs */}
      <section className="py-16 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-2">Why GCC Salon Jobs</h2>
            <p className="text-text-muted">Established 2014 · Dubai Business Bay · 500+ placements · 4.9★</p>
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

      {/* Visit GCC Salon Jobs */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-text-muted text-sm mb-4">Want to browse open roles or learn more about GCC Salon Jobs?</p>
          <a
            href="https://www.gccsalonjobs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-md"
          >
            <ExternalLink className="w-5 h-5" />
            Visit gccsalonjobs.com
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to Work in Dubai?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact Caregiver Academia Pokhara to register your interest. Pokhara students and graduates get priority access to GCC Salon Jobs placements.
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
            <strong className="text-white/60">Disclaimer:</strong> GCC Salon Jobs operates as an independent sister company. Caregiver Academia Pokhara provides documentation support only and does not guarantee employment. Visa and employment decisions are made by employers and UAE government authorities.
          </p>
        </div>
      </section>

    </div>
  )
}
