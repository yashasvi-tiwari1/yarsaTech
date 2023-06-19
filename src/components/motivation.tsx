import Link from "next/link";
import * as url from "url";

function Motivation() {
  return (
    <div className="text-center border-t md:py-16 py-8 ">
      <div className="container md:px-16">
        <div className=" font-bold md:tracking-wide text-3xl md:text-5xl  ">
          Work at Yarsa Tech
        </div>
        <div className=" md:text-xl md:tracking-wider leading-normal  p-8 mx-auto md:justify-center">
          <p className="max-w-3xl mx-auto md:mb-10 mb-6">
            We offer world-class benefits, stress-free work, great learning
            environment and sophisticated workspace. Still working under
            pressure at a job that you dislike? Try something different!
          </p>
          <Link
            href="https://www.yarsalabs.com/careers/"
            className="rounded-xl text-white text-base bg-custom-blue py-3 px-5 tracking-wider mt-5 md:mt-10"
          >
            Explore Career
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Motivation;
