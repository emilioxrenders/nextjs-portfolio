export default function Layout({ children, className }) {
  return (
    <div
      className={`container lg:py-32 py-16 mx-auto flex font-display font-light px-10 ${className}`}
    >
      {children}
    </div>
  );
}
