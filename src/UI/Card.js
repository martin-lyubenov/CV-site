function Card({ children, index }) {
  return (
    <div
      className={`${
        index % 2 === 0 ? "text-white" : "text-black"
      } grid gap-10 w-10/12 mx-auto md:grid-cols-2 lg:grid-cols-3`}
    >
      {children}
    </div>
  );
}

export default Card;
