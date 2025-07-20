import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import APIShowcase from "@/app/components/APIShowcase";
import QuickStart from "@/app/components/QuickStart";
import Community from "@/app/components/Community";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />
      <main>
        <Hero />
        <Features />
        <APIShowcase />
        <QuickStart />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
