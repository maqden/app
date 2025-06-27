import React, {useEffect} from "react";
import type {Route} from "./+types/page";
import NewsletterSection from "~/components/public/newsletter-section";
import {Section, SectionContent, SectionTitle} from "~/components/public/section";
import Thumbnail from "~/components/public/thumbnail";
import InputSearch from "~/components/public/input-search";
import {Link, useNavigate, useSearchParams} from "react-router";
import {Divider} from "~/components/ui/divider";
import {Search} from "lucide-react";
import {getHighlights, getPopulars} from "~/data/products";
import {getServices} from "~/data/services";
import {getMostSearched} from "~/data/search";

export async function loader() {
  return {
    populars: await getPopulars(),
    services: await getServices(),
    highlights: await getHighlights(),
    searched: await getMostSearched(),
  };
}

export default function Page({loaderData}: Route.ComponentProps) {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    let query = searchParams.get('q') ?? '';

    if (query) {
      navigate(`/pesquisar?q=${encodeURIComponent(query)}`);
    }
  }, [searchParams]);

  return (
    <>
      <Section className="items-center justify-center py-0 h-[65dvh]">
        <SectionContent className="items-center justify-center gap-2">
          <div className="text-center mx-auto max-w-md md:max-w-2xl xl:max-w-5xl">
            <h1 className="font-extrabold text-4xl md:text-5xl xl:text-7xl">A forma <b className="text-primary">mais fácil</b> de encontrar o equipamento que sua empresa precisa.</h1>
          </div>

          <div className="w-full max-w-xl space-y-4">
            <InputSearch/>

            <div className="mx-auto space-y-2">
              <Divider text="mais buscados" className="mx-auto max-w-1/3 text-nowrap max-lg:max-w-1/2"/>

              <div className="flex items-center justify-center gap-2">
                {loaderData.searched.map((tag) => (
                  <Link to={`/pesquisar?q=${encodeURIComponent(tag.name)}`} key={`tag=${tag.name}`} className="clickable bg-input text-input-foreground item-center flex max-w-fit justify-center gap-1 rounded-xs pl-2 pr-3 py-1 hover:brightness-75">
                    <Search className="size-3 leading-none"/>
                    <span className="text-xs leading-none">{tag.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionTitle small="Destaques" title="Os mais acessados da semana"/>

          <div className="grid space grid-cols-12">
            {loaderData.highlights.map((record, index) => (
              <Thumbnail
                key={index}
                src={record.cover}
                alt={record.title}
                target={record.target}
                caption={record.description}
                className={`${index < 2 ? 'col-span-6' : 'col-span-4'} max-xl:col-span-12`}
              />
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-accent text-accent-foreground">
        <SectionContent>
          <SectionTitle small="Populares" title="Os mais acessados da semana"/>

          <div className="grid space grid-cols-4 max-xl:grid-cols-1">
            {loaderData.populars.map((record, index) => (
              <Thumbnail
                key={index}
                src={record.cover}
                alt={record.title}
                target={record.target}
                caption={record.description}
              />
            ))}
          </div>
        </SectionContent>
      </Section>

      <NewsletterSection/>

      <Section className="bg-accent text-accent-foreground">
        <SectionContent>
          <SectionTitle small="Serviços" title="Encontre Profissionais"/>

          <div className="grid grid-cols-3 space max-lg:grid-cols-1">
            {loaderData.services.map((record, index) => (
              <Thumbnail key={index} src={record.cover} alt={record.title} target={record.target} className="aspect-square"/>
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
