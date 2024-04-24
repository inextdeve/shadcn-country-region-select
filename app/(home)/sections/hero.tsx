import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import CountrySelect from "@/components/ui/country-select";
import RegionSelect from "@/components/ui/region-select";
import { useState } from "react";

export default function Hero() {
  const [countryCode, setCountryCode] = useState("");

  return (
    <>
      <section className="z-10 flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <div className="z-10 flex w-full flex-col items-center gap-5 text-center">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Shadcn Country / Region Select
          </h1>
          <p className="max-w-[450px] text-muted-foreground">
            An implementation of a Country / Region Select component built on
            top of Shadcn UI&apos;s input component.
          </p>
          <div className="mt-1 flex gap-2">
            <Link
              href="#try"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} min-w-[150px] shadow-sm`}
            >
              Try it out
            </Link>
            <Link
              href={siteConfig.links.github}
              className={`${buttonVariants({
                variant: "secondary",
                size: "lg",
              })} shadow-sm`}
            >
              Github
            </Link>
          </div>
        </div>

        <div id="try" className="w-full py-8">
          <div className="relative my-4 flex w-full flex-col space-y-2">
            <div className="preview relative mt-2 flex min-h-[350px] w-full flex-col items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <CountrySelect
                className="w-[380px]"
                onChange={(value) => setCountryCode(value)}
              />
              <RegionSelect
                className="mt-10 w-[380px]"
                countryCode={countryCode}
              ></RegionSelect>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
