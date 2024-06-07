import { HotelType, RoomType, RoomTypeType } from "@/types/types";
import RoomList from "./RoomList";
import HotelList from "./HotelList";

const getHotels = async () => {
  const res = await fetch(`${process.env.API_HOST}/Hotel/GetAll`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const getCities = async () => {
  const res = await fetch(`${process.env.API_HOST}/Hotel/GetCities`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const Rooms = async () => {
  const hotels: HotelType[] = await getHotels();
  const cities: string[] = await getCities();

  console.log(hotels);
  return (
    <section className="container mx-auto">
      <HotelList hotels={hotels} cities={cities} />
    </section>
  );
};

export default Rooms;
