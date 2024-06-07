"use client";
import Image from "next/image";
import { GetBookingType, HotelType } from "@/types/types";
import Delete from "./Delete";

const BookingsList = ({ bookings }: { bookings: GetBookingType[] }) => {
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
        <h3 className="h2 mb-8 ">Your Bookings</h3>
      </div>

      {/*hotel list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookings.map((book) => (
          <div key={book.id} className=" border border-black rounded-md p-1">
            <div className="h-[134px] ">
              <div className=" flex flex-col items-center justify-between mb-6 gap-2">
                <div>Check in{book.checkIn}</div>
                <div>Check out{book.checkOut}</div>
                <div>Is Confirmed {JSON.stringify(book.isConfirmed)}</div>
                <div> Room Id {book.roomId}</div>
                <Delete id={book.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingsList;
