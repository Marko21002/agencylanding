export default function Services() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24 px-4">
      <h1 className="text-2xl text-center font-bold text-neutral-12">
        Services we provide for our clients
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full h-[200px] border gap-2 border-neutral-6 bg-accent-1 flex flex-col py-6 items-center text-center px-4 rounded-lg">
          <div className="w-12 h-12 bg-accent-9 rounded-full"></div>
          <h2 className="text-xl font-bold text-neutral-12">Website Design</h2>
          <p className="text-sm text-neutral-11">
            We design beautiful websites that are easy to use and convert
            visitors into customers.
          </p>
        </div>
        <div className="w-full h-[200px] border gap-2 border-neutral-6 bg-accent-1 flex flex-col py-6 items-center text-center px-4 rounded-lg">
          <div className="w-12 h-12 bg-accent-9 rounded-full"></div>
          <h2 className="text-xl font-bold text-neutral-12">Development</h2>
          <p className="text-sm text-neutral-11">
            Custom web applications built with modern technologies for optimal
            performance and scalability.
          </p>
        </div>

        <div className="w-full h-[200px] border gap-2 border-neutral-6 bg-accent-1 flex flex-col py-6 items-center text-center px-4 rounded-lg">
          <div className="w-12 h-12 bg-accent-9 rounded-full"></div>
          <h2 className="text-xl font-bold text-neutral-12">
            SEO Optimization
          </h2>
          <p className="text-sm text-neutral-11">
            Strategic search engine optimization to increase visibility and
            drive qualified traffic to your site.
          </p>
        </div>
      </div>
    </div>
  )
}
