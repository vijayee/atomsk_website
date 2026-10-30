import { FormEvent, useEffect, useState } from "react"

const labPhoto =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800"

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {diagonal ? (
        <path d="M5 15 15 5m-7 0h7v7" />
      ) : (
        <path d="M3 10h14m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo--light" : ""}`} href="#top" aria-label="Atomsk home">
      <img src="/atomsk-logo.svg" alt="" />
      <span>Atomsk</span>
    </a>
  )
}

function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <Logo />
      <nav className={open ? "nav__links nav__links--open" : "nav__links"} aria-label="Main navigation">
        <a href="#problem" onClick={() => setOpen(false)}>Problem</a>
        <a href="#products" onClick={() => setOpen(false)}>Products</a>
        <a href="#technology" onClick={() => setOpen(false)}>Technology</a>
        <a href="#validation" onClick={() => setOpen(false)}>How it works</a>
        <a href="#company" onClick={() => setOpen(false)}>Company</a>
        <a className="button button--small" href="#updates" onClick={() => setOpen(false)}>
          Get updates <Arrow />
        </a>
      </nav>
      <button
        className={`menu ${open ? "menu--open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>
    </header>
  )
}

function ChipVisual() {
  return (
    <div className="chip-stage" aria-label="Concept rendering of the Violet AI accelerator">
      <div className="chip-stage__orbit chip-stage__orbit--one">
        <i className="electron electron--1" />
        <i className="electron electron--2" />
        <i className="electron electron--3" />
        <i className="electron electron--4" />
        <i className="electron electron--5" />
      </div>
      <div className="chip-stage__orbit chip-stage__orbit--two">
        <i className="electron electron--1" />
        <i className="electron electron--2" />
        <i className="electron electron--3" />
        <i className="electron electron--4" />
        <i className="electron electron--5" />
        <i className="electron electron--6" />
        <i className="electron electron--7" />
        <i className="electron electron--8" />
      </div>
      <div className="chip-card">
        <div className="chip-card__bracket">
          <i /><i /><i /><i />
        </div>
        <div className="chip-card__traces" />
        <div className="chip-card__core">
          <img src="/atomsk-logo.svg" alt="" />
          <span>ATOMSK</span>
        </div>
        <div className="chip-card__memory chip-card__memory--one" />
        <div className="chip-card__memory chip-card__memory--two" />
        <div className="chip-card__memory chip-card__memory--three" />
        <div className="chip-card__memory chip-card__memory--four" />
        <div className="chip-card__pins" />
      </div>
      <span className="chip-label chip-label--a">PCIe</span>
      <span className="chip-label chip-label--b">128 GB DDR5</span>
      <span className="chip-label chip-label--c">Under 75 W</span>
    </div>
  )
}

function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="eyebrow">
      {number && <span>{number}</span>}
      <p>{children}</p>
    </div>
  )
}

const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID
const KIT_API_KEY = import.meta.env.VITE_KIT_API_KEY

type SubscribeStatus = "idle" | "submitting" | "success" | "error"

async function subscribeToKit(email: string): Promise<void> {
  if (!KIT_FORM_ID || !KIT_API_KEY) {
    throw new Error(
      "Email updates are not configured yet. Set VITE_KIT_FORM_ID and VITE_KIT_API_KEY.",
    )
  }
  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ api_key: KIT_API_KEY, email }),
    },
  )
  if (!res.ok) {
    let message = `Subscription failed (${res.status}). Please try again.`
    try {
      const data = (await res.json()) as { message?: string }
      if (data.message) message = data.message
    } catch {
      // non-JSON error body — keep the generic message
    }
    throw new Error(message)
  }
}

function SignupForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<SubscribeStatus>("idle")
  const [message, setMessage] = useState("")

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get("email") ?? "")
    if (!email.includes("@")) {
      setMessage("Enter a valid email address.")
      return
    }
    if (status === "submitting") return
    setStatus("submitting")
    setMessage("")
    subscribeToKit(email)
      .then(() => {
        setStatus("success")
        setMessage("You’re on the list. We’ll keep you posted.")
        form.reset()
      })
      .catch((err: unknown) => {
        setStatus("error")
        setMessage(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        )
      })
  }

  return (
    <form className={`signup ${compact ? "signup--compact" : ""}`} onSubmit={submit} noValidate>
      <label className="signup__label" htmlFor={compact ? "email-footer" : "email-main"}>Email address</label>
      <div className="signup__controls">
        <input
          id={compact ? "email-footer" : "email-main"}
          name="email"
          type="email"
          inputMode="email"
          placeholder="you@example.com"
          disabled={status === "submitting"}
          aria-describedby={compact ? "message-footer" : "message-main"}
        />
        <button type="submit" disabled={status === "submitting"}>
          Get updates <Arrow />
        </button>
      </div>
      <p
        id={compact ? "message-footer" : "message-main"}
        aria-live="polite"
        style={status === "error" ? { color: "var(--orange)" } : undefined}
      >{message}</p>
    </form>
  )
}

const specs = [
  ["128 GB", "Quad DDR5 memory", "User-installable memory on the Violet consumer accelerator card."],
  ["< 75 W", "Target board power", "Violet is being developed around a desktop-friendly power target."],
  ["70B", "Class models on-card", "A 70B-class lab on a PCIe card, with 7B-class conversational speed."],
]

const steps = [
  ["01", "Compressed", "Compression technique achieves up to 70% reduction in size."],
  ["02", "Decoded", "The datapath decodes weights directly through Advanced Efficiency Multipliers."],
  ["03", "Verified", "Measured, not promised.\n250 MHz Bit-exact FPGA validation"],
]

