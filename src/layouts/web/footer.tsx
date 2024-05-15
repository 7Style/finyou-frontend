import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
    footer: {
        [key: string]: string;
     };
  }
  

export default function Footer({ footer }: FooterProps) {
    const footerData = [
        {
            links: [
            { content:  footer.search, url: '/link1' },
            { content: footer.applicationAssistant, url: '/link2' },
            { content: footer.billingAssistant, url: '/link3' },
            { content: footer.fundingAlarm, url: '/link5' },
            ],
            heading: footer.funding,
        },
        {
            links: [
            { content: footer.competitionWatchlist, url: '/link1' },
            { content: footer.fundingPlanner, url: '/link2' },
            { content: footer.fundingCombinator, url: '/link3' },
            { content: footer.locationComparison, url: '/link5' },
            ],
        },
        {
            links: [
            { content: footer.fundingComparison, url: '/link1' },
            { content: footer.fundingFAQ, url: '/link2' },
            { content: footer.fundingPrograms, url: '/link3' },
            ],
        },
        {
            links: [
            { content: footer.researchAndDevelopmentPartnerSearch, url: '/link1' },
            { content: footer.consultants, url: '/link2' },
            { content: footer.serviceProviders, url: '/link3' },
            { content: footer.academiaToBusiness, url: '/link5' },
            { content: footer.investorsAndVCs, url: '/link5' },
            ],
            heading: footer.network,
        },
        {
            links: [
            { content: footer.leasing, url: '/link1' },
            { content: footer.factoring, url: '/link2' },
            { content: footer.loans, url: '/link5' },
            { content: footer.crowdfunding, url: '/link3' },
            { content: footer.aboutUs, url: '/link5' },
            ],
            heading: footer.financing,
        },
        {
            links: [
            { content: footer.prices, url: '/link1' },
            { content: footer.press, url: '/link2' },
            { content: footer.contact, url: '/link5' },
            { content: footer.legalNotice, url: '/link3' },
            ],
            heading: footer.aboutFinyou,
        },
    ];

  return (
    <footer className='pt-10 px-4 md:px-12'>
        <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base max-w-screen-2xl mx-auto"
        >
            <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
        </Link>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap gap-4 items-start justify-between py-5 max-w-screen-2xl mx-auto">
            {
                footerData.map((data, index) => (
                    <div key={index} className="flex flex-col gap-1 md:gap-3">
                        {data.heading ? <p className="text-xs font-bold pt-3">{data.heading}</p> : <p>&nbsp;</p>}
                        {data.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="text-sm hover:text-foreground"
                            >
                                {link.content}
                            </Link>
                        ))}
                    </div>
                ))
            }
             <div className="flex flex-col gap-3">
                <p>&nbsp;</p>
                <Button size={"lg"}>Registrieren</Button>
                <Button size={"lg"} variant={"outline"}>Anmelden</Button>
            </div>
        </div>

        <Separator />

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 py-3 max-w-screen-2xl mx-auto">
            <p className="text-xs">© Finyou 2022. {footer.copyright}</p>
            <div className="flex text-xs items-center gap-3">
                <p className="text-xs">{footer.followus}:</p>
                <Link href={'https://www.facebook.com'} target='_blank'><Facebook className='h-4 w-auto' stroke='#37ADBE' /></Link>
                <Link href={'https://instagram.com'} target='_blank'><Instagram className='h-4 w-auto' stroke='#37ADBE' /></Link>
                <Link href={'https://twitter.com'} target='_blank'><Twitter className='h-4 w-auto' stroke='#37ADBE' /></Link>
                <Link href={'https://linkedin.com'} target='_blank'><Linkedin className='h-4 w-auto' stroke='#37ADBE' /></Link>
            </div>
        </div>
        
    </footer>
  )
}
