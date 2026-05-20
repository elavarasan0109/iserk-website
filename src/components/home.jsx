import React, { useRef, useState } from "react";

import hero from "../assets/person.png.png";

import gaming from "../assets/game-and-stream.png";
import content from "../assets/content-creation.png";
import engineering from "../assets/image eng.png";
import data from "../assets/data-science.png";

import exclusive from "../assets/image 3.png";

import consolekiller from "../assets/consolekiller.png";
import redpillpc from "../assets/redpillpc.png";

import gamingpc from "../assets/gaming.png";
import bannerpc from "../assets/banner-pc.png";
import consolepc from "../assets/console.png";
import creater from "../assets/creator.png";
import office from "../assets/office.png";
import redpill from "../assets/redpill.png";
import works from "../assets/works.png";
import delivery from "../assets/delivery.png";

const services = [
  {
    title: "Gaming / Streaming",
    description:
      "High-performance rigs built to dominate gameplay and keep streams smooth.",
    image: gaming,
  },
  {
    title: "Content Creation",
    description:
      "Creative workstations for video editing, design and productivity.",
    image: content,
  },
  {
    title: "Engineering Works",
    description:
      "Reliable systems for CAD, simulation and professional workflows.",
    image: engineering,
  },
  {
    title: "Data Science and others",
    description:
      "Analytics machines optimized for AI, ML and data workloads.",
    image: data,
  },
];

const steps = [
  {
    number: "01",
    title: "Configuration",
    subtitle: "Sent",
    detail: "We receive your order.",
  },
  {
    number: "02",
    title: "Expert",
    subtitle: "Consulting",
    detail: "We call and understand your needs.",
  },
  {
    number: "03",
    title: "Assembly &",
    subtitle: "Testing",
    detail: "48-hour stress test.",
  },
  {
    number: "04",
    title: "Secure",
    subtitle: "Packaging",
    detail: "Multi-layer protection.",
  },
  {
    number: "05",
    title: "Delivery",
    subtitle: "Pankina",
    detail: "We deliver with care.",
  },
];

export default function Home() {

  const slider = useRef(null);

  const slides = [redpillpc, consolekiller];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      

        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden pb-24"
        >

          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.14),_transparent_45%)] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6">

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

              {/* LEFT */}
              <div className="space-y-8">

                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-500">
                  Custom Performance PCs
                </span>

                <h1 className="text-5xl font-black leading-tight tracking-[-0.03em] text-white sm:text-6xl">
                  Power <span className="text-red-500">Your</span> Journey with
                  NUKEPC.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  Get your powerful PC hassle-free, designed and assembled to
                  power your journey in gaming, creation, engineering and data
                  science.
                </p>

                <div className="flex flex-wrap gap-4">

                  <button className="rounded-full bg-red-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-red-700">
                    Build Now
                  </button>

                  <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white/90 transition hover:border-red-500">
                    Priority - Rs. 299
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="overflow-hidden rounded-[50px] border border-white/10 bg-slate-950/40 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">

                <img
                  src={hero}
                  alt="Hero"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BUILDS */}
        <section
          id="builds"
          className="border-t border-white/10 bg-[#050505] px-6 py-20"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                What we build
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Systems for every premium use case.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">

              {services.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-red-500"
                >

                  <div className="relative h-72 overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-3 p-6">

                    <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                      {item.title}
                    </p>

                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                After your configuration is sent
              </p>

              <h2 className="mt-4 text-4xl font-black">
                What happens <span className="text-red-500">next?</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-5">

              {steps.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[30px] border border-white/10 bg-[#0c0c0c] p-8 text-center"
                >

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-xl font-black">
                    {item.number}
                  </div>

                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-red-500">
                    {item.title}
                  </p>

                  <h3 className="text-xl font-bold">
                    {item.subtitle}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXCLUSIVE */}
        <section
          id="exclusive"
          className="relative overflow-hidden bg-black px-6 py-28"
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.18),transparent_55%)]" />

          <div className="relative mx-auto max-w-7xl">

            <div className="mb-16 flex justify-center">

              <div className="rounded-full border border-red-500/40 bg-red-500/10 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-red-500">
                ● Exclusively Available at NukePC
              </div>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* LEFT */}
              <div className="max-w-2xl">

                <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                  World's First
                </p>

                <h2 className="leading-none">

                  <span className="block text-6xl font-black tracking-[-0.04em] text-white lg:text-7xl">
                    AMD Ryzen™ 9
                  </span>

                  <span className="mt-2 block text-6xl font-black tracking-[-0.04em] text-red-500 lg:text-7xl">
                    9950X3D²
                  </span>
                </h2>

                <p className="mt-6 text-3xl font-light text-white">
                  Dual Edition
                </p>

                <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-300">
                  The world's first dual AMD 3D V-Cache™ technology enabled
                  processor — built for creators and developers who demand
                  performance without compromise.
                </p>

                <div className="mt-10 flex flex-wrap gap-5">

                  <button className="rounded-full border border-white/10 bg-[#111111] px-7 py-4 text-sm text-white transition hover:border-red-500">
                    <span className="mr-2 text-green-400">●</span>
                    Now Available at NukePC
                  </button>

                  <button className="rounded-full bg-red-600 px-10 py-4 text-sm font-semibold text-white transition hover:bg-red-700">
                    Configure Your Build
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative flex justify-center">

                <div className="absolute h-[500px] w-[500px] rounded-full bg-red-600/30 blur-[120px]" />

                <img
                  src={exclusive}
                  alt="AMD Ryzen"
                  className="relative z-10 w-full max-w-[540px] object-contain drop-shadow-[0_0_80px_rgba(255,0,0,0.35)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE SLIDER */}
        <section className="bg-black px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden rounded-[40px] border border-white/10">

              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >

                {slides.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="h-[520px] min-w-full object-cover"
                  />
                ))}
              </div>

              {/* LEFT */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === 0
                      ? slides.length - 1
                      : currentSlide - 1
                  )
                }
                className="absolute left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-3xl text-white backdrop-blur-md"
              >
                ‹
              </button>

              {/* RIGHT */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === slides.length - 1
                      ? 0
                      : currentSlide + 1
                  )
                }
                className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-3xl text-white backdrop-blur-md"
              >
                ›
              </button>
            </div>
          </div>
        </section>

       {/* PRE BUILDS */}
