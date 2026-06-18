'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sunita Gurung',
    course: 'Kaigo Japan Course',
    destination: 'Now working in Osaka, Japan',
    text: 'The Kaigo course at Caregiver Academia Pokhara completely transformed my life. The Japanese language training and cultural preparation were excellent. I passed the SSW Visa exam on my first attempt and am now working in a care facility in Osaka. My salary here is more than 10x what I earned in Nepal.',
    rating: 5,
  },
  {
    name: 'Ramesh Thapa',
    course: 'Diploma in Aged Care',
    destination: 'Now working in Melbourne, Australia',
    text: 'I was from Syangja district and heard about Caregiver Academia Pokhara through a friend. The CTEVT + CPD UK + SDC Canada triple certification was exactly what Australian employers wanted. The practical training at their lab was very realistic. Highly recommend for anyone targeting Australia.',
    rating: 5,
  },
  {
    name: 'Parbati Shrestha',
    course: 'Israel Caregiver Course',
    destination: 'Now working in Tel Aviv, Israel',
    text: 'The 3-month G2G Israel course was affordable and the institute helped with all the government paperwork. The Hebrew language classes and cultural orientation prepared me well. The teachers were patient and the environment was professional. My family is very proud.',
    rating: 5,
  },
  {
    name: 'Bikash Adhikari',
    course: 'PSW Course for Canada',
    destination: 'Now working in Ontario, Canada',
    text: 'The PSW course with SDC Canada certification opened doors in Ontario that I could not have imagined before. The Canadian healthcare system knowledge and WHMIS training they provided matched exactly what my employer expected. Caregiver Academia Pokhara is the best decision I made.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-3">
            Our Graduates Are Working Worldwide
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real stories from Nepali caregivers trained at Caregiver Academia Pokhara
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-8 h-8 text-accent-teal flex-shrink-0 mt-1" />
                <p className="text-white/80 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-accent-teal text-sm">{testimonial.course}</p>
                  <p className="text-white/50 text-xs mt-0.5">{testimonial.destination}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
