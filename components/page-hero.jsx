import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true">
      <path
        d="M7.5 3.5H5.2c-.9 0-1.7.7-1.7 1.7 0 8.5 6.8 15.3 15.3 15.3.9 0 1.7-.7 1.7-1.7v-2.3c0-.8-.5-1.4-1.2-1.6l-3-.8c-.6-.2-1.3 0-1.7.5l-.7.9a13.1 13.1 0 0 1-5.4-5.4l.9-.7c.5-.4.7-1.1.5-1.7l-.8-3c-.2-.7-.8-1.2-1.6-1.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroAction({ action }) {
  const className = `group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 text-center text-[13px] font-bold transition-all duration-300 sm:w-fit sm:gap-3 sm:px-7 sm:text-sm ${
    action.variant === "secondary"
      ? "border border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-[#102a4a]"
      : "bg-orange-500 text-white shadow-[0_12px_30px_rgba(249,115,22,0.24)] hover:bg-orange-600"
  }`;

  const content = (
    <>
      {action.icon === "phone" && <PhoneIcon />}
      <span>{action.label}</span>
      {action.icon !== "phone" && <ArrowIcon />}
    </>
  );

  if (action.href.startsWith("/")) {
    return (
      <Link href={action.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={action.href} className={className}>
      {content}
    </a>
  );
}

export function PageHero({
  image,
  imageAlt,
  imagePosition = "center",
  eyebrow,
  title,
  description,
  actions,
}) {
  return (
    <section className="w-full bg-white pb-8 sm:pb-10">
      <div className="relative min-h-[500px] w-full overflow-hidden bg-slate-950 sm:min-h-[520px] lg:min-h-[560px]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: imagePosition }}
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-end px-5 pb-10 pt-24 sm:min-h-[520px] sm:items-center sm:px-8 sm:py-12 lg:min-h-[560px] lg:px-12 xl:px-6">
          <div className="w-full max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/35 bg-black/25 px-3.5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-300 sm:text-[10px]">
                {eyebrow}
              </p>
            </div>

            <h1 className="mt-5 max-w-3xl text-[2.35rem] font-bold leading-[1.02] tracking-[-0.04em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/85 drop-shadow-md sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions.map((action) => (
                <HeroAction key={`${action.href}-${action.label}`} action={action} />
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3 text-white/60 sm:hidden">
              <span className="h-px flex-1 bg-white/30" />
              <span className="text-[8px] font-bold uppercase tracking-[0.2em]">
                Power Electrode Ltd
              </span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 right-8 hidden items-center gap-3 text-white/40 lg:flex">
          <span className="h-px w-12 bg-white/35" />
          <span className="text-[9px] font-bold uppercase tracking-[0.24em]">
            Engineered in Ghana
          </span>
        </div>
      </div>
    </section>
  );
}
