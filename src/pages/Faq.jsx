import React, { useState } from "react";

const faqData = [
  {
    question: "Can I change a component after confirming the configuration?",
    answer:
      "Yes, you can make changes within 24 hours of confirmation by informing our team.",
  },
  {
    question: "Can I get my PC within 7 working days?",
    answer:
      "Delivery usually takes 5–7 working days depending on component availability.",
  },
  {
    question: "Do you preinstall games or software on custom PCs?",
    answer:
      "We install drivers and Windows setup. Additional software can be added on request.",
  },
  {
    question: "Laptop vs. PC: Which is better?",
    answer:
      "PCs offer better performance and upgradeability while laptops provide portability.",
  },
  {
    question: "Why should I choose a custom PC over a prebuilt PC?",
    answer:
      "Custom PCs provide better cooling, performance, and future upgrades.",
  },
  {
    question: "What sets ISERK PC apart from other custom PC integrators?",
    answer:
      "We focus on premium components, stress testing, airflow optimization, and expert support.",
  },
  {
    question: "How do I report a problem with my PC?",
    answer:
      "You can contact our support team through phone, email, or WhatsApp support.",
  },
  {
    question: "Can I use my own components in a custom PC?",
    answer:
      "Yes, compatible customer-provided components can be integrated into your build.",
  },
  {
    question: "Do you offer upgrades for old PCs?",
    answer:
      "Yes, we provide RAM, GPU, SSD, cooling, and full system upgrade services.",
  },
  {
    question: "Do you provide warranty?",
    answer:
      "Yes, all builds come with component manufacturer warranty and service support.",
  },

  {
    question: "Do you handle laptop inquiries?",
    answer:
      "Yes, we assist with laptop recommendations, upgrades, troubleshooting, and performance consultations.",
  },
  {
    question: "Do you do business outside of India?",
    answer:
      "Currently, we primarily operate across India. International inquiries can be discussed with our support team.",
  },
  {
    question: "Can I buy a PC for under ₹30,000?",
    answer:
      "Yes, we offer budget-friendly entry-level PCs suitable for office work, studies, and basic productivity.",
  },
  {
    question: "Is EMI available for PC purchases?",
    answer:
      "Yes, EMI options are available through selected payment partners and financing services.",
  },
  {
    question: "Can I see my PC before purchasing it?",
    answer:
      "Yes, we can share build photos, videos, benchmark reports, and live previews before shipping.",
  },
  {
    question: "What should I do if my shipment arrives damaged?",
    answer:
      "Please contact our support team immediately with photos/videos of the package and product for assistance.",
  },
  {
    question: "How long does it take to process an RMA for a product?",
    answer:
      "RMA processing time depends on the manufacturer, but we assist throughout the warranty claim process.",
  },
  {
    question: "How do I clean my PC?",
    answer:
      "Use compressed air to remove dust, clean filters regularly, and avoid liquid cleaners near components.",
  },
  {
    question: "Why does my PC shut down during heavy tasks?",
    answer:
      "This may happen due to overheating, power supply issues, or unstable hardware configurations.",
  },
  {
    question: "Why is my PC cabinet giving me electric shocks?",
    answer:
      "This usually indicates improper grounding or electrical leakage. Use a proper grounded power outlet immediately.",
  },
  {
    question: "What should I do if my PC is not turning on?",
    answer:
      "Check the power cable, PSU switch, RAM seating, and power connections. If the issue continues, contact support.",
  },
  {
    question: "My PC is on, but there’s no display. What should I do?",
    answer:
      "Check monitor cables, GPU seating, RAM placement, and ensure the monitor input source is correct.",
  },
  {
    question: "How do I maintain my PC for optimal performance?",
    answer:
      "Keep drivers updated, clean dust regularly, monitor temperatures, and avoid unnecessary background apps.",
  },
  {
    question: "Does ISERK PC provide onsite support?",
    answer:
      "Currently, remote troubleshooting support is available. Onsite support availability depends on location.",
  },
  {
    question: "What are the terms for warranty services?",
    answer:
      "Warranty coverage depends on the individual component manufacturer and service terms.",
  },
  {
    question: "How do I contact the support team?",
    answer:
      "You can reach us through email, phone support, WhatsApp, or social media channels.",
  },
  {
    question: "What should I do if I encounter a blue screen error?",
    answer:
      "Restart your PC, check recent driver/software changes, and monitor hardware stability.",
  },
  {
    question: "How long does it take for support to resolve an issue?",
    answer:
      "Resolution time depends on the issue complexity, but our support team aims to respond quickly.",
  },

];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="min-h-screen bg-[#f7f3ef] px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* TOP */}
        <div className="text-center">

          <h2 className="text-6xl font-black tracking-tight text-black">
            F
            <span className="text-orange-500">A</span>
            <span className="text-red-500">Q</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-8 text-[#7a7a7a]">
            Find answers for all your custom PC questions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-16 space-y-5">

          {faqData.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-[22px] bg-[#ece7e2]"
            >

              {/* BUTTON */}
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-7 py-7 text-left"
              >

                <h3 className="text-[22px] font-semibold text-black">
                  {item.question}
                </h3>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d8d0ca] text-3xl text-black">
                  {open === index ? "×" : "+"}
                </div>
              </button>

              {/* CONTENT */}
              <div
                className={`grid transition-all duration-500 ${
                  open === index
                    ? "grid-rows-[1fr] opacity-100 pb-7"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">

                  <p className="px-7 text-[16px] leading-8 text-[#5f5f5f]">
                    {item.answer}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}