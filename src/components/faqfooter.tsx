"use client";

import Link from "next/link";

import { Disclosure } from "@headlessui/react";
import { JSX, SVGProps } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Swipe?",
    answer:
      "Swipe is an online marketplace that empowers students and aspiring entrepreneurs to set up their own online stores. By targeting a campus audience, Swipe provides a platform for students to sell their products and build their entrepreneurial journey. Swipe takes care of transactions and store hosting, allowing you to manage your business from anywhere, even your mobile device.",
  },
  {
    id: 2,
    question: "How does Swipe work?",
    answer:
      "Swipe works as a two-sided marketplace. On one hand, you can browse a wide range of products from various categories and make purchases directly from sellers. On the other hand, you can set up your own business for free and start selling your products through a simple process.",
  },
  {
    id: 3,
    question: "How to join Swipe?",
    answer:
      "Joining Swipe is completely free! Simply register for an account and start browsing the vast selection of products across different categories. If you have something to sell, you can easily add your business and begin selling your products in no time.",
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
          If you have any questions or need help, feel free to contact us. Our
          team will be more than happy to assist you.
        </p>

        <div className="mt-10">
          <Link
            href="mailto:kulubiidris@gmail.com"
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
