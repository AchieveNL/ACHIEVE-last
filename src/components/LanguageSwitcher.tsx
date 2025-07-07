import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { Button } from "./ui/button";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {locale === "nl" ? (
            <span className="fi fi-nl size-20 text-xl"></span>
          ) : (
            <span className="fi fi-us size-20 text-xl"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={0}>
        <DropdownMenuItem
          className="flex items-center justify-center"
          onClick={() => setLocale("nl")}
        >
          <span className="fi fi-nl"></span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center justify-center"
          onClick={() => setLocale("en")}
        >
          <span className="fi fi-us"></span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
