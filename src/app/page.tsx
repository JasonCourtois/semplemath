import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import pageLogo from "../../public/logo.svg";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center h-screen w-screen">
      <main className="flex flex-col items-center justify-center w-full">
        <div className="md:text-3xl my-3 mx-7 font-bold">
          <h1>Pardon our appearance - New website is under construction.</h1>
        </div>
        <div className="mx-7 my-3">
          <Image
            src={pageLogo}
            alt="Semple Math Logo"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="md:text-xl mx-7">
            <p>
              Our new website will be online soon on this page.
              <br />
              Please use the contact information below if you need to get in
              touch!
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex gap-2">
                <MapPin color="var(--button-color)"/>
                <p><span className="font-bold">Semple Math Inc.</span><br/>65 South Main Street<br/>Mansfield, MA 02048</p>
              </div>
              <div className="flex gap-2">
                <Phone color="var(--button-color)"/>
                <p>(888) 868-6284</p>
              </div>
              <div className="flex gap-2">
                <Mail color="var(--button-color)"/>
                <a href="mailto:wwsemple@gmail.com">wwsemple@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
