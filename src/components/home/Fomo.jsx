import BannerImg from "../../assets/benefit.png";

export default function Fomo() {
  return (
    <div className="relative w-full mx-auto  text-white px-4">
      {/* Background image */}
      {/* <div className="absolute inset-0 bg-slate-800/80 rounded-3xl px-4"> */}
      {/* This would be your background image in a real implementation */}
      <div className="absolute inset-0 h-full w-full rounded-3xl  px-4 overflow-visible">
        <img
          src={BannerImg}
          alt="."
          className="brightness-50 h-full w-full object-cover rounded-3xl "
        />
      </div>
      {/* </div> */}

      {/* Main content */}
      <div className="relative p-8 md:pt-16 pb-16 h-full w-full">
        {/* Headline */}
        <div className="mb-4 text-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold leading-tight mb-2 max-w-full text-wrap">
            Stay stuck in survival... or bloom into your next life.
          </h1>
          <p className=" text-base mt-5 md:mt-0 opacity-90">
            Without a reset, you'll keep living in cycles you were meant to
            break.
          </p>
        </div>

        {/* Four points in a 2x2 grid */}
        <div className="flex flex-row flex-wrap gap-20 justify-center md:my-30 my-12 md:px-18 px-4">
          {/* Point 1 */}
          <div className="relative max-w-md">
            <div className="absolute text-7xl font-bold opacity-40 -left-6 -top-10 text-white z-0">
              1
            </div>
            <div className="relative z-10">
              <p className="text-sm md:text-base">
                You'll miss the chance to be guided by the world's best healers.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="relative max-w-md">
            <div className="absolute text-7xl font-bold opacity-40 -left-6 -top-10 text-white z-0">
              2
            </div>
            <div className="relative z-10">
              <p className="text-sm md:text-base">
                You'll miss the energy, the clarity, the connection.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="relative max-w-md">
            <div className="absolute text-7xl font-bold opacity-40 -left-6 -top-10 text-white z-0">
              3
            </div>
            <div className="relative z-10">
              <p className="md:text-base text-sm">
                You'll keep carrying stress in your body, confusion in your
                mind, and distance in your relationships.
              </p>
            </div>
          </div>

          {/* Point 4 */}
          <div className="relative max-w-md">
            <div className="absolute text-7xl font-bold opacity-40 -left-6 -top-10 text-white z-0">
              4
            </div>
            <div className="relative z-10">
              <p className="md:text-base text-sm">
                While others reset, rise, and bloom — you'll stay where you are.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center md:mt-8 mt-4 flex justify-center">
          <div className="bg-[#E16B33] text-white w-fit font-medium py-3 px-6 rounded-md transition-colors text-sm">
            Your timeline splits here. One path is more of the same. The other
            begins at BloomLand.
          </div>
        </div>
      </div>
    </div>
  );
}
