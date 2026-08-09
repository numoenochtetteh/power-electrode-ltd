"use client";

import { useState } from "react";

export function ReviewForm() {
  const [form, setForm] = useState({ name: "", company: "", review: "" });
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function submitReview(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.review.trim()) {
      setError("Please enter your name and review.");
      return;
    }

    setError("");
    const message = [
      "Hello Power Electrode Ltd, I would like to submit a website review.",
      "",
      `Name: ${form.name.trim()}`,
      form.company.trim() ? `Company / Role: ${form.company.trim()}` : null,
      `Rating: ${rating}/5`,
      `Review: ${form.review.trim()}`,
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/233200594776?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submitReview} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] sm:p-8">
      <fieldset>
        <legend className="text-sm font-bold text-slate-900">Your rating</legend>
        <div className="mt-3 flex gap-2" aria-label={`${rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} type="button" onClick={() => setRating(star)} aria-label={`Rate ${star} out of 5`} className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xl transition-colors ${star <= rating ? "border-orange-200 bg-orange-50 text-orange-500" : "border-slate-200 bg-white text-slate-300 hover:text-orange-400"}`}>
              <span aria-hidden="true">★</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">Name <span className="text-orange-500">*</span><input name="name" value={form.name} onChange={updateField} className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" placeholder="Your name" /></label>
        <label className="text-sm font-semibold text-slate-800">Company / role <span className="font-normal text-slate-400">(optional)</span><input name="company" value={form.company} onChange={updateField} className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" placeholder="Company or role" /></label>
      </div>

      <label className="mt-4 block text-sm font-semibold text-slate-800">Your review <span className="text-orange-500">*</span><textarea name="review" value={form.review} onChange={updateField} rows={5} className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100" placeholder="Tell us about your experience with Power Electrode Ltd" /></label>
      {error && <p className="mt-3 text-sm font-medium text-red-600" role="alert">{error}</p>}
      <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:w-fit">Send Review via WhatsApp <span aria-hidden="true">→</span></button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Your review is sent privately to our team for approval before it is published.</p>
    </form>
  );
}
