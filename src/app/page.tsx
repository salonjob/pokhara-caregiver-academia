import { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import StatsBar from '@/components/stats-bar'
import TrustBar from '@/components/trust-bar'
import CoursesGrid from '@/components/courses-grid'
import DestinationsSection from '@/components/destinations-section'
import Testimonials from '@/components/testimonials'
import FAQAccordion from '@/components/faq-accordion'
import CTASection from '@/components/cta-section'
import { siteConfig } from '@/data/site'
import { generateOrganizationSchema } from '@/data/schema'

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,

}

const homepageFAQs = [
  {
    question: 'Is Caregiver Academia Pokhara CTEVT affiliated?',
    answer:
      'Yes. Caregiver Academia Pokhara is affiliated with CTEVT (Council for Technical Education and Vocational Training), the Nepal Government body that oversees technical and vocational training. This is a mandatory government affiliation for recognized caregiver training in Nepal.',
  },
  {
    question: 'What is CPD UK Member No. 20520?',
    answer:
      'CPD UK (Continuing Professional Development United Kingdom) is a leading international professional development certifier. Caregiver Academia holds CPD UK Membership No. 20520, which means our courses meet UK professional development standards. This is recognized by employers in Australia, UK, Canada, and other Commonwealth countries.',
  },
  {
    question: 'What is SDC Canada Partner Code 1226?',
    answer:
      'SDC (Skills Development Council) Canada is a Canadian skills certification body. Partner Code 1226 is our recognized partner number, which validates our caregiver training for Canadian healthcare employers. SDC Canada certification strengthens your immigration and employment applications for Canada.',
  },
  {
    question: 'Which courses are available at the Pokhara branch?',
    answer:
      'We offer 6 courses: Diploma in Aged Care (Australia/UK/USA), Diploma in Caregiving Level IV (Australia/UK/Canada), CNA Course (USA/Canada), 3-Month Israel Caregiver Course (G2G), Kaigo Japan Course (SSW Visa), and PSW Course for Canada. Each course targets specific destination countries.',
  },
  {
    question: 'Are installment payment plans available?',
    answer:
      "Yes, installment payment plans are available for all courses. Contact us on WhatsApp (+977-9714528274) or visit our Pokhara office (Sunday–Friday, 7am–6pm) to discuss the payment schedule for your chosen course.",
  },
  {
    question: 'Which districts of Gandaki Province does Caregiver Academia Pokhara serve?',
    answer:
      'We serve students from all 10 districts of Gandaki Province: Kaski, Syangja, Baglung, Parbat, Lamjung, Gorkha, Tanahun, Nawalpur, Manang, and Mustang. Many students travel from neighboring districts to study at our Pokhara institute.',
  },
  {
    question: 'How long does it typically take to work abroad after completing the course?',
    answer:
      'Typical timelines vary by country: Japan (G2G/SSW) 6–12 months, Israel (G2G) 3–9 months, Australia 9–18 months, Canada 9–18 months. These timelines include visa processing and pre-departure preparation. Note that you will need to apply for jobs independently — Caregiver Academia supports your documentation but does not place you directly.',
  },
  {
    question: 'Does Caregiver Academia Pokhara provide job placement assistance?',
    answer:
      'No, Caregiver Academia does not provide any job placement service. We can help and provide support in your documentation process, but for job placement you will need to apply by yourself.',
  },
]

const WhyPokharaSection = () => {
  const reasons = [
    {
      icon: '🏆',
      title: "Gandaki Province's #1 Ranked Institute",
      description:
        'Caregiver Academia Pokhara holds the top ranking in Gandaki Province for internationally certified caregiver training, with graduates placed in 6 countries.',
    },
    {
      icon: '📜',
      title: '5 International Accreditations',
      description:
        'CTEVT government affiliation + CPD UK (No. 20520) + SDC Canada (Code 1226) + ISO 9001:2015 (Cert E95ABA38) + IAF Member — no other institute in Pokhara has all five.',
    },
    {
      icon: '🌏',
      title: 'Specialized Training for Each Country',
      description:
        'Unlike generic caregiver courses, our programs are specifically designed for Japan (Kaigo/SSW), Israel (G2G), Australia, Canada (PSW/CNA), USA, and UK.',
    },
    {
      icon: '🤝',
      title: 'Government G2G Programs',
      description:
        'Official center for Nepal Government G2G programs for Japan and Israel — the safest, most regulated pathway for Nepali caregivers going abroad.',
    },
  ]

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose Caregiver Academia Pokhara?</h2>
          <p className="section-subheading mx-auto">
            Pokhara&apos;s most credentialed caregiver institute — government affiliated and internationally certified.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
              <div className="text-4xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{reason.title}</h3>
                <p className="text-text-muted leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const orgSchema = generateOrganizationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HeroSection />
      <StatsBar />
      <TrustBar />
      <CoursesGrid />
      <WhyPokharaSection />
      <DestinationsSection />
      <Testimonials />
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={homepageFAQs}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about caregiver training at Caregiver Academia Pokhara"
          />
        </div>
      </section>
      <CTASection />
    </>
  )
}
