import type {Route} from "./+types/page";
import React, {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router";
import {Section, SectionContent} from "~/components/public/section";
import InputSearch from "~/components/public/input-search";
import Thumbnail from "~/components/public/thumbnail";
import type {Thumbnail as Type} from "~/models";
import axios from "~/lib/axios";

export async function loader({request}: Route.LoaderArgs) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') ?? '';

  const results = await axios.get<Type[]>(`/search?q=${encodeURIComponent(query)}`);

  return results.data;
}

export default function Page({loaderData}: Route.ComponentProps) {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    let query = searchParams.get('q') ?? null;

    if (!query) {
      navigate(`/`);
    }
  }, [searchParams]);

  return (
    <Section className="!pt-4 !xl:pt-8">
      <SectionContent className="flex flex-col items-center min-h-[55dvh]">
        <div className="w-full max-w-2xl space-y-4">
          <InputSearch placeholder="Pesquisar"/>
        </div>

        <div className="space-y-4">
          <h1 className="text-center text-lg">Resultados de pesquisa para: <b className="text-primary brightness-75">{searchParams.get('q') ?? ''}</b></h1>

          <div className="grid grid-cols-3 space max-lg:grid-cols-1">
            {loaderData?.map((record, i) => (
              <Thumbnail
                key={i}
                src={record.cover}
                alt={record.title}
                target={record.target}
                caption={record.description}
                className="aspect-video"
              />
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

