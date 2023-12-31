import Link from "next/link";
import Image from "next/image";

function Contactus() {
  return (
    <div>
      <Link href="/contact" className="contact-button">
        <button className=" button bg-custom-blue text-white px-4 py-2  ">
          {" "}
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default Contactus;