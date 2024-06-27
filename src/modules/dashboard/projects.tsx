import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CalenderCheck, PeopleGroup, Signal, SpeedoMeter } from '@/icons/dashboard'
import GroupIcon from './group-icon'
import ProgressBar from '@/components/progress-bar'

interface BadgeProps {
  label: string
  active?: boolean
}

interface StatisticProps {
  icon: JSX.Element
  value: string | number
}

interface ProjectProps {
  title: string
  badges: BadgeProps[]
  description: string
  statistics?: StatisticProps[]
  progress?: number
}

export default function Projects({ title, badges, description, statistics, progress }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg p-5 fill-cyan-600">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h5 className="text-neutral-800 text-2xl font-bold leading-normal">{title}</h5>
          <GroupIcon />
        </div>
        <div className="flex pt-1 pb-3 space-x-2 my-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className={`px-3 md:px-6 ${badge.active ? 'bg-cyan-600 text-white' : 'bg-sky-200 text-dark'}`}
            >
              {badge.label}
            </Badge>
          ))}
        </div>
        <p className="text-sm leading-snug">{description}</p>
      </div>
      <div className="flex items-center justify-between py-2">
        {statistics && (
          <div className="flex items-center">
            {statistics.map((statistic, index) => (
              <p key={index} className="flex items-center gap-1 text-xs text-gray-800 mr-4">
                <span className="fill-cyan-500">{statistic.icon}</span>
                {statistic.value}
              </p>
            ))}
          </div>
        )}
        {progress && (
          <div className="hidden md:block w-40">
            <ProgressBar
              containerClassName="dark:bg-amber-700"
              progressBarClassName="bg-amber-400"
              progress={progress}
            />
          </div>
        )}
        <div className="hidden md:flex items-center gap-2">
          <PeopleGroup />
          <CalenderCheck />
          <Signal />
          <SpeedoMeter />
        </div>
      </div>
    </div>
  )
}
