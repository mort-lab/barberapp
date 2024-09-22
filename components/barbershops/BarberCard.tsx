"use client";

import { useState, useMemo } from "react";
import { Barbershop } from "@/data/Barbershops";
import { Button } from "@/components/ui/button";
import {
  Star,
  MapPin,
  Clock,
  Scissors,
  ImageOff,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
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
  onHover: (shopId: number | null) => void;
}

export default function BarberCard({ shop, onHover }: BarberCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const images = useMemo(
    () => shop.images || [shop.imageUrl],
    [shop.images, shop.imageUrl]
  );

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
      onMouseEnter={() => onHover(shop.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div
        className="flex flex-col h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        tabIndex={0}
        role="button"
        aria-label={`View details for ${shop.name}`}
      >
        <div className="relative aspect-square w-full">
          {!imageError ? (
            <Image
              src={images[currentImageIndex]}
              alt={`${shop.name} - Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <ImageOff className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
          <button
            className="absolute top-3 right-3 text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1 bg-black bg-opacity-50"
            onClick={toggleFavorite}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`h-6 w-6 ${
                isFavorite ? "fill-white" : "stroke-white"
              }`}
            />
          </button>
          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 text-gray-600" />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 text-gray-600" />
              </button>
            </>
          )}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-current={index === currentImageIndex ? "true" : "false"}
              />
            ))}
          </div>
          <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            {shop.rating}
          </div>
        </div>
        <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold line-clamp-1">{shop.name}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="line-clamp-1">{shop.location}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center">
              <Scissors className="h-4 w-4 mr-1 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">From</span>
              <span className="text-lg font-bold text-primary ml-1">
                {shop.price} €
              </span>
            </div>
            <div className="text-sm text-muted-foreground line-clamp-1">
              Services: Haircut, Beard Trim, Styling
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="default"
                className="w-full mt-2 transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Book Your Appointment at {shop.name}</DialogTitle>
              </DialogHeader>
              <BookingForm shop={shop} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}
