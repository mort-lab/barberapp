// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/barbershops/Header";
import SearchBar from "@/components/barbershops/SearchBar";
import BarberCard from "@/components/barbershops/BarberCard";
import Pagination from "@/components/barbershops/Pagination";
import Map from "@/components/barbershops/Map";
import { barbershops } from "@/data/Barbershops";
import { Button } from "@/components/ui/button";
import { MapIcon, ListIcon } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMap, setShowMap] = useState(false);
  const [filteredShops, setFilteredShops] = useState(barbershops);
  const itemsPerPage = 6;

  useEffect(() => {
    const filtered = barbershops.filter(
      (shop) =>
        shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shop.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShops(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredShops.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredShops.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-2"
          >
            {showMap ? (
              <>
                <ListIcon className="w-4 h-4" /> Show List
              </>
            ) : (
              <>
                <MapIcon className="w-4 h-4" /> Show Map
              </>
            )}
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <AnimatePresence mode="wait">
            {!showMap && (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-1/2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentItems.map((shop) => (
                    <BarberCard key={shop.id} shop={shop} />
                  ))}
                </div>
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </motion.div>
            )}
            {showMap && (
              <motion.div
                key="map"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[calc(100vh-200px)]"
              >
                <Map shops={filteredShops} />
              </motion.div>
            )}
          </AnimatePresence>
          {!showMap && (
            <div className="w-full lg:w-1/2 h-[calc(100vh-200px)] sticky top-24">
              <Map shops={filteredShops} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
