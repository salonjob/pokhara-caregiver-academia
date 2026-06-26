import { Metadata } from 'next'
import { Shield, Award, MapPin, Phone, Mail, Clock, Users, Globe, Building } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'About Caregiver Academia Pokhara — Gandaki Province #1 Institute',
  description: "Learn about Caregiver Academia Pokhara — Gandaki Province's most trusted CTEVT-affiliated caregiver training institute. Government affiliated, CPD UK & SDC Canada certified, ISO 9001:2015 quality assured.",

}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm mb-6">
            <Shield className="w-4 h-4 text-accent-green" />
            Gandaki Province&apos;s #1 Caregiver Training Institute
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            About Caregiver Academia Pokhara
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Nepal&apos;s premier caregiver training institute in the heart of Pokhara, serving all 10 districts of Gandaki Province with internationally accredited programs.
          </p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary font-heading mb-4">Our Mission</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Caregiver Academia Pokhara was established to give Gandaki Province&apos;s youth a structured, internationally certified pathway to dignified, well-paid employment as professional caregivers across the world.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                We are the Pokhara branch of Caregiver Academia (caregiveracademia.com), Nepal&apos;s national caregiver training network. With over 1,500 students trained nationally and graduates actively working in Japan, Israel, Australia, Canada, USA, and UK, we carry a proven track record into Gandaki Province.
              </p>
              <p className="text-text-muted leading-relaxed">
                Located in the heart of Pokhara — Kaski District — we are strategically positioned to serve students from all 10 districts of Gandaki Province, including those traveling from Syangja, Baglung, Parbat, Lamjung, Gorkha, Tanahun, Nawalpur, Manang, and Mustang.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: '1,500+', sub: 'Students Trained Nationally' },
                { icon: Globe, label: '6', sub: 'Destination Countries' },
                { icon: Award, label: '5', sub: 'International Accreditations' },
                { icon: Building, label: '10', sub: 'Gandaki Districts Served' },
              ].map((stat, i) => (
                <div key={i} className="bg-background-light rounded-2xl p-5 text-center">
                  <stat.icon className="w-8 h-8 text-accent-teal mx-auto mb-2" />
                  <p className="text-3xl font-extrabold text-primary font-heading">{stat.label}</p>
                  <p className="text-text-muted text-sm">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Our Accreditations</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Five internationally recognized accreditations — the most comprehensive certification package of any caregiver institute in Gandaki Province.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: 'CTEVT',
                fullName: 'Council for Technical Education and Vocational Training',
                tag: 'Government Affiliated',
                detail: 'Nepal Government mandatory affiliation for recognized vocational training. CTEVT certification is required for G2G Israel and Japan programs.',
                color: 'border-red-200 bg-red-50',
              },
              {
                name: 'CPD UK',
                fullName: 'Continuing Professional Development United Kingdom',
                tag: 'Member No. 20520',
                detail: 'UK-based professional development certification recognized across Commonwealth countries. Essential for Australia, UK, and Canada placements.',
                color: 'border-blue-200 bg-blue-50',
              },
              {
                name: 'SDC Canada',
                fullName: 'Skills Development Council Canada',
                tag: 'Partner Code 1226',
                detail: 'Canadian skills certification body. Partner Code 1226 validates our training for Canadian healthcare employers and supports immigration applications.',
                color: 'border-red-200 bg-red-50',
              },
              {
                name: 'ISO 9001:2015',
                fullName: 'International Organization for Standardization',
                tag: 'Cert No. E95ABA38',
                detail: 'ISO 9001:2015 quality management certification guarantees our training processes meet international quality standards consistently.',
                color: 'border-green-200 bg-green-50',
              },
              {
                name: 'IAF',
                fullName: 'International Accreditation Forum',
                tag: 'Member',
                detail: 'IAF membership connects our accreditations to a global network of accreditation bodies, strengthening the international recognition of our certifications.',
                color: 'border-purple-200 bg-purple-50',
              },
            ].map((acc) => (
              <div key={acc.name} className={`border-2 ${acc.color} rounded-2xl p-5`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-primary">{acc.name}</h3>
                  <span className="bg-accent-gold/20 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {acc.tag}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-dark mb-2">{acc.fullName}</p>
                <p className="text-text-muted text-sm leading-relaxed">{acc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Service Area — Gandaki Province</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Serving all 10 districts of Gandaki Province from our Pokhara center.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {siteConfig.serviceDistricts.map((district) => (
              <span
                key={district}
                className="px-4 py-2 bg-primary/5 border border-primary/20 text-primary font-medium rounded-lg text-sm"
              >
                📍 {district}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Companies */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Our Sister Companies</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Part of a growing group of specialized international training institutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                name: 'GCC Salon Jobs',
                url: 'https://gccsalonjobs.com',
                desc: "Nepal's leading platform connecting beauty professionals with premium salon jobs in GCC countries.",
                tag: 'Beauty & Salon',
              },
              {
                name: 'Next EduPath',
                url: 'https://nextedupath.com',
                desc: 'Study abroad consultancy specializing in higher education placements in Australia, Canada, UK, and USA.',
                tag: 'Study Abroad',
              },
              {
                name: 'Nails Academia',
                url: 'https://nailsacademia.com',
                desc: 'Professional nail technology training institute preparing nail technicians for international markets.',
                tag: 'Nail Technology',
              },
            ].map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <span className="badge badge-teal mb-3 inline-block">{company.tag}</span>
                <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent-teal transition-colors">
                  {company.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{company.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading mb-8">Contact Caregiver Academia Pokhara</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: MapPin, label: 'Address', value: 'Pokhara, Kaski, Gandaki Province, Nepal' },
              { icon: Phone, label: 'Phone', value: `${siteConfig.phone}\n${siteConfig.secondaryPhone}` },
              { icon: Mail, label: 'Email', value: siteConfig.email },
              { icon: Clock, label: 'Hours', value: siteConfig.businessHours },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <item.icon className="w-6 h-6 text-accent-teal mx-auto mb-2" />
                <p className="text-white/50 text-xs mb-1">{item.label}</p>
                <p className="text-white text-sm whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={siteConfig.crmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
