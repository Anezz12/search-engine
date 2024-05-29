"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />
        <Button className="absolute right-0 inset-y-0 h-full rounded-l-none">
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
