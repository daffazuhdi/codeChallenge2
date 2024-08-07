import { Card } from "flowbite-react";
import React from "react";
import data from "@/../json/db.json";
import { IModel } from "@/interfaces/model.interface";

export default function page() {
  return (
    <div>
      <center>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 max-w-screen-xl py-[50px] content-center align-center items-center justify-items-center px-4">
          {data.models.map((model: IModel, key) => (
            <Card className="max-w-sm" key={key}>
              <img
                src={model.img_url}
                className="h-[180px] object-cover w-[auto]"
                alt=""
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {model.model_name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {model.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </Card>
          ))}
        </div>
      </center>
    </div>
  );
}
