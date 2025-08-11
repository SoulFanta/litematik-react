import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("/dev/id/:projectId", 'routes/page2.tsx')
] satisfies RouteConfig;
