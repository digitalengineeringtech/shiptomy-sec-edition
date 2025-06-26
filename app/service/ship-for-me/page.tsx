"use client"
import Link from "next/link"
import { CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useTranslations } from "next-intl"
import { useIntlApp } from "@/context/IntlProviderWrapper"

export default function ShipForMePage() {
  const t = useTranslations();
      const { locale, changeLanguage } = useIntlApp();
  return (
    <div className="container mx-auto max-sm:px-5 py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Truck className="mr-1 h-4 w-4" />
          {t("SHIP_FOR_ME.LABEL")}
        </div>
        <h1 className={`mt-4 text-4xl font-bold tracking-tighter lg:text-5xl ${locale == "my" && "leading-14 pb-1"}`}>{t("SHIP_FOR_ME.TITLE")}</h1>
        <p className={`mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl ${locale == "my" && "leading-8 max-sm:leading-7"}`}>
          {t("SHIP_FOR_ME.INTRO")}
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-16 aspect-video overflow-hidden rounded-lg bg-muted flex flex-col items-center justify-center">
        <Truck className="h-16 w-16 text-primary/40" />
        <div className="text-muted-foreground">Ship for me Service</div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "leading-12 max-sm:text-2xl"}`}>{t("SHIP_FOR_ME.HOW_IT_WORKS.TITLE")}</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <CardTitle className="mt-4 text-2xl font-semibold">Register</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                Sign up and get your personal shipping address in our supported countries.
              </p>
            </CardContent>
          </Card> */}
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <CardTitle className="mt-4 text-2xl max-sm:text-xl font-bold">{t("SHIP_FOR_ME.HOW_IT_WORKS.SHIP_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.HOW_IT_WORKS.SHIP_DESC")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <CardTitle className="mt-4 text-2xl max-sm:text-xl font-bold">{t("SHIP_FOR_ME.HOW_IT_WORKS.PROCESSING_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.HOW_IT_WORKS.PROCESSING_DESC")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <CardTitle className="mt-4 text-2xl max-sm:text-xl font-bold">{t("SHIP_FOR_ME.HOW_IT_WORKS.DELIVERY_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.HOW_IT_WORKS.DELIVERY_DESC")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "max-sm:text-2xl"}`}>{t("SHIP_FOR_ME.BENEFITS.TITLE")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("SHIP_FOR_ME.BENEFITS.GLOBAL_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.BENEFITS.GLOBAL_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("SHIP_FOR_ME.BENEFITS.CONSOLIDATION_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.BENEFITS.CONSOLIDATION_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("SHIP_FOR_ME.BENEFITS.PHOTOS_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.BENEFITS.PHOTOS_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("SHIP_FOR_ME.BENEFITS.REPACKAGING_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.BENEFITS.REPACKAGING_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("SHIP_FOR_ME.BENEFITS.TRACKING_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.BENEFITS.TRACKING_DESC")}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-bold">{t("SHIP_FOR_ME.BENEFITS.CUSTOM_TITLE")}</h3>
              <p className={`mt-1 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
                {t("SHIP_FOR_ME.BENEFITS.CUSTOM_DESC")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Rates */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "max-sm:text-2xl"}`}>{t("SHIP_FOR_ME.SHIPPING_RATES.TITLE")}</h2>
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("SHIP_FOR_ME.SHIPPING_RATES.HEADER_1")}</TableHead>
                  <TableHead>{t("SHIP_FOR_ME.SHIPPING_RATES.HEADER_2")}</TableHead>
                  <TableHead>{t("SHIP_FOR_ME.SHIPPING_RATES.HEADER_3")}</TableHead>
                  <TableHead>{t("SHIP_FOR_ME.SHIPPING_RATES.HEADER_4")}</TableHead>
                  <TableHead>{t("SHIP_FOR_ME.SHIPPING_RATES.HEADER_5")}</TableHead>
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
            <p className={`mt-4 text-sm text-muted-foreground ${locale == "my" && "leading-7"}`}>
              * {t("SHIP_FOR_ME.SHIPPING_RATES.INFO")}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Supported Countries */}
      <div className="mb-16">
        <h2 className={`mb-8 text-3xl font-bold ${locale == "my" && "max-sm:text-2xl leading-12"}`}>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.TITLE")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.USA")}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/usa.png" alt="usa" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.UK")}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/uk.svg" alt="uk" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.JP")}</CardTitle>
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
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.THI")}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/thailand.jpg" alt="thailand" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.SGP")}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/singapore.jpg" alt="singapore" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.SK")}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/south_korea.jpg" alt="south-korea" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.AUS")}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-muted p-1 rounded-md flex items-center justify-center">
                <Image src="/australia.jpg" alt="‌australia" width={100} height={100}/>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>{t("SHIP_FOR_ME.SUPPORTED_COUNTRIES.GER")}</CardTitle>
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
      <div className="rounded-lg bg-primary py-8 px-5 text-center md:p-12">
        <h2 className={`text-white text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12 max-sm:text-[22px] max-sm:leading-10"}`}>{t("SHIP_FOR_ME.READY.TITLE")}</h2>
        <p className={`mx-auto text-white mt-4 max-w-[600px] ${locale == "my" && "max-sm:text-sm leading-7"}`}>
          {t("SHIP_FOR_ME.READY.DESC")}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/chat">{t("GET_STARTED")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/faq">{t("READ")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
