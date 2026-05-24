export function HeroContent() {
  return (
    <div className="relative h-full flex items-center bg-[#515151] z-20">
      <div className="w-full max-w-3xl px-6 sm:px-12 lg:px-20">
        <p className="text-sm sm:text-base font-semibold tracking-[0.2em] text-white/70  uppercase">
          Eternal Promise
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
          Your Heavenly Home.
          <br />
          <span className="text-emerald-300">With Jesus, Forever.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
          In His Father's house are many mansions. He has gone to prepare a
          place for you — a place of perfect peace, boundless joy, and
          everlasting love in His presence.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#promises"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            Explore Promises
          </a>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Connect With Us
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
          {[
            { value: "John 14:2", label: "Promise" },
            { value: "Eternal", label: "Life" },
            { value: "Reign", label: "With Him" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
