import Script from "next/script";
import Home from "../components/main/Home";
export default function HomePage() {
  return (
    <>
      <Script
        src="//code.tidio.co/jyhjmelwmkvmy0smnznzsnvuwlzose8s.js"
        async
      ></Script>
      <Home />
    </>
  );
}
