import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import useListings, { type Listing } from "~/hooks/useListings";
import Card from "~/components/ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faHouse,
  faMapPin,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

export default function Properties() {
  const { listings, isLoading } = useListings();

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar isTransparent={false} />
        <main className="max-w-[1400px] mx-auto py-12">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 px-4">
            {isLoading ? (
              <p>Loading</p>
            ) : listings.length > 0 ? (
              listings.map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))
            ) : (
              <p className="text-gray-500">No listings found.</p>
            )}
          </div>
        </main>
        <Footer width="max-w-4xl" px="px-4" />
      </div>
    </>
  );
}

function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <Card padding={0}>
      <img
        src={listing.picture ?? "https://placehold.co/600x400?text=DigiHome"}
        alt={listing.title}
        className="w-full aspect-[3/4] object-cover rounded-t-lg"
      />
      <div className="bg-neutral p-6 min-h-[310px] flex flex-col gap-4">
        <span>
          <h2 className="text-2xl font-bold text-black">{listing.title}</h2>
          <p>{listing.address}</p>
        </span>
        {/* <p className="text-black leading-relaxed">
          {listing.public_description}
        </p> */}
        <ul className="mt-auto">
          <li>
            <FontAwesomeIcon icon={faMapPin} /> {listing.city}, {listing.zip}
          </li>
          <li>
            <FontAwesomeIcon icon={faPerson} /> {listing.accommodates} Guests
          </li>
          <li>
            <FontAwesomeIcon icon={faBed} /> {listing.bedrooms} Bedrooms
          </li>
          <li>
            <FontAwesomeIcon icon={faBath} /> {listing.bathrooms} Bathrooms
          </li>
          <li>
            <FontAwesomeIcon icon={faHouse} /> {listing.areaSquareMeters} m²
          </li>
        </ul>
      </div>
    </Card>
  );
}
