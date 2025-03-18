import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center h-screen w-screen">
      <main className="flex flex-col items-center justify-center w-full">
        <div className="text-3xl p-3 font-bold">
          <h1>Pardon our appearance - New website is under construction.</h1>
        </div>
        <Image
        className="m-5"
          src="/logo.png"
          alt="Semple Math Logo"
          width={490}
          height={142}
        />
        <div className="flex flex-col gap-5">
          <div className="text-xl">
            <p>
              Our new website will be online soon on this page.
              <br />
              Please use the contact information below if you need to get in
              touch!
            </p>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <MapPin color="var(--button-color)"/>
              <p><span className="font-bold">Semple Math Inc.</span><br/>65 South Main Street<br/>Mansfield, MA 02048</p>
            </div>
            <div className="flex gap-2">
              <Mail color="var(--button-color)"/>
              <a href="mailto:wwsemple@gmail.com">wwsemple@gmail.com</a>
            </div>
            <div className="flex gap-2">
              <Phone color="var(--button-color)"/>
              <p>(888) 868-6284</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
