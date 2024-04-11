'use client'
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { motion } from "framer-motion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, ChatBot, Bot, DotsHorizontal, FinyouIcon, ThumbsUp, Copy } from '@/icons/dashboard';

interface ChatWindowProps {
    messages: Array<{ text: string; isReply: boolean }>;
}

interface ChatFormData {
    message: string;
}


function ChatWindow({ messages }: ChatWindowProps) {
    const handleLike = (index: number) => {
        // Implement logic for handling like action
        console.log('Liked message at index:', index);
    };

    const handleDislike = (index: number) => {
        // Implement logic for handling dislike action
        console.log('Disliked message at index:', index);
    };

    const handleCopy = (text: string) => {
        // Implement logic for handling copy action
        console.log('Copied text:', text);
    };
    return (
        <ScrollArea className="h-96">
            {messages.map((msg, index) => (
                <motion.div
                initial={{
                  opacity: 0,
                  translateY: "100%",
                }}
                animate={{ opacity: 1, translateY: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, translateY: 0 }} key={index}>
                    <div className={`flex gap-2 px-2 items-center ${msg.isReply ? 'justify-start py-2' : 'justify-end py-3' }`}>
                        {
                            !msg.isReply && (
                                <div className='w-7 h-7 p-1 fill-gray-700 rounded-full bg-teal-600 inline-flex items-center justify-center'>
                                    <Bot />
                                </div>
                            )
                        }
                        <div className={`${msg.isReply ? 'bg-gray-100 text-dark' : 'bg-cyan-600 text-white'} rounded-tl-lg rounded-tr-lg rounded-bl-lg p-3 text-xs font-medium leading-sung`}>
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {msg.text}
                        </Markdown>
                        </div>
                        {
                            msg.isReply && (
                                <Avatar className='w-7 h-7 text-sm'>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            )
                        }
                    </div>
                    {
                        msg.isReply && (
                            <div className='flex items-center gap-4 px-3 pb-3 opacity-60'>
                                <button type='button' onClick={() => handleLike(index)}>
                                    <ThumbsUp />
                                </button>
                                <button type='button' className='rotate-180' onClick={() => handleDislike(index)}>
                                    <ThumbsUp />
                                </button>
                                <button type='button' className='flex items-center gap-1 text-xs ml-2' onClick={() => handleCopy(msg.text)}>
                                    <Copy /> Copy
                                </button>
                            </div>
                        )
                    }
                </motion.div>
            ))}
        </ScrollArea>
    );
};


export default function Chat() {
    const messageSchema = z.string().nonempty();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ChatFormData>();
    const [showChatOption, setShowChatOption] = useState(false);


    // Dummy data for messages
    const [messages, setMessages] = useState<Array<{ text: string; isReply: boolean }>>([
        { text: "Why is the sky blue?", isReply: false },
    ]);

    
    const fetchData = async () => {
        // Fetch the original image
        const response = await fetch("http://10.10.1.86:8080/ai/chat?question=Förderprogramme&streaming=1");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const reader = response.body?.getReader();
        if (!reader) {
            throw new Error("Failed to get reader");
        }

        const decoder = new TextDecoder("utf-8");
        const maxIterations = 1000; // Limit the number of iterations
        let iterationCount = 0;
        let buffer = '';

        const jsonRegex = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})*}/g;
        let match;
        while (true) {
            const { done, value } = await reader.read();
            if (done || iterationCount >= maxIterations) break;
            const val = decoder.decode(value);
            
            // Concatenate the received data to buffer
            while ((match = jsonRegex.exec(buffer)) !== null) {
                try {
                    const jsonData = JSON.parse(match[0]);
                    if ("prompt" in jsonData) {
                        setMessages(prevMessages => [
                            ...prevMessages,
                            { text: jsonData.prompt, isReply: true }
                        ]);
                    }
    
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            }

            buffer += val;
            iterationCount++;            
        }



        // Close the stream after a certain time or number of iterations
        reader.cancel();

    };


    const toggleChatOption = () => {
        setShowChatOption(!showChatOption);
    };

    // Function to handle form submission
    const onSubmit = async (data: ChatFormData) => {
        try {
            const validatedMessage = messageSchema.parse(data.message);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: validatedMessage, isReply: false }
            ]);
            setValue('message', ''); // Clear input field
            await fetchData();
        } catch (error) {
            console.error('Validation error:', error);
        }
    };

    return (
        <>
            <div className={`h-[550px] w-96 ease-in-out duration-300 fixed bottom-0 ${showChatOption ? '-right-0' : '-right-full'} bg-white shadow rounded-tl-xl rounded-tr-xl p-4`}>
                <div className="relative h-full">
                    <div className="flex items-center justify-between">
                        <Button variant={'outline'} className='rounded-full p-2 w-8 h-8' onClick={toggleChatOption}>
                            <ArrowRight />
                        </Button>
                        <div className="flex gap-2">
                            <FinyouIcon />
                            <div>
                                <h5 className="text-neutral-800 text-xs font-bold leading-tight">Fin AI</h5>
                                <p className="text-zinc-500 text-[10px] font-medium inline-flex items-center gap-1">
                                    <span className='w-1 h-1 bg-green-400 rounded-full'></span>
                                    Always active
                                </p>
                            </div>
                        </div>
                        <Button variant={'outline'} className='rounded-full p-2 w-8 h-8'>
                            <DotsHorizontal />
                        </Button>
                    </div>

                    <div className='w-full absolute bottom-1 overflow-y-auto'>
                        <ChatWindow messages={messages} />

                        <form className='py-3' onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <Input className='h-11' {...register('message', { required: 'Message is required' })} />
                                <Button size={"sm"} className="absolute end-1 bottom-1 bg-cyan-700 hover:bg-cyan-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                        <path d="M19.2273 2.63281L9.93018 11.9299" stroke="white" strokeWidth="1.01423" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.2276 2.63281L13.3112 19.5367L9.93047 11.9299L2.32373 8.54916L19.2276 2.63281Z" stroke="white" strokeWidth="1.01423" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                            {errors.message && <p className="text-red-500 pt-1 text-xs">{errors.message.message}</p>}
                        </form>
                    </div>
                </div>
            </div>

            <div className={`fixed bottom-10 cursor-pointer right-10 bg-cyan-700 fill-white rounded-full p-2 ${showChatOption ? 'hidden' : 'block'}`} onClick={toggleChatOption}>
                <ChatBot />
            </div>
        </>
    );
};