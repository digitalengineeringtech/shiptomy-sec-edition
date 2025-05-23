import Link from "next/link"
import { CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ShipForMePage() {
  return (
    <div className="container py-12 max-sm:px-10 mx-auto">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Truck className="mr-1 h-4 w-4" />
          International Shipping Service
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">Ship for me</h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          We provide reliable international shipping for your packages from around the world to Myanmar.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-16 aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
        <div className="text-muted-foreground">Ship for me Service</div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <CardTitle className="mt-4 text-2xl font-semibold">Register</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sign up and get your personal shipping address in our supported countries.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <CardTitle className="mt-4 text-2xl font-semibold">Ship to Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Use your assigned address when shopping online. Retailers ship your purchases to our warehouse.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <CardTitle className="mt-4 text-2xl font-semibold">Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We receive, inspect, and consolidate your packages for international shipping.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                4
              </div>
              <CardTitle className="mt-4 text-2xl font-semibold">Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We ship your packages to Myanmar and deliver them to your doorstep.
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
              <h3 className="font-bold">Global Addresses</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Get personal shipping addresses in the US, UK, Japan, and more.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Package Consolidation</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Combine multiple packages into one shipment to save on shipping costs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Package Photos</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We provide photos of your packages upon arrival at our warehouse.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Repackaging</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We can repackage items to reduce volume and save on shipping costs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">Real-time Tracking</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Track your packages from our warehouse to your doorstep.
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
        </div>
      </div>

      {/* Shipping Rates */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Shipping Rates</h2>
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Weight</TableHead>
                  <TableHead>USA to Myanmar</TableHead>
                  <TableHead>UK to Myanmar</TableHead>
                  <TableHead>Japan to Myanmar</TableHead>
                  <TableHead>Thailand to Myanmar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">0.5 kg</TableCell>
                  <TableCell>$15</TableCell>
                  <TableCell>$18</TableCell>
                  <TableCell>$12</TableCell>
                  <TableCell>$8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">1 kg</TableCell>
                  <TableCell>$25</TableCell>
                  <TableCell>$28</TableCell>
                  <TableCell>$20</TableCell>
                  <TableCell>$12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2 kg</TableCell>
                  <TableCell>$40</TableCell>
                  <TableCell>$45</TableCell>
                  <TableCell>$35</TableCell>
                  <TableCell>$20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5 kg</TableCell>
                  <TableCell>$85</TableCell>
                  <TableCell>$95</TableCell>
                  <TableCell>$75</TableCell>
                  <TableCell>$45</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">10 kg</TableCell>
                  <TableCell>$160</TableCell>
                  <TableCell>$180</TableCell>
                  <TableCell>$140</TableCell>
                  <TableCell>$80</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4 text-sm text-muted-foreground">
              * Rates are estimates and may vary based on package dimensions and shipping method.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Supported Countries */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Supported Countries</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>United States</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/usa.png" alt="usa" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>United Kingdom</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/uk.svg" alt="uk" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Japan</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
                {/* <span className="text-muted-foreground text-xs">Japan</span> */}
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/japan.jpg" alt="japan" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Thailand</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/thailand.jpg" alt="thailand" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Singapore</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/singapore.jpg" alt="singapore" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>South Korea</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/south_korea.jpg" alt="south-korea" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Australia</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/australia.jpg" alt="‌australia" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Germany</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/germany.jpg" alt="germany" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-lg bg-muted p-8 text-center md:p-12">
        <h2 className="text-3xl font-bold">Ready to start shipping?</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
          Register today to get your personal shipping addresses and start receiving packages from around the world.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/chat">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/faq">Read FAQs</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
