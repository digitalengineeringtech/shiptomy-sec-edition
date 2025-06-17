import Link from "next/link"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BuyForMePage() {
  return (
    <div className="container mx-auto max-sm:px-10 py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <ShoppingBag className="mr-1 h-4 w-4" />
          Personal Shopping Service
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">Buy For Me</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          We purchase products on your behalf from international retailers that don't ship to Myanmar.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-16 aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
        <Image src="/Ecommerce web page-rafiki.svg" alt="Ecommerce" width={700} height={700}/>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                1
              </div>
              <CardTitle className="mt-2 font-bold text-xl">Request</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Submit a purchase request with product details, including URL, size, color, and quantity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                2
              </div>
              <CardTitle className="mt-2 font-bold text-xl">Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We provide a detailed quote including product cost, shipping, and our service fee.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                3
              </div>
              <CardTitle className="mt-2 font-bold text-xl">Purchase</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                After your payment, we purchase the product and have it shipped to our warehouse.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                4
              </div>
              <CardTitle className="mt-2 font-bold text-xl">Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We inspect the product, repackage if needed, and ship it to your address in Myanmar.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Benefits</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Access Global Brands</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Shop from retailers that don't ship to Myanmar or have regional restrictions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Secure Payments</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                No need for international credit cards or payment methods.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Product Verification</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We check all products for damage and authenticity before shipping.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Consolidation</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Combine multiple purchases into one shipment to save on shipping costs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Customs Clearance</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We handle all customs documentation and import procedures.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Doorstep Delivery</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your purchases are delivered directly to your address in Myanmar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Pricing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold">Service Fee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">10%</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Of the product's purchase price, with a minimum fee of $5.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold">Payment Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">3%</p>
              <p className="mt-2 text-sm text-muted-foreground">Additional fee for international payment processing.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-semibold">Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">Varies</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Based on weight, dimensions, and shipping method selected.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-lg bg-primary p-8 text-center md:p-12">
        <h2 className="text-3xl text-white font-bold">Ready to start shopping?</h2>
        <p className="mx-auto text-white mt-4 max-w-[600px] ">
          Submit your first purchase request today and experience the convenience of our Buy For Me service.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-white hover:bg-white text-primary hover:scale-105 active:scale-95 duration-200">
            <Link href="/chat">Submit a Request</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-primary hover:text-primary hover:scale-105 active:scale-95 duration-200">
            <Link href="/faq">Read FAQs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
