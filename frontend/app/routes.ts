import { type RouteConfig, index, route } from "@react-router/dev/routes";

const RouteNames = {
  home: "home",
  about: "about",
  checkin: "checkin",
  properties: "properties",
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
] satisfies RouteConfig;

export { RouteNames };
