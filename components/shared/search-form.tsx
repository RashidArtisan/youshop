import * as React from "react";
import * as Icon from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchForm = () => {
  return (
    <>
      <form className="relative w-full">
        <Icon.Search className="absolute left-[10px] top-3 h-3.5 w-3.5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products, brands, catergories..."
          className="pl-[30px] pr-[50px]  w-full mt-0.5"
        />
        <Button
          size="sm"
          className="absolute right-0 top-0 h-full w-fit bg-text-muted text-xs rounded-l-none mx-auto hover:bg-transparent"
        >
          <Icon.Search className="text-[#db2a47] w-4 h-4" />
        </Button>
      </form>
    </>
  );
};
