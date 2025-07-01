import React from "react";
import type {Route} from "./+types/page";
import {MapPin, Phone} from "lucide-react";
import {Link, useLoaderData} from "react-router";
import {useInitials} from "~/hooks/use-initials";
import Thumbnail from "~/components/public/thumbnail";
import {accountService} from "~/services/account-service";
import {Section, SectionContent} from "~/components/public/section";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";

export async function loader({params}: Route.LoaderArgs) {
  const account = await accountService.get(params.account);

  return {account};
}

export default function Page() {
  const getInitials = useInitials();
  const {account} = useLoaderData<typeof loader>();

  return (
    <Section>
      <SectionContent className="items-start justify-center xl:flex-row xl:gap-12">
        <div className="flex flex-col space items-center justify-center basis-1/3">
          <Avatar className="size-36">
            <AvatarImage src={account.avatar}/>
            <AvatarFallback>{getInitials(account.name)}</AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h1 className="font-title font-bold text-2xl">{account.name}</h1>
            <Link to={`/${account.account}`} className="link">@{account.account}</Link>
          </div>

          <p className="max-w-lg text-center">{account.bio}</p>

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
              {account.products?.length === 0 && (<p className="text-center col-span-2 xl:col-span-3">Nenhuma máquina encontrada.</p>)}
              {account.products?.map((product, i) => (
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
              {account.services?.length === 0 && (<p className="text-center col-span-2 xl:col-span-3">Nenhum serviço encontrado.</p>)}
              {account.services?.map((service, i) => (
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
