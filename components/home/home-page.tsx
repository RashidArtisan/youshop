import * as React from "react";
import * as Icon from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/public/images";
import Logo from "@/public/logo.png";
import { SearchForm } from "@/components/shared/search-form";
import { SideSheet } from "@/components/shared/sheet";
import { NavMenu } from "@/components/layout/nav-menu";
import { Departments } from "@/components/home/departments";
import { Advertisement } from "@/components/home/advertisement";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoToTopButton } from "../shared/goto-top-btn";

export const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="bg-[#004e6e] text-white font-medium text-sm overflow-hidden">
        <p
          className="animate-infinite-scroll whitespace-nowrap"
          aria-hidden="true"
        >
          🎉Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.🎊Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.🎊
        </p>
      </div>
      <header className="sticky z-10 top-0 h-fit items-center border-b w-full p-1 py-auto bg-[#2596be] border-[#2596be]">
        <div className="flex flex-row px-3">
          <SideSheet />
          <nav className="mr-auto size-15">
            <Link
              href="#"
              className="flex items-center justify-start -space-x-2"
            >
              <Image
                src={Logo}
                alt="logo"
                className="max-w-20 max-h-16"
                priority={true}
              />
              <span className="hidden font-bold font-mono italic xxs:block">
                YouShop
              </span>
            </Link>
          </nav>
          <div className="hidden flex-row items-center mx-auto lg:block w-full px-5 lg:px-10 xl:px-25 xxl:32">
            <SearchForm />
          </div>
          <NavMenu />
        </div>
        <div className="flex flex-row items-center mx-auto lg:hidden px-3 py-1">
          <SearchForm />
        </div>
      </header>
      <main className="min-h-[calc(100vh_-_theme(spacing.16))] bg-[#004e6e] px-10 py-3 space-y-3 ">
        <div className="grid grid-cols-6 gap-3 min-h-100">
          <div className="bg-red-200 row-span-2 col-span-1 ">
            <Departments />
          </div>
          <div className="bg-blue-200 row-span-2 col-span-4 relative">
            <Advertisement />
          </div>
          <div className="row-span-2 gap-3 flex flex-col h-full">
            <div className="bg-green-200 flex-grow py-12 px-10 space-y-10">
              <Link href="" className="block">
                Sell on YouShop
              </Link>
              <Link href="" className="block">
                Top deals
              </Link>
            </div>
            <div className="bg-red-200 flex-grow py-12 px-10 space-y-10">
              <Link href="" className="block">
                Place Order
              </Link>
              <Link href="" className="block">
                Track your order
              </Link>
            </div>
          </div>
        </div>
        {/* Flash Sales */}
        <div className="">
          <div className="flex flex-row items-center justify-between w-full bg-red-300 px-3 ">
            <h1 className="text-xl font-bold text-white p-2">Flash Sale</h1>
            <h1 className="text-xl font-bold text-white  p-2">
              Time Left: 4h:32m:37s
            </h1>
            <Link href="" className="font-bold text-white flex items-center ">
              SEE ALL <Icon.ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
          <Carousel
            opts={{
              slidesToScroll: "auto",
            }}
            className="relative group bg-white"
          >
            <CarouselContent className="ml-0 py-1.5 bg-white">
              {Images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="relative mx-[5px] bg-red-200 hover:drop-shadow-2xl transition duration-100 transform hover:scale-102 min-h-64 min-w-40 md:basis-1/4 lg:basis-1/12"
                >
                  <Link href="">
                    <div className="grid grid-rows-5 absolute inset-0 w-full h-full">
                      <div className="row-span-4 bg-blue-200 overflow-hidden">
                        <Image
                          src={item}
                          alt="products"
                          className="w-full h-full object-fill"
                          priority={true}
                        />
                      </div>
                      <div className="row-span-1 bg-green-200">
                        <p>Iphone Xr 64GB</p>
                        <p>$236.4</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Top Selling Items */}

        <div className="bg-white">
          <div className="flex flex-row items-center justify-between w-full px-3">
            <h1 className="text-xl font-bold text-black p-2">
              Top Selling Items
            </h1>
            <Link href="" className="font-bold text-black flex items-center ">
              SEE ALL <Icon.ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
          <Carousel
            opts={{
              slidesToScroll: "auto",
            }}
            className="sticky bg-white"
          >
            <CarouselContent className="ml-0 py-1.5 bg-white">
              {Images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="relative mx-[5px] bg-red-200 hover:drop-shadow-2xl transition duration-100 transform hover:scale-102 min-h-64 min-w-40 md:basis-1/4 lg:basis-1/12"
                >
                  <Link href="">
                    <div className="grid grid-rows-5 absolute inset-0 w-full h-full">
                      <div className="row-span-4 bg-blue-200 overflow-hidden">
                        <Image
                          src={item}
                          alt="products"
                          className="w-full h-full object-fill"
                          priority={true}
                        />
                      </div>
                      <div className="row-span-1 bg-green-200">
                        <p>Iphone Xr 64GB</p>
                        <p>$236.4</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Top Searched Items */}

        <div className="bg-white">
          <div className="flex flex-row items-center justify-center w-full px-3">
            <h1 className="text-xl font-bold text-black p-2">Top Searched</h1>
          </div>
          <Carousel
            opts={{
              slidesToScroll: "auto",
            }}
            className="sticky bg-white"
          >
            <CarouselContent className="ml-0 py-1.5 bg-white">
              {Images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="relative mx-[5px] bg-red-200 hover:drop-shadow-2xl transition duration-100 transform hover:scale-102 min-h-64 min-w-40 md:basis-1/4 lg:basis-1/12"
                >
                  <Link href="">
                    <div className="grid grid-rows-5 absolute inset-0 w-full h-full">
                      <div className="row-span-4 bg-blue-200 overflow-hidden">
                        <Image
                          src={item}
                          alt="products"
                          className="w-full h-full object-fill"
                          priority={true}
                        />
                      </div>
                      <div className="row-span-1 bg-green-200">
                        <p>Iphone Xr 64GB</p>
                        <p>$236.4</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Official Stores */}

        <div className="bg-white">
          <div className="flex flex-row items-center justify-center w-full px-3">
            <h1 className="text-xl font-bold text-black p-2">
              Official Stores
            </h1>
          </div>
          <Carousel
            opts={{
              slidesToScroll: "auto",
            }}
            className="sticky bg-white"
          >
            <CarouselContent className="ml-0 py-1.5 bg-white">
              {Images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="relative mx-[5px] bg-red-200 hover:drop-shadow-2xl transition duration-100 transform hover:scale-102 min-h-64 min-w-40 md:basis-1/4 lg:basis-1/12"
                >
                  <Link href="">
                    <div className="grid grid-rows-5 absolute inset-0 w-full h-full">
                      <div className="row-span-4 bg-blue-200 overflow-hidden">
                        <Image
                          src={item}
                          alt="products"
                          className="w-full h-full object-fill"
                          priority={true}
                        />
                      </div>
                      <div className="row-span-1 bg-green-200">
                        <p>Iphone Xr 64GB</p>
                        <p>$236.4</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Go-to Top Button */}
        <GoToTopButton />
      </main>
      <footer className="min-h-52 bg-[#081a21]">
        <div className="flex flex-row items-center justify-center w-full  px-3">
          <h1 className="text-lg font-bold text-white p-2">
            Copyright
            <span className="text-sm">2023</span>
            All Right Reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
};
