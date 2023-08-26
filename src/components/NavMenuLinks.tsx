import Link from "next/link"
import React from "react";

export default function NavMenuLinks() {
    const navItems = [
        {
            label: "Admin",
            route: "/admin",
        }
    ]

    const links = navItems.map(navItem => {
        return (
            <li key={navItem.label}>
                <Link
                    href={navItem.route}
                    className="text-sub hover:text-primary block md:inline-block mt-4 md:mt-0 mr-2 p-3 px-5 md:rounded-full text-sm no-underline uppercase transition-colors duration-300"
                >
                    {navItem.label}
                </Link>
            </li>
        )
    })

    return (
        <>
            <ul
                className="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
            >
                {links}
            </ul>
        </>
    )
}

{/*  <li>*/}
{/*    <Switcher/>*/}
{/*  </li>*/}
{/*</ul>*/}

{/*// <script setup lang="ts">*/}
{/*// import Switcher from "~/components/Switcher.vue";*/}
{/*//*/}
{/*// ]);*/}
{/*// const showMenu = ref(false);*/}
{/*// </script>*/}
