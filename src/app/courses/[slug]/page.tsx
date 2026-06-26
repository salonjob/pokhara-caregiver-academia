import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock,
  MapPin,
  Award,
  Users,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Check,
  BookOpen,
  Briefcase,
  Star,
} from 'lucide-react'
import { courses, getCourseBySlug } from '@/data/courses'
import { siteConfig } from '@/data/site'
import { generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/data/schema'
import FAQAccordion from '@/components/faq-accordion'
import CTASection from '@/components/cta-section'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}

  return {
    title: course.metaTitle,
    openGraph: {
      title: course.metaTitle,
      images: [{ url: course.heroImage, alt: course.title }],
    },
  }
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  const courseSchema = generateCourseSchema(course)
  const faqSchema = course.faqs ? generateFAQSchema(course.faqs) : null
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: course.title, url: `${siteConfig.url}/courses/${course.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary font-medium truncate">{course.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-gradient-hero py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={course.heroImage} alt={course.title} fill className="object-cover opacity-20" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                {course.badge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-gold text-white text-sm font-bold rounded-full mb-4">
                    <Star className="w-3.5 h-3.5" />
                    {course.badge}
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight mb-4">
                  {course.title}
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.destinations.map((dest) => (
                    <span key={dest} className="px-3 py-1.5 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full">
                      {dest}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.crmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors shadow-lg"
                  >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Free Counselling
                  </a>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h2 className="text-white font-semibold text-lg mb-4">Course Quick Facts</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-white/60 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Duration
                    </span>
                    <span className="text-white font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-white/60 text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4" /> Total Hours
                    </span>
                    <span className="text-white font-semibold">{course.hours} hours</span>
                  </div>
                  <div className="flex items-start justify-between py-2 border-b border-white/10 gap-4">
                    <span className="text-white/60 text-sm flex items-center gap-2 flex-shrink-0">
                      <MapPin className="w-4 h-4" /> Destinations
                    </span>
                    <span className="text-white font-semibold text-right text-sm">{course.destinations.join(', ')}</span>
                  </div>
                  <div className="flex items-start justify-between py-2 border-b border-white/10 gap-4">
                    <span className="text-white/60 text-sm flex items-center gap-2 flex-shrink-0">
                      <Award className="w-4 h-4" /> Certifications
                    </span>
                    <span className="text-white font-semibold text-right text-sm">{course.certifications.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">

              {/* Curriculum */}
              {course.curriculum && (
                <section>
                  <h2 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-accent-teal" />
                    What You&apos;ll Learn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.curriculum.map((module, i) => (
                      <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-accent-teal text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          {module.title}
                        </h3>
                        <ul className="space-y-1.5">
                          {module.topics.map((topic, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                              <Check className="w-3.5 h-3.5 text-accent-green mt-0.5 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Eligibility */}
              {course.eligibility && (
                <section>
                  <h2 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-accent-teal" />
                    Who Is This For
                  </h2>
                  <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                    <ul className="space-y-3">
                      {course.eligibility.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-muted">
                          <Check className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {/* Career Outcomes */}
              {course.careerOutcomes && (
                <section>
                  <h2 className="text-2xl font-bold text-primary font-heading mb-6 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-accent-teal" />
                    Career Outcomes
                  </h2>
                  <div className="space-y-4">
                    {course.careerOutcomes.map((outcome, i) => (
                      <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="font-semibold text-primary text-lg">{outcome.country}</h3>
                          <div className="text-right">
                            <p className="text-xs text-text-muted">Typical Salary</p>
                            <p className="font-bold text-accent-green text-sm">{outcome.salaryRange}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {outcome.roles.map((role, j) => (
                            <span key={j} className="text-xs bg-primary/5 text-primary px-2.5 py-1 rounded-full font-medium">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <section>
                  <FAQAccordion
                    faqs={course.faqs}
                    title={`${course.title} — FAQ`}
                  />
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Enroll CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-heading font-bold text-xl mb-2">Ready to Enroll?</h3>
                  <p className="text-white/70 text-sm mb-5">
                    Seats are limited per batch. Secure your spot today.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={siteConfig.crmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
                    >
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Free Counselling
                    </a>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-gold" />
                    Certifications You&apos;ll Earn
                  </h3>
                  <div className="space-y-2">
                    {course.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                        <span className="text-text-dark font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other courses */}
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <h3 className="font-semibold text-primary mb-3">Other Courses</h3>
                  <div className="space-y-2">
                    {courses
                      .filter((c) => c.id !== course.id)
                      .slice(0, 4)
                      .map((c) => (
                        <Link
                          key={c.id}
                          href={`/courses/${c.slug}`}
                          className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-teal transition-colors py-1"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                          {c.title}
                        </Link>
                      ))}
                  </div>
                  <Link
                    href="/courses"
                    className="block mt-3 text-center text-sm text-accent-teal font-semibold hover:underline"
                  >
                    View All Courses →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTASection
          title={`Start Your ${course.title} Journey`}
          subtitle={`Join our next batch at Caregiver Academia Pokhara. ${course.certifications.join(' + ')} certified. Train for ${course.destinations.join(', ')}.`}
        />
      </div>
    </>
  )
}
