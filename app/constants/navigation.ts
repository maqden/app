import {ChartPie, HandPlatter, Home, ListTodo, MessageCircleQuestion, Star} from "lucide-react";

const items = [
  {
    public: true,
    title: 'WebSite',
    items: [
      {label: 'Página Inicial', href: '/', icon: Home},
      {label: 'Preços', href: '/precos', icon: ListTodo},
      {label: 'Dúvidas Frequentes', href: '/perguntas-frequentes', icon: MessageCircleQuestion},
    ],
  },
  {
    public: false,
    title: 'Painel de Controle',
    items: [
      {label: 'Minhas Estatísticas', href: '/painel', icon: ChartPie},
      {label: 'Minhas Máquinas', href: '/painel', icon: ListTodo},
      {label: 'Meus Serviços', href: '/painel', icon: HandPlatter},
      {label: 'Favoritos', href: '/painel', icon: Star},
    ],
  },
];

export default items;