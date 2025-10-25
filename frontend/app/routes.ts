import { type RouteConfig, index, route } from "@react-router/dev/routes";

const RouteNames = {
  home: "home",
  about: "about",
  checkin: "checkin",
  properties: "properties",
  counseling: "counseling",
};

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx", {
    id: RouteNames.about,
  }),
  route("/checkin", "routes/checkin.tsx", {
    id: RouteNames.checkin,
  }),
  route("/properties", "routes/properties.tsx", {
    id: RouteNames.properties,
  }),
  route("/counseling", "routes/counseling.tsx", {
    id: RouteNames.counseling,
  }),
] satisfies RouteConfig;

export { RouteNames };
