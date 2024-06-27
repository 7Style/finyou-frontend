import { CardProps } from '@/types/pages'
import { Provider, Providers } from '@/types/Providers'
import { signIn } from 'next-auth/react'
import { FaApple, FaGoogle, FaLinkedin, FaXing } from 'react-icons/fa'

const providers: Provider[] = [
  {
    onClick: () => signIn(Providers.GOOGLE),
    icon: <FaGoogle />,
    title: 'google',
  },
  {
    onClick: () => signIn(Providers.LINKEDIN),
    icon: <FaLinkedin />,
    title: 'linkedin',
  },
  {
    onClick: () => signIn(Providers.APPLE),
    icon: <FaApple />,
    title: 'apple',
  },
  {
    onClick: () => signIn(Providers.XING),
    icon: <FaXing />,
    title: 'xing',
  },
]

const projects: CardProps[] = [
  {
    src: '/images/marketing.svg',
    alt: 'marketing',
    title: 'servicePartners',
    description: 'designMarketingSuppliers',
  },
  {
    src: '/images/partner.svg',
    alt: 'partner',
    title: 'fePartners',
    description: 'universityResearchCenters',
  },
  {
    src: '/images/financial-advisor.svg',
    alt: 'financial-advisor',
    title: 'advisors',
    description: 'financePatents',
  },
]

const funding: CardProps[] = [
  {
    src: '/images/expense-project.svg',
    alt: 'expense-project',
    title: 'filterByExpense',
  },
  {
    src: '/images/mix-funding.svg',
    alt: 'mix-funding',
    title: 'optimalFundingMix',
  },
  {
    src: '/images/mix-financing.svg',
    alt: 'mix-financing',
    title: 'checkMixedFinancing',
  },
  {
    src: '/images/compare-funding.svg',
    alt: 'compare-funding',
    title: 'compareFunctionLocation',
  },
]

const invoices: CardProps[] = [
  {
    src: '/images/consultant.svg',
    alt: 'consultant',
    title: 'fundingCompliantProviders',
  },
  {
    src: '/images/development-partner.svg',
    alt: 'development-partner',
    title: 'researchDevelopmentPartners',
  },
]

const imgCard: CardProps[] = [
  {
    src: '/images/startup.png',
    alt: 'startup',
    title: 'startupFunding',
    description: 'grantsFinancingMarketing',
  },
  {
    src: '/images/alarm.png',
    alt: 'alarm',
    title: 'fundingAlert',
    description: 'accessFundingOpportunity',
  },
  {
    src: '/images/tracking.png',
    alt: 'tracking',
    title: 'competitorTracking',
    description: 'fundingProgramCompetition',
  },
]

export { providers, projects, funding, invoices, imgCard }
