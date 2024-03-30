import React from "react";
import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import QueryFilter from "@/screens/dashboard/filters/query-filter";
import { Field, RuleGroupType } from "react-querybuilder";
import { QueryBuilderDnD } from '@react-querybuilder/dnd';
import * as ReactDnD from 'react-dnd';
import * as ReactDndHtml5Backend from 'react-dnd-html5-backend';
import { RxCross1 } from "react-icons/rx";

const options = [
  {
    name: "Cost Center",
    label: "Cost Centers",
  },
  {
    name: "De Minimis",
    label: "De-Minimis",
  },
  {
    name: "fördersumme",
    label: "Fördersumme",
  },
  {
    name: "Figma",
    label: "Figma",
  },
  {
    name: "Personas",
    label: "Personas",
  },
];


export default function DynamicFilter() {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState<RuleGroupType>({
    combinator: 'and',
    rules: [],
  });

  const handleFilterSelect = (filterValue: string) => {
    // Check if the option is already selected
    if (selectedOptions.includes(filterValue)) {
      setSelectedOptions(selectedOptions.filter(option => option !== filterValue)); // Deselect the option
    } else {
      setSelectedOptions([...selectedOptions, filterValue]); // Select the option
    }
  };

  const handleClearFilter = () => {
    setSelectedOptions([]);
  }

  return (
    <div className="flex items-center gap-3 mb-4">
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.45052 2.22434C5.16141 2.22434 4.88414 2.34137 4.6797 2.54969C4.47527 2.758 4.36042 3.04054 4.36042 3.33515C4.36042 3.62975 4.47527 3.91229 4.6797 4.12061C4.88414 4.32892 5.16141 4.44596 5.45052 4.44596C5.73963 4.44596 6.01691 4.32892 6.22134 4.12061C6.42578 3.91229 6.54063 3.62975 6.54063 3.33515C6.54063 3.04054 6.42578 2.758 6.22134 2.54969C6.01691 2.34137 5.73963 2.22434 5.45052 2.22434ZM2.36553 2.22434C2.59074 1.57392 3.0084 1.01071 3.56093 0.612322C4.11346 0.213937 4.77366 0 5.45052 0C6.12738 0 6.78758 0.213937 7.34011 0.612322C7.89264 1.01071 8.3103 1.57392 8.53552 2.22434H16.3516C16.6407 2.22434 16.918 2.34137 17.1224 2.54969C17.3268 2.758 17.4417 3.04054 17.4417 3.33515C17.4417 3.62975 17.3268 3.91229 17.1224 4.12061C16.918 4.32892 16.6407 4.44596 16.3516 4.44596H8.53552C8.3103 5.09637 7.89264 5.65959 7.34011 6.05797C6.78758 6.45636 6.12738 6.6703 5.45052 6.6703C4.77366 6.6703 4.11346 6.45636 3.56093 6.05797C3.0084 5.65959 2.59074 5.09637 2.36553 4.44596H1.0901C0.800991 4.44596 0.523719 4.32892 0.319284 4.12061C0.11485 3.91229 0 3.62975 0 3.33515C0 3.04054 0.11485 2.758 0.319284 2.54969C0.523719 2.34137 0.800991 2.22434 1.0901 2.22434H2.36553ZM11.9911 8.88919C11.702 8.88919 11.4248 9.00622 11.2203 9.21454C11.0159 9.42286 10.901 9.70539 10.901 10C10.901 10.2946 11.0159 10.5771 11.2203 10.7855C11.4248 10.9938 11.702 11.1108 11.9911 11.1108C12.2803 11.1108 12.5575 10.9938 12.762 10.7855C12.9664 10.5771 13.0813 10.2946 13.0813 10C13.0813 9.70539 12.9664 9.42286 12.762 9.21454C12.5575 9.00622 12.2803 8.88919 11.9911 8.88919ZM8.90615 8.88919C9.13137 8.23878 9.54903 7.67556 10.1016 7.27717C10.6541 6.87879 11.3143 6.66485 11.9911 6.66485C12.668 6.66485 13.3282 6.87879 13.8807 7.27717C14.4333 7.67556 14.8509 8.23878 15.0761 8.88919H16.3516C16.6407 8.88919 16.918 9.00622 17.1224 9.21454C17.3268 9.42286 17.4417 9.70539 17.4417 10C17.4417 10.2946 17.3268 10.5771 17.1224 10.7855C16.918 10.9938 16.6407 11.1108 16.3516 11.1108H15.0761C14.8509 11.7612 14.4333 12.3244 13.8807 12.7228C13.3282 13.1212 12.668 13.3351 11.9911 13.3351C11.3143 13.3351 10.6541 13.1212 10.1016 12.7228C9.54903 12.3244 9.13137 11.7612 8.90615 11.1108H1.0901C0.800991 11.1108 0.523719 10.9938 0.319284 10.7855C0.11485 10.5771 0 10.2946 0 10C0 9.70539 0.11485 9.42286 0.319284 9.21454C0.523719 9.00622 0.800991 8.88919 1.0901 8.88919H8.90615ZM5.45052 15.554C5.16141 15.554 4.88414 15.6711 4.6797 15.8794C4.47527 16.0877 4.36042 16.3702 4.36042 16.6649C4.36042 16.9595 4.47527 17.242 4.6797 17.4503C4.88414 17.6586 5.16141 17.7757 5.45052 17.7757C5.73963 17.7757 6.01691 17.6586 6.22134 17.4503C6.42578 17.242 6.54063 16.9595 6.54063 16.6649C6.54063 16.3702 6.42578 16.0877 6.22134 15.8794C6.01691 15.6711 5.73963 15.554 5.45052 15.554ZM2.36553 15.554C2.59074 14.9036 3.0084 14.3404 3.56093 13.942C4.11346 13.5436 4.77366 13.3297 5.45052 13.3297C6.12738 13.3297 6.78758 13.5436 7.34011 13.942C7.89264 14.3404 8.3103 14.9036 8.53552 15.554H16.3516C16.6407 15.554 16.918 15.6711 17.1224 15.8794C17.3268 16.0877 17.4417 16.3702 17.4417 16.6649C17.4417 16.9595 17.3268 17.242 17.1224 17.4503C16.918 17.6586 16.6407 17.7757 16.3516 17.7757H8.53552C8.3103 18.4261 7.89264 18.9893 7.34011 19.3877C6.78758 19.7861 6.12738 20 5.45052 20C4.77366 20 4.11346 19.7861 3.56093 19.3877C3.0084 18.9893 2.59074 18.4261 2.36553 17.7757H1.0901C0.800991 17.7757 0.523719 17.6586 0.319284 17.4503C0.11485 17.242 0 16.9595 0 16.6649C0 16.3702 0.11485 16.0877 0.319284 15.8794C0.523719 15.6711 0.800991 15.554 1.0901 15.554H2.36553Z" fill="#1AA5B9"/>
      </svg>

      <Popover open={filterOpen} onOpenChange={setFilterOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={filterOpen}
            size={"xs"}
            className="text-teal-700 bg-sky-100 hover:bg-sky-200"
          >
            <FaPlusCircle />
            Add Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-0 ml-5">
          <Command>
            <CommandInput placeholder="Filter By..." className="h-9" />
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option, index) => (
                <CommandItem
                  key={index}
                  value={option.name}
                  onSelect={() => handleFilterSelect(option.name)}
                >
                  {option.label}
                  <IoMdCheckmark
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedOptions.includes(option.name) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      {
        selectedOptions.length > 0 && (
          <>
          <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
          {
            selectedOptions.map((option, index) => (
              <QueryFilter
                key={index}
                selectedItem={option}
                fields={options}
                query={query}
                onQueryChange={setQuery}
              />
            ))
          }
          </QueryBuilderDnD>

          <Button variant={"ghost"} size={"xs"} className="text-cyan-600 inline-flex items-center font-medium" onClick={handleClearFilter}>
            <RxCross1 />Clear Filters
          </Button>
          </>
        )
      }
    </div>
  );
}