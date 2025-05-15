"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "@/use-media-query";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Logo from "@/root/public/images/LogoAisi.png";
import Image from "next/image";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  const navItems = [
    { name: "Main", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return (
      pathname === `/${locale}${href}` ||
      (href === "/" && pathname === `/${locale}`)
    );
  };

  return (
    <header className="absolute w-full flex flex-col items-center z-50 px-6 lg:px-16 pt-4">
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
          <Image
            src={Logo}
            alt="AISI Logo"
            className=" w-28 md:w-36 h-auto cursor-pointer md:ml-10"
          />
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
                  className="absolute top-20 left-0 right-0 bg-black/80 backdrop-blur-md rounded-b-xl p-4 flex flex-col gap-4 border-t border-white/20"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={`/${locale}${item.href}`}
                        className="text-white text-lg block py-2 hover:text-indigo-200 relative"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                        <div className="absolute left-0 bottom-0 w-full h-0.5">
                          <div
                            className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-300 transition-all duration-300 ${
                              isActive(item.href)
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          />
                        </div>
                      </Link>
                    </motion.div>
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
                          isActive(item.href) ? "w-full" : "w-0"
                        } group-hover:w-full`}
                      />
                    </div>
                  </Link>
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
          className="absolute bottom-0 left-0 right-0 w-full h-px bg-indigo-100 "
        />
      </motion.div>
    </header>
  );
}
