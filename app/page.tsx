'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Cpu,
  FileDown,
  Factory,
  FlaskConical,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MoveRight,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const products = [
  { number: '01', title: 'Standard Jewel Case', meta: '10.4 mm / GPPS', detail: 'High-gloss GPPS · engineered book-fold hinge · 1,000+ cycle fatigue resistance', spec: '10.4 mm', icon: Layers3 },
  { number: '02', title: 'Slimline Case', meta: '5.2 mm / PP', detail: 'Ultra-thin space-saving optical tray · optimized for premium media collections', spec: '5.2 mm', icon: Sparkles },
  { number: '03', title: 'Multi-Disc Housing', meta: 'Dual / Quad Tray', detail: 'Modular disc trays · SD / USB integrated media organizers · export ready', spec: '2–4 trays', icon: Cpu },
  { number: '04', title: 'Collectible Brick', meta: 'Optical-grade / GPPS', detail: 'Acrylic-equivalent clarity · scratch-resistant snap locks for card & idol markets', spec: '0.05 mm', icon: Zap },
]

const standards = [
  ['Cd', '< 5 ppm'], ['Pb', 'Zero added'], ['Hg', 'Zero added'], ['Cr⁶⁺', 'Zero added'], ['PBB', 'Zero added'], ['PBDE', 'Zero added'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedLine, setSelectedLine] = useState('CD Standard')
  const [submitted, setSubmitted] = useState(false)

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-[#fafafa] selection:bg-sky-400 selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />
      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-32px)] max-w-[1240px] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-4 py-3 backdrop-blur-xl md:px-5">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight"><span className="grid size-7 place-items-center rounded-full bg-white text-[10px] text-black">X</span><span>XINHUI <span className="font-normal text-zinc-500">· est. 2002</span></span></a>
        <div className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.15em] text-zinc-400 lg:flex"><a href="#engineering" className="transition-colors hover:text-white">Engineering</a><a href="#standard" className="transition-colors hover:text-white">SS-00259 Standard</a><a href="#tooling" className="transition-colors hover:text-white">Tooling Catalog</a><a href="#global" className="transition-colors hover:text-white">Global Supply</a></div>
        <a href="#quote" className="hidden items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-sky-950 transition-all hover:bg-white sm:flex">Request sample kit <ArrowUpRight size={14} /></a>
        <button aria-label="打开菜单" onClick={() => setMenuOpen(!menuOpen)} className="grid size-9 place-items-center rounded-full border border-white/10 text-zinc-300 sm:hidden">{menuOpen ? <X size={17} /> : <Menu size={17} />}</button>
        {menuOpen && <div className="absolute right-0 top-14 flex w-56 flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-5 text-sm text-zinc-300 shadow-2xl sm:hidden"><a href="#engineering" onClick={() => setMenuOpen(false)}>Engineering</a><a href="#standard" onClick={() => setMenuOpen(false)}>SS-00259 Standard</a><a href="#tooling" onClick={() => setMenuOpen(false)}>Tooling Catalog</a><a href="#quote" onClick={() => setMenuOpen(false)} className="text-sky-300">Request sample kit →</a></div>}
      </nav>

      <section id="top" className="relative z-10 mx-auto flex min-h-[820px] max-w-[1240px] flex-col justify-center px-5 pb-20 pt-36 md:px-10 lg:min-h-[900px]">
        <div className="max-w-4xl"><div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300"><span className="size-1.5 animate-pulse rounded-full bg-sky-300" /> Certified Sony Green Partner · UKAS · 5M/Mo</div>
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.07em] md:text-7xl lg:text-[104px]">Optical-grade<br /><span className="text-zinc-500">injection molding.</span></h1>
          <p className="mt-9 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">Engineered for global media & collectibles. 24 years of zero-scratch mold craftsmanship, zero-hazardous compliance, and direct-source manufacturing.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3"><a href="#quote" className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">Claim free sample pack <ArrowUpRight size={16} /></a><a href="#tooling" className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-300 transition-colors hover:border-sky-300/60 hover:text-white">Explore tooling library <FileDown size={16} /></a></div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-6 md:flex md:gap-20"><Metric value="24" label="Years of precision" /><Metric value="60+" label="Countries supplied" /><Metric value="±0.05" label="mm tolerance" /><Metric value="5M+" label="Units / month" /></div>
        <div className="absolute bottom-10 right-5 hidden h-[330px] w-[330px] md:block lg:right-16 lg:h-[390px] lg:w-[390px]"><div className="absolute inset-8 rounded-full border border-sky-300/20 shadow-[0_0_100px_rgba(56,189,248,.15)]" /><div className="case-visual absolute left-1/2 top-1/2 h-56 w-40 -translate-x-1/2 -translate-y-1/2 -rotate-[9deg] rounded-xl border border-white/35 bg-gradient-to-br from-white/20 via-sky-100/5 to-transparent shadow-[12px_20px_40px_rgba(0,0,0,.6),inset_2px_2px_20px_rgba(255,255,255,.2)]"><div className="absolute inset-5 rounded-md border border-white/15" /><div className="absolute bottom-5 left-5 right-5 h-8 rounded border border-white/10 bg-white/5" /></div><div className="absolute right-1 top-16 rounded-lg border border-white/10 bg-zinc-900/80 p-3 backdrop-blur"><p className="text-[9px] uppercase tracking-widest text-zinc-500">Tolerance</p><p className="mt-1 font-mono text-sm text-sky-300">± 0.05 mm</p></div><div className="absolute bottom-16 left-0 rounded-lg border border-white/10 bg-zinc-900/80 p-3 backdrop-blur"><p className="text-[9px] uppercase tracking-widest text-zinc-500">Raw resin</p><p className="mt-1 font-mono text-sm text-white">100% virgin GPPS</p></div></div>
      </section>

      <section id="engineering" className="relative z-10 border-y border-white/10 bg-zinc-950/60"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:py-32"><div><Eyebrow>01 / The benchmark</Eyebrow><h2 className="mt-5 max-w-md text-4xl leading-[1.05] tracking-[-0.05em] md:text-6xl">Compliance is not a badge.<br /><span className="text-zinc-500">It is the baseline.</span></h2><p className="mt-6 max-w-sm leading-7 text-zinc-400">Our factory is audited to Sony Technical Standard SS-00259—so every enclosure leaves ready for the world&apos;s most demanding markets.</p><a href="#standard" className="mt-8 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-white">Explore the standard <MoveRight size={16} /></a></div><div id="standard" className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2"><div className="bg-zinc-950 p-7 sm:col-span-2"><div className="flex items-start justify-between"><div><ShieldCheck className="text-sky-300" size={22} /><h3 className="mt-5 text-xl font-medium">Sony Green Partner / SS-00259</h3><p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">Laboratory-grade hazardous substance management. Export clearance for EU, Japan, and North America.</p></div><span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] uppercase tracking-widest text-emerald-300">Verified</span></div><div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">{standards.map(([name, value]) => <div key={name} className="border-l border-white/10 pl-3"><p className="font-mono text-xs text-zinc-500">{name}</p><p className="mt-1 text-[11px] text-sky-300">{value}</p></div>)}</div></div><Feature icon={Factory} title="Precision tooling" text="Cleanroom molding · robotic pick & place · anti-static de-ionizing curtains." /><Feature icon={Globe2} title="Factory backbone" text="2,000-unit prototyping · 5–7 day rapid sampling · direct global supply." /></div></div></section>

      <section id="tooling" className="relative z-10 mx-auto max-w-[1240px] px-5 py-24 md:px-10 lg:py-32"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>02 / Product architecture</Eyebrow><h2 className="mt-5 text-4xl tracking-[-0.05em] md:text-6xl">Built to be handled.<br /><span className="text-zinc-500">Made to be kept.</span></h2></div><p className="max-w-xs text-sm leading-6 text-zinc-500">A modular tooling library, tuned for the objects people hold onto.</p></div><div className="mt-14 grid gap-3 md:grid-cols-2">{products.map((product) => <article key={product.number} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-colors hover:border-sky-300/40 md:p-8"><div className="flex items-start justify-between"><span className="font-mono text-xs text-zinc-600">{product.number}</span><product.icon size={22} strokeWidth={1.2} className="text-zinc-500 transition-colors group-hover:text-sky-300" /></div><div className="mt-16 flex items-end justify-between gap-4"><div><h3 className="text-2xl tracking-tight">{product.title}</h3><p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-sky-300">{product.meta}</p></div><span className="font-mono text-3xl tracking-tighter text-zinc-700">{product.spec}</span></div><p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">{product.detail}</p><div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-[10px] uppercase tracking-widest text-zinc-600">Virgin resin / DFM ready</span><button className="text-xs text-zinc-300 transition-colors hover:text-sky-300">Spec sheet <ArrowUpRight size={13} className="ml-1 inline" /></button></div></article>)}</div></section>

      <section id="quote" className="relative z-10 border-t border-white/10 bg-zinc-950"><div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[.7fr_1.3fr] lg:py-32"><div><Eyebrow>03 / RFQ terminal</Eyebrow><h2 className="mt-5 text-4xl tracking-[-0.05em] md:text-6xl">Let&apos;s make<br /><span className="text-zinc-500">the first one.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">Direct factory pricing. CAD review and DFM technical feedback dispatched within 12 hours.</p><div className="mt-10 flex items-center gap-3 text-xs text-zinc-500"><span className="grid size-8 place-items-center rounded-full border border-white/10 text-sky-300">24</span> years of direct engineering support</div></div><form onSubmit={submitQuote} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:p-9"><div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-zinc-500">REQUEST / 001</span><span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-300" /> Online</span></div><label className="text-xs text-zinc-500">01 / Packaging line</label><div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">{['CD Standard', 'Slim / Cassette', 'Custom tray', 'Collectible'].map((line) => <button type="button" key={line} onClick={() => setSelectedLine(line)} className={`rounded-lg border px-3 py-3 text-left text-xs transition-colors ${selectedLine === line ? 'border-sky-300 bg-sky-300/10 text-sky-200' : 'border-white/10 text-zinc-500 hover:border-white/25'}`}>{line}</button>)}</div><div className="mt-8 grid gap-6 md:grid-cols-2"><label className="text-xs text-zinc-500">02 / Estimated run<select className="mt-3 w-full appearance-none rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-sky-300"><option>2,000 units</option><option>10,000 units</option><option>50,000 units</option><option>200,000+ units</option></select></label><label className="text-xs text-zinc-500">03 / Destination port<input required className="mt-3 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-sky-300" placeholder="e.g. Los Angeles / Rotterdam" /></label></div><label className="mt-6 block text-xs text-zinc-500">04 / Corporate email<input required type="email" className="mt-3 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-sky-300" placeholder="procurement@company.com" /></label><button className="mt-8 flex w-full items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-semibold text-black transition-colors hover:bg-sky-300">{submitted ? 'Request received — we will be in touch.' : 'Dispatch engineering request'} <ArrowUpRight size={17} /></button></form></div></section>

      <footer id="global" className="relative z-10 border-t border-white/10"><div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10"><div><div className="flex items-center gap-3 text-sm font-semibold"><span className="grid size-7 place-items-center rounded-full bg-white text-[10px] text-black">X</span>XINHUI · est. 2002</div><p className="mt-5 max-w-xs text-xs leading-6 text-zinc-600">东莞市新辉盒带厂有限公司<br />Dongguan, Guangdong · China</p></div><div className="flex flex-col gap-3 text-right text-xs text-zinc-500"><a href="mailto:engineering@xinhui.com" className="flex items-center justify-end gap-2 text-zinc-300 hover:text-sky-300"><Mail size={14} /> engineering@xinhui.com</a><p>UKAS ISO 9001 · RoHS · REACH · Sony GP</p><p className="text-zinc-700">© 2026 Xinhui Precision Plastics & Packaging</p></div></div></footer>
    </main>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300">{children}</p> }
function Metric({ value, label }: { value: string; label: string }) { return <div><p className="text-2xl tracking-tight md:text-3xl">{value}</p><p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">{label}</p></div> }
function Feature({ icon: Icon, title, text }: { icon: typeof Factory; title: string; text: string }) { return <div className="bg-zinc-950 p-7"><Icon size={20} className="text-sky-300" /><h3 className="mt-6 text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p></div> }
