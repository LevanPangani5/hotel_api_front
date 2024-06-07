"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoomType, RoomTypeType } from "@/types/types";

const RoomList = ({
  rooms,
  roomTypes,
}: {
  rooms: RoomType[];
  roomTypes: RoomTypeType[];
}) => {
  const [roomType, setRoomType] = useState<number>(0);
  const [filteredrooms, setFilteredRooms] = useState<RoomType[]>([]);

  useEffect(() => {
    if (roomType == 0) {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.roomTypeId == roomType);
      setFilteredRooms(filtered);
    }
  }, [roomType, rooms]);

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
        <h3 className="h2 mb-8 ">Our Rooms</h3>
      </div>

      {/* tabs */}
      <Tabs
        defaultValue="0"
        className="w-[240px] lg:w-[540px] h-[200px] lg:h-auto mb-8 mx-auto"
      >
        <TabsList className="w-full h-full lh:h-[46px] flwx flex-col lg:flex-row">
          <TabsTrigger
            className="w-full h-full"
            value="0"
            onClick={() => setRoomType(0)}
          >
            All
          </TabsTrigger>
          {roomTypes.map((type) => (
            <TabsTrigger
              className="w-full h-full"
              value={type.id.toString()}
              key={type.id}
              onClick={() => setRoomType(type.id)}
            >
              {type.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/*room list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredrooms.map((room: RoomType) => (
          <div key={room.id}>
            <Link href={`/room/${room.id}`}>
              <div className="relative w-full h-[300px] overflow-hidden mb-6">
                <Image
                  src={`/${room.images[0].source}`}
                  alt=""
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="h-[134px] ">
              <div className="flex-col items-center justify-between mb-6">
                <div>Capacity - {room.maximumGuests} Person</div>
                <Link href={`/room/${room.id}`}>
                  <h3 className="h3">{room.name}</h3>
                </Link>
                <p className="h3 font-secondary font-medium text-accent mb-4">
                  ${room.pricePerNight}{" "}
                  <span className="text-base text-secondary">/ night</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomList;
