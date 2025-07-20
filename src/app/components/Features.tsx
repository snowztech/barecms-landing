import {
  FastForward,
  Code2,
  Cloud,
  ShieldCheck,
  CuboidIcon,
  Rocket
} from 'lucide-react'

const features = [
  {
    icon: FastForward,
    title: 'Lightning Fast',
    description: 'Built with Go for maximum performance. API responses in under 50ms with minimal resource usage.'
  },
  {
    icon: Code2,
    title: 'Developer First',
    description: 'Clean REST APIs, comprehensive documentation, and intuitive data structures that just work.'
  },
  {
    icon: Cloud,
    title: 'Docker Ready',
    description: 'Deploy anywhere with Docker. One-command setup with Docker Compose for instant productivity.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description: 'JWT authentication, input validation, and security best practices built into the core.'
  },
  {
    icon: CuboidIcon,
    title: 'Headless Architecture',
    description: 'Use any frontend framework. React, Vue, Next.js, Nuxt, or static site generators.'
  },
  {
    icon: Rocket,
    title: 'Production Ready',
    description: 'Battle-tested in production with PostgreSQL, health checks, and monitoring support.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-base-200/50">
      <div className="container-bare">
        <div className="text-center mb-16">
          <h2 className="text-display text-3xl lg:text-4xl font-bold text-base-content mb-6">
            ${`Everything you need, nothing you don't`}
          </h2>
          <p className="text-lg text-bare-600 max-w-2xl mx-auto">
            BareCMS focuses on the essentials: fast content management, clean APIs, and simple deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-bare p-6 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-display text-xl font-semibold text-base-content mb-3">
                {feature.title}
              </h3>
              <p className="text-bare-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}