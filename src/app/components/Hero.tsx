'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, PlayIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-bare relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Open Source & MIT Licensed
              </div>

              <h1 className="text-display text-4xl lg:text-6xl font-bold text-base-content mb-6 leading-tight">
                Headless CMS with{' '}
                <span className="text-primary">Bare Minimalism</span>
              </h1>

              <p className="text-lg lg:text-xl text-bare-600 mb-8 leading-relaxed">
                A lightweight, open-source content management system designed for developers who value simplicity, performance, and clean APIs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#quickstart"
                className="btn btn-primary btn-lg group"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#api"
                className="btn btn-outline btn-lg group"
              >
                <PlayIcon className="w-5 h-5" />
                View Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-bare-200">
              <div>
                <div className="text-2xl font-bold text-base-content">1.2MB</div>
                <div className="text-sm text-bare-600">Docker Image Size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-base-content">&lt;50ms</div>
                <div className="text-sm text-bare-600">API Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-base-content">MIT</div>
                <div className="text-sm text-bare-600">Open Source License</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="card-bare p-8 bg-base-100 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <Image
                      src="/logo.png"
                      alt="BareCMS"
                      width={24}
                      height={24}
                    />
                    <span className="font-display font-semibold">barecms admin</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-base-200 h-4 rounded w-3/4"></div>
                    <div className="bg-base-200 h-4 rounded w-1/2"></div>
                    <div className="bg-primary/20 h-4 rounded w-2/3"></div>
                  </div>

                  <div className="pt-4 border-t border-bare-200">
                    <div className="bg-success/20 text-success text-xs px-2 py-1 rounded inline-block">
                      API Endpoint Ready
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}