import { DetailedRoomType, ProductType } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import React from "react";
type Props = {
  params: { rooms: DetailedRoomType[] };
};

const HotelRooms = ({ rooms }: { rooms: DetailedRoomType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {rooms.map((room) => (
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
  );
};

export default HotelRooms;
