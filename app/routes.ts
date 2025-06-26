import {type RouteConfig} from "@react-router/dev/routes";

import authRoutes from "./routes/auth/routes";
import publicRoutes from "./routes/public/routes";
import protectedRoutes from "./routes/protected/routes";

export default [authRoutes, protectedRoutes, publicRoutes] satisfies RouteConfig;
