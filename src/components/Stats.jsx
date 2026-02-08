import './Stats.css'

function Stats() {
  const stats = [
    { number: '500,000+', label: 'Leads Discovered' },
    { number: '4,100+', label: 'Happy Users' },
    { number: '35%', label: 'Avg. Reply Rate' }
  ]

  return (
    <section id="testimonials" className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
