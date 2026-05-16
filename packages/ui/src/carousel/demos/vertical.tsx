import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "lynote-ui/carousel";

const App: React.FC = () => {
  return (
    <Carousel
      orientation="vertical"
      opts={{ align: "start" }}
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[260px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="bg-muted flex h-32 items-center justify-center rounded-md border">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default App;
