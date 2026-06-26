import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Award, Check, ArrowRight } from 'lucide-react'
import { courses } from '@/data/courses'
import { siteConfig } from '@/data/site'
import CTASection from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'All Courses — 6 Internationally Certified Caregiver Programs | Caregiver Academia Pokhara',
  description: 'Browse 6 internationally certified caregiver programs at Caregiver Academia Pokhara. Japan Kaigo, Aged Care Australia, CNA, Palliative Care, PSW Canada, and Israel-track courses. CTEVT & CPD UK certified.',

}

export default function CoursesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            All Courses — 6 Internationally Certified Programs
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Each course is specifically designed for a destination country, with the exact certifications employers and visa authorities require.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative md:w-72 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={course.heroImage}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    {course.badge && (
                      <div className="absolute top-3 left-3 bg-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                        {course.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h2 className="font-heading font-bold text-2xl text-primary">{course.title}</h2>
                    </div>

                    <p className="text-text-muted leading-relaxed mb-4">{course.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-accent-teal" />
                        <span className="text-text-muted">{course.hours} hours · {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-accent-teal" />
                        <span className="text-text-muted">{course.destinations.join(', ')}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Award className="w-4 h-4 text-accent-teal mt-0.5" />
                        <span className="text-text-muted">{course.certifications.join(' · ')}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-1 px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-sm"
                      >
                        Course Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={siteConfig.crmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-5 py-2 bg-accent-teal text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-sm"
                      >
                        Enroll Now
                      </a>
                    </div>
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
            <h2 className="text-3xl font-bold text-primary font-heading mb-3">Course Comparison</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Compare all 6 courses by certifications, destinations, and hours.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Course</th>
                  <th className="px-4 py-3 text-center font-semibold">Hours</th>
                  <th className="px-4 py-3 text-left font-semibold">Certifications</th>
                  <th className="px-4 py-3 text-left font-semibold">Destinations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {courses.map((course, i) => (
                  <tr key={course.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="font-semibold text-primary hover:text-accent-teal transition-colors"
                      >
                        {course.title}
                        {course.badge && (
                          <span className="ml-2 text-xs bg-accent-gold/20 text-amber-700 px-2 py-0.5 rounded-full">
                            {course.badge}
                          </span>
                        )}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-center text-text-muted">{course.hours}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {course.certifications.map((cert) => (
                          <span key={cert} className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-text-muted">{course.destinations.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
