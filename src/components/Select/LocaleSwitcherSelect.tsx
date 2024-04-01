"use client";

import { ChangeEvent, useTransition } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const { locale, locales } = router;
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LocaleSwitcher");

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(router.route, undefined, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "flex items-center justify-start",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{t("label")}</p>
      <select
        className="bg-transparent  py-3 pl-2 pr-6 "
        defaultValue={locale ?? "en"}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {locales?.map((cur) => (
          <option key={cur} value={cur} className="dark:text-gray-600">
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </label>
  );
}
