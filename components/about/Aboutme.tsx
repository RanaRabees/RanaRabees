export default function Aboutme() {
  return (
    <>
      <div
        className="w-full text-center relative"
      >
        <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap sm:gap-10 mt-10 sm:mt-20">
          <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img
              src="/static/misc/rana.jpg"
              className="w-[400px] h-[300px] rounded-full shadow-fun-pink shadow-2xl"
              alt="Profile Image"
            />
          </div>

          <div className="flex flex-wrap mb-10 md:w-[70%] w-full space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <p className="pt-16">
              Hi, my name is <span className=" font-bold text-[#38b2ac]"> Rana Rabees </span>and I am a
              <span className="text-fun-pink font-bold text-lime-500">{" highly ambitious"}</span>,
              <span className="text-fun-pink font-bold text-lime-500">{" self-motivated"}</span>, and
              <span className="text-fun-pink font-bold text-lime-500">{" driven "}</span>
              <span className="text-fun-pink font-bold text-lime-500"> Developer, Coder </span> and
              <span className="text-fun-pink font-bold text-lime-500"> Programmer </span>
              working for
              <span className="text-fun-pink font-bold text-lime-500"> RanaVerse</span>.
            </p><br />
            <p>
              I started my career in 2019 and have been working in the
              field ever since.
              I am passionate about creating things. My love for creation began at an early age,
              where I would often be found sketching and drawing.
              Though I haven't had much time for sketching in the
              past two years due to my studies in software development,
              I have found that my passion for design has transformed into a digital form.
            </p><br />
          </div>
        </div>
        <div className="flex flex-wrap mb-10 space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <p>
            My interest in web development began when I discovered my love for
            designing websites and creating intuitive user experiences.
            Since then, I have been developing modern and clean websites
            using frameworks such as
            <span className="text-fun-pink font-bold text-lime-500">{" Next.js, React.js"}</span> and
            <span className="text-fun-pink font-bold text-lime-500">{" Node.js"}</span> .
            I am also well-versed in <span className="text-fun-pink font-bold text-lime-500">{" object-oriented programming, data structures and alogrithms, "}</span>
            and continuously strive to
            improve my knowledge in the field of
            <span className="text-fun-pink font-bold text-lime-500">{" user experience design "}</span> .
          </p>
          <br />
          <p>
            As a recent graduate, I specialize in full stack development,
            with expertise in languages such as
            <span className="text-fun-pink font-bold text-lime-500">
              {" Html5"} Css3, Javascript, Typescript, Python, Object - C, CSharpScript,
              Kotlin, C++, Java, JSON, XMl, ASP, Bablel, Python, Numpy, Panda, Keras,
              TensorFlow, Scikit Learn, Dart, C, C++, Php, Ruby, Swift, Tailwindcss,
              JQuerry, Sass SQL {"MySQL "}
            </span>
            and so many others Languages, FrameWorks, Libraries Remaining Now.
            I have a strong foundation in creating websites and focus on providing
            the best user experience through intuitive design.
          </p>
          <br />
          <p>
            I have a wide range of hobbies and passions that keep me busy.
            From Reading/Creating new blogs, Making Dynamic Websites, Building Mobile IOS Apps,
            Creating Games(2D 3D), Making YouTube videos of new
            Skills/Experiences, I am always seeking new experiences and love to keep myself
            engaged and learning new things.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-[#38b2ac]">
              never stop growing
            </span>{" "}
            and that&#39;s what I strive to do, I have a passion for
            technology and a desire to always push the limits of what is
            possible. I am excited to see where my career takes me and am
            always open to new opportunities.
          </p>
          <br />
          <p>
            Thank you for taking the time to get to know me a little better.
            If you have any questions or are interested in working together,
            please don't hesitate to reach out. 🙂
          </p>
        </div>
        {/* <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/about/fillStar.svg"
        /> */}
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/about/youtube.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/about/coding.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/about/fillStar.svg"
        />
      </div>
    </>
  )
}




