pages-dev-overlay-setup.js:77 ./src/components/navigation.tsx:6:1
Module not found: Can't resolve 'next-themes'
  4 | import Link from "next/link";
  5 | import { Moon, Sun } from "lucide-react";
> 6 | import { useTheme } from "next-themes";
    | ^
  7 |
  8 | import { Button } from "@/components/ui/button";
  9 | import {

https://nextjs.org/docs/messages/module-not-found
nextJsHandleConsoleError @ pages-dev-overlay-setup.js:77
pages-dev-overlay-setup.js:77 ./src/components/theme-provider.tsx:4:1
Module not found: Can't resolve 'next-themes'
  2 |
  3 | import * as React from "react";
> 4 | import { ThemeProvider as NextThemesProvider } from "next-themes";
    | ^
  5 | import { type ThemeProviderProps } from "next-themes/dist/types";
  6 |
  7 | export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

https://nextjs.org/docs/messages/module-not-found
nextJsHandleConsoleError @ pages-dev-overlay-setup.js:77
:3000/favicon.ico:1  Failed to load resource: the server responded with a status of 404 (Not Found)



Build Error

Module not found: Can't resolve 'next-themes'

./src/components/navigation.tsx (6:1)

Module not found: Can't resolve 'next-themes'
  4 | import Link from "next/link";
  5 | import { Moon, Sun } from "lucide-react";
> 6 | import { useTheme } from "next-themes";
    | ^
  7 |
  8 | import { Button } from "@/components/ui/button";
  9 | import {

https://nextjs.org/docs/messages/module-not-found