import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin, Award, ArrowRight } from 'lucide-react'
import { Course } from '@/data/courses'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  course: Course
  className?: string
}

export default function CourseCard({ course, className }: CourseCardProps) {
  return (
    <div className={cn('card group hover:shadow-lg transition-shadow duration-300', className)}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.heroImage}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        {course.badge && (
          <div className="absolute top-3 right-3 bg-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full">
            {course.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
          {course.destinations.map((dest) => (
            <span key={dest} className="bg-white/90 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
              {dest}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-primary leading-snug mb-2 group-hover:text-accent-teal transition-colors">
          {course.title}
        </h3>

        <div className="flex flex-wrap gap-3 text-sm text-text-muted mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.hours} hrs · {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {course.destinations.length} {course.destinations.length === 1 ? 'country' : 'countries'}
          </span>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.certifications.map((cert) => (
            <span key={cert} className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
              <Award className="w-3 h-3" />
              {cert}
            </span>
          ))}
        </div>

        {/* Fee */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-text-muted">Course Fee</p>
            <p className="font-bold text-primary">
              NPR {(course.feeMin / 1000).toFixed(0)}k–{(course.feeMax / 1000).toFixed(0)}k
            </p>
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-teal hover:text-sky-700 transition-colors"
          >
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
