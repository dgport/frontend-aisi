"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Logo from "@/root/public/images/AisiLogo1.png";
import Image from "next/image";

export default function Header() {
  const t = useTranslations("main");
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsAdmin(pathname.includes("/admin"));
  }, [pathname]);

  const navItems = [
    { name: t("main"), href: "/" },
    {
      name: t("projects"),
      href: "/projects",
      subItems: [
        { name: t("aisiBatumi"), href: "/aisi-batumi" },
        { name: t("aisiGoderdzi"), href: "/aisi-goderdzi" },
      ],
    },
    { name: t("contact"), href: "/contact" },
  ];

  const isActive = (href: string) => {
    return (
      pathname === `/${locale}${href}` ||
      (href === "/" && pathname === `/${locale}`) ||
      (href === "/projects" && pathname.startsWith(`/${locale}/projects`))
    );
  };

  const isSubItemActive = (href: string) => {
    return pathname === `/${locale}${href}`;
  };

  const headerBgClass = isAdmin ? "bg-slate-900" : "bg-transparent";
  if (!isMounted) {
    return (
      <header
        className={`absolute w-full flex flex-col items-center z-50 px-6 lg:px-16 pt-4 ${headerBgClass}`}
      >
        <div className="w-full h-16 lg:h-24 flex items-center justify-between relative">
          <div>
            <Link href={`/${locale}`}>
              <Image
                src={Logo || "/placeholder.svg"}
                alt="AISI Logo"
                className="w-12 md:w-18 h-auto cursor-pointer md:ml-10"
              />
            </Link>
          </div>
          <div className="opacity-0">
            <LocaleSwitcher />
          </div>
          <div className="absolute bottom-0 left-0 right-0 w-full h-px bg-indigo-100" />
        </div>
      </header>
    );
  }

  return (
    <header
      className={`absolute w-full flex flex-col items-center z-50 px-6 lg:px-16 pt-4 ${headerBgClass}`}
    >
      <div className="w-full h-16 lg:h-24 flex items-center justify-between relative">
        <div>
          <Link href={`/${locale}`}>
            <Image
              src={Logo || "/placeholder.svg"}
              alt="AISI Logo"
              className="w-12 md:w-18 h-auto cursor-pointer md:ml-10"
            />
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-60 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setIsMenuOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-20 left-4 right-4 z-50 ${
                      isAdmin
                        ? "bg-gradient-to-br from-slate-800/95 to-slate-900/95"
                        : "bg-gradient-to-br from-black/90 to-gray-900/90"
                    } backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden`}
                  >
                    <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                    <div className="p-6 space-y-2">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          {item.subItems ? (
                            <div className="space-y-2">
                              <button
                                onClick={() =>
                                  setIsProjectsOpen(!isProjectsOpen)
                                }
                                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                                  isActive(item.href)
                                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 shadow-lg shadow-indigo-500/10"
                                    : "bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 hover:border hover:border-indigo-400/20"
                                } border border-transparent`}
                                aria-expanded={isProjectsOpen}
                              >
                                <span
                                  className={`text-white text-lg font-medium transition-colors duration-200 ${
                                    isActive(item.href)
                                      ? "text-indigo-200"
                                      : "hover:text-indigo-200"
                                  }`}
                                >
                                  {item.name}
                                </span>

                                <div
                                  className="text-indigo-300 transition-transform duration-300"
                                  style={{
                                    transform: isProjectsOpen
                                      ? "rotate(90deg)"
                                      : "rotate(0deg)",
                                  }}
                                >
                                  <ChevronRight size={20} />
                                </div>
                              </button>

                              <AnimatePresence>
                                {isProjectsOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-4 space-y-2">
                                      {item.subItems.map((subItem) => (
                                        <div key={subItem.name}>
                                          <Link
                                            href={`/${locale}${subItem.href}`}
                                            onClick={() => {
                                              setIsMenuOpen(false);
                                              setIsProjectsOpen(false);
                                            }}
                                            className={`block relative p-4 rounded-lg transition-all duration-200 ${
                                              isSubItemActive(subItem.href)
                                                ? "bg-gradient-to-r from-indigo-500/25 to-purple-500/25 border border-indigo-400/40 shadow-md"
                                                : "bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500/15 hover:to-purple-500/15 hover:border hover:border-indigo-400/25"
                                            } border border-transparent`}
                                          >
                                            {isSubItemActive(subItem.href) && (
                                              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                                            )}

                                            <span
                                              className={`text-white text-base transition-colors duration-200 ${
                                                isSubItemActive(subItem.href)
                                                  ? "font-medium text-indigo-100 ml-4"
                                                  : "hover:text-indigo-200"
                                              }`}
                                            >
                                              {subItem.name}
                                            </span>
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <Link
                              href={`/${locale}${item.href}`}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block p-4 rounded-xl transition-all duration-300 ${
                                isActive(item.href)
                                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 shadow-lg shadow-indigo-500/10"
                                  : "bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 hover:border hover:border-indigo-400/20"
                              } border border-transparent`}
                            >
                              <span
                                className={`text-white text-lg font-medium transition-colors duration-200 ${
                                  isActive(item.href)
                                    ? "text-indigo-200"
                                    : "hover:text-indigo-200"
                                }`}
                              >
                                {item.name}
                              </span>
                            </Link>
                          )}
                        </div>
                      ))}
                      <div className="pt-4 mt-4 border-t border-white/10">
                        <div className="bg-white/5 flex items-center gap-1 rounded-xl p-4 backdrop-blur-sm">
                          <LocaleSwitcher />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex items-center space-x-4 lg:space-x-8">
            <nav className="space-x-4 lg:space-x-6 xl:space-x-10">
              {navItems.map((item) => (
                <span key={item.name} className="relative inline-block">
                  {item.subItems ? (
                    <div className="relative inline-block">
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className={`text-white text-base lg:text-lg hover:text-gray-300 group inline-flex items-center pb-1 cursor-pointer ${
                          isActive(item.href) ? "font-medium" : ""
                        }`}
                        aria-expanded={isProjectsOpen}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-300 ${
                            isProjectsOpen ? "rotate-180" : ""
                          }`}
                        />
                        <div className="absolute left-0 bottom-0 w-full h-0.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                              isActive(item.href)
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          />
                        </div>
                      </button>
                      <AnimatePresence>
                        {isProjectsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute left-0 mt-2 w-48 ${
                              isAdmin ? "bg-slate-800/95" : "bg-black/70"
                            } backdrop-blur-lg rounded-lg py-2 shadow-xl z-10 border border-white/20`}
                          >
                            {item.subItems.map((subItem) => (
                              <div
                                key={subItem.name}
                                className="relative mx-2 my-1"
                              >
                                <Link
                                  href={`/${locale}${subItem.href}`}
                                  className={`block px-3 py-2.5 rounded-md text-sm transition-all duration-200 group relative overflow-hidden ${
                                    isSubItemActive(subItem.href)
                                      ? "bg-indigo-500/20 text-indigo-200 font-medium border border-indigo-400/30"
                                      : "text-white hover:bg-indigo-500/10 hover:text-indigo-200"
                                  }`}
                                  onClick={() => setIsProjectsOpen(false)}
                                >
                                  <span className="relative z-10">
                                    {subItem.name}
                                  </span>

                                  {isSubItemActive(subItem.href) && (
                                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-indigo-600" />
                                  )}
                                </Link>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={`/${locale}${item.href}`}
                      className={`text-white text-base lg:text-lg hover:text-gray-300 group inline-block pb-1 ${
                        isActive(item.href) ? "font-medium" : ""
                      }`}
                    >
                      {item.name}
                      <div className="absolute left-0 bottom-0 w-full h-0.5 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                            isActive(item.href)
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }`}
                        />
                      </div>
                    </Link>
                  )}
                </span>
              ))}
            </nav>
            <div>
              <LocaleSwitcher />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 w-full h-px bg-indigo-100" />
      </div>
    </header>
  );
}
