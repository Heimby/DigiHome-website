import { type RouteConfig, index, route } from "@react-router/dev/routes";

const RouteNames = {
  home: "home",
  about: "about",
  checkin: "checkin",
  listings: "listings",
};

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx", {
    id: RouteNames.about,
  }),
  route("/checkin", "routes/checkin.tsx", {
    id: RouteNames.checkin,
  }),
  route("/listings", "routes/listings.tsx", {
    id: RouteNames.listings,
  }),
] satisfies RouteConfig;

export { RouteNames };