<section
  id="prebuilds"
  className="bg-black px-6 py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* TOP HEADING */}
    <div className="text-center">

      <h2 className="text-[56px] font-black uppercase leading-none tracking-[-0.04em] text-white">
        PRE-BUILDS FOR
        <span className="text-orange-500"> YOU</span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-[15px] leading-8 text-slate-400">
        Get performance-ready PCs designed for gaming, work, and everyday use.
        With premium components, effortless setup, and optimized performance,
        our pre-built systems deliver reliability and style right out of the box.
      </p>
    </div>

    {/* SLIDER AREA */}
    <div className="relative mt-24">

      {/* LEFT BUTTON */}
      <button
        onClick={() =>
          slider.current.scrollBy({
            left: -340,
            behavior: "smooth",
          })
        }
        className="absolute -left-8 top-1/2 z-20 flex h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-[#ff5a1f] text-[34px] text-white shadow-[0_0_45px_rgba(255,90,31,0.8)] transition duration-300 hover:scale-110"
      >
        ‹
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() =>
          slider.current.scrollBy({
            left: 340,
            behavior: "smooth",
          })
        }
        className="absolute -right-8 top-1/2 z-20 flex h-[58px] w-[58px] -translate-y-1/2 items-center justify-center rounded-full bg-[#ff5a1f] text-[34px] text-white shadow-[0_0_45px_rgba(255,90,31,0.8)] transition duration-300 hover:scale-110"
      >
        ›
      </button>

      {/* CARDS */}
      <div
        ref={slider}
        className="flex gap-7 overflow-x-auto scroll-smooth scrollbar-hide px-2"
      >

        {/* CARD 1 */}
        <div className="min-w-[255px] rounded-[24px] bg-[#050505] p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

          <h3 className="text-[21px] font-medium text-white">
            High Fps Gaming
          </h3>

          <p className="mt-1 text-[15px] text-orange-500">
            Mid-Range
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <img
              src={gamingpc}
              alt=""
              className="h-[260px] w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[13px] text-slate-500">
            starts
          </p>

          <h4 className="mt-1 text-[28px] font-black text-white">
            ₹72,290
          </h4>
        </div>

        {/* CARD 2 */}
        <div className="min-w-[255px] rounded-[24px] bg-[#050505] p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

          <h3 className="text-[21px] font-medium text-white">
            Gaming X Creator
          </h3>

          <p className="mt-1 text-[15px] text-orange-500">
            Mid-Range
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <img
              src={creater}
              alt=""
              className="h-[260px] w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[13px] text-slate-500">
            starts
          </p>

          <h4 className="mt-1 text-[28px] font-black text-white">
            ₹64,990
          </h4>
        </div>

        {/* CARD 3 */}
        <div className="min-w-[255px] rounded-[24px] bg-[#050505] p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

          <h3 className="text-[21px] font-medium text-white">
            Entry Productivity PC
          </h3>

          <p className="mt-1 text-[15px] text-orange-500">
            Entry
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <img
              src={bannerpc}
              alt=""
              className="h-[260px] w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[13px] text-slate-500">
            starts
          </p>

          <h4 className="mt-1 text-[28px] font-black text-white">
            ₹36,190
          </h4>
        </div>

        {/* CARD 4 */}
        <div className="min-w-[255px] rounded-[24px] bg-[#050505] p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

          <h3 className="text-[21px] font-medium text-white">
            Daily Productivity PC
          </h3>

          <p className="mt-1 text-[15px] text-orange-500">
            Entry
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <img
              src={office}
              alt=""
              className="h-[260px] w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[13px] text-slate-500">
            starts
          </p>

          <h4 className="mt-1 text-[28px] font-black text-white">
            ₹30,990
          </h4>
        </div>

        {/* CARD 5 */}
        <div className="min-w-[255px] rounded-[24px] bg-[#050505] p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

          <h3 className="text-[21px] font-medium text-white">
            Red Pill PC
          </h3>

          <p className="mt-1 text-[15px] text-orange-500">
            Mid-Range
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <img
              src={redpill}
              alt=""
              className="h-[260px] w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[13px] text-slate-500">
            starts
          </p>

          <h4 className="mt-1 text-[28px] font-black text-white">
            ₹42,490
          </h4>
        </div>

        {/* CARD 6 */}
        <div className="min-w-[255px] rounded-[24px] bg-[#050505] p-4 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

          <h3 className="text-[21px] font-medium text-white">
            Console Killer PC
          </h3>

          <p className="mt-1 text-[15px] text-orange-500">
            Mid-Range
          </p>

          <div className="mt-5 overflow-hidden rounded-[18px]">
            <img
              src={consolepc}
              alt=""
              className="h-[260px] w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[13px] text-slate-500">
            starts
          </p>

          <h4 className="mt-1 text-[28px] font-black text-white">
            ₹84,990
          </h4>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="mt-14 flex justify-center gap-3">

        <div className="h-[5px] w-12 rounded-full bg-orange-500" />

        <div className="h-[5px] w-12 rounded-full bg-white" />
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="mt-12 flex justify-center">

        <button className="flex items-center gap-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-10 py-4 text-[15px] font-semibold text-white shadow-[0_0_45px_rgba(255,98,0,0.8)] transition duration-300 hover:scale-105">

          View More

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black">
            →
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

