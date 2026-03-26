"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { NAV_LINKS, whatsappUrl, WHATSAPP_TRIAL_MESSAGE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="lg:hidden" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 text-foreground rounded-[var(--radius-sm)] hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors cursor-pointer"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 z-50"
            >
              <div className="mx-2 mt-2 rounded-2xl bg-card/95 backdrop-blur-md shadow-xl shadow-black/20 ring-1 ring-border">
                <nav className="flex flex-col p-3" aria-label="Menu mobile">
                  {NAV_LINKS.map((link) => {
                    const isAnchor = link.href.includes("#");
                    const isActive = !isAnchor && pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between px-3.5 py-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-primary/15 text-foreground"
                            : "text-muted hover:text-foreground hover:bg-surface"
                        }`}
                      >
                        <span className="font-medium">{link.label}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive
                              ? "text-primary translate-x-0.5"
                              : "text-muted/50 group-hover:translate-x-0.5"
                          }`}
                        />
                      </Link>
                    );
                  })}
                  <div className="pt-3 mt-2 border-t border-border">
                    <Button
                      href={whatsappUrl(WHATSAPP_TRIAL_MESSAGE)}
                      className="w-full"
                    >
                      Agendar aula experimental
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
