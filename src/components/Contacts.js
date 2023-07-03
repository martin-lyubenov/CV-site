import { LazyLoadImage } from "react-lazy-load-image-component";
import Section from "../UI/Section";
import { useEffect, useState } from "react";
import useCopy from "use-copy";

function Contacts({ contactInfo }) {
  const [copied, copy, setCopied] = useCopy(contactInfo.email.address);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  const copyText = () => {
    copy();

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Section index={1} extraClasses="flex justify-center items-center">
      <div className=" text-white bg-primary grid md:grid-cols-2 p-20 md:w-10/12 md:rounded-xl gap-10">
        <div className=" md:order-2">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 text-white text-5xl font-bold`}
          >
            Ping me!
          </h2>
          <p
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 text-white text-2xl`}
          >
            {contactInfo.desc}
          </p>
          <div
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 flex gap-6 mt-5`}
          >
            {contactInfo.contactChannels.map((info) => (
              <a href={info.href} target="_black">
                <LazyLoadImage
                  src={info.icon}
                  className=" rounded-full transp w-12"
                />
              </a>
            ))}
            <div className=" relative">
              {copied && <div className=" font-bold absolute -top-7 -left-4 w-20 h-6 bg-white text-black text-xs text-center rounded-md leading-5">Email copied.</div>}
              <button onClick={copyText}>
                {copied ? (
                  <LazyLoadImage
                    src={contactInfo.email.copiedIcon}
                    className=" rounded-full transp w-12"
                  />
                ) : (
                  <LazyLoadImage
                    src={contactInfo.email.icon}
                    className=" rounded-full transp w-12"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <LazyLoadImage
          src={contactInfo.img}
          className="mx-auto rounded-full md:order-1 w-80"
          placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
        />
      </div>
    </Section>
  );
}

export default Contacts;
