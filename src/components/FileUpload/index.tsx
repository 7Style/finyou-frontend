import { Download } from '@/icons/dashboard'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function FileUpload() {
    return (
        <div className="relative w-full h-72 rounded-lg border-dashed border-2 border-teal-400 flex justify-center items-center hover:cursor-pointer">
            <div className="absolute">
                <div className="flex flex-col items-center gap-3">
                    <span className='block fill-gray-400'><Download /></span>
                    <span className="block text-gray-400 font-normal">Drag & drop files here</span>
                    <span className="block text-gray-600 font-bold">OR</span>

                    <Button className="text-base px-12 py-6 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full">Browse Files</Button>

                </div>
            </div> <input type="file" className="h-full w-full opacity-0" name="" />
        </div>
    )
}