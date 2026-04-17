import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          
          <div className="space-y-4">
            <h4 className="text-foreground font-bold border-b border-border pb-2 inline-block">Directory</h4>
            <ul className="space-y-2">
              <li><Link href="/protocols" className="hover:text-accent transition-colors duration-200">All Protocols</Link></li>
              <li><Link href="/ingredients" className="hover:text-accent transition-colors duration-200">The Naked Truth (INCI)</Link></li>
              <li><Link href="/transparency" className="hover:text-accent transition-colors duration-200">Batch Lookups</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-bold border-b border-border pb-2 inline-block">Client Services</h4>
            <ul className="space-y-2">
              <li><Link href="/account" className="hover:text-accent transition-colors duration-200">Account Login</Link></li>
              <li><Link href="/shipping" className="hover:text-accent transition-colors duration-200">Shipping & Returns</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors duration-200">Contact Protocol</Link></li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-foreground font-bold border-b border-border pb-2 inline-block mb-4">System Status</h4>
              <div className="flex items-center space-x-2 text-accent">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span>Live: 14 Active Batches Validated</span>
              </div>
            </div>
            <div className="text-right text-muted mt-8">
              &copy; {new Date().getFullYear()} Ayursage. Clinical Ayurveda.
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
