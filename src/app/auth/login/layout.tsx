export default function loginlayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="dark:bg-slate-900 dark">
      {/* Include shared UI here e.g. a header or sidebar */}
 
      {children}
    </section>
  )
}
