import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurantName: string;
  manager: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  email,
  manager,
  phone,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post("/restaurants", {
    email,
    manager,
    phone,
    restaurantName,
  });
}
