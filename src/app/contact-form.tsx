"use client";

import { FormEvent, useState } from "react";

const contactEmail = "raghav.verma5@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          name,
          email: replyTo,
          subject,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("sent");
      setName("");
      setReplyTo("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-300">
          Contact
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Recruiting, collaboration, or just want to compare notes?
        </h2>
        <p className="mt-5 text-base leading-7 text-zinc-400">
          Send a note here, or email me directly at{" "}
          <span className="text-zinc-200">{contactEmail}</span>.
        </p>
        <button
          className="mt-5 text-sm font-semibold text-teal-200 transition hover:text-white"
          onClick={copyEmail}
          type="button"
        >
          {copied ? "copied email" : "copy email"}
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm text-zinc-400">name</span>
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-300/60"
              onChange={(event) => setName(event.target.value)}
              placeholder="your name"
              value={name}
            />
          </label>
          <label className="block">
            <span className="text-sm text-zinc-400">email</span>
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-300/60"
              onChange={(event) => setReplyTo(event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={replyTo}
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm text-zinc-400">subject</span>
          <input
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-300/60"
            onChange={(event) => setSubject(event.target.value)}
            placeholder="quick hello"
            value={subject}
          />
        </label>

        <label className="block">
          <span className="text-sm text-zinc-400">message</span>
          <textarea
            className="mt-2 min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-teal-300/60"
            onChange={(event) => setMessage(event.target.value)}
            placeholder="write your note here"
            required
            value={message}
          />
        </label>

        <div className="flex">
          <button
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:bg-white/30 disabled:text-zinc-600"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending" ? "sending..." : "send message"}
          </button>
        </div>
        {status === "sent" ? (
          <p className="text-sm text-teal-200">sent. thank you.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-300">
            {errorMessage} You can still email me directly at {contactEmail}.
          </p>
        ) : null}
      </form>
    </div>
  );
}
