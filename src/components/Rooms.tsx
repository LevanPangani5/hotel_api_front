import { RoomType, RoomTypeType } from "@/types/types";
import RoomList from "./RoomList";

const getRooms = async () => {
  const res = await fetch(`${process.env.API_HOST}/Room/GetAll`, {
    next: {
      revalidate: 0,
    },
  });
  return await res.json();
};

const getRoomTypes = async () => {
  const res = await fetch(`${process.env.API_HOST}/Room/GetRoomTypes`, {
    next: {
      revalidate: 0,
    },
  });

  return await res.json();
};
const Rooms = async () => {
  const rooms: RoomType[] = await getRooms();
  const roomTypes: RoomTypeType[] = await getRoomTypes();

  return (
    <section className="container mx-auto">
      <RoomList rooms={rooms} roomTypes={roomTypes} />
    </section>
  );
};

export default Rooms;
