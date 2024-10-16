import * as React from "react";
import * as Icon from "lucide-react";
import * as DropDown from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const UserNav = () => {
  const user = false;
  return (
    <DropDown.DropdownMenu>
      <DropDown.DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className=" relative h-10 w-10 rounded-full p-2 hover:ring-1 hover:ring-primary flex flex-row gap-1 items-center shadow-lg hover:bg-transparent"
        >
          <span className="sr-only">Account</span>
          <Avatar className="h-7 w-7">
            <AvatarImage src="#" alt="Avatar" />
            <AvatarFallback className="bg-transparent">HR</AvatarFallback>
          </Avatar>
        </Button>
      </DropDown.DropdownMenuTrigger>

      <DropDown.DropdownMenuContent align="end" className="gap-2 w-52">
        <DropDown.DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Haruna Rashid</p>
            <p className="text-xs leading-none text-muted-foreground break-all">
              harunarrasheeed@gmail.com
            </p>
          </div>
        </DropDown.DropdownMenuLabel>
        <DropDown.DropdownMenuSeparator />
        <DropDown.DropdownMenuItem>
          <Icon.UserIcon className="mr-1 w-4 h-4" />
          <Link href=""> Account </Link>
        </DropDown.DropdownMenuItem>
        <DropDown.DropdownMenuItem>
          <Icon.ShoppingBagIcon className="mr-1 w-4 h-4" />
          <Link href=""> Orders </Link>
        </DropDown.DropdownMenuItem>
        <DropDown.DropdownMenuItem>
          <Icon.HeartIcon className="mr-1 w-4 h-4" />
          <Link href="">Saved Items</Link>
        </DropDown.DropdownMenuItem>
        <DropDown.DropdownMenuSeparator />
        <DropDown.DropdownMenuItem>
          {user ? (
            <Link href="" className="flex items-center">
              <Icon.LogOutIcon className="mr-1 w-4 h-4" />
              <span>Sign out</span>
            </Link>
          ) : (
            <Link href="" className="flex items-center">
              <Icon.LogOutIcon className="mr-1 w-4 h-4" />
              <span>Sign in</span>
            </Link>
          )}
        </DropDown.DropdownMenuItem>
      </DropDown.DropdownMenuContent>
    </DropDown.DropdownMenu>
  );
};
