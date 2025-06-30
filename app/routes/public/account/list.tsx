import type {User} from "~/models";
import axios from "~/lib/axios";
import type {Route} from "./+types/page";
import React from "react";
import Thumbnail from "~/components/public/thumbnail";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"

export async function loader({params}: Route.LoaderArgs) {
  const response = await axios.get<User>(`/${params.account}?with=products,services`);
  const user = response.data;

  return {user};
}

export default function Page({loaderData}: Route.ComponentProps) {
  return (
    <>

    </>
  );
}
