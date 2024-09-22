"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Check, Star, AppleIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useAuth, SignUp } from "@clerk/nextjs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Barber {
  id: number;
  name: string;
  avatar: string;
  instagram: string;
  rating: number;
  reviews: number;
  specialties: string[];
}

interface BookingFormProps {
  shop: {
    id: number;
    name: string;
    price: number;
  };
}

export default function BookingForm({ shop }: BookingFormProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { isSignedIn } = useAuth();

  const barbers: Barber[] = [
    {
      id: 1,
      name: "John",
      avatar: "/placeholder.svg?height=200&width=200",
      instagram: "@john_barber",
      rating: 4.8,
      reviews: 120,
      specialties: ["Classic Cuts", "Fades"],
    },
    {
      id: 2,
      name: "Emma",
      avatar: "/placeholder.svg?height=200&width=200",
      instagram: "@emma_stylist",
      rating: 4.9,
      reviews: 150,
      specialties: ["Color", "Styling"],
    },
    {
      id: 3,
      name: "Michael",
      avatar: "/placeholder.svg?height=200&width=200",
      instagram: "@michael_cuts",
      rating: 4.7,
      reviews: 98,
      specialties: ["Beard Trims", "Hot Towel Shaves"],
    },
    {
      id: 4,
      name: "Sophia",
      avatar: "/placeholder.svg?height=200&width=200",
      instagram: "@sophia_hair",
      rating: 4.9,
      reviews: 135,
      specialties: ["Trendy Styles", "Hair Art"],
    },
  ];

  const timeSlots = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  const isTimeSlotAvailable = (barberId: number, time: string) => {
    const barberAvailability: Record<number, string[]> = {
      1: ["9:00", "10:00", "11:00", "14:00", "15:00"],
      2: ["9:30", "10:30", "11:30", "14:30", "15:30"],
      3: ["10:00", "11:00", "12:00", "15:00", "16:00"],
      4: ["10:30", "11:30", "12:30", "15:30", "16:30"],
    };

    return barberAvailability[barberId]?.includes(time) ?? false;
  };

  const handleConfirmBooking = () => {
    if (!isSignedIn) {
      setShowSignUp(true);
      return;
    }

    const selectedBarberName = barbers.find(
      (barber) => barber.id === selectedBarber
    )?.name;
    const bookingDetails = {
      barbershop: shop.name,
      date: date?.toDateString(),
      time: selectedTime,
      barber: selectedBarberName,
      service: selectedService,
      price: shop.price,
    };
    console.log("Booking confirmed:", bookingDetails);
    setIsBookingConfirmed(true);
  };

  const handleApplePay = () => {
    console.log("Apple Pay initiated");
    handleConfirmBooking();
  };

  if (isBookingConfirmed) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="bg-green-100 rounded-full p-4 mb-4">
          <Check className="h-12 w-12 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-center text-gray-600">
          Your appointment has been successfully booked. We look forward to
          seeing you!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 py-4 max-w-4xl mx-auto">
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <SignUp afterSignOutUrl="/" />
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6">{shop.name}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <label className="text-sm font-medium mb-2 block">Select Date</label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border p-4"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">
            Select Barber
          </label>
          <div className="grid grid-cols-2 gap-4">
            {barbers.map((barber) => (
              <TooltipProvider key={barber.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`text-center cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
                        selectedBarber === barber.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary hover:bg-primary/10"
                      }`}
                      onClick={() => setSelectedBarber(barber.id)}
                    >
                      <Avatar className="w-24 h-24 rounded-full mb-2 mx-auto overflow-hidden">
                        <AvatarImage src={barber.avatar} alt={barber.name} />
                      </Avatar>
                      <span className="text-lg font-medium block">
                        {barber.name}
                      </span>
                      <div className="flex items-center justify-center mt-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{barber.rating}</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="p-2">
                      <p className="font-semibold">{barber.name}</p>
                      <p className="text-sm">{barber.instagram}</p>
                      <p className="text-sm">{barber.reviews} reviews</p>
                      <p className="text-sm mt-1">Specialties:</p>
                      <ul className="list-disc list-inside text-sm">
                        {barber.specialties.map((specialty, index) => (
                          <li key={index}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>

      {selectedBarber && (
        <div>
          <label className="text-sm font-medium mb-2 block">
            Available Time Slots
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {timeSlots.map((time) => {
              const isAvailable = isTimeSlotAvailable(selectedBarber, time);
              return (
                <Button
                  key={time}
                  variant={
                    selectedTime === time
                      ? "default"
                      : isAvailable
                      ? "outline"
                      : "ghost"
                  }
                  className={`${
                    isAvailable
                      ? "hover:bg-primary hover:text-primary-foreground"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!isAvailable}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <label className="text-sm font-medium mb-2 block">Select Service</label>
        <Select onValueChange={setSelectedService}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="haircut">Haircut - {shop.price} €</SelectItem>
            <SelectItem value="beard">
              Beard Trim - {Math.round(shop.price * 0.6)} €
            </SelectItem>
            <SelectItem value="combo">
              Haircut & Beard - {Math.round(shop.price * 1.4)} €
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        className="w-full bg-black text-white hover:bg-gray-800"
        disabled={!selectedBarber || !selectedTime || !selectedService}
        onClick={handleApplePay}
      >
        <AppleIcon className="mr-2 h-4 w-4" /> Pay with Apple Pay
      </Button>

      <Button
        className="w-full"
        disabled={!selectedBarber || !selectedTime || !selectedService}
        onClick={handleConfirmBooking}
      >
        Confirm Booking (Pay in Person)
      </Button>
    </div>
  );
}
