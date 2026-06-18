import { siteConfig } from './site'
import { Course } from './courses'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.2096,
      longitude: 83.9856,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    sameAs: [siteConfig.facebook, siteConfig.instagram, siteConfig.tiktok],
    hasCredential: siteConfig.accreditations.map((acc) => ({
      '@type': 'EducationalOccupationalCredential',
      name: acc.fullName,
      credentialCategory: acc.tag,
    })),
    areaServed: siteConfig.serviceDistricts.map((district) => ({
      '@type': 'AdministrativeArea',
      name: district,
    })),
  }
}

export function generateCourseSchema(course: Course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/courses/${course.slug}`,
    courseCode: course.id,
    timeRequired: `PT${course.hours}H`,
    educationalCredentialAwarded: course.certifications.join(', '),
    numberOfCredits: course.hours,
    teaches: course.curriculum?.flatMap((m) => m.topics) ?? [],
    offers: {
      '@type': 'Offer',
      price: course.feeMin,
      priceCurrency: 'NPR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
    },
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
