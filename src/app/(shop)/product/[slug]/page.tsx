import Image from "next/image";

export default function ProductSpecsPage({ params }: { params: { slug: string } }) {
  // We can dynamically render the product name from the slug, but for now we follow the exact layout template
  const title = params.slug.replace(/-/g, " ").toUpperCase();
  
  return (
    <main className="flex-grow flex flex-col md:flex-row w-full max-w-[1920px] mx-auto">
      {/* Left: Product Media (Clinical White) */}
      <section className="w-full md:w-1/2 bg-surface flex flex-col relative h-[614px] md:h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar snap-y snap-mandatory">
        {/* Image 1 */}
        <div className="w-full h-full flex-shrink-0 snap-start flex items-center justify-center p-12 bg-surface-container-lowest relative">
          <Image 
            fill
            alt="Serum Bottle" 
            className="absolute inset-0 w-full h-full object-contain mix-blend-multiply" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAY8YZ5UOhdWQUsfDPfURYgInzRhHKvOMWjxW_yzScRIG_CO4-qkuh3R6mJzWVXTQ6nHh9AZI7cz108nJJosTpR57jrLKbT5OrxtlxXYgYQgHwJn4ednVQNf7CzFmqGzjxsro103P0aS-sb6RXwQNQNdy2L15YZ3DLPwy2QfAl1UmfxMT540uxqNgKyDrISjRiJhKs02jnihqrVMbL8wp8iCY9mRN13rUPr6A4HLN3A_zb4TYFo8jLLMhQsTqtkP0BPTj_pHZCl2X-"
          />
        </div>
        {/* Image 2 */}
        <div className="w-full h-full flex-shrink-0 snap-start flex items-center justify-center p-12 bg-surface-container-low relative">
          <Image 
            fill
            alt="Serum Texture" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANRLXW0PecRPVVll9DZ9B6NTmbkLjoxX5p8L1w0cPNWt6Gxm9pLjhk4KlY8tGnjE-mVa67JLx7WxnzBxeoqqvy5wqxnMpT-YretJHHe2FBdbtKTUIvcsqlfl6hC2BQ4qli2GKoDoEZS8_gPwFcyIQDLGvMEpRCKzTgGV0Trh4OsLVIICmd7opnAZU2iNYzCQ1ax_pmSyp9xiqOLBEJwqD_4pQs0IhXXbzU6oe5QBNFOAsNUxbJ-9ACoJpobXg7jQKS4Ju3fmOJKYQX"
          />
        </div>
        {/* Video Placeholder (Static Image for spec) */}
        <div className="w-full h-full flex-shrink-0 snap-start flex items-center justify-center p-12 bg-surface relative">
          <div className="absolute inset-0 bg-primary/5 z-10"></div>
          <Image 
            fill
            alt="Application Video" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx9bG2axIVYL8Jc-fYgrxff6cdvl1J064Ywr4cIvmOrGPSFOqDC-57BJudYaKNZlA19yUXFs_D8GN8l6RUXEV61RmkF8AZCpzP-L7LnWL1gQJ1kHBymOskBpNsCVQKuzDjbacjhvF8RqzxsMOLseE9mccLy_SGEy6e_ah-rtxU2lSVbGBPXsTULPYsNfki5yE5JIhRU0H4zyP-3FmH84OSmgkGnrKUN4njWBDYM1ES_tp3VUkLa0I0xkcULTDFSIHlBHn97YKkTGj9"
          />
          <div className="absolute bottom-8 left-8 z-20 flex items-center gap-2 text-primary font-label text-xs">
            <span className="material-symbols-outlined text-[16px]">play_circle</span>
            <span>APPLICATION METHOD</span>
          </div>
        </div>
      </section>

      {/* Right: Spec Sheet Data */}
      <section className="w-full md:w-1/2 bg-surface-container-lowest flex flex-col p-8 md:p-16 overflow-y-auto h-auto md:h-[calc(100vh-5rem)]">
        {/* Header Group */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label text-secondary text-sm">BATCH_014</span>
            <span className="font-label text-primary text-sm tracking-widest border-b-2 border-primary pb-1">IN STOCK</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl text-primary leading-none mb-6">
            {title === "ROUTINE" ? "RESURFACING ELIXIR" : title}
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-lg">
              A highly concentrated botanical peel designed to accelerate cellular turnover while maintaining dermal barrier integrity. Engineered with Ayurvedic bio-actives.
          </p>
        </div>

        {/* The Spec Box (Monospace Data) */}
        <div className="border-2 border-primary mb-12 flex flex-col">
          <div className="bg-primary text-on-primary font-label text-xs p-3 tracking-widest border-b-2 border-primary">
              TECHNICAL SPECIFICATIONS
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 bg-surface">
            <div className="p-4 border-r border-b md:border-b-0 border-outline-variant/30 flex flex-col">
              <span className="font-label text-on-surface-variant text-[10px] mb-1">pH LEVEL</span>
              <span className="font-label text-primary text-lg">3.8</span>
            </div>
            <div className="p-4 border-r border-b md:border-b-0 border-outline-variant/30 flex flex-col">
              <span className="font-label text-on-surface-variant text-[10px] mb-1">KEY ACTIVE %</span>
              <span className="font-label text-primary text-lg">18.5%</span>
            </div>
            <div className="p-4 flex flex-col col-span-2 md:col-span-1 border-b md:border-b-0 border-outline-variant/30">
              <span className="font-label text-on-surface-variant text-[10px] mb-1">ABSORPTION</span>
              <span className="font-label text-primary text-lg">&lt; 60 SEC</span>
            </div>
          </div>
        </div>

        {/* Interaction Area */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-label text-lg">$145.00</span>
            <span className="font-body text-sm text-on-surface-variant">/ 30ML (1.0 FL OZ)</span>
          </div>
          <button className="w-full bg-primary text-on-primary font-label text-sm py-5 tracking-widest uppercase hover:bg-secondary transition-colors duration-300 relative overflow-hidden group">
            <span className="relative z-10 flex items-center justify-center gap-2">
                ADD TO PROTOCOL
                <span className="material-symbols-outlined text-[16px]">science</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>

        {/* "Naked Truth" Module */}
        <div className="mt-auto">
          <h3 className="font-headline text-2xl text-primary mb-6">THE NAKED TRUTH</h3>
          <div className="flex flex-col border-t-2 border-primary">
            {/* Row 1 */}
            <div className="grid grid-cols-3 py-4 border-b border-outline-variant/30 hover:bg-secondary-container transition-colors group cursor-crosshair px-2">
              <div className="font-label text-xs text-primary group-hover:text-on-secondary-container">Santalum Album</div>
              <div className="font-body text-sm text-on-surface-variant group-hover:text-on-secondary-container">Sandalwood Extract</div>
              <div className="font-body text-sm text-on-surface-variant group-hover:text-on-secondary-container text-right">Anti-inflammatory</div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-3 py-4 border-b border-outline-variant/30 hover:bg-secondary-container transition-colors group cursor-crosshair px-2">
              <div className="font-label text-xs text-primary group-hover:text-on-secondary-container">Glycyrrhiza Glabra</div>
              <div className="font-body text-sm text-on-surface-variant group-hover:text-on-secondary-container">Licorice Root</div>
              <div className="font-body text-sm text-on-surface-variant group-hover:text-on-secondary-container text-right">Hyperpigmentation</div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-3 py-4 border-b border-outline-variant/30 hover:bg-secondary-container transition-colors group cursor-crosshair px-2">
              <div className="font-label text-xs text-primary group-hover:text-on-secondary-container">Centella Asiatica</div>
              <div className="font-body text-sm text-on-surface-variant group-hover:text-on-secondary-container">Gotu Kola</div>
              <div className="font-body text-sm text-on-surface-variant group-hover:text-on-secondary-container text-right">Collagen Synthesis</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
