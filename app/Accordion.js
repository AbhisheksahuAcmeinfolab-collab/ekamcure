"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-blue-50 transition"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-lg font-semibold text-gray-800">{item.title}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4 text-gray-600 bg-white animate-fadeIn">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
