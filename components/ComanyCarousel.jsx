'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import companiesData from '../staticData/companies.json'
import Image from 'next/image'
const ComanyCarousel = () => {
  return (
    <div>
         <Carousel
         className="w-full py-8"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companiesData.map((company, index) => {
            return (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/6  ">
                    <Image src={company.logo} alt={company.name} width={200} height={56}/>
                </CarouselItem>
            )
        })}
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default ComanyCarousel