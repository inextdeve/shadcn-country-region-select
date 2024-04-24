# Shadcn country region select

Shadcn Country & Region Select is a select input component built as part of the Shadcn design system. It offers a blend of customization and out-of-the-box styling, adhering to Shadcn's sleek and modern design principles.

## Why

I needed a country - region select component for a project. I looked around for any country - region select components that used Shadcn's design system, but I couldn't find any. So, I decided to make one myself. I hope you find it useful!

> [!WARNING]
> Before you dive in, just double-check that you're using installing the shadcn correctly!

## Usage

```tsx
import { useState } from "react"
import CountrySelect from "@/components/ui/country-select";
import RegionSelect from "@/components/ui/region-select";

function CountryRegion() {
  const [countryCode, setCountryCode] = useState("");

  return (
    <div className="flex items-center flex-col w-full mt-20">
      <CountrySelect
        className="w-[180px]"
        onChange={(value) => setCountryCode(value)}
        priorityOptions={["US"]}
        placeholder="Country"
      ></CountrySelect>
      <RegionSelect
        onChange={(value) => console.log(value)}
        className="w-[180px] mt-2"
        countryCode={countryCode}
      ></RegionSelect>
    </div>
```

#### CountrySelect properties

| Prop            | Type                  | Description                                           |
| --------------- | --------------------- | ----------------------------------------------------- |
| className       | <code>object</code>   | caccept a class string                                |
| onChange        | <code>func</code>     | callback function fired when the select value changed |
| placeholder     | <code>string</code>   | placeholder value, default "Country"                  |
| priorityOptions | <code>string[]</code> | Array of countries prioritized in the select list     |
| whiteList       | <code>string[]</code> | Array of allowed countries                            |
| blackList       | <code>string[]</code> | Array of banned countries                             |

#### RegionSelect properties

| Prop            | Type                  | Description                                           |
| --------------- | --------------------- | ----------------------------------------------------- |
| className       | <code>string</code>   | accept a class string                                 |
| onChange        | <code>func</code>     | callback function fired when the select value changed |
| placeholder     | <code>string</code>   | placeholder value, default "Region"                   |
| priorityOptions | <code>string[]</code> | Array of regions prioritized in the select list       |
| whiteList       | <code>string[]</code> | Array of allowed regions                              |
| blackList       | <code>string[]</code> | Array of banned regions                               |
