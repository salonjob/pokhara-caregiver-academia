import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { courses } from '@/data/courses'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl font-extrabold text-white/10 font-heading mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 text-lg mb-8">
          The page you are looking for does not exist. Browse our courses or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-teal text-white font-bold rounded-xl hover:bg-sky-600 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            View All Courses
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-white font-semibold mb-4">Quick Links — Our Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors py-1.5"
              >
                <span className="w-1.5 h-1.5 bg-accent-teal rounded-full flex-shrink-0" />
                {course.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
