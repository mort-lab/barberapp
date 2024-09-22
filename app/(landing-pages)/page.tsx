"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/barbershops/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, MapPin, Search, Users } from "lucide-react";
import Image from "next/image";

const categories = [
  { name: "Haircuts", icon: "/icons/scissors.svg" },
  { name: "Beard Trims", icon: "/icons/beard.svg" },
  { name: "Shaves", icon: "/icons/razor.svg" },
  { name: "Coloring", icon: "/icons/hair-dye.svg" },
  { name: "Styling", icon: "/icons/comb.svg" },
  { name: "Kids Cuts", icon: "/icons/kid.svg" },
  { name: "Luxury", icon: "/icons/luxury.svg" },
  { name: "Quick Service", icon: "/icons/clock.svg" },
];

const featuredBarbers = [
  {
    name: "Classic Cuts Barbershop",
    image: "/placeholder.svg?height=300&width=400",
    location: "New York, NY",
    rating: 4.9,
    price: 30,
  },
  {
    name: "Gentleman's Grooming Lounge",
    image: "/placeholder.svg?height=300&width=400",
    location: "Los Angeles, CA",
    rating: 4.8,
    price: 35,
  },
  {
    name: "The Dapper Den",
    image: "/placeholder.svg?height=300&width=400",
    location: "Chicago, IL",
    rating: 4.7,
    price: 28,
  },
  {
    name: "Razor's Edge",
    image: "/placeholder.svg?height=300&width=400",
    location: "Miami, FL",
    rating: 4.9,
    price: 40,
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [people, setPeople] = useState("1 person");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/search?location=${encodeURIComponent(
        location
      )}&date=${date?.toISOString()}&people=${encodeURIComponent(people)}`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Barbershop
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover top-rated barbers in your area
          </p>

          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center space-x-4 bg-background shadow-lg rounded-full p-2 max-w-4xl mx-auto"
          >
            <div className="flex items-center flex-1 min-w-0">
              <MapPin className="h-5 w-5 text-muted-foreground ml-3" />
              <Input
                type="text"
                placeholder="Where are you looking?"
                className="border-0 focus-visible:ring-0"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                aria-label="Location"
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[280px] justify-start text-left font-normal"
                  aria-label="Select date"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>{date ? date.toDateString() : "Pick a date"}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => setDate(newDate)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-muted-foreground mr-2" />
              <select
                className="bg-transparent border-0 focus:ring-0"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                aria-label="Number of people"
              >
                <option>1 person</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4+ people</option>
              </select>
            </div>
            <Button type="submit" size="icon" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Browse by category</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-2">
                  <Image
                    src={category.icon}
                    alt={`${category.name} icon`}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-sm">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Barbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBarbers.map((barber) => (
              <div
                key={barber.name}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={barber.image}
                  alt={`${barber.name} barbershop`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{barber.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {barber.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      ⭐ {barber.rating}
                    </span>
                    <span className="text-sm font-bold">
                      From ${barber.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
