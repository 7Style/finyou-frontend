"use client"

import * as React from "react"
import { signOut } from "next-auth/react"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Image from "next/image"
import { Caret, Fordermittel, Bot, Partner, Unternehmen } from "@/icons/dashboard"
import { Hamburger } from "@/icons/dashboard/header"


interface SubMenuItem {
    label: string;
    shortcut?: string;
    disabled?: boolean;
    topSeprator?: boolean;
    bottomSeprator?: boolean;
    subMenu?: SubMenuItem[];
}

interface NotificationItem {
    message: string;
    time: string;
    image: string;
}

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    shortcut?: string;
    disabled?: boolean;
    notification?: NotificationItem[];
    subMenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
    {
        label: 'Fördermittel',
        icon: <Fordermittel />,
        subMenu: [
            { label: 'New Tab', shortcut: '⌘T' },
            { label: 'New Window', shortcut: '⌘N' },
            { label: 'New Incognito Window', disabled: true },
            {
                label: 'Share',
                topSeprator: true,
                bottomSeprator: true,
                subMenu: [
                    { label: 'Email link' },
                    { label: 'Messages' },
                    { label: 'Notes' }
                ]
            },
            { label: 'Print...', shortcut: '⌘P' }
        ]
    },
    {
        label: 'Partner',
        icon: <Partner />,
        subMenu: [
            { label: 'Undo', shortcut: '⌘Z' },
            { label: 'Redo', shortcut: '⇧⌘Z' },
            {
                label: 'Find',
                topSeprator: true,
                bottomSeprator: true,
                subMenu: [
                    { label: 'Search the web' },
                    { label: 'Find...' },
                    { label: 'Find Next' },
                    { label: 'Find Previous' }
                ]
            },
            { label: 'Cut' },
            { label: 'Copy' },
            { label: 'Paste' }
        ]
    },
    {
        label: 'Mitteilungen',
        icon: <Bot />,
        notification: [
            {
                image: "https://readymadeui.com/profile_2.webp",
                message: "Hello there, check tahis new items in from the your may interested from the motion school",
                time: "10 minutes ago"
            },
            {
                image: "https://readymadeui.com/profile_2.webp",
                message: "Hello there, check tahis new items in from the your may interested from the motion school",
                time: "10 minutes ago"
            },
            {
                image: "https://readymadeui.com/profile_2.webp",
                message: "Hello there, check tahis new items in from the your may interested from the motion school",
                time: "10 minutes ago"
            }
        ]
    },
    {
        label: 'Unternehmen',
        icon: <Unternehmen />,
        subMenu: [
            { label: 'Undo', shortcut: '⌘Z' },
            { label: 'Redo', shortcut: '⇧⌘Z' },
            {
                label: 'Find',
                topSeprator: true,
                bottomSeprator: true,
                subMenu: [
                    { label: 'Search the web' },
                    { label: 'Find...' },
                    { label: 'Find Next' },
                    { label: 'Find Previous' }
                ]
            },
            { label: 'Cut' },
            { label: 'Copy' },
            { label: 'Paste' }
        ]
    }
];

function renderNotification(notification: NotificationItem[]) {
    return (
        <ScrollArea className="h-72 w-80">
            <div className="flex items-center justify-between py-3 px-4">
                <p className="text-xs text-cyan-600 cursor-pointer">Clear all</p>
                <p className="text-xs text-cyan-600 cursor-pointer">Mark as read</p>
            </div>
            <Separator />
            <ul>
                {
                    notification.map((item, index) => (
                        <div key={index}>
                            <li className='py-2 px-4 flex items-start hover:bg-gray-50 text-black text-sm cursor-pointer'>
                                <Avatar>
                                    <AvatarImage src={item.image} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="ml-6">
                                    <p className="text-xs text-gray-400">{item.message}</p>
                                    <p className="text-xs text-cyan-600 leading-3 mt-2">{item.time}</p>
                                </div>
                            </li>
                            <Separator />
                        </div>
                    ))
                }
            </ul>
            <p className="w-full text-center text-xs text-gray-500 py-3 px-4 inline-block">No new notifications</p>
        </ScrollArea>
    )
}

function renderSubMenu(subMenu: SubMenuItem[]) {
    return subMenu.map((item, index) => {
        if (item.subMenu) {
            return (
                <div key={index}>
                    {item.topSeprator && <MenubarSeparator />}
                    <MenubarSub>
                        <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
                        <MenubarSubContent>
                            {renderSubMenu(item.subMenu)}
                        </MenubarSubContent>
                    </MenubarSub>
                    {item.bottomSeprator && <MenubarSeparator />}
                </div>
            );
        } else {
            return (
                <div key={index}>
                    {item.topSeprator && <MenubarSeparator />}
                    <MenubarItem disabled={item.disabled}>
                        {item.label} {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
                    </MenubarItem>
                    {item.bottomSeprator && <MenubarSeparator />}
                </div>
            );
        }
    });
}

function renderMenuItems(menuItems: MenuItem[]) {
    return menuItems.map((menuItem, index) => (
        <MenubarMenu key={index}>
            <MenubarTrigger className="text-gray-700 fill-gray-400 data-[state=open]:bg-transparent focus:bg-transparent data-[state=open]:text-cyan-600 data-[state=open]:fill-cyan-600 hover:fill-cyan-600 hover:text-cyan-600">
                <div className="flex flex-col items-center gap-2">
                    {menuItem.icon}
                    {menuItem.label}
                </div>
            </MenubarTrigger>
            <MenubarContent>
                {menuItem.subMenu && renderSubMenu(menuItem.subMenu)}
                {menuItem.notification && renderNotification(menuItem.notification)}
            </MenubarContent>
        </MenubarMenu>
    ));
}

function Navigation() {
    return (
        <>
            <Menubar className="hidden md:flex border-0">
                {renderMenuItems(menuItems)}
                <MenubarMenu>
                    <MenubarTrigger className="text-gray-700 fill-gray-400 data-[state=open]:bg-transparent focus:bg-transparent data-[state=open]:text-cyan-600 data-[state=open]:fill-cyan-600 hover:fill-cyan-600 hover:text-cyan-600">
                        <div className="flex flex-col items-center gap-2">
                            <Avatar className="w-5 h-5">
                                <AvatarImage src="https://readymadeui.com/profile_2.webp" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <span className="flex gap-1 items-center text-xs text-gray-700">
                                Sie <Caret />
                            </span>
                        </div>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            Profile <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Billing <MenubarShortcut>⇧⌘B</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            Settings <MenubarShortcut>⌘S</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Team
                        </MenubarItem>
                        <MenubarSub>
                            <MenubarSubTrigger>Invite User</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Email</MenubarItem>
                                <MenubarItem>Message</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>More...</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                        <MenubarSeparator />
                        <MenubarItem>New Team</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Github</MenubarItem>
                        <MenubarItem>Support</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => signOut()}>Logout</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <div className="block md:hidden">
                <Sheet>
                    <SheetTrigger className="fill-dark">
                        <Hamburger />
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default function DashboardHeader() {
    return (
        <header className="flex items-center justify-between py-4">
            <Image src="/images/logo.svg" width={120} height={30} alt="logo" />
            <Navigation />
        </header>
    )
}