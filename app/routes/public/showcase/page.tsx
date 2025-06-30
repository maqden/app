import {Section, SectionContent} from "~/components/public/section";
import type {User} from "~/models";
import axios from "~/lib/axios";
import type {Route} from "./+types/page";
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {useInitials} from "~/hooks/use-initials";
import {Link, Outlet} from "react-router";
import {MapPin, Phone} from "lucide-react";

export async function loader({params}: Route.LoaderArgs) {
  const response = await axios.get<User>(`/${params.account}`);
  const user = response.data;

  return {user};
}

export default function Page({loaderData}: Route.ComponentProps) {
  const getInitials = useInitials();

  return (
    <Section>
      <SectionContent className="items-start justify-center xl:flex-row-reverse xl:gap-12">
        <div className="basis-full">
          <Outlet />
        </div>

        <div className="flex flex-col space items-center justify-center basis-1/3">
          <Avatar className="size-36">
            <AvatarImage src={loaderData.user.avatar}/>
            <AvatarFallback>{getInitials(loaderData.user.name)}</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h1 className="font-title font-bold text-2xl">{loaderData.user.name}</h1>
            <Link to={`/${loaderData.user.account}`} className="link">@{loaderData.user.account}</Link>
          </div>

          <p className="max-w-lg text-center">{loaderData.user.bio}</p>

          <div className="flex space justify-center">
            <MapPin className="size-6 stroke-2" />
            <Phone className="size-6 stroke-2" />
            <MapPin className="size-6 stroke-2" />
            <Phone className="size-6 stroke-2" />
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

// <Section className="!pt-4 !xl:pt-8">
//   <SectionContent className="items-start justify-center xl:flex-row gap-8">
//     <div className="flex flex-col items-center justify-center text-center max-w-sm xl:flex-row">
//       <div className="flex flex-col items-center justify-center gap-4">

//
//         <div>
//           <h1 className="text-2xl font-title font-bold tracking-tight line-clamp-1">{loaderData.user.name}</h1>
//           <Link to={`/${loaderData.user.account}`} className="link">@{loaderData.user.account}</Link>
//         </div>
//
//         <p>{loaderData.user.bio}</p>
//       </div>
//     </div>
//
//     <div className="flex-1 space-y-8">
//
//     </div>
//   </SectionContent>
// </Section>