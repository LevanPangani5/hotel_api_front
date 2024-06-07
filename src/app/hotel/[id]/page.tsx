import HotelRooms from "@/components/HotelRooms";
import {
  DetailedHotelType,
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

const getHotel = async (id: number) => {
  const res = await fetch(`${process.env.API_HOST}/Hotel/GetHotel/${id}`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const HotelDetails = async ({ params }: Props) => {
  const hotel: DetailedHotelType = await getHotel(params.id);
  console.log("gggg", hotel);
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:gap-12 h-full">
          {/*image * text*/}
          <div className="flex-1">
            {/*image*/}
            <div className="relative h-[360px] lg:h-[420px] mb-8">
              <Image
                src={`/${hotel.featuredImage}`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum impedit ex suscipit sed consequuntur non, velit
              expedita soluta quaerat possimus cum mollitia.
            </p>
          </div>

          {/*reservation */}
          <div className="w-full lg:max-w-[360px] h-max bg-green-300">
            <div className="flex flex-1 flex-col mb-8">
              {/*title& price*/}
              <div className="flex justify-between items-center mb-4">
                <h3 className="h3">{hotel.name}</h3>
                <p className="h3 font-secondary font-medium text-accent ">
                  <span className="text-base font-secondary"> City - </span>
                  {hotel.city}
                </p>
              </div>
              {/*info */}
              <div className="flex items-center gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <TbArrowsMaximize />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
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
        <HotelRooms rooms={hotel.rooms} />
      </div>
    </section>
  );
};

export default HotelDetails;
