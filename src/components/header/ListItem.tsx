import * as React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/navigation";

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  href: string;
  title: string;
  children?: React.ReactNode;
}

export default function ListItem({
  title,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href as any}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-achieve-purple focus:bg-transparent focus:text-achieve-purple"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
