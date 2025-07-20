"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-sm border-b border-bare-200">
      <div className="container-bare">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="BareCMS Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="logo text-base-content">barecms.</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-bare-600 hover:text-base-content transition-colors"
            >
              Features
            </Link>
            <Link
              href="#api"
              className="text-bare-600 hover:text-base-content transition-colors"
            >
              API
            </Link>
            <Link
              href="#quickstart"
              className="text-bare-600 hover:text-base-content transition-colors"
            >
              Quick Start
            </Link>
            <Link
              href="https://docs.barecms.dev"
              target="_blank"
              className="text-bare-600 hover:text-base-content transition-colors"
            >
              Docs
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-sm"
                aria-label="Toggle theme"
              >
                {theme === "barecms-dark" ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            )}
            <Link
              href="https://github.com/snowztech/barecms"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
