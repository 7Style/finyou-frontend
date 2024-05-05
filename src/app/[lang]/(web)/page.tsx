"use client"
import * as React from 'react';
import Image from 'next/image';
import { IconCard, InlineIconCard } from '@/components/CustomCard';
import { Button } from '@/components/ui/button';
import Animated from '@/components/animation';

interface Item {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    src: '/images/marketing.svg',
    alt: 'marketing',
    title: 'Service-Partner',
    description: 'Design, IT, Marketing, Zulieferer ...'
  },
  {
    src: '/images/partner.svg',
    alt: 'partner',
    title: 'F&E-Partner',
    description: 'Ob Unis, Firmen oder Forschungszentren'
  },
  {
    src: '/images/financial-advisor.svg',
    alt: 'financial-advisor',
    title: 'Berater',
    description: 'zu F&E, Finanzen, Patenten, IT, HR, Strategie, M&A..'
  }
];

const cardsData: Item[] = [
  {
    src: '/images/startup.png',
    alt: 'startup',
    title: 'Geld für Unternehmen & Startups',
    description: 'Durch  Zuschüsse beteiligt sich der Staat bis zu 80% an der Finanzierung von Digitalisierungs-, Marketing-, F&E- & Beratungsprojekten sowie Personalkosten und...'
  },
  {
    src: '/images/alarm.png',
    alt: 'alarm',
    title: 'Fördermittel-Alarm',
    description: 'Als erster auf begehrte Förderungen zugreifen und mit dem Fördermittel-Alarm nie wieder eine Fördermöglichkeit verpassen'
  },
  {
    src: '/images/tracking.png',
    alt: 'tracking',
    title: 'Wettbewerbs-Tracking',
    description: 'Erfahren welche Förderprogramme  Wettbewerber nutzen und sei dank des Wettbewerbs-Trackings einen Schritt voraus sein'
  }
];

interface HtmlProps extends React.HTMLAttributes<HTMLElement> {
  section?: boolean;
}

function Box({ children, className, section, ...props }: HtmlProps) {
  const defaultClasses = section
    ? 'w-full relative lg:overflow-x-visible overflow-x-hidden flex flex-col lg:flex-row items-center gap-5 py-16 px-4 md:px-16'
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
  return (
    <>
      {/* Hero Section */}
      <Box section={true}>
        <Box>
          <Image className='mr-auto mb-1' src="/images/finyou-findet.svg" alt="finyou-findet" width={500} height={87} />
          <h1 className="text-6xl font-bold">Fördermittel</h1>
          <p className="text-lg mt-2 mb-4 text-gray-600">
            Der KI-gestützte Fördermittelassistent für <br></br>Unternehmen
          </p>
          <div className="flex items-center gap-3 py-2">
            <Button size={"lg"}>Jetzt suchen</Button>
          </div>
        </Box>
        <Box>
          <Image className='lg:mr-0 mr-auto ml-auto' src="/images/hero.png" alt="hero" width={500} height={500} />
        </Box>
      </Box>

      <Animated>
        <div className="lg:w-1/2 text-center mx-auto mt-20 mb-5 lg:mb-10">
          <h1 className='text-4xl text-center font-semibold'>So einfach ist die <span className='text-cyan-600 font-bold'>kostenlose Fördermittelsuche</span> mit Finyou</h1>
        </div>
      </Animated>

      {/* section 1 */}
      <Box section={true}>
        <Box>
          <h2 className="text-2xl font-bold">1. Unternehmensdaten prüfen</h2>
          <p className="text-lg mt-2 mb-4">
            Unser <b>smarter KI-Fördermittelassistent</b> recherchiert alle Unternehmensdaten. Einfach prüfen und loslegen...
          </p>
          <div className="flex items-center gap-3 py-2">
            <Button size={"lg"}>Jetzt suchen</Button>
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
          <h2 className="text-2xl font-bold">2. Förderungen | Finanzierung vergleichen & auswählen</h2>
          <p className="text-lg mt-2 mb-4">
            <b>In Sekunden</b> erstellt Finyou eine auf das Unternehemen <b>maßgeschneiderte Übersicht</b> von Förderprogrammen & Finanzierungsmöglichkeiten
          </p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
              <InlineIconCard src="/images/expense-project.svg" alt="expense-project" title="Filtern nach Ausgaben & Projekttypen" />
              <InlineIconCard src="/images/mix-funding.svg" alt="mix-funding" title="Optimaler Fördermittelmix" />
              <InlineIconCard src="/images/mix-financing.svg" alt="mix-financing" title="Mix-Finanzierungen prüfen" />
              <InlineIconCard src="/images/compare-funding.svg" alt="compare-funding" title="Förderungen & Standorte vergleichen" />
          </div>

          <div className="flex items-center lg:justify-center gap-3 py-2">
            <Button size={"lg"}>Jetzt suchen</Button>
          </div>
        </Box>
      </Box>

      {/* section 3 */}
      <Box section={true}>
        <Box>
         
        <h2 className="text-2xl font-bold">3. Fördermittel beantragen & abrechnen</h2>
          <p className="text-lg mt-2 mb-4">
            Finyou’s <b>Fördermittelassistent</b> und das Netzwerk unterstützen im gesamten Prozess von der <b>Partnersuche</b>, über die rechtssichere <b>Beantragung</b> bis hin zur <b>Abrechnung</b> und Dokumentation.
          </p>
          <div className="flex items-center flex-wrap gap-4 mb-5">
              <InlineIconCard src="/images/consultant.svg" alt="consultant" title="Fördermittelkonforme Dienstleister & Berater" />
              <InlineIconCard src="/images/development-partner.svg" alt="development-partner" title="Forschungs & Entwicklungs Partner" />
          </div>
          
          <div className="flex items-center gap-3 py-2">
            <Button size={"lg"}>Jetzt suchen</Button>
            <Button size={"lg"} variant={'outline'}>Netzwerk</Button>
          </div>
        </Box>
        <Box>
          <Image className='lg:mr-0 mr-auto ml-auto' src="/images/funding-invoice.png" alt="funding-invoice" width={500} height={500} />
        </Box>
      </Box>

      {/* Cards */}
      <Animated>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 bg-sky-50 gap-6 py-16 px-4 md:px-16">
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

      {/* Projects */}
      <Box section={true}>
        <Box>
          <h2 className="text-2xl font-bold">Projektpartnersuche</h2>
          <p className="text-lg mt-2 mb-6">
            Passend zu Förderbedingungen findet Finyou <b>autorisierte Dienstleister & Partner</b>, wie für Digitalisierung, Design, Marketing, F&E, Patentanmeldung..
          </p>
          <div className="flex items-center gap-3">
            <Button size={"lg"}>Partner suchen</Button>
            <Button size={"lg"}>Partnernetzwerk</Button>
          </div>
        </Box>
        <Box>
          <div className="flex gap-2">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col gap-1 text-center">
                <Image src={item.src} className='mx-auto' width={50} height={50} alt={item.alt} />
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className='text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </Box>
      </Box>

      {/* CTA */}
      <Box section={true} className="bg-sky-50">
        <h2 className="text-2xl py-1">
          Melde Dich jetzt für die <b>Alpha-Testphase</b> an oder bewirb Dich für unser <b>Alpha-Testphase</b>
        </h2>
        <div className="flex items-center lg:justify-end gap-5 lg:w-1/2 py-1">
          <Button size={"lg"} variant={'outline'}>Anmelden</Button>
          <Button size={"lg"}>Zum Netzwerk</Button>
        </div>
      </Box>
    </>
  );
}