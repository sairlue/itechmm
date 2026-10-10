"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const SERVICES_LIST = [
  "Custom Web Application Development",
  "Mobile Application Development (iOS & Android)",
  "Enterprise Software & Custom ERP",
  "Cloud Infrastructure & DevOps (Ubuntu VPS)",
  "AI & Process Automation",
  "IT Advisory & Security Code Audit",
  "Other / General Inquiry",
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      // Find matching service or set default
      const found = SERVICES_LIST.find(
        (s) => s.toLowerCase().includes(initialService.toLowerCase()) || initialService.toLowerCase().includes(s.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        service: found || initialService,
        subject: `Inquiry regarding ${initialService}`,
      }));
    }
  }, [initialService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters long.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters so we can understand your requirements.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setSuccessMessage(data.message || "Thank you! Your inquiry has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (successMessage) {
    return (
      <div className="py-12 px-6 text-center space-y-5">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
          {successMessage}
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSuccessMessage("")}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors"
          >
            <span>Send Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
        <p className="text-xs text-slate-500 mt-1">
          Tell us about your goals, timelines, or questions. We will respond promptly.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name and Email grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Aung Min / Jane Doe"
            className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white transition-all outline-none focus:ring-2 ${
              errors.name
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-sky-500 focus:ring-sky-100"
            }`}
          />
          {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white transition-all outline-none focus:ring-2 ${
              errors.email
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-300 focus:border-sky-500 focus:ring-sky-100"
            }`}
          />
          {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Phone and Service Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
            Phone / Telegram <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+95 9..."
            className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
            Service of Interest <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-slate-300 bg-slate-50 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all outline-none"
          >
            <option value="">Select a service category...</option>
            {SERVICES_LIST.map((srv, idx) => (
              <option key={idx} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
          Subject <span className="text-rose-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Brief summary of your inquiry"
          className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white transition-all outline-none focus:ring-2 ${
            errors.subject
              ? "border-rose-400 focus:ring-rose-200"
              : "border-slate-300 focus:border-sky-500 focus:ring-sky-100"
          }`}
        />
        {errors.subject && <p className="text-rose-500 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
          Project Details / Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your requirements, timeline, target platform, or questions..."
          className={`w-full px-3.5 py-2.5 rounded-xl text-sm border bg-slate-50 focus:bg-white transition-all outline-none focus:ring-2 ${
            errors.message
              ? "border-rose-400 focus:ring-rose-200"
              : "border-slate-300 focus:border-sky-500 focus:ring-sky-100"
          }`}
        />
        {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md shadow-sky-600/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
