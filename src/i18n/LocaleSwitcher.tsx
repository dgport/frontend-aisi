"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "./routing";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { English, Georgian } from "@/components/svg";

type Locale = "en" | "ka";

const LanguageFlags = {
  en: () => <English className="h-6 w-6" />,
  ka: () => <Georgian className="h-6 w-6" />,
};

const languageNames: Record<Locale, string> = {
  en: "English",
  ka: "ქართული",
};

interface LocaleSwitcherProps {
  variant?: "mobile" | "desktop";
}

export default function LocaleSwitcher({
  variant = "desktop",
}: LocaleSwitcherProps) {
  const t = useTranslations("main");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const pathWithoutLocale = pathname.replace(
      new RegExp(`^/${currentLocale}`),
      ""
    );
    const searchParams = new URLSearchParams(window.location.search).toString();
    const queryString = searchParams ? `?${searchParams}` : "";
    const newPath = `/${newLocale}${pathWithoutLocale}${queryString}`;

    router.push(newPath);
    router.refresh();
  };

  const CurrentFlag = LanguageFlags[currentLocale];

  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-3 gap-2 w-auto">
        {(locales as unknown as Locale[]).map((locale) => {
          const Flag = LanguageFlags[locale];
          const isActive = locale === currentLocale;

          return (
            <Button
              key={locale}
              variant={isActive ? "default" : "outline"}
              className={`flex items-center justify-center gap-2 px-3 py-2 ${
                isActive
                  ? "bg-indigo-500/30 text-indigo-100 border border-indigo-400/40"
                  : "bg-black/20 text-white hover:bg-indigo-500/20 hover:text-indigo-100"
              }`}
              onClick={() => handleLocaleChange(locale)}
              disabled={isActive}
            >
              <Flag />

              <span className="text-sm font-medium">
                {locale.toUpperCase()}
              </span>
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex gap-2 items-center cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors duration-200">
          <CurrentFlag />
          <span className="md:hidden text-white">{t("changeLang")}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2 bg-black/80 backdrop-blur-lg border border-white/20">
        <div className="grid gap-1">
          {(locales as unknown as Locale[]).map((locale) => {
            const Flag = LanguageFlags[locale];
            return (
              <Button
                key={locale}
                variant="ghost"
                className={`justify-start gap-2 w-full ${
                  locale === currentLocale
                    ? "bg-indigo-500/20 text-indigo-200"
                    : "text-white hover:bg-indigo-500/10 hover:text-indigo-200"
                }`}
                onClick={() => handleLocaleChange(locale)}
                disabled={locale === currentLocale}
              >
                <Flag />
                <span>{languageNames[locale]}</span>
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
