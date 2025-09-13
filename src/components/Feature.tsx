import { CancelCircleHalfDotIcon } from './icons'

export default function Feature() {
  return (
    <div className="flex flex-col items-center gap-12 pt-24  px-4">
      <div className="flex flex-col gap-12">
        <h1 className="text-2xl text-center font-bold">
          A Bad Website Costs You Sales. Every Single Day
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <div>
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold">Too slow? Visitors leave</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold">Outdated look? Hurts trust</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold">
              Hard to use? Customers quit.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold">
              Not mobile-friendly? You lose leads
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CancelCircleHalfDotIcon className="w-8 h-8" />
            </div>
            <div className="text-md font-bold">
              Doesn’t convert? Wasted traffic
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-4 border border-gray-500 rounded-md flex flex-col gap-6">
          <div className="text-md font-bold text-center">
            We build websites that work for you — fast, modern, and built to win
            more customers.
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Get a free website audit
          </button>
        </div>
      </div>
    </div>
  )
}
