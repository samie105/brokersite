/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import AssetWidget from "./AssetWidgtet";
import AssetWidgetTwo from "./AssetWidgetTwo";
import LatestTrades from "./LatestTrades";
import AssetWidgetThree from "./AssetWidgetThree";
import AssetWidgetFour from "./AssetWidgetFour";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";
import { useUserData } from "../../../contexts/userrContext";
import { Skeleton } from "../../ui/skeleton";
import { useTheme } from "../../../contexts/themeContext";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { ToastAction } from "../../ui/toast";
import { motion as m } from "framer-motion";
import { usePathname } from "next/navigation";
import BonusPlan from "../bonus_plan/BonusPlan";

export default function Dash() {
  const { details } = useUserData();
  const { isDarkMode, baseColor } = useTheme();
  const { toast } = useToast();
  const pathname = usePathname();

  const dashhh = [
    {
      name: "deposited",
      bal: `$${details && details.totalDeposited.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-red-600"
        >
          <path
            fillRule="evenodd"
            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Profit",
      bal: `$${details && details.profit.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-green-700"
        >
          <path
            fillRule="evenodd"
            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm5.25-9.25a.75.75 0 00-1.5 0v4.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Balance",
      bal: `$${details && details.tradingBalance.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-blue-700"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46.757.99 1.798 1.54 2.894 1.54s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Active Packages",
      bal: `${details && details.activePackages.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-green-600"
        >
          <path
            fillRule="evenodd"
            d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 00-.722-1.952l-3.285-3.832A3 3 0 0016.215 3h-8.43a3 3 0 00-2.278 1.048L2.222 7.88A3 3 0 001.5 9.832zM7.785 4.5a1.5 1.5 0 00-1.139.524L3.881 8.25h3.165a3 3 0 012.496 1.336l.164.246a1.5 1.5 0 001.248.668h2.092a1.5 1.5 0 001.248-.668l.164-.246a3 3 0 012.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 00-1.139-.524h-8.43z"
            clipRule="evenodd"
          />
          <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 003 3h15a3 3 0 003-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 00-2.496 1.336l-.164.246a1.5 1.5 0 01-1.248.668h-2.092a1.5 1.5 0 01-1.248-.668l-.164-.246A3 3 0 007.046 15H2.812z" />
        </svg>
      ),
    },
    {
      name: "Total Packages",
      bal: `${details && details.totalPackages.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-green-600"
        >
          <path
            fillRule="evenodd"
            d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 00-.722-1.952l-3.285-3.832A3 3 0 0016.215 3h-8.43a3 3 0 00-2.278 1.048L2.222 7.88A3 3 0 001.5 9.832zM7.785 4.5a1.5 1.5 0 00-1.139.524L3.881 8.25h3.165a3 3 0 012.496 1.336l.164.246a1.5 1.5 0 001.248.668h2.092a1.5 1.5 0 001.248-.668l.164-.246a3 3 0 012.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 00-1.139-.524h-8.43z"
            clipRule="evenodd"
          />
          <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 003 3h15a3 3 0 003-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 00-2.496 1.336l-.164.246a1.5 1.5 0 01-1.248.668h-2.092a1.5 1.5 0 01-1.248-.668l-.164-.246A3 3 0 007.046 15H2.812z" />
        </svg>
      ),
    },
    {
      name: "Bonus",
      bal: `$${details && details.planBonus.toLocaleString()}`,

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-yellow-700"
        >
          <path
            fillRule="evenodd"
            d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];
  useEffect(() => {
    if (details !== 0) {
      if (details?.tradingBalance === 0) {
        toast({
          variant: "default",
          duration: 20000,
          className: isDarkMode
            ? "bg-[#111] text-white border border-white/10 top-0 md:right-0 md:fixed md:w-[400px] md:mt-5 md:mr-5"
            : "bg-white text-black top-0 md:right-0 md:fixed md:w-[400px] md:mt-5 md:mr-5",
          title: "No or Low trading balance??",
          description:
            "Why not get started by making a deposit to enjoy all trading benefits",
          action: (
            <ToastAction
              altText="Deposit"
              className={`font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] h-11 border-0/  from-red-800 via-red-600 to-orange-500 text-white`}
            >
              <Link href="/dashboard/deposits" passHref>
                Deposit
              </Link>
            </ToastAction>
          ),
        });
      }
    }
  }, []);
  return (
    <div>
      {" "}
      <Toaster />
      <div
        className={`dash-cont p-4 relative ${
          isDarkMode ? `${baseColor}` : ""
        } max-w-[100vw]`}
      >
        {details !== 0 && (
          <div className="flex items-center gap-x-2">
            <div
              className={`dash-header font-bold text-sm  mt-3 capitalize p-2 rounded-md ${
                isDarkMode ? "text-white bg-white/5" : "text-black bg-black/5"
              }`}
            >
              👋 hey {details.name}
            </div>
            <div
              className={`dash-header font-bold  mt-3 capitalize p-2 rounded-md ${
                isDarkMode ? "text-white" : "text-black"
              } ${details.isVerified ? "bg-green-500/10" : "bg-red-500/10"}`}
            >
              {details.isVerified ? (
                <div className="flex items-center text-xs md:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-green-600 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>You're verified</p>
                </div>
              ) : (
                <Link
                  href="/dashboard/verify"
                  passHref
                  className="flex items-center text-xs md:text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-red-600 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="pr-1">You're not verified</p>
                </Link>
              )}
            </div>
          </div>
        )}
        <div className="account-boards w-full my-3 text-sm">
          {details === 0 ? (
            <div className="w-full px-3">
              {" "}
              <Skeleton
                className={`  h-20 ${
                  isDarkMode ? "bg-[#333]" : "bg-gray-200/80"
                } `}
              />
            </div>
          ) : (
            <div
              className={` sticky rounded-lg px-2 py-4  /shadow-[0px_0px_17px_3px_#00000010] ${
                isDarkMode ? "bg-[#111] text-white" : "bg-gray-400/10 border"
              }`}
            >
              <div className="card-info shado-md flex items-center justify-between">
                <div className="card-header font-bold ml-1 flex items-center /text-white">
                  <div className="block">
                    {" "}
                    <div
                      className={`icon-cont bg-gry-50   ${
                        isDarkMode
                          ? "text-white bg-[#222]"
                          : "border bg-black/5 text-black"
                      } rounded-full p-3 mr-2 `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center text-xs ml-2">
                    <div className="flex items-center">
                      <p
                        className={`${
                          isDarkMode ? "text-white/70" : "text-black"
                        }`}
                      >
                        Trading Balance
                      </p>{" "}
                      <div className="live md:hidden">
                        <div className="live-info p-1 flex items-center bg-green-700 text-xs mx-3 text-white rounded-full">
                          <div className="dot w-1 h-1 animate-ping bg-white  rounded-full"></div>{" "}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`mt-2 md:mt-0 bg-gay-200 rounded-lg md:ml-2 text-lg md:text-sm text-left  ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {`$${
                        details &&
                        (
                          details.tradingBalance + details.planBonus
                        ).toLocaleString()
                      }.00`}
                    </div>
                    <div className="live hidden md:block">
                      <div className="live-info py-1 px-2 flex items-center bg-green-700 text-xs mx-3 text-white rounded-full">
                        <div className="dot w-1 h-1 mr-2 animate-ping bg-white  rounded-full"></div>{" "}
                        <p>Live</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-info flex">
                  <Link href="/dashboard/withdrawals" passHref>
                    {" "}
                    <div
                      className={`mx-1 ${
                        isDarkMode
                          ? "text-white bg-[#222]"
                          : "bg-black/5 text-black"
                      }  flex font-bold text-xs items-center cursor-pointer md:px-4 md:py-3 p-3 rounded-full md:rounded-lg`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 md:mr-1"
                      >
                        <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
                      </svg>
                      <p className="hidden md:block">Withdraw</p>
                    </div>
                  </Link>
                  <Link href="dashboard/deposits" passHref>
                    {" "}
                    <div className="mx-1 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-700 via-red-600 to-orange-500 text-white flex font-bold text-xs items-center cursor-pointer md:px-4 md:py-3 p-3 rounded-full md:rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 md:mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="hidden md:block">Deposit</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>{" "}
        {details === 0 ? (
          <div className=" my-2 w-full grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden rounded-md">
            <Skeleton
              className={`  h-32 ${
                isDarkMode ? "bg-[#333]" : "bg-gray-200/80"
              }`}
            />
            <Skeleton
              className={`  h-32 ${
                isDarkMode ? "bg-[#333]" : "bg-gray-200/80"
              }`}
            />
            <Skeleton
              className={`  h-32 ${
                isDarkMode ? "bg-[#333]" : "bg-gray-200/80"
              }`}
            />
            <Skeleton
              className={`  h-32 ${
                isDarkMode ? "bg-[#333]" : "bg-gray-200/80"
              }`}
            />
          </div>
        ) : (
          <div className="dash-boards w-full my-2 text-sm grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-2">
            {dashhh.map((items) => (
              <div key={items.name}>
                <Card
                  className={`rounded-xl ${
                    isDarkMode ? "border-0 bg-[#111]" : ""
                  }`}
                >
                  <CardContent
                    className={`p-4 rounded-xl overflow-hidden /border-0 ${
                      isDarkMode ? "bg-[#111]  text-white" : "bg-gray-50"
                    }`}
                  >
                    <div className="cont flex justify-between /rounded-xl">
                      <div className="deets w-full">
                        <div
                          className={`name capitalize text-sm font-bold ${
                            isDarkMode ? `text-white/70` : ""
                          }`}
                        >
                          {items.name}
                        </div>
                        <div
                          className={`bal font-bold text-xl  my-2 md:text-2xl  ${
                            isDarkMode ? `text-white` : "text-black"
                          }`}
                        >
                          {items.bal}
                        </div>
                      </div>
                      <div className="icon">
                        <div>{items.icon}</div>
                      </div>
                    </div>
                    <div
                      className={`extra font-semibold text-xs ${
                        isDarkMode ? "text-green-600" : "text-green-700"
                      }`}
                    >
                      +0 from last month
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
        <BonusPlan />
        <div className="assets">
          {details === 0 ? (
            <div className="px-3 mt-4">
              {" "}
              <Skeleton
                className={`  h-52 ${
                  isDarkMode ? "bg-[#333]" : "bg-gray-200/80"
                }`}
              />
            </div>
          ) : (
            <AssetWidget />
          )}
          <div className="my-2">
            {" "}
            {details === 0 ? (
              <div className="px-3 mt-4">
                {" "}
                className=
                {`  h-52 ${isDarkMode ? "bg-[#333]" : "bg-gray-200/80"}`}
              </div>
            ) : (
              <AssetWidgetTwo />
            )}
          </div>

          {details === 0 ? (
            <div className="px-3 mt-4">
              {" "}
              className=
              {`  h-52 ${isDarkMode ? "bg-[#333]" : "bg-gray-200/80"}`}
            </div>
          ) : (
            <AssetWidgetThree />
          )}
        </div>
        {details === 0 ? (
          <div className="px-3 mt-4">
            {" "}
            className={`  h-52 ${isDarkMode ? "bg-[#333]" : "bg-gray-200/80"}`}
          </div>
        ) : (
          <AssetWidgetFour />
        )}
        {details === 0 ? (
          <div className="px-3 mt-4">
            {" "}
            className={`  h-52 ${isDarkMode ? "bg-[#333]" : "bg-gray-200/80"}`}
          </div>
        ) : (
          <div className="latest-trades mt-5 ">
            <div
              className={` rounded-lg ${
                isDarkMode
                  ? "border border-white/5"
                  : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              }`}
            >
              <div
                className={`header text-lg font-bold mb-3 px-4 pt-3 ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                Latest Trades
              </div>
              <LatestTrades />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
