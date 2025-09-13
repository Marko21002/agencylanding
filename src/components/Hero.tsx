export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-12  pt-18 px-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold">
          Websites Built to Grow Your Business and Drive Revenue
        </h1>
        <p className="text-center text-sm">
          Modern, conversion-focused websites that turn visitors into customers.
        </p>
        <div className="w-full">
          <button className="w-full py-3 bg-black text-white">
            Book A Free Call
          </button>
        </div>
      </div>
      <div
        className="w-full h-[300px]
       bg-gray-500"
      ></div>
    </div>
  )
}
