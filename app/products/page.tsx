'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Mail, Phone } from 'lucide-react'

const products = [
  { number: '01', title: 'Standard Single CD Jewel Case', meta: '10.4 mm / Ultra-Clear GPPS', detail: 'Engineered book-fold hinge · front booklet retainers · 1,000+ cycle fatigue resistance', image: '/product/Standard Single CD Jewel Case.jpeg' },
  { number: '02', title: 'CD Case with Credit Card Pocket', meta: 'PP / Media & Card Bay', detail: 'Integrated CR80 smart card / SD slot · high-impact virgin PP enclosure', image: '/product/CD Case with Credit Card Pocket.jpeg' },
  { number: '03', title: '2-CD Dual Jewel Case', meta: 'PP / Dual Bilateral Hubs', detail: 'Dual symmetric disc hubs + media accessory slot · impact-resistant resin', image: '/product/2-CD Dual Jewel Case.jpeg' },
  { number: '04', title: 'Slim Triple CD Case (2+1 Disc Capacity)', meta: 'PP / 2+1 Overlapping Tray', detail: 'Space-saving overlapping spindle layout · compact high-density multi-disc footprint', image: '/product/Slim Triple CD Case (2+1 Disc Capacity).jpeg' },
] as const

export default function ProductsPage() {
  return (
    <main id="top" className="site-shell">
      <div className="grain" />
      <div className="blueprint-overlay" aria-hidden="true" />
      <nav className="nav-rail">
        <Link href="/" className="brand"><span className="brand-mark">SL</span><span>SUN LIGHT <small>· est. 2002</small></span></Link>
        <Link href="/" className="button button-line text-xs" aria-label="Return to homepage"><ArrowLeft data-icon="inline-start" /> RETURN TO SYSTEM</Link>
      </nav>
      <section className="catalog-section" style={{ paddingTop: '190px' }}>
        <div className="catalog-head">
          <p className="eyebrow">02 / COMPLETE CATALOG</p>
          <h1>Engineering &amp; Packaging Archive</h1>
          <p className="section-intro-text">Tooling specs for precision optical media packaging, disc trays, and custom components.</p>
        </div>
        <div className="product-grid archive-grid">
          {products.map((item) => (
            <article className="product-card archive-card" key={item.number}>
              <div className="card-top"><span>[ {item.number} ]</span><span className="mono accent">ARCHIVE / SPEC</span></div>
              <div className="archive-image"><img src={encodeURI(item.image)} alt={item.title} /></div>
              <div className="card-body"><h2>{item.title}</h2><p className="mono accent">{item.meta}</p><p>{item.detail}</p><Link href="/#quote" className="button button-line text-xs w-full justify-center mt-4">INQUIRE THIS SPEC <ArrowUpRight data-icon="inline-end" /></Link></div>
              <span className="crosshair">+</span>
            </article>
          ))}
        </div>
      </section>
      <footer id="global"><div><p className="footer-title">SUN LIGHT CASSETTE MANUFACTURING LIMITED</p><p>东莞市新辉盒带厂有限公司</p><p>No. 2 Banhu Old Street, Huangjiang Town, Dongguan, Guangdong, China</p></div><div className="footer-contact"><a href="mailto:ngkeihing@126.com"><Mail />ngkeihing@126.com</a><a href="tel:+8613903035533"><Phone />+86 139 0303 5533</a><span>© 2026 SUN LIGHT CASSETTE MANUFACTURING LIMITED · Sony GP · UKAS · RoHS · REACH</span></div></footer>
    </main>
  )
}

const styles = `
.catalog-head h1 { margin: 20px 0 0; font-size: clamp(48px, 8vw, 104px); font-weight: 500; letter-spacing: -.075em; line-height: .92; }
.section-intro-text { max-width: 480px; margin-top: 24px; color: #9ba1a5; font-size: 15px; line-height: 1.8; }
.archive-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 40px; margin-top: 70px; }
.archive-card { width: 100% !important; min-height: 500px !important; margin: 0 !important; padding: 28px 0 34px !important; }
.archive-image { height: 235px; margin: 22px 0; display: flex; align-items: center; justify-content: center; border: 1px solid var(--hairline); background: rgba(0,0,0,.25); overflow: hidden; }
.archive-image img { max-width: 100%; max-height: 100%; object-fit: contain; padding: 14px; }
.archive-card .card-body { position: static; }
.archive-card .card-body h2 { margin: 0; font-size: clamp(22px, 3vw, 36px); font-weight: 400; letter-spacing: -.05em; line-height: 1; }
.archive-card .card-body p { max-width: 520px; margin: 12px 0 0; color: #9ba1a5; font-size: 12px; line-height: 1.7; }
.archive-card .card-body .accent { color: var(--orange); font-size: 10px; }
@media (max-width: 767px) { .archive-grid { display: flex; flex-direction: column; gap: 0; } .archive-card { min-height: 460px !important; } }
`
