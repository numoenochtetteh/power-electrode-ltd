export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233200594776?text=Hello%20Power%20Electrode%20Ltd%2C%20I%20would%20like%20to%20make%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Power Electrode Ltd on WhatsApp"
      className="group fixed bottom-5 right-4 z-40 flex h-13 w-13 items-center justify-center rounded-full border border-white/30 bg-[#25D366] text-white shadow-[0_10px_28px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fbd5a] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M20.4 11.7a8.3 8.3 0 0 1-12.3 7.2L4 20.2l1.3-4A8.3 8.3 0 1 1 20.4 11.7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8.7 8.3c.3 2.8 2.2 4.8 5.1 5.6l1.1-1.3c.2-.2.5-.3.8-.2l1.8.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#102a4a] px-3 py-2 text-xs font-bold shadow-lg group-hover:block sm:block sm:translate-x-2 sm:opacity-0 sm:transition-all sm:group-hover:translate-x-0 sm:group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
