import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Golden Dragon. Reserve a table, inquire about catering, or share your feedback. We\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <section className="section-py container-custom">
        <h1 className="text-display-xl heading-display text-balance">
          Contact Us
        </h1>
        <p className="mt-4 text-body-lg text-charcoal-light max-w-2xl">
          Have a question or want to make a reservation? We\'re here to help.
        </p>
      </section>
    </main>
  )
}