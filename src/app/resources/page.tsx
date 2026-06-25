import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, BookOpen, Globe, FileText, Award, TrendingUp } from 'lucide-react'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Caregiver Resources & Insights — Training Guides, Visa, Career News | Caregiver Academia Pokhara',
  description:
    'Free caregiver training resources for Nepal. Japan SSW visa guides, Israel G2G program, Australia aged care, Canada PSW & CNA guides, CTEVT certification info — all from Caregiver Academia Pokhara.',
  alternates: { canonical: `${siteConfig.url}/resources` },
  openGraph: {
    title: 'Caregiver Resources & Insights — Caregiver Academia Pokhara',
    description: 'Free guides on Japan, Israel, Australia, Canada caregiver careers from Nepal.',
  },
}

const categories = [
  { label: 'All Resources', icon: BookOpen, color: 'bg-primary/10 text-primary' },
  { label: 'Country Guides', icon: Globe, color: 'bg-blue-50 text-blue-700' },
  { label: 'Visa & Immigration', icon: FileText, color: 'bg-purple-50 text-purple-700' },
  { label: 'Certification', icon: Award, color: 'bg-amber-50 text-amber-700' },
  { label: 'Career Insights', icon: TrendingUp, color: 'bg-green-50 text-green-700' },
]

const resources = [
  {
    category: 'Country Guides',
    categoryColor: 'bg-blue-50 text-blue-700',
    title: 'How to Become a Caregiver in Japan from Nepal — SSW Visa & Kaigo Guide 2026',
    excerpt:
      'A complete step-by-step guide for Nepali applicants: Kaigo Fukushishi qualification, SSW (Specified Skilled Worker) visa requirements, JLPT language test, G2G program pathway, and expected salary in Japan.',
    readTime: '8 min read',
    tags: ['Japan', 'SSW Visa', 'Kaigo', 'G2G'],
    featured: true,
  },
  {
    category: 'Country Guides',
    categoryColor: 'bg-blue-50 text-blue-700',
    title: 'Israel Caregiver Program (G2G): Complete Guide for Nepali Applicants 2026',
    excerpt:
      'Everything you need to know about the Nepal-Israel Government-to-Government caregiver program — eligibility, 3-month CTEVT training, Hebrew language basics, contract terms, and salary expectations.',
    readTime: '7 min read',
    tags: ['Israel', 'G2G', 'CTEVT', '3-Month Course'],
    featured: true,
  },
  {
    category: 'Country Guides',
    categoryColor: 'bg-blue-50 text-blue-700',
    title: 'Australia Aged Care Visa for Nepali Caregivers — Diploma & Subclass 485 Pathway',
    excerpt:
      'How Nepali caregivers can qualify for Australian aged care jobs using a Diploma in Aged Care. Covers AHPRA registration, Subclass 485 visa, skills assessment, and average salary in Australia.',
    readTime: '9 min read',
    tags: ['Australia', 'Aged Care', 'Visa 485', 'AHPRA'],
    featured: false,
  },
  {
    category: 'Career Insights',
    categoryColor: 'bg-green-50 text-green-700',
    title: 'Caregiver Salary Comparison 2026: Japan vs Israel vs Australia vs Canada',
    excerpt:
      'Side-by-side comparison of caregiver salaries, working hours, benefits, and cost of living across the 4 top destinations for Nepali caregivers. Which country offers the best net income?',
    readTime: '6 min read',
    tags: ['Salary', 'Japan', 'Israel', 'Australia', 'Canada'],
    featured: true,
  },
  {
    category: 'Visa & Immigration',
    categoryColor: 'bg-purple-50 text-purple-700',
    title: 'Canada PSW (Personal Support Worker) Visa Pathway from Nepal — 2026 Guide',
    excerpt:
      'How to use an SDC Canada-recognized PSW course from Nepal to qualify for Canadian caregiver immigration. Covers LMIA, Express Entry, Home Support Worker stream, and provincial programs.',
    readTime: '10 min read',
    tags: ['Canada', 'PSW', 'SDC Canada', 'Express Entry'],
    featured: false,
  },
  {
    category: 'Certification',
    categoryColor: 'bg-amber-50 text-amber-700',
    title: 'CTEVT Caregiver Certification Explained — Why It Matters for International Jobs',
    excerpt:
      'What is CTEVT, why government affiliation is mandatory for Nepal caregiver training, and how a CTEVT-certified course from Caregiver Academia Pokhara strengthens your visa and job applications abroad.',
    readTime: '5 min read',
    tags: ['CTEVT', 'Certification', 'Nepal Government'],
    featured: false,
  },
  {
    category: 'Certification',
    categoryColor: 'bg-amber-50 text-amber-700',
    title: 'CPD UK vs SDC Canada Certification: What Do Employers Actually Recognize?',
    excerpt:
      'A practical breakdown of CPD UK (No. 20520) and SDC Canada (Code 1226) credentials — what they mean to healthcare employers in Australia, UK, and Canada, and why dual certification gives you an edge.',
    readTime: '5 min read',
    tags: ['CPD UK', 'SDC Canada', 'ISO', 'Accreditation'],
    featured: false,
  },
  {
    category: 'Country Guides',
    categoryColor: 'bg-blue-50 text-blue-700',
    title: 'CNA Course from Nepal: How to Qualify as a Certified Nursing Assistant for USA & Canada',
    excerpt:
      'The CNA (Certified Nursing Assistant) pathway for Nepali caregivers targeting USA or Canada. Covers state-by-state requirements, NCLEX-related prerequisites, and how our CNA course prepares you.',
    readTime: '7 min read',
    tags: ['CNA', 'USA', 'Canada', 'Nursing Assistant'],
    featured: false,
  },
  {
    category: 'Career Insights',
    categoryColor: 'bg-green-50 text-green-700',
    title: 'Gandaki Province Caregiver Training: Why Pokhara Students Have an Advantage',
    excerpt:
      "Why students from Kaski, Syangja, Baglung, Lamjung, Gorkha, and surrounding Gandaki Province districts don't need to relocate to Kathmandu for world-class caregiver training.",
    readTime: '4 min read',
    tags: ['Pokhara', 'Gandaki Province', 'Local Training'],
    featured: false,
  },
]

