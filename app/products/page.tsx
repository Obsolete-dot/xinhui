'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const cdProducts = [
  ['01', 'Standard Single CD Jewel Case', 'Ultra-Clear Virgin PS | Slim Profile | Front Booklet Clips', '/product/Standard Single CD Jewel Case.jpeg'],
  ['02', 'CD Case with Credit Card Pocket', 'High-Grade Virgin PP | Integrated Media/Card Bay & Disc Hub', '/product/CD Case with Credit Card Pocket.jpeg'],
  ['03', '2-CD Dual Jewel Case', 'Impact-Resistant PP | Dual Bilateral Disc Hubs + Media Slot', '/product/2-CD Dual Jewel Case.jpeg'],
  ['04', 'Slim Triple CD Case (2+1 Disc Capacity)', 'Space-Saving Overlapping Hub Layout | 3-Disc Capacity', '/product/Slim Triple CD Case (2+1 Disc Capacity).jpeg'],
] as const

const filters = ['All Products', 'Optical Disc Packaging', 'Audio Cassette Formats', 'Internal Precision Parts'] as const

export default function ProductsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>('All Products')
  const [menuOpen, setMenuOpen] = useState(false)
  const showProducts = active === 'All Products' || active === 'Optical Disc Packaging'

  return <main className="site-shell archive-shell"><div className="grain" /><nav className="nav-rail"><Link href="/" className="brand"><span className="brand-mark">SL</span><span>SUN LIGHT <small>· est. 2002</small></span></Link><div className="nav-links"><Link href="/#engineering">Engineering</Link><Link href="/products">Product archive</Link><Link href="/#global">Global supply</Link></div><div className="nav-actions"><Link href="/#rfq" className="nav-cta">Request a quote <ArrowUpRight /></Link><button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <div className="mobile-menu"><Link href="/#engineering" onClick={() => setMenuOpen(false)}>Engineering</Link><Link href="/products" onClick={() => setMenuOpen(false)}>Product archive</Link><Link href="/#rfq" onClick={() => setMenuOpen(false)}>Request a quote</Link></div>}</nav>
    <header className="archive-hero"><p className="eyebrow">04 / Engineering archive</p><p className="status-line"><span /> LIVE COMPONENT CATALOG · OEM / ODM READY</p><h1>ENGINEERING ARCHIVE<br /><em>/ FULL COMPONENT CATALOG</em></h1><p className="archive-lede">OEM/ODM Precision Injection Molding for Optical &amp; Magnetic Media Formats</p></header>
    <section className="archive-content"><div className="archive-toolbar"><p className="mono">FILTER / CATEGORY</p><div className="archive-filters">{filters.map((filter) => <button key={filter} className={active === filter ? 'active' : ''} onClick={() => setActive(filter)}>{filter}<ChevronRight /></button>)}</div></div><div className="archive-grid">{showProducts ? cdProducts.map(([number, title, spec, image]) => <article className="archive-card" key={number}><div className="card-top"><span>[ {number} ]</span><span className="mono">OPTICAL / COMPONENT</span></div><div className="archive-image"><img src={encodeURI(image)} alt={title} /></div><div className="archive-card-copy"><h2>{title}</h2><p>{spec}</p><Link href={`/#rfq?product=${encodeURIComponent(title)}`}>INQUIRE SPECS <ArrowUpRight /></Link></div></article>) : <article className="archive-empty"><p className="eyebrow">{active}</p><h2>COMING SOON<br /><em>/ IN TOOLING PRODUCTION</em></h2><p>New format components are currently moving through tooling validation and sample approval.</p></article>}</div></section>
    <footer id="global"><div><p className="footer-title">SUN LIGHT CASSETTE MANUFACTURING LIMITED</p><p>东莞市新辉盒带厂有限公司</p><p>No. 2 Banhu Old Street, Huangjiang Town, Dongguan, Guangdong, China</p></div><div className="footer-contact"><a href="mailto:ngkeihing@126.com">ngkeihing@126.com</a><span>© 2026 SUN LIGHT CASSETTE MANUFACTURING LIMITED · Sony GP · UKAS · RoHS · REACH</span></div></footer>
  </main>
}

type ArchiveProduct = readonly [string, string, string, string]
void (cdProducts satisfies readonly ArchiveProduct[])
