"use client"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-muted flex flex-col justify-center items-center pt-8 px-10">
      <div className="container grid gap-8 justify-around md:grid-cols-2 lg:grid-cols-4">
        <div className="cols-span-1">
          <Link href="/">
            <Image src="/MyanmarExpressHub_Logo.png" alt="Myanmar Express Hub" width={250} height={10} />
          </Link>
          <p className="text-sm text-muted-foreground mt-3">
            {t("FOOTER.DESC")}
          </p>
        </div>
        <div className="cols-span-1">
          <h3 className="mb-4 text-lg font-bold">{t("FOOTER.LINKS")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.HOME")}
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.SERVICE")}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.FAQ")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.TERMS")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="cols-span-1">
          <h3 className="mb-4 text-lg font-bold">{t("FOOTER.SERVICE")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/service/buy-for-me" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.BUY_FOR_ME")}
              </Link>
            </li>
            <li>
              <Link href="/service/consulting-service" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.SHIP_FOR_ME")}
              </Link>
            </li>
            <li>
              <Link href="/service/ship-for-me" className="text-muted-foreground hover:text-foreground">
                {t("FOOTER.CONSULTING_SERVICE")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="cols-span-1">
          <h3 className="mb-4 text-lg font-bold">{t("CONTACT_US")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t("ADDRESS")}</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+95 9 123 456 789</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@myanmarexpresshub.com</span>
            </li>
            <li className="mt-4 flex items-center gap-4">
              <Link href="https://www.facebook.com/myanmarexpresshub/" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t py-5 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Myanmar Express Hub. All rights reserved.</p>
      </div>
    </footer>
  )
}
