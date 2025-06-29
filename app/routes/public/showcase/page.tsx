import {Section, SectionContent} from "~/components/public/section";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import type {Thumbnail as Type} from "~/models";
import axios from "~/lib/axios";
import type {Route} from "./+types/page";
import Thumbnail from "~/components/public/thumbnail";
import React from "react";

export async function loader() {
  let products = await new Promise<{ data: Type[] }>((res) => res(axios.get<Type[]>('/products?limit=15&order=random')));

  return {products};
}

export default function Page({loaderData}: Route.ComponentProps) {
  return (
    <>
      <Section className="!pt-4 !xl:pt-8">
        <SectionContent>
          <div className="flex items-center justify-center mx-auto gap-8 px-12 py-8">
            <Avatar className="size-36">
              <AvatarImage src="/images/maqden.jpg"/>
              <AvatarFallback>US</AvatarFallback>
            </Avatar>

            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-title font-bold tracking-tight line-clamp-1">MAQDEN Comércio de Máquinas</h1>
                <p className="opacity-50">@maqden</p>
              </div>

              <p>Nulla vitae elit iaculis, mattis enim et, laoreet urna. Integer pulvinar et sem vel malesuada. Donec libero nisl, volutpat ac tortor id, porttitor tristique eros. Integer at sodales arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor mi, aliquet eu elementum eu, consectetur sed est. Sed eget sagittis nulla. Donec mollis tempor nunc sed rhoncus. Aenean mattis tempus fringilla. Sed nec eros et est molestie iaculis at eget neque. Etiam sit amet odio eu orci lobortis tempor sit amet non eros. Nulla faucibus tempus metus vel suscipit.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 space xl:grid-cols-3">
            {loaderData.products?.data.map((record: Type, i) => (
              <Thumbnail
                key={i}
                src={record.cover}
                alt={record.title}
                target={record.target}
                caption={record.description}
              />
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
