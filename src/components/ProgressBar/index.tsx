import React from 'react';
import classNames from 'classnames';

interface ProgressBarProps {
  progress: number;
  containerClassName?: string; // Custom class for the container
  progressBarClassName?: string; // Custom class for the progress bar
}

export default function ProgressBar({ progress, containerClassName, progressBarClassName }: ProgressBarProps) {
    const containerClasses = classNames(
        'w-full',
        'rounded-full',
        'h-1.5',
        'bg-gray-100',
        containerClassName // Add the custom class here
    );
    const progressBarClasses = classNames(
        'h-1.5',
        'rounded-full',
        progressBarClassName // Add the custom class here
    );
  
    return (
      <div className="flex items-center gap-2">
        <div className="text-xs text-gray-600">{`${progress}%`}</div>
          <div className={containerClasses}>
            <div className={progressBarClasses} style={{ width: `${progress}%` }}></div>
          </div>
      </div>
    );
}
