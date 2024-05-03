import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { BookMark, RightChevon } from '@/icons/dashboard'
import Image from 'next/image'

interface CardProps{
    src: string; 
    alt: string; 
    title: string; 
    description?: string;
}

export default function IndividualCard() {
    return (
        <Card className='text-center relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <CardHeader className='p-4 pb-1'>
                <Avatar className='mx-auto mb-3 -mt-12 h-16 w-16'>
                    <AvatarImage src='https://via.placeholder.com/52x52'></AvatarImage>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className='font-semibold text-base leading-3'>Darlene Black</CardTitle>
                <CardDescription className='mt-0'>Product Designer</CardDescription>
            </CardHeader>
            <CardContent className='p-4 pt-1'>
                <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Typesetting, remaining essentially unchanged.</p>
            </CardContent>
            <CardFooter className='p-4 pt-0 justify-center'>
                <Button variant="outline" size={'xs'} className='px-5 h-8 rounded-full text-cyan-600 border-cyan-600'>Message</Button>
            </CardFooter>
        </Card>
    )
}

export function JobCard() {
    return (
        <Card className='relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <CardHeader className='p-4 pb-1'>
                <Avatar className='mb-3 -mt-12 rounded-md h-16 w-16'>
                    <AvatarImage src='https://via.placeholder.com/65x65'></AvatarImage>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button className='bg-transparent absolute right-0 top-0 hover:bg-transparent fill-cyan-700'>
                    <BookMark />
                </Button>
                <CardTitle className='font-semibold text-base'>Marketing Officer (MO)</CardTitle>
            </CardHeader>
            <CardContent className='p-4 pt-1'>
                <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Typesetting, remaining essentially unchanged.</p>
            </CardContent>
            <CardFooter className='p-4 pt-0'>
                <p className='text-xs'>2 Days ago</p>
            </CardFooter>
        </Card>
    )
}


export function CompanyOverview() {
    return (
        <Card className='relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <Image src='/images/company-profile.png' alt='Company Overview' width={300} height={300} />
            <CardHeader className='p-4 pb-1'>
                <CardTitle className='font-semibold text-base leading-3'>Incari CMS</CardTitle>
                <CardDescription className='mt-0'>Product</CardDescription>
            </CardHeader>
            <CardContent className='p-4 pt-1'>
                <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Typesetting, remaining essentially unchanged.</p>
            </CardContent>
        </Card>
    )
}


export function IconCard({ src, alt, title, description }: CardProps) {
    return (
        <Card className='text-center pt-2 border-0'>
            <Avatar className='mx-auto h-28 w-28 z-0'>
                <AvatarImage src={src} alt={alt}></AvatarImage>
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <CardHeader className='pt-2 pb-0'>
                <CardTitle className='text-xl'>{title}</CardTitle>
            </CardHeader>   
            <CardContent>
                <p className='text-base'>{description}</p>
            </CardContent>
        </Card>
    )
}

export function InlineIconCard({ src, alt, title }: CardProps) {
    return (
        <div className="w-64 flex items-center gap-3">
            <Image src={src} alt={alt} width={50} height={50} />
            <p className="text-base font-semibold">{title}</p>
        </div>
    )
}

export function ProfileTag(){
    return(
        <div className="px-5 py-2 bg-cyan-600 rounded-3xl justify-start items-center gap-2 inline-flex">
        <Avatar className='mx-auto h-8 w-8'>
            <AvatarImage src='https://via.placeholder.com/52x52'></AvatarImage>
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="relative">
            <div className="text-white text-xs font-normal leading-3">John Micheal Monarch</div>
            <div className="text-cyan-100 text-[10px] font-normal">Chief Executive Officer</div>
        </div>
        </div>
    )
}


export function ProfileCard(){
    return (
        <Card className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <CardContent className='flex gap-5 px-6 py-3'>
                <Avatar className='mx-auto mt-0.5 rounded-md h-12 w-12'>
                    <AvatarImage src='https://via.placeholder.com/65x65'></AvatarImage>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full">
                    <div className="title">
                        <h4 className='text-sm font-semibold leading-4'>Alexander Audrey </h4>
                        <p className='text-xs'>Team lead at Google</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Button variant="link" size={'xs'} className='p-0 text-cyan-600 fill-cyan-600'>Rexell <RightChevon /></Button>  
                        <p className="text-xs text-gray-400">Yesterday, 14:30</p>
                    </div>
                </div>
            </CardContent>  
        </Card>
    )
}


export function NumberCard(){
    return (
        <Card className='flex items-center justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <CardHeader>
                <CardTitle className='text-sm font-semibold'>Total Grant Amount</CardTitle>
                <CardDescription className='text-sm font-bold text-cyan-600'>€ 15M</CardDescription>
            </CardHeader>
            <CardContent className='fill-cyan-600'>
                <RightChevon />
            </CardContent>  
        </Card>
    )
}