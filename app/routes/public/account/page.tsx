import {Section, SectionContent} from "~/components/public/section";
import type {User} from "~/models";
import axios from "~/lib/axios";
import type {Route} from "./+types/page";
import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {useInitials} from "~/hooks/use-initials";
import {Link} from "react-router";
import {MapPin, Phone} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import Thumbnail from "~/components/public/thumbnail";

export async function loader({params}: Route.LoaderArgs) {
  const response = await axios.get<User>(`/${params.account}?with=products,services`);
  const user = response.data;

  return {user};
}

export default function Page({loaderData}: Route.ComponentProps) {
  const getInitials = useInitials();

  return (
    <Section>
      <SectionContent className="items-start justify-center xl:flex-row xl:gap-12">
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
            <MapPin className="size-6 stroke-2"/>
            <Phone className="size-6 stroke-2"/>
            <MapPin className="size-6 stroke-2"/>
            <Phone className="size-6 stroke-2"/>
          </div>
        </div>

        <div className="basis-full">
          <Tabs defaultValue="products">
            <TabsList>
              <TabsTrigger value="products">Máquinas</TabsTrigger>
              <TabsTrigger value="services">Serviços</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="grid space grid-cols-2 xl:grid-cols-3">
              {loaderData.user.products?.length === 0 && (<p className="text-center col-span-2 xl:col-span-3">Nenhuma máquina encontrada.</p>)}
              {loaderData.user.products?.map((product, i) => (
                <Thumbnail
                  key={i}
                  src={product.cover}
                  alt={product.title}
                  target={product.target}
                  caption={product.description}
                  className="aspect-square"
                />
              ))}
            </TabsContent>

            <TabsContent value="services" className="grid space grid-cols-2 xl:grid-cols-3">
              {loaderData.user.services?.length === 0 && (<p className="text-center col-span-2 xl:col-span-3">Nenhum serviço encontrado.</p>)}
              {loaderData.user.services?.map((service, i) => (
                <Thumbnail
                  key={i}
                  src={service.cover}
                  alt={service.title}
                  target={service.target}
                  caption={service.description}
                  className="aspect-square"
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </SectionContent>
    </Section>
  );
}
