import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';


export default function Footer() {
    const t = useTranslations('footer');
    const footerData = [
        {
            links: [
                { content: t('search'), url: '/link1' },
                { content: t('applicationAssistant'), url: '/link2' },
                { content: t('billingAssistant'), url: '/link3' },
                { content: t('fundingAlarm'), url: '/link5' },
            ],
            heading: t('funding'),
        },
        {
            links: [
                { content: t('competitionWatchlist'), url: '/link1' },
                { content: t('fundingPlanner'), url: '/link2' },
                { content: t('fundingCombinator'), url: '/link3' },
                { content: t('locationComparison'), url: '/link5' },
            ],
        },
        {
            links: [
                { content: t('fundingComparison'), url: '/link1' },
                { content: t('fundingFAQ'), url: '/link2' },
                { content: t('fundingPrograms'), url: '/link3' },
            ],
        },
        {
            links: [
                { content: t('researchAndDevelopmentPartnerSearch'), url: '/link1' },
                { content: t('consultants'), url: '/link2' },
                { content: t('serviceProviders'), url: '/link3' },
                { content: t('academiaToBusiness'), url: '/link5' },
                { content: t('investorsAndVCs'), url: '/link5' },
            ],
            heading: t('network'),
        },
        {
            links: [
                { content: t('leasing'), url: '/link1' },
                { content: t('factoring'), url: '/link2' },
                { content: t('loans'), url: '/link5' },
                { content: t('crowdfunding'), url: '/link3' },
                { content: t('aboutUs'), url: '/link5' },
            ],
            heading: t('financing'),
        },
        {
            links: [
                { content: t('prices'), url: '/link1' },
                { content: t('press'), url: '/link2' },
                { content: t('contact'), url: '/link5' },
                { content: t('legalNotice'), url: '/link3' },
            ],
            heading: t('aboutFinyou'),
        },
    ];

    return (
        <footer className='pt-10 px-4 md:px-16'>
            <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
                <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap gap-4 items-start justify-between py-5">
                {
                    footerData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-1 md:gap-3">
                            {data.heading ? <p className="text-xs font-bold pt-3">{data.heading}</p> : <p>&nbsp;</p>}
                            {data.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    {link.content}
                                </Link>
                            ))}
                        </div>
                    ))
                }
                <div className="flex flex-col gap-3">
                    <p>&nbsp;</p>
                    <Button size={"md"}>Registrieren</Button>
                    <Button size={"md"} variant={"outline"}>Anmelden</Button>
                </div>
            </div>

            <Separator />

            <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 py-3">
                <p className="text-xs text-muted-foreground">© Finyou 2022. {t('copyright')}</p>
                <div className="flex text-xs items-center gap-3">
                    <p className="text-xs text-muted-foreground">{t('followus')}:</p>
                    <Link href={'https://www.facebook.com'} target='_blank'><Facebook className='h-4 w-auto' stroke='#37ADBE' /></Link>
                    <Link href={'https://instagram.com'} target='_blank'><Instagram className='h-4 w-auto' stroke='#37ADBE' /></Link>
                    <Link href={'https://twitter.com'} target='_blank'><Twitter className='h-4 w-auto' stroke='#37ADBE' /></Link>
                    <Link href={'https://linkedin.com'} target='_blank'><Linkedin className='h-4 w-auto' stroke='#37ADBE' /></Link>
                </div>
            </div>

        </footer>
    )
}
