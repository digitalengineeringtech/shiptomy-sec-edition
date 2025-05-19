'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"



const Navbar = () => {

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
        <header className="sticky top-0 z-50 backdrop-blur-lg shadow-lg w-full h-[70px] flex justify-around items-center gap-3">
            <div>
                <Link href="/">
                    <Image src="/new-logo-transparent.png" alt="Myanmar Express Hub" width={200} height={10} />
                </Link>
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList >
                        {
                            routes.map((e, index) => {
                                if (e.name === "Service") {
                                    return (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuTrigger className="bg-transparent">{e.name}</NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[250px]">
                                                {serviceRoutes.map((i, ind) => {
                                                    return (
                                                        <NavigationMenuLink key={ind}>
                                                            <Link key={ind} href={i.path}>
                                                                {i.name}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    )
                                                })}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    )
                                } else {
                                    return (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuLink key={index} >
                                                <Link className="font-semibold text-[14px] " key={index} href={e.path} >
                                                    {e.name}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                }
                            })
                        }
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
        </header>
    )
}

export default Navbar