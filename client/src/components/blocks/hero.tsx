import Link from "next/link";
import { StrapiImage } from "@/components/custom/strapi-image";
import { Button } from "@/components/ui/button";
import type { HeroProps } from "@/types/blocks";
export function Hero({
  subHeading,
  heading,
  text,
  links,
  image,
}: Readonly<HeroProps>) {
  return (
    <section className="container h-full flex flex-col items-center gap-10 pb-10 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground">
            {subHeading}
          </span>
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight lg:text-left">
          {heading}
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          {text}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {links.map((link, index) => {
            return (
              <Button
                key={index}
                size="lg"
                asChild
                variant="outline"
                className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
              >
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  prefetch
                >
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1">
        <StrapiImage
          alt={image.alternativeText}
          src={image.url}
          height={1080}
          width={1920}
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
