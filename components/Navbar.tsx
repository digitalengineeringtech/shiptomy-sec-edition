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
import { useState } from "react"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const routes = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "FAQ", path: "/faq" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Chat With Us", path: "/chat" },
  ]

  const serviceRoutes = [
    { name: "Buy For Me", path: "/service/buy-for-me" },
    { name: "Ship for Me", path: "/service/ship-for-me" },
    { name: "Consulting Service", path: "/service/consulting-service" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg shadow-lg w-full h-[70px] flex md:justify-around justify-between items-center px-6">
      <div>
        <Link href="/">
          <Image src="/new-logo-transparent.png" alt="Myanmar Express Hub" width={180} height={50} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map((e, index) => {
              if (e.name === "Service") {
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="bg-transparent">{e.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[250px]">
                      {serviceRoutes.map((i, ind) => (
                        <Link key={ind} href={i.path}>
                          <NavigationMenuLink>{i.name}</NavigationMenuLink>
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              } else {
                return (
                  <NavigationMenuItem key={index}>
                    <Link className="font-semibold text-[14px]" href={e.path}>
                      <NavigationMenuLink>{e.name}</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 z-50">
          {routes.map((e, index) => {
            if (e.name === "Service") {
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
      )}
    </header>
  )
}

export default Navbar
