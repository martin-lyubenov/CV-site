import { PacmanLoader } from "react-spinners";
import Section from "./Section";

function Fallback(params) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <Section index={1} extraClasses="flex justify-center items-center">
      <div className=" text-white bg-primary min-h-fit p-20 md:w-10/12 md:rounded-xl">
        <PacmanLoader
          color="white"
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </Section>
  );
}

export default Fallback;
