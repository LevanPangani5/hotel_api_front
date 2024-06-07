export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  decode: (jwt: string) => void;
  remove: () => void;
};

export type RoomType = {
  id: number;
  name: string;
  hotelId: number;
  roomTypeId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  images: ImageType[];
};

export type ImageType = {
  id: number;
  source: string;
  roomId: string;
};

export type RoomTypeType = {
  id: number;
  name: string;
};
export type DetailedRoomType = {
  id: number;
  name: string;
  hotelId: number;
  roomTypeId: number;
  pricePerNight: number;
  available: boolean;
  maximumGuests: number;
  images: ImageType[];
  hotel: HotelType;
  roomType: RoomTypeType;
};

export type HotelType = {
  id: number;
  name: string;
  address: string;
  city: string;
  featuredImage: string;
};

export type DetailedHotelType = {
  id: number;
  name: string;
  address: string;
  city: string;
  featuredImage: string;
  rooms: DetailedRoomType[];
};

export type GetBookingType = {
  id: number;
  checkIn: string;
  checkOut: string;
  isConfirmed: boolean;
  roomId: number;
  userId: string;
};

export type UserSessionType = {
  id: string;
  userEmail: string;
  phoneNumber: string;
  isAdmin: boolean;
  roles: string[];
};
