"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/barbershops/Header";
import SearchBar from "@/components/barbershops/SearchBar";
import BarberCard from "@/components/barbershops/BarberCard";
import Map from "@/components/barbershops/Map";
import { barbershops } from "@/data/Barbershops";
import { Button } from "@/components/ui/button";
import { MapIcon, ListIcon, ChevronUp, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  const [hoveredShopId, setHoveredShopId] = useState<number | null>(null);
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);

  const filteredShops = useMemo(() => {
    return barbershops.filter(
      (shop) =>
        shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shop.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleShopHover = (shopId: number | null) => {
    setHoveredShopId(shopId);
  };

  const togglePanel = () => {
    setIsPanelExpanded(!isPanelExpanded);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative h-[calc(100vh-64px)]">
        {/* Desktop View */}
        <div className="hidden lg:flex h-full">
          <div className="w-1/2 p-4 overflow-hidden flex flex-col">
            <h1 className="text-3xl font-bold mb-4">
              Find Your Perfect Barbershop
            </h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ScrollArea className="flex-grow mt-4">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {filteredShops.map((shop) => (
                  <BarberCard
                    key={shop.id}
                    shop={shop}
                    onHover={handleShopHover}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="w-1/2 h-full">
            <Map shops={filteredShops} hoveredShopId={hoveredShopId} />
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden h-full flex flex-col">
          <div className="p-4 space-y-2 bg-background/80 backdrop-blur-sm">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowList(!showList)}
              className="w-full flex items-center justify-center gap-2"
            >
              {showList ? (
                <>
                  <MapIcon className="w-4 h-4" /> Show Map
                </>
              ) : (
                <>
                  <ListIcon className="w-4 h-4" /> Show List
                </>
              )}
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {showList ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow overflow-hidden"
              >
                <ScrollArea className="h-full px-4">
                  <div className="grid grid-cols-1 gap-4 py-4">
                    {filteredShops.map((shop) => (
                      <BarberCard
                        key={shop.id}
                        shop={shop}
                        onHover={handleShopHover}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            ) : (
              <motion.div
                key="map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                <Map shops={filteredShops} hoveredShopId={hoveredShopId} />
              </motion.div>
            )}
          </AnimatePresence>

          {!showList && (
            <div
              className={`absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out ${
                isPanelExpanded ? "h-[70vh]" : "h-[30vh]"
              }`}
            >
              <div
                className="h-10 flex items-center justify-center cursor-pointer"
                onClick={togglePanel}
              >
                <div className="w-16 h-1 bg-gray-300 rounded-full" />
                {isPanelExpanded ? (
                  <ChevronDown className="absolute right-4 w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronUp className="absolute right-4 w-6 h-6 text-gray-500" />
                )}
              </div>
              <ScrollArea className="h-[calc(100%-40px)] px-4">
                <div className="grid grid-cols-1 gap-4 py-4">
                  {filteredShops.map((shop) => (
                    <BarberCard
                      key={shop.id}
                      shop={shop}
                      onHover={handleShopHover}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
