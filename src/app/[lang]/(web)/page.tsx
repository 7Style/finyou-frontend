import * as React from 'react';
import TextFieldWithTooltip, { TextFieldWithoutTooltip } from '@/components/TextField';
import Switch from '@/components/Switch';
import Slider from '@/components/Slider';
import RadioButtons from '@/components/Radio';
import FilterDropdown from '@/components/FilterDropdown';
import IndividualCard, { IconCard, CompanyOverview, JobCard, ProfileTag, ProfileCard, NumberCard } from '@/components/CustomCard';
import List from '@/components/List';
import FileUpload from '@/components/FileUpload';
import { Modal } from '@/components/Modal';


export default function Home() {
  return (
    <div>
    <div className='bg-neutral-100 mt-10 mb-2 p-5'>
      <div className="flex flex-wrap gap-6">
        <div className="w-[280px]">
          <IndividualCard />
        </div>
        <div className="w-[280px]">
          <JobCard />
        </div>
        <div className="w-[280px]">
          <CompanyOverview />
        </div>
        <div className="w-[380px]">
          <IconCard />
        </div>
        <div className="w-[216px]">
          <ProfileTag />
        </div>
        <div className='w-[390px]'>
          <ProfileCard />
        </div>
        <div className="w-[190px]">
          <NumberCard />
        </div>
      </div>
    </div>
    
    <div className='bg-neutral-100 mt-10 mb-2 p-5'>
      <div className="flex flex-wrap gap-6">
        <div className="w-[305px]">
          <List />
        </div>
      </div>
    </div>
    

    <div className='bg-neutral-100 mt-10 mb-2 p-5'>
      <div className="flex flex-wrap gap-6">
        <div className="w-[805px]">
            <FileUpload />
        </div>
      </div>
    </div>
    
    <div className='bg-neutral-100 mt-10 mb-2 p-5'>
      <div className="flex flex-wrap gap-6">
        <div className="w-[805px]">
            <Modal />
        </div>
      </div>
    </div>
    

      <div className='bg-neutral-100 my-2 p-2'>
        <div className="py-4 flex items-center justify-around gap-4">
          <FilterDropdown isMultiSelect={true} />
          <FilterDropdown />
        </div>

        <div className="py-4 flex items-center justify-around gap-4">
          <TextFieldWithTooltip />

          <TextFieldWithoutTooltip />
        </div>

      </div>

  


      
    <div className='bg-neutral-100 my-2 p-2'>
      <div className="py-4 flex items-center justify-around gap-4">
            <Switch />
            {/* <Checkbox
              label="Default checkbox"
              checked={false}
              onChange={() => {
                // Handle checkbox state change here
                console.log(`Checkbox is checked`);
              }}
            /> */}
            <RadioButtons options={{ value: 'option1', label: 'Option 1' }} />
      </div>
    </div>

    
    <div className='bg-neutral-100 my-2 p-5'>
      <div className="py-4 flex gap-3 items-center justify-around">
        <Slider
          min={0}
          max={100}
          step={5}
          initialValues={[10, 90]}
          showTooltip={false}
        />

        <Slider
          min={0}
          max={100}
          step={5}
          initialValues={[10, 90]}
          showTooltip={true}
          tooltipPosition="bottom"
          includeTooltipBg={false}
        />

        <Slider
          min={0}
          max={100}
          step={5}
          initialValues={[10, 90]}
          showTooltip={true}
        />

        <Slider
          min={0}
          max={100}
          step={5}
          initialValues={[10, 90]}
          showTooltip={true}
          tooltipPosition="bottom"
        />
      </div>
    </div>
    </div>
  );
}