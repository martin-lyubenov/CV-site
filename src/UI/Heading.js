function Heading({ projectName, index }) {
  return (
    <h1
      className={`${
        index % 2 === 0 ? "text-white" : "text-black"
      } text-center text-3xl md:text-4xl lg:text-5xl p-10`}
    >
      {projectName}
    </h1>
  );
}

export default Heading;
