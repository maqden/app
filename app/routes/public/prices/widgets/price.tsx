import {CheckCheck} from "lucide-react";
import {useCurrency} from "~/hooks/use-currency";
import {Card, CardContent} from "~/components/ui/card";
import {Badge} from "~/components/ui/badge";
import {Button} from "~/components/ui/button";

const Price = ({price}: { price: { name: string; amount: number; settings: { popular: boolean }; description: string; features: string[] } }) => {
  const getCurrency = useCurrency();

  return (
    <Card className="w-full">
      <CardContent className="space-y-6">
        <div className="inline-flex items-center justify-between w-full">
          <p className="uppercase text-sm text-primary font-bold font-hero">{price.name}</p>
          {price.settings.popular && <Badge variant="yellow">Popular</Badge>}
        </div>

        <div className="space-y-4">
          <p className="flex items-baseline gap-2">
            <span className="text-foreground font-title text-6xl font-semibold tracking-tighter">R$ {getCurrency(price.amount)}</span>
            <span className="text-muted-foreground text-sm font-medium opacity-50">/ mês</span>
          </p>

          <p className="text-muted-foreground text-base max-w-sm">{price.description}</p>
        </div>

        <div>
          <ul role="list" className="space-y-2">
            {price.features.map((feature, i) => (
              <li key={`feature:${i}`} className="flex items-center gap-x-2">
                <CheckCheck className="text-primary size-5"/> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button className="w-full" variant="outline">Assinar Plano</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Price
