export function StatsSection() {
  const stats = [
    { label: "Lives Saved", value: "15,000+" },
    { label: "Blood Units Donated", value: "5,000+" },
    { label: "Active Donors", value: "2,500+" },
    { label: "Community Events", value: "150+" },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
