// 'use client'
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
// import Image from "next/image"
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
// import Link from "next/link"



// const Navbar = () => {

//     const routes = [
//         { name: "Home", path: "/" },
//         { name: "Service", path: "/service" },
//         { name: "FAQ", path: "/faq" },
//         { name: "Terms & Conditions", path: "/terms" },
//         { name: "Chat With Us", path: "/chat" },
//     ]

//     const serviceRoutes = [
//         { name: "Buy For Me", path: "/service/buy-for-me" },
//         { name: "Ship for Me", path: "/service/ship-for-me" },
//         { name: "Consulting Service", path: "/service/consulting-service" },
//     ]

//     return (
//         <header className="sticky top-0 z-50 backdrop-blur-lg shadow-lg w-full h-[70px] flex justify-around items-center gap-3">
//             <div>
//                 <Link href="/">
//                     <Image src="/new-logo-transparent.png" alt="Myanmar Express Hub" width={200} height={10} />
//                 </Link>
//             </div>
//             <div>
//                 <NavigationMenu>
//                     <NavigationMenuList >
//                         {
//                             routes.map((e, index) => {
//                                 if (e.name === "Service") {
//                                     return (
//                                         <NavigationMenuItem key={index}>
//                                             <NavigationMenuTrigger className="bg-transparent">{e.name}</NavigationMenuTrigger>
//                                             <NavigationMenuContent className="!w-[250px]">
//                                                 {serviceRoutes.map((i, ind) => {
//                                                     return (
//                                                         <Link key={ind} href={i.path}>
//                                                             <NavigationMenuLink key={ind}>
//                                                                 {i.name}
//                                                             </NavigationMenuLink>
//                                                         </Link>
//                                                     )
//                                                 })}
//                                             </NavigationMenuContent>
//                                         </NavigationMenuItem>
//                                     )
//                                 } else {
//                                     return (
//                                         <NavigationMenuItem key={index}>
//                                             <Link className="font-semibold text-[14px] " key={index} href={e.path} >
//                                                 <NavigationMenuLink key={index} >
//                                                     {e.name}
//                                                 </NavigationMenuLink>
//                                             </Link>
//                                         </NavigationMenuItem>
//                                     )
//                                 }
//                             })
//                         }
//                     </NavigationMenuList>
//                 </NavigationMenu>

//             </div>
//         </header>
//     )
// }

// export default Navbar


"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion";

const Navbar = () => {
  const t = useTranslations();
  const [mobileOpen, setMobileOpen] = useState(false)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const routes = [
    { name: t("HEADER.HOME"), path: "/" },
    { name: t("HEADER.SERVICE"), path: "/service" },
    { name: t("HEADER.FAQ"), path: "/faq" },
    { name: t("HEADER.TERMS"), path: "/terms" },
    { name: t("HEADER.CHAT"), path: "/chat" },
  ]

  const serviceRoutes = [
    { name: t("HEADER.BUY_FOR_ME"), path: "/service/buy-for-me" },
    { name: t("HEADER.SHIP_FOR_ME"), path: "/service/ship-for-me" },
    { name: t("HEADER.CONSULTING_SERVICE"), path: "/service/consulting-service" },
  ]

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  // 🚫 Avoid rendering before mount (safe hydration)
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-[10000] backdrop-blur-md shadow-md w-full h-[70px] flex lg:justify-around justify-between items-center px-6">
      <div>
        <Link href="/">
          <Image src="/MyanmarExpressHub_Logo.png" alt="Myanmar Express Hub" width={180} height={50} className="max-sm:pr-5" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((e, index) => {
              if (e.name === t("HEADER.SERVICE")) {
                return (
                  // <NavigationMenuItem key={index}>
                  //   <NavigationMenuTrigger className="bg-transparent font-semibold">{e.name}</NavigationMenuTrigger>
                  //   <NavigationMenuContent className="!w-[250px]">
                  //     {serviceRoutes.map((i, ind) => (
                  //       <Link key={ind} href={i.path}>
                  //         <NavigationMenuLink>{i.name}</NavigationMenuLink>
                  //       </Link>
                  //     ))}
                  //   </NavigationMenuContent>
                  // </NavigationMenuItem>
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="bg-transparent font-semibold">{e.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[250px]">
                      {serviceRoutes.map((i, ind) => (
                        <NavigationMenuLink asChild key={ind}>
                          <Link href={i.path}>{i.name}</Link>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              } else {
                return (
                  // <NavigationMenuItem key={index}>
                  //   <Link className="font-semibold text-[14px]" href={e.path}>
                  //     <NavigationMenuLink>{e.name}</NavigationMenuLink>
                  //   </Link>
                  // </NavigationMenuItem>
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <Link href={e.path} className="font-semibold text-[14px]">
                        {e.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-3 justify-center items-center">

        <LanguageSwitcher />

        {/* Mobile Burger Icon */}
        <div className="lg:hidden pt-2">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>
      {/* Mobile Menu Drawer */}
      {/* {mobileOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 z-50">
          {routes.map((e, index) => {
            if (e.name === t("HEADER.SERVICE")) {
              return (
                <div key={index}>
                  <div className="font-semibold">{e.name}</div>
                  <div className="flex flex-col gap-2 pl-4">
                    {serviceRoutes.map((i, ind) => (
                      <Link key={ind} href={i.path} onClick={() => setMobileOpen(false)} className="text-sm">
                        {i.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            } else {
              return (
                <Link key={index} href={e.path} onClick={() => setMobileOpen(false)} className="font-semibold">
                  {e.name}
                </Link>
              )
            }
          })}
        </div>
      )} */}

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          variants={mobileMenuVariants}
          className="absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 z-50"
        >
          {routes.map((e, index) => {
            if (e.name === t("HEADER.SERVICE")) {
              return (
                <div key={index}>
                  <div className="font-semibold">{e.name}</div>
                  <div className="flex flex-col gap-2 pl-4">
                    {serviceRoutes.map((i, ind) => (
                      <Link
                        key={ind}
                        href={i.path}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm"
                      >
                        {i.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={e.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold"
                >
                  {e.name}
                </Link>
              );
            }
          })}
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
