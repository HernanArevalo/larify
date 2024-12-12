import type { Metadata } from "next";
import { getGuests } from "@/service";
import AdminPage from "./page";

export const metadata: Metadata = {
  title: "Admin | Larify",
};

export default async function RootLayout() {

  const guests = await getGuests()

  return (
    <AdminPage guests={guests}/>
  );
}
