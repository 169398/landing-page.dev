

'use client';

import Link from 'next/link';

import { Disclosure } from '@headlessui/react';
import { JSX, SVGProps } from 'react';

const faqs = [
  {
    id: 1,
    question: '#1 Your question should go in here?',
    answer:
      'Aenean diam lectus, ullamcorper ac ipsum a, convallis maximus odio. In hac habitasse platea dictumst. Donec elementum nisi ac magna gravida, at consectetur dolor tristique.',
  },
  {
    id: 2,
    question: '#2 Your question should go in here?',
    answer:
      'Aenean diam lectus, ullamcorper ac ipsum a, convallis maximus odio. In hac habitasse platea dictumst. Donec elementum nisi ac magna gravida, at consectetur dolor tristique.',
  },
  {
    id: 3,
    question: '#3 Your question should go in here?',
    answer:
      'Aenean diam lectus, ullamcorper ac ipsum a, convallis maximus odio. In hac habitasse platea dictumst. Donec elementum nisi ac magna gravida, at consectetur dolor tristique.',
  },
  {
    id: 4,
    question: '#4 Your question should go in here?',
    answer:
      'Aenean diam lectus, ullamcorper ac ipsum a, convallis maximus odio. In hac habitasse platea dictumst. Donec elementum nisi ac magna gravida, at consectetur dolor tristique.',
  },
  {
    id: 5,
    question: '#5 Your question should go in here?',
    answer:
      'Aenean diam lectus, ullamcorper ac ipsum a, convallis maximus odio. In hac habitasse platea dictumst. Donec elementum nisi ac magna gravida, at consectetur dolor tristique.',
  },
];

export default function FAQ() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl divide-y divide-neutral-900/10 dark:divide-white/30">
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-wide text-neutral-900 dark:text-neutral-50 xl:text-5xl">
              FAQs
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vestibulum id augue vitae tincidunt. Donec vel orci pretium,
              congue arcu non, semper dui. Praesent eget tempor lacus. Integer
              eu iaculis leo. Praesent ullamcorper ex sit amet lacus pharetra,
              vitae imperdiet magna bibendum.
            </p>
          </div>

          <dl className="mt-24 space-y-6 divide-y divide-neutral-900/10 dark:divide-white/30">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-neutral-900 dark:text-neutral-200">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16 px-6 text-center sm:mt-24 lg:px-8">
        <h3 className="text-2xl font-semibold leading-tight text-neutral-900 lg:text-3xl dark:text-neutral-50">
          Still have questions?
        </h3>

        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg">
          Maecenas diam purus, aliquam et gravida ut, fermentum ut est.
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>

        <div className="mt-10">
          <Link
            href="#"
            className="rounded-md bg-neutral-900 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:focus-visible:outline-neutral-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  );
}