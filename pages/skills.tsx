import React from "react";
import Page from "components/utility/Page";
import Heading from "components/skills/Heading";
import Skills from "@/components/skills/Skills";
import More from "components/skills/More";

function skills() {
  return (
    <Page
      currentPage="Skills"
      meta={{ title: "Skills", desc: "I've learned a lot in my life, including many frameworks, libraries, and languages. I'm always eager to learn more, so if you want to know my skills/experiences, see below." }}
    >
      <Heading />
      <Skills />
      <More />
    </Page>
  );
}

export default skills;
