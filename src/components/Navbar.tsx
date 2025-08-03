import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ListItem } from "@material-tailwind/react";

const components: { title : string, href : string, descript : string }[] = [
    {
        title : "Home",
        href : "/",
        descript : "Kuy Yai Mark mark"
    },
    {
        title : "Portfolio",
        href : "/portfolio",
        descript : "Hee Yai Mark mark"
    }
];

export default function Navbar ( ) {
    return (
        <NavigationMenu viewport={false} >

            <NavigationMenuList>
                
                <ul>
                    {/* Loop load in array */}
                    { components.map( ( com ) => (
                        <ListItem href={com.href}  key={com.title} title={com.title} >
                            { com.descript }
                        </ListItem>
                    ) ) }

                </ul>
                

            </NavigationMenuList>

        </NavigationMenu>
    )
};