import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { BookMark, RightChevon } from '@/icons/dashboard';

interface ICard {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export const ProfileCard: React.FC = () => {
  return (
    <Card className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <CardContent className='flex gap-5 px-6 py-3'>
        <Avatar className='mx-auto mt-0.5 rounded-md h-12 w-12'>
          <AvatarImage src='https://via.placeholder.com/65x65' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className='flex flex-col w-full'>
          <div className='title'>
            <h4 className='text-sm font-semibold leading-4'>
              Alexander Audrey
            </h4>
            <p className='text-xs'>Team lead at Google</p>
          </div>
          <div className='flex justify-between items-center'>
            <Button
              variant='link'
              size={'xs'}
              className='p-0 text-cyan-600 fill-cyan-600'
            >
              Rexell <RightChevon />
            </Button>
            <p className='text-xs text-gray-400'>Yesterday, 14:30</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const ImageCard: React.FC<ICard> = ({ src, alt, title, description }) => {
  return (
    <Card className='text-center p-3 pb-0 rounded-lg border-0 max-w-96 shadow-[0_35px_40px_-15px_rgba(0,0,0,0.1)]'>
      <Avatar className='mx-auto h-28 w-28 z-0'>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <CardHeader className='py-2'>
        <CardTitle className='text-xl font-bold leading-6'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-base leading-8'>{description}</p>
      </CardContent>
    </Card>
  );
}

export const InlineImageCard: React.FC<ICard> = ({ src, alt, title }) => {
  return (
    <div className='w-72 flex items-center gap-3'>
      <Image src={src} alt={alt} width={58} height={58} />
      <p className='text-base font-semibold'>{title}</p>
    </div>
  );
}

export const ProfileBadge: React.FC = () => {
  return (
    <div className='px-5 py-2 bg-cyan-600 rounded-3xl justify-start items-center gap-2 inline-flex'>
      <Avatar className='mx-auto h-8 w-8'>
        <AvatarImage src='https://via.placeholder.com/52x52' />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className='relative'>
        <div className='text-white text-xs font-normal leading-3'>
          John Micheal Monarch
        </div>
        <div className='text-cyan-100 text-[10px] font-normal'>
          Chief Executive Officer
        </div>
      </div>
    </div>
  );
}

export const CompanyOverview: React.FC = () => {
  return (
    <Card className='relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <Image
        src='/images/company-profile.png'
        alt='Company Overview'
        width={300}
        height={300}
      />
      <CardHeader className='p-4 pb-1'>
        <CardTitle className='font-semibold text-base leading-3'>
          Incari CMS
        </CardTitle>
        <CardDescription className='mt-0'>Product</CardDescription>
      </CardHeader>
      <CardContent className='p-4 pt-1'>
        <p className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Typesetting, remaining essentially unchanged.
        </p>
      </CardContent>
    </Card>
  );
}

export const JobCard: React.FC = () => {
  return (
    <Card className='relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <CardHeader className='p-4 pb-1'>
        <Avatar className='mb-3 -mt-12 rounded-md h-16 w-16'>
          <AvatarImage src='https://via.placeholder.com/65x65' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Button className='bg-transparent absolute right-0 top-0 hover:bg-transparent fill-cyan-700'>
          <BookMark />
        </Button>
        <CardTitle className='font-semibold text-base'>
          Marketing Officer (MO)
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4 pt-1'>
        <p className='text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Typesetting, remaining essentially unchanged.
        </p>
      </CardContent>
      <CardFooter className='p-4 pt-0'>
        <p className='text-xs'>2 Days ago</p>
      </CardFooter>
    </Card>
  );
}

export const StatCard: React.FC = () => {
  return (
    <Card className='flex items-center justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <CardHeader>
        <CardTitle className='text-sm font-semibold'>
          Total Grant Amount
        </CardTitle>
        <CardDescription className='text-sm font-bold text-cyan-600'>
          € 15M
        </CardDescription>
      </CardHeader>
      <CardContent className='fill-cyan-600'>
        <RightChevon />
      </CardContent>
    </Card>
  );
}
