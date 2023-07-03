function Section({ children, index, extraClasses = '' }) {
  return (
    <section
      className={`${
        index % 2 === 0 ? "bg-primary" : "bg-white"
      } min-h-screen mx-auto font-dosis ${extraClasses}`}
    >
      {children}
    </section>
  );
}

export default Section;
