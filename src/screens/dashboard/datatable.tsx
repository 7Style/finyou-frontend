'use client'
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid';

import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import ProgressBar from '@/components/ProgressBar';
import { TbCoinEuroFilled } from "react-icons/tb";
import { Montserrat } from 'next/font/google'
import { Calender, Clock, EuroCoin, Share } from '@/icons/dashboard';
import GroupIcon from './group-icon';

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
});

const ShowMore = ({ count, onClick }: { count: number; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="mr-2 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
    >
        {count > 0 ? `+${count}` : '-'}
    </button>
);

const TagsCell = ({ tags }: { tags: string[] }) => {
    const initialDisplayCount = 2; // Initial number of tags to display
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTags = () => {
        if (isExpanded) {
            setDisplayCount(initialDisplayCount);
        } else {
            setDisplayCount(tags.length);
        }
        setIsExpanded(!isExpanded);
    };

    const visibleTags = tags.slice(0, displayCount);
    const hiddenCount = tags.length - displayCount;

    return (
        <div className="flex flex-wrap items-center gap-2 py-3">
            {visibleTags.map((tag, index) => (
                <Badge className="bg-blue-100 text-blue-800 border-blue-300" key={index}>{tag}</Badge>
            ))}
            {tags.length > initialDisplayCount && (
                <ShowMore count={isExpanded ? 0 : hiddenCount} onClick={toggleTags} />
            )}
        </div>
    );
};


const rows: GridRowsProp = [
    {
        image: 'images/avatar.png',
        grantName: 'Berliner Innovations',
        twitterHandle: '@digital_limited',
        probability: 'Very High',
        description: 'Beschäftigung von Uni...',
        maxAmount: '50.000',
        fundingRate: '50%',
        repaymentYears: '3J',
        loanTerm: '10J',
        progress: 70,
        tags: ['Design', 'Product', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'IT', 'Maintenance', 'Security', 'R&D']
    },
    {
        image: 'images/avatar.png',
        grantName: 'Berliner Innovations',
        twitterHandle: '@digital_limited',
        probability: 'Very High',
        description: 'Beschäftigung von Uni...',
        maxAmount: '50.000',
        fundingRate: '50%',
        repaymentYears: '3J',
        loanTerm: '10J',
        progress: 70,
        tags: ['Design', 'Product', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'IT', 'Maintenance', 'Security', 'R&D']
    },
    {
        image: 'images/avatar.png',
        grantName: 'Berliner Innovations',
        twitterHandle: '@digital_limited',
        probability: 'Very High',
        description: 'Beschäftigung von Uni...',
        maxAmount: '50.000',
        fundingRate: '50%',
        repaymentYears: '3J',
        loanTerm: '10J',
        progress: 70,
        tags: ['Design', 'Product', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'IT', 'Maintenance', 'Security', 'R&D']
    },
    {
        image: 'images/avatar.png',
        grantName: 'Berliner Innovations',
        twitterHandle: '@digital_limited',
        probability: 'Very High',
        description: 'Beschäftigung von Uni...',
        maxAmount: '50.000',
        fundingRate: '50%',
        repaymentYears: '3J',
        loanTerm: '10J',
        progress: 70,
        tags: ['Design', 'Product', 'Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'IT', 'Maintenance', 'Security', 'R&D']
    },
];

const columns: GridColDef[] = [
    {
        field: 'grantName',
        headerName: 'Grant/Offer name',
        headerClassName: `${montserrat.className} text-sm`,
        minWidth: 200,
        flex: 1,
        renderCell(props) {
            return <div className="flex items-center gap-2 py-3">
                <input type="checkbox" className="form-checkbox" />
                <Image loader={() => props.row.image} src={props.row.image} width={32} height={32} className='rounded-full' alt={props.row.grantName} />
                <div>
                    <div className="text-xs font-medium text-gray-900">{props.row.grantName}</div>
                    <div className="text-xs text-gray-500">{props.row.twitterHandle}</div>
                </div>
            </div>
        },
    },
    {
        field: 'probability',
        headerName: 'Probability',
        headerClassName: `${montserrat.className} text-sm`,
        flex: 1,
        minWidth: 130,
        renderCell(props) {
            return <Badge className="bg-green-100 text-green-800 border-green-300">{props.row.probability}</Badge>
        }
    },
    {
        field: 'description',
        headerName: 'Description',
        headerClassName: `${montserrat.className} text-sm`,
        minWidth: 180,
        flex: 1,
        renderCell(props) {
            return <div className='py-3'>
                <div className="text-xs font-medium text-gray-900 leading-5">{props.row.description}</div>
                {
                    props.row.progress && (
                        <ProgressBar containerClassName='dark:bg-amber-700' progressBarClassName="bg-amber-400" progress={props.row.progress} />
                    )
                }
            </div>
        }
    },
    {
        field: 'maxAmount',
        headerName: 'Max Amount',
        headerClassName: `${montserrat.className} text-sm`,
        flex: 1,
        minWidth: 130,
        renderCell(props) {
            return <div className="flex items-center gap-1">
                <EuroCoin />
                {props.row.maxAmount}
            </div>
        }
    },
    {
        field: 'fundingRate',
        headerName: 'Funding Rate',
        headerClassName: `${montserrat.className} text-sm`,
        flex: 1,
        minWidth: 130,
        renderCell(props) {
            return <div className="flex items-center gap-1">
                <Share />
                {props.row.fundingRate}
            </div>
        }
    },
    {
        field: 'repaymentYears',
        headerName: 'Repayment Years',
        headerClassName: `${montserrat.className} text-sm`,
        flex: 1,
        minWidth: 130,
        renderCell(props) {
            return <div className="flex items-center gap-1">
                <Calender />
                {props.row.repaymentYears}
            </div>
        }
    },
    {
        field: 'loanTerm',
        headerName: 'Loan Term',
        headerClassName: `${montserrat.className} text-sm`,
        flex: 1,
        minWidth: 130,
        renderCell(props) {
            return <div className="flex items-center gap-1">
                <Clock />
                {props.row.loanTerm}
            </div>
        }
    },
    {
        field: 'tags',
        headerName: 'Tags',
        headerClassName: `${montserrat.className} text-sm`,
        minWidth: 200,
        flex: 1,
        renderCell(props) {
            return <TagsCell tags={props.row.tags} />
        }
    },
    {
        field: 'action',
        headerName: 'Action',
        headerClassName: `${montserrat.className} text-sm`,
        flex: 1,
        minWidth: 130,
        renderCell() {
            return (
                <GroupIcon />
            );
        }
    }
];

export default function DataTable() {
    return <div className="w-full">
        <DataGrid rows={rows} columns={columns} autoHeight getRowHeight={() => 'auto'} getRowId={() => uuidv4()}
            getRowClassName={() => `fill-cyan-600`}
            sx={{
                '&.MuiDataGrid-root': {
                    border: 'none !important',
                    '.MuiDataGrid-columnHeader': {
                        backgroundColor: '#F9FAFB',
                        borderRight: '1px solid #EAECF0',
                        '&:last-child': {
                            borderRight: 'none',
                        },
                    },
                    '.MuiDataGrid-cell': {
                        borderRight: '1px solid #E5E7EB',
                        '&:nth-last-child(2)': {
                            borderRight: 'none',
                        },
                    },
                },
            }}
        />
    </div>
}