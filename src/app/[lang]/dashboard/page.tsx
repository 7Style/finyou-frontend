'use client'
import React from 'react';
import { Calender, CheckList, Clock, EuroCoin, Overview, Percent, Loan, PiggyCoin } from '@/icons/dashboard';
import FilterComponent from '@/screens/dashboard/filter-component';
import DynamicFilter from '@/screens/dashboard/filters/dynamic-filter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Chat from '@/components/Chat';
import Projects from '@/screens/dashboard/projects';
import DataTable from '@/screens/dashboard/datatable';




export default function Dashboard() {
  // Usage example
  const projectsData = [
    {
      title: "Transfer Bonus",
      badges: [
        { label: "Marketing", active: true },
        { label: "Design" },
        { label: "Coaching" },
      ],
      description: "Die erstmalige Anschaffung von IT-Hardware und Software zur digitalen Transformation von Arbeits-, Produktions- und Managementprozessen, zur Einführung oder Verbesserung der betrieblichen IT-Sicherheit, digitalisierungsbezogene Beratungs- und Qualifizierungsmaßnahmen.",
      statistics: [
        { value: "4,5%", icon: <Percent /> },
        { value: "500.000", icon: <EuroCoin /> },
        { value: "3J", icon: <Calender /> },
        { value: "10J", icon: <Clock /> },
      ],
      progress: 76,
      icon: <PiggyCoin />
    },
    {
      title: "Loan Card Title",
      badges: [
        { label: "Loan Badge" },
        { label: "Another Badge" },
      ],
      description: "Description for the loan card.",
      statistics: [
        { value: "2.5%", icon: <Percent /> },
        { value: "750.000", icon: <EuroCoin /> },
        { value: "5J", icon: <Calender /> },
        { value: "15J", icon: <Clock /> },
      ],
      progress: 50,
      icon: <Loan />
    }
  ];

  return (
      <Tabs defaultValue="overview" className='my-9'>
        {/* Tabs */}
        <TabsList className='bg-transparent'>
          <TabsTrigger value="overview" className="w-32 p-3 fill-gray-300 inline-flex items-center gap-3 data-[state=active]:text-cyan-800 data-[state=active]:fill-cyan-600 data-[state=active]:bg-sky-100">
            <Overview />
            Overview
          </TabsTrigger>          
          <TabsTrigger value="byproject" className="w-32 p-3 fill-gray-300 inline-flex items-center gap-3 data-[state=active]:text-cyan-800 data-[state=active]:fill-cyan-600 data-[state=active]:bg-sky-100">
            <CheckList />
            By Project
          </TabsTrigger>
        </TabsList>

        {/* Tab content */}
        <TabsContent value="overview" className='p-3 rounded' style={{ boxShadow: '0px 8px 32px rgba(56, 71, 109, 0.14)' }}>
          <div className="px-3 pb-2">
            <FilterComponent />
            <DynamicFilter />
          </div>
          <DataTable />
        </TabsContent>
        <TabsContent value="byproject" className='p-3 rounded' style={{ boxShadow: '0px 8px 32px rgba(56, 71, 109, 0.14)' }}>
          <div className="px-3 pb-2">
            <FilterComponent />
            <DynamicFilter />
          </div>
          <Tabs defaultValue="transfer bonus" className="w-full md:flex" style={{ filter: 'drop-shadow(11.66px 11.66px 23.32px rgba(167, 167, 167, 0.15))' }}>
            <TabsList className="flex justify-start md:flex-col h-full bg-transparent">
              {projectsData.map((tab, index) => (
                <TabsTrigger key={index} value={tab.title.toLowerCase()} className="md:py-3 md:pl-3 md:pr-5 p-2">
                  <div className="fill-gray-400 p-2 rounded tab">
                    {tab.icon}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {projectsData.map((tab, index) => (
              <TabsContent key={index} value={tab.title.toLowerCase()} className="w-full md:-ml-3 md:-mt-0 -mt-4">
                <Projects {...tab} />
              </TabsContent>
            ))}
          </Tabs>

          <Chat />
        </TabsContent>
      </Tabs>
  )
}
