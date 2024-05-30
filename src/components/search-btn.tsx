"use client";
import { useRef, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearchine, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState<string>("string");

  const search = () => {
    startTransition(() => {
      router.push(`/search?query= ${query}`);
    });
  };
  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          disabled={isSearchine}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />
        <Button
          disabled={isSearchine}
          size="sm"
          onClick={search}
          className="absolute right-0 inset-y-0 h-full rounded-l-none"
        >
          {isSearchine ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
}
