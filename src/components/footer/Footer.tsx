"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useLocale } from "next-intl"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Logo from "@/root/public/images/LogoAisi.png"

export default function Footer() {
  const locale = useLocale()

  const navItems = [
    { name: "Main", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const projectItems = [
    { name: "AISI Batumi", href: "/projects/batumi" },
    { name: "AISI Goderdzi", href: "/projects/goderdzi" },
  ]

  return (
    <footer className="relative w-full mt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Construction background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <Link href={`/${locale}`} className="inline-block mb-6">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="AISI Logo"
                className="w-32 h-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-6">
              AISI Development is a premier construction and development company
              specializing in creating exceptional residential and commercial
              spaces with innovative design and superior craftsmanship.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              >
                <Facebook size={18} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              >
                <Instagram size={18} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-medium mb-6 pb-2 border-b border-indigo-500/30">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-300 hover:text-indigo-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-medium mb-6 pb-2 border-b border-indigo-500/30">
              Our Projects
            </h3>
            <ul className="space-y-3">
              {projectItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-gray-300 hover:text-indigo-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white text-lg font-medium mb-6 pb-2 border-b border-indigo-500/30">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-indigo-400 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  123 Construction Avenue, Batumi, Georgia
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="text-indigo-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-300">+995 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="text-indigo-400 mr-3 flex-shrink-0"
                />
                <span className="text-gray-300">info@aisidevelopment.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-white text-lg font-medium mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white px-6 py-2 rounded-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-center text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AISI Development. All rights reserved.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-600"></div>
    </footer>
  );
}
