"use client";

import { useState } from "react";
import { Barbershop } from "@/data/Barbershops";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Scissors, ImageOff } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import BookingForm from "./BookingForm";

interface BarberCardProps {
  shop: Barbershop;
}

export default function BarberCard({ shop }: BarberCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative w-full h-56">
            {!imageError ? (
              <Image
                src=""
                alt={`${shop.name} barbershop`}
                fill
                style={{ objectFit: "cover" }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <ImageOff className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              {shop.rating}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{shop.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              {shop.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Clock className="h-4 w-4 mr-1" />
              9:00 AM - 7:00 PM
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Scissors className="h-4 w-4 mr-1 text-primary" />
                <span className="text-sm font-medium">From</span>
                <span className="text-lg font-bold text-primary ml-1">
                  {shop.price} €
                </span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="default"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>
                      Book Your Appointment at {shop.name}
                    </DialogTitle>
                  </DialogHeader>
                  <BookingForm shop={shop} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="text-sm text-muted-foreground">
              Services: Haircut, Beard Trim, Styling
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
