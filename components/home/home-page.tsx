import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { SearchForm } from "@/components/shared/search-form";
import { SideSheet } from "@/components/shared/sheet";
import { NavMenu } from "@/components/layout/nav-menu";

export const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="bg-[#004e6e] text-white font-medium text-sm overflow-hidden">
        <p className="animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
          🎉Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.🎊Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.🎊
        </p>
      </div>
      <header className="sticky top-0 h-fit items-center border-b w-full p-1 py-auto">
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
    </div>
  );
};
