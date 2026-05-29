"use client";

import { FormEvent, useEffect, useState } from "react";

const prompts = [
  "what made you smile today?",
  "what would make this week matter?",
  "what are you proud of lately?",
  "what deserves your attention today?",
  "what are you grateful for today?",
  "what's one small win from today?",
  "what's on your mind right now?",
  "what could you let go of today?",
  "who are you thinking about today?",
  "what are you looking forward to?",
  "what felt hard today, and why?",
  "what would make tomorrow better?",
];

type ReflectionPromptProps = {
  onComplete: () => void;
};

export function ReflectionPrompt({ onComplete }: ReflectionPromptProps) {
  const [activePrompt, setActivePrompt] = useState("");
  const [reflection, setReflection] = useState("");

  const trimmedReflection = reflection.trim();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prompts.length);
      setActivePrompt(prompts[randomIndex]);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (trimmedReflection) {
      onComplete();
    }
  }

  return (
    <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
      <p className="text-sm lowercase tracking-[0.3em] text-teal-300">
        before we start
      </p>
      <h1 className="mt-5 min-h-24 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
        {activePrompt || " "}
      </h1>
      <label className="mt-10 block">
        <span className="sr-only">
          {activePrompt}
        </span>
        <textarea
          className="min-h-28 w-full resize-none border-b border-white/20 bg-transparent py-4 text-xl leading-8 text-white outline-none transition placeholder:text-zinc-500 focus:border-teal-300/70 sm:text-2xl"
          onChange={(event) => setReflection(event.target.value)}
          placeholder="type here..."
          value={reflection}
        />
      </label>
      <div className="mt-8 flex items-center justify-between gap-6">
        <p className="text-sm lowercase text-zinc-500">this stays private.</p>
        <button
          className="text-sm font-semibold lowercase text-white transition hover:text-teal-200 disabled:cursor-not-allowed disabled:text-zinc-600"
          disabled={!trimmedReflection}
          type="submit"
        >
          continue
        </button>
      </div>
    </form>
  );
}
