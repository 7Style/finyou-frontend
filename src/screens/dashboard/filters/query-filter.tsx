import React from "react";
import { Button } from "@/components/ui/button";
import { RxCaretDown } from "react-icons/rx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ActionWithRulesAndAddersProps, ActionWithRulesProps, Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';
import { GoPlus } from "react-icons/go";
import { PiListPlusLight } from "react-icons/pi";

interface QueryFilterProps {
  selectedItem: string | null;
  fields: Field[];
  query: RuleGroupType;
  onQueryChange: (query: RuleGroupType) => void;
}

const AddRuleButtons = (props: ActionWithRulesProps) => (
  <Button variant={"outline"} size={"xs"} className="inline-flex gap-2 items-center" onClick={(e) => props.handleOnClick(e)}>
    <GoPlus /> Add filter Rule
  </Button>
);

const AddGroupButtons = (props: ActionWithRulesProps) => (
  <Button variant={"outline"} size={"xs"} className="inline-flex gap-2 items-center" onClick={(e) => props.handleOnClick(e)}>
    <PiListPlusLight /> Add filter group
  </Button>
);

export default function QueryFilter({
  selectedItem,
  fields,
  query,
  onQueryChange,
}: QueryFilterProps) {
  const [builderOpen, setBuilderOpen] = React.useState(false);  
  const handleQueryBuilderOpen = () => {
    setBuilderOpen(true);
  };

  const handleQueryBuilderClose = () => {
    setBuilderOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
            variant="outline"
            role="combobox"
            size={"xs"}
            aria-expanded={selectedItem !== null}
            className="justify-between capitalize text-cyan-600 border-cyan-600"
        >
            {selectedItem}
            <RxCaretDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto px-5 ml-5">
          <QueryBuilder
            fields={fields}
            query={query}
            onQueryChange={onQueryChange}
            controlElements={{
              addRuleAction: AddRuleButtons,
              addGroupAction: AddGroupButtons
            }}
            showCloneButtons
            showCombinatorsBetweenRules
          />
      </PopoverContent>
    </Popover>
  );
}
