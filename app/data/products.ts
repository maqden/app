type Product = {
  target: string;
  title: string;
  cover: string;
  description: string;
};



let highlights: Product[] = [];
let populars: Product[] = [];

export async function getPopulars() {
  if (populars.length === 0) {
    await new Promise((res) => setTimeout(res, 300)); // Simulate delay

    populars = [
      {target: '/account/popular-1', cover: 'https://picsum.photos/id/837/1920/600', title: 'Jato Dágua FLOWmod. MACH3', description: 'Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS'},
      {target: '/account/popular-2', cover: 'https://picsum.photos/id/736/1920/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
      {target: '/account/popular-3', cover: 'https://picsum.photos/id/283/1920/600', title: 'Furadeira radial Manrod 40mm bandeira 1000mm', description: 'Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado'},
      {target: '/account/popular-4', cover: 'https://picsum.photos/id/918/1920/600', title: 'Contra ponto robusto, altura 710mm', description: 'Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)'},
      {target: '/account/popular-5', cover: 'https://picsum.photos/id/486/1920/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
      {target: '/account/popular-6', cover: 'https://picsum.photos/id/387/1920/600', title: 'Forno tratamento térmico', description: 'Forno para tratamento Térmico novo, tsmb´m fbricamos para fundiçãso de alumiio / bronze, etc, fornecido diretamente pelo fabricante. Consulte conf. sua necessidade.'},
      {target: '/account/popular-7', cover: 'https://picsum.photos/id/111/1920/600', title: 'Frezadora ferramenteira Time master 4 VS Iso 40', description: 'Frezadora ferramenteira TIMEMASTER, mod. 4VS, Iso 40, com digital 2 eixos, morsa e jg de pinças , equipamento em bom estado, disponível para exame no interior do RS -'},
      {target: '/account/popular-8', cover: 'https://picsum.photos/id/635/1920/600', title: 'Torno CNC Nardini Logic 195 II 2012', description: 'Torno CNC Nardini, mod. Logic 195 II, ano de fabricação 2012, com placa e contra ponto pneumático, torre elétrica, comando Fagor, equipamento em perfeito estado de conservação, instalado na indústria e disponível para exame e testes no interior do RS'},
    ];
  }

  return populars;
}

export async function getHighlights() {
  if (highlights.length === 0) {
    await new Promise((res) => setTimeout(res, 300)); // Simulate delay

    highlights = [
      {target: '/account/highlight-1', cover: 'https://picsum.photos/id/356/1920/600', title: 'Jato Dágua FLOWmod. MACH3', description: 'Jado dágua FLOW, mod. Mach3 ano de fabricação 2012, cabeçote de corte Paer 4, intensificador 60 Ksi/4137 BAR, tanque dágua 4600 x 2500 x 800mm, com sistema de purificação de água (abrandador), chiler marca Monofrio, 15000Kcal, tratamento de efluentes, equipamento recentemente desmontado para uso do espaço, disponível no interior do RS'},
      {target: '/account/highlight-2', cover: 'https://picsum.photos/id/948/1920/600', title: 'Prensa viradeira hidráulica PROMECAN ASAMA 300 x 75 ton', description: 'Prensa viradeira hidráulica Promecan Asama, 75/30, com 3000mm de área livre e capacidade de 75 ton , acompanha plataforma hidráulica, equipamento em mjito bom estado, disponível no Paraná'},
      {target: '/account/highlight-3', cover: 'https://picsum.photos/id/169/1920/600', title: 'Furadeira radial Manrod 40mm bandeira 1000mm', description: 'Furadeira radial Manrod, mod. MD442, com bandeira de 1000mm, furação 40mm, acompanha mesa cúbica, equipamento em perfeito estado, instalado na indústria no interior do RS disponível para exame e testes. Valor R$ 40.000,00 - Maiores informações somente no privado'},
      {target: '/account/highlight-4', cover: 'https://picsum.photos/id/928/1920/600', title: 'Contra ponto robusto, altura 710mm', description: 'Contra ponto muito robusto, altura de 710mm, para torno de grande porte / plateau ou especial , mangote com diâmetro de 100mm, disponível em Carazinho - RS (para envio por transportadora favor consulta embalagem)'},
      {target: '/account/highlight-5', cover: 'https://picsum.photos/id/276/1920/600', title: 'Serra fita 300mm', description: 'Serra fita 300mm, nova, descida hidráulica, fornecida diretamente pelo fabricante (equipamento nacional) , com opção de financiamento via Finame / proger / cartão BNDS, temos também serras de 200 a 800mm, também com cabeçote giratório, automáticas, semi automáticas, de coluna, etc,'},
    ];
  }

  return highlights;
}

