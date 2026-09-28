"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Heart,
  History,
  Home,
  Menu as MenuIcon,
  ScrollText,
  Star,
  Users,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Accueil", path: "/", icon: Home },
  { name: "Coran", path: "/coran", icon: BookOpen },
  { name: "Récitateurs", path: "/recitateurs", icon: Users },
  { name: "Hadiths", path: "/hadiths", icon: ScrollText },
  { name: "Fiqh Malikite", path: "/fiqh-malikite", icon: Star },
  { name: "Taṣawwuf", path: "/tassawuf", icon: Heart },
  { name: "Tijāniyya", path: "/tijaniyya", icon: Star },
  { name: "Notre histoire", path: "/notre-histoire", icon: History },
];

export default function Menu() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#ded7c7]/80 bg-[#fcfcfa]/95 shadow-[0_4px_20px_rgba(38,61,53,0.035)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-[72px] items-center justify-between lg:h-20">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#d8ccb0] bg-white shadow-sm transition duration-300 group-hover:shadow-md sm:h-12 sm:w-12">
                <Image
                  src="/images/logo.png"
                  alt="Parlons Islam"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold tracking-tight text-[#263d35]">
                  Parlons Islam
                </h1>

                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9a8659]">
                  Science · Spiritualité · Transmission
                </p>
              </div>
            </Link>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden items-center gap-0.5 lg:flex"
          >
            {links.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`group relative rounded-xl px-3 py-2 text-[13px] font-medium transition duration-300 ${
                    active
                      ? "text-[#263d35]"
                      : "text-[#46534d] hover:bg-[#f3efe4] hover:text-[#263d35]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-[#b59a5b] transition-all duration-300 ${
                      active
                        ? "w-1/2"
                        : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </Link>
              );
            })}
          </motion.nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8ccb0] bg-white text-[#263d35] shadow-sm transition duration-300 hover:bg-[#f3efe4] lg:hidden"
          >
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={21} /> : <MenuIcon size={21} />}
            </motion.span>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <motion.div
          initial={false}
          animate={{
            height: mobileOpen ? "auto" : 0,
            opacity: mobileOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.28 },
            opacity: { duration: 0.2 },
          }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="border-t border-[#ded7c7] py-4">
            <div className="grid gap-1 sm:grid-cols-2">
              {links.map((link, index) => {
                const Icon = link.icon;
                const active = isActive(link.path);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{
                      opacity: mobileOpen ? 1 : 0,
                      y: mobileOpen ? 0 : -5,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: mobileOpen ? index * 0.025 : 0,
                    }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition duration-300 ${
                        active
                          ? "bg-[#f3efe4] text-[#263d35]"
                          : "text-[#46534d] hover:bg-[#f3efe4] hover:text-[#263d35]"
                      }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className={
                          active
                            ? "text-[#80683e]"
                            : "text-[#9a8659]"
                        }
                      />

                      <span>{link.name}</span>

                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#b59a5b]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 border-t border-[#ded7c7] pt-4 text-[10px] font-medium tracking-[0.16em] text-[#9a8659]">
              <span className="h-px w-7 bg-[#c5ae73]" />

              <span dir="rtl" lang="ar">
                العلم · العمل · الإحسان
              </span>

              <span className="h-px w-7 bg-[#c5ae73]" />
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}