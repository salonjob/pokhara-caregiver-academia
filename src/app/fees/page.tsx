import { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Phone, Info, Check } from 'lucide-react'
import { courses } from '@/data/courses'
import { siteConfig } from '@/data/site'
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Course Fees — All 6 Caregiver Programs | Caregiver Academia Pokhara',
  description:
    'Full fee details for all 6 caregiver courses at Caregiver Academia Pokhara. NPR fees, installment options, and what is included. CTEVT + CPD UK + SDC Canada certified programs for Japan, Israel, Australia, Canada, USA & UK.',
  alternates: { canonical: `${siteConfig.url}/fees` },
}

export default function FeesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Course Fees & Payment Plans
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Transparent, all-inclusive fee structures for all 6 internationally certified caregiver programs. Installment options available.
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-sky-50 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="flex items-start gap-2 text-sky-700 text-sm">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Note:</strong> Fees shown are standard ranges and may vary by batch. Contact us for current batch pricing and available discounts.
              Call <a href={`tel:${siteConfig.phone}`} className="font-semibold hover:underline">{siteConfig.phone}</a> or{' '}
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>.
            </span>
          </p>
        </div>
      </div>

      {/* Fee Cards */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h2 className="font-heading font-bold text-lg text-primary leading-snug">{course.title}</h2>
                    {course.badge && (
                      <span className="text-xs bg-accent-gold text-white font-bold px-2 py-1 rounded-full flex-shrink-0">
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-text-muted text-sm">{course.duration} · {course.hours} hours</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Course Fee Range</p>
                    <p className="text-3xl font-extrabold text-primary font-heading">
                      NPR {(course.feeMin / 1000).toFixed(0)}k
                    </p>
                    <p className="text-text-muted text-sm">
                      to NPR {(course.feeMax / 1000).toFixed(0)}k
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      (NPR {course.feeMin.toLocaleString()} – {course.feeMax.toLocaleString()})
                    </p>
                  </div>

                  <div className="space-y-2 mb-5">
                    <p className="text-xs font-semibold text-text-dark uppercase tracking-wide">What&apos;s Included:</p>
                    {[
                      'Course tuition & materials',
                      `${course.certifications.join(' + ')} certification`,
                      'Practical lab training',
                      'Course completion certificate',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check className="w-3.5 h-3.5 text-accent-green mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {course.destinations.map((dest) => (
                      <span key={dest} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-full font-medium">
                        {dest}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={siteConfig.crmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2.5 bg-accent-teal text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-sm"
                    >
                      Enroll Now
                    </a>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="block w-full text-center py-2.5 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
                    >
                      Course Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Full Fee Comparison Table</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Course</th>
                  <th className="px-4 py-3 text-center font-semibold">Duration</th>
                  <th className="px-4 py-3 text-center font-semibold">Min Fee (NPR)</th>
                  <th className="px-4 py-3 text-center font-semibold">Max Fee (NPR)</th>
                  <th className="px-4 py-3 text-left font-semibold">Destinations</th>
                  <th className="px-4 py-3 text-center font-semibold">Installment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {courses
                  .slice()
                  .sort((a, b) => a.feeMin - b.feeMin)
                  .map((course, i) => (
                    <tr key={course.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3">
                        <Link
                          href={`/courses/${course.slug}`}
                          className="font-semibold text-primary hover:text-accent-teal transition-colors"
                        >
                          {course.title}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-center text-text-muted">{course.duration}</td>
                      <td className="px-4 py-3 text-center font-semibold text-accent-green">
                        {course.feeMin.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-primary">
                        {course.feeMax.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-text-muted">{course.destinations.join(', ')}</td>
                      <td className="px-4 py-3 text-center">
                        <Check className="w-4 h-4 text-accent-green mx-auto" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted text-center mt-3">
            * Installment plans available for all courses. Contact for details.
          </p>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12 bg-background-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary font-heading mb-4">Payment Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: 'Full Payment',
                desc: 'Pay the full course fee upfront. Some batches offer a discount for full payment at enrollment.',
                icon: '💳',
              },
              {
                title: 'Installment Plan',
                desc: 'Flexible installment payment plans available for all courses. Ask our team for the current schedule.',
                icon: '📅',
              },
            ].map((opt) => (
              <div key={opt.title} className="bg-white rounded-xl p-5 border border-slate-100 text-left">
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-semibold text-primary mb-2">{opt.title}</h3>
                <p className="text-text-muted text-sm">{opt.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ask About Installments
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
