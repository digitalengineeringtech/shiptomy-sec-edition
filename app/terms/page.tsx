'use client'
import { Separator } from "@/components/ui/separator"
import { useIntlApp } from "@/context/IntlProviderWrapper";
import { useTranslations } from "next-intl"

export default function TermsPage() {
  const t = useTranslations();
  const { locale, changeLanguage } = useIntlApp();
  return (
    <div className="container max-sm:px-5 mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className={`text-4xl font-bold tracking-tighter sm:text-5xl ${locale == "my" && "leading-14 max-sm:text-[29px] md:pb-3"}`}>{t("TERMS.TITLE")}</h1>
        <p className={`mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl ${locale == "my" && "leading-8 max-sm:leading-7"}`}>
          {t("TERMS.INTRO")}
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_1")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_1")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_2")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_2_1")}
            <br />
            <br />
            {t("TERMS.DESC_2_2")}
            <br />
            <br />
            {t("TERMS.DESC_2_3")}
            <br />
            <br />
            {t("TERMS.DESC_2_4")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_3")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_3_1")}
            <br />
            <br />{t("TERMS.DESC_3_2")}
            <br />{t("TERMS.DESC_3_3")}
            <br />{t("TERMS.DESC_3_4")}
            <br />
            <br />
            {t("TERMS.DESC_3_5")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_4")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_4_1")}
            <br />
            <br />
            {t("TERMS.DESC_4_2")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_5")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_5_1")}
            <br />
            <br />
            {t("TERMS.DESC_5_2")}
            <br />
            <br />
            {t("TERMS.DESC_5_3")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_6")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_6_1")}
            <br />
            <br />
            {t("TERMS.DESC_6_2")}
            <br />
            <br />
            {t("TERMS.DESC_6_3")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_7")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_7_1")}
            <br />
            <br />{t("TERMS.DESC_7_2")}
            <br />{t("TERMS.DESC_7_3")}
            <br />{t("TERMS.DESC_7_4")}
            <br />{t("TERMS.DESC_7_5")}
            <br />{t("TERMS.DESC_7_6")}
            <br />{t("TERMS.DESC_7_7")}
            <br />{t("TERMS.DESC_7_8")}
            <br />{t("TERMS.DESC_7_9")}
            <br />{t("TERMS.DESC_7_10")}
            <br />
            <br />
            {t("TERMS.DESC_7_11")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_8")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_8_1")}
            <br />
            <br />
            {t("TERMS.DESC_8_2")}
            <br />
            <br />
            {t("TERMS.DESC_8_3")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_9")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_9")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_10")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_10")}
          </p>
        </div>

        <div>
          <h2 className={`text-2xl font-bold ${locale == "my" && "leading-10"}`}>{t("TERMS.TERM_11")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_11")}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">{t("TERMS.TERM_12")}</h2>
          <Separator className="my-4" />
          <p className={`text-muted-foreground ${locale == "my" && "max-sm:text-[14px] leading-7"}`}>
            {t("TERMS.DESC_12")}
            <br />
            <br />
            Myanmar Express hub
            <br />
            {t("ADDRESS")}
            <br />
            {t("EMAIL")}: info@myanmarexpresshub.com
            <br />
            {t("PHONE")}: +95 9 123 456 789
          </p>
        </div>

        <div className="pt-4 text-center text-sm text-muted-foreground">
          <p>{t("TERMS.DATE")}</p>
        </div>
      </div>
    </div>
  )
}
