"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { IModel } from "@/interfaces/model.interface";
import axios from "axios";
import data from "@/../json/db.json";

export function CarouselSize() {
  
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75%] sm:w-full lg:max-w-[80rem] max-sm:max-w-sm"
    >
      <CarouselContent className="">
        {data.models.map((model: IModel, key) => (
          <CarouselItem key={model.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="sm:p-1">
              <img src={model.img_url} className="h-[150px] sm:h-[190px] object-cover" alt="" />
              <p>{model.model_name}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
