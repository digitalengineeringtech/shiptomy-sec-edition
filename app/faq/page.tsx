'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useIntlApp } from "@/context/IntlProviderWrapper"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function FAQPage() {
  const t = useTranslations();
    const { locale, changeLanguage } = useIntlApp();
  return (
    <div className="container max-sm:px-5 mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className={`text-4xl font-bold tracking-tighter lg:text-5xl ${locale == "my" && "leading-12 max-sm:text-3xl md:pb-3"}`}>{t("FAQ.TITLE")}</h1>
        <p className={`mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl ${locale == "my" && "leading-8 max-sm:leading-7"}`}>
          {t("FAQ.INTRO")}
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_1")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_1")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_2")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_2")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_3")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_3")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_4")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_4")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_5")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
             {t("FAQ.ANS_5")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_6")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_6")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_7")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_7")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_8")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_8")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_9")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_9")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_10")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_10")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_11")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_11")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className={`${locale == "my" && "font-semibold"}`}>{t("FAQ.QUEST_12")}</AccordionTrigger>
            <AccordionContent className="text-justify leading-7">
              {t("FAQ.ANS_12")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className={`mb-6 text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("FAQ.INFO")}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary hover:scale-105 active:scale-95 duration-200">
            <Link href="/chat">{t("FAQ.BTN")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
