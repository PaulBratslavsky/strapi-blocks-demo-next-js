import {
  Frame,
  Download,
  Globe,
  Sparkles,
  LayoutPanelLeft,
  Palette,
  LucideIcon,
} from "lucide-react";

import type { CardCarouselProps, CardCarouselItem } from "@/types/blocks";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function iconLookup(icon: string) {
  return {
    Frame: Frame,
    Download: Download,
    Globe: Globe,
    Sparkles: Sparkles,
    LayoutPanelLeft: LayoutPanelLeft,
    Palette: Palette,
  }[icon as keyof typeof iconLookup];
}

// Add a new component to handle icon rendering with props
function CardCarouselIcon({
  icon,
  className,
  size = 24,
}: {
  icon: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconLookup(icon) as LucideIcon;
  return Icon ? <Icon className={className} size={size} /> : null;
}

function CardCarouselItem({ heading, subHeading, icon }: CardCarouselItem) {
  console.log(icon)
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="h-full p-1">
        <Card className="h-full shadow-md">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <CardCarouselIcon
                icon={icon}
                className="text-primary"
                size={20}
              />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                {heading}
              </h4>
              <p className="text-muted-foreground">{subHeading}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}

export function CardCarousel({ cards }: CardCarouselProps) {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <Carousel
        opts={{ loop: true, align: "start" }}
        className="mt-6 w-full px-4 xl:px-0"
      >
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          {cards.map((cardData) => (
            <CardCarouselItem key={cardData.id} {...cardData} />
          ))}
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
