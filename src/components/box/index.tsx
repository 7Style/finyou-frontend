import React from 'react'
import Animated from '@/components/animation'

interface IBox extends React.HTMLAttributes<HTMLElement> {
  section?: boolean
}

const Box: React.FC<IBox> = ({ children, className, section, ...props }) => {
  const defaultClasses = section
    ? 'w-full relative flex flex-col lg:flex-row items-center gap-5 py-16 px-4 md:px-12 max-w-screen-2xl mx-auto'
    : 'w-full lg:w-1/2 py-6 relative'

  const combinedClassName = `${defaultClasses} ${className}`

  const SectionComponent = section ? Animated : React.Fragment

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
  )
}

export default Box
