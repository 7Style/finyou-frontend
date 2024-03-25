import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoInformationCircle } from 'react-icons/io5'; // Make sure you have 'react-icons' installed

export default function TextFieldWithTooltip() {
  return (
    <div className="grid w-full gap-2">
      <div>
        <div className="flex gap-2">
          <Label htmlFor="company-location">Company Location *</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button aria-label="Information about Company Location">
                  <IoInformationCircle className="text-red-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Beschreiben Sie das Produkt so effizient wie möglich</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <small>Beschreiben Sie das Produkt so effizient wie möglich</small>
      </div>
      <Input type="text" id="company-location" placeholder="Ex: Germany" className="border-red-500 rounded-full ring-0 focus:ring-2 focus:ring-red-600 focus-visible:ring-0" />
      <p className="text-xs text-red-500">This is a message for large input.</p>
    </div>
  )
}


export function TextFieldWithoutTooltip() {
  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <Label htmlFor="company-location" className='w-44'>Company Location *</Label>
      <Input 
        type="text" 
        id="company-location" 
        placeholder="Ex: Germany" 
        className="w-full border-red-500 rounded-full focus:ring-2 focus:ring-red-600 focus-visible:ring-0" 
      />
    </div>
  );
}