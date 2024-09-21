// components/home/FilterPopover.tsx
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const services = [
  "All Services",
  "Haircut",
  "Beard Trim",
  "Styling",
  "Coloring",
];

export default function FilterPopover() {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Price Range</label>
        <div className="flex items-center space-x-2">
          <Input type="number" placeholder="Min" className="w-1/2" />
          <Input type="number" placeholder="Max" className="w-1/2" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Rating</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Any rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Services</label>
        <div className="space-y-2">
          {services.slice(1).map((service) => (
            <label key={service} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              {service}
            </label>
          ))}
        </div>
      </div>
      <Button className="w-full">Apply Filters</Button>
    </div>
  );
}
