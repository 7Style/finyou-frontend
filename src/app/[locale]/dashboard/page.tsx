'use client'
import React, { useState } from 'react'
import { Calender, CheckList, Clock, EuroCoin, Overview, Percent, Loan, PiggyCoin } from '@/icons/dashboard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FilterComponent from '@/modules/dashboard/filter-component'
import DynamicFilter from '@/modules/dashboard/filters/dynamic-filter'
import DataTable from '@/modules/dashboard/datatable'
import Projects from '@/modules/dashboard/projects'
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'

const projectsData = [
  {
    title: 'Transfer Bonus',
    badges: [
      {
        label: 'Marketing',
        active: true,
      },
      { label: 'Design' },
      { label: 'Coaching' },
    ],
    description:
      'Die erstmalige Anschaffung von IT-Hardware und Software zur digitalen Transformation von Arbeits-, Produktions- und Managementprozessen, zur Einführung oder Verbesserung der betrieblichen IT-Sicherheit, digitalisierungsbezogene Beratungs- und Qualifizierungsmaßnahmen.',
    statistics: [
      {
        value: '4,5%',
        icon: <Percent />,
      },
      {
        value: '500.000',
        icon: <EuroCoin />,
      },
      {
        value: '3J',
        icon: <Calender />,
      },
      {
        value: '10J',
        icon: <Clock />,
      },
    ],
    progress: 76,
    icon: <PiggyCoin />,
  },
  {
    title: 'Loan Card Title',
    badges: [{ label: 'Loan Badge' }, { label: 'Another Badge' }],
    description: 'Description for the loan card.',
    statistics: [
      {
        value: '2.5%',
        icon: <Percent />,
      },
      {
        value: '750.000',
        icon: <EuroCoin />,
      },
      {
        value: '5J',
        icon: <Calender />,
      },
      {
        value: '15J',
        icon: <Clock />,
      },
    ],
    progress: 50,
    icon: <Loan />,
  },
]

const companies: { id: number; name: string }[] = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  { id: 3, name: 'Company C' },
]

export default function Dashboard() {
  const [selectedCompany, setSelectedCompany] = useState(companies[0].id)

  const handleCompanyChange = (value: string): void => {
    setSelectedCompany(parseInt(value))
  }

  return (
    <>
      <Tabs defaultValue="overview" className="my-9">
        {/* Tabs */}
        <TabsList className="bg-transparent">
          <TabsTrigger
            value="overview"
            className="w-32 p-3 fill-gray-300 inline-flex items-center gap-3 data-[state=active]:text-cyan-800 data-[state=active]:fill-cyan-600 data-[state=active]:bg-sky-100"
          >
            <Overview />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="byproject"
            className="w-32 p-3 fill-gray-300 inline-flex items-center gap-3 data-[state=active]:text-cyan-800 data-[state=active]:fill-cyan-600 data-[state=active]:bg-sky-100"
          >
            <CheckList />
            By Project
          </TabsTrigger>
        </TabsList>

        {/* Tab content */}
        <TabsContent
          value="overview"
          className="p-3 rounded"
          style={{ boxShadow: '0px 8px 32px rgba(56, 71, 109, 0.14)' }}
        >
          <div className="px-3 pb-2">
            <FilterComponent />
            <DynamicFilter />
            <div className="my-4 w-48">
              <Select onValueChange={handleCompanyChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map(company => (
                    <SelectItem key={company.id} value={company.id.toString()}>
                      <div className="flex justify-between items-center w-full">{company.name}</div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DataTable />
        </TabsContent>

        <TabsContent
          value="byproject"
          className="p-3 rounded"
          style={{ boxShadow: '0px 8px 32px rgba(56, 71, 109, 0.14)' }}
        >
          <div className="px-3 pb-2">
            <FilterComponent />
            <DynamicFilter />
          </div>
          <Tabs
            defaultValue="transfer bonus"
            className="w-full md:flex"
            style={{ filter: 'drop-shadow(11.66px 11.66px 23.32px rgba(167, 167, 167, 0.15))' }}
          >
            <TabsList className="flex justify-start md:flex-col h-full bg-transparent">
              {projectsData.map((tab, index) => (
                <TabsTrigger key={index} value={tab.title.toLowerCase()} className="md:py-3 md:pl-3 md:pr-5 p-2">
                  <div className="fill-gray-400 p-2 rounded tab">{tab.icon}</div>
                </TabsTrigger>
              ))}
            </TabsList>

            {projectsData.map((tab, index) => (
              <TabsContent key={index} value={tab.title.toLowerCase()} className="w-full -mt-2 md:-ml-3 md:-mt-4">
                <Projects {...tab} />
              </TabsContent>
            ))}
          </Tabs>
        </TabsContent>
      </Tabs>
    </>
  )
}
