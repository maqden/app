import type {Route} from "./+types/page";
import React, {useEffect} from "react";
import {useLoaderData, useNavigate, useSearchParams} from "react-router";
import {Section, SectionContent} from "~/components/public/section";
import InputSearch from "~/components/public/input-search";
import Thumbnail from "~/components/public/thumbnail";
import {othersService} from "~/services/others-service";

export async function loader({request}: Route.LoaderArgs) {
  const {searchParams} = new URL(request.url);

  const result = await othersService.search(searchParams.get('q') ?? '');

  return {result};
}

export default function Page() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const {result} = useLoaderData<typeof loader>();

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
            {result?.map((record, i) => (
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

