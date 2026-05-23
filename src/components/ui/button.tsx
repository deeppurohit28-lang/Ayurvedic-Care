import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Ayursage "Clinical Sanctuary" button system.
 * Design rules (DESIGN.md):
 *   - 0px border-radius on ALL variants (sharp edge philosophy)
 *   - Primary: Obsidian bg, Clinical White text, gradient sheen, monospace label
 *   - Secondary: Clinical White bg, 2px heavy Obsidian border, monospace label
 *   - Hover: Sage Industrial (#7D8471 / --secondary) fills the container/border
 */
const buttonVariants = cva(
  // Base: 0px radius, monospace, full transitions, no rounded anything
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border-0 text-sm font-mono uppercase tracking-widest whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary: Obsidian → primary-container gradient, on-primary text; hover fills with Sage Industrial
        default:
          "bg-gradient-to-b from-primary to-primary-container text-on-primary hover:from-secondary hover:to-secondary hover:text-on-secondary",
        // Secondary: Ghost — Clinical White bg, 2px heavy Obsidian border; hover fills with Sage Industrial
        outline:
          "bg-surface-container-lowest border-2 border-primary text-on-surface hover:bg-secondary hover:border-secondary hover:text-on-secondary",
        // Secondary variant alias
        secondary:
          "bg-surface-container-lowest border-2 border-primary text-on-surface hover:bg-secondary hover:border-secondary hover:text-on-secondary",
        // Ghost: transparent, no border, subtle hover
        ghost:
          "bg-transparent text-on-surface hover:bg-surface-container-low",
        // Destructive
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 border-2 border-destructive/40",
        // Link: Sage Industrial underline, no blue
        link: "text-secondary underline-offset-4 hover:underline hover:text-on-surface",
      },
      size: {
        default: "h-10 px-8 py-3 gap-2",
        xs:      "h-6 px-3 py-1 text-[10px] gap-1",
        sm:      "h-8 px-4 py-2 text-xs gap-1.5",
        lg:      "h-14 px-10 py-5 text-sm gap-2",
        icon:    "size-10",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
