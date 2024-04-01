import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link href={route} locale={otherLocale}>
      <span className="">{otherLocale?.toUpperCase()}</span>
    </Link>
  );
}
