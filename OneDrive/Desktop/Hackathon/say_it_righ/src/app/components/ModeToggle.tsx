"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    function toggleButton() {
        if (resolvedTheme === "light") {
            setTheme("dark");
        }
        if (resolvedTheme === "dark") {
            setTheme("light")
        }
    }

    return (
        <>
            <div className="toggle-container flex w-[70px] justify-between items-center">
                {/* click is on the icon 
                while switching click on icon and not the button */}
                {/* <button>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")} />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")} />
                    <span className="sr-only">Toggle theme</span>
                </button> */}
                <Button className="border-none" variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")} />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
                {/* light and dark button */}
                <div
                    onClick={toggleButton}
                    className={`w-[40px] h-[20px] bg-gray-400 rounded-full flex justify-start`}
                >
                    <div className={`w-[20px] h-[20px] rounded-full bg-red-500 justify-center transition-all ${resolvedTheme === "dark" ? "transform translate-x-[20px]" : ""
                        }`}></div>
                </div>
            </div>
        </>
    )
}

