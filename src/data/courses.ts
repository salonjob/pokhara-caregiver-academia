export interface Course {
  id: string
  title: string
  slug: string
  hours: number
  duration: string
  feeMin: number
  feeMax: number
  destinations: string[]
  certifications: string[]
  heroImage: string
  description: string
  metaTitle: string
  metaDescription: string
  badge?: string
  curriculum?: CurriculumModule[]
  eligibility?: string[]
  careerOutcomes?: CareerOutcome[]
  faqs?: FAQ[]
}

export interface CurriculumModule {
  title: string
  topics: string[]
}

export interface CareerOutcome {
  country: string
  roles: string[]
  salaryRange: string
}

export interface FAQ {
  question: string
  answer: string
}

export const courses: Course[] = [
  {
    id: 'aged-care',
    title: 'Diploma in Aged Care',
    slug: 'diploma-in-aged-care-pokhara',
    hours: 900,
    duration: '6 months',
    feeMin: 100000,
    feeMax: 140000,
    destinations: ['Australia', 'United Kingdom', 'United States'],
    certifications: ['CTEVT', 'CPD UK', 'SDC Canada', 'ISO 9001:2015'],
    heroImage: '/images/course-aged-care.webp',
    description:
      'Comprehensive aged care training for Australia, UK, and USA. CTEVT-affiliated with CPD UK and SDC Canada dual certification. Cover palliative care, dementia support, mobility assistance, and medication management.',
    metaTitle: 'Diploma in Aged Care Pokhara — CTEVT + CPD UK + SDC Canada | Caregiver Academia',
    metaDescription:
      'Enroll in Diploma in Aged Care at Caregiver Academia Pokhara. 900 hrs, CTEVT + CPD UK No. 20520 + SDC Canada certified. Train for Australia, UK & USA. NPR 1,00,000–1,40,000. Apply now.',
    curriculum: [
      {
        title: 'Foundation of Aged Care',
        topics: [
          'Person-centred care principles',
          'Aged care legislation and standards',
          'Communication with elderly clients',
          'Cultural competence in care',
        ],
      },
      {
        title: 'Clinical Skills',
        topics: [
          'Personal hygiene and grooming assistance',
          'Mobility and transfer techniques',
          'Medication management and administration',
          'Wound care basics',
        ],
      },
      {
        title: 'Specialized Care',
        topics: [
          'Dementia and Alzheimer\'s care',
          'Palliative and end-of-life care',
          'Mental health support for elderly',
          'Nutritional support',
        ],
      },
      {
        title: 'Professional Development',
        topics: [
          'Documentation and record keeping',
          'Infection control procedures',
          'Emergency response and first aid',
          'Team collaboration in healthcare',
        ],
      },
    ],
    eligibility: [
      'Minimum SLC/SEE pass or equivalent',
      'Age 18–45 years',
      'Basic English proficiency',
      'Physically fit and healthy',
      'Genuine interest in caregiving',
    ],
    careerOutcomes: [
      {
        country: 'Australia',
        roles: ['Aged Care Worker', 'Personal Care Assistant', 'Community Care Worker'],
        salaryRange: 'AUD 50,000–65,000/year',
      },
      {
        country: 'United Kingdom',
        roles: ['Care Assistant', 'Support Worker', 'Residential Care Worker'],
        salaryRange: 'GBP 22,000–30,000/year',
      },
      {
        country: 'United States',
        roles: ['Home Health Aide', 'Personal Care Aide', 'Nursing Home Worker'],
        salaryRange: 'USD 28,000–40,000/year',
      },
    ],
    faqs: [
      {
        question: 'What certifications will I receive after completing the Diploma in Aged Care?',
        answer:
          'You will receive CTEVT (government certification), CPD UK Member certification, SDC Canada certification, and ISO 9001:2015 quality certification — four internationally recognized credentials.',
      },
      {
        question: 'Is this course accepted by Australian aged care facilities?',
        answer:
          'Yes. The CTEVT + CPD UK + SDC Canada combination is recognized by many Australian aged care providers. Our graduates have been placed in aged care facilities in Melbourne, Sydney, and Brisbane.',
      },
      {
        question: 'Can I pay the fee in installments?',
        answer:
          'Yes, installment payment plans are available. Contact us on WhatsApp or visit our Pokhara office for details on the payment schedule.',
      },
      {
        question: 'Does Caregiver Academia provide job placement after the course?',
        answer:
          'No, Caregiver Academia does not provide any job placement service. We can support you in your documentation process, but for job placement you will need to apply by yourself.',
      },
      {
        question: 'Do I need prior healthcare experience to enroll?',
        answer:
          'No prior experience is required. The course is designed for beginners. A caring attitude and willingness to learn are the main prerequisites.',
      },
    ],
  },
  {
    id: 'caregiving-level-iv',
    title: 'Diploma in Caregiving Level IV',
    slug: 'diploma-in-caregiving-level-iv-pokhara',
    hours: 774,
    duration: '5 months',
    feeMin: 90000,
    feeMax: 130000,
    destinations: ['Australia', 'United Kingdom', 'Canada'],
    certifications: ['CPD UK', 'SDC Canada'],
    heroImage: '/images/course-caregiving-level.jpg',
    description:
      'Level IV caregiving certification for Australia, UK, and Canada. CPD UK Member No. 20520 and SDC Canada Partner Code 1226 certified. Covers personal care, health monitoring, mobility support, and documentation.',
    metaTitle: 'Diploma in Caregiving Level IV Pokhara — CPD UK + SDC Canada | Caregiver Academia',
    metaDescription:
      'Diploma in Caregiving Level IV at Caregiver Academia Pokhara. 774 hrs, CPD UK + SDC Canada certified. Work in Australia, UK & Canada. NPR 90,000–1,30,000. Enroll today.',
    curriculum: [
      {
        title: 'Personal Care Fundamentals',
        topics: [
          'Activities of daily living (ADL) assistance',
          'Personal hygiene support',
          'Dressing and grooming assistance',
          'Continence care',
        ],
      },
      {
        title: 'Health Monitoring',
        topics: [
          'Vital signs measurement',
          'Pain assessment',
          'Medication reminders',
          'Condition observation and reporting',
        ],
      },
      {
        title: 'Mobility and Safety',
        topics: [
          'Safe manual handling',
          'Transfer and positioning techniques',
          'Fall prevention strategies',
          'Assistive equipment use',
        ],
      },
      {
        title: 'Professional Practice',
        topics: [
          'Care documentation',
          'Communication skills',
          'Team collaboration',
          'Ethical and legal responsibilities',
        ],
      },
    ],
    eligibility: [
      'SLC/SEE pass minimum',
      'Age 18–45 years',
      'Basic English communication skills',
      'Physically fit',
    ],
    careerOutcomes: [
      {
        country: 'Australia',
        roles: ['Caregiver', 'Support Worker', 'Personal Care Worker'],
        salaryRange: 'AUD 45,000–60,000/year',
      },
      {
        country: 'United Kingdom',
        roles: ['Healthcare Assistant', 'Care Worker', 'Home Carer'],
        salaryRange: 'GBP 20,000–28,000/year',
      },
      {
        country: 'Canada',
        roles: ['Personal Support Worker', 'Community Health Worker', 'Home Support Worker'],
        salaryRange: 'CAD 35,000–50,000/year',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between Level IV and the Aged Care Diploma?',
        answer:
          'Level IV covers broader caregiving skills applicable across age groups, while the Aged Care Diploma focuses specifically on elderly clients. Level IV is ideal if you want flexibility to care for different clients.',
      },
      {
        question: 'Are CPD UK and SDC Canada certifications internationally recognized?',
        answer:
          'Yes. CPD UK (Member No. 20520) is recognized across Commonwealth countries. SDC Canada (Partner Code 1226) is valued by Canadian healthcare employers.',
      },
      {
        question: 'Can I apply for a Canadian work permit with this certification?',
        answer:
          'The SDC Canada certification strengthens your application. We can support you with documentation, but you will need to apply for the NOC code process for Canada independently.',
      },
      {
        question: 'How many hours of practical training are included?',
        answer:
          'Out of 774 total hours, approximately 250 hours are hands-on practical training in our simulation lab and partner healthcare facilities.',
      },
      {
        question: 'Is this course available in the evening?',
        answer:
          'Yes, evening batches are available. Contact our Pokhara office to check the current batch schedule.',
      },
    ],
  },
  {
    id: 'cna',
    title: 'Certified Nursing Assistant (CNA)',
    slug: 'cna-course-pokhara',
    hours: 900,
    duration: '6 months',
    feeMin: 140000,
    feeMax: 180000,
    destinations: ['United States', 'Canada'],
    certifications: ['CPD UK'],
    heroImage: '/images/course-cna.webp',
    description:
      'CNA certification for USA and Canada. CPD UK certified. Learn clinical skills, vital signs, wound care, infection control, and patient documentation. Most in-demand credential for North American healthcare.',
    metaTitle: 'CNA Course Pokhara — Certified Nursing Assistant | CPD UK | Caregiver Academia',
    metaDescription:
      'CNA (Certified Nursing Assistant) course in Pokhara. 900 hrs, CPD UK certified. Work in USA & Canada. NPR 1,40,000–1,80,000. Installment payment available. Caregiver Academia Pokhara.',
    curriculum: [
      {
        title: 'Clinical Foundations',
        topics: [
          'Medical terminology',
          'Anatomy and physiology basics',
          'Infection control and standard precautions',
          'Patient safety and fall prevention',
        ],
      },
      {
        title: 'Patient Care Skills',
        topics: [
          'Vital signs (BP, pulse, temperature, respiration)',
          'Personal hygiene and bathing',
          'Feeding assistance',
          'Catheter care',
        ],
      },
      {
        title: 'Advanced Procedures',
        topics: [
          'Wound care and dressing changes',
          'Range of motion exercises',
          'Specimen collection basics',
          'Emergency response protocols',
        ],
      },
      {
        title: 'Professional Practice',
        topics: [
          'Medical documentation (EHR basics)',
          'HIPAA and patient privacy',
          'Communication with nurses and doctors',
          'CNA exam preparation',
        ],
      },
    ],
    eligibility: [
      '+2 or equivalent preferred (SLC/SEE minimum)',
      'Age 18–40 years',
      'Good English proficiency',
      'Physically fit for clinical work',
      'Background check clearance',
    ],
    careerOutcomes: [
      {
        country: 'United States',
        roles: ['Certified Nursing Assistant', 'Home Health Aide', 'Hospital Patient Care Technician'],
        salaryRange: 'USD 32,000–48,000/year',
      },
      {
        country: 'Canada',
        roles: ['Healthcare Aide', 'Continuing Care Assistant', 'Hospital Support Worker'],
        salaryRange: 'CAD 40,000–55,000/year',
      },
    ],
    faqs: [
      {
        question: 'What US states accept this CNA training?',
        answer:
          'Our CPD UK certified CNA course prepares you for state-level CNA exams in most US states. You may need to complete a state competency exam after arrival, which our program prepares you for.',
      },
      {
        question: 'Is the CNA course the most expensive? Why?',
        answer:
          'Yes, at NPR 1,40,000–1,80,000, the CNA course is priced higher because it includes more clinical hours, simulation lab equipment use, and CPD UK certification for the most demanding North American healthcare market.',
      },
      {
        question: 'What English level is required for US/Canada placements?',
        answer:
          'IELTS 5.5 or equivalent is typically required. We offer English language support as part of the course preparation.',
      },
      {
        question: 'Are installment payments available for the CNA course?',
        answer:
          'Yes, we offer flexible installment plans. Contact our office for current batch-specific payment schedules.',
      },
      {
        question: 'How soon after completion can I get a job in USA or Canada?',
        answer:
          'Typical timelines are 6–18 months after course completion, depending on visa processing and employer demand. Caregiver Academia does not place you directly — you will need to apply independently, and we can support your documentation process.',
      },
    ],
  },
  {
    id: 'israel',
    title: '3-Month Caregiver Course for Israel',
    slug: 'israel-caregiver-course-pokhara',
    hours: 390,
    duration: '3 months',
    feeMin: 35000,
    feeMax: 55000,
    destinations: ['Israel'],
    certifications: ['CTEVT'],
    heroImage: '/images/course-israel.webp',
    description:
      "Nepal Government-approved 3-month caregiver training for Israel under the G2G (Government-to-Government) framework. CTEVT certified. 390 hours covering elderly care, Hebrew basics, and cultural orientation for Israel.",
    metaTitle: "Israel Caregiver Course Pokhara — 3-Month CTEVT G2G Program | Caregiver Academia",
    metaDescription:
      "3-Month CTEVT caregiver course for Israel in Pokhara. Government-approved G2G program. 390 hrs, NPR 35,000–55,000. Caregiver Academia Pokhara — Gandaki Province's #1 institute.",
    curriculum: [
      {
        title: 'Elderly Care for Israel',
        topics: [
          'Elder care principles and practices',
          'Israeli elderly care culture',
          'Physical assistance and mobility',
          'Nutrition and meal preparation',
        ],
      },
      {
        title: 'Hebrew Language Basics',
        topics: [
          'Basic Hebrew greetings and phrases',
          'Medical and care vocabulary in Hebrew',
          'Daily communication practice',
          'Understanding Israeli healthcare instructions',
        ],
      },
      {
        title: 'Cultural Orientation',
        topics: [
          'Israeli culture, customs, and holidays',
          'Sabbath and Jewish religious observance',
          'Workplace norms in Israel',
          'Living and safety in Israel',
        ],
      },
      {
        title: 'G2G Program Requirements',
        topics: [
          'Nepal Government G2G procedures',
          'CTEVT certification requirements',
          'Medical and document preparation',
          'Rights and duties of Nepali caregivers in Israel',
        ],
      },
    ],
    eligibility: [
      'SLC/SEE pass minimum',
      'Age 21–40 years (G2G requirement)',
      'Nepali citizenship (G2G requirement)',
      'Medical fitness certification',
      'Clean criminal record',
    ],
    careerOutcomes: [
      {
        country: 'Israel',
        roles: ['Home Caregiver', 'Elderly Care Assistant', 'Live-in Carer'],
        salaryRange: 'USD 1,500–2,200/month',
      },
    ],
    faqs: [
      {
        question: 'What is the G2G program for Israel?',
        answer:
          'G2G (Government-to-Government) is a direct Nepal–Israel agreement managed by the Nepal Foreign Employment Department. It ensures legal, safe, and fair-wage employment for Nepali caregivers in Israel without recruitment agency fees.',
      },
      {
        question: 'Why is the Israel course cheaper than other courses?',
        answer:
          'The 3-month Israel G2G course is shorter (390 hours) and specifically designed for the G2G program requirements. The fee range is NPR 35,000–55,000, making it the most accessible option.',
      },
      {
        question: 'Do I need to know Hebrew before starting the course?',
        answer:
          'No prior Hebrew knowledge is needed. We teach essential Hebrew for caregiving as part of the course curriculum.',
      },
      {
        question: 'Is CTEVT certification mandatory for the Israel G2G program?',
        answer:
          'Yes, CTEVT certification is a Nepal Government requirement for all G2G Israel caregiver applicants.',
      },
      {
        question: 'What documents are needed for the Israel G2G application?',
        answer:
          'Nepali citizenship, passport, SLC/SEE certificate, CTEVT certificate, medical fitness report, and police clearance. Our team helps you prepare all documents.',
      },
    ],
  },
  {
    id: 'kaigo-japan',
    title: 'Kaigo — Japan Caregiver Course',
    slug: 'kaigo-japan-caregiver-course-pokhara',
    hours: 540,
    duration: '4 months',
    feeMin: 85000,
    feeMax: 120000,
    destinations: ['Japan'],
    certifications: ['CTEVT', 'CPD UK'],
    heroImage: '/images/course-japan.webp',
    badge: 'Most Popular',
    description:
      'Japan Specified Skilled Worker (SSW) Kaigo caregiver training. CTEVT + CPD UK certified. Covers Japanese language (JLPT N4/N5), Kaigo (介護) eldercare skills, Japanese culture, and SSW Visa application support.',
    metaTitle: 'Kaigo Japan Caregiver Course Pokhara — SSW Visa + JLPT | Caregiver Academia',
    metaDescription:
      'Kaigo Japan caregiver course in Pokhara. CTEVT + CPD UK certified, SSW Visa pathway, JLPT N4/N5. 540 hrs, NPR 85,000–1,20,000. Caregiver Academia Pokhara — enroll now.',
    curriculum: [
      {
        title: 'Japanese Language (JLPT N5/N4)',
        topics: [
          'Hiragana, Katakana, and basic Kanji',
          'Medical and care vocabulary in Japanese',
          'Daily conversation practice',
          'JLPT N5 and N4 exam preparation',
        ],
      },
      {
        title: 'Kaigo (介護) Skills',
        topics: [
          'Japanese eldercare philosophy',
          'Physical care and assistance (ADL)',
          'Japanese dementia care (認知症)',
          'End-of-life care in Japanese culture',
        ],
      },
      {
        title: 'Japanese Culture & Workplace',
        topics: [
          'Japanese social customs and etiquette',
          'Healthcare workplace culture in Japan',
          'Communication with Japanese seniors and families',
          'Living in Japan as a foreign worker',
        ],
      },
      {
        title: 'SSW Visa Preparation',
        topics: [
          'Specified Skilled Worker (SSW) Visa requirements',
          'Kaigo Skills Evaluation Test preparation',
          'Document preparation for Japan',
          'Rights of foreign care workers in Japan',
        ],
      },
    ],
    eligibility: [
      'SLC/SEE pass minimum',
      'Age 18–39 years (SSW requirement)',
      'Commitment to learn Japanese language',
      'Good physical health',
      'No criminal record',
    ],
    careerOutcomes: [
      {
        country: 'Japan',
        roles: ['Kaigo (介護) Worker', 'Care Facility Staff', 'Home Visit Care Worker'],
        salaryRange: 'JPY 1,800,000–2,800,000/year (approx. NPR 16–25 lakhs)',
      },
    ],
    faqs: [
      {
        question: 'Why is the Kaigo Japan course the most popular?',
        answer:
          'Japan has a massive shortage of caregivers due to its aging population. The SSW Visa provides a clear, legal pathway to work in Japan with good salaries and long-term residency prospects.',
      },
      {
        question: 'Do I need to pass the JLPT exam to go to Japan?',
        answer:
          'For the SSW Visa (Kaigo), you need to pass either JLPT N4 or the Kaigo Skills Evaluation Test in Japanese. Our course specifically prepares you for both.',
      },
      {
        question: 'How long can I stay in Japan on the SSW Visa?',
        answer:
          'The SSW-1 (Specified Skilled Worker 1) visa is valid for up to 5 years. High-performing workers can apply for SSW-2 which allows longer stays and can lead to permanent residency.',
      },
      {
        question: 'What is the monthly salary for a Kaigo worker in Japan?',
        answer:
          'Typically JPY 150,000–230,000/month (approximately NPR 1.4–2.1 lakhs), plus housing support from the employer in many cases.',
      },
      {
        question: 'Is this course CTEVT affiliated?',
        answer:
          'Yes, the Kaigo Japan course carries CTEVT affiliation plus CPD UK certification, making it doubly credentialed for both government and international recognition.',
      },
    ],
  },
  {
    id: 'psw-canada',
    title: 'PSW Course for Canada',
    slug: 'psw-course-canada-pokhara',
    hours: 660,
    duration: '4.5 months',
    feeMin: 110000,
    feeMax: 150000,
    destinations: ['Canada'],
    certifications: ['SDC Canada'],
    heroImage: '/images/course-psw-canada.jpg',
    description:
      'Personal Support Worker (PSW) certification for Canada. SDC Canada Partner Code 1226 certified. Learn home support, dementia care, palliative care, and medication assistance for the Canadian healthcare system.',
    metaTitle: 'PSW Course Canada Pokhara — Personal Support Worker | SDC Canada | Caregiver Academia',
    metaDescription:
      'PSW (Personal Support Worker) course for Canada in Pokhara. SDC Canada certified, 660 hrs, NPR 1,10,000–1,50,000. Installment available. Caregiver Academia Pokhara.',
    curriculum: [
      {
        title: 'PSW Fundamentals',
        topics: [
          'Role and scope of a Personal Support Worker',
          'Canadian healthcare system overview',
          'Professional boundaries and ethics',
          'Documentation and reporting',
        ],
      },
      {
        title: 'Home and Community Care',
        topics: [
          'Home support and household management',
          'Meal preparation and nutrition',
          'Medication assistance',
          'Client independence promotion',
        ],
      },
      {
        title: 'Specialized Care',
        topics: [
          'Dementia and cognitive impairment care',
          'Palliative and hospice care',
          'Mental health support basics',
          'Pediatric and maternal support',
        ],
      },
      {
        title: 'Canadian Workplace Skills',
        topics: [
          'Occupational health and safety (Ontario standards)',
          'WHMIS (Workplace Hazardous Materials)',
          'First aid and CPR',
          'Intercultural communication in Canada',
        ],
      },
    ],
    eligibility: [
      'SLC/SEE pass minimum',
      'Age 18–45 years',
      'Good English communication',
      'Physically capable of caregiving work',
      'Genuine interest in healthcare',
    ],
    careerOutcomes: [
      {
        country: 'Canada',
        roles: ['Personal Support Worker', 'Home Support Worker', 'Long-Term Care Worker'],
        salaryRange: 'CAD 40,000–55,000/year',
      },
    ],
    faqs: [
      {
        question: 'What is a PSW and why is it in demand in Canada?',
        answer:
          'A Personal Support Worker provides essential personal and home support to elderly, disabled, and recovering individuals. Canada faces a major PSW shortage, creating strong demand and immigration pathways for qualified PSWs.',
      },
      {
        question: 'What SDC Canada certification will I receive?',
        answer:
          'You will receive SDC Canada Partner Code 1226 certification, which is recognized by Canadian healthcare employers and supports your immigration application under relevant NOC codes.',
      },
      {
        question: 'Which Canadian provinces are best for PSW employment?',
        answer:
          'Ontario, Alberta, and British Columbia have the highest PSW demand. Ontario\'s PSW sector particularly values SDC Canada certified workers.',
      },
      {
        question: 'What immigration pathway is available for Canadian PSWs?',
        answer:
          'PSWs can apply through the Atlantic Immigration Program, Rural and Northern Immigration Pilot, or various Provincial Nominee Programs (PNPs). Our career team provides immigration guidance.',
      },
      {
        question: 'Are installment payments available?',
        answer:
          'Yes, flexible installment payment plans are available. Contact our Pokhara office for the current batch payment schedule.',
      },
    ],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}
