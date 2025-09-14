export default function Path() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24 px-4 bg-accent-1">
      <h1 className="text-2xl text-center font-bold text-neutral-12">
        A clear path from idea to launch
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-accent-9 rounded-full text-accent-contrast flex items-center justify-center font-bold">
            1
          </div>
          <div className="text-lg font-bold text-neutral-12">Discovery</div>
          <div className="text-sm text-center text-neutral-11 max-w-md">
            We start with a quick call to learn about your business, your goals,
            and what your website needs to achieve.
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-accent-9 rounded-full text-accent-contrast flex items-center justify-center font-bold">
            2
          </div>
          <div className="text-lg font-bold text-neutral-12">Design</div>
          <div className="text-sm text-center text-neutral-11 max-w-md">
            Next, we craft a modern, conversion-focused design tailored to your
            brand. You’ll see how it looks before we build.
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-accent-9 rounded-full text-accent-contrast flex items-center justify-center font-bold">
            3
          </div>
          <div className="text-lg font-bold text-neutral-12">Development</div>
          <div className="text-sm text-center text-neutral-11 max-w-md">
            We turn the design into a fast, responsive, SEO-friendly website
            that works on any device.
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-10 h-10 bg-accent-9 rounded-full text-accent-contrast flex items-center justify-center font-bold">
            4
          </div>
          <div className="text-lg font-bold text-neutral-12">
            Launch & Support
          </div>
          <div className="text-sm text-center text-neutral-11 max-w-md">
            Once live, we make sure everything runs smoothly — and we’re here
            for ongoing updates and support
          </div>
        </div>
      </div>
    </div>
  )
}
