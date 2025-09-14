export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-12 pt-18 px-4 mx-2 rounded-lg bg-accent-1">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold text-neutral-12">
          Websites Built to <span className="italic">Grow Your Business</span>{' '}
          and Drive Revenue
        </h1>
        <p className="text-center text-sm text-neutral-11">
          Modern, conversion-focused websites that turn visitors into customers.
        </p>
        <div className="w-full">
          <button className="w-full py-3 bg-accent-9 text-accent-contrast hover:bg-accent-10">
            Book A Free Call
          </button>
        </div>
      </div>
      <div className="w-full h-[300px] bg-accent-2 rounded-lg"></div>
    </div>
  )
}
