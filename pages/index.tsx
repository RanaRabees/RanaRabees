"use client"
import React, { useState, useEffect } from "react";
import Page from "@/components/utility/Page";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import 'flowbite';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading && <div id="loader"></div>}
      {!isLoading && (
        <Page currentPage="Home" meta={{ desc: "I'm Full Stack Developer." }}>
          <div>
            <Hero />

            <div className="mt-20 space-y-32">
              <Projects />
              <Skills />
              <Testimonials />
            </div>
            <CTA />

          </div>
        </Page>
      )}
    </>
  );
}


