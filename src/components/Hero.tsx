export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-12  pt-18 px-4 mx-2 bg-[#000E2B] text-white rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold">
          Websites Built to <span className="italic">Grow Your Business</span>{' '}
          and Drive Revenue
        </h1>
        <p className="text-center text-sm">
          Modern, conversion-focused websites that turn visitors into customers.
        </p>
        <div className="w-full">
          <button className="w-full py-3 bg-white text-black rounded-lg">
            Book A Free Call
          </button>
        </div>
      </div>
      <div
        className="w-full h-[300px]
       "
      >
        {' '}
        <img src="/laptop.png" alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
