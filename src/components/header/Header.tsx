"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/use-media-query";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Logo from "@/root/public/images/AisiLogo1.png";
import Image from "next/image";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the current path includes 'admin'
    setIsAdmin(pathname.includes("/admin"));
  }, [pathname]);

  const navItems = [
    { name: "Main", href: "/" },
    {
      name: "Projects",
      href: "/projects",
      subItems: [
        { name: "AISI Batumi", href: "/aisi-batumi" },
        { name: "AISI Goderdzi", href: "/aisi-goderdzi" },
      ],
    },
    { name: "Contact", href: "/contact" },
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

  // Background styling based on admin status
  const headerBgClass = isAdmin
    ? "bg-slate-900" // Solid background for admin pages
    : "bg-transparent"; // Transparent for regular pages

  return (
    <header
      className={`absolute w-full flex flex-col items-center z-50 px-6 lg:px-16 pt-4 ${headerBgClass}`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-16 lg:h-20 flex items-center justify-between relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href={`/${locale}`}>
            <Image
              src={Logo || "/placeholder.svg"}
              alt="AISI Logo"
              className="w-18  h-auto cursor-pointer md:ml-10"
            />
          </Link>
        </motion.div>
        {isMobile ? (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-20 left-0 right-0 ${
                    isAdmin ? "bg-slate-800" : "bg-black/80"
                  } backdrop-blur-md rounded-b-xl p-4 flex flex-col gap-4 border-t border-white/20`}
                >
                  {navItems.map((item, index) => (
                    <div key={item.name}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        {item.subItems ? (
                          <div className="relative">
                            <button
                              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                              className={`text-white text-lg flex items-center w-full py-2 hover:text-indigo-200 cursor-pointer ${
                                isActive(item.href) ? "font-medium" : ""
                              }`}
                            >
                              {item.name}
                              <ChevronDown
                                size={16}
                                className={`ml-1 transition-transform duration-300 ${
                                  isProjectsOpen ? "rotate-180" : ""
                                }`}
                              />
                              <div className="absolute left-0 bottom-0 w-full h-0.5">
                                <div
                                  className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                                    isActive(item.href) ? "w-full" : "w-0"
                                  }`}
                                />
                              </div>
                            </button>
                            <AnimatePresence>
                              {isProjectsOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="pl-4 mt-2 space-y-2"
                                >
                                  {item.subItems.map((subItem) => (
                                    <motion.div
                                      key={subItem.name}
                                      initial={{ opacity: 0, x: -5 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="relative bg-white/5 backdrop-blur-md rounded-md px-3 py-2 hover:bg-white/10 transition-colors duration-200"
                                    >
                                      <Link
                                        href={`/${locale}${subItem.href}`}
                                        className={`text-white text-base block hover:text-indigo-200 ${
                                          isSubItemActive(subItem.href)
                                            ? "font-medium"
                                            : ""
                                        }`}
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setIsProjectsOpen(false);
                                        }}
                                      >
                                        {subItem.name}
                                        <div className="absolute left-0 bottom-0 w-full h-0.5">
                                          <div
                                            className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                                              isSubItemActive(subItem.href)
                                                ? "w-full"
                                                : "w-0 hover:w-full"
                                            }`}
                                          />
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={`/${locale}${item.href}`}
                            className={`text-white text-lg block py-2 hover:text-indigo-200 relative ${
                              isActive(item.href) ? "font-medium" : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                            <div className="absolute left-0 bottom-0 w-full h-0.5">
                              <div
                                className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                                  isActive(item.href)
                                    ? "w-full"
                                    : "w-0 hover:w-full"
                                }`}
                              />
                            </div>
                          </Link>
                        )}
                      </motion.div>
                    </div>
                  ))}
                  <LocaleSwitcher />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex items-center space-x-4 lg:space-x-8">
            <nav className="space-x-4 lg:space-x-6 xl:space-x-10">
              {navItems.map((item, index) => (
                <motion.span
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="relative inline-block"
                >
                  {item.subItems ? (
                    <div className="relative inline-block">
                      <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className={`text-white text-base lg:text-lg hover:text-gray-300 group inline-flex items-center pb-1 cursor-pointer ${
                          isActive(item.href) ? "font-medium" : ""
                        }`}
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
                              isAdmin ? "bg-slate-800" : "bg-black/60"
                            } backdrop-blur-lg rounded-lg py-2 shadow-xl z-10 border border-white/20`}
                          >
                            {item.subItems.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="relative px-4 py-2 hover:bg-white/10 transition-colors duration-200"
                              >
                                <Link
                                  href={`/${locale}${subItem.href}`}
                                  className={`text-white text-sm block hover:text-indigo-200 relative ${
                                    isSubItemActive(subItem.href)
                                      ? "font-medium"
                                      : ""
                                  }`}
                                  onClick={() => setIsProjectsOpen(false)}
                                >
                                  {subItem.name}
                                  <div className="absolute left-0 bottom-0 w-full h-0.5">
                                    <div
                                      className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                                        isSubItemActive(subItem.href)
                                          ? "w-full"
                                          : "w-0 hover:w-full"
                                      }`}
                                    />
                                  </div>
                                </Link>
                              </motion.div>
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
                </motion.span>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <LocaleSwitcher />
            </motion.div>
          </div>
        )}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 w-full h-px bg-indigo-100"
        />
      </motion.div>
    </header>
  );
}