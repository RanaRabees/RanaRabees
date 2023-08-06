import React from "react";
import { designs } from "@/data/content/designs";
{/* <script> */ }
// window.intercomSettings = {
//   api_base: "https://api-iam.intercom.io",
//   app_id: "tr4llo36"
// };
// </script>

{/* <script> */ }
// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/tr4llo36'
// (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/tr4llo36';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
// </script>

function Designs() {
  return (
    <>

      <div id="default-carousel" className="md:pb-12 pb-8 relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative overflow-hidden rounded-lg md:h-[600px] h-56">
          {/* <!-- Item 1 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 2 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide3.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide4.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide5.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide6.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide7.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/static/designs/slide8.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
          <button type="button" className="bg-gray-50 md:w-3 w-2 md:h-3 h-2 rounded-full hover:border-2 border-indigo-600" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center md:w-10 w-7 md:h-10 h-7 rounded-full bg-bg group-hover:bg-gray-400 group-focus:ring-4 group-focus:outline-none">
            <svg className="md:w-4 w-3 md:h-4 h-3 hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center md:w-10 w-7 md:h-10 h-7 rounded-full bg-bg group-hover:bg-gray-400 group-focus:ring-4 group-focus:outline-none">
            <svg className="md:w-4 w-3 md:h-4 h-3 hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="md:pt-10 pt-8 grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
        {designs.map((item, index) => {
          return (
            <div
              className="w-full"
              key={index}
            >
              <a href={item.link} target="_blank" className="w-full">
                <img
                  className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                  src={item.img}
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Designs;
