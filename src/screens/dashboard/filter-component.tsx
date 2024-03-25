'use client'
import { OtherOption } from "./filters/other-option";
import { SearchFilter } from "./filters/search-filter";
import { Badge } from "@/components/ui/badge"


const FilterComponent = () => {
    return (
        <div className="flex flex-wrap items-center justify-between py-3">
            <div className="flex items-center gap-3">
                <h3 className="text-gray-900 text-xl font-medium leading-7">Grants</h3>
                <Badge variant={"custom"} className="bg-violet-100/30 text-violet-800">1,009 available</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-5">
                <OtherOption />
                <SearchFilter />
            </div>
        </div>
    );
};

export default FilterComponent;
