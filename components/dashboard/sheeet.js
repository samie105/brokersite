"use client";
import { usePathname } from "next/navigation";
import { SheetClose, SheetHeader, SheetTitle } from "../ui/sheet";
import { navList, accountList } from "./navList";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { useTheme } from "../../contexts/themeContext";
import Image from "next/image";

export default function Sheeet() {
  const { isDarkMode, baseColor } = useTheme();
  const router = usePathname();

  return (
    <>
      <SheetHeader className="text-white">
        <SheetTitle>
          <div className={`${isDarkMode ? "text-white" : ""} font-bold`}>
            <svg
              width="90"
              height="27"
              viewBox="0 0 90 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.212358 26V0.545454H10.4041C12.2768 0.545454 13.8387 0.823034 15.0898 1.3782C16.341 1.93336 17.2815 2.70395 17.9112 3.68999C18.541 4.66773 18.8558 5.79463 18.8558 7.07067C18.8558 8.06499 18.657 8.93916 18.2592 9.69318C17.8615 10.4389 17.3146 11.0521 16.6186 11.5327C15.9309 12.005 15.1437 12.3406 14.2571 12.5394V12.788C15.2266 12.8294 16.1339 13.1029 16.979 13.6083C17.8325 14.1138 18.5244 14.8222 19.0547 15.7337C19.585 16.6368 19.8501 17.714 19.8501 18.9652C19.8501 20.3158 19.5146 21.5214 18.8434 22.582C18.1805 23.6344 17.1986 24.4671 15.8977 25.0803C14.5968 25.6934 12.9935 26 11.0877 26H0.212358ZM5.59411 21.6001H9.98153C11.4813 21.6001 12.575 21.3143 13.2628 20.7425C13.9505 20.1625 14.2944 19.3919 14.2944 18.4308C14.2944 17.7264 14.1245 17.105 13.7848 16.5664C13.4451 16.0278 12.9603 15.6052 12.3306 15.2987C11.7092 14.9921 10.9676 14.8388 10.1058 14.8388H5.59411V21.6001ZM5.59411 11.1971H9.58381C10.3213 11.1971 10.9759 11.0687 11.5476 10.8118C12.1276 10.5466 12.5833 10.1738 12.9148 9.69318C13.2545 9.21259 13.4244 8.63672 13.4244 7.96555C13.4244 7.04581 13.0971 6.30421 12.4425 5.74077C11.7962 5.17732 10.8764 4.8956 9.68324 4.8956H5.59411V11.1971ZM28.531 11.5881V8.54545H42.8662V11.5881H37.5225V26H33.8747V11.5881H28.531Z"
                fill="#FF0000"
              />
              <path
                d="M22.5885 26V12.9091H26.2192V26H22.5885ZM24.4124 11.2216C23.8726 11.2216 23.4095 11.0426 23.0232 10.6847C22.6425 10.321 22.4521 9.88636 22.4521 9.38068C22.4521 8.88068 22.6425 8.4517 23.0232 8.09375C23.4095 7.73011 23.8726 7.54829 24.4124 7.54829C24.9521 7.54829 25.4124 7.73011 25.7931 8.09375C26.1794 8.4517 26.3726 8.88068 26.3726 9.38068C26.3726 9.88636 26.1794 10.321 25.7931 10.6847C25.4124 11.0426 24.9521 11.2216 24.4124 11.2216ZM43.7994 26V12.9091H47.3193V15.1932H47.4557C47.6943 14.3807 48.0949 13.767 48.6574 13.3523C49.2199 12.9318 49.8676 12.7216 50.6006 12.7216C50.7824 12.7216 50.9784 12.733 51.1887 12.7557C51.3989 12.7784 51.5835 12.8097 51.7426 12.8494V16.071C51.5722 16.0199 51.3364 15.9744 51.0352 15.9347C50.7341 15.8949 50.4585 15.875 50.2085 15.875C49.6744 15.875 49.1972 15.9915 48.7767 16.2244C48.3619 16.4517 48.0324 16.7699 47.7881 17.179C47.5494 17.5881 47.4301 18.0597 47.4301 18.5938V26H43.7994ZM62.0146 20.4261V12.9091H65.6453V26H62.1595V23.6222H62.0232C61.7277 24.3892 61.2362 25.0057 60.5487 25.4716C59.8669 25.9375 59.0345 26.1705 58.0516 26.1705C57.1766 26.1705 56.4067 25.9716 55.7419 25.5739C55.0771 25.1761 54.5573 24.6108 54.1823 23.8778C53.8129 23.1449 53.6254 22.267 53.6198 21.2443V12.9091H57.2504V20.5966C57.2561 21.3693 57.4635 21.9801 57.8726 22.429C58.2817 22.8778 58.83 23.1023 59.5175 23.1023C59.955 23.1023 60.3641 23.0028 60.7448 22.804C61.1254 22.5994 61.4323 22.2983 61.6652 21.9006C61.9039 21.5028 62.0203 21.0114 62.0146 20.4261ZM79.4415 16.642L76.1176 16.8466C76.0608 16.5625 75.9387 16.3068 75.7512 16.0795C75.5637 15.8466 75.3165 15.6619 75.0097 15.5256C74.7085 15.3835 74.3477 15.3125 73.9273 15.3125C73.3648 15.3125 72.8904 15.4318 72.504 15.6705C72.1176 15.9034 71.9244 16.2159 71.9244 16.608C71.9244 16.9205 72.0494 17.1847 72.2994 17.4006C72.5494 17.6165 72.9784 17.7898 73.5864 17.9205L75.9557 18.3977C77.2284 18.6591 78.1773 19.0795 78.8023 19.6591C79.4273 20.2386 79.7398 21 79.7398 21.9432C79.7398 22.8011 79.487 23.554 78.9813 24.2017C78.4813 24.8494 77.7938 25.3551 76.9188 25.7188C76.0494 26.0767 75.0466 26.2557 73.9102 26.2557C72.1773 26.2557 70.7966 25.8949 69.7682 25.1733C68.7455 24.446 68.146 23.4574 67.9699 22.2074L71.5409 22.0199C71.6489 22.5483 71.9102 22.9517 72.325 23.2301C72.7398 23.5028 73.271 23.6392 73.9188 23.6392C74.5551 23.6392 75.0665 23.517 75.4529 23.2727C75.8449 23.0227 76.0438 22.7017 76.0495 22.3097C76.0438 21.9801 75.9046 21.7102 75.6318 21.5C75.3591 21.2841 74.9387 21.1193 74.3705 21.0057L72.1034 20.554C70.825 20.2983 69.8733 19.8551 69.2483 19.2244C68.629 18.5937 68.3193 17.7898 68.3193 16.8125C68.3193 15.9716 68.5466 15.2472 69.0012 14.6392C69.4614 14.0312 70.1063 13.5625 70.9358 13.233C71.771 12.9034 72.7483 12.7386 73.8676 12.7386C75.521 12.7386 76.8222 13.0881 77.771 13.7869C78.7256 14.4858 79.2824 15.4375 79.4415 16.642ZM88.9891 12.9091V15.6364H81.1056V12.9091H88.9891ZM82.8953 9.77273H86.526V21.9773C86.526 22.3125 86.5771 22.5739 86.6794 22.7614C86.7817 22.9432 86.9237 23.071 87.1056 23.1449C87.2931 23.2187 87.509 23.2557 87.7533 23.2557C87.9237 23.2557 88.0942 23.2415 88.2646 23.2131C88.4351 23.179 88.5658 23.1534 88.6567 23.1364L89.2277 25.8381C89.0459 25.8949 88.7902 25.9602 88.4607 26.0341C88.1311 26.1136 87.7306 26.1619 87.259 26.179C86.384 26.2131 85.6169 26.0966 84.9578 25.8295C84.3044 25.5625 83.7959 25.1477 83.4323 24.5852C83.0686 24.0227 82.8896 23.3125 82.8953 22.4545V9.77273Z"
                fill={` ${isDarkMode ? "white" : "#111"}`}
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.9032 0.0988709C35.0002 0.0363659 35.1107 0.00231982 35.2237 0.000114412C35.3367 -0.00209099 35.4482 0.0276211 35.5473 0.0862992C38.4523 1.54147 40.0969 4.56339 39.9956 7.09029C39.9519 8.15181 39.5999 9.13476 38.9172 9.85213C38.2338 10.5703 37.2523 10.9899 36.01 10.9922C35.5079 11.0257 35.0046 10.9508 34.5298 10.7718C34.0549 10.5928 33.618 10.3133 33.2446 9.94982C32.8712 9.58631 32.5688 9.14607 32.3553 8.6549C32.1418 8.16373 32.0213 7.63153 32.001 7.08951V7.08322C31.9862 6.45489 32.1312 5.83418 32.4204 5.28844C32.7095 4.74269 33.1317 4.29275 33.6412 3.98745C33.6854 3.96095 33.7343 3.94469 33.7847 3.93971C33.8352 3.93472 33.886 3.94112 33.934 3.95849C33.9819 3.97587 34.0261 4.00383 34.0635 4.04061C34.1009 4.07739 34.1308 4.12217 34.1512 4.17209C34.3286 4.60579 34.5771 5.00135 34.885 5.33969C35.2449 4.83289 35.411 4.17838 35.4059 3.45865C35.4001 2.6022 35.1509 1.68369 34.7327 0.901886C34.66 0.770034 34.6372 0.613097 34.669 0.463598C34.7007 0.3141 34.7846 0.183502 34.9032 0.0988709Z"
                fill="#FF0000"
              />
            </svg>
          </div>
        </SheetTitle>
      </SheetHeader>
      <div className="mt-10 nav-menus">
        <ScrollArea className="h-[80vh] border-red-600">
          <div className="classes mb-3 text-m font-bold /mt-10 flex items-center">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                  clipRule="evenodd"
                />
                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
              </svg>
            </div>
            <div> Quick Access</div>
          </div>
          {navList.map((item) => (
            <Link
              key={item.nav}
              href={item.linkPath}
              passHref
              className={`flex items-center py-3 w-full transition-all cursor-pointer text-sm font-medium px-3 rounded-xl ${
                router === item.linkPath
                  ? "text-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 font-bold"
                  : isDarkMode
                  ? "text-white/40"
                  : "text-black/80 "
              }`}
            >
              <SheetClose className="w-full">
                <div className="w-full flex items-center py-1">
                  <div className="icon mr-2">{item.icon}</div>
                  <div className="nav">{item.nav}</div>
                  {item.new && (
                    <div className=" ml-2">
                      <Image
                        alt=""
                        src="/assets/new.png"
                        width={1000}
                        height={1000}
                        className="w-8 h-8 opacity-60"
                      />
                    </div>
                  )}
                </div>
              </SheetClose>
            </Link>
          ))}
          <div className="classes mb-2 mt-5 text-m font-bold flex items-center">
            {" "}
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M16.5 7.5h-9v9h9v-9z" />
                <path
                  fillRule="evenodd"
                  d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div> User Actions</div>
          </div>
          {accountList.map((item) => (
            <Link
              key={item.nav}
              href={item.linkPath}
              passHref
              className={`flex items-center py-3 w-full transition-all cursor-pointer text-sm font-medium px-3 rounded-xl ${
                router === item.linkPath
                  ? "text-white bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 font-bold"
                  : isDarkMode
                  ? "text-white/40"
                  : "text-black/80 "
              }`}
            >
              <SheetClose className="w-full">
                <div className="w-full flex items-center py-1">
                  <div className="icon mr-2">{item.icon}</div>
                  <div className="nav">{item.nav}</div>
                  {item.new && (
                    <div className=" ml-2">
                      <Image
                        alt=""
                        src="/assets/new.png"
                        width={1000}
                        height={1000}
                        className="w-8 h-8 opacity-60"
                      />
                    </div>
                  )}
                </div>
              </SheetClose>
            </Link>
          ))}
        </ScrollArea>
      </div>
    </>
  );
}
