import { useQuery } from "@tanstack/react-query";

// const supabase = getSupabaseClient();
// const baseQuery = supabase.from("properties_public").select("*");
// export type Listing = QueryData<typeof baseQuery>[0];

// async function fetchListings(): Promise<Listing[]> {
//   const supabase = getSupabaseClient();

//   const { data, error } = await supabase
//     .from("properties_public")
//     .select("*")
//     .eq("active", true);

//   if (error) {
//     throw error;
//   }

//   return data || [];
// }

export type Listing = {
  id: string;
  title: string | null;
  public_description?: string | null;
  address?: string | null;
  zip?: string | null;
  city?: string | null;
  accommodates?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  picture?: string | null;
  areaSquareMeters?: number | null;
  latLng?: [number, number] | null;
};

const staticListings: Listing[] = [
  {
    id: "ovregaten-15-201",
    title: "Øvregaten 15, 201",
    address: "Øvregaten 15",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 5,
    bathrooms: null,
    picture:
      "https://images.finncdn.no/dynamic/1600w_webp/2025/10/vertical-2/23/3/433/529/553_1e55ba92-685b-4f5f-a1a8-9b2e7acc704c.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "ovregaten-15-301",
    title: "Øvregaten 15, 301",
    address: "Øvregaten 15",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 3,
    bathrooms: null,
    picture:
      "https://images.finncdn.no/dynamic/1600w_webp/2025/10/vertical-2/23/3/433/529/553_dd15979f-7dde-4fa8-8384-ff1daef42803.jpg",
    areaSquareMeters: null,
    latLng: null,
  },

  {
    id: "jonas-reins-gate-20",
    title: "Heimby Apartments - New in 2024 - Central",
    public_description:
      "Welcome to our cozy apartment in Jonas Reins gate 20. With four comfortable sleeping areas and a stylish interior, it's an ideal place for a relaxing stay. With a private entrance you can enjoy privacy and an easy entrance to the apartment.\n\n✦ Three bedrooms.\n✦ Comfortable double beds and sofa bed.\n✦ Smart TV & Chromecast functionalities.\n✦ Central location with easy access to key attractions.\n✦ Fully equipped kitchen.",
    address: "Jonas Reins gate 20",
    zip: null,
    city: "Bergen",
    accommodates: 8,
    bedrooms: 3,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/6741b31224cd550010573326/ts8s0fwbnxflzfbq-G70F7",
    areaSquareMeters: 56,
    latLng: null,
  },
  {
    id: "jonsvollsgaten-3-201",
    title: "Family-Friendly Spacious 4BR near Downtown & Ocean",
    public_description:
      "Welcome to your spacious 4BR apartment\n✦ 4 large bedrooms\n✦ Smart TV & Chromecast functionalities\n✦ Immediate access to everything Bergen has to offer\n✦ Fully equipped kitchen",
    address: "Jonsvollsgaten 3",
    zip: null,
    city: "Bergen",
    accommodates: 8,
    bedrooms: 4,
    bathrooms: 1.5,
    picture:
      "https://assets.guesty.com/image/upload/v1752864518/production/66b0d6d018386d5cc48db7eb/nu1twziii2qulhbooa0v.jpg",
    areaSquareMeters: 110,
    latLng: null,
  },
  {
    id: "jonsvollsgaten-3-301",
    title: "Spacious 4BR near Downtown & Ocean",
    public_description:
      "Welcome to your family-friendly Bergen getaway!\n✦ 4 large bedrooms\n✦ Smart TV & Chromecast functionalities\n✦ Immediate access to everything Bergen has to offer\n✦ Fully equipped kitchen",
    address: "Jonsvollsgaten 3",
    zip: null,
    city: "Bergen",
    accommodates: 8,
    bedrooms: 4,
    bathrooms: 1.5,
    picture:
      "https://assets.guesty.com/image/upload/v1752864484/production/66b0d6d018386d5cc48db7eb/v1mn4sumiemcbinypozy.jpg",
    areaSquareMeters: 110,
    latLng: null,
  },
  {
    id: "jonsvollsgaten-3-401",
    title: "3BR loft-apartment near Downtown & Ocean",
    public_description:
      "Welcome to your family-friendly Bergen getaway! This 3-bedroom loft apartment offers the perfect base for exploring the beautiful city of Bergen and enjoying quality time together. Situated near downtown and the ocean, you'll have easy access to local attractions. Enjoy comfortable living with amenities like a fully equipped kitchen, wireless internet. With four double beds, there's plenty of space for everyone to relax and unwind after a day of adventures.\n\n✦ Smart TV & Chromecast functionalities\n✦ Immediate access to everything Bergen has to offer\n✦ 3 large bedrooms\n✦ Fully equipped kitchen",
    address: "Jonsvollsgaten 3",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 3,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/v1752864218/production/66b0d6d018386d5cc48db7eb/mszvuyr4gqvdfy1dfpqe.jpg",
    areaSquareMeters: 72,
    latLng: null,
  },
  {
    id: "molloesmauet-2",
    title: "Heimby apartments | Cozy Hideaway with Private Balcony",
    public_description:
      "Welcome to Molløesmauet! \n\nThis cozy apartment, located in the charming, historic area of Molløesmauet in Bergen, features a warm atmosphere with wooden materials throughout, embodying a classic Nordic Norwegian style. Surrounded by cobbled streets, colorful wooden houses, and quaint alleyways, the apartment offers a peaceful yet central location. Guests can enjoy a private balcony, perfect for relaxing after exploring nearby attractions like the Bergen harbor, Bryggen, and Fløibanen for stunning city views. With convenient self-check-in, this apartment blends comfort with the charm of Bergen's cultural heritage.",
    address: "Molløesmauet 2",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://guesty-listing-images.s3.amazonaws.com/production/regular_1076004718361461492_1827211238.jpg",
    areaSquareMeters: 49,
    latLng: null,
  },
  {
    id: "ole-vigs-gate-11",
    title: "Heimby apartments - 12-Guest Capacity",
    public_description:
      "Welcome to Ole Vigs gate!\n\nA central apartment where a lot of improvements was latest done in April 2025, including lighter floors and a brand new luxurious staircase.\nThe apartment has is comfortable for 10 people but it's possible to sleep up to 12 if you are willing to sleep 2 people on the 130cm sofa bed, and 1 person on the couch. \n\nKEY FACILITIES:\n✦ Grocery store just outside the apartment.\n✦ 75'' Samsung the Frame Smart TV\n✦ Immediate distance to city center\n✦ Fully equipped kitchen",
    address: "Ole Vigs gate 11",
    zip: null,
    city: "Bergen",
    accommodates: 12,
    bedrooms: 4,
    bathrooms: 2,
    picture:
      "https://guesty-listing-images.s3.amazonaws.com/production/regular_1110087955014423935_1858744054.jpg",
    areaSquareMeters: 120,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-103",
    title: "103SB10 - Economy Multi-Bed Apt",
    public_description:
      "Welcome to our economy apartment with sleeping space for up to 6 guests. It's a practical choice for groups who value a low price over luxury features. \n\nWHAT TO EXPECT?\n◦ Compact kitchen suitable for simple meals.\n◦ No dining table (please plan accordingly).\n◦ No dedicated living room (but living room facilities in the bedrooms)\n◦ Parking is first-come, first-served and not guaranteed—there may be no space available when you arrive.",
    address: "Sjøgaten 10",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://guesty-listing-images.s3.amazonaws.com/production/regular_1097758412478769495_1847178005.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-104",
    title: "104SB10 - Economy Multi-Bed Apt",
    public_description:
      "Welcome to our economy apartment with sleeping space for up to 6 guests. It's a practical choice for groups who value a low price over luxury features. \n\nWHAT TO EXPECT?\n◦ Compact kitchen suitable for simple meals.\n◦ No dining table (please plan accordingly).\n◦ No dedicated living room (but living room facilities in the bedrooms)\n◦ Parking is first-come, first-served and not guaranteed—there may be no space available when you arrive.",
    address: "Sjøgaten 10",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://guesty-listing-images.s3.amazonaws.com/production/regular_1097762397059436983_1847184167.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-105",
    title: "105SB10 - 3BR Balcony Sea View",
    public_description:
      "Welcome to Sjøgaten! \n\nThis stylish apartment in Sjøgaten offers breathtaking sea views and a charming terrace with a hammock, perfect for unwinding. Whether you're sipping a morning coffee or enjoying a sunset glass of wine, the terrace provides an ideal spot to take in the scenery. With space for up to 6 guests, it's a cozy yet spacious retreat, offering both comfort and tranquility with the beautiful backdrop of the water.\n\nLocated in a central area of Bergen,  the vibrant neighborhood offers a mix of local cafes, shops, and restaurants, making it easy to explore Bergen's rich culture and stunning surroundings.",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 8,
    bedrooms: 3,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/685a54fa6965d4003758a7ff/efnmbarjci2memsc-N2YQR",
    areaSquareMeters: 59,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-106",
    title: "106SB10 - 2BR Balcony Stay",
    public_description:
      "Welcome to Sjøgaten! \n\nThis stylish apartment in Sjøgaten offers breathtaking sea views and a charming terrace with a hammock, perfect for unwinding. Whether you're sipping a morning coffee or enjoying a sunset glass of wine, the terrace provides an ideal spot to take in the scenery. With space for up to 6 guests, it's a cozy yet spacious retreat, offering both comfort and tranquility with the beautiful backdrop of the water.\n\nLocated in a central area of Bergen,  the vibrant neighborhood offers a mix of local cafes, shops, and restaurants, making it easy to explore Bergen's rich culture and stunning surroundings.",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/67dc05f9f5e903001a10b5ec/efnmbarjci2memsc-N2YQR",
    areaSquareMeters: 60,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-107",
    title: "SB107 - Waterfront stay",
    public_description:
      "Welcome to Harbour Apartments! \n\nThis stylish apartment in Sandviksbodene offers breathtaking sea views and a charming terrace with a hammock, perfect for unwinding. Whether you're sipping a morning coffee or enjoying a sunset glass of wine, the terrace provides an ideal spot to take in the scenery. With space for up to 6 guests, it's a cozy yet spacious retreat, offering both comfort and tranquility with the beautiful backdrop of the water.\n\nThe apartment is located right next to an event venue. There may occasionally be some noise, especially during weekends or private events. We do our best to inform guests in advance but recommend bringing earplugs or similar if you're sensitive to sound.",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/v1760003446/production/66b0d6d018386d5cc48db7eb/fdzd54oigqvrjofek4nv.jpg",
    areaSquareMeters: 50,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-205",
    title: "205SB10 - 2BR Ocean View Stay",
    public_description:
      "Welcome to Sjøgaten!\n\nThis classy apartment in Sjøgaten, Bergen, offers stunning sea views through large windows and a charming French balcony. The space is bright and inviting, with elegant details that enhance its sophisticated atmosphere. Perfectly positioned to enjoy both the view and the vibrant surroundings of Bergen, this apartment provides a serene and stylish retreat.\n\nLocated in one of Bergen's historic waterfront areas, the apartment places you within walking distance of the UNESCO-listed Bryggen Wharf, known for its colorful wooden buildings and rich trading history. The city is full of charm, with cobblestone streets, cozy cafes, and cultural attractions like the Fish Market and the iconic Fløibanen funicular offering panoramic views of the city and surrounding fjords.\n\nParking is first-come, first-served and not guaranteed—there may be no space available when you arrive.",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 5,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://guesty-listing-images.s3.amazonaws.com/production/regular_993333241417569870_1750968382.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-206",
    title: "206SB10 - Magical Harbour Views",
    public_description:
      "Welcome to your luxurious stay in Sjøgaten! With two comfortable sleeping areas and a stylish interior, it's an ideal place for a relaxing stay.\n\n✦ On premises parking outside the apartment building.\n✦ Smart TV & Chromecast functionalities\n✦ Quiet location with easy access to key attractions\n✦ Fully equipped kitchen",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 4,
    bedrooms: 1,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/681e48ad317c390012cbd8cd/kwdi3gcjui1tikn5-prXXv",
    areaSquareMeters: 49,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-207",
    title: "207SB10 - Small 3BR Apartment",
    public_description:
      "Welcome to Sjøgaten!\n\nThis classy apartment in Sjøgaten, Bergen, offers stunning sea views through large windows and a charming French balcony. The space is bright and inviting, with elegant details that enhance its sophisticated atmosphere. Perfectly positioned to enjoy both the view and the vibrant surroundings of Bergen, this apartment provides a serene and stylish retreat.\n\nLocated in one of Bergen's historic waterfront areas, the apartment places you within walking distance of the UNESCO-listed Bryggen Wharf, known for its colorful wooden buildings and rich trading history. The city is full of charm, with cobblestone streets, cozy cafes, and cultural attractions like the Fish Market and the iconic Fløibanen funicular offering panoramic views of the city and surrounding fjords.",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 5,
    bedrooms: 3,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/672a3e58394486009eed631b/rirmupr3bgkfgp1x-9Jsom",
    areaSquareMeters: 49,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-208",
    title: "Heimby - Roomy Studio w Free parking",
    public_description:
      "Welcome to your luxurious stay in Sjøgaten! With two comfortable sleeping areas and a stylish interior, it's an ideal place for a relaxing stay.\n\n✦ On premises parking outside the apartment building.\n✦ Smart TV & Chromecast functionalities\n✦ Quiet location with easy access to key attractions\n✦ Fully equipped kitchen",
    address: "Sandviksbodene 9-10",
    zip: null,
    city: "Bergen",
    accommodates: 4,
    bedrooms: 0,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/682f104f14c07c00102ef294/maacbdbrhkmbppcu-HiS3N",
    areaSquareMeters: 35,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-211",
    title: "Harbour - 1BR Apartment",
    public_description:
      "Welcome to your luxurious stay in Sjøgaten! With two comfortable sleeping areas and a stylish interior, it's an ideal place for a relaxing stay.\n\n✦ On premises parking outside the apartment building.\n✦ Smart TV & Chromecast functionalities\n✦ Quiet location with easy access to key attractions\n✦ Fully equipped kitchen",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 4,
    bedrooms: 1,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/v1756101447/production/66b0d6d018386d5cc48db7eb/itkrzcomwxmytjloivte.jpg",
    areaSquareMeters: 44,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-302",
    title: "302SB10 - 3BR Seaside stay",
    public_description:
      "Welcome to your cozy stay in Sjøgaten! With three comfortable bedrooms and a stylish interior, it's an ideal place for a relaxing stay.\n\n✦ On premises parking outside the apartment building***\n✦ Smart TV & Chromecast functionalities\n✦ Quiet location with easy access to key attractions\n✦ Fully equipped kitchen",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 6,
    bedrooms: 3,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/681e0312250370001346c211/mxyalklpixeitphu-PJn5b",
    areaSquareMeters: 79,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-306",
    title: "306SB10 - 4BR Family Stay",
    public_description:
      "Welcome to your cozy stay in Sjøgaten! With four comfortable bedrooms, a sofa bed and a stylish interior, it's an ideal place for a relaxing stay.\n\n✦ On premises parking outside the apartment building*\n✦ Smart TV & Chromecast functionalities\n✦ Quiet location with easy access to key attractions\n✦ Fully equipped kitchen",
    address: "Sjøgaten 9",
    zip: null,
    city: "Bergen",
    accommodates: 10,
    bedrooms: 4,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/listing_images_s3/production/property-photos/37f5de80053f8491c94e71d50ab331d631d4988403908d96/6839c29cedaabc0012f61349/sudztnks74g9aujy-1lxsJ",
    areaSquareMeters: 99,
    latLng: null,
  },
  {
    id: "sandviksbodene-9-10-307",
    title: "307SB10 - Three Bedroom Stay",
    public_description:
      "Welcome to your stay in Harbour Apartments! With two comfortable sleeping areas and a stylish interior, it's an ideal place for a relaxing stay.\n\n✦ On premises parking outside the apartment building***\n✦ Smart TV & Chromecast functionalities\n✦ Quiet location with easy access to key attractions\n✦ Fully equipped kitchen",
    address: "Sandviksbodene 9-10",
    zip: null,
    city: "Bergen",
    accommodates: 8,
    bedrooms: 3,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/v1759170191/production/66b0d6d018386d5cc48db7eb/ceoboilulm1rrbx0k2yp.jpg",
    areaSquareMeters: 79,
    latLng: null,
  },
  {
    id: "skuteviksbodene-18-1",
    title: "L1SB18 - Central 2BR Hideaway",
    public_description:
      "Welcome to Skuteviksbodene 18! A compact yet inviting serviced apartment with two bedrooms.\n\nNote: The slanted ceiling may feel restrictive for taller guests.\n\n- Private parking available just outside the building\n- Smart TV with Chromecast support\n- Peaceful surroundings while still close to main attractions\n- Fully stocked kitchen for home-style meals",
    address: "Skuteviksbodene 18",
    zip: null,
    city: "Bergen",
    accommodates: 4,
    bedrooms: 2,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/v1757371482/production/66b0d6d018386d5cc48db7eb/yabkzbrtcvachn2nogai.jpg",
    areaSquareMeters: 50,
    latLng: null,
  },
  {
    id: "torget-15-301",
    title: "3T15 - Penthouse Esque 4BR",
    public_description: null,
    address: "Torget 15",
    zip: null,
    city: "Bergen",
    accommodates: 7,
    bedrooms: 4,
    bathrooms: 0,
    picture:
      "https://assets.guesty.com/image/upload/v1760604277/production/66b0d6d018386d5cc48db7eb/ykgyzdobrspmv77u4ncc.jpg",
    areaSquareMeters: 127,
    latLng: null,
  },

  {
    id: "bjornsons-gate-22-0",
    title: "Bjørnsons Gate 22, 0",
    address: "Bjørnsons Gate 22",
    zip: null,
    city: "Bergen",
    accommodates: 5,
    bedrooms: 5,
    bathrooms: 2,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/12/05/9c8527cd1bff41d092816586da6af46e.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "bjornsons-gate-22-1",
    title: "Bjørnsons Gate 22, 1",
    address: "Bjørnsons Gate 22",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/12/05/9c8527cd1bff41d092816586da6af46e.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "bjornsons-gate-22-2",
    title: "Bjørnsons Gate 22, 2",
    address: "Bjørnsons Gate 22",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/12/05/9c8527cd1bff41d092816586da6af46e.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "bjornsons-gate-22-3",
    title: "Bjørnsons Gate 22, 3",
    address: "Bjørnsons Gate 22",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/12/05/9c8527cd1bff41d092816586da6af46e.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "bjornsons-gate-22-4",
    title: "Bjørnsons Gate 22, 4",
    address: "Bjørnsons Gate 22",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/12/05/9c8527cd1bff41d092816586da6af46e.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "jorgen-moes-gate-7-0",
    title: "Jørgen Moes Gate 7, 0",
    address: "Jørgen Moes Gate 7",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 3,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/05/26/2f4f83d030cd4fddb080f7e4afe26e39.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "jorgen-moes-gate-7-1",
    title: "Jørgen Moes Gate 7, 1",
    address: "Jørgen Moes Gate 7",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/05/26/2f4f83d030cd4fddb080f7e4afe26e39.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "jorgen-moes-gate-7-2",
    title: "Jørgen Moes Gate 7, 2",
    address: "Jørgen Moes Gate 7",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/05/26/2f4f83d030cd4fddb080f7e4afe26e39.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "jorgen-moes-gate-7-3",
    title: "Jørgen Moes Gate 7, 3",
    address: "Jørgen Moes Gate 7",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/05/26/2f4f83d030cd4fddb080f7e4afe26e39.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "jorgen-moes-gate-7-4",
    title: "Jørgen Moes Gate 7, 4",
    address: "Jørgen Moes Gate 7",
    zip: null,
    city: "Bergen",
    accommodates: 2,
    bedrooms: 1,
    bathrooms: 1,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2025/09/03/cc425221bf9a459299b58fd46935e850.jpg",
    areaSquareMeters: 45,
    latLng: null,
  },
  {
    id: "zinken-hopps-gate-15-0",
    title: "Zinken Hopps Gate 15, 0",
    address: "Zinken Hopps Gate 15",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture: null,
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "zinken-hopps-gate-15-1",
    title: "Zinken Hopps Gate 15, 1",
    address: "Zinken Hopps Gate 15",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 5,
    bathrooms: 1,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/06/21/4f24a2b8c77140809c08e12c50ebdb77.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "zinken-hopps-gate-15-2",
    title: "Zinken Hopps Gate 15, 2",
    address: "Zinken Hopps Gate 15",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 4,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/01/27/dc6917527003451ab57264f1b651e42a.JPG",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "zinken-hopps-gate-15-3",
    title: "Zinken Hopps Gate 15, 3",
    address: "Zinken Hopps Gate 15",
    zip: null,
    city: "Bergen",
    accommodates: null,
    bedrooms: 6,
    bathrooms: null,
    picture:
      "https://hybel-production-media.s3.amazonaws.com/ad_pictures/2024/06/06/d1026f0c0a764e6aa4dfb0574b5426bd.jpg",
    areaSquareMeters: null,
    latLng: null,
  },
  {
    id: "asylsmauet-3-co-1",
    title: "AS3 - Studio in City Center",
    public_description:
      "Welcome to Asylsmauet 3!\n\nYou can't get closer to the city center! The apartment is comfortable for 3 people with two sleeping spots on the 140cm sofa bed and one single bed. Move right in as all linen, towels and essentials are included!\n\nKEY FACILITIES:\n✦ Grocery store just outside the apartment.\n✦ Smart TV\n✦ Immediate distance to city center\n✦ Fully equipped kitchen",
    address: "Asylsmauet 3",
    zip: null,
    city: "Bergen",
    accommodates: 3,
    bedrooms: 0,
    bathrooms: 1,
    picture:
      "https://assets.guesty.com/image/upload/v1750679253/production/66b0d6d018386d5cc48db7eb/spansslla2j2luyfwzwo.jpg",
    areaSquareMeters: 34,
    latLng: null,
  },
];

export default function useListings() {
  const query = useQuery({
    queryKey: ["properties"],
    queryFn: () => Promise.resolve(staticListings),
  });

  return {
    listings: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
