"use client";

import { useState } from "react";
import { ContactForm } from "./contact-form";
import { ReflectionPrompt } from "./reflection-prompt";

const selectedWork = [
  {
    title: "Recommendations at scale",
    description:
      "Own vector retrieval and contextual bandit reranking for Salesforce recommendation systems across 50+ enterprise storefronts.",
  },
  {
    title: "ML evaluation platforms",
    description:
      "Built offline NDCG@K workflows for thousands of user profiles and production regions, helping teams tune recommender quality.",
  },
  {
    title: "Distributed infrastructure",
    description:
      "Ship Java, Python, Kubernetes, Istio, and OpenSearch systems with attention to latency, reliability, and operational clarity.",
  },
];

const personalProjects = [
  {
    name: "BetEdge",
    href: "https://github.com/raghavverma-dev/sports-betting-tracker",
    description:
      "A full-stack paper-trading and sports-market analytics platform for live odds, de-vigged probabilities, expected value ranking, bankroll tracking, and strategy backtests.",
    stack: [
      "FastAPI",
      "Postgres",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "Docker",
    ],
    highlights: [
      "Pulls live odds from US sportsbooks and converts American odds into fair market probabilities.",
      "Scores strategies with Brier score, log loss, calibration, ROI, and max drawdown.",
      "Runs locally with Docker Compose, with no real-money betting and no user accounts.",
    ],
  },
];

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return (
      <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#07070a] px-6 py-10 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.28),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(20,184,166,0.18),_transparent_28%),linear-gradient(180deg,_#07070a_0%,_#11111a_52%,_#07070a_100%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <ReflectionPrompt onComplete={() => setHasEntered(true)} />
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(20,184,166,0.22),_transparent_28%),linear-gradient(180deg,_#07070a_0%,_#11111a_52%,_#07070a_100%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 backdrop-blur">
          <a className="font-medium text-white" href="#">
            raghavverma.dev
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a
              className="transition hover:text-white"
              href="/raghav-verma-resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
            <a className="transition hover:text-white" href="#music">
              Music
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-6xl gap-14 pb-24 pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-32 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-black/20">
              A tiny pause, then the resume stuff.
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Raghav Verma
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Software engineer at Salesforce building recommendation systems,
              ML evaluation platforms, and distributed infrastructure for
              data-intensive products.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                href="#contact"
              >
                Contact me
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                href="/raghav-verma-resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                View resume
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-400/15 blur-3xl" />
            <div className="absolute -bottom-24 left-8 h-48 w-48 rounded-full bg-teal-300/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-teal-300">
                Currently
              </p>
              <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight text-white">
                Building personalization and ML platform systems at Salesforce,
                and open to work on thoughtful engineering teams.
              </p>

              <div className="mt-8 space-y-5 border-y border-white/10 py-6">
                <p className="text-sm leading-6 text-zinc-300">
                  5+ years shipping production backend systems across
                  recommendations, vector retrieval, model evaluation, and
                  distributed service infrastructure.
                </p>
                <p className="text-sm leading-6 text-zinc-300">
                  Recent work has supported 50+ enterprise storefronts,
                  high-scale Black Friday personalization traffic, and measurable
                  GMV and recommender-quality improvements.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-zinc-400">
                <span>Based in New York</span>
                <span className="rounded-full border border-teal-300/25 px-3 py-1 text-teal-200">
                  Open to new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-[radial-gradient(circle_at_15%_0%,_rgba(45,212,191,0.11),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.035),_rgba(255,255,255,0.01))] px-6 py-20 sm:px-10 lg:px-16"
        id="about"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              I build the backend and ML platform pieces that make intelligent
              products feel fast, relevant, and dependable.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              I am a software engineer at Salesforce, working across Java,
              Python, Kubernetes, Istio, OpenSearch, and PyTorch. My recent work
              focuses on personalization, recommendations, ML evaluation, and the
              infrastructure needed to run those systems in production.
            </p>
            <p>
              I am interested in teams building AI products, search and
              recommendation systems, infrastructure, developer tools, and
              product experiences where technical rigor and taste both matter.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-[radial-gradient(circle_at_85%_15%,_rgba(129,140,248,0.16),_transparent_32%),linear-gradient(180deg,_rgba(99,102,241,0.06),_rgba(255,255,255,0.018))] px-6 py-20 sm:px-10 lg:px-16"
        id="work"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-300">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Production systems for personalization, evaluation, and reliable
              infrastructure.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {selectedWork.map((item) => (
              <article
                className="rounded-3xl border border-white/10 bg-zinc-950/60 p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-zinc-900/80"
                key={item.title}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[radial-gradient(circle_at_15%_20%,_rgba(20,184,166,0.1),_transparent_30%),linear-gradient(180deg,_rgba(7,7,10,0),_rgba(24,24,27,0.32))] px-6 py-20 sm:px-10 lg:px-16"
        id="projects"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">
                Personal projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Small products where I explore data, UX, and backend systems end
                to end.
              </h2>
            </div>
            <a
              className="inline-flex w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
              href="https://github.com/raghavverma-dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub profile
            </a>
          </div>

          <div className="mt-10 space-y-6">
            {personalProjects.map((project) => (
              <article
                className="border-t border-white/10 pt-8"
                key={project.name}
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <a
                      className="mt-4 inline-flex text-sm font-semibold text-teal-200 transition hover:text-white"
                      href={project.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </div>

                  <div>
                    <p className="text-lg leading-8 text-zinc-300">
                      {project.description}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-400">
                      {project.highlights.map((highlight) => (
                        <li
                          className="border-l border-white/10 pl-4"
                          key={highlight}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-white/10 bg-[radial-gradient(circle_at_80%_0%,_rgba(45,212,191,0.13),_transparent_28%),linear-gradient(180deg,_rgba(20,184,166,0.04),_rgba(7,7,10,0))] px-6 py-20 sm:px-10 lg:px-16"
        id="music"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">
              Music
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              I also make electronic music as Amver.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              Outside of engineering, I write melodic, emotional electronic
              music. It scratches a different version of the same itch: shaping
              small details until something technical starts to feel alive.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                href="https://open.spotify.com/artist/5gPCgHDk1vhpA6L7cxFyIC?si=S5LwSMSQQJmMTzO_4fitNQ"
                rel="noopener noreferrer"
                target="_blank"
              >
                Listen on Spotify
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                href="https://soundcloud.com/amvermusic"
                rel="noopener noreferrer"
                target="_blank"
              >
                SoundCloud
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-16" id="contact">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 sm:p-10">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
