import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
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
              <h1 className="text-xl md:text-2xl font-normal tracking-wide font-serif">Morgan Kendall</h1>
              <p className="text-xs tracking-[0.3em]">MARKETING CONSULTANT</p>
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
              Services
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Blog
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
            alt="Woman in elegant white blouse"
            fill
            priority
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-tight">
              LET&apos;S CREATE MAGIC
              <br />& GROW YOUR
              <br />
              BUSINESS
            </h1>
            <p className="mt-6 text-sm md:text-base font-light tracking-wider max-w-md mx-auto">
              Strategic marketing solutions to help you connect with your audience and grow your brand authentically.
            </p>
            <div className="mt-12 space-y-4">
              <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                Discover Services
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6 text-xs tracking-widest uppercase"
              >
                Get a Free Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-6 bg-[#af9f94]/30 border-t border-b border-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <Link href="#" className="text-center font-light text-sm md:text-base">
              SOCIAL MEDIA
            </Link>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <Link href="#" className="text-center font-light text-sm md:text-base">
              COPYWRITING
            </Link>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <Link href="#" className="text-center font-light text-sm md:text-base">
              STRATEGY
            </Link>
            <div className="hidden md:block h-6 w-px bg-black/70"></div>
            <Link href="#" className="text-center font-light text-sm md:text-base">
              MARKETING
            </Link>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-black">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Marketing consultant portrait"
                width={600}
                height={800}
                className="w-full h-full object-cover mix-blend-normal"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">THIS IS MY STORY</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">How I Started My Marketing Journey</h2>
              <p className="text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore duis 17% magna.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                Et tortor consequat id porta nibh. Et tortor at risus viverra adipiscing at in tellus integer. Ornare
                suspendisse sed nisi lacus sed viverra tellus in. Etiam dignissim diam quis enim lobortis fermentum dui
                faucibus. Adipiscing elit duis sollicitudin nibh sit. Hendrerit gravida rutrum.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                ABOUT MEGAN
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="uppercase tracking-widest text-sm mb-4">HERE&apos;S THE SECRET:</p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                If you&apos;re struggling with marketing...
                <br />
                You probably need a better <span className="italic">story.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. In tellus integer scelerisque varius.
              </p>
              <p className="text-sm leading-relaxed mb-8">
                Congue eu consequat ac felis donec et odio. Quis vel eros donec ac odio tempor orci dapibus. Amet mattis
                vulputate enim nulla aliquet porttitor lacus. Sollicitudin nibh sit amet commodo. Pulvinar neque laoreet
                suspendisse.
              </p>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 self-start">
                READ MORE
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Marketing strategy visual"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Copy Section */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Does your copy sound boring?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <p className="text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incidi et dolore magna aliqua. In
                  tellus integer scelerisque varius?
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incidi et ornare sed magna aliqua?
                  In tellus integer scelerisque varius.
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm leading-relaxed mb-4">
                  Quis varius quam quisque id diam vel. Habitant morbi tristique senectus et? Scelerisque fermentum in
                  ornare?
                </p>
                <div className="w-20 h-px bg-black/70 my-4"></div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6">
                EXPLORE SERVICES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-serif mb-12">What we&apos;re most proud of:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">380+</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">Happy clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">12</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">Years experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">95%</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">Retention rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">3</p>
              <p className="text-xs uppercase tracking-widest text-gray-600">Team members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-widest">
              Ready to position yourself as an expert in your industry?
            </p>
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-8">
            Nurture Your Followers
            <br />
            <span className="italic">Masterclass</span>
          </h2>
          <div className="max-w-xl mx-auto text-center mb-8">
            <p className="text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia!
            </p>
          </div>
          <div className="text-center">
            <Button className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
              WATCH INSTANTLY!
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#f5f3ef]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-black/70 w-1/4"></div>
            <h2 className="text-center text-xl font-light mx-6 uppercase tracking-widest">EXPLORE OUR PROGRAMS</h2>
            <div className="h-px bg-black/70 w-1/4"></div>
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-serif mb-12">WHAT FEELS RIGHT FOR YOU?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="bg-black h-80 mb-4">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Service one"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 mt-auto">
                SERVICE ONE
              </Button>
            </div>
            <div className="flex flex-col">
              <div className="bg-black h-80 mb-4">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Service two"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 mt-auto">
                SERVICE TWO
              </Button>
            </div>
            <div className="flex flex-col">
              <div className="bg-black h-80 mb-4">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Free training"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button variant="outline" className="rounded-none text-xs tracking-widest uppercase px-6 mt-auto">
                FREE TRAINING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">#happyclients</p>
            <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
              "Now I feel excited about social media!"
            </blockquote>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Nunc sed velit dignissim sodales!
            </p>
            <p className="text-sm font-medium italic">— Amy Jacobs</p>
          </div>
        </div>
      </section>

      {/* Freebie Section */}
      <section className="py-16 bg-[#f5f3ef]" id="freebie">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Freebie mockup"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">
                Want to create a genuine connection with your audience?
              </h2>
              <p className="text-lg md:text-xl font-serif mb-6">
                Learn how to write better <span className="italic">stories</span> and make scroll-stopping visuals with
                our <span className="italic">60 minute live training!</span>
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor incididunt ut labore et dolore,
                magna aliqua. Faucibus ornare suspendisse sed nisi. Platea dictumst vestibulum rhoncus. Elementum
                curabitur vitae 60 velit sodales!
              </p>
              <div className="space-y-4">
                <Input type="email" placeholder="Email address" className="rounded-none focus:ring-black" />
                <Button className="w-full bg-black text-white hover:bg-black/90 rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                  GET INSTANT ACCESS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2c2c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="bg-white text-black p-6 mb-8">
                <h3 className="text-xl font-serif mb-1">Morgan Kendall</h3>
                <p className="text-xs uppercase tracking-widest">MARKETING CONSULTANT</p>
              </div>
              <p className="text-sm text-gray-300 mb-4">SUPERCHARGE YOUR MARKETING STRATEGY AND GROW YOUR BUSINESS</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6">Navigation</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  Home
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Services
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Freebies
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-6">JOIN THE TRIBE!</h3>
              <p className="text-sm text-gray-300 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse dolore!
              </p>
              <div className="flex mb-4">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-white/30 rounded-none focus:border-white"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-none ml-2">Subscribe</Button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Twitter size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-12">
            {[...Array(8)].map((_, i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=150&width=150`}
                alt={`Gallery image ${i + 1}`}
                width={150}
                height={150}
                className="object-cover w-full h-auto"
              />
            ))}
          </div>
          <div className="text-center mt-12 text-xs text-gray-400">© DESIGNORINA 2023. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  )
}

