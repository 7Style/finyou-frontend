import { Footer } from '@/types/footer'

const footerNav: Footer[] = [
  {
    links: [
      { text: 'search', href: '/link1' },
      { text: 'applicationAssistant', href: '/link2' },
      { text: 'billingAssistant', href: '/link3' },
      { text: 'fundingAlert', href: '/link5' },
    ],
    heading: 'funding',
  },
  {
    links: [
      { text: 'competitionWatchlist', href: '/link1' },
      { text: 'fundingPlanner', href: '/link2' },
      { text: 'fundingCombinator', href: '/link3' },
      { text: 'locationComparison', href: '/link5' },
    ],
  },
  {
    links: [
      { text: 'fundingComparison', href: '/link1' },
      { text: 'fundingFAQ', href: '/link2' },
      { text: 'fundingPrograms', href: '/link3' },
    ],
  },
  {
    links: [
      { text: 'researchDevelopmentPartners', href: '/link1' },
      { text: 'consultants', href: '/link2' },
      { text: 'serviceProviders', href: '/link3' },
      { text: 'academiaToBusiness', href: '/link5' },
      { text: 'investorsAndVCs', href: '/link5' },
    ],
    heading: 'network',
  },
  {
    links: [
      { text: 'leasing', href: '/link1' },
      { text: 'factoring', href: '/link2' },
      { text: 'loans', href: '/link5' },
      { text: 'crowdfunding', href: '/link3' },
      { text: 'aboutUs', href: '/link5' },
    ],
    heading: 'financing',
  },
  {
    links: [
      { text: 'pricing', href: '/link1' },
      { text: 'press', href: '/link2' },
      { text: 'contact', href: '/link5' },
      { text: 'legalNotice', href: '/link3' },
    ],
    heading: 'aboutUs',
  },
]

export { footerNav }
