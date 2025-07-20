import Link from 'next/link'
import {
  Star,
  Heart,
  MessagesSquare,
  Code2
} from 'lucide-react'

export default function Community() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-bare">
        <div className="text-center mb-16">
          <h2 className="text-display text-3xl lg:text-4xl font-bold text-base-content mb-6">
            Join the community
          </h2>
          <p className="text-lg text-bare-600 max-w-2xl mx-auto">
            BareCMS is open source and community-driven. Contribute, get help, or just say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="https://github.com/snowztech/barecms"
            target="_blank"
            className="card-bare p-6 text-center group hover:scale-105 transition-all duration-300"
          >
            <Star className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-base-content mb-2">Star on GitHub</h3>
            <p className="text-bare-600 text-sm">Show your support and stay updated</p>
          </Link>

          <Link
            href="https://github.com/snowztech/barecms/discussions"
            target="_blank"
            className="card-bare p-6 text-center group hover:scale-105 transition-all duration-300"
          >
            <MessagesSquare className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-base-content mb-2">Discussions</h3>
            <p className="text-bare-600 text-sm">Ask questions and share ideas</p>
          </Link>

          <Link
            href="https://github.com/snowztech/barecms/blob/main/docs/CONTRIBUTING.md"
            target="_blank"
            className="card-bare p-6 text-center group hover:scale-105 transition-all duration-300"
          >
            <Code2 className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-base-content mb-2">Contribute</h3>
            <p className="text-bare-600 text-sm">Help improve BareCMS</p>
          </Link>

          <Link
            href="https://github.com/sponsors/lucasnevespereira"
            target="_blank"
            className="card-bare p-6 text-center group hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-base-content mb-2">Sponsor</h3>
            <p className="text-bare-600 text-sm">Support development</p>
          </Link>
        </div>

        <div className="text-center mt-16">
          <Link
            href="https://github.com/snowztech/barecms"
            target="_blank"
            className="btn btn-primary btn-lg"
          >
            Get Started on GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}