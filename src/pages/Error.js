import { useRouteError, useNavigate } from "react-router-dom";
import Section from "../UI/Section";

function Error(params) {
  const error = useRouteError();

  const navigation = useNavigate();

  function backButtonHandler(params) {
    navigation("..");
  }

  let text = "Page not found!";
  let imgSrc =
    "https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif";

  if (error.status === 500) {
    text = error.data.message;
  }

  return (
    <>
      <Section index={0} extraClasses="py-10">
        <h1 className=" text-center text-white text-3xl">{text}</h1>
        {error.status === 404 && (
          <img
            src={imgSrc}
            alt="error img"
            className=" w-10/12 mx-auto mt-5 md:w-3/4"
          />
        )}
        <button
          onClick={backButtonHandler}
          className=" block text-center text-white text-3xl mx-auto mt-10 hover:text-orange-300"
        >
          Back to home page
        </button>
      </Section>
    </>
  );
}

export default Error;
