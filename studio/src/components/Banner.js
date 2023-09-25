import React from "react";
import LOGO from "../images/LOGO.svg";
import GLOBE from "../images/GLOBE.svg";
import Disk from "../images/DISK.svg";
import Sig1 from "../images/Sig 1.svg";
import Sig2 from "../images/Sig 2.svg";
import Sig3 from "../images/Sig 3.svg";
import Dot from "../images/Ellipse.svg";
import GEOFF_FRONT_COVER from "../images/GEOFF_FRONT_COVER.svg";

// GSAP IMPORTS

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Banner() {

  // GSAP ANIMATION

  const imgRef = useRef(null);
  useEffect(() => {
    const disc = imgRef.current;
    gsap.fromTo(
      disc,
      { rotation: 0 },
      {
        rotation: 720,
        duration: 1,
        scrollTrigger: {  //ScrollTrigger
          trigger: disc,
          scrub: 1,
        },
      }
    );
  });

  return (
    <>
      <div className="bg-[#151515] z-100">

        {/* HEADER FLEXBOX */}

        <div className="container flex flex-col font-filicudi md:flex-row pl-[44px] md:grid md:grid-flow-col md:grid-cols-3 md:m-auto md:pt-10 md:gap-x-56">
          
          {/* STUDIO 94 HEADER */}

          <div className="text-[#CA9E67] w-20 py-[60px] md:w-32 md:order-2 md:pt-0 md:ml-12">
            <img src={LOGO} alt="" />
          </div>

          <div className="text-[#CA9E67]  text-[28px] font-bold md:order-1 md:text-left">
            TRIPLE BIRTHDAY <br /> PARTY
          </div>
          <div className="text-[#CA9E67]  text-[28px] font-bold md:order-3 md:text-right md:mr-8">
            LET'S CELEBRATE

            {/* RSVP BUTTON */}

            <div className="text-[#CA9E67] font-bold text-[26px] pt-24 pb-10 md:order-3 md:pt-3 md:text-right">
              <button className="rounded-xl border-[3px] border-[#CA9E67] px-7 py-1 font-bold ">
                RSVP
              </button>
            </div>
          </div>
        </div>

        {/* MAIN IMAGE */}

        <div className="text-[#CA9E67] flex flex-col pb-0">
          <img
            src={GEOFF_FRONT_COVER}
            className="-rotate-6 z-0 m-auto md:rotate-0 md:pt-11 md:w-[625px]"
            alt=""
          />

          <div className="text-[#CA9E67] font-filicudi font-bold gap-2 text-7xl -mt-10 z-10 m-auto md:text-[128px] md:-mt-[68px] md:pr-5 md:font-extrabold md:pb-32 inline-flex md:gap-[55px]">
            21
            <img src={Dot} className="md:w-3" alt="" />
            55
            <img src={Dot} className="md:w-3" alt="" />
            18
          </div>

          {/* SIGNATURES ON IMAGE */}

          <div className="flex flow-row gap-36  items-center  md:flex-row md:place-content-center md:-mt-[400px] md:pb-[240px] z-10  invisible md:visible ">
            <div className="h-48">
              <img src={Sig1} alt="" />
            </div>
            <div className="">
              <img className="" src={Sig2} alt="" />
            </div>
            <div className="mr-5 h-48">
              <img src={Sig3} alt="" />
            </div>
          </div>
        </div>

        {/* ADDRESS DATE */}

        <div className="text-[#CA9E67]  font-filicudi grid  border-[3px] mx-8 rounded-2xl pb-3 -mt-28 md:-mt-0 border-[#CA9E67] md:grid md:grid-flow-col md:grid-cols-3 md:w-[1050px] md:m-auto md:py-0 md:overflow-hidden">
          <div className="text-[#CA9E67] font-bold text-[28px] m-auto pt-5 md:text-[25px] md:order-1 md:border-x-2 md:px-[109px] md:border-[#CA9E67] md:h-full md:-mx-6 md:mt-0">
            23 SEPTEMBER
            <div className="text-[#CA9E67] font-bold text-[28px] m-auto pb-5 md:order-1 md:-mt-2 md:text-[25px]">
              2023 OM 18U00
            </div>
          </div>
          <div className="text-[#CA9E67] font-bold  m-auto py-5  border-y-2 border-[#CA9E67]  w-full md:border-y-0 md:order-3 md:pl-[30px] ">
            <img className="m-auto md:w-20" src={GLOBE} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="text-[#CA9E67] font-bold text-[28px] mx-auto pt-5 md:order-2 md:pr-[50px] md:text-[25px]">
              THE ADRESS 4
            </div>
            <div className="text-[#CA9E67] font-bold text-[28px] mx-auto pb-1 md:pb-5 md:order-2 md:pr-[50px] md:-mt-1 md:text-[25px]">
              1000 BRUSSEL
            </div>
          </div>
        </div>

        {/* DRESS CODE */}

        <span className="inline-block px-6 md:px-80 font-filicudi">
          <div className="text-[#CA9E67] font-bold text-[22px] pt-14 inline-block overflow-hidden">
            <div className="text-white inline-block">DRESS CODE </div>
            <img src={Dot} className="w-2 inline-block mx-1" alt="" />
            STUDIO 94 FASHION{" "}
            <img src={Dot} className="w-2 inline-block mx-1" alt="" />
            <div className="text-white inline-block">PARKING</div>
            <img src={Dot} className="w-2 inline-block mx-1" alt="" />
            TO BE DETERMINED
          </div>
        </span>

        {/* PINTEREST BOARD */}

        <div className="text-[#CA9E67] font-filicudi pl-6 pt-20 font-bold text-xl pb-32 underline md:mx-[600px] md:pt-0">
          PINTEREST BOARD
        </div>
      </div>

      {/* DISK SECTION */}

      <div className="bg-[#CA9E67] z-0  overflow-hidden ">
        <div className=" grid place-items-center pt-24 md:pt-[280px]">
          <img
            src={Disk}
            className="z-10 w-72 items-center md:w-[350px]"
            alt=""
            ref={imgRef}
          />

          {/* Ripple 1 */}
          <div className="w-[370px] h-[370px] rounded-full border-[#EFEFEF] border-[1.25px] z-1 -mt-[330px] md:w-[550px] md:h-[550px] md:-mt-[455px]"></div>
        </div>
        {/* Ripple 2 */}
        <div className="z-9 grid place-content-center md:-mt-[245px]">
          <div className="w-[460px] h-[460px] rounded-full border-[#EFEFEF] border-[1.25px] z-0 -mt-[414px] md:w-[750px] md:h-[750px]"></div>
        </div>
        {/* Ripple 3 */}
        <div className="z-8 grid place-content-center md:-mt-[355px]">
          <div className="w-[550px] h-[550px] rounded-full border-[#EFEFEF] border-[1.25px] z-0 -mt-[500px] md:w-[950px] md:h-[950px]">
            <div className="text-[#FFFFFF] font-filicudi text-[55px] font-bold z-50 text-center pt-[527px] md:pt-[890px] md:text-[128px]">
              RSVP
            </div>
          </div>
        </div>
        {/* Ripple 4  */}
        <div className="z-7 grid place-content-center md:-mt-[470px] ">
          <div className="w-[640px] h-[640px] rounded-full border-[#EFEFEF] border-[1.25px] z-0 -mt-[590px] md:w-[1175px] md:h-[1175px]"></div>
        </div>
        {/* Ripple 5 */}
        <div className="z-7 grid place-content-center md:-mt-[600px]">
          <div className="w-[730px] h-[730px] rounded-full border-[#EFEFEF] border-[1.25px] z-0 -mt-[680px] md:w-[1400px] md:h-[1400px]"></div>
        </div>
        {/* Ripple 6 */}
        <div className="z-7 grid place-content-center md:-mt-[730px]">
          <div className="w-[820px] h-[820px] rounded-full border-[#FFFFFF] border-[1.25px] z-0 -mt-[770px] md:w-[1600px] md:h-[1600px]"></div>
        </div>

        {/*             FORMS               */}

        <form
          className="bg-[#FFFFFF] mx-10 rounded-2xl p-6 -mt-5 overflow-clip md:mx-72 md:pl-12 md:-mt-24"
          id="rsvp"
        >
          {/*Heading  */}

          <div className="font-bold pt-4 pb-[30px] md:text-2xl ">
            Aanwezigen
          </div>

          {/* Checkbox Button */}

          <label
            htmlFor="autoSaver"
            className="py-5 text-[#CA9E67] autoSaverSwitch relative inline-flex cursor-pointer select-none items-center"
          >
            <input
              type="checkbox"
              name="autoSaver"
              id="autoSaver"
              className="sr-only"
            />
            <span className="slider text-[#CA9E67] mr-3 flex h-[24px] w-[48px] items-center rounded-full bg-[#FFFFFF] border-2 border-[#CA9E67] p-1 duration-200">
              <span className="dot text-[#CA9E67] h-[15px] w-[15px] rounded-full bg-[#CA9E67] duration-200"></span>
            </span>
            <span className="label flex items-center text-md pl-3 font-medium  text-[#CA9E67] md:text-lg">
              Dhr Miguel Landuyt
            </span>
          </label>

          {/* Input */}

          {/* Aanspreking */}

          <div className=" md:flex md:flex-row md:gap-3">
            <div className="md:pt-4">
              <label className="text-[#909090] text-sm">Aanspreking</label>
              <br />
              <input
                type="text"
                className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
                placeholder="Dhr"
              />
              <hr className="border-[0.09em]" />
            </div>

            {/* Voornaam */}

            <div className="pt-4 md:ml-5">
              <label className="text-[#909090] text-sm">Voornaam</label>
              <br />
              <input
                className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
                type="text"
                placeholder="Miguel"
              />
              <hr className="border-[0.09em] md:w-72" />
            </div>

            {/* Naam */}

            <div className="pt-4 pb-2 md:ml-5">
              <label className="text-[#909090] text-sm">Naam</label>
              <br />
              <input
                className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
                type="text"
                placeholder="Landuyt"
              />
              <hr className="border-[0.09em] md:w-96" />
            </div>
          </div>

          {/* Radio */}

          <div className="pt-6 pb-2 flex">
            <input type="radio" className="text-[#CA9E67] h-6 w-6 " />
            <label className=" pl-5 text-[#585858] font-bold">
              Vegetarisch
            </label>
          </div>

          {/* Allergy */}

          <div className="pt-4 pb-14">
            <label className="text-[#909090] text-sm">
              Allergieën of opmerkingen?
            </label>
            <br />
            <input
              className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
              type="text"
              name=""
              id=""
              placeholder="Ik heb een pinda allergie."
            />
            <hr className="border-[0.09em] md:mr-[37px]" />
            <hr className="bg-[#CA9E67] outline-1 w-[2000px] -ml-16 outline-dashed outline-[#CA9E67] mt-10 invisible md:visible -mb-8 " />
          </div>

          {/* Checkbox Button */}

          <label
            htmlFor="autoSaver"
            className="py-5 text-[#CA9E67] autoSaverSwitch relative inline-flex cursor-pointer select-none items-center"
          >
            <input
              type="checkbox"
              name="autoSaver"
              id="autoSaver"
              className="sr-only"
            />
            <span className="slider text-[#BBBBBB] mr-3 flex h-[24px] w-[48px] items-center rounded-full bg-[#FFFFFF] border-2 border-[#BBBBBB] p-1 duration-200">
              <span className="dot text-[#BBBBBB] h-[15px] w-[15px] rounded-full bg-[#BBBBBB] duration-200"></span>
            </span>
            <span className="label flex items-center text-md pl-3 font-medium  text-[#BBBBBB] md:text-lg">
              Dhr Miguel Landuyt
            </span>
          </label>

          {/* Input */}

          {/* Aanspreking */}

          <div className=" md:flex md:flex-row md:gap-3">
            <div className="pt-2 md:pt-4">
              <label className="text-[#909090] text-sm">Aanspreking</label>
              <br />
              <input
                type="text"
                placeholder="Dhr"
                className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
              />
              <hr className="border-[0.09em]" />
            </div>

            {/* Voornaam */}

            <div className="pt-4 md:ml-5">
              <label className="text-[#909090] text-sm">Voornaam</label>
              <br />
              <input
                type="text"
                placeholder="Miguel"
                className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
              />
              <hr className="border-[0.09em] md:w-72" />
            </div>

            {/* Naam */}

            <div className="pt-4 md:ml-5">
              <label className="text-[#909090] text-sm">Naam</label>
              <br />
              <input
                type="text"
                placeholder="Landuyt"
                className="placeholder-[#585858] font-semibold pb-[0.15rem] focus:outline-0 focus:placeholder-opacity-0"
              />
              <hr className="border-[0.09em] md:w-96" />
            </div>
          </div>

          {/* Add Button */}
          <div className="bg-[#F2F2F2] mt-14 -mb-3 text-center rounded-xl hover:cursor-pointer md:w-52 md:-mb-0">
            <button className="p-3 text-[#363636] font-semibold ">
              Persoon toevoegen
            </button>
          </div>
        </form>

        {/*           EMAIL FORM           */}
        <div className="bg-[#FFFFFF] mx-10 rounded-2xl px-6 py-4 mt-10 mb-16 md:mx-72 md:pl-12 md:pt-6 md:pb-5">
          <form id="email">
            <label className="text-black text-2xl font-semibold">
              E-mail adres
            </label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="miguel@gmail.com"
              className="placeholder-[#585858] font-semibold pb-[0.6rem] pt-5 focus:outline-0 focus:placeholder-opacity-0"
              required="required"
            ></input>
            <hr className="border-[0.09em]" />

            {/* Button */}

            <div className="bg-[#CA9E67] mt-6  text-center rounded-xl hover:cursor-pointer md:w-52">
              <button type="submit" className="p-3 text-white font-semibold ">
                RSVP Verzenden
              </button>
            </div>
          </form>
        </div>

        {/*        Signatures        */}

        <div className="flex flex-col items-center pt-10 pb-14 md:flex-row md:place-content-center md:gap-28 md:pt-16">
          <div className="py-4">
            <img src={Sig1} alt="" />
          </div>
          <div className="py-4">
            <img src={Sig2} alt="" />
          </div>
          <div className="py-4">
            <img src={Sig3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
