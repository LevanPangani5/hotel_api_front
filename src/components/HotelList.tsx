"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HotelType } from "@/types/types";

const HotelList = ({
  hotels,
  cities,
}: {
  hotels: HotelType[];
  cities: string[];
}) => {
  const [city, setCity] = useState<string>("all");
  const [filteredHotles, setFilteredHotels] = useState<HotelType[]>([]);

  useEffect(() => {
    console.log(city);
    if (city == "all") {
      setFilteredHotels(hotels);
    } else {
      const filtered = hotels.filter((hotel) => hotel.city == city);
      setFilteredHotels(filtered);
    }
  }, [city, hotels]);

  const handleValueChange = (value: string) => {
    setCity(value);
  };
  return (
    <section className="py-16 min-h-[90vh]">
      {/*image & title */}
      <div className="flex flex-col items-center">
        {/*image */}
        <div className="relative w-[82px] h-[20px]">
          <Image
            src="/assets/heading-icon.svg"
            fill
            alt="heading"
            className="object-cover"
          />
        </div>
        {/*title */}
        <h3 className="h2 mb-8 ">Our Hotels</h3>
      </div>

      <Select onValueChange={handleValueChange}>
        <SelectTrigger
          className="w-[240px] lg:w-[540px] h-[200px] lg:h-auto mb-8 mx-auto"
          defaultValue={"all"}
        >
          <SelectValue placeholder="Select a City" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cities</SelectLabel>
            <SelectItem value="all">All</SelectItem>
            {cities.map((city, index) => (
              <SelectItem value={city} key={index}>
                {city.toUpperCase()[0] + city.slice(1, city.length)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/*hotel list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredHotles.map((hotel) => (
          <div key={hotel.id}>
            <Link href={`/hotel/${hotel.id}`}>
              <div className="relative w-full h-[300px] overflow-hidden mb-6">
                <Image
                  src={`/${hotel.featuredImage}`}
                  alt=""
                  fill
                  priority
                  className="=object-cover"
                />
              </div>
            </Link>
            <div className="h-[134px] ">
              <div className="flex-col items-center justify-between mb-6">
                <div>City - {hotel.city}</div>
                <Link href={`/hotel/${hotel.id}`}>
                  <h3 className="h3">{hotel.name}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelList;
