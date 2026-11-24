export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <section className="section-py container-custom">
        <h1 className="text-display-xl heading-display text-balance">
          Golden Dragon
        </h1>
        <p className="mt-6 text-body-lg text-charcoal-light max-w-2xl">
          Authentic Chinese cuisine in a modern setting. Handcrafted flavors,
          time-honored techniques, unforgettable dining.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="btn-primary">Reserve a Table</button>
          <button className="btn-secondary">View Menu</button>
        </div>
      </section>
    </main>
  )
}