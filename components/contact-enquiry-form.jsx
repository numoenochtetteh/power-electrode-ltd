"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product: "",
  quantity: "",
  message: "",
};

export function ContactEnquiryForm() {
  const [form, setForm] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappMessage = `
Hello Power Electrode Ltd,

I would like to make a welding electrode enquiry.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company || "Not provided"}
Electrode Grade: ${form.product || "Not selected"}
Quantity: ${form.quantity || "Not provided"}

Requirements:
${form.message}
    `.trim();

    const whatsappUrl = `https://wa.me/233244316183?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.1)] sm:p-7 lg:p-8"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
          Request a Quote
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
          Tell Us What You Need
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Complete the form and continue to WhatsApp to send your enquiry
          directly to our team.
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Full name <span className="text-orange-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="h-13 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email address <span className="text-orange-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
            className="h-13 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Phone number <span className="text-orange-500">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+233..."
            className="h-13 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Company or business
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter company name"
            className="h-13 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>

        <div>
          <label
            htmlFor="product"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Electrode grade
          </label>

          <select
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            className="h-13 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          >
            <option value="">Select a product</option>
            <option value="Grade 12">Grade 12</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Not sure">Not sure—please advise me</option>
            <option value="Other">Other requirement</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Required quantity
          </label>

          <input
            id="quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            placeholder="Example: 20 boxes"
            className="h-13 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Requirements <span className="text-orange-500">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Describe your welding application, electrode requirements, delivery location or any questions you have."
          className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.2)] transition-all hover:-translate-y-0.5 hover:bg-orange-600"
      >
        Send Enquiry on WhatsApp
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        Your enquiry will open in WhatsApp for you to review before sending.
      </p>
    </form>
  );
}
