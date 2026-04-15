import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

const questions = [
  {
    id: 'item-1',
    title: 'What is Groot UI?',
    content:
      'Groot UI is a collection of beautifully crafted UI components and templates, designed to help developers build modern web applications with ease.',
  },
  {
    id: 'item-2',
    title: 'Who can benefit from Groot UI?',
    content:
      'Groot UI is built for developers, founders, product teams, and agencies that want to accelerate idea validation and delivery without sacrificing code quality.',
  },
  {
    id: 'item-3',
    title: 'What features does Groot UI include?',
    content:
      'Groot UI offers accessible Radix primitives styled with Tailwind CSS, along with beautiful Framer Motion animations for interactivity. Everything is optimized for Next.js.',
  },
  {
    id: 'item-4',
    title: 'Can I customize components in Groot UI?',
    content:
      'Absolutely! The philosophy here is "copy and paste" so you own the code. You can easily adjust the Tailwind classes or structure to fit your exact needs.',
  },
  {
    id: 'item-5',
    title: 'Does Groot UI integrate with my existing tools?',
    content:
      'Yes, it integrates perfectly with standard React toolchains, Next.js, and any framework utilizing Tailwind CSS.',
  },
];

export function FAQ() {
  return (
    <section className="container mx-auto px-4 py-20 pb-40 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Frequently Asked <span className="bg-brand-gradient bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about Groot UI.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="bg-card dark:bg-card/50 w-full rounded-2xl border-2 border-primary/10 shadow-xl overflow-hidden"
          defaultValue="item-1"
        >
          {questions.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="relative px-6 border-b-2 border-primary/10 last:border-0"
            >
              <AccordionTrigger className="py-6 text-left text-[17px] font-semibold hover:underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-[15px] leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-center text-muted-foreground font-medium mt-8">
          Can't find what you're looking for? Contact our{' '}
          <a href="mailto:[codesubhadip95@gmail.com]" className="font-semibold bg-brand-gradient bg-clip-text text-transparent hover:underline transition-colors">
            customer support team
          </a>
        </p>
      </div>
    </section>
  );
}