import React from "react";
import Page from "components/utility/Page";
import Heading from "components/about/Heading";
import Aboutme from "@/components/about/Aboutme";
import More from "components/about/More";

function about() {
  return (
    <Page
      currentPage="About"
      meta={{ title: "About", desc: "I've learned a lot in my life, including many frameworks, libraries, and languages. I'm always eager to learn more, so if you want to know more about me, see below." }}
    >
      <Heading />
      <Aboutme />
      <More />
    </Page>
  );
}

export default about;
