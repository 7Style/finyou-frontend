import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { BookMark, CheckList, Partner } from '@/icons/dashboard'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'


export default function List() {
  return (
    <Accordion type="single" collapsible className="w-full bg-white rounded-md px-5 py-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <AccordionItem value="item-1" className='border-0'>
        <AccordionTrigger className='hover:no-underline py-2.5 text-sm text-neutral-800 fill-[#BEBEBE]'>
            <div className="flex items-center gap-4 w-full">
                <CheckList />
                Projects
            </div>
            <span className='text-xs px-2'>4</span>
        </AccordionTrigger>
        <AccordionContent className='tex-sm pl-10 pr-5'>
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='border-0'>
        <AccordionTrigger className='hover:no-underline py-2.5 text-sm text-neutral-800 fill-[#BEBEBE]'>
            <div className="flex items-center gap-4 w-full">
                <BookMark />
                Grants
            </div>
            <span className='text-xs px-2'>12</span>
        </AccordionTrigger>
        <AccordionContent className='tex-sm pl-10 pr-5'>
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className='border-0'>
        <AccordionTrigger className='hover:no-underline py-2.5 text-sm text-neutral-800 fill-[#BEBEBE]'>
            <div className="flex items-center gap-4 w-full">
                <Partner />
                Partner Lists 
            </div>
            <span className='text-xs px-2'>3</span>
        </AccordionTrigger>
        <AccordionContent className='tex-sm pl-10 pr-5'>
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
          <Separator className="my-2" />
          <Link href={'/'}>Test</Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
