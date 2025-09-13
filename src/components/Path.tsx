export default function Path() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24 px-4">
      <h1 className="text-2xl text-center font-bold">
        A clear path from idea to launch
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
            1
          </div>
          <div className="text-lg font-bold">Discovery</div>
          <div className="text-sm text-center">
            We start with a quick call to learn about your business, your goals,
            and what your website needs to achieve.
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
            2
          </div>
          <div className="text-lg font-bold">Design</div>
          <div className="text-sm text-center">
            Next, we craft a modern, conversion-focused design tailored to your
            brand. You’ll see how it looks before we build.
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
            3
          </div>
          <div className="text-lg font-bold">Development</div>
          <div className="text-sm text-center">
            We turn the design into a fast, responsive, SEO-friendly website
            that works on any device.
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-gray-500 rounded-full text-white flex items-center justify-center">
            4
          </div>
          <div className="text-lg font-bold">Launch & Support</div>
          <div className="text-sm text-center">
            Once live, we make sure everything runs smoothly — and we’re here
            for ongoing updates and support
          </div>
        </div>
      </div>
    </div>
  )
}