const featuredResources = resources.filter((r) => r.featured)
const allResources = resources.filter((r) => !r.featured)

export default function ResourcesPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm mb-6">
            <BookOpen className="w-4 h-4 text-accent-green" />
            Free Guides · Career Insights · Visa Information
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Caregiver Resources & Insights
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Expert guides on caregiver careers in Japan, Israel, Australia, Canada, and the UK —
            written for Nepali caregivers by Caregiver Academia Pokhara.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="border-b border-slate-100 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <span
                key={cat.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap cursor-default ${cat.color}`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Featured Resources */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-primary font-heading mb-6">Featured Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                <div className="bg-gradient-hero p-6 flex-shrink-0">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${resource.categoryColor}`}>
                    {resource.category}
                  </span>
                  <h3 className="mt-3 text-white font-bold font-heading leading-snug line-clamp-3">
                    {resource.title}
                  </h3>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3 flex-1">
                    {resource.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-text-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {resource.readTime}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources Grid */}
        <div>
          <h2 className="text-2xl font-bold text-primary font-heading mb-6">All Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allResources.map((resource, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${resource.categoryColor}`}>
                    {resource.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-text-muted whitespace-nowrap">
                    <Clock className="w-3 h-3" />
                    {resource.readTime}
                  </span>
                </div>
                <h3 className="text-primary font-bold font-heading leading-snug mb-3 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-3 flex-1">
                  {resource.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white font-heading mb-3">
            Ready to Start Your Caregiver Career?
          </h2>
          <p className="text-white/75 mb-6 max-w-xl mx-auto">
            Join Caregiver Academia Pokhara — Gandaki Province&apos;s #1 CTEVT-affiliated institute with placements in 6 countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.crmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
