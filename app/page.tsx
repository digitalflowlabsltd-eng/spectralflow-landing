export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* Top bar */}
      <div className="border-b px-8 py-4 flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
          Digital Flow Labs
        </span>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
          spectralflow.ai
        </span>
      </div>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-8 md:px-24 py-24 max-w-5xl mx-auto w-full">

        <div className="mb-3">
          <span
            className="font-mono text-xs tracking-widest uppercase px-2 py-1 rounded"
            style={{ color: "var(--accent)", border: "1px solid var(--accent)", opacity: 0.8 }}
          >
            Platform in development
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mt-6 mb-8"
          style={{ color: "var(--foreground)" }}
        >
          SpectralFlow
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-4" style={{ color: "#8a9ab5" }}>
          Quantum co-design platform for NV-center engineering.
        </p>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          SpectralFlow enables researchers and engineers to model, simulate and optimize
          NV-center spin coherence — from surface passivation to CPMG pulse sequences —
          entirely from a web interface.
        </p>

        {/* Divider */}
        <div className="my-12 h-px w-16" style={{ background: "var(--border)" }} />

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Academic
            </p>
            <p className="text-sm leading-7" style={{ color: "#8a9ab5" }}>
              Design and validate NV-center experiments before going to the lab.
              Predict T₂ coherence times, test spectral noise engineering hypotheses,
              and generate falsifiable experimental protocols.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Industrial
            </p>
            <p className="text-sm leading-7" style={{ color: "#8a9ab5" }}>
              Accelerate development of quantum sensors for precision metrology,
              semiconductor characterization and quantum processing units.
              Co-design material parameters against sensing performance.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://studio.spectralflow.ai"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-opacity hover:opacity-80"
            style={{ background: "var(--accent)", color: "#08090b" }}
          >
            Access the platform
            <span>→</span>
          </a>
          <a
            href="mailto:alex@spectralflow.ai"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-opacity hover:opacity-80"
            style={{ border: "1px solid var(--border)", color: "#8a9ab5" }}
          >
            Contact us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-8 py-6" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              SpectralFlow SAS — <span style={{ color: "var(--accent)" }}>en cours de création</span>
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
              A <a href="https://digitalflowlabs.com" className="hover:underline" style={{ color: "#8a9ab5" }}>Digital Flow Labs</a> initiative · UK · {new Date().getFullYear()}
            </p>
          </div>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            Intellectual property protected · PCT filing in progress
          </p>
        </div>
      </footer>

    </main>
  );
}
