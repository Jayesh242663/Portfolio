import './BioSection.css'

function BioSection() {
  const cards = [
    {
      num: '01',
      title: 'FULL-STACK BUILDER',
      body: 'I take ideas from schema to shipped product — React front-ends, Node/Express or Flask back-ends, PostgreSQL databases, and Docker deployments, all built and owned by me.',
    },
    {
      num: '02',
      title: 'SECURITY-MINDED',
      body: 'RBAC, audit logging, breach monitoring, and transaction-level integrity checks are habits, not afterthoughts — security is something I bake into every project I build.',
    },
    {
      num: '03',
      title: 'ALWAYS LEARNING',
      body: 'Currently exploring cybersecurity and AI/ML, alongside hands-on freelance work and personal projects, to keep expanding what I can build and defend.',
    },
  ]

  return (
    <section
      id="bio"
      className="section-wrap border-b border-outline-variant bg-surface"
    >
      <div
        className="flex items-center justify-between"
        style={{
          marginBottom: '8px',
          flexShrink: 0,
        }}
      >
        <h2
          className="font-headline-md text-primary-container"
          style={{
            fontSize: '28px',
            fontWeight: 700,
          }}
        >
          / BIO
        </h2>

        <span className="text-label-sm text-on-surface-variant opacity-50 font-code-snippet uppercase">
          [ SECTION_02 ]
        </span>
      </div>

      <div className="bio-section-inner">
        <div className="bio-cards-grid">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bio-card"
            >
              <div className="card-num">
                {card.num}
              </div>

              <h3 className="card-title">
                {card.title}
              </h3>

              <p className="card-body">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="bio-desc dither">
          <p className="font-body-lg w-full">
            Based in{' '}
            <span className="text-primary-container">Dombivli, Mumbai</span>
            {' '}— I'm a final-year B.E. Information Technology student at Mumbai University
            (graduating 2026) and a practicing freelance full-stack developer. I enjoy taking
            software from idea to production: designing the database schema, building the
            backend, shaping the UI, and shipping it — and I care just as much about getting the
            security and architecture right as I do about the interface. Outside of client work,
            I'm constantly building side projects to sharpen my skills and explore new tech
            stacks. Lately, I've been deepening my interest in{' '}
            <span className="text-primary-container">cybersecurity</span> and{' '}
            <span className="text-primary-container">AI/ML</span>, and looking for ways to weave
            both into the systems I build.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BioSection 