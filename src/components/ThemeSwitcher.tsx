// src/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

import {Switch} from "@nextui-org/react";
import {MoonIcon} from "@/components/ui/MoonIcon";
import {SunIcon} from "@/components/ui/SunIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
        <Switch
            defaultSelected = {theme === 'dark'}
            size="lg"
            onChange={(checked) => {
                setTheme(checked ? 'dark' : 'light');
              }}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                <SunIcon className={className} />
                ) : (
                <MoonIcon className={className} />
                )} />
        
    </div>
  )
};