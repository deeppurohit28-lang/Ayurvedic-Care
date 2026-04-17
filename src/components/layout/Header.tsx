import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CartDrawer } from '@/components/layout/CartDrawer';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-200">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
            AYURSAGE
          </Link>
        </div>
        
        <nav className="flex-1 flex justify-center hidden md:flex space-x-8 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          <Link href="/science" className="hover:text-accent transition-colors duration-200">The Science</Link>
          <Link href="/protocols" className="hover:text-accent transition-colors duration-200">Protocols</Link>
          <Link href="/transparency" className="hover:text-accent transition-colors duration-200">Transparency</Link>
        </nav>

        <div className="flex-1 flex justify-end items-center space-x-6">
          <button className="font-mono text-xs uppercase tracking-wider hover:text-accent transition-colors">
            Login
          </button>
          <CartDrawer />
          <Link href="/routine-builder">
            <Button variant="default" className="font-mono uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
              Build Your Routine
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
