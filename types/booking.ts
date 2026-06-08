export type BookingInput = {
  activity: string;
  date: string;
  guests: number;
  name: string;
  phone: string;
  email: string;
  addons: string[];
  requirements: string;
};

export type Booking = BookingInput & {
  id: string;
  status: "new" | "contacted" | "confirmed" | "cancelled";
  createdAt: string;
};
