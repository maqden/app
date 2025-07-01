import React, {useEffect} from "react";
import NewsletterSection from "~/components/public/newsletter-section";
import {Section, SectionContent, SectionTitle} from "~/components/public/section";
import Thumbnail from "~/components/public/thumbnail";
import InputSearch from "~/components/public/input-search";
import {Link, useLoaderData, useNavigate, useSearchParams} from "react-router";
import {Divider} from "~/components/ui/divider";
import {Search} from "lucide-react";
import {othersService, type Thumbnail as Type} from "~/services/others-service";
import {useDebouncedCallback} from "use-debounce";
import type { Route } from "./+types/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Soluções Industriais e Equipamentos" },
    { name: "description", content: "Procurando máquinas e equipamentos industriais de alta performance? A Maqden tem o que você precisa. Clique e confira nosso catálogo!" },
  ];
}

export async function loader() {
  const highlights = await othersService.highlights('product');
  const services = await othersService.highlights('service');
  const popular = await othersService.popular();

  return {highlights, services, popular};
}

export default function Page() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searched = ['torno', 'furadeira', 'maqden', 'mecanico'];
  const {highlights, services, popular} = useLoaderData<typeof loader>();

  const debouncedSearch = useDebouncedCallback((value) => navigate(`/pesquisar?q=${encodeURIComponent(value)}`), 150);

  useEffect(() => {
    if (searchParams.has('q')) {
      debouncedSearch(searchParams.get('q'))
    }
  }, [searchParams, debouncedSearch]);

  return (
    <>
      <Section className="items-center justify-end py-0 h-[45dvh] xl:justify-center xl:h-[65dvh] xl:scale-115">
        <SectionContent className="items-center justify-center gap-2">
          <div className="text-center mx-auto max-w-md md:max-w-2xl xl:max-w-5xl xl:mt-36">
            <h1 className="font-extrabold text-4xl md:text-5xl xl:text-7xl">A forma <b className="text-primary">mais fácil</b> de encontrar o equipamento que sua empresa precisa.</h1>
          </div>

          <div className="w-full max-w-xl space-y-4">
            <InputSearch/>

            <div className="mx-auto space-y-2">
              <Divider text="mais buscados" className="mx-auto max-w-1/3 text-nowrap max-lg:max-w-1/2"/>

              <div className="flex items-center justify-center gap-2">
                {searched.map((text) => (
                  <Link to={`/pesquisar?q=${encodeURIComponent(text)}`} key={`tag=${text}`} className="clickable bg-input text-input-foreground item-center flex max-w-fit justify-center gap-1 rounded-xs pl-2 pr-3 py-1 hover:brightness-75">
                    <Search className="size-3 leading-none"/>
                    <span className="text-xs leading-none">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <SectionTitle small="Seleção do Dia" title="Confira nossos destaques"/>

          <div className="grid space grid-cols-12">
            {highlights?.map((record: Type, i) => (
              <Thumbnail
                key={i}
                src={record.cover}
                alt={record.title}
                target={record.target}
                caption={record.description}
                className={`${i < 2 ? 'col-span-6' : 'col-span-4'} max-xl:col-span-12`}
              />
            ))}
          </div>
        </SectionContent>
      </Section>

      <Section className="bg-accent text-accent-foreground">
        <SectionContent>
          <SectionTitle small="Populares" title="Os mais acessados da semana"/>

          <div className="grid space grid-cols-4 max-xl:grid-cols-1">
            {popular?.map((record: Type, i) => (
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

      <NewsletterSection/>

      <Section className="bg-accent text-accent-foreground">
        <SectionContent>
          <SectionTitle small="Serviços" title="Encontre Profissionais"/>

          <div className="grid grid-cols-3 space max-lg:grid-cols-1">
            {services?.map((record: Type, i) => (
              <Thumbnail key={i} src={record.cover} alt={record.title} target={record.target} className="aspect-square"/>
            ))}
          </div>
        </SectionContent>
      </Section>
    </>
  );
}
