/* eslint-disable react/no-unescaped-entities */
import React from "react"

const skills = [
  { skill: "Html5" },
  { skill: "Css3" },
  { skill: "W3.CSS" },
  { skill: "jQuery" },
  { skill: "Sass" },
  { skill: "Bootstrap" },
  { skill: "Canvas" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "Object - C" },
  { skill: "Solidity" },
  { skill: "Kotlin" },
  { skill: "C" },
  { skill: "C#" },
  { skill: "C++" },
  { skill: "Bablel" },
  { skill: "Java" },
  { skill: "JSON" },
  { skill: "XMl" },
  { skill: "ASP" },
  { skill: "SVG" },
  { skill: "PHP" },
  { skill: "Python" },
  { skill: "Numpy" },
  { skill: "Panda" },
  { skill: "Keras" },
  { skill: "Matplotlib" },
  { skill: "TensorFlow" },
  { skill: "Scikit Learn" },
  { skill: "Dart" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "Php" },
  { skill: "Ruby" },
  { skill: "Swift" },
  { skill: "TailwindCss UI" },
  { skill: "Shadcn UI" },
  { skill: "PgAdmin" },
  { skill: "Postgresql" },
  { skill: "SQL" },
  { skill: "MySQL" },
  { skill: "Django" },
  { skill: "MongoDb" },
  { skill: "ExpressJs" },
  { skill: "AngularJs" },
  { skill: "ReactJs" },
  { skill: "NodeJs" },
  { skill: "NextJs" },
  { skill: "NuxtJs" },
  { skill: "NestJs" },
  { skill: "VueJs" },
  { skill: "ReactNative" },
  { skill: "MongoDb Atlas" },
  { skill: "AWS" },
  { skill: "AWSComposer" },
  { skill: "API" },
  { skill: "Rest Api" },
  { skill: "GraphQl Api" },
  { skill: "Serverless Api" },
  { skill: "Android SDK" },
  { skill: "Middleware" },
  { skill: "JWT" },
  { skill: "UUID" },
  { skill: "Drizzle ORM" },
  // { skill: "RainBow Kit" },
  // { skill: "Metamask" },
  // { skill: "UniCorn" },
]
const experiences = [
  { skill: "Web3.0 Developer" },
  { skill: "Metaverse Developer" },
  { skill: "Blockchain Developer" },
  { skill: "MetaVerse Developer" },
  { skill: "Web2.0 Developer" },
  { skill: "AI Developer" },
  { skill: "IOT Developer" },
  { skill: "AWS Developer" },
  { skill: "Rest Api Developer" },
  { skill: "Graphql Api Developer" },
  { skill: "Server Less Api Developer" },
  { skill: "Web Developer" },
  { skill: "App Developer" },
  { skill: "Game Developer" }
]
const web = [
  { skill: "Html5" },
  { skill: "Css3" },
  { skill: "W3.CSS" },
  { skill: "Bootstrap" },
  { skill: "Canvas" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "TailwindCss UI" },
  { skill: "Shadcn UI" },
  { skill: "Chakra" },
  { skill: "jQuery" },
  { skill: "Sass" },
  { skill: "XMl" },
  { skill: "ASP" },
  { skill: "JSON" },
  { skill: "ASP" },
  { skill: "SVG" },
  { skill: "Three_JS" },
]
const design = [
  { skill: "Css3" },
  { skill: "W3.CSS" },
  { skill: "TailwindCss UI" },
  { skill: "Shadcn UI" },
  { skill: "Chakra" },
  { skill: "jQuery" },
  { skill: "Sass" },
  { skill: "Figma" },
  { skill: "Plasmic" },
  { skill: "Gamma" },
  { skill: "Adobe Photoshop" },
  { skill: "Adobe Illustrator" },
  { skill: "Adobe Premiere Pro" },
  { skill: "Adobe Indesign" },
  { skill: "Character Animator" },
  { skill: "Adobe XD" },
  { skill: "Inkscape" },
  { skill: "Sketch" },
  { skill: "Blender" },
  { skill: "Rive" },
  { skill: "Canva" },
]
const clouds = [
  { skill: "Vercel" },
  { skill: "AWS" },
  { skill: "Azure" },
  { skill: "Heroku" },
  { skill: "Netlify" },
  { skill: "FireBase" },
  { skill: "Digital Ocean" },
  { skill: "PythonAnywhere" },
  { skill: "GitJetpack" },
  { skill: "GitHub Pages" }
]
const editor = [
  { skill: "Visual Studio Code" },
  { skill: "Jupyter Notebook" },
  { skill: "Android Studio" },
  { skill: "Visual Studio" },
  { skill: "Intellij Idea" },
  { skill: "Jupiter Lab" },
  { skill: "Spider Lab" },
  { skill: "PyCharm" },
  { skill: "Notepad++" },
  { skill: "Sublime" },
  { skill: "Notepad" },
  { skill: "Orange" },
  { skill: "Atom" }
]
const databases = [
  { skill: "Neon" },
  { skill: "Mongodb" },
  { skill: "Mongodb Atlas" },
  { skill: "Postgres" },
  { skill: "PostgreSQL" },
  { skill: "PgAdmin" },
  { skill: "Sql" },
  { skill: "MySql" },
  { skill: "Oracle Database" },
  { skill: "Microsoft SQL Server" },
  { skill: "Redis" },
  { skill: "SQLite" },
  { skill: "Apache Cassandra" },
  { skill: "Amazon DynamoDB" },
  { skill: "Microsoft Access" },
  { skill: "CouchDB" },
  { skill: "Amazon RDS" },
  { skill: "Microsoft Azure SQL Database" },
  { skill: "Google Cloud Platform" }
]
const frameworks = [
  { skill: "Django" },
  { skill: "Gatsby" },
  { skill: "ReactJs" },
  { skill: "AngularJs" },
  { skill: "Angular" },
  { skill: "Bootstrap" },
  { skill: "jQuery" },
  { skill: "Flask" },
  { skill: "ASP.NET Core" },
  { skill: ".NET Core" },
  { skill: "React Native" },
  { skill: "NodeJs" },
  { skill: "NextJs" },
  { skill: "NuxtJs" },
  { skill: "NestJs" },
  { skill: "VueJs" },
]
const mobile = [
  { skill: "ReactNative" },
  { skill: "Expo" }
]
const game = [
  { skill: "Core" },
  { skill: "Unity" }
]

export default function Skills() {
  return (
    <>
      <section id="about">
        <div className="text-center">
          <div className="flex mb-10 flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                >
                  {item.skill}
                </p>
              )
            })}
          </div>
          <div className="text-center ">
            <h1 className="text-2xl font-bold">⚡ Experiences</h1>
            <div className="flex md:mb-5 mb-10 flex-wrap flex-row justify-center z-10 md:justify-start">
              {experiences.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6"> Mobile Dev Tools </h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {mobile.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6">Game Dev Tools</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {game.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6">Web Dev Tools</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {web.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6"> Clouds </h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {clouds.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6">FrameWorks</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {frameworks.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6">Code Editor & Ides</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {editor.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6"> Databases </h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {databases.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="text-center md:w-1/2 md:text-center">
              <h1 className="text-2xl font-bold mb-6">Design Tools</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {design.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-blue-950 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

