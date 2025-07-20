import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-base-200 border-t border-bare-200">
      <div className="container-bare py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="BareCMS Logo"
                width={24}
                height={24}
              />
              <span className="logo text-base-content">barecms.</span>
            </div>
            <p className="text-bare-600 mb-4 max-w-md">
              A lightweight, open-source headless CMS designed with bare minimalism in mind.
            </p>
            <div className="flex items-center gap-4 text-sm text-bare-600">
              <span>© 2025 SnowzTech</span>
              <span>•</span>
              <Link href="https://github.com/snowztech/barecms/blob/main/LICENSE" className="hover:text-base-content transition-colors">
                MIT License
              </Link>
            </div>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="font-semibold text-base-content mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://snowztech.github.io/barecms-docs" className="text-bare-600 hover:text-base-content transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="https://github.com/snowztech/barecms/blob/main/docs/API.md" className="text-bare-600 hover:text-base-content transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="https://github.com/snowztech/barecms/blob/main/docs/SELF_HOSTING.md" className="text-bare-600 hover:text-base-content transition-colors">
                  Self Hosting
                </Link>
              </li>
              <li>
                <Link href="https://github.com/snowztech/barecms/blob/main/docs/CONTRIBUTING.md" className="text-bare-600 hover:text-base-content transition-colors">
                  Contributing
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-base-content mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://github.com/snowztech/barecms" className="text-bare-600 hover:text-base-content transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://github.com/snowztech/barecms/discussions" className="text-bare-600 hover:text-base-content transition-colors">
                  Discussions
                </Link>
              </li>
              <li>
                <Link href="https://github.com/snowztech/barecms/issues" className="text-bare-600 hover:text-base-content transition-colors">
                  Issues
                </Link>
              </li>
              <li>
                <Link href="https://github.com/sponsors/lucasnevespereira" className="text-bare-600 hover:text-base-content transition-colors">
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bare-200 pt-8 mt-8 text-center">
          <p className="text-sm text-bare-600">
            Built with care by{' '}
            <Link href="https://github.com/snowztech" className="text-primary hover:text-primary-focus transition-colors">
              SnowzTech
            </Link>
            {' • '}Keep it simple
          </p>
        </div>
      </div>
    </footer>
  )
}