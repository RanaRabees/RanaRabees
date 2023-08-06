import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} w-full text-center relative`}
    >
      {/* <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 "> */}

      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Skills
          <br />
          <img
            className="sqD top-[-15px] right-[-15px]"
            src="/static/doodles/skills/fillStar.svg"
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          I've learned a lot in my life, including many frameworks, libraries, and languages.
          I'm always eager to learn more, so if you want to know my skills/experiences (😊 see below 🥰).
        </p>
      )}


      <img
        className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
        src="/static/doodles/skills/laptop.svg"
      />
      <img
        className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
        src="/static/doodles/skills/coding.svg"
      />
      <img
        className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
        src="/static/doodles/skills/youtube.svg"
      />
      <img
        className="sqD top-[-15px] right-[-15px]"
        src="/static/doodles/skills/fillStar.svg"
      />
      {/* </h2> */}
    </div>
  );
}

export default Heading;
