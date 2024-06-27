import Image from 'next/image';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Puzzle, RightChevon, Tick } from '@/icons/dashboard';
import { JobCard, ProfileCard, Skills } from '@/components/common/cards';
import Link from 'next/link';


export default function Profile() {

    return (
        <>
            <div className="flex flex-wrap gap-20 items-start justify-between max-w-screen-xl mx-auto py-20">
                <div className="w-8/12 space-y-8">
                    <div className="space-y-4">
                        <h4 className='text-xl font-semibold'>Expert in:</h4>
                        <div className="flex flex-wrap lg:gap-10 gap-4 items-center">
                            <div className="flex gap-3">
                                <Tick />
                                <p className='text-neutral-900 text-xs'>UX/UI designing</p>
                            </div>
                            <div className="flex gap-3">
                                <Puzzle />
                                <p className='text-neutral-900 text-xs'>Highly Skill Business Expert</p>
                            </div>
                            <div className="flex gap-3">
                                <Puzzle />
                                <p className='text-neutral-900 text-xs'>Expert Skill Designer</p>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-4">
                        <h4 className='text-xl font-semibold'>About me</h4>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className='text-xl font-semibold'>Skills</h4>
                        <div className="flex gap-3 flex-wrap">
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Communication</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Marketing</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Sales</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Fast Response</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Positive Response</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Software Development</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Fintech</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Education</Badge>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className='text-xl font-semibold'>Experience</h4>

                            <div className="flex gap-2">
                                <div className="fill-cyan-500 rotate-180"><RightChevon /></div>
                                <div className="fill-cyan-500"><RightChevon /></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-3">
                            <JobCard />
                            <JobCard />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className='text-xl font-semibold'>Education</h4>
                        <div className="grid grid-cols-2 gap-4 pt-3">
                            <JobCard />
                            <JobCard />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className='text-xl font-semibold'>Skills & Accomplishments</h4>

                            <div className="flex gap-2">
                                <div className="fill-cyan-500 rotate-180"><RightChevon /></div>
                                <div className="fill-cyan-500"><RightChevon /></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-3">
                            <Skills />
                            <Skills />
                        </div>

                        
                        <div className="flex justify-center">
                            <Link href={"#"} className='text-sm font-poppins text-cyan-500 font-semibold'>Show All (17)</Link>
                        </div>
                    </div>



                    <div className="space-y-4">
                        <h4 className='text-xl font-semibold'>Network Connections</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                        </div>
                    </div>



                    <div className="space-y-4">
                        <h4 className='text-xl font-semibold'>Individual Area</h4>
                        <div className="flex gap-3 flex-wrap">
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Communication</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Marketing</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Sales</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Fast Response</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Positive Response</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Software Development</Badge>
                        </div>
                    </div>
                </div>

                <div className='w-3/12 ml-auto space-y-8'>
                    <div className="space-y-4">
                        <h5 className='text-base font-semibold'>Similar Companies</h5>
                        <div className="flex gap-5 flex-wrap justify-between">
                            <div>
                                <Image src="/images/companies/fixe.png" alt='fixe' width={36} height={20} />
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-xs font-semibold">Fixe</h5>
                                <p className="text-xs">Tecnologia da informação e serviços</p>
                            </div>
                        </div>

                        <div className="flex gap-5 flex-wrap">
                            <div>
                                <Image src="/images/companies/exist.png" alt='fixe' width={36} height={20} />
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-xs font-semibold">Exist</h5>
                                <p className="text-xs">Tecnologia da informação e serviços</p>
                            </div>
                        </div>

                        <div className="flex gap-5 flex-wrap">
                            <div>
                                <Image src="/images/companies/konux.png" alt='fixe' width={36} height={20} />
                            </div>
                            <div className="w-2/3">
                                <h5 className="text-xs font-semibold">Konux</h5>
                                <p className="text-xs">Tecnologia da informação e serviços</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Link href={"#"} className='text-sm font-poppins text-cyan-500 font-semibold'>Find More</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h5 className='text-base font-semibold'>Tags</h5>
                        <div className="flex gap-3 flex-wrap">
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Ui/Ux</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Automotive</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Software</Badge>
                            <Badge className='px-4 py-2 bg-sky-200 text-dark font-medium'>Automotive</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
