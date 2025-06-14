"use client"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "/landing/image-1.jpg",
  "/landing/image-2.jpg",
  "/landing/image-3.jpg",
  "/landing/image-4.jpg",
]

const video = "/landing/main-video.mp4"

export default function ImageDisplay() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {/* First image takes up 2 grid cells */}
        <Card className="col-span-2 overflow-hidden">
          <CardContent className="p-0">
            <video
              src={video}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-auto object-cover aspect-[5/4]"
            />
          </CardContent>
        </Card>

        {/* Remaining images */}
        {images.map((image, index) => (
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
          <CarouselItem>
            <video
              src={video}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-auto object-cover aspect-video"
            />
          </CarouselItem>
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


