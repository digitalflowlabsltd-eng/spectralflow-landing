export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* Top bar */}
      <div className="border-b px-8 py-4 flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
          SpectralFlow
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
            style={{ color: "var(--accent)", border: "1px solid var(--accent)", backgroundColor: "rgba(0, 229, 255, 0.1)", opacity: 0.9, textShadow: "0 0 10px rgba(0, 229, 255, 0.5)" }}
          >
            Open access
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mt-6 mb-8"
          style={{ color: "var(--foreground)", textShadow: "0 0 30px rgba(255, 255, 255, 0.1)" }}
        >
          SpectralFlow
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-4" style={{ color: "var(--muted)" }}>
          Quantum co-design platform for NV-center engineering.
        </p>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          SpectralFlow enables researchers and engineers to model, simulate and optimize
          NV-center spin coherence — from surface passivation to CPMG pulse sequences —
          entirely from a web interface.
        </p>
        <p className="font-mono text-xs tracking-widest uppercase mt-6" style={{ color: "var(--accent)", opacity: 0.7 }}>
          8-channel decoherence model · 34 experimental anchors · Falsifiable predictions
        </p>

        {/* Divider */}
        <div className="my-12 h-px w-16" style={{ background: "var(--border)" }} />

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Academic
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Design and validate NV-center experiments before going to the lab.
              Predict T₂ coherence times, test spectral noise engineering hypotheses,
              and generate falsifiable experimental protocols.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Industrial
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
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
            style={{ background: "var(--accent)", color: "#05050A", boxShadow: "0 0 15px rgba(0, 229, 255, 0.4)" }}
          >
            Access the platform
            <span>→</span>
          </a>
          <a
            href="mailto:alex@spectralflow.ai"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-opacity hover:opacity-80"
            style={{ border: "1px solid var(--border)", color: "var(--muted)", backdropFilter: "blur(12px)" }}
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
              SpectralFlow — a <span style={{ color: "var(--accent)" }}>Digital Flow Labs</span> initiative
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
              France · {new Date().getFullYear()}
            </p>
          </div>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            Patent pending
          </p>
        </div>
      </footer>

    </main>
  );
}
