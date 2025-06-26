'use client'

import { ShoppingBag, ArrowRight, Package, Truck, LineChart } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useIntlApp } from "@/context/IntlProviderWrapper"

const ServiceCards = () => {
    const t = useTranslations();
      const { locale, changeLanguage } = useIntlApp();
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
                        <ShoppingBag className="mb-2 h-10 w-10 text-primary" />
                        <CardTitle className={`text-black font-bold text-3xl ${locale == "my" && "leading-12 pb-4"}`}>{t("HOME.SERVICES.BFM_TITLE")}</CardTitle>
                        <CardDescription className={`text-md ${locale == "my" && "max-sm:text-[14px] leading-6"}`}>{t("HOME.SERVICES.BFM_DESC_1")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className={`text-md ${locale == "my" && "max-sm:text-[14px] leading-6"} text-muted-foreground`}>
                            {t("HOME.SERVICES.BFM_DESC_2")}
                        </p>

                    </CardContent>
                    <CardFooter>
                        <Link href="/service/buy-for-me" className="flex items-center gap-1 w-full">
                            <Button className="mt-4 px-0 w-full bg-primary hover:scale-105 active:scale-95 duration-200">
                                {t("LEARN_MORE")} <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="border-none shadow-md transition-all hover:shadow-lg">
                    <CardHeader className="pb-3">
                        <LineChart className="mb-2 h-10 w-10 text-primary" />
                        <CardTitle className={`text-black font-bold text-3xl ${locale == "my" && " pb-4"}`}>{t("HOME.SERVICES.CS_TITLE")}</CardTitle>
                        <CardDescription className={`text-base ${locale == "my" && "max-sm:text-[14px] leading-6"}`}>
                            {t("HOME.SERVICES.CS_DESC_1")}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className={`${locale == "my" && "max-sm:text-[14px] leading-6"} text-muted-foreground`}>
                            {t("HOME.SERVICES.CS_DESC_2")}
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/service/consulting-service" className="flex items-center gap-1 w-full">
                            <Button className="mt-4 px-0 w-full bg-primary hover:scale-105 active:scale-95 duration-200">
                                {t("LEARN_MORE")} <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="border-none shadow-md transition-all hover:shadow-lg">
                    <CardHeader className="pb-3">
                        <Truck className="mb-2 h-10 w-10 text-primary" />
                        <CardTitle className={`text-black font-bold text-3xl ${locale == "my" && "leading-12 pb-4"}`}>{t("HOME.SERVICES.SFM_TITLE")}</CardTitle>
                        <CardDescription className={`text-md ${locale == "my" && "max-sm:text-[14px] leading-6"}`}>{t("HOME.SERVICES.SFM_DESC_1")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className={`text-md ${locale == "my" && "max-sm:text-[14px] leading-6"} text-muted-foreground`}>
                            {t("HOME.SERVICES.SFM_DESC_2")}
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/service/ship-for-me" className="flex items-center gap-1 w-full">
                            <Button className="mt-4 px-0 w-full bg-primary hover:scale-105 active:scale-95 duration-200">
                                {t("LEARN_MORE")} <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}

export default ServiceCards