{/* HOW IT WORKS */}
<section
  id="process"
  className="bg-black px-6 py-28 text-white"
>
  <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">

    {/* LEFT SIDE */}
    <div>

      <h2 className="text-5xl font-black leading-none tracking-tight sm:text-6xl">
        How It{" "}
        <span className="text-orange-500">
          Works →
        </span>
      </h2>

      <div className="mt-16 flex justify-center">

        <img
          src={works}
          alt="How It Works"
          className="w-full max-w-[560px] object-contain"
        />
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div>

      <p className="max-w-2xl text-[15px] leading-8 text-slate-300">
        Our process is designed to deliver a PC that's tailored,
        reliable, and ready to perform from day one. From understanding
        your requirements to expert assembly, rigorous testing,
        secure packaging, and safe delivery, every stage is handled
        with precision to ensure you receive a system built exactly
        for your needs.
      </p>

      <div className="mt-12">

        {/* ITEM 1 */}
        <div className="border-t border-white/10 py-6">

          <button
            onClick={() =>
              setOpen(open === 0 ? null : 0)
            }
            className="flex w-full items-center justify-between"
          >

            <div className="flex items-center gap-8">

              <span className="text-sm text-slate-500">
                01.
              </span>

              <h3 className="text-[30px] font-medium text-white">
                Customer Persona
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-xl text-white">
              {open === 0 ? "×" : "+"}
            </div>
          </button>

          {open === 0 && (
            <div className="ml-[78px] mt-8 max-w-2xl">

              <p className="text-[15px] leading-8 text-slate-400">
                We begin by creating a detailed customer persona —
                a personalized profile crafted from real data and
                insights gathered through direct interactions.
                This allows us to design tailored PC solutions
                that match your specific needs, preferences,
                and goals.
              </p>
            </div>
          )}
        </div>

        {/* ITEM 2 */}
        <div className="border-t border-white/10 py-6">

          <button
            onClick={() =>
              setOpen(open === 1 ? null : 1)
            }
            className="flex w-full items-center justify-between"
          >

            <div className="flex items-center gap-8">

              <span className="text-sm text-slate-500">
                02.
              </span>

              <h3 className="text-[30px] font-medium text-white">
                Expert Consulting
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-xl text-white">
              {open === 1 ? "×" : "+"}
            </div>
          </button>

          {open === 1 && (
            <div className="ml-[78px] mt-8 max-w-2xl">

              <p className="text-[15px] leading-8 text-slate-400">
                Our experts analyze your workflow, gaming needs,
                and performance goals to recommend the perfect
                hardware combination for maximum efficiency
                and reliability.
              </p>
            </div>
          )}
        </div>

        {/* ITEM 3 */}
        <div className="border-t border-white/10 py-6">

          <button
            onClick={() =>
              setOpen(open === 2 ? null : 2)
            }
            className="flex w-full items-center justify-between"
          >

            <div className="flex items-center gap-8">

              <span className="text-sm text-slate-500">
                03.
              </span>

              <h3 className="text-[30px] font-medium text-white">
                Assembly & Testing
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-xl text-white">
              {open === 2 ? "×" : "+"}
            </div>
          </button>

          {open === 2 && (
            <div className="ml-[78px] mt-8 max-w-2xl">

              <p className="text-[15px] leading-8 text-slate-400">
                Every PC is professionally assembled and undergoes
                rigorous stress testing, thermal checks,
                and benchmark validation to ensure flawless
                performance.
              </p>
            </div>
          )}
        </div>

        {/* ITEM 4 */}
        <div className="border-t border-white/10 py-6">

          <button
            onClick={() =>
              setOpen(open === 3 ? null : 3)
            }
            className="flex w-full items-center justify-between"
          >

            <div className="flex items-center gap-8">

              <span className="text-sm text-slate-500">
                04.
              </span>

              <h3 className="text-[30px] font-medium text-white">
                Secure Packaging
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-xl text-white">
              {open === 3 ? "×" : "+"}
            </div>
          </button>

          {open === 3 && (
            <div className="ml-[78px] mt-8 max-w-2xl">

              <p className="text-[15px] leading-8 text-slate-400">
                Your PC is packed using premium multi-layer
                protection with foam support and reinforced
                packaging to ensure safe delivery without damage.
              </p>
            </div>
          )}
        </div>

        {/* ITEM 5 */}
        <details className="group border-b border-white/10 pb-6">

          <summary className="flex cursor-pointer list-none items-center justify-between">

            <div className="flex items-center gap-8">
              <span className="text-sm text-slate-500">05.</span>

              <h3 className="text-2xl font-semibold text-white">
                Pan-India Free Delivery
              </h3>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white">
              +
            </div>
          </summary>

          <div className="mt-6 flex items-center justify-between gap-10 pl-16">

            <div>

              <p className="max-w-xl text-base leading-8 text-slate-400">
                Your PC is safely shipped anywhere in India with
                premium packaging and free delivery for a smooth,
                worry-free experience.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 flex items-center gap-4 text-lg font-semibold text-white"
              >
                Build your PC

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  ↗
                </span>
              </button>
            </div>

            {/* DELIVERY IMAGE */}
            <img
              src={delivery}
              alt=""
              className="h-36 w-52 rounded-2xl object-cover"
            />
          </div>
        </details>
      </div>
    </div>
  </div>
