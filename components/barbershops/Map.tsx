"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Crosshair } from "lucide-react";
import BookingForm from "./BookingForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTheme } from "next-themes";

interface Shop {
  id: number;
  name: string;
  price: number;
  lat: number;
  lng: number;
  location: string;
}

interface MapProps {
  shops: Shop[];
}

const lightMapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#e9e9e9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

const darkMapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#1f2937" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3f4f6" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#374151" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#4b5563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#1e3a8a" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#93c5fd" }],
  },
];

export default function Map({ shops }: MapProps) {
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [zoom, setZoom] = useState(13);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const mapCenter = useMemo(() => ({ lat: 43.3183, lng: -1.9812 }), []);
  const { theme, systemTheme } = useTheme();

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  const currentTheme = theme === "system" ? systemTheme : theme;
  const mapStyles = currentTheme === "dark" ? darkMapStyles : lightMapStyles;

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      scrollwheel: true,
      styles: mapStyles,
    }),
    [mapStyles]
  );

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapRef(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMapRef(null);
  }, []);

  const fitBounds = useCallback(() => {
    if (mapRef && shops.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      shops.forEach((shop) => {
        bounds.extend({ lat: shop.lat, lng: shop.lng });
      });
      mapRef.fitBounds(bounds);
    }
  }, [mapRef, shops]);

  const handleMarkerClick = useCallback(
    (shop: Shop) => {
      setSelectedShop(shop);
      setIsBookingModalOpen(true);
      if (mapRef) {
        mapRef.panTo({ lat: shop.lat, lng: shop.lng });
        setZoom(15);
      }
    },
    [mapRef]
  );

  const handleZoomChanged = useCallback(() => {
    if (mapRef) {
      setZoom(mapRef.getZoom() || 13);
    }
  }, [mapRef]);

  useEffect(() => {
    if (mapRef) {
      mapRef.setOptions({ styles: mapStyles });
    }
  }, [mapRef, mapStyles]);

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Error loading maps
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading maps...
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div className="absolute top-2 left-2 z-10 flex flex-col space-y-2">
        <Button
          onClick={() => setZoom((prev) => Math.min(prev + 1, 20))}
          size="icon"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          onClick={() => setZoom((prev) => Math.max(prev - 1, 1))}
          size="icon"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button onClick={fitBounds} size="icon" aria-label="Fit to bounds">
          <Crosshair className="h-4 w-4" />
        </Button>
      </div>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={mapCenter}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
        onZoomChanged={handleZoomChanged}
      >
        {shops.map((shop) => (
          <OverlayView
            key={shop.id}
            position={{ lat: shop.lat, lng: shop.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              className={`${
                currentTheme === "dark"
                  ? "bg-white text-black"
                  : "bg-primary text-primary-foreground"
              } w-12 h-8 flex items-center justify-center rounded-full shadow-md cursor-pointer transform transition-transform hover:scale-105 text-sm font-semibold`}
              onClick={() => handleMarkerClick(shop)}
            >
              €{shop.price}
            </div>
          </OverlayView>
        ))}
      </GoogleMap>
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedShop?.name}</DialogTitle>
          </DialogHeader>
          {selectedShop && <BookingForm shop={selectedShop} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
