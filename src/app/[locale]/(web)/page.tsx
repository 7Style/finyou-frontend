import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ImageCard, InlineImageCard } from '@/components/common/cards';
import { Button } from '@/components/ui/button';
import Animated from '@/components/animation';

interface ICard {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface IBox extends React.HTMLAttributes<HTMLElement> {
  section?: boolean;
}

const Box: React.FC<IBox> = ({ children, className, section, ...props }) => {
  const defaultClasses = section
    ? 'w-full relative flex flex-col lg:flex-row items-center gap-5 py-16 px-4 md:px-12 max-w-screen-2xl mx-auto'
    : 'w-full lg:w-1/2 py-6 relative';

  const combinedClassName = `${defaultClasses} ${className}`;

  const SectionComponent = section ? Animated : React.Fragment;

  return (
    <SectionComponent>
      {section ? (
        <section className={combinedClassName} {...props}>
          {children}
        </section>
      ) : (
        <div className={combinedClassName} {...props}>
          {children}
        </div>
      )}
    </SectionComponent>
  );
};

const Home: React.FC = () => {
  const t = useTranslations();

  const projects: ICard[] = [
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
  ];


  const funding: ICard[] = [
    {
      src: '/images/expense-project.svg',
      alt: 'expense-project',
      title: 'filterByExpense'
    },
    {
      src: '/images/mix-funding.svg',
      alt: 'mix-funding',
      title: 'optimalFundingMix'
    },
    {
      src: '/images/mix-financing.svg',
      alt: 'mix-financing',
      title: 'checkMixedFinancing'
    },
    {
      src: '/images/compare-funding.svg',
      alt: 'compare-funding',
      title: 'compareFunctionLocation'
    },
  ];


  const invoices: ICard[] = [
    {
      src: '/images/consultant.svg',
      alt: 'consultant',
      title: 'fundingCompliantProviders'
    },
    {
      src: '/images/development-partner.svg',
      alt: 'development-partner',
      title: 'researchDevelopmentPartners'
    },
  ];

  const imgCard: ICard[] = [
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
  ];

  return (
    <>
      {/* Section Header */}
      <Box section>
        <Box>
          <Image className="mr-auto mb-1" src="/images/finyou-findet.svg" alt="finyou-findet" width={500} height={87} />
          <h1 className="sm:text-6xl text-5xl font-bold">{t('funding')}</h1>
          <p className="text-lg mt-2 mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('supportedFundingAssistant') }}></p>
          <div className="flex items-center gap-3 py-2">
            <Button size="lg">{t('readMore')}</Button>
          </div>
        </Box>
        <Box>
          <Image className="lg:mr-0 mr-auto ml-auto" src="/images/hero.png" alt="hero" width={500} height={500} />
        </Box>
      </Box>

      {/* Animated Section */}
      <Animated>
        <div className="lg:w-1/2 text-center mx-auto mt-20 mb-5 lg:mb-10">
          <h1 className="sm:text-[42px] text-[36px] leading-tight text-center font-semibold" dangerouslySetInnerHTML={{ __html: t.raw('fundingFreeEasy') }}></h1>
        </div>
      </Animated>

      {/* section 1 */}
      <Box section>
        <div className="absolute -top-20 lg:-top-32 -right-40 -z-10">
          <Image src="/images/shape-right.svg" alt="shape-right" width={450} height={450} />
        </div>
        <Box>
          <h2 className="text-[32px] font-bold">1. {t("checkCompanyData")}</h2>
          <p className="text-xl leading-8 mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.raw('smartAiFundingAssistant') }}>
          </p>
          <div className="flex items-center py-2">
            <Button size="lg">{t('readMore')}</Button>
          </div>
        </Box>
        <Box>
          <Image className='lg:mr-0 mr-auto ml-auto' src="/images/company-data.png" alt="company-data" width={500} height={500} />
        </Box>
      </Box>


      {/* Section 2 */}
      <Box section className="flex-col-reverse">
        <div className="absolute -top-[2.5rem] lg:-top-28 -left-40 -z-10">
          <Image src="/images/shape-left.svg" alt="shape-left" width={450} height={450} />
        </div>
        <Box>
          <Image className="lg:ml-0 ml-auto mr-auto" src="/images/databoard.png" alt="databoard" width={500} height={500} />
        </Box>
        <Box>
          <h2 className="text-[32px] font-bold">2. {t('compareChooseFinancing')}</h2>
          <p className="text-lg leading-8 mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.raw('overviewFundingProgram') }}></p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
            {funding.map((item, index) => (
              <InlineImageCard key={index} src={item.src} alt={item.alt} title={t(item.title)} />
            ))}
          </div>
          <div className="flex items-center lg:justify-center py-2">
            <Button size="lg">{t('readMore')}</Button>
          </div>
        </Box>
      </Box>

      {/* Section 3 */}
      <Box section>
        <Box>
          <h2 className="text-[32px] font-bold">3. {t('applyFundingInvoice')}</h2>
          <p className="text-lg leading-8 mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.raw('networkSupportDocumentation') }}></p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
            {invoices.map((item, index) => (
              <InlineImageCard key={index} src={item.src} alt={item.alt} title={t(item.title)} />
            ))}
          </div>
          <div className="flex items-center gap-3 py-2">
            <Button size="lg">{t('readMore')}</Button>
            <Button size="lg" variant="outline">{t('network')}</Button>
          </div>
        </Box>
        <Box>
          <Image className="lg:mr-0 mr-auto ml-auto" src="/images/funding-invoice.png" alt="funding-invoice" width={500} height={500} />
        </Box>
      </Box>

      {/* Cards Section */}
      <div className="bg-sky-50">
        <Animated>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 py-16 px-4 md:px-12 max-w-screen-2xl mx-auto gap-4">
            {imgCard.map((card, index) => (
              <ImageCard key={index} src={card.src} alt={card.alt} title={t(card.title)} description={t(card.description)} />
            ))}
          </section>
        </Animated>
      </div>

      {/* Projects Section */}
      <Box section>
        <Box>
          <h2 className="text-[32px] font-bold">{t('projectPartnerSearch')}</h2>
          <p className="text-lg mt-2 mb-6" dangerouslySetInnerHTML={{ __html: t.raw('authorizedServiceProvider') }}></p>
          <div className="flex items-center gap-3">
            <Button size="lg">{t('lookingPartner')}</Button>
            <Button size="lg">{t('partnerNetwork')}</Button>
          </div>
        </Box>
        <Box>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 sm:gap-2">
            {projects.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 text-center">
                <Image src={item.src} className="mx-auto" width={50} height={50} alt={item.alt} />
                <h3 className="text-md sm:text-base font-bold">{t(item.title)}</h3>
                <p className="text-base sm:text-sm">{t(item.description)}</p>
              </div>
            ))}
          </div>
        </Box>
      </Box>

      {/* CTA Section */}
      <div className="bg-sky-50">
        <Box section>
          <h2 className="text-[25px] text-center sm:text-left leading-10 py-1" dangerouslySetInnerHTML={{ __html: t.raw('alphaTestRegistration') }}></h2>
          <div className="flex items-center lg:justify-end gap-2 md:gap-5 lg:w-1/2 py-1">
            <Button size="lg" variant="outline">{t('signIn')}</Button>
            <Button size="lg">{t('toNetwork')}</Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Home;
