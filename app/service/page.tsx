import Link from "next/link"
import { ArrowRight, ShoppingBag, Truck, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-muted-foreground text-lg md:text-xl">
          Myanmar Express hub offers comprehensive shipping, purchasing, and consulting solutions to meet your needs.
        </p>
      </div>

      <div className="grid gap-16">
        {/* Buy For Me Service */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square bg-gradient-to-br from-[#708AE8]/10 to-[#708AE8]/5 flex items-center justify-center p-8">
            <ShoppingBag className="h-24 w-24 text-[#708AE8]/40" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-[#708AE8]/10 px-3 py-1 text-sm font-medium text-[#708AE8]">
              <ShoppingBag className="mr-1 h-4 w-4" />
              Personal Shopping
            </div>
            <h2 className="mt-4 text-3xl font-bold">Buy For Me</h2>
            <p className="mt-4 text-muted-foreground">
              Our Buy For Me service allows you to purchase products from international retailers that don't ship to
              Myanmar. We handle the entire process from purchase to delivery.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Access to retailers that don't ship internationally</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Secure payment processing</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Product verification before shipping</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Consolidation of multiple purchases</span>
              </li>
            </ul>
            <Button asChild className="mt-8 w-fit">
              <Link href="/service/buy-for-me">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Consulting Service */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square md:order-last bg-gradient-to-br from-[#708AE8]/10 to-[#708AE8]/5 flex items-center justify-center p-8">
            <LineChart className="h-24 w-24 text-[#708AE8]/40" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-[#708AE8]/10 px-3 py-1 text-sm font-medium text-[#708AE8]">
              <LineChart className="mr-1 h-4 w-4" />
              Professional Consulting
            </div>
            <h2 className="mt-4 text-3xl font-bold">Consulting Service</h2>
            <p className="mt-4 text-muted-foreground">
              Our consulting services provide expert guidance to help your business navigate international markets,
              optimize logistics, and expand your global footprint.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Logistics and supply chain optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Market entry strategy development</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Business growth and expansion planning</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Customized solutions for your business needs</span>
              </li>
            </ul>
            <Button asChild className="mt-8 w-fit">
              <Link href="/service/consulting-service">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Ship for me Service */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square bg-gradient-to-br from-[#708AE8]/10 to-[#708AE8]/5 flex items-center justify-center p-8">
            <Truck className="h-24 w-24 text-[#708AE8]/40" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-[#708AE8]/10 px-3 py-1 text-sm font-medium text-[#708AE8]">
              <Truck className="mr-1 h-4 w-4" />
              International Shipping
            </div>
            <h2 className="mt-4 text-3xl font-bold">Ship for me</h2>
            <p className="mt-4 text-muted-foreground">
              Our Ship for me service provides reliable international shipping for your packages. We handle customs
              clearance, tracking, and delivery to your doorstep in Myanmar.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Personal shipping address in multiple countries</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Package consolidation to save on shipping</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Real-time tracking and notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-[#708AE8] flex-shrink-0" />
                <span>Customs clearance and documentation</span>
              </li>
            </ul>
            <Button asChild className="mt-8 w-fit">
              <Link href="/service/ship-for-me">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Comparison */}
      <div className="mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Our Services</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Find the right service for your specific needs
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-4 text-left font-medium">Features</th>
                <th className="py-4 px-4 text-center font-medium">Buy For Me</th>
                <th className="py-4 px-4 text-center font-medium">Consulting Service</th>
                <th className="py-4 px-4 text-center font-medium">Ship for me</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4">International Purchasing</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">International Shipping</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">Business Strategy</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">Logistics Optimization</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">Product Verification</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">Customs Clearance</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">Market Entry Support</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Package Consolidation</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20">
        <div className="rounded-xl bg-gradient-to-r from-[#708AE8] to-[#708AE8]/80 p-8 text-center text-[#708AE8]-foreground md:p-12">
          <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-white">
            Choose the service that best fits your needs or contact us for a customized solution.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg"  className="text-[#708AE8] bg-white hover:bg-white hover:scale-105 active:scale-95 duration-200">
              <Link href="/chat">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#708AE8]-foreground text-[#708AE8] hover:scale-105 active:scale-95 duration-200"
            >
              <Link href="/faq">Read FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
