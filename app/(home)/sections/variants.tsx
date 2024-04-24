import CountrySelect from "@/components/ui/country-select";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import {
  Country,
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
} from "react-phone-number-input";
import tr from "react-phone-number-input/locale/tr";

export default function Variants() {
  const [country, setCountry] = useState<Country>();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section id="variants" className="w-full max-w-5xl py-8">
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Properties
      </h2>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          With country / region
        </h3>
        <p className="[&amp;:not(:first-child)]:mt-6 text-normal leading-7">
          This properties are valid with the two component country and region.
        </p>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            whiteList
          </h3>
          <p className="[&amp;:not(:first-child)]:mt-6 text-normal leading-7">
            Specify which countries should appear. This just shows the United
            States and China.
          </p>
          <div className="preview relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <CountrySelect className="w-[180px]" whitelist={["US", "CN"]} />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            blackList
          </h3>
          <p className="[&amp;:not(:first-child)]:mt-6 text-normal leading-7">
            Specify which countries should NOT appear. This will omit
            Afhganistan, Aland Islands and Albania.
          </p>
          <div className="preview relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <CountrySelect
              className="w-[180px]"
              blacklist={["AF", "AL", "AX"]}
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            priorityOptions
          </h3>
          <p className="[&amp;:not(:first-child)]:mt-6 text-normal leading-7">
            Make Canada, United States and the Brazil appear first in the
            dropdown list.
          </p>
          <div className="preview relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <CountrySelect
              className="w-[180px]"
              priorityOptions={["US", "CA", "BR"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
