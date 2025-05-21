import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
     <div className=" relative h-screen mt-220">
      <div className="  w-full mt-50 flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<Image src="/logo.png" alt="logo" width={80} height={30} />
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer " />
							<FaTwitter className="text-2xl cursor-pointer " />
							<FaLinkedin className="text-2xl cursor-pointer" />
							<FaYoutube className="text-2xl cursor-pointer " />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Landingpage
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Features
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Documentation
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Referral Program
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Documentation
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Design
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Themes
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Illustrations
						</li>
                        <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							UI Kit
						</li>

					</ul>
				</div>
                <div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Privacy Policy
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>

					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">More</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Documentation
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							License
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Changelog
						</li>
					</ul>
				</div>
			</div>
			<div className="flex md:flex-col justify-center items-center text-center  p-10">
				<h1 className=" text-gray-800 font-semibold">
					Copyright © 2019. Crafted with love.
				</h1>
			</div>
    </div>
  )
}

export default Footer
