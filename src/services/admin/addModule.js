import { asyncEmit } from "../socket";

export default async (data) => {
  return await asyncEmit("modules/add", data);
};
