/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Slider from "react-slick";
import { useTheme } from "../../../contexts/themeContext";
export default function Testimonials() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    //centerMode: true,
    initialSlide: 0,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  const { isDarkMode, baseColor } = useTheme();
  return (
    <>
      <div
        id="Testimonials"
        className={`wwd-container flex flex-col   pb-24 ${
          isDarkMode
            ? `bg-[#171717] text-white`
            : "bg-gradient-to-r from-gray-50 to-gray-100"
        }`}
      >
        <div className="second-cont mt-10 mb-3 md:w-2/3 lg:w-1/2 mx-10">
          <div className="inner-cont text-whte">
            <div className="smallertex" data-aos="fade-up">
              <div className="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-ed-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Testimonials</p>
              </div>
            </div>
            <div
              className="larger-text text-2xl font-bold capitalize"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              what <span className="text-re-600">people say</span> about us.
            </div>
            <div
              className="text-writeUp text-sm my-3"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <p>
                Immerse yourself in an unparalleled experience of exceptional
                service. Our dedicated team is committed to exceeding your
                expectations with meticulous attention to detail and
                personalized care. From the moment you arrive, we create a warm
                and sophisticated atmosphere tailored to your desires.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="first-cont z-20 -translate-y-24 mx-5 h-32">
        <Slider {...settings}>
          <div className="TestimonyOne">
            <div
              className={`testi-card ${
                isDarkMode
                  ? `bg-[#111] text-white border-white/10 border`
                  : "bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              }  p-5 rounded-xl mx-2 my-2`}
            >
              <div className="card-brand mb-4">
                <div className="icon-container flex items-center font-bold ">
                  <p>Testimony One</p>
                </div>
              </div>
              <div className="card-body text-sm">
                <blockquote>
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>{" "}
                  Bitrust has been an invaluable partner in helping me manage my
                  finances and investments. Their team of talented and
                  knowledgeable professionals have prepared top-notch plans and
                  given me the assurance that my financial future is in great
                  hands. I'd highly recommend them to anyone looking for an
                  experienced financial planning service.
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="w-3 h-3 inline text-gray-400"
                    />
                  </sup>
                </blockquote>
              </div>
              <div className="card-author mt-5 flex items-center">
                <div className="avatar ">
                  <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      className=""
                      src="/assets/nellyaran.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="av-writeUp ml-5 text-xs font-semibold">
                  <div className="name mb-1">Hannah Gray</div>
                  <div className="desc">- Canada -</div>
                </div>
              </div>
            </div>
          </div>
          <div className="TestimonyTwo">
            <div
              className={`testi-card ${
                isDarkMode
                  ? `bg-[#111] text-white border-white/10 border`
                  : "bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              }  p-5 rounded-xl mx-2 my-2`}
            >
              <div className="card-brand mb-4">
                <div className="icon-container  flex items-center font-bold ">
                  <p>Testimony Two</p>
                </div>
              </div>
              <div className="card-body text-sm">
                <blockquote>
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>{" "}
                  I was looking for a reliable financial planner and I found
                  Bitrust. They have provided me with great advice and trading
                  during the entire process to help me achieve my financial
                  goals. Their customer service has been outstanding, and I
                  would highly recommend them to anyone looking for a top-notch
                  financial planning firm.{" "}
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>
                </blockquote>
              </div>
              <div className="card-author mt-5 flex items-center">
                <div className="avatar ">
                  <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      className=""
                      src="/assets/testiii.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="av-writeUp ml-5 text-xs font-semibold">
                  <div className="name mb-1">Heidi Roth</div>
                  <div className="desc">- Germany -</div>
                </div>
              </div>
            </div>
          </div>
          <div className="TestimonyOne">
            <div
              className={`testi-card ${
                isDarkMode
                  ? `bg-[#111] text-white border-white/10 border`
                  : "bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              }  p-5 rounded-xl mx-2 my-2`}
            >
              <div className="card-brand mb-4">
                <div className="icon-container flex items-center font-bold ">
                  <p>Testimony Three</p>
                </div>
              </div>
              <div className="card-body text-sm">
                <blockquote>
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>{" "}
                  Bitrust is an excellent and user friendly trading/investment
                  platform and I highly recommend them. Their team is
                  well-informed, reliable and highly professional. I have had
                  nothing but positive experiences working with them and I
                  couldn't be happier with the results.{" "}
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>
                </blockquote>
              </div>
              <div className="card-author mt-5 flex items-center">
                <div className="avatar ">
                  <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      className=""
                      src="/assets/murat.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="av-writeUp ml-5 text-xs font-semibold">
                  <div className="name mb-1">Carlo Francescoo</div>
                  <div className="desc">- Italy -</div>
                </div>
              </div>
            </div>
          </div>
          <div className="TestimonyTwo">
            <div
              className={`testi-card ${
                isDarkMode
                  ? `bg-[#111] text-white border-white/10 border`
                  : "bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              }  p-5 rounded-xl mx-2 my-2`}
            >
              <div className="card-brand mb-4">
                <div className="icon-container flex items-center0 font-bold ">
                  <p>Testimony Four</p>
                </div>
              </div>
              <div className="card-body text-sm">
                <blockquote>
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>{" "}
                  Bitrust is a game changer! Their experienced traders have
                  helped me make informed decisions and grow my portfolio. I'm
                  grateful for their expertise and highly recommend them to
                  anyone looking to invest in cryptocurrency. .{" "}
                  <sup>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      className="w-3 h-3 inline text-gray-300"
                    />
                  </sup>
                </blockquote>
              </div>
              <div className="card-author mt-5 flex items-center">
                <div className="avatar ">
                  <div className="img-container rounded-full bg-fuchsia-200 w-10 h-10 overflow-hidden">
                    <Image
                      height={50}
                      width={50}
                      className=""
                      src="/assets/dumm.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="av-writeUp ml-5 text-xs font-semibold">
                  <div className="name mb-1">Sean Fischer</div>
                  <div className="desc">- U.S.A -</div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
