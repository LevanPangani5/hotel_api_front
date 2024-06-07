import { GetBookingType } from "@/types/types";
import BookingsList from "./BookingsList";

const getBookings = async () => {
  const res = await fetch(`${process.env.API_HOST}/Booking`, {
    next: {
      revalidate: 0,
    },
    headers: {
      Authorization: `Bearer ${process.env.JWT_TOKEN}`,
    },
  });

  return await res.json();
};

const Bookings = async () => {
  const bookings: GetBookingType[] = await getBookings();
  console.log(bookings);
  return (
    <div className="flex flex-col items-center w-full">
      <BookingsList bookings={bookings} />
    </div>
  );
};

export default Bookings;