function App() {
  return (
    <main id="top">
      <Navigation />

      <section className="hero">
        <div className="hero__copy">
          <div className="pill"><span /> ADVANCED EFFICIENCY MULTIPLIER TECHNOLOGY</div>
          <h1>
            <span>Inference chips</span>
            <em>with Advanced</em>
            <em>Efficiency.</em>
          </h1>
          <p>
            Atomsk hardware runs large language and diffusion models on our
            Advanced Efficiency Multiplier Architecture. Compressed HPMT weights
            decode directly in hardware. Datacenter-class models at desktop
            power and price.
          </p>
          <div className="hero__actions">
            <a className="button" href="#updates">Get updates <Arrow /></a>
            <a className="text-link" href="#products">See the numbers <Arrow diagonal /></a>
          </div>
        </div>
        <div className="hero__visual">
          <ChipVisual />
        </div>
        <div className="hero__ticker" aria-hidden="true" />
      </section>

      <section className="manifesto" id="problem">
        <Eyebrow number="01">The problem</Eyebrow>
        <div className="manifesto__grid">
          <h2>
            Inference is a memory problem.
            <br />
            <span>Don’t make it an energy or storage problem.</span>
          </h2>
          <div>
            <p>
              Running a large model means streaming billions of weights past the
              arithmetic, once per token. Conventional accelerators pay for
              multipliers that sit idle waiting for data.
            </p>
            <p>
              Our format moves decode into the memory path, so inference moves as
              fast as bandwidth will allow. HPMT lowers the cost of energy and
              the size of storage to non-issues.
            </p>
          </div>
        </div>
      </section>

      <section className="products" id="products" aria-labelledby="violet-title">
        <div className="products__intro">
          <div className="products__heading">
            <Eyebrow number="02">Products</Eyebrow>
            <div className="products__status"><span /> In development · Consumer</div>
            <p className="products__introducing">Introducing…</p>
            <h2 id="violet-title">Violet.</h2>
          </div>
          <div className="products__summary">
            <h3>A 70B-class lab on a PCIe card.</h3>
            <p>
              Local inference keeps your data on your machine and your costs
              flat. Violet makes local practical for models that used to need a
              rack.
            </p>
            <p>
              Violet is Atomsk’s first hardware: an affordably priced consumer
              accelerator card.
            </p>
          </div>
        </div>

        <div className="products__spec-label">Violet · Target specifications</div>
        <div className="products__specs">
          {specs.map(([value, label, description], index) => (
            <article key={value}>
              <span>0{index + 1}</span>
              <strong>{value}</strong>
              <h3>{label}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="products__disclaimer">
          <strong>Product status</strong>
          <p>
            Violet and Ultraviolet are in development. All chip specifications
            are target or modeled figures. Nothing ships yet.
          </p>
        </div>

        <div className="ultraviolet">
          <div>
            <div className="products__status products__status--dark"><span /> In development · Datacenter</div>
            <h2>Ultraviolet.</h2>
            <h3>Datacenter economics, re-cut.</h3>
            <p>The same Advanced Efficiency Multiplier datapath, scaled to HBM3e.</p>
          </div>
          <div>
            <p className="ultraviolet__label">Modeled specifications</p>
            <ul>
              <li><span>2,600+</span> tokens/s per card at batch 16</li>
              <li><span>45 mJ</span> per token</li>
              <li><span>&gt;10×</span> lower cost per token vs. H100-class systems</li>
              <li><span>~2.2 s</span> for SD3-class images</li>
            </ul>
            <small>Based on internal TCO modeling. Methodology available on request.</small>
          </div>
        </div>
      </section>

      <section className="platform" id="technology">
        <div className="platform__image" style={{ backgroundImage: `url(${labPhoto})` }}>
          <span>Photo: Taylor Vick / Unsplash</span>
        </div>
        <div className="platform__copy">
          <Eyebrow number="03">Technology</Eyebrow>
          <h2>Compressed at rest. Exact in flight.</h2>
          <p>
            HPMT is our hardware-native compressed format. The datapath decodes
            weights directly through AE Multipliers rather than paying for
            conventional multipliers that wait on memory.
          </p>
          <ul>
            <li><span>01</span> +0.14 Mistral-7B perplexity at the default setting</li>
            <li><span>02</span> Better than leading 4-bit methods at comparable size</li>
            <li><span>03</span> Bit-exact across CPU, simulation, and FPGA</li>
          </ul>
          <a className="text-link" href="#validation">See how it works <Arrow /></a>
        </div>
      </section>

      <section className="workflow" id="validation">
        <div className="workflow__header">
          <Eyebrow number="04">How it works</Eyebrow>
          <h2>
            Weights that nibble<br />
            space and sip power.
          </h2>
        </div>
        <div className="workflow__steps">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <div className="workflow__icon" aria-hidden="true">
                <i /><i /><i />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="terminal">
          <div className="terminal__bar">
            <span /><span /><span />
            <p>hpmt — validation console</p>
          </div>
          <div className="terminal__body">
            <code><i>$</i> hpmt verify model.weights</code>
            <code><b>✓</b> CPU <span>bit-exact match</span></code>
            <code><b>✓</b> SIM <span>bit-exact match</span></code>
            <code><b>✓</b> FPGA <span>bit-exact match · 250 MHz</span></code>
            <code><b>✓</b> CORE <span>AE Multiplier datapath</span></code>
            <code className="terminal__active"><i>$</i> <em /></code>
          </div>
        </div>
      </section>

      <section className="story" id="company">
        <div className="story__mark">
          <img src="/atomsk-logo.svg" alt="" />
        </div>
        <div className="story__copy">
          <Eyebrow number="05">Company</Eyebrow>
          <blockquote>
            Small team.<br />Big idea.
          </blockquote>
          <p>
            Atomsk was founded on a single observation: the mathematics decides
            the economics of inference. The hardware is validated on FPGA today.
            First silicon is in development. AI that can run on more devices and
            is owned by more people.
          </p>
        </div>
      </section>

      <section className="reserve" id="updates">
        <div>
          <Eyebrow>Roadmap / In development</Eyebrow>
          <h2>What happens<br />next.</h2>
        </div>
        <div className="reserve__form">
          <p>
            Violet is the first hardware: a consumer accelerator card with 128 GB
            DDR5 and an under-75 W target. Violet silicon is in development.
          </p>
          <SignupForm />
          <small>By subscribing, you agree to receive product emails. Unsubscribe anytime.</small>
        </div>
      </section>

      <footer>
        <div className="footer__top">
          <Logo light />
          <p>Inference chips with<br />Advanced Efficiency.</p>
          <div className="footer__links">
            <a href="#problem">Problem</a>
            <a href="#products">Products</a>
            <a href="#technology">Technology</a>
            <a href="#validation">How it works</a>
            <a href="#company">Company</a>
            <a href="#updates">Get updates</a>
          </div>
          <a className="footer__toplink" href="#top" aria-label="Back to top">↑</a>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Atomsk, Inc.</span>
          <span>Violet and Ultraviolet are in development.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
