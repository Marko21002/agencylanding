import { Accordion } from '@base-ui-components/react/accordion'
import * as React from 'react'

function PlusIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  )
}

export default function Faq() {
  return (
    <div className="flex flex-col items-center gap-8 pt-24 pb-8 px-4 bg-background">
      <h1 className="text-xl text-center font-bold leading-tight text-neutral-12">
        Frequently Asked Questions
      </h1>
      <Accordion.Root className="w-full space-y-4">
        <Accordion.Item className="border-b border-neutral-6 group" value="1">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-5 text-left font-semibold text-base text-neutral-12">
              How long does it take to build a website?
              <PlusIcon className="w-5 h-5 text-accent-9 transition-transform duration-200 group-data-[open]:rotate-45 flex-shrink-0" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <div className="py-4 text-base text-neutral-11 leading-relaxed">
              Most websites take 2-6 weeks depending on complexity. We work
              quickly but never sacrifice quality. We'll give you a specific
              timeline during our discovery call.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="border-b border-neutral-6 group" value="2">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-5 text-left font-semibold text-base text-neutral-12">
              Do you provide ongoing maintenance?
              <PlusIcon className="w-5 h-5 text-accent-9 transition-transform duration-200 group-data-[open]:rotate-45 flex-shrink-0" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <div className="py-4 text-base text-neutral-11 leading-relaxed">
              Yes! We offer flexible maintenance packages to keep your website
              updated, secure, and performing well. We can also handle content
              updates and technical support.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="border-b border-neutral-6 group" value="3">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-5 text-left font-semibold text-base text-neutral-12">
              Can you work with my existing brand?
              <PlusIcon className="w-5 h-5 text-accent-9 transition-transform duration-200 group-data-[open]:rotate-45 flex-shrink-0" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <div className="py-4 text-base text-neutral-11 leading-relaxed">
              Absolutely! We love working with established brands. If you have
              brand guidelines, colors, or logos, we'll incorporate them
              perfectly into your new website design.
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
