"use client"
import Link from "next/link"
import { ArrowRight, ShoppingBag, Truck, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useIntlApp } from "@/context/IntlProviderWrapper"

export default function ServicePage() {
  const t = useTranslations();
    const { locale, changeLanguage } = useIntlApp();
  return (
    <div className="container mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className={` font-bold tracking-tighter text-6xl max-md:text-5xl ${locale === "my" && "max-sm:text-4xl md:text-5xl md:leading-17"}`}>{t("OUR_SERVICES.TITLE")}</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-muted-foreground text-lg md:text-xl">
          {t("OUR_SERVICES.INTRO")}
        </p>
      </div>

      <div className="grid gap-16">
        {/* Buy For Me Service */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8">
            <ShoppingBag className="h-24 w-24 text-primary/40" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <ShoppingBag className="mr-1 h-4 w-4" />
              {t("OUR_SERVICES.BUY_FOR_ME.LABEL")}
            </div>
            <h2 className="mt-4 text-3xl font-bold">{t("OUR_SERVICES.BUY_FOR_ME.TITLE")}</h2>
            <p className="mt-4 text-muted-foreground">
              {t("OUR_SERVICES.BUY_FOR_ME.DESC")}
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.BUY_FOR_ME.LIST_1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.BUY_FOR_ME.LIST_2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.BUY_FOR_ME.LIST_3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.BUY_FOR_ME.LIST_4")}</span>
              </li>
            </ul>
            <Button asChild className="mt-8 w-fit">
              <Link href="/service/buy-for-me">{t("LEARN_MORE")}</Link>
            </Button>
          </div>
        </div>

        {/* Consulting Service */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square md:order-last bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8">
            <LineChart className="h-24 w-24 text-primary/40" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <LineChart className="mr-1 h-4 w-4" />
              {t("OUR_SERVICES.CONSULTING_SERVICE.LABEL")}
            </div>
            <h2 className="mt-4 text-3xl font-bold">{t("OUR_SERVICES.CONSULTING_SERVICE.TITLE")}</h2>
            <p className="mt-4 text-muted-foreground">
              {t("OUR_SERVICES.CONSULTING_SERVICE.DESC")}
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.CONSULTING_SERVICE.LIST_1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.CONSULTING_SERVICE.LIST_2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.CONSULTING_SERVICE.LIST_3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.CONSULTING_SERVICE.LIST_4")}</span>
              </li>
            </ul>
            <Button asChild className="mt-8 w-fit">
              <Link href="/service/consulting-service">{t("LEARN_MORE")}</Link>
            </Button>
          </div>
        </div>

        {/* Ship for me Service */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8">
            <Truck className="h-24 w-24 text-primary/40" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Truck className="mr-1 h-4 w-4" />
              {t("OUR_SERVICES.SHIP_FOR_ME.LABEL")}
            </div>
            <h2 className="mt-4 text-3xl font-bold">{t("OUR_SERVICES.SHIP_FOR_ME.TITLE")}</h2>
            <p className="mt-4 text-muted-foreground">
              {t("OUR_SERVICES.SHIP_FOR_ME.DESC")}
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.SHIP_FOR_ME.LIST_1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.SHIP_FOR_ME.LIST_2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.SHIP_FOR_ME.LIST_3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <span>{t("OUR_SERVICES.SHIP_FOR_ME.LIST_4")}</span>
              </li>
            </ul>
            <Button asChild className="mt-8 w-fit">
              <Link href="/service/ship-for-me">{t("LEARN_MORE")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Service Comparison */}
      <div className="mt-20">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("OUR_SERVICES.COMPARE.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {t("OUR_SERVICES.COMPARE.DESC")}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-4 text-left font-medium">{t("OUR_SERVICES.COMPARE.HEADER_1")}</th>
                <th className="py-4 px-4 text-center font-medium">{t("OUR_SERVICES.COMPARE.HEADER_2")}</th>
                <th className="py-4 px-4 text-center font-medium">{t("OUR_SERVICES.COMPARE.HEADER_3")}</th>
                <th className="py-4 px-4 text-center font-medium">{t("OUR_SERVICES.COMPARE.HEADER_4")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_1")}</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_2")}</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_3")}</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_4")}</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_5")}</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_6")}</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_7")}</td>
                <td className="py-4 px-4 text-center">-</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">-</td>
              </tr>
              <tr>
                <td className="py-4 px-4">{t("OUR_SERVICES.COMPARE.ROW_8")}</td>
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
        <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
          <h2 className={`text-white text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("OUR_SERVICES.READY.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-white">
            {t("OUR_SERVICES.READY.DESC")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg"  className="text-primary bg-white hover:bg-white hover:scale-105 active:scale-95 duration-200">
              <Link href="/chat">{t("CONTACT_US")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary hover:text-primary hover:scale-105 active:scale-95 duration-200"
            >
              <Link href="/faq">{t("READ")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
