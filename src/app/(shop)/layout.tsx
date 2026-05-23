// The root layout.tsx renders the global nav and footer.
// This wrapper only clears the sticky nav height via padding-top.
// bg-transparent ensures page-level backgrounds show through correctly.
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 pt-20 bg-transparent">
      {children}
    </div>
  );
}
