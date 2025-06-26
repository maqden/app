import React, {type PropsWithoutRef} from "react";
import Thumbnail from "~/components/public/thumbnail";
import {Section, SectionContent, SectionTitle} from "~/components/public/section";

const ServicesSection = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {
  const records = [
    {cover: 'https://picsum.photos/id/292/800/800', title: 'Torneiro Mecânico'},
    {cover: 'https://picsum.photos/id/367/800/800', title: 'Torneiro Mecânico'},
    {cover: 'https://picsum.photos/id/787/800/800', title: 'Torneiro Mecânico'},
  ];

  return (
    <Section className={props.className}>
      <SectionContent>
        <SectionTitle small="Serviços" title="Encontre Profissionais"/>

        <div className="grid grid-cols-3 space max-lg:grid-cols-1">
          {records.map((record, index) => (
            <Thumbnail key={index} src={record.cover} alt={record.title} target="/account/product-or-service" className="aspect-square"/>
          ))}
        </div>
      </SectionContent>
    </Section>
  )
}

export default ServicesSection
