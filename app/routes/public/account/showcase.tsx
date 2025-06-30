import type {User} from "~/models";
import axios from "~/lib/axios";
import type {Route} from "./+types/page";
import React from "react";
import Thumbnail from "~/components/public/thumbnail";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"
import {Link} from "react-router";
import {ArrowLeftCircle} from "lucide-react";

export async function loader({params}: Route.LoaderArgs) {
  const response = await axios.get<User>(`/${params.account}?with=products,services`);
  const user = response.data;

  return {user};
}

export default function Page({loaderData}: Route.ComponentProps) {
  return (
    <>
      <Link to={`/${loaderData.user.account}`} className="flex gap-1"><ArrowLeftCircle /> Voltar </Link>
    </>
  );
}
