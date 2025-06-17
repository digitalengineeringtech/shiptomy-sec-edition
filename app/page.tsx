'use client'
import { Button } from '@/components/ui/button'
// import { increment, decrement, incrementByAmount } from '../store/slices/counterSlices'
// import { useAppDispatch, useAppSelector } from '@/store/hook'
import Link from "next/link"
import Image from "next/image"
import ServiceCards from '@/components/ServiceCards'
import { CheckCircle, LineChart, ShoppingBag, Truck } from 'lucide-react'

export default function Home() {
  // const count = useAppSelector((state) => state.counter.value)
  // const dispatch = useAppDispatch()

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      {/* <h1>Redux Toolkit Counter (TS)</h1>
      <h2>{count}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())} className='ml-5'>Decrement</Button>
      <Button className='ml-5' onClick={()=>dispatch(incrementByAmount(5))}>Increment With Amount</Button> */}

      {/* Landing Section */}
      <section className=" from-muted/50 to-background py-24">
        <div className="container flex flex-col items-center gap-8 text-center md:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Global Business Partner
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl">
              Myanmar Express Hub makes international shopping, shipping, and business expansion easy, affordable, and
              reliable.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/service">Explore Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/chat">Contact Us</Link>
            </Button>
          </div>
          <div className="relative h-[300px] w-full max-w-[1000px] overflow-hidden rounded-xl sm:h-[400px] md:h-[500px] bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-6">
                <ShoppingBag className="h-16 w-16 text-primary/40" />
                <Truck className="h-16 w-16 text-primary/40" />
                <LineChart className="h-16 w-16 text-primary/40" />
              </div>
              <p className="text-muted-foreground text-lg">Global shipping and business services</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className=" text-center w-[90%]">
        <h1 className="text-5xl font-bold mt-7">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground my-4 px-10">
          We offer a range of services to meet your international shopping and shipping needs.
        </p>

        <ServiceCards />
      </section>

      {/* How It Works Section */}
      <section className="bg-[#F1F5F9] py-20 px-10">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Simple steps to get your international purchases delivered to your doorstep.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Register</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create an account and get your personal shipping address.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Shop</h3>
              <p className="mt-2 text-sm text-muted-foreground">Shop online or request us to purchase items for you.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Ship</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We receive your packages and prepare them for international shipping.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                4
              </div>
              <h3 className="mt-4 text-xl font-bold">Receive</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your packages are delivered to your doorstep in Myanmar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg">
              What sets Myanmar Express Hub apart from other service providers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Reliable Service</h3>
              <p className="mt-2 text-muted-foreground">
                We deliver on our promises with consistent, dependable service you can count on.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Competitive Pricing</h3>
              <p className="mt-2 text-muted-foreground">
                Our rates are transparent and competitive, with no hidden fees or surprises.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Expert Team</h3>
              <p className="mt-2 text-muted-foreground">
                Our experienced professionals provide knowledgeable guidance and support.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Global Network</h3>
              <p className="mt-2 text-muted-foreground">
                Our extensive international network ensures efficient service worldwide.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Customer-Focused</h3>
              <p className="mt-2 text-muted-foreground">
                We prioritize your satisfaction with personalized service and support.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Innovative Solutions</h3>
              <p className="mt-2 text-muted-foreground">
                We continuously improve our services to meet evolving customer needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 w-full">
        <div className="container mx-auto">
          <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-white">
              Join thousands of satisfied customers who trust Myanmar Express Hub for their international business
              needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className='text-primary hover:scale-105 active:scale-95 duration-200'>
                <Link href="/service">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 active:scale-95 duration-200 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/chat">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
