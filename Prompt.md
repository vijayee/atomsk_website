TASK: Rewrite ALL copy on this site. DO NOT change fonts, colors, spacing,
layout structure, or components. Only replace text content and section order.

=== COMPANY FACTS (use these only; invent nothing) ===
- Atomsk is a small hardware startup building multiplier-free AI inference chips.
- Core idea: weights are stored in a proprietary compressed format (name: HPMT)
  that decodes directly in hardware without a single multiplication. No
  multiply-accumulate arrays anywhere in the datapath.
- Validation status: the datapath is verified bit-exact — the same weight file
  decodes identically on CPU, in simulation, and on FPGA at 250 MHz.
  ASICs are IN DEVELOPMENT, not shipping. All chip specs are "target" specs.
- Product 1 — Violet: consumer PCIe inference card (in development).
  Target retail $499. 128 GB quad-channel DDR5 on user-installable DIMMs.
  Under 75 W. Runs 7B-class models locally; fits 70B-class models on-card.
- Product 2 — Ultraviolet: datacenter accelerator (in development), same
  datapath scaled to HBM3e. Modeled: 2,600+ tok/s per card at batch 16,
  45 mJ per token, >10× lower cost per token than H100-class systems
  (internal TCO model, methodology available on request). Also runs diffusion
  workloads (SD3-class image in ~2.2 s, modeled).
- First hardware: FPGA developer kits for early partners.

=== VOICE RULES (apply everywhere) ===
1. Numbers over adjectives. If a claim has no number, cut the adjective.
2. Short declarative sentences. One idea per sentence. Max ~20 words.
3. Sentence case for all headings. No exclamation marks. No rhetorical questions.
4. Calm, confident, engineer-to-engineer. Style references: etched.com, groq.com.
5. BANNED words/phrases: revolutionary, cutting-edge, next-generation,
   game-changing, unleash, unlock, supercharge, seamless, empower, democratize,
   "the future of", redefine, leverage (as a verb), "in today's world",
   "we're excited", blazing, enterprise-grade.
6. Label every ASIC spec as "target" or "modeled." Nothing ships yet.
7. Do NOT add testimonials, customer logos, press quotes, fake team members,
   or any section not specified below.
8. Use the copy below VERBATIM. Do not paraphrase, expand, or add claims.

=== SITE COPY ===

[NAV] Products · Technology · Numbers · Company · Get updates

[HERO]
H1: "Inference chips without multipliers."
Sub: "Atomsk hardware runs large language and diffusion models by decoding
compressed weights directly — no multiplication hardware in the datapath.
Datacenter-class models at desktop power and price."
Primary CTA: "Get updates"  Secondary CTA: "See the numbers"

[STAT STRIP]
"$499 target retail" · "128 GB on-card memory" · "Under 75 W" ·
"Up to 70B-parameter models"

[SECTION: THE PROBLEM]
H2: "Inference is a memory problem, not a math problem."
Body: "Running a large model means streaming billions of weights past the
arithmetic, once per token. Conventional accelerators pay for multipliers
that sit idle waiting for data. Our format moves the decode into the memory
path, so bandwidth — not silicon multipliers — is the only bottleneck left.
That is exactly where an accelerator should spend its money."

[SECTION: TECHNOLOGY]
H2: "Compressed at rest. Exact in flight."
- "Weights ship in HPMT, our hardware-native compressed format."
- "The datapath decodes weights directly, without a single multiplication."
- "At our default setting, Mistral-7B perplexity changes by just +0.14 —
  better than leading 4-bit quantization methods at comparable size."
- "Verified bit-exact: one weight file, identical decode on CPU,
  simulation, and FPGA."
Note: do NOT describe the encoding mechanism itself (no internal details of
how the format works).

[SECTION: VIOLET]
H2: "Violet. A 70B-class lab on a PCIe card."
Body: "Local inference keeps your data on your machine and your costs flat.
Violet makes local practical for models that used to need a rack."
Spec list (all labeled "target"):
$499 retail · 128 GB quad DDR5, user-installable · Under 75 W ·
7B-class conversational speed · 70B-class models entirely on-card
Footer line: "FPGA developer kits available first, for early partners."

[SECTION: ULTRAVIOLET]
H2: "Ultraviolet. Datacenter economics, re-cut."
Body: "The same datapath, scaled to HBM3e."
Spec list (all labeled "modeled"):
2,600+ tokens/s per card at batch 16 · 45 mJ per token ·
>10× lower cost per token vs. H100-class systems ·
SD3-class images in ~2.2 s
Fine print: "Based on internal TCO modeling. Methodology available on request."

[SECTION: NUMBERS]
H2: "Measured, not promised."
- Bit-exact FPGA validation at 250 MHz.
- +0.14 perplexity on Mistral-7B at default compression (internal measurement).
- Datacenter figures are modeled, labeled, and reproducible under NDA.

[SECTION: COMPANY]
H2: "Small team. One idea."
Body: "Atomsk was founded on a single observation: remove the multiplier
from inference and the economics change. The hardware is validated on FPGA
today. First silicon is in development."
[Add placeholders for founder name/location — do not invent them.]

[SECTION: ROADMAP + CTA]
H2: "What happens next"
- "FPGA developer kits for early partners."
- "Violet silicon in development."
- "Datacenter TCO white paper on request."
Email capture: "Get updates" (single field, single button)
Contact line: "Investor and datacenter inquiries: [placeholder email]"
