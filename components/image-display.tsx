"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "https://puppies-yoga.com/cdn/shop/files/08_ec8991fb-4b77-4717-9eef-c1530f550214.jpg?v=1718665274&width=600",
  "https://puppies-yoga.com/cdn/shop/files/38_1.jpg?v=1718672261&width=600",
  "https://puppies-yoga.com/cdn/shop/files/vertopal.com_13_0a164f6f-1b77-48e6-afba-6072e8d1d5aa.jpg?v=1718672261&width=600",
  "https://puppies-yoga.com/cdn/shop/files/33_1.jpg?v=1718672261&width=600",
  "https://puppies-yoga.com/cdn/shop/files/34_331ea752-021d-4d36-99e5-248d62ba73cb.jpg?v=1718672261&width=600",
]

export default function ImageDisplay() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {/* First image takes up 2 grid cells */}
        <Card className="col-span-2 overflow-hidden">
          <CardContent className="p-0">
            <img
              src={images[0] || "/placeholder.svg"}
              alt="Event main image"
              className="w-full h-auto object-cover aspect-[5/4]"
            />
          </CardContent>
        </Card>

        {/* Remaining images */}
        {images.slice(1).map((image, index) => (
          <Card key={index + 1} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={image || "/placeholder.svg"}
                alt={`Event image ${index + 2}`}
                className="w-full h-auto object-cover aspect-square"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Event image ${index + 1}`}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* We don't need custom indicators as the Carousel component has built-in navigation */}
    </div>
  )
}

