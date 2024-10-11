import * as React from "react";
import * as Icon from "lucide-react";
import * as Nav from "@/components/ui/navigation-menu";
import * as Tooltip from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FcCurrencyExchange } from "react-icons/fc";
import { UserNav } from "@/components/layout/user-nav";

export const NavMenu = () => {
  return (
    <Nav.NavigationMenu>
      <Nav.NavigationMenuList className="xss:ml-2 xss:-space-x-0 gap-2">
        <Nav.NavigationMenuItem className="hidden sm:block">
          <Button
            variant="ghost"
            className="flex flex-row  hover:ring-1 hover:ring-primary"
            asChild
          >
            <div className="flex flex-col items-center">
              <span className="text-xs">Delivery To</span>
              <h6 className="flex flex-row items-center font-bold w-fit">
                <Icon.MapPinHouseIcon size="15" />
                Kagini
              </h6>
            </div>
          </Button>
        </Nav.NavigationMenuItem>
        <Nav.NavigationMenuItem className="hidden xss:block ">
          <Tooltip.TooltipProvider>
            <Tooltip.Tooltip delayDuration={100}>
              <Tooltip.TooltipTrigger>
                <Button
                  size="icon"
                  className=" hover:ring-1 hover:ring-primary"
                  variant="ghost"
                  asChild
                >
                  <FcCurrencyExchange size="30" />
                </Button>
              </Tooltip.TooltipTrigger>
              <Tooltip.TooltipContent>Change Currency</Tooltip.TooltipContent>
            </Tooltip.Tooltip>
          </Tooltip.TooltipProvider>
        </Nav.NavigationMenuItem>
        <Nav.NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <Nav.NavigationMenuLink
              className={`${Nav.navigationMenuTriggerStyle()} hover:ring-1 hover:ring-primary gap-1 bg-transparent`}
            >
              <Icon.ShoppingCartIcon className="relative w-7 h-7" />
              <Badge className="absolute top-1 right-[59px] sm:right-[93px] flex items-center justify-center font-extrabold rounded-full p-1.5 w-3 h-3 text-[7px]">
                84
              </Badge>
              <span className="hidden sm:block">Cart</span>
            </Nav.NavigationMenuLink>
          </Link>
        </Nav.NavigationMenuItem>
        <Nav.NavigationMenuItem>
          <UserNav />
        </Nav.NavigationMenuItem>
      </Nav.NavigationMenuList>
    </Nav.NavigationMenu>
  );
};
