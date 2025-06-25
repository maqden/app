import items from "~/constants/navigation";
import {Lock, UserRoundPlus} from "lucide-react";
import React, {type PropsWithoutRef} from "react";
import {cn} from "~/lib/utils";
import {NavLink} from "react-router";

const Navigation = ({...props}: PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>) => {

  return (
    <nav className="grow flex flex-col items-center justify-center w-full gap-8">
      {items.map((group, g) => {
        if (!group.public) {
          group.items = [
            {label: 'Acessar minha conta', href: '/acessar-conta', icon: Lock},
            {label: 'Criar uma conta', href: '/criar-conta', icon: UserRoundPlus},
          ];
        }

        return (
          <div key={`group:${g}`} className={cn('flex flex-col w-full', props.className)}>
            <h1 className="uppercase text-muted-foreground text-xs font-bold font-title mb-2 opacity-50">{group.title}</h1>

            <div className="flex flex-col w-full gap-2">
              {group.items.map((item, i) => (
                <NavLink key={`item:${i}`} to={item.href}>
                  {({isActive}) => (
                    <div className={cn('group uppercase flex items-center rounded-lg text-sm font-bold h-12 px-4 gap-2', {
                      'bg-primary text-primary-foreground cursor-default': isActive,
                      'clickable text-muted-foreground hover:bg-primary/10': !isActive,
                    })}>
                      {item.icon && <item.icon className="size-6"/>}
                      {item.label && <span className="transform leading-none text-nowrap transition-all duration-300 group-hover:translate-x-2">{item.label}</span>}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        )
      })}
    </nav>
  )
}

export default Navigation


// {items.map((group) => {
//   if (!group.public) {

//   }
//
//   return (
//     <div key={JSON.stringify(group)} className={cn('flex flex-col space-y-8', props.className)}>
//       <div>
//         <h3 >{group.title}</h3>
//
//         <div className="flex flex-col">
//           {group.items.map((item) => (
//             <NavLink to={item.href} key={JSON.stringify(item)}>
//               {({isActive}) => (
//                 <div className={cn('group flex items-center gap-2 rounded font-bold tracking-tight uppercase', {

//                 })}>
//
//
//                 </div>
//               )}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// })}