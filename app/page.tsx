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
          Quantum co-design platform for spin-defect engineering.
        </p>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          SpectralFlow enables researchers and engineers to model, simulate and optimize
          spin coherence across four material platforms — NV in diamond, V<sub>B</sub><sup>-</sup> in hBN,
          V<sub>Si</sub> and PL6 in 4H-SiC — from surface passivation to dynamical decoupling
          protocols (CPMG, XY-8, KDD), entirely from a web interface.
        </p>
        <p className="font-mono text-xs tracking-widest uppercase mt-6" style={{ color: "var(--accent)", opacity: 0.7 }}>
          10-channel decoherence model &middot; 57 experimental anchors &middot; 5 UK patents pending &middot; Falsifiable predictions
        </p>

        {/* Divider */}
        <div className="my-12 h-px w-16" style={{ background: "var(--border)" }} />

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Sensor Designer
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Design NV-diamond sensors before fabrication. 10-channel noise budget,
              three falsifiable design rules (depth, diameter, density), global optimizer
              with lock-and-optimize workflow. Nanodiamond and bulk diamond modes.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Simulate &amp; Compare
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Monte Carlo simulation across four quantum platforms.
              Compare NV, hBN, SiC defects side by side.
              Temperature sweeps, protocol optimization, spectral noise analysis.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Validated Physics
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Every prediction is traceable. 57 experimental anchors from 30+ publications.
              Cambria T<sub>1</sub> model (2023), Park CCE spectral diffusion (2025),
              Han spin-lattice channel (2025). R<sup>2</sup> = 0.953.
            </p>
          </div>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: "10", label: "Decoherence channels" },
            { value: "57", label: "Calibration anchors" },
            { value: "4", label: "Material platforms" },
            { value: "5", label: "Patents pending" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold" style={{ color: "var(--accent)" }}>{stat.value}</p>
              <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://studio.spectralflow.ai"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-opacity hover:opacity-80"
            style={{ background: "var(--accent)", color: "#05050A", boxShadow: "0 0 15px rgba(0, 229, 255, 0.4)" }}
          >
            Open SpectralFlow Studio
            <span>&rarr;</span>
          </a>
          <a
            href="mailto:alex@spectralflow.ai"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded transition-opacity hover:opacity-80"
            style={{ border: "1px solid var(--border)", color: "var(--muted)", backdropFilter: "blur(12px)" }}
          >
            Contact
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-8 py-6" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
              SpectralFlow &mdash; Spectral Flow SAS (in formation)
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
              France &middot; {new Date().getFullYear()}
            </p>
          </div>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            5 UK patents pending &middot; GB2604407.3 &ndash; GB2606382.6
          </p>
        </div>
      </footer>

    </main>
  );
}
