"use client";
import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import GroupIcon from "./group-icon";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "@/components/ProgressBar";
import { Calender, Clock, EuroCoin, Share } from "@/icons/dashboard";
import "./style.css";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

// Define the type for your row data
interface RowData {
  image: string;
  grantName: string;
  twitterHandle: string;
  probability: string;
  description: string;
  maxAmount: string;
  fundingRate: string;
  repaymentYears: string;
  loanTerm: string;
  progress: number;
  tags: string[];
  companyName: string;
}

// Define the type for custom cell rendering props
interface RenderCellProps {
  value: any;
  data: RowData;
}

export default function DataTable() {
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const [rowData, setRowData] = useState<RowData[]>([
    {
      image: "/images/avatar.png",
      grantName: "Aerliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "10.000",
      fundingRate: "70%",
      repaymentYears: "3J",
      loanTerm: "20J",
      progress: 0,
      tags: ["Sales", "HR", "Finance", "IT", "Maintenance", "Security", "R&D"],
    },
    {
      image: "/images/avatar.png",
      grantName: "Berliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "20.000",
      fundingRate: "10%",
      repaymentYears: "3J",
      loanTerm: "20J",
      progress: 80,
      tags: ["Design", "Maintenance", "Security", "R&D"],
    },
    {
      image: "/images/avatar.png",
      grantName: "Cerliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "100.000",
      fundingRate: "95%",
      repaymentYears: "3J",
      loanTerm: "100J",
      progress: 89,
      tags: ["Maintenance", "R&D"],
    },
    {
      image: "/images/avatar.png",
      grantName: "Derliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "50.000",
      fundingRate: "50%",
      repaymentYears: "3J",
      loanTerm: "10J",
      progress: 70,
      tags: [
        "Design",
        "Product",
        "Engineering",
        "Marketing",
        "Sales",
        "HR",
        "Finance",
        "IT",
        "Maintenance",
        "Security",
        "R&D",
      ],
    },
    {
      image: "/images/avatar.png",
      grantName: "Berliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "50.000",
      fundingRate: "50%",
      repaymentYears: "3J",
      loanTerm: "10J",
      progress: 70,
      tags: [
        "Design",
        "Product",
        "Engineering",
        "Marketing",
        "Sales",
        "HR",
        "Finance",
        "IT",
        "Maintenance",
        "Security",
        "R&D",
      ],
    },
    {
      image: "/images/avatar.png",
      grantName: "Berliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "50.000",
      fundingRate: "50%",
      repaymentYears: "3J",
      loanTerm: "10J",
      progress: 70,
      tags: [
        "Design",
        "Product",
        "Engineering",
        "Marketing",
        "Sales",
        "HR",
        "Finance",
        "IT",
        "Maintenance",
        "Security",
        "R&D",
      ],
    },
    {
      image: "/images/avatar.png",
      grantName: "Berliner Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Beschäftigung von Uni...",
      maxAmount: "24.000",
      fundingRate: "50%",
      repaymentYears: "3J",
      loanTerm: "10J",
      progress: 40,
      tags: ["Design", "Maintenance", "Security"],
    },
    {
      image: "/images/avatar.png",
      grantName: "Reerer Innovations",
      companyName: "7Style",
      twitterHandle: "@digital_limited",
      probability: "Very High",
      description: "Deschäftigung von Uni...",
      maxAmount: "5.000",
      fundingRate: "10%",
      repaymentYears: "3J",
      loanTerm: "1J",
      progress: 0,
      tags: ["HR", "Finance", "IT", "Maintenance", "Security", "R&D"],
    },
  ]);

  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      field: "grantName",
      headerName: "Grant/Offer name",
      checkboxSelection: true,
      minWidth: 250,
      flex: 1,
      cellRenderer: (props: RenderCellProps) => (
        <div className="flex items-center gap-2">
          <Image
            src={props.data.image}
            width={32}
            height={32}
            className="rounded-full"
            alt={props.data.grantName}
          />
          <div>
            <div className="text-xs font-medium text-gray-900">
              {props.data.grantName}
            </div>
            <div className="text-xs text-gray-500">
              {props.data.twitterHandle}
            </div>
          </div>
        </div>
      ),
    },
    {
      field: "companyName",
      headerName: "Company Name",
      editable: isPremiumUser,
      minWidth: 160,
      flex: 1,
      cellRenderer: (props: RenderCellProps) => (
        <div className="flex items-center justify-center gap-4 w-full">
          <button className="text-xs font-medium text-gray-900 cursor-auto">
            {props.data.companyName}
          </button>
          <FaEdit
            className={`${
              isPremiumUser
                ? "text-gray-900 cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
          />
        </div>
      ),
    },
    {
      field: "probability",
      headerName: "Probability",
      flex: 1,
      minWidth: 130,
      cellRenderer: (props: RenderCellProps) => (
        <Badge className="bg-green-100 text-green-800 font-medium hover:bg-green-200">
          {props.data.probability}
        </Badge>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 180,
      flex: 1,
      autoHeight: true,
      cellRenderer: (props: RenderCellProps) => (
        <div>
          <div className="text-xs font-medium text-gray-900 leading-5">
            {props.data.description}
          </div>
          {props?.data?.progress > 0 && (
            <ProgressBar
              containerClassName="dark:bg-amber-700"
              progressBarClassName="bg-amber-400"
              progress={props.data.progress}
            />
          )}
        </div>
      ),
    },
    {
      field: "maxAmount",
      headerName: "Max Amount",
      flex: 1,
      minWidth: 130,
      cellRenderer: (props: RenderCellProps) => (
        <div className="flex items-center gap-1">
          <span>
            <EuroCoin />
          </span>
          {props.data.maxAmount}
        </div>
      ),
    },
    {
      field: "fundingRate",
      headerName: "Funding Rate",
      flex: 1,
      minWidth: 130,
      cellRenderer: (props: RenderCellProps) => (
        <div className="flex items-center gap-1">
          <span>
            <Share />
          </span>
          {props.data.fundingRate}
        </div>
      ),
    },
    {
      field: "repaymentYears",
      headerName: "Repayment Years",
      flex: 1,
      minWidth: 130,
      cellRenderer: (props: RenderCellProps) => (
        <div className="flex items-center gap-1">
          <span>
            <Calender />
          </span>
          {props.data.repaymentYears}
        </div>
      ),
    },
    {
      field: "loanTerm",
      headerName: "Loan Term",
      flex: 1,
      minWidth: 100,
      cellRenderer: (props: RenderCellProps) => (
        <div className="flex items-center gap-1">
          <span>
            <Clock />
          </span>
          {props.data.loanTerm}
        </div>
      ),
    },
    {
      field: "tags",
      headerName: "Tags",
      minWidth: 250,
      flex: 1,
      autoHeight: true,
      cellRenderer: (props: RenderCellProps) => (
        <TagsCell tags={props.data.tags} />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      minWidth: 130,
      cellRenderer: () => <GroupIcon />,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      filter: true,
    };
  }, []);

  return (
    <div className="ag-theme-alpine max-h-96">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows={true}
        rowHeight={60}
        domLayout="autoHeight"
        suppressRowClickSelection={true}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50]}
      />
    </div>
  );
}

const ShowMore = ({
  count,
  onClick,
}: {
  count: number;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="mr-2 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
  >
    {count > 0 ? `+${count}` : "-"}
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
    <div className="flex flex-wrap items-center gap-2">
      {visibleTags.map((tag, index) => (
        <Badge
          className="bg-gray-100 text-gray-800 font-medium hover:bg-sky-100 hover:text-blue-800"
          key={index}
        >
          {tag}
        </Badge>
      ))}
      {tags.length > initialDisplayCount && (
        <ShowMore count={isExpanded ? 0 : hiddenCount} onClick={toggleTags} />
      )}
    </div>
  );
};
