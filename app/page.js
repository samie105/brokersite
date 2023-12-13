import Script from "next/script";
import Home from "../components/main/Home";
export default function HomePage() {
  return (
    <>
      <Script
        src="//code.tidio.co/dps3dblmdrpv4ifvmxhasckkruwjlwas.js"
        async
      ></Script>
      <Home />
    </>
  );
}
