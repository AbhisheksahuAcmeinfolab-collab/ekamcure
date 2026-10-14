"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Search, X, Sparkles } from "lucide-react";
import imgLogo from "../assets/newimage/Ekam-logo-300x133.webp";

// All treatments configured according to your folder structure
const treatmentsList = [
  { name: "Prostate Cancer Treatment", href: "/treatments/best-prostate-cancer-treatment-india", keywords: ["prostate", "cancer"] },
  { name: "Spine Surgery", href: "/treatments/best-spine-surgery-in-india", keywords: ["spine", "back", "surgery"] },
  { name: "Breast Cancer Treatment", href: "/treatments/breast-cancer-treatment-in-india", keywords: ["breast", "cancer"] },
  { name: "Cornea Transplant Surgery", href: "/treatments/eye-care/cornea-transplant-surgery-in-india", keywords: ["eye", "cornea", "transplant", "eye-care"] },
  { name: "Laser Cataract Surgery", href: "/treatments/eye-care/laser-cataract-surgery-in-india", keywords: ["eye", "cataract", "laser", "eye-care"] },
  { name: "Glaucoma Surgery", href: "/treatments/glaucoma-surgery-in-india-for-international-patients", keywords: ["glaucoma", "eye"] },
  { name: "Heart Valve Surgery", href: "/treatments/heart-valve-surgery-india", keywords: ["heart", "valve", "cardiac"] },
  { name: "Hip Replacement Surgery", href: "/treatments/hip-replacement-surgery-in-india", keywords: ["hip", "replacement", "orthopedic"] },
  { name: "Kidney Transplant", href: "/treatments/kidney-transplant-in-india", keywords: ["kidney", "transplant", "renal"] },
  { name: "Knee Replacement Surgery", href: "/treatments/knee-replacement-surgery-in-india", keywords: ["knee", "replacement", "orthopedic"] },
  { name: "Superficial Parotidectomy Surgery", href: "/treatments/superficial-parotidectomy-surgery-india", keywords: ["parotidectomy", "head", "neck"] },
  { name: "Bone Marrow Transplant", href: "/treatments/transplant/bone-marrow-transplant-in-india", keywords: ["bone marrow", "transplant", "cancer"] },
  { name: "IVF Treatment", href: "/ivf-treatments-in-india", keywords: ["ivf", "fertility", "infertility", "baby"] },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        {
          name: "Medical Visa for Treatment in India",
          href: "/services/medical-visa-for-treatment-in-india",
        },
      ],
    },
    {
      name: "Treatments",
      href: "/treatments",
      submenu: [
        {
          name: "Cost of Treatment",
          href: "/cost-of-treatment",
        },
      ],
    },
    {
      name: "Top Hospitals",
      href: "/top-hospitals",
      submenu: [
        {
          name: "Top 10 Hospitals in India 2026",
          href: "/top-hospitals/top-10-hospitals-india-for-international-patients",
        },
      ],
    },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Video Gallery", href: "/video-gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Handle Search Input Change
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const query = searchQuery.toLowerCase().trim();
      const filtered = treatmentsList.filter((treatment) => {
        const titleMatch = treatment.name.toLowerCase().includes(query);
        const keywordMatch = treatment.keywords.some((kw) => kw.includes(query));
        return titleMatch || keywordMatch;
      });
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  // Click Outside Listener to Close Search Dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut (CTRL + K) to focus search bar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectTreatment = (href) => {
    router.push(href);
    setSearchQuery("");
    setIsSearchFocused(false);
    setIsMobileSearchOpen(false);
  };

  const toggleMobileSubmenu = (name) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  return (
    <nav className="menu-bar bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
        <div className="flex items-center justify-between h-14 md:h-16 gap-6">
          
          {/* ---------- Desktop View (Starting directly with Home) ---------- */}
          <div className="hidden xl:flex items-center space-x-6 xl:space-x-7 flex-shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              return (
                <div key={item.name} className="relative group py-4">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 font-semibold transition-all duration-200 text-[14px] xl:text-[15px] ${
                      isActive
                        ? "text-[#053161] font-bold"
                        : "text-gray-700 hover:text-[#053161]"
                    }`}
                  >
                    {item.name}
                    {hasSubmenu && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gray-500" />
                    )}
                  </Link>

                  {hasSubmenu && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-50 animate-fadeIn">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#053161] font-medium transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ---------- Ultra Premium Desktop Search Bar (Right Side) ---------- */}
          <div className="hidden xl:flex items-center gap-4 relative flex-1 justify-end" ref={searchRef}>
            <div className="relative w-72 lg:w-80 xl:w-96 transition-all duration-300">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search treatment (e.g. IVF, Kidney, Eye Care)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className={`w-full pl-10 pr-16 py-2 text-sm bg-gray-50/80 border rounded-full text-gray-800 placeholder-gray-400 transition-all shadow-sm ${
                  isSearchFocused
                    ? "bg-white border-[#053161] ring-4 ring-[#053161]/10 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />
              <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${
                isSearchFocused ? "text-[#053161]" : "text-gray-400"
              }`} />
              
              {/* Shortcut badge or Clear button */}
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-100"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-gray-400 bg-gray-200/60 px-1.5 py-0.5 rounded border border-gray-300/50 pointer-events-none hidden lg:inline-block">
                  ⌘K
                </span>
              )}
            </div>

            {/* Desktop Search Results Dropdown */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute right-0 top-full mt-2 w-96 bg-white border border-gray-100 shadow-2xl rounded-2xl py-2 z-50 max-h-80 overflow-y-auto divide-y divide-gray-50 animate-fadeIn">
                <div className="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Treatments Found</span>
                  <span className="bg-blue-50 text-[#053161] px-2 py-0.5 rounded-full text-[10px]">
                    {searchResults.length} Results
                  </span>
                </div>
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleSelectTreatment(item.href)}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-white hover:text-[#053161] font-medium transition flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-cyan-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-xs text-[#053161] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                        View →
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-gray-500 text-center">
                    No matching treatment found.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ---------- Mobile Header Bar ---------- */}
          <div className="flex xl:hidden justify-between items-center w-full py-2">
            {/* Center Ekam Logo */}
            <Link href="/" className="flex justify-start">
              <Image
                src={imgLogo}
                alt="Ekam Logo"
                width={110}
                height={45}
                className="object-contain"
                priority
              />
            </Link>

            {/* Right Mobile Actions (Search + Menu) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 text-gray-700 hover:text-[#053161] rounded-full hover:bg-gray-100"
                aria-label="Open Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 text-gray-800 hover:text-[#053161] focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ---------- Mobile Overlay Search Drawer ---------- */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 xl:hidden flex flex-col p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-4 shadow-xl w-full max-w-md mx-auto relative">
            <div className="flex items-center justify-between pb-3 border-b mb-3">
              <span className="font-bold text-[#053161] flex items-center gap-1.5">
                <Search className="w-4 h-4 text-[#053161]" />
                Search Treatment
              </span>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="p-1 text-gray-500 hover:text-red-500 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative mb-3">
              <input
                type="text"
                placeholder="e.g. Eye Care, IVF, Kidney..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-8 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#053161]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {searchQuery.trim().length > 0 && (
              <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleSelectTreatment(item.href)}
                      className="w-full text-left py-2.5 px-2 text-sm text-gray-800 hover:text-[#053161] font-medium flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-blue-600 font-semibold">View →</span>
                    </button>
                  ))
                ) : (
                  <div className="py-4 text-center text-sm text-gray-500">
                    No treatment found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ---------- Mobile Side Drawer (Navigation) ---------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 xl:hidden transition-opacity"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <Image
            src={imgLogo}
            alt="Ekam Logo"
            width={100}
            height={40}
            className="object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 hover:text-red-500 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {navItems.map((item) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isSubOpen = activeMobileSubmenu === item.name;

            return (
              <div key={item.name} className="border-b border-gray-100 last:border-none">
                <div className="flex items-center justify-between py-3">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-semibold text-gray-800 hover:text-[#053161] text-base"
                  >
                    {item.name}
                  </Link>
                  {hasSubmenu && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="p-1 text-gray-500 hover:text-[#053161]"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {hasSubmenu && isSubOpen && (
                  <div className="pl-4 pb-3 space-y-2 bg-gray-50 rounded-lg p-2 mb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-600 hover:text-[#053161] font-medium py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
