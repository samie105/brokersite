import Script from "next/script";
import Home from "../components/main/Home";
export default function HomePage() {
  return (
    <>
      <Script
        src="//code.tidio.co/mnccv3gt47gdfzv2zyup3gpqu1vqfacp.js"
        async
      ></Script>
      <Home />
    </>
  );
}
