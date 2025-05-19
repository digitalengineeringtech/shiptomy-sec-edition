'use client'
import { Button } from '@/components/ui/button'
// import { increment, decrement, incrementByAmount } from '../store/slices/counterSlices'
// import { useAppDispatch, useAppSelector } from '@/store/hook'
import Link from "next/link"
import Image from "next/image"
import ServiceCards from '@/components/ServiceCards'
import { CheckCircle } from 'lucide-react'

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
      <section className='py-30 text-center w-[70%]'>
        <h1 className="text-6xl font-bold ">
          Your Global Shopping & Shipping Partner
        </h1>
        <p className="text-xl text-muted-foreground my-7 px-10">
          Your trusted shipping and purchasing partner. We make global shopping and shipping easy and affordable.
        </p>

        <div className='w-[60%] grid grid-cols-2 items-center gap-5 my-7 mx-auto'>
          <Link href="/service">
            <Button className='bg-[#708AE8] hover:bg-[#708AE8] cols-span-1 w-full font-semibold text-xl py-6 px-10 hover:scale-105 active:scale-95 duration-200'>Explore Our Services</Button>
          </Link>
          <Link href="/chat">
            <Button className='bg-white hover:bg-white cols-span-1 w-full font-semibold text-xl py-6 px-10 hover:scale-105 active:scale-95 duration-200 border-2  text-black'>Chat With Us</Button>
          </Link>
        </div>


        <div className="relative w-full flex justify-center items-center mt-30 ">
          <Image src="/new-logo-transparent.png" alt="Myanmar Express Hub" width={600} height={400} />
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#708AE8] text-lg font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Register</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create an account and get your personal shipping address.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#708AE8] text-lg font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Shop</h3>
              <p className="mt-2 text-sm text-muted-foreground">Shop online or request us to purchase items for you.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#708AE8] text-lg font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Ship</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We receive your packages and prepare them for international shipping.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#708AE8] text-lg font-bold text-white">
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
              <div className="mb-4 rounded-full bg-[#708AE8]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#708AE8]" />
              </div>
              <h3 className="text-xl font-bold">Reliable Service</h3>
              <p className="mt-2 text-muted-foreground">
                We deliver on our promises with consistent, dependable service you can count on.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-[#708AE8]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#708AE8]" />
              </div>
              <h3 className="text-xl font-bold">Competitive Pricing</h3>
              <p className="mt-2 text-muted-foreground">
                Our rates are transparent and competitive, with no hidden fees or surprises.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-[#708AE8]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#708AE8]" />
              </div>
              <h3 className="text-xl font-bold">Expert Team</h3>
              <p className="mt-2 text-muted-foreground">
                Our experienced professionals provide knowledgeable guidance and support.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-[#708AE8]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#708AE8]" />
              </div>
              <h3 className="text-xl font-bold">Global Network</h3>
              <p className="mt-2 text-muted-foreground">
                Our extensive international network ensures efficient service worldwide.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-[#708AE8]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#708AE8]" />
              </div>
              <h3 className="text-xl font-bold">Customer-Focused</h3>
              <p className="mt-2 text-muted-foreground">
                We prioritize your satisfaction with personalized service and support.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-[#708AE8]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#708AE8]" />
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
      <section className="py-12">
        <div className="container">
          <div className="rounded-xl bg-gradient-to-r from-[#708AE8] to-[#708AE8]/80 p-8 text-center text-[#708AE8]-foreground md:p-12">
            <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-white">
              Join thousands of satisfied customers who trust Myanmar Express Hub for their international business
              needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className='text-[#708AE8] hover:scale-105 active:scale-95 duration-200'>
                <Link href="/service">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 active:scale-95 duration-200 border-[#708AE8]-foreground text-[#708AE8] hover:bg-[#708AE8]-foreground hover:text-[#708AE8]"
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
