import Image from "next/image";
import Mode from "@tech/components/mode";

function Herosection() {
  return (
    <div className="md:flex container p-8 md:px-16">
      <div className="md:py-24 py-8 w-full  max-w-xl shrink-0">
        <div className="text-2xl sm:text-4xl md:text-5xl font-bold md:tracking-wide max-w-xl font-title pr-10">
          <p>Yarsa Tech is building</p>
          <p>
            <span className="text-custom-blue dark:text-blue-600">
              awesome consumer
            </span>
            <br />
            products in Pokhara.
          </p>
        </div>
        <div className="mt-5 md:text-xl mb-4">
          <p>We are an electronics company focusing on </p>{" "}
          <p>ideation, prototyping, testing and production</p> of consumer grade
          electronics in Nepal.
        </div>
        <button className="rounded-xl text-white text-base bg-custom-blue py-3 px-5 tracking-wider mt-5 md:mt-10">
          Learn more
        </button>
      </div>
      <div className="py-4 hidden lg:block md:ml-20 max-w-lg">
        <Image
          loading="eager"
          width={800}
          height={800}
          className="h-full w-full object-contain"
          src="/assets/wallpaper.webp"
          alt="this is audio QR"
        />
      </div>
    </div>
  );
}

export default Herosection;
