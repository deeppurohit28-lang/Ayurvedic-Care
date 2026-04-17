export default function DiagnosticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground flex flex-col">
      {children}
    </main>
  );
}
