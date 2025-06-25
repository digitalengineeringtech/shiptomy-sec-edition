'use client'
import { Button } from '@/components/ui/button'
// import { increment, decrement, incrementByAmount } from '../store/slices/counterSlices'
// import { useAppDispatch, useAppSelector } from '@/store/hook'
import Link from "next/link"
import Image from "next/image"
import ServiceCards from '@/components/ServiceCards'
import { CheckCircle, LineChart, ShoppingBag, Truck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useIntlApp } from '@/context/IntlProviderWrapper'

export default function Home() {
  // const count = useAppSelector((state) => state.counter.value)
  // const dispatch = useAppDispatch()
  const { locale, changeLanguage } = useIntlApp();
  const t = useTranslations();

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
            <h1 className={`leading-15 font-bold text-6xl max-md:text-5xl ${locale === "my" && "max-sm:text-4xl md:text-5xl md:leading-17"}`}>
              {t("HOME.TITLE")}
              {/* Your Global Business Partner */}
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl">
              {t("HOME.INTRO")}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/service">{t("EXPLORE")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/chat">{t("CONTACT_US")}</Link>
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
        <h1 className={` font-bold mt-7 text-5xl max-md:text-4xl ${locale === "my" && "max-sm:text-3xl md:text-4xl pb-1 md:leading-17"}`}>
          {t("HOME.SERVICES.TITLE")}
        </h1>
        <p className="text-xl text-muted-foreground my-4 px-10">
          {t("HOME.SERVICES.DESC")}
        </p>

        <ServiceCards />
      </section>

      {/* How It Works Section */}
      <section className="bg-[#F1F5F9] py-20 px-10 rounded-xl">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${locale == "my" && "leading-12 pb-3"}`}>{t("HOME.HOW_IT_WORKS.TITLE")}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              {t("HOME.HOW_IT_WORKS.DESC")}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 mx-auto">
            {/* <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Register</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create an account and get your personal shipping address.
              </p>
            </div> */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">{t("HOME.HOW_IT_WORKS.SHOP_TITLE")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t("HOME.HOW_IT_WORKS.SHOP_DESC")}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">{t("HOME.HOW_IT_WORKS.SHIP_TITLE")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("HOME.HOW_IT_WORKS.SHIP_DESC")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">{t("HOME.HOW_IT_WORKS.RECEIVE_TITLE")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("HOME.HOW_IT_WORKS.RECEIVE_DESC")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${locale == "my" && "leading-12 pb-3"}`}>{t("HOME.WHY_CHOOSE_US.TITLE")}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg">
              {t("HOME.WHY_CHOOSE_US.DESC")}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("HOME.WHY_CHOOSE_US.RELIABLE_TITLE")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("HOME.WHY_CHOOSE_US.RELIABLE_DESC")}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("HOME.WHY_CHOOSE_US.COMPETITIVE_TITLE")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("HOME.WHY_CHOOSE_US.COMPETITIVE_DESC")}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("HOME.WHY_CHOOSE_US.EXPERT_TITLE")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("HOME.WHY_CHOOSE_US.EXPERT_DESC")}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("HOME.WHY_CHOOSE_US.GLOBAL_TITLE")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("HOME.WHY_CHOOSE_US.GLOBAL_DESC")}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("HOME.WHY_CHOOSE_US.CUSTOMER_TITLE")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("HOME.WHY_CHOOSE_US.CUSTOMER_DESC")}
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("HOME.WHY_CHOOSE_US.INNOVATIVE_TITLE")}</h3>
              <p className="mt-2 text-muted-foreground">
                {t("HOME.WHY_CHOOSE_US.INNOVATIVE_DESC")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 w-full">
        <div className="container mx-auto">
          <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
            <h2 className={`text-white text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("HOME.READY.TITLE")}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-white">
              {t("HOME.READY.DESC")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className='text-primary hover:scale-105 active:scale-95 duration-200'>
                <Link href="/service">{t("EXPLORE")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:scale-105 active:scale-95 duration-200 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/chat">{t("CONTACT_US")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
