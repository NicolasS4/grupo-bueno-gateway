import { createEventHandler } from "@tanstack/react-start/server";

export default createEventHandler({
  getRouter: () => import("../src/router").then((m) => m.getRouter()),
});