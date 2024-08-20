import { asyncEmit } from "../socket";

export default async () => {
  return await asyncEmit("modules/get");
};
