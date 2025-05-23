'use client'

import { ShoppingBag, ArrowRight, Package, Truck, LineChart } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import Link from "next/link"

const ServiceCards = () => {
    return (
        <div className="text-start my-10 mb-20">
            {/* <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              We offer a range of services to meet your international shopping and shipping needs.
            </p>
          </div> */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-none shadow-md transition-all hover:shadow-lg">
                    <CardHeader className="pb-3">
                        <ShoppingBag className="mb-2 h-10 w-10 text-[#708AE8]" />
                        <CardTitle className="text-black font-bold text-3xl">Buy For Me</CardTitle>
                        <CardDescription className="text-md">We purchase products on your behalf from international retailers.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md text-muted-foreground">
                            Access products from retailers that don't ship to Myanmar. We handle the purchase and delivery to our
                            warehouse.
                        </p>

                    </CardContent>
                    <CardFooter>
                        <Link href="/service/buy-for-me" className="flex items-center gap-1 w-full">
                            <Button className="mt-4 px-0 w-full bg-[#708AE8] hover:bg-[#6e80c0] hover:scale-105 active:scale-95 duration-200">
                                Learn more <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="border-none shadow-md transition-all hover:shadow-lg">
                    <CardHeader className="pb-3">
                        <LineChart className="mb-2 h-10 w-10 text-[#708AE8]" />
                        <CardTitle className="text-black font-bold text-3xl">Consulting Service</CardTitle>
                        <CardDescription className="text-base">
                            Expert guidance for international business growth.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Get professional consulting to optimize your logistics, enter new markets, and expand your global
                            footprint.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/service/consulting-service" className="flex items-center gap-1 w-full">
                            <Button className="mt-4 px-0 w-full bg-[#708AE8] hover:bg-[#6e80c0] hover:scale-105 active:scale-95 duration-200">
                                Learn more <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="border-none shadow-md transition-all hover:shadow-lg">
                    <CardHeader className="pb-3">
                        <Truck className="mb-2 h-10 w-10 text-[#708AE8]" />
                        <CardTitle className="text-black font-bold text-3xl">Ship for me</CardTitle>
                        <CardDescription className="text-md">We provide reliable international shipping for your packages.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md text-muted-foreground">
                            Already have products? We'll ship them to Myanmar with tracking, insurance, and customs clearance.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/service/ship-for-me" className="flex items-center gap-1 w-full">
                            <Button className="mt-4 px-0 w-full bg-[#708AE8] hover:bg-[#6e80c0] hover:scale-105 active:scale-95 duration-200">
                                Learn more <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}

export default ServiceCards