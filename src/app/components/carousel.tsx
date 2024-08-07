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
  // const [models, setModels] = React.useState<IModel[]>([]);

  // React.useEffect(() => {
  //   const fetch = async () => {
  //     const res = await axios.get("http://localhost:2000/models");
  //     setModels(res.data);
  //   };
  //   fetch();
  // }, []); 
  
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full lg:max-w-[80rem] max-sm:max-w-sm"
    >
      <CarouselContent className="">
        {data.models.map((model: IModel, key) => (
          <CarouselItem key={model.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              {/* <Card> */}
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                  {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  <img src={model.img_url} className="h-[190px] object-cover" alt="" />
                  <p>{model.model_name}</p>
                {/* </CardContent> */}
              {/* </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
