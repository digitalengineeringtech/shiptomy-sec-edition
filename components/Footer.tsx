import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted flex flex-col justify-center items-center pt-8">
      <div className="container grid gap-8 justify-around md:grid-cols-2 lg:grid-cols-4">
        <div className="cols-span-1">
          <Link href="/">
            <Image src="/new-logo-transparent.png" alt="Myanmar Express Hub" width={200} height={10} />
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            Your trusted shipping and purchasing partner. We make global shopping and shipping easy and affordable.
          </p>
        </div>
        <div className="cols-span-1">
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-muted-foreground hover:text-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="cols-span-1">
          <h3 className="mb-4 text-lg font-bold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/service/buy-for-me" className="text-muted-foreground hover:text-foreground">
                Buy For Me
              </Link>
            </li>
            <li>
              <Link href="/service/buy-from-other" className="text-muted-foreground hover:text-foreground">
                Buy From Other
              </Link>
            </li>
            <li>
              <Link href="/service/ship-for-me" className="text-muted-foreground hover:text-foreground">
                Ship for me
              </Link>
            </li>
          </ul>
        </div>
        <div className="cols-span-1">
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>123 Main Street, Yangon, Myanmar</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+95 9 123 456 789</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@myanmarexpresshub.com</span>
            </li>
            <li className="mt-4 flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t py-5 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Myanmar Express hub. All rights reserved.</p>
      </div>
    </footer>
  )
}