</section>

{/* FAQ SECTION */}
<section className="w-full bg-[#f7f3ef] px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* TOP */}
    <div className="text-center">

      <h2 className="text-6xl font-black tracking-tight text-black">
        F
        <span className="text-orange-500">A</span>
        <span className="text-red-500">Q</span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-8 text-[#7a7a7a]">
        Welcome to our FAQ section! Here, we've compiled answers to the
        most common questions about our products, services, and policies
        to help you find the information you need quickly.
      </p>

      <p className="mt-4 text-[17px] text-[#7a7a7a]">
        Still have questions? Feel free to reach out to our support team.
      </p>
    </div>

    {/* FAQ BOX */}
    <div className="mt-16 rounded-[32px] bg-[#efe8e2] p-4 md:p-6">

      {/* ITEM 1 */}
      <div className="mb-5 overflow-hidden rounded-[22px] bg-[#f7f3ef]">

        <button
          onClick={() => setOpen(open === 1 ? null : 1)}
          className="flex w-full items-center justify-between px-7 py-7 text-left"
        >

          <h3 className="text-[22px] font-semibold text-black">
            Can I change a component after confirming the configuration?
          </h3>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ded5ce] text-3xl text-black">
            {open === 1 ? "×" : "+"}
          </div>
        </button>

        <div
          className={`grid transition-all duration-500 ${
            open === 1
              ? "grid-rows-[1fr] opacity-100 pb-7"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-7 text-[16px] leading-8 text-[#5f5f5f]">
              Yes, you can make changes within 24 hours of confirmation by informing our team.
            </p>
          </div>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="mb-5 overflow-hidden rounded-[22px] bg-[#f7f3ef]">

        <button
          onClick={() => setOpen(open === 2 ? null : 2)}
          className="flex w-full items-center justify-between px-7 py-7 text-left"
        >

          <h3 className="text-[22px] font-semibold text-black">
            Can I get my PC within 7 working days?
          </h3>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ded5ce] text-3xl text-black">
            {open === 2 ? "×" : "+"}
          </div>
        </button>

        <div
          className={`grid transition-all duration-500 ${
            open === 2
              ? "grid-rows-[1fr] opacity-100 pb-7"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-7 text-[16px] leading-8 text-[#5f5f5f]">
              Delivery usually takes 5–7 working days depending on component availability.
            </p>
          </div>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="mb-5 overflow-hidden rounded-[22px] bg-[#f7f3ef]">

        <button
          onClick={() => setOpen(open === 3 ? null : 3)}
          className="flex w-full items-center justify-between px-7 py-7 text-left"
        >

          <h3 className="text-[22px] font-semibold text-black">
            Do you preinstall games or software on custom PCs?
          </h3>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ded5ce] text-3xl text-black">
            {open === 3 ? "×" : "+"}
          </div>
        </button>

        <div
          className={`grid transition-all duration-500 ${
            open === 3
              ? "grid-rows-[1fr] opacity-100 pb-7"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-7 text-[16px] leading-8 text-[#5f5f5f]">
              We install drivers and Windows setup. Additional software can be added on request.
            </p>
          </div>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="mb-5 overflow-hidden rounded-[22px] bg-[#f7f3ef]">

        <button
          onClick={() => setOpen(open === 4 ? null : 4)}
          className="flex w-full items-center justify-between px-7 py-7 text-left"
        >

          <h3 className="text-[22px] font-semibold text-black">
            Laptop vs. PC: Which is better?
          </h3>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ded5ce] text-3xl text-black">
            {open === 4 ? "×" : "+"}
          </div>
        </button>

        <div
          className={`grid transition-all duration-500 ${
            open === 4
              ? "grid-rows-[1fr] opacity-100 pb-7"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-7 text-[16px] leading-8 text-[#5f5f5f]">
              PCs offer better performance and upgradeability while laptops provide portability.
            </p>
          </div>
        </div>
      </div>

      {/* ITEM 5 */}
      <div className="overflow-hidden rounded-[22px] bg-[#f7f3ef]">

        <button
          onClick={() => setOpen(open === 5 ? null : 5)}
          className="flex w-full items-center justify-between px-7 py-7 text-left"
        >

          <h3 className="text-[22px] font-semibold text-black">
            Why should I choose a custom PC over a prebuilt PC?
          </h3>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ded5ce] text-3xl text-black">
            {open === 5 ? "×" : "+"}
          </div>
        </button>

        <div
          className={`grid transition-all duration-500 ${
            open === 5
              ? "grid-rows-[1fr] opacity-100 pb-7"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-7 text-[16px] leading-8 text-[#5f5f5f]">
              Custom PCs give better cooling, performance, quality components, and future upgrades.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
}