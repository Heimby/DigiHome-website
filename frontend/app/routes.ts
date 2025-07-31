import { type RouteConfig, index, route } from "@react-router/dev/routes";

const RouteNames = {
  home: "home",
  about: "about",
};

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx", {
    id: RouteNames.about,
  }),
] satisfies RouteConfig;

export { RouteNames };
