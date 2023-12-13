/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { useTheme } from "../../../contexts/themeContext";

export default function Gateways() {
  const { isDarkMode, baseColor } = useTheme();

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };
  return (
    <>
      <div
        id="Partners"
        className={`spons-cont items-center  bg-gray50 py-6  w-full relative ${
          isDarkMode ? `${baseColor} text-gray-200` : ""
        }`}
      >
        {/* <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            width={500}
            height={500}
            alt=""
            src="/assets/map-pattern.png"
          />
        </div> */}
        <div className="spons-message-cont mx-10 lg:w-2/3">
          <div className="message">
            <div
              className="message-little flex items-center font-bold uppercase"
              data-aos="fade-up"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-1 text-red-700"
              >
                <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
              </svg>

              <p className="text-sm">Payment Gateways</p>
            </div>
            <div
              className="message-head capitalize"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-bold my-3">
                Multi Platform <span className="text-red-700">Payment</span>{" "}
                Gateway Acceptance
              </p>
            </div>
            <div
              className="message-text text-sm "
              data-aos="fade-up"
              data-aos-delay="150"
            >
              We facilitate seamless investment processes by accepting a
              comprehensive range of major cryptocurrencies and fiat payment
              methods on our platform. This inclusive approach aims to enhance
              your investment experience, providing you with flexibility and
              accessibility. Our commitment to accommodating various payment
              options underscores our dedication to making investment
              transactions convenient and efficient for our users.
            </div>
          </div>
        </div>
        <div className="spons-sides pt-10 mx-auto w-[90%]  lg:my-0 items-center ">
          <div data-aos="fade-left">
            <Slider {...settings}>
              <div className="slide1">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/gateway/btc.png"
                  />
                </div>
              </div>
              <div className="slide2">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/gateway/ethereum.png"
                  />
                </div>
              </div>
              <div className="slide3">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/gateway/litecoin.png"
                  />
                </div>
              </div>
              <div className="slide4">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/gateway/tether.png"
                  />
                </div>
              </div>
              <div className="slide5 hidden md:block lg:block">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/gateway/paypal.png"
                  />
                </div>
              </div>
              <div className="slide6 hidden md:block lg:block">
                <div className="img-holder mx-2">
                  <Image
                    alt=""
                    width={100}
                    height={100}
                    src="/assets/gateway/tether.png"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
