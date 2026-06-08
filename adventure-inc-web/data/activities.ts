export type Activity = {
  title: string;
  category: string;
  location: string;
  rating: string;
  difficulty: string;
  price: string;
  image: string;
  alt: string;
};

export const activities: Activity[] = [
  {
    title: "Nandi Hills Sunrise Trek",
    category: "Trekking",
    location: "Bangalore",
    rating: "4.8",
    difficulty: "Easy",
    price: "Rs 1,499",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    alt: "Sunrise over green hills"
  },
  {
    title: "Sakleshpur Forest Camping",
    category: "Camping",
    location: "Sakleshpur",
    rating: "4.7",
    difficulty: "Moderate",
    price: "Rs 2,899",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop",
    alt: "Camp tents in a forest"
  },
  {
    title: "Coorg Estate Drive",
    category: "Off-road",
    location: "Coorg",
    rating: "4.6",
    difficulty: "4 hours",
    price: "Rs 3,499",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop",
    alt: "Mountain road through wild terrain"
  },
  {
    title: "Hampta Pass Himalayan Trek",
    category: "Trekking",
    location: "Manali",
    rating: "4.9",
    difficulty: "Challenging",
    price: "Rs 9,999",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    alt: "Snowy Himalayan valley"
  },
  {
    title: "Goa Scuba Discovery Dive",
    category: "Water Sports",
    location: "Grand Island",
    rating: "4.7",
    difficulty: "Beginner",
    price: "Rs 4,499",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    alt: "Blue ocean waves near a beach"
  },
  {
    title: "Leh to Nubra Valley Ride",
    category: "Motorbike",
    location: "Ladakh",
    rating: "4.9",
    difficulty: "High altitude",
    price: "Rs 12,500",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1000&auto=format&fit=crop",
    alt: "Open mountain road with dramatic landscape"
  },
  {
    title: "Meghalaya Living Roots Trail",
    category: "Experiences",
    location: "Cherrapunji",
    rating: "4.8",
    difficulty: "Moderate",
    price: "Rs 5,999",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop",
    alt: "Green valley trail with mist"
  },
  {
    title: "Rann of Kutch Desert Camp",
    category: "Camping",
    location: "Kutch",
    rating: "4.6",
    difficulty: "Easy",
    price: "Rs 6,499",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop",
    alt: "Camp setup under trees"
  },
  {
    title: "Bir Billing Tandem Flight",
    category: "Paragliding",
    location: "Himachal Pradesh",
    rating: "4.8",
    difficulty: "25 min",
    price: "Rs 3,299",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop",
    alt: "Mountain ridge with clouds"
  }
];
