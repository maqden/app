import {Section, SectionContent} from "~/components/public/section";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import type {User} from "~/models";
import axios from "~/lib/axios";
import type {Route} from "./+types/page";
import React from "react";
import {Link} from "react-router";
import Thumbnail from "~/components/public/thumbnail";
import {Divider} from "~/components/ui/divider";

export async function loader({params}: Route.LoaderArgs) {
  const response = await axios.get<User>(`/${params.account}?with=products,services`);
  const user = response.data;

  return {user};
}

export default function Page({loaderData}: Route.ComponentProps) {
  const {user} = loaderData;

  return (
    <>
      <Section className="!pt-4 !xl:pt-8">
        <SectionContent>
          <div className="flex flex-col items-center justify-center mx-auto px-12 py-8 gap-8 xl:flex-row">
            <Avatar className="size-36">
              <AvatarImage src={user.avatar}/>
              <AvatarFallback>US</AvatarFallback>
            </Avatar>

            <div className="text-center xl:text-start space-y-4">
              <div>
                <h1 className="text-2xl font-title font-bold tracking-tight line-clamp-1">{user.name}</h1>
                <p className="opacity-50">
                  <Link to={`/${user.account}`}>@{user.account}</Link>
                </p>
              </div>

              <p>{user.bio}</p>
            </div>
          </div>

          {user.products && user.products.length > 0 && (
            <div className="space-y-4">
              <Divider text="nossas máquinas" className="mx-auto max-w-1/2 text-nowrap max-lg:max-w-1/2"/>
              <div className="grid space grid-cols-2 xl:grid-cols-3">
                {user.products?.map((product, i) => (
                  <Thumbnail
                    key={i}
                    src={product.cover}
                    alt={product.title}
                    target={product.target}
                    caption={product.description}
                    className="aspect-square xl:aspect-video"
                  />
                ))}
              </div>
            </div>
          )}

          {user.services && user.services.length > 0 && (
            <div className="space-y-4">
              <Divider text="nossos serviços" className="mx-auto max-w-1/2 text-nowrap max-lg:max-w-1/2"/>
              <div className="grid space grid-cols-2 xl:grid-cols-3">
                {user.services?.map((service, i) => (
                  <Thumbnail
                    key={i}
                    src={service.cover}
                    alt={service.title}
                    target={service.target}
                    caption={service.description}
                    className="aspect-square xl:aspect-video"
                  />
                ))}
              </div>
            </div>
          )}
        </SectionContent>
      </Section>
    </>
  );
}
