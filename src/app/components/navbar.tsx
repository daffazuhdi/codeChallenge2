"use client"
import { Dropdown } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="navbar shadow-xl sticky top-0 z-10 bg-white">
        <div className="wrapper py-[25px] lg:mx-[200px] md:mx-[100px] sm:mx-[70px] max-[640px]:mx-[40px] flex max-w-screen-xl justify-between">
            <div className="logo ">
                <Link href="/" className='max-[640px]:hidden'><img src="https://www.hyundai.com/etc/designs/hyundai/template_en/en/images/common/ico-logo.png" alt="" /></Link>
                {/* <img className="max-[640px]:hidden" src="https://www.hyundai.com/etc/designs/hyundai/template_en/en/images/common/ico-logo.png" alt="" /> */}
                <Link href={"/"} className='min-[640px]:hidden h-[28px] w-auto'><img src="https://www.hyundai.com/etc/designs/hyundai/template_en/en/images/common/ico-logo-m.png" alt="" /></Link>
                {/* <img className="min-[640px]:hidden h-[28px] w-auto" src="https://www.hyundai.com/etc/designs/hyundai/template_en/en/images/common/ico-logo-m.png" alt="" /> */}
            </div>
            <div className="boxMid flex gap-7 items-center max-[640px]:hidden">
                {/* <a href="">Models</a> */}
                <Link href="/models"><p>Models</p></Link>
                <Link href="/aboutus"><p>About Us</p></Link>
                <Link href="/ourengineer"><p>Meet Our Engineer</p></Link>
            </div>
            <div className="boxMid flex gap-7 items-center min-[640px]:hidden">
                <Dropdown label="" dismissOnClick={false} renderTrigger={() => <span><svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 48 48"><g fill="none" stroke="#032e60" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M7.94971 11.9497H39.9497"/><path d="M7.94971 23.9497H39.9497"/><path d="M7.94971 35.9497H39.9497"/></g></svg></span>}>
                    <Dropdown.Item><Link href="/models"><p>Models</p></Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/aboutus"><p>About Us</p></Link></Dropdown.Item>
                    <Dropdown.Item><Link href="/ourengineer"><p>Meet Our Engineer</p></Link></Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    </div>
  )
}