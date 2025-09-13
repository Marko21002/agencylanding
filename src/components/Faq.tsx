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
    <div className="flex flex-col items-center gap-8 pt-24 pb-8 px-4">
      <h1 className="text-2xl text-center font-bold">
        Frequently Asked Questions
      </h1>
      <Accordion.Root className="w-full space-y-4">
        <Accordion.Item className="border-b border-gray-300 group" value="1">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left font-semibold">
              What is Base UI?
              <PlusIcon className="w-4 h-4 transition-transform duration-200 group-data-[open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <div className="py-4 text-gray-700">
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="border-b border-gray-300 group" value="2">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left font-semibold">
              How do I get started?
              <PlusIcon className="w-4 h-4 transition-transform duration-200 group-data-[open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <div className="py-4 text-gray-700">
              Head to the “Quick start” guide in the docs. If you’ve used
              unstyled libraries before, you’ll feel at home.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="border-b border-gray-300 group" value="3">
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full py-4 text-left font-semibold">
              Can I use it for my project?
              <PlusIcon className="w-4 h-4 transition-transform duration-200 group-data-[open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>
            <div className="py-4 text-gray-700">
              Of course! Base UI is free and open source.
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
