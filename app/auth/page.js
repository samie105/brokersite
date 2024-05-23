"use client";
import React from "react";
import { useTheme } from "../../contexts/themeContext";
import Auth from "../../components/main/AuthUi/Auth";
import { FormProvider } from "../../contexts/formContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import GoogleTranslate from "../../components/Translator/GoogleTranslator";

export default function Page() {
  const { isDarkMode, baseColor } = useTheme();
  return (
    <>
      <Script
        src="//code.tidio.co/mnccv3gt47gdfzv2zyup3gpqu1vqfacp.js"
        async
      ></Script>
      <GoogleTranslate isDarkMode={isDarkMode} />
      <FormProvider>
        <div
          className={`w-full h-screen flex justify-center items-center ${
            isDarkMode ? `${baseColor} text-white` : ""
          }`}
        >
          <Auth />
        </div>
        <Toaster />
      </FormProvider>
    </>
  );
}
