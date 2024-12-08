import React from 'react'

interface HeadingProps {
  heading: string;
  subHeading?: string;
  text?: string;
}

export function Heading({ heading, subHeading, text }: HeadingProps) {
  return (
    <section className="container flex flex-col items-center gap-6 pt-24 pb-2 sm:gap-7">
      <div className="flex flex-col gap-3">
        {subHeading && (
          <span className="font-bold uppercase text-primary text-center">
            {subHeading}
          </span>
        )}
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          {heading}
        </h2>
      </div>
      {text && (
        <p className="text-lg text-muted-foreground max-w-2xl text-center">
          {text}
        </p>
      )}
    </section>
  );
}
