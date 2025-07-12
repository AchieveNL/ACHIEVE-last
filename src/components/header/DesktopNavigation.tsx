import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationData } from "./types";
import ListItem from "./ListItem";

interface DesktopNavigationProps {
  navigationData: NavigationData[];
}

export default function DesktopNavigation({
  navigationData,
}: DesktopNavigationProps) {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navigationData.map((item) => {
            const hasSubLinks = Object.keys(item.links).length > 0;
            if (!hasSubLinks) {
              // Simple navigation link without dropdown
              return (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple`}
                  >
                    <Link href={item.slug}>{item.value}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }

            // Navigation item with dropdown - different layouts based on item
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger className="hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple data-[state=open]:bg-transparent data-[state=open]:text-achieve-purple">
                  {item.value}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.id === "services" ? (
                    // Grid layout for Services dropdown
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {Object.entries(item.links).map(([key, linkText]) => (
                        <ListItem
                          key={key}
                          title={linkText}
                          href={`${item.slug}/${key}`}
                        >
                          {key === "brand-book"}
                          {key === "web-development"}
                          {key === "email-marketing"}
                          {key === "video-marketing"}
                          {key === "search-engine-advertising"}
                          {key === "social-media-advertising"}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.id === "pricing" ? (
                    // Grid layout for Pricing dropdown
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {Object.entries(item.links).map(([key, linkText]) => (
                        <ListItem
                          key={key}
                          title={linkText}
                          href={`${item.slug}/${key}`}
                        >
                          {key === "brand-book"}
                          {key === "custom-website"}
                          {key === "email-marketing"}
                          {key === "video-marketing"}
                          {key === "search-engine-advertising"}
                          {key === "social-media-advertising"}
                          {key === "social-media-management"}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    // Simple layout for other dropdowns
                    <ul className="grid w-[300px] gap-4 p-4">
                      <li>
                        {Object.entries(item.links).map(([key, linkText]) => (
                          <NavigationMenuLink asChild key={key}>
                            <Link
                              href={`${item.slug}/${key}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple"
                            >
                              <div className="text-sm font-medium leading-none">
                                {linkText as string}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Professional{" "}
                                {(linkText as string).toLowerCase()} services.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
