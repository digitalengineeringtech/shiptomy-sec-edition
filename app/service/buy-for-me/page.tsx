"use client"
import Link from "next/link"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { useIntlApp } from "@/context/IntlProviderWrapper"

export default function BuyForMePage() {
  const t = useTranslations();
    const { locale, changeLanguage } = useIntlApp();
  return (
    <div className="container mx-auto max-sm:px-5 py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <ShoppingBag className="mr-1 h-4 w-4" />
          {t("BUY_FOR_ME.LABEL")}
        </div>
        <h1 className={`mt-4 text-4xl lg:text-5xl font-bold tracking-tighter ${locale == "my" && "leading-14 pb-1"}`}>{t("BUY_FOR_ME.TITLE")}</h1>
        <p className={`mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl ${locale == "my" && "leading-8 max-sm:leading-7"}`}>
          {t("BUY_FOR_ME.INTRO")}
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-16 aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
        {/* <Image src="/Ecommerce web page-rafiki.svg" alt="Ecommerce" width={700} height={700}/> */}


        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <ShoppingBag className="h-16 w-16 text-primary/40" />
          </div>
          <p className="text-muted-foreground text-lg">Buy For Me Service</p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "leading-12 max-sm:text-2xl"}`}>{t("BUY_FOR_ME.HOW_IT_WORKS.TITLE")}</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                1
              </div>
              <CardTitle className="mt-2 font-bold text-xl">{t("BUY_FOR_ME.HOW_IT_WORKS.REQUEST_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.HOW_IT_WORKS.REQUEST_DESC")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                2
              </div>
              <CardTitle className="mt-2 font-bold text-xl">{t("BUY_FOR_ME.HOW_IT_WORKS.QUOTE_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.HOW_IT_WORKS.QUOTE_DESC")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                3
              </div>
              <CardTitle className="mt-2 font-bold text-xl">{t("BUY_FOR_ME.HOW_IT_WORKS.PURCHASE_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.HOW_IT_WORKS.PURCHASE_DESC")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                4
              </div>
              <CardTitle className="mt-2 font-bold text-xl">{t("BUY_FOR_ME.HOW_IT_WORKS.DELIVERY_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.HOW_IT_WORKS.DELIVERY_DESC")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "max-sm:text-2xl"}`}>{t("BUY_FOR_ME.BENEFITS.TITLE")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("BUY_FOR_ME.BENEFITS.ACCESS_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.BENEFITS.ACCESS_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("BUY_FOR_ME.BENEFITS.SECURE_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.BENEFITS.SECURE_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("BUY_FOR_ME.BENEFITS.PRODUCT_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.BENEFITS.PRODUCT_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("BUY_FOR_ME.BENEFITS.CONSOLIDATION_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.BENEFITS.CONSOLIDATION_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("BUY_FOR_ME.BENEFITS.CUSTOM_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.BENEFITS.CUSTOM_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("BUY_FOR_ME.BENEFITS.DOORSTEP_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.BENEFITS.DOORSTEP_DESC")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "max-sm:text-2xl"}`}>{t("BUY_FOR_ME.PRICING.TITLE")}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className={`text-3xl font-semibold ${locale == "my" && "max-sm:text-[22px]"}`}>{t("BUY_FOR_ME.PRICING.TITLE_1")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-5xl font-bold ${locale == "my" && "pb-3 max-sm:text-4xl"}`}>{t("BUY_FOR_ME.PRICING.INFO_1")}</p>
              <p className={`mt-2 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.PRICING.DESC_1")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className={`text-3xl font-semibold ${locale == "my" && "leading-12 max-sm:text-2xl"}`}>{t("BUY_FOR_ME.PRICING.TITLE_2")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-5xl font-bold ${locale == "my" && "pb-3 max-sm:text-4xl"}`}>{t("BUY_FOR_ME.PRICING.INFO_2")}</p>
              <p className={`mt-2 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>{t("BUY_FOR_ME.PRICING.DESC_2")}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className={`text-3xl font-semibold ${locale == "my" && "max-sm:text-[22px]"}`}>{t("BUY_FOR_ME.PRICING.TITLE_3")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-4xl font-bold ${locale == "my" && "pb-6 max-sm:text-3xl"}`}>{t("BUY_FOR_ME.PRICING.INFO_3")}</p>
              <p className={`mt-2 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("BUY_FOR_ME.PRICING.DESC_3")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-lg bg-primary py-8 px-5 text-center md:p-12">
        <h2 className={`text-white text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12 max-sm:text-[22px] max-sm:leading-10"}`}>{t("BUY_FOR_ME.READY.TITLE")}</h2>
        <p className={`mx-auto text-white mt-4 max-w-[600px] ${locale == "my" && "max-sm:text-sm leading-7"}`}>
          {t("BUY_FOR_ME.READY.DESC")}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-white hover:bg-white text-primary hover:scale-105 active:scale-95 duration-200">
            <Link href="/chat">{t("SUBMIT")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-primary hover:text-primary hover:scale-105 active:scale-95 duration-200">
            <Link href="/faq">{t("READ")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
