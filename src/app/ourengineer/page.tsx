"use client";
import { IModel } from '@/interfaces/model.interface';
import axios from 'axios';
import { log } from 'console';
import { Card, Dropdown, DropdownItem } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const [users, setUsers] = useState<any>([]);
    useEffect(() => {
        const fetch = async () => {
          const res = (await axios.get("https://randomuser.me/api/?results=9")).data.results;
          console.log(res);
          setUsers(res);
        };
        fetch();
      }, []);

  return <>
  <p className='pt-10 text-2xl font-semibold'>Meet Our Engineer</p>
    <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-5 max-w-xl py-10">
        {users?.map((user:any, key:any) => (
          <Card className="max-w-md">
          <div className="flex flex-col items-center pb-10">
              <img src={user.picture.large} className='mb-3 rounded-full shadow-lg w-[96px] h-[96px]' alt="" />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name.first}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Hyundai Engineer</span>
          </div>
          </Card>
        ))}
        
    </div>
    
    </>

}