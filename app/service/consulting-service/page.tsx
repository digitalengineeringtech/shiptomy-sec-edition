'use client'
import Link from "next/link"
import { CheckCircle, LineChart, Users, Lightbulb, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import { useIntlApp } from "@/context/IntlProviderWrapper"

export default function ConsultingServicePage() {
  const t = useTranslations();
  const { locale, changeLanguage } = useIntlApp();
  return (
    <div className="container py-12 max-sm:px-10 mx-auto">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <LineChart className="mr-1 h-4 w-4" />
          {t("CONSULTING_SERVICE.LABEL")}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("CONSULTING_SERVICE.TITLE")}</h1>
        <p className="mx-auto mt-6 max-w-[800px] text-muted-foreground text-lg md:text-xl">
         {t("CONSULTING_SERVICE.INTRO")}
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative mb-20 overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className={`text-2xl font-bold sm:text-3xl md:text-4xl ${locale == "my" && "leading-14 max-sm:leading-10"}`}>
              {t("CONSULTING_SERVICE.TRANSFORM.TRANSFORM")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("CONSULTING_SERVICE.TRANSFORM.TRANSFORM_DESC")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#packages">{t("CONSULTING_SERVICE.TRANSFORM.VIEW")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/chat">{t("CONSULTING_SERVICE.TRANSFORM.SCHEDULE")}</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-full max-w-[400px] rounded-xl bg-muted flex flex-col items-center justify-center">
              <LineChart className="h-16 w-16 text-primary/40" />
              <div className="text-muted-foreground">Consulting Service Illustration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("CONSULTING_SERVICE.CONSULTING.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {t("CONSULTING_SERVICE.CONSULTING.INTRO")}
          </p>
        </div>

        <Tabs defaultValue="logistics" className="w-full">
          <TabsList className="grid w-full h-full grid-cols-2 md:grid-cols-4 ">
            <TabsTrigger value="logistics">{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.TAB")}</TabsTrigger>
            <TabsTrigger value="market-entry">{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.TAB")}</TabsTrigger>
            <TabsTrigger value="supply-chain">{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.TAB")}</TabsTrigger>
            <TabsTrigger value="business">{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.TAB")}</TabsTrigger>
          </TabsList>

          <TabsContent value="logistics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.TITLE")}</CardTitle>
                <CardDescription>
                  {t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.DESC")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.TITLE_1")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.DESC_1")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.TITLE_2")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.DESC_2")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.TITLE_3")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.DESC_3")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.TITLE_4")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.DESC_4")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full max-sm:text-[12px]">
                  <Link href="/chat">{t("CONSULTING_SERVICE.CONSULTING.LOGISTICS.BTN")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="market-entry" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.TITLE")}</CardTitle>
                <CardDescription>
                  {t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.DESC")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.TITLE_1")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.DESC_1")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.TITLE_2")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.DESC_2")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.TITLE_3")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.DESC_3")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.TITLE_4")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.DESC_4")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full  max-sm:text-[12px]">
                  <Link href="/chat">{t("CONSULTING_SERVICE.CONSULTING.MARKET_ENTRY.BTN")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="supply-chain" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.TITLE")}</CardTitle>
                <CardDescription>
                  {t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.DESC")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.TITLE_1")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.DESC_1")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.TITLE_2")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.DESC_2")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.TITLE_3")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.DESC_3")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.TITLE_4")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.DESC_4")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full  max-sm:text-[12px]">
                  <Link href="/chat">{t("CONSULTING_SERVICE.CONSULTING.SUPPLY_CHAIN.BTN")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.TITLE")}</CardTitle>
                <CardDescription>
                  {t("CONSULTING_SERVICE.CONSULTING.STRATEGY.DESC")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.TITLE_1")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.STRATEGY.DESC_1")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.TITLE_2")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.STRATEGY.DESC_2")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.TITLE_3")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.STRATEGY.DESC_3")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.TITLE_4")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t("CONSULTING_SERVICE.CONSULTING.STRATEGY.DESC_4")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full max-sm:text-[12px]">
                  <Link href="/chat">{t("CONSULTING_SERVICE.CONSULTING.STRATEGY.BTN")}</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("CONSULTING_SERVICE.CHOOSE.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {t("CONSULTING_SERVICE.CHOOSE.INTRO")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{t("CONSULTING_SERVICE.CHOOSE.EXPERT_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("CONSULTING_SERVICE.CHOOSE.EXPERT_DESC")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <Lightbulb className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{t("CONSULTING_SERVICE.CHOOSE.TAILORED_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("CONSULTING_SERVICE.CHOOSE.TAILORED_DESC")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{t("CONSULTING_SERVICE.CHOOSE.RESULT_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("CONSULTING_SERVICE.CHOOSE.RESULT_DESC")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <Clock className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{t("CONSULTING_SERVICE.CHOOSE.TIMELY_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("CONSULTING_SERVICE.CHOOSE.TIMELY_DESC")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md md:col-span-2 lg:col-span-2">
            <CardHeader className="pb-2">
              <LineChart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{t("CONSULTING_SERVICE.CHOOSE.APPROACH_TITLE")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("CONSULTING_SERVICE.CHOOSE.APPROACH_DESC")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("CONSULTING_SERVICE.PROCESS.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {t("CONSULTING_SERVICE.PROCESS.INTRO")}
          </p>
        </div>

        <div className="relative">
          {/* Process timeline line */}
          <div className="max-md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-muted md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative grid md:grid-cols-2">
              <div className="flex md:justify-end md:pr-12">
                <div className="max-w-md md:text-right">
                  <div className="mb-2 text-xl font-bold">1. {t("CONSULTING_SERVICE.PROCESS.DISCOVERY_TITLE")}</div>
                  <p className="text-muted-foreground">
                    {t("CONSULTING_SERVICE.PROCESS.DISCOVERY_DESC")}
                  </p>
                </div>
              </div>
              <div className="max-md:hidden absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                1
              </div>
              <div className="max-md:hidden mt-8 md:mt-0 md:pl-12"></div>
            </div>

            {/* Step 2 */}
            <div className="relative grid md:grid-cols-2">
              <div className="hidden md:block md:pr-12"></div>
              <div className="max-md:hidden absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                2
              </div>
              <div className="  md:pl-12">
                <div className="max-w-md">
                  <div className="mb-2 text-xl font-bold">2. {t("CONSULTING_SERVICE.PROCESS.STRATEGY_TITLE")}</div>
                  <p className="text-muted-foreground">
                    {t("CONSULTING_SERVICE.PROCESS.STRATEGY_DESC")}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid md:grid-cols-2">
              <div className="flex md:justify-end md:pr-12">
                <div className="max-w-md md:text-right">
                  <div className="mb-2 text-xl font-bold">3. {t("CONSULTING_SERVICE.PROCESS.SUPPORT_TITLE")}</div>
                  <p className="text-muted-foreground">
                    {t("CONSULTING_SERVICE.PROCESS.SUPPORT_DESC")}
                  </p>
                </div>
              </div>
              <div className="max-md:hidden absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                3
              </div>
              <div className="max-md:hidden mt-8 md:mt-0 md:pl-12"></div>
            </div>

            {/* Step 4 */}
            <div className="relative grid md:grid-cols-2">
              <div className="hidden md:block md:pr-12"></div>
              <div className="max-md:hidden absolute left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-ml-4">
                4
              </div>
              <div className="  md:pl-12">
                <div className="max-w-md">
                  <div className="mb-2 text-xl font-bold">4. {t("CONSULTING_SERVICE.PROCESS.MONITOR_TITLE")}</div>
                  <p className="text-muted-foreground">
                    {t("CONSULTING_SERVICE.PROCESS.MONITOR_DESC")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consulting Packages */}
      <div id="packages" className="mb-20 scroll-mt-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("CONSULTING_SERVICE.PACKAGES.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {t("CONSULTING_SERVICE.PACKAGES.INTRO")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="relative overflow-hidden border-muted">
            <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
            <CardHeader>
              <CardTitle>{t("CONSULTING_SERVICE.PACKAGES.BASIC.TITLE")}</CardTitle>
              <CardDescription>{t("CONSULTING_SERVICE.PACKAGES.BASIC.DESC")}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$1,500</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.BASIC.LIST_1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.BASIC.LIST_2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.BASIC.LIST_3")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.BASIC.LIST_4")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.BASIC.LIST_5")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">{t("GET_STARTED")}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-primary">
            <div className="absolute inset-x-0 top-0 h-2 bg-primary"></div>
            <CardHeader>
              <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <CardTitle>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.TITLE")}</CardTitle>
              <CardDescription>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.DESC")}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$3,500</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.LIST_1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.LIST_2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.LIST_3")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.LIST_4")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.LIST_5")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.PROFESSIONAL.LIST_6")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">{t("GET_STARTED")}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-muted">
            <div className="absolute inset-x-0 top-0 h-2 bg-muted"></div>
            <CardHeader>
              <CardTitle>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.TITLE")}</CardTitle>
              <CardDescription>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.DESC")}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$7,500</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_3")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_4")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_5")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_6")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t("CONSULTING_SERVICE.PACKAGES.ENTERPRISE.LIST_7")}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/chat">{t("GET_STARTED")}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">{t("CONSULTING_SERVICE.PACKAGES.INFO")}</p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/chat">{t("CONSULTING_SERVICE.PACKAGES.BTN")}</Link>
          </Button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("CONSULTING_SERVICE.STORIES.TITLE")}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            {t("CONSULTING_SERVICE.STORIES.INTRO")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">AE</span>
                </div>
                <div>
                  <CardTitle className="text-base">Asia Exports Ltd.</CardTitle>
                  <CardDescription>{t("CONSULTING_SERVICE.STORIES.TYPE_1")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                {t("CONSULTING_SERVICE.STORIES.REVIEW_1")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">GT</span>
                </div>
                <div>
                  <CardTitle className="text-base">Global Tech Solutions</CardTitle>
                  <CardDescription>{t("CONSULTING_SERVICE.STORIES.TYPE_2")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                {t("CONSULTING_SERVICE.STORIES.REVIEW_2")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">SF</span>
                </div>
                <div>
                  <CardTitle className="text-base">Sunrise Foods</CardTitle>
                  <CardDescription>{t("CONSULTING_SERVICE.STORIES.TYPE_3")}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="italic text-muted-foreground">
                {t("CONSULTING_SERVICE.STORIES.REVIEW_3")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
        <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl ${locale == "my" && "leading-12"}`}>{t("CONSULTING_SERVICE.READY.TITLE")}</h2>
        <p className="mx-auto mt-4 max-w-[700px]">
          {t("CONSULTING_SERVICE.READY.DESC")}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link href="/chat">{t("CONSULTING_SERVICE.READY.BTN")}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary hover:bg-primary-foreground"
          >
            <Link href="/faq">{t("LEARN_MORE")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
