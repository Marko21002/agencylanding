import { CancelCircleHalfDotIcon } from './icons'

export default function Feature() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24 px-4">
      <div className="flex flex-col gap-12">
        <h1 className="text-2xl text-center font-bold text-neutral-12">
          A Bad Website Costs You Sales. Every Single Day
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div className="text-accent-9">
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold text-neutral-12">
              Too slow? Visitors leave
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-accent-9">
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold text-neutral-12">
              Outdated look? Hurts trust
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-accent-9">
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold text-neutral-12">
              Hard to use? Customers quit.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-accent-9">
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold text-neutral-12">
              Not mobile-friendly? You lose leads
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-accent-9">
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold text-neutral-12">
              Doesn't convert? Wasted traffic
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-4 border border-neutral-6 bg-accent-1 rounded-md flex flex-col gap-6">
          <div className="text-md font-bold text-center text-neutral-12">
            We build websites that work for you — fast, modern, and built to win
            more customers.
          </div>
          <button className="bg-accent-9 text-accent-contrast hover:bg-accent-10 px-4 py-2 rounded-md">
            Get a free website audit
          </button>
        </div>
      </div>
    </div>
  )
}
