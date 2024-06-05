import { $host } from "./index";

export const fetchPromotions = async () => {
  const { data } = await $host.get("api/promotions");
  return data;
};

