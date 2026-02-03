"use client";
import { useState } from "react";

const phoneCodes = [
  { flag: "🇮🇳", code: "+91", label: "India" },
  { flag: "🇳🇬", code: "+234", label: "Nigeria" },
  { flag: "🇰🇪", code: "+254", label: "Kenya" },
  { flag: "🇹🇿", code: "+255", label: "Tanzania" },
  { flag: "🇺🇬", code: "+256", label: "Uganda" },
  { flag: "🇪🇹", code: "+251", label: "Ethiopia" },
  { flag: "🇸🇩", code: "+249", label: "Sudan" },
  { flag: "🇬🇭", code: "+233", label: "Ghana" },
  { flag: "🇿🇲", code: "+260", label: "Zambia" },
  { flag: "🇿🇼", code: "+263", label: "Zimbabwe" },
  { flag: "🇷🇼", code: "+250", label: "Rwanda" },
  { flag: "🇲🇻", code: "+960", label: "Maldives" },
  { flag: "🇫🇯", code: "+679", label: "Fiji" },
];

export default function CTA() {
  const [phoneCode, setPhoneCode] = useState({ flag: "🇮🇳", code: "+91" });
  const [dropOpen, setDropOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobile.trim() || !name.trim()) return;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setMobile("");
    setName("");
  };

  return (
    <section className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-5xl">
        {/* icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-100">
            📞
          </div>
        </div>

        <h3 className="text-center font-bold text-lg mb-1">
          Get a Call Back From Our Health Advisor
        </h3>

        <p className="text-center text-sm text-gray-500 mb-5">
          Fill the form and we’ll call you back shortly.
        </p>

        {submitted && (
          <p className="text-center text-green-600 mb-4">
            ✅ Thank you! We will call you shortly.
          </p>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            rounded-3xl shadow-xl bg-white
            p-4 sm:p-6 md:p-8
            flex flex-col md:flex-row
            gap-4 md:gap-5
            items-stretch
          "
        >
          {/* phone */}
          <div className="relative w-full md:w-[40%]">
            <div className="flex border rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setDropOpen(!dropOpen)}
                className="px-3 bg-gray-100 font-semibold flex items-center gap-1"
              >
                <span>{phoneCode.flag}</span>
                {phoneCode.code}
              </button>

              <input
                type="tel"
                required
                placeholder="Enter Mobile Number*"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, ""))
                }
                onFocus={() => setDropOpen(false)}
                className="flex-1 px-4 py-3 outline-none"
              />
            </div>

            {dropOpen && (
              <div className="absolute w-full bg-slate-900 rounded-lg mt-1 z-50 max-h-56 overflow-y-auto">
                {phoneCodes.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => {
                      setPhoneCode({ flag: p.flag, code: p.code });
                      setDropOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-teal-300 hover:bg-teal-900/30"
                  >
                    {p.flag} <strong>{p.code}</strong> {p.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* name */}
          <input
            type="text"
            required
            placeholder="Enter Full Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full md:w-[35%] px-4 py-3 rounded-lg border outline-none"
          />

          {/* submit */}
          <button
            type="submit"
            className="
              w-full md:w-[25%]
              py-3 rounded-lg
              font-bold text-white
              bg-blue-700 hover:bg-blue-800
              transition
            "
          >
            Submit
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          Your information is secure and will not be shared.
        </p>
      </div>
    </section>
  );
}
