import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, LinkedinIcon as LinkedIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3ef]">
      {/* Header/Navigation */}
      <header className="bg-[#2c2c2c] text-white py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm font-light tracking-widest uppercase">
            <Link href="/" className="text-white">
              <h1 className="text-xl md:text-2xl font-normal tracking-wide font-serif">Arslan Ahmed</h1>
              <p className="text-xs tracking-[0.3em]">TORONTO CONDO SPECIALIST</p>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-wider">
            <Link href="#" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-300">
              About
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Toronto Market
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Buyer's Guide
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Seller's Guide
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-white">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Arslan Ahmed, Toronto Condo Specialist"
            fill
            priority
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-tight">
              YOUR TORONTO
              <br />
              CONDO MARKET
              <br />
              EXPERT
            </h1>
            <p className="mt-6 text-sm md:text-base font-light tracking-wider max-w-md mx-auto">
              10 years of specialized expertise in Toronto's dynamic condo market, helping clients make informed decisions since 2013.
            </p>
            <div className="mt-12 space-y-4">
              <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                Book a Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-xs tracking-widest uppercase"
              >
                Download Toronto Condo Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Bar */}
      <section className="py-6 bg-[#af9f94]/30 border-t border-b border-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <span className="text-center font-light text-sm md:text-base">CONDO MARKET ANALYSIS</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">INVESTMENT PROPERTIES</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">FIRST-TIME BUYERS</span>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <span className="text-center font-light text-sm md:text-base">PRE-CONSTRUCTION EXPERTISE</span>
          </div>
        </div>
      </section>

      {/* About Arslan Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Arslan Ahmed, Toronto Condo Specialist"
                width={600}
                height={800}
                className="w-full h-full object-cover mix-blend-normal"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">MEET ARSLAN AHMED</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Your Toronto Condo Market Expert</h2>
              <p className="text-sm leading-relaxed mb-4">
                With a decade of dedicated experience in Toronto's competitive condo market, I've helped hundreds of clients find their perfect urban home or investment property.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                My approach combines hyperlocal knowledge of Toronto's diverse neighborhoods, data-driven market analysis, and a genuine commitment to understanding each client's unique needs. Whether you're a first-time buyer, an investor, or looking to sell your condo, I bring specialized expertise to every transaction.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                MORE ABOUT ARSLAN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Market Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">TORONTO CONDO MARKET</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Navigating Today's
                <br />
                <span className="italic">Toronto Condo Landscape</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Toronto's condo market continues to evolve, shaped by urban development, interest rates, and changing lifestyle preferences. Stay informed with our quarterly market insights.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                From emerging neighborhoods and pre-construction opportunities to resale value trends, our comprehensive Toronto Condo Report provides the data and analysis you need to make confident decisions in today's dynamic market.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                DOWNLOAD Q2 2023 CONDO REPORT
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Toronto condo market graph"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />