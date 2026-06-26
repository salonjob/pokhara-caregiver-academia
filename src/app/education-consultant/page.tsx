import { Metadata } from 'next'
import { GraduationCap, Globe, FileText, Users, Plane, BookOpen, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Education Consultant — Next EduPath | Caregiver Academia Pokhara',

}

const services = [
  {
    icon: BookOpen,
    title: 'Language Preparation',
    desc: 'JLPT (Japanese N5–N3), TOPIK (Korean), IELTS (English), German A2/B1 — structured preparation for the language exam required by your target country.',
  },
  {
    icon: FileText,
    title: 'Visa Documentation',
    desc: 'End-to-end visa application support including document preparation, embassy coordination, and follow-up — so nothing is missed.',
  },
  {
    icon: GraduationCap,
    title: 'University & College Admissions',
    desc: 'Institution selection, SOP writing, and complete application assistance for universities and colleges abroad.',
  },
  {
    icon: Globe,
    title: 'Skilled Migration Pathways',
    desc: 'Expert guidance for skilled worker and caregiver migration routes to Japan, Canada, UK, Korea, Germany, and Australia.',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Orientation',
    desc: 'Country-specific cultural briefings, packing guidance, and practical preparation so you arrive confident and ready.',
  },
  {
    icon: Users,
    title: 'Family Counselling',
    desc: 'Dedicated sessions including parents and household members — because big decisions are made together.',
  },
]

const destinations = [
  { country: 'Japan', flag: '🇯🇵', routes: 'JLPT N4/N3 · Technical Intern · Specified Skilled Worker' },
  { country: 'South Korea', flag: '🇰🇷', routes: 'TOPIK · EPS · Skilled Worker Visa' },
  { country: 'Germany', flag: '🇩🇪', routes: 'A2/B1 Language · Recognition of Foreign Qualifications' },
  { country: 'Canada', flag: '🇨🇦', routes: 'IELTS · Express Entry · Provincial Nominee Program' },
  { country: 'United Kingdom', flag: '🇬🇧', routes: 'IELTS · Skilled Worker Visa · Health & Care Visa' },
  { country: 'Australia', flag: '🇦🇺', routes: 'IELTS · Temporary Skill Shortage · Student Visa' },
]

export default function EducationConsultantPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm mb-6">
            <GraduationCap className="w-4 h-4 text-accent-green" />
            Sister Company — Next EduPath
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Take Your Caregiver Career Further
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Next EduPath is the dedicated educational consultancy in the Caregiver Academia family — helping Pokhara students study, migrate, and work abroad with full end-to-end support.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Talk to a Counsellor
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">What Next EduPath Offers</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Six core services covering every step of your international education or migration journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent-teal" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Destination Countries</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Six international destinations with proven migration and study pathways.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest) => (
              <div key={dest.country} className="card p-5 flex items-start gap-4">
                <span className="text-4xl">{dest.flag}</span>
                <div>
                  <h3 className="font-heading font-bold text-primary mb-1">{dest.country}</h3>
                  <p className="text-text-muted text-sm">{dest.routes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pokhara Student Discount */}
      <section className="py-16 bg-accent-teal/5 border-y border-accent-teal/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-teal/10 border border-accent-teal/30 rounded-full text-accent-teal text-sm font-semibold mb-6">
            🎓 Exclusive Pokhara Student Benefit
          </div>
          <h2 className="text-3xl font-bold text-primary font-heading mb-4">
            Enrolled or Graduated? Get an Exclusive Discount
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Caregiver Academia Pokhara students and graduates receive exclusive discounts on Next EduPath services. Contact the Pokhara branch first to get your referral code and discount percentage, then apply it directly with Next EduPath.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 text-left">
            {[
              { step: '1', title: 'Contact Pokhara Branch', desc: 'Call or WhatsApp our Pokhara office for verification and referral code.' },
              { step: '2', title: 'Receive Referral Code', desc: 'Get your personalised referral code with the applicable discount percentage.' },
              { step: '3', title: 'Apply with Next EduPath', desc: 'Contact Next EduPath with your referral code to unlock the discounted rate.' },
            ].map((item) => (
              <div key={item.step} className="card p-5">
                <div className="w-8 h-8 bg-accent-teal text-white rounded-full flex items-center justify-center font-bold text-sm mb-3">
                  {item.step}
                </div>
                <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Why Next EduPath */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Why Choose Next EduPath</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { title: 'Caregiver Specialisation', desc: 'Built within the Caregiver Academia family — understands your background and career goals.' },
              { title: 'Transparent Fees', desc: 'No hidden charges. Clear pricing with your referral discount applied upfront.' },
              { title: 'Named Counsellors', desc: 'One dedicated counsellor throughout your process — not a different person each call.' },
              { title: 'End-to-End Support', desc: 'From language test prep to visa approval — a single point of contact for everything.' },
            ].map((item) => (
              <div key={item.title} className="bg-background-light rounded-2xl p-5 text-center">
                <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to Plan Your Next Step?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact Caregiver Academia Pokhara to verify your eligibility, get your referral code, and start your Next EduPath consultation today.
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
            <strong className="text-white/60">Disclaimer:</strong> Next EduPath is a separate sister company. Caregiver Academia Pokhara holds no liability for third-party agreements or outcomes.
          </p>
        </div>
      </section>
    </div>
  )
}
