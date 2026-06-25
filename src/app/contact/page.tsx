import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Facebook, Instagram } from 'lucide-react'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact Caregiver Academia Pokhara — Phone, WhatsApp, Address',
  description:
    'Contact Caregiver Academia Pokhara. Phone: +977-9851431007 (WhatsApp), Email: pokhara@caregiveracademia.com. Located in Pokhara, Kaski, Gandaki Province. Open Sunday–Friday 07:00–18:00.',
  alternates: { canonical: `${siteConfig.url}/contact` },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-heading mb-4">
            Contact Caregiver Academia Pokhara
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Reach us by phone, WhatsApp, or email. Our counsellors are available Sunday–Friday, 7am–6pm.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-5">
              <h2 className="text-2xl font-bold text-primary font-heading">Get In Touch</h2>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-teal/10 rounded-lg">
                    <Phone className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="block text-accent-teal hover:underline font-medium">
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-text-muted">Business WhatsApp</p>
                    <a href={`tel:${siteConfig.secondaryPhone}`} className="block text-accent-teal hover:underline font-medium mt-1">
                      {siteConfig.secondaryPhone}
                    </a>
                    <p className="text-xs text-text-muted">Secondary</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="p-2 bg-green-100 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-green-800">Chat on WhatsApp</p>
                  <p className="text-green-600 text-sm">+{siteConfig.whatsappNumber}</p>
                  <p className="text-green-500 text-xs">Click to open WhatsApp</p>
                </div>
              </a>

              {/* Email */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-teal/10 rounded-lg">
                    <Mail className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-accent-teal hover:underline font-medium">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-teal/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Address</p>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Pokhara, Kaski District<br />
                      Gandaki Province<br />
                      Nepal
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-teal/10 rounded-lg">
                    <Clock className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Office Hours</p>
                    <p className="text-text-muted text-sm">{siteConfig.businessHours}</p>
                    <p className="text-text-muted text-xs mt-1">Saturday closed · Public holidays closed</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="font-semibold text-primary mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Map + CTA */}
            <div className="lg:col-span-2 space-y-5">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-100 h-72 flex flex-col items-center justify-center gap-4">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-accent-teal mx-auto mb-3" />
                    <h3 className="font-heading font-bold text-xl text-primary mb-2">
                      Caregiver Academia Pokhara
                    </h3>
                    <p className="text-text-muted mb-4">
                      Pokhara, Kaski District, Gandaki Province, Nepal
                    </p>
                    <a
                      href={siteConfig.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-teal text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry CTA */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold font-heading mb-3">Ready to Enroll?</h2>
                <p className="text-white/80 mb-6 max-w-md mx-auto">
                  Submit your inquiry through our online form or call us directly. Our counsellors will guide you to the right course for your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={siteConfig.crmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    Submit Inquiry Form
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-3">
                  Districts We Serve (Gandaki Province)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.serviceDistricts.map((district) => (
                    <span
                      key={district}
                      className="px-3 py-1.5 bg-primary/5 border border-primary/10 text-primary text-sm rounded-lg"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="text-text-muted text-sm mt-3">
                  Students travel from all 10 districts of Gandaki Province to train at our Pokhara institute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
