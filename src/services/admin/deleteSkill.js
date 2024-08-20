import { asyncEmit } from "../socket";

export default async (id) => {
  return await asyncEmit("skills/delete", id);
};
