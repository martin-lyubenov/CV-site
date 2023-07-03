import { LazyLoadImage } from "react-lazy-load-image-component";

function Stack({stack}) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold">Stack</h1>
      <div className=" flex flex-wrap justify-center mt-10">
        {stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index % 2 === 0 ? "animate-float" : "animate-refloat"
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className=" w-10/12 text-xl text-center mt-10 md:max-w-xl">
        {stack.desc}
      </p>
    </div>
  );
}

export default Stack;
