// components/home/SearchBar.tsx
import { Input } from "@/components/ui/input";
import { MapPin, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FilterPopover from "./FilterPopover";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
      <div className="relative flex-grow w-full md:w-auto">
        <Input
          type="text"
          placeholder="Find barbershops in San Sebastian"
          className="pl-10 pr-4 py-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <FilterPopover />
        </PopoverContent>
      </Popover>
      <Button size="lg" className="w-full md:w-auto">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </div>
  );
}
