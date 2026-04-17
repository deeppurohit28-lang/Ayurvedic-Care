import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      
      {/* LEFT: FIXED MEDIA GALLERY */}
      <div className="w-full lg:w-1/2 bg-card border-r border-border min-h-[50vh] lg:h-screen lg:sticky lg:top-0 flex items-center justify-center p-12">
         {/* Placeholder for high-res images / 60s app video */}
         <div className="aspect-[4/5] w-full max-w-md bg-background border border-border flex flex-col items-center justify-center text-center p-8 group relative overflow-hidden">
            <Image 
              src="/syndet_bar.png" 
              alt="Syndet Bar 01" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-[2s]" 
            />
            {/* Play button mock */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/30 backdrop-blur-sm z-20 cursor-pointer">
               <div className="rounded-full h-20 w-20 bg-background/90 text-foreground flex items-center justify-center border border-border">
                 View
               </div>
            </div>
         </div>
      </div>

      {/* RIGHT: SCROLLING SPECIFICATIONS */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 bg-background">
         
         <div className="mb-12">
            <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-4">Step 01: Purify</div>
            <h1 className="font-heading text-5xl mb-4">Syndet Bar 01</h1>
            <div className="font-mono text-xl tracking-widest">$32.00</div>
         </div>

         {/* THE SPEC BOX */}
         <div className="border border-border p-8 mb-12 bg-card grid grid-cols-2 lg:grid-cols-3 gap-6 text-card-foreground">
            <div>
               <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">pH Level</div>
               <div className="font-mono text-3xl font-bold">5.5</div>
               <div className="font-sans text-xs mt-1 text-muted-foreground">Maintains acid mantle</div>
            </div>
            <div>
               <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">Active Marker</div>
               <div className="font-mono text-3xl font-bold">95%</div>
               <div className="font-sans text-xs mt-1 text-muted-foreground">Turmerone concentration</div>
            </div>
            <div className="col-span-2 lg:col-span-1">
               <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">Absorption</div>
               <div className="font-mono text-3xl font-bold">60s</div>
               <div className="font-sans text-xs mt-1 text-muted-foreground">Wash-off phase</div>
            </div>
         </div>

         <div className="mb-12">
            <Button size="lg" className="w-full h-16 rounded-none font-mono tracking-widest uppercase bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all">
               Add To Cart
            </Button>
         </div>

         <div className="prose prose-sm font-sans text-muted-foreground mb-16">
            <p>
              Traditional ayurvedic cleansers disrupt the skin barrier with highly alkaline ash and sap. We engineered Syndet Bar 01 using synthetic detergents precisely tuned to a 5.5 pH alongside completely natural, batch-verified curcuminoids.
            </p>
            <p>
              The result: immediate neutralization of environmental free-radicals without the "squeaky clean" barrier damage typical of foaming cleansers.
            </p>
         </div>

         {/* THE NAKED TRUTH MODULE (INCI TABLE) */}
         <div className="border border-border bg-card">
            <div className="bg-primary text-primary-foreground p-4">
               <h3 className="font-heading text-xl">The Naked Truth</h3>
               <p className="font-mono text-[10px] tracking-widest uppercase mt-1 opacity-70">Interactive Component Dictionary</p>
            </div>
            <table className="w-full text-left font-sans text-sm">
               <thead className="bg-secondary text-secondary-foreground font-mono text-[10px] tracking-widest uppercase">
                  <tr>
                     <th className="p-4 border-b border-border">Scientific Name</th>
                     <th className="p-4 border-b border-border">Function</th>
                  </tr>
               </thead>
               <tbody>
                  <tr className="hover:bg-secondary/50 transition-colors border-b border-border group cursor-help">
                     <td className="p-4">
                        <div className="font-bold text-card-foreground">Sodium Cocoyl Isethionate</div>
                        <div className="font-mono text-[10px] text-muted-foreground uppercase mt-1">Coconut-derived Surfactant</div>
                     </td>
                     <td className="p-4 text-muted-foreground">Gentle cleansing agent; creates dense micro-lather.</td>
                  </tr>
                  <tr className="hover:bg-secondary/50 transition-colors border-b border-border group cursor-help">
                     <td className="p-4">
                        <div className="font-bold text-accent transition-colors">Curcuma Longa Root Extract</div>
                        <div className="font-mono text-[10px] text-accent uppercase mt-1">Batch Verified Element</div>
                     </td>
                     <td className="p-4 text-muted-foreground">Core antioxidant active. Neutralizes commute pollution.</td>
                  </tr>
                  <tr className="hover:bg-secondary/50 transition-colors border-b border-border group cursor-help">
                     <td className="p-4">
                        <div className="font-bold text-card-foreground">Cetearyl Alcohol</div>
                        <div className="font-mono text-[10px] text-muted-foreground uppercase mt-1">Fatty Acid</div>
                     </td>
                     <td className="p-4 text-muted-foreground">Provides structural integrity to the bar and softens skin.</td>
                  </tr>
               </tbody>
            </table>
         </div>

      </div>
    </div>
  );
}
