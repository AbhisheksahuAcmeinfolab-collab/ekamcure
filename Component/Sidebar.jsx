"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaRibbon,
  FaHeartbeat,
  FaEye,
  FaBone,
  FaWalking,
  FaChevronUp,
  FaChevronDown,
  FaMedkit,
} from "react-icons/fa";

const treatments = [
  {
    label: "Breast Cancer Treatment",
    href: "/treatments/breast-cancer-treatment-in-india",
    icon: <FaRibbon className="flex-shrink-0 text-base" />,
  },
  {
    label: "Heart Valve Surgery",
    href: "/treatments/heart-valve-surgery-india",
    icon: <FaHeartbeat className="flex-shrink-0 text-base" />,
  },
  {
    label: "Glaucoma Surgery",
    href: "/treatments/glaucoma-surgery-in-india-for-international-patients",
    icon: <FaEye className="flex-shrink-0 text-base" />,
  },
  {
    label: "Spine Surgery",
    href: "/treatments/best-spine-surgery-in-india",
    icon: <FaBone className="flex-shrink-0 text-base" />,
  },
  {
    label: "Hip Replacement Surgery",
    href: "/treatments/hip-replacement-surgery-in-india",
    icon: <FaWalking className="flex-shrink-0 text-base" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <div
      className="w-full overflow-hidden rounded-b-xl"
      style={{
        background: "linear-gradient(150deg, #1e96e8 0%, #1255b0 60%, #0d3d8a 100%)",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "420px",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        boxShadow: "0 20px 60px rgba(13,61,138,0.45), 0 4px 16px rgba(0,0,0,0.15)",
      }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-7 py-4 border-t border-white/15 cursor-pointer group"
        style={{ background: "rgba(0,0,0,0.12)" }}
      >
        <div className="flex items-center gap-2.5">
          <FaMedkit className="text-white/80 text-sm" />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Treatment Specialties
          </span>
        </div>
        <span className="text-white/60 group-hover:text-white transition-colors duration-200">
          {open ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
        </span>
      </button>

      {/* Nav list */}
      <div
        style={{
          maxHeight: open ? "400px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {treatments.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-200 overflow-hidden group
                    ${
                      isActive
                        ? "bg-white text-blue-700 shadow-md"
                        : "text-white/80 hover:bg-white/15 hover:text-white"
                    }
                  `}
                  style={
                    isActive
                      ? { boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }
                      : {}
                  }
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-2 bottom-2 w-1 rounded-full"
                      style={{ background: "linear-gradient(180deg,#1e96e8,#0d3d8a)" }}
                    />
                  )}

                  {/* Icon */}
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "bg-white/10 text-white group-hover:bg-white/20"
                    }`}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className="flex-1 leading-tight">{item.label}</span>

                  {/* Active dot */}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom CTA hint */}
        <div
          className="mx-4 mb-4 px-4 py-3 rounded-xl text-center"
          style={{ background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <p className="text-xs text-white/60 leading-relaxed">
            Need help choosing a treatment?{" "}
            <span className="text-white/90 font-semibold underline underline-offset-2 cursor-pointer">
              Talk to an expert
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}