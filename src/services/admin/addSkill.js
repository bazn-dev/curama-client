import { asyncEmit } from "../socket";

export default async (data) => {
  return await asyncEmit("skills/add", data);
};
