import * as React from 'react';
import Image from 'next/image';
import { IconCard, InlineIconCard } from '@/components/CustomCard';
import { Button } from '@/components/ui/button';
import Animated from '@/components/animation';
import { useTranslations } from 'next-intl';

interface Item {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface HtmlProps extends React.HTMLAttributes<HTMLElement> {
  section?: boolean;
}

function Box({ children, className, section, ...props }: HtmlProps) {
  const defaultClasses = section
    ? 'w-full relative flex flex-col lg:flex-row items-center gap-5 py-16 px-4 md:px-12 max-w-screen-2xl mx-auto'
    : 'w-full lg:w-1/2 py-6 relative';

  const combinedClassName = `${defaultClasses} ${className}`;

  if (section) {
    return (
      <Animated>
        <section className={combinedClassName} {...props}>
          {children}
        </section>
      </Animated>
    );
  } else {
    return (
      <div className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
}

export default function Home() {
  const t = useTranslations('page.home');
  const buttonTrans = useTranslations('common.button');

  const items: Item[] = [
    {
      src: '/images/marketing.svg',
      alt: 'marketing',
      title: t("servicePartner"),
      description: t("designMarketingSupplier")
    },
    {
      src: '/images/partner.svg',
      alt: 'partner',
      title: t("fePartner"),
      description: t("universityResearchCenter")
    },
    {
      src: '/images/financial-advisor.svg',
      alt: 'financial-advisor',
      title: t("advisor"),
      description: t("financePatents")
    }
  ];
  
  const cardsData: Item[] = [
    {
      src: '/images/startup.png',
      alt: 'startup',
      title: t("moneyForStartup"),
      description: t("grantsFinancingMarketing")
    },
    {
      src: '/images/alarm.png',
      alt: 'alarm',
      title: t("fundingAlert"),
      description: t("accessFundingOpportunity")
    },
    {
      src: '/images/tracking.png',
      alt: 'tracking',
      title: t("competitorTracking"),
      description: t("fundingProgramCompetition")
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box section={true}>
        <Box>
          <Image className='mr-auto mb-1' src="/images/finyou-findet.svg" alt="finyou-findet" width={500} height={87} />
          <h1 className="sm:text-6xl text-5xl font-bold">{t("funding")}</h1>
          <p className="text-lg mt-2 mb-4 text-gray-600" dangerouslySetInnerHTML={{ __html: t.raw('supportedFundingAssistant') }}>
          </p>
          <div className="flex items-center gap-3 py-2">
            <Button size={"lg"}>{buttonTrans("readMore")}</Button>
          </div>
        </Box>
        <Box>
          <Image className='lg:mr-0 mr-auto ml-auto' src="/images/hero.png" alt="hero" width={500} height={500} />
        </Box>
      </Box>

      <Animated>
        <div className="lg:w-1/2 text-center mx-auto mt-20 mb-5 lg:mb-10">
          <h1 className='sm:text-[42px] text-[36px] leading-tight text-center font-semibold' dangerouslySetInnerHTML={{ __html: t.raw('fundingFreeEasy') }}></h1>
        </div>
      </Animated>

      {/* section 1 */}
      <Box section={true}>
        <Box>
          <h2 className="text-[32px] font-bold">1. {t("checkCompanyData")}</h2>
            <p className="text-xl leading-8 mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.raw('smartAiFundingAsistant') }}>
          </p>
          <div className="flex items-center gap-3 py-2">
            <Button size={"lg"}>{buttonTrans("readMore")}</Button>
          </div>
        </Box>
        <Box>
          <Image className='lg:mr-0 mr-auto ml-auto' src="/images/company-data.png" alt="company-data" width={500} height={500} />
          <div className="absolute -top-20 lg:-top-32 -right-40 -z-10">
            <Image src="/images/shape-right.svg" alt="shape-right" width={450} height={450} />
          </div>
        </Box>
      </Box>

      {/* section 2 */}
      <Box section={true} className="flex-col-reverse">
        <div className="absolute -top-10 lg:-top-28 -left-40 -z-10">
          <Image src="/images/shape-left.svg" alt="shape-left" width={250} height={250} />
        </div>
        <Box>
          <Image className='lg:ml-0 ml-auto mr-auto' src="/images/databoard.png" alt="databoard" width={500} height={500} />
        </Box>
        <Box>
          <h2 className="text-[32px] font-bold">2. {t("compareChooseFinancing")}</h2>
          <p className="text-lg leading-8 mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.raw('overviewFundingProgram') }}></p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
            <InlineIconCard src="/images/expense-project.svg" alt="expense-project" title={t("filterByExpense")} />
            <InlineIconCard src="/images/mix-funding.svg" alt="mix-funding" title={t("optimalFundingMix")} />
            <InlineIconCard src="/images/mix-financing.svg" alt="mix-financing" title={t("checkMixFinance")} />
            <InlineIconCard src="/images/compare-funding.svg" alt="compare-funding" title={t("compareFunctionLocation")} />
          </div>

          <div className="flex items-center lg:justify-center gap-3 py-2">
            <Button size={"lg"}>{buttonTrans("readMore")}</Button>
          </div>
        </Box>
      </Box>

      {/* section 3 */}
      <Box section={true}>
        <Box>
          <h2 className="text-[32px] font-bold">3. {t("applyFundingInvoice")}</h2>
          <p className="text-lg leading-8 mt-2 mb-4" dangerouslySetInnerHTML={{ __html: t.raw('networkSupportDocumentation') }}></p>

          <div className="flex items-center flex-wrap gap-4 mb-5">
            <InlineIconCard src="/images/consultant.svg" alt="consultant" title={t("fundingCompliment")} />
            <InlineIconCard src="/images/development-partner.svg" alt="development-partner" title={t("researchDevelopment")} />
          </div>

          <div className="flex items-center gap-3 py-2">
            <Button size={"lg"}>{buttonTrans("readMore")}</Button>
            <Button size={"lg"} variant={'outline'}>{buttonTrans("network")}</Button>
          </div>
        </Box>
        <Box>
          <Image className='lg:mr-0 mr-auto ml-auto' src="/images/funding-invoice.png" alt="funding-invoice" width={500} height={500} />
        </Box>
      </Box>

      
      {/* Cards */}
      <div className='bg-sky-50'>
        <Animated>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 py-16 px-4 md:px-12 max-w-screen-2xl mx-auto gap-4">
            {cardsData.map((card, index) => (
              <IconCard
                key={index}
                src={card.src}
                alt={card.alt}
                title={card.title}
                description={card.description}
              />
            ))}
          </section>
        </Animated>
      </div>

      {/* Projects */}
      <Box section={true}>
        <Box>
          <h2 className="text-[32px] font-bold">{t("projectPartner")}</h2>
          <p className="text-lg mt-2 mb-6" dangerouslySetInnerHTML={{ __html: t.raw('authorizedServiceProvider') }}></p>

          <div className="flex items-center gap-3">
            <Button size={"lg"}>{buttonTrans("lookingPartner")}</Button>
            <Button size={"lg"}>{buttonTrans("partnerNetwork")}</Button>
          </div>
        </Box>
        <Box>
          <div className="flex sm:flex-row flex-col gap-5 sm:gap-2">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 text-center">
                <Image src={item.src} className='mx-auto' width={50} height={50} alt={item.alt} />
                <h3 className="text-md sm:text-base font-bold">{item.title}</h3>
                <p className='text-base sm:text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </Box>
      </Box>

      {/* CTA */}
      <div className="bg-sky-50">
        <Box section={true}>
          <h2 className="text-[25px] text-center sm:text-left leading-10 py-1" dangerouslySetInnerHTML={{ __html: t.raw('alphaTestRegistration') }}></h2>
          <div className="flex items-center lg:justify-end gap-2 md:gap-5 lg:w-1/2 py-1">
            <Button size={"lg"} variant={'outline'}>{buttonTrans("signIn")}</Button>
            <Button size={"lg"}>{buttonTrans("toNetwork")}</Button>
          </div>
        </Box>
      </div>
    </>
  );
}