import Link from "next/link"
import NavMenuLinks from "@/components/NavMenuLinks";

export default function NavMenu() {
    return (
        <>
            <div className="bg-level-2">
                <nav className="container px-5 py-8 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="text-xl font-bold text-accent hover:text-accent md:text-2xl"
                        >
                            Blog
                        </Link>

                        {/*@click="showMenu = !showMenu"*/}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <NavMenuLinks />

                    {/*  <li>*/}
                    {/*    <Switcher/>*/}
                    {/*  </li>*/}
                    {/*</ul>*/}
                </nav>
            </div>
        </>
    )
}

// <script setup lang="ts">
// import Switcher from "~/components/Switcher.vue";
//
// ]);
// const showMenu = ref(false);
// </script>
