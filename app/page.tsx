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
            12 UK patents filed
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mt-6 mb-8"
          style={{ color: "var(--foreground)", textShadow: "0 0 30px rgba(255, 255, 255, 0.1)" }}
        >
          SpectralFlow
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-4" style={{ color: "var(--muted)" }}>
          Quantum coherence is no longer a trial-and-error chemistry problem.
        </p>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--muted)" }}>
          SpectralFlow predicts T<sub>2</sub>, T<sub>1</sub>, gate fidelity, and sensitivity
          from first principles — before you enter the cleanroom.
          Four material platforms, three application verticals, one engine.
        </p>
        <p className="font-mono text-xs tracking-widest uppercase mt-6" style={{ color: "var(--accent)", opacity: 0.7 }}>
          17+ decoherence channels &middot; 80 experimental anchors &middot; R² = 0.953 &middot; 1.3 K – 600 K
        </p>

        {/* Divider */}
        <div className="my-12 h-px w-16" style={{ background: "var(--border)" }} />

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Before fabrication
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Lock your constraints, run the optimizer, get a fabrication spec.
              17+ channel noise budget, three falsifiable design rules, CPMG/XY-8/KDD optimizer.
              Every failed run you skip is six weeks and €30k saved.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Full-stack physics
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              From single NV coherence to QPU gate fidelity and entanglement routing.
              XZZX bias-optimised QEC with &minus;95% overhead.
              Peltier 250&thinsp;K sweet spot. One engine, three verticals: sensing, computing, networking.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Citable, not black-box
            </p>
            <p className="text-sm leading-7" style={{ color: "var(--muted)" }}>
              Every number has a reference. 80 anchors from 30+ publications, R<sup>2</sup>&thinsp;=&thinsp;0.953.
              Predictions you can put in a grant application or a PRL submission.
              When the model is approximate, we say so.
            </p>
          </div>
        </div>

        {/* Key numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: "17+", label: "Decoherence channels" },
            { value: "80",  label: "Calibration anchors" },
            { value: "4",   label: "Material platforms" },
            { value: "12",  label: "Patents filed in 12 months" },
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
              SpectralFlow SAS &mdash; France
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--muted)" }}>
              {new Date().getFullYear()}
            </p>
          </div>
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            12 UK patents filed &middot; GB2604407.3 &ndash; GB2607023.5
          </p>
        </div>
      </footer>

    </main>
  );
}
