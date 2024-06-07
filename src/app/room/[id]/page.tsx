import {
  DetailedRoomType,
  HotelType,
  RoomType,
  RoomTypeType,
} from "@/types/types";
import Image from "next/image";
import { TbArrowsMaximize, TbUsers } from "react-icons/tb";
type Props = {
  params: { id: number };
};

const getRoom = async (id: number) => {
  const res = await fetch(`${process.env.API_HOST}/Room/GetRoom/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const RoomDetails = async ({ params }: Props) => {
  const room: DetailedRoomType = await getRoom(params.id);
  console.log("gggg", room);
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:gap-12 h-full">
          {/*image * text*/}
          <div className="flex-1">
            {/*image*/}
            <div className="relative h-[360px] lg:h-[420px] mb-8">
              <Image
                src={`/${room.images[0].source}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col mb-8">
              {/*title& price*/}
              <div className="flex justify-between items-center mb-4">
                <h3 className="h3">{room.name}</h3>
                <p className="h3 font-secondary font-medium text-accent ">
                  ${room.pricePerNight}
                  <span className="text-base font-secondary">/ night</span>
                </p>
              </div>
              {/*info */}
              <div className="flex items-center gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <TbArrowsMaximize />
                  </div>
                  <p>{room.roomType.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <TbUsers />
                  </div>
                  <p>{room.maximumGuests} Guests</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum impedit ex suscipit sed consequuntur non, velit
                expedita soluta quaerat possimus cum mollitia.
              </p>
            </div>
          </div>

          {/*reservation */}
          <div className="w-full lg:max-w-[360px] h-max bg-green-300">
            reservation
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
