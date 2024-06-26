import { Fordermittel, Bot, Partner, Unternehmen, Caret } from "./header";
import { Overview, CheckList, Percent, EuroCoin, Calender, Clock, Plus, BookMark, Swap, Share, VerticalDots, PiggyCoin, Loan, PeopleGroup, CalenderCheck, Signal, SpeedoMeter } from "./tabs";


function FinyouIcon() {
    return (
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19.096" cy="18.8284" r="18.8284" fill="#F0F0F0" />
            <path d="M16.5513 29.281C16.5513 29.5489 16.3321 29.7681 16.0641 29.7681H11.2528C10.9832 29.7681 10.7656 29.5505 10.7656 29.281V14.5384C10.7656 14.5254 10.7754 14.5156 10.7884 14.5156H16.5464C16.5464 14.5156 16.5513 14.5172 16.5513 14.5205V29.281Z" fill="#1AA5B9" />
            <path d="M22.0078 22.8007C23.6301 22.8007 24.9453 21.4856 24.9453 19.8633C24.9453 18.2409 23.6301 16.9258 22.0078 16.9258C20.3855 16.9258 19.0703 18.2409 19.0703 19.8633C19.0703 21.4856 20.3855 22.8007 22.0078 22.8007Z" fill="#1AA5B9" />
            <path d="M26.7656 14.0284C26.7656 14.2963 26.5463 14.5155 26.2784 14.5155H16.5566C16.5566 14.5155 16.5518 14.5139 16.5518 14.5107V9.19268C16.5518 9.19268 16.5583 9.17969 16.5647 9.17969H26.2784C26.5463 9.17969 26.7656 9.3989 26.7656 9.66683V14.0284Z" fill="#1AA5B9" />
            <path d="M16.5562 9.17969V14.5155H10.7656" fill="#16748D" />
        </svg>
    )
}

function ArrowRight() {
    return (
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.976204 5.24992C0.621718 5.25307 0.33691 5.543 0.340068 5.89748C0.343225 6.25197 0.633151 6.53678 0.987637 6.53362L0.976204 5.24992ZM14.6805 6.41166C15.035 6.40851 15.3198 6.11858 15.3166 5.76409C15.3135 5.40961 15.0235 5.1248 14.6691 5.12796L14.6805 6.41166ZM11.6612 1.06138C11.4072 0.814082 11.0008 0.819516 10.7535 1.07351C10.5063 1.32751 10.5117 1.73389 10.7657 1.98118L11.6612 1.06138ZM12.7355 3.0032L12.2878 3.4631L12.7355 3.0032ZM12.7851 8.57053L13.241 9.02238L12.7851 8.57053ZM10.8338 9.62746C10.5842 9.87924 10.586 10.2857 10.8378 10.5352C11.0896 10.7848 11.496 10.783 11.7456 10.5312L10.8338 9.62746ZM14.6554 5.50181L15.2913 5.41498L15.2913 5.41498L14.6554 5.50181ZM14.6601 6.03811L15.2976 6.1136L15.2976 6.1136L14.6601 6.03811ZM0.987637 6.53362L14.6805 6.41166L14.6691 5.12796L0.976204 5.24992L0.987637 6.53362ZM10.7657 1.98118L12.2878 3.4631L13.1833 2.54329L11.6612 1.06138L10.7657 1.98118ZM12.3292 8.11867L10.8338 9.62746L11.7456 10.5312L13.241 9.02238L12.3292 8.11867ZM12.2878 3.4631C12.9055 4.06453 13.3292 4.47845 13.6166 4.82982C13.8957 5.17113 13.9924 5.3911 14.0194 5.58864L15.2913 5.41498C15.2192 4.8866 14.9629 4.44816 14.6103 4.0171C14.266 3.59609 13.7794 3.12366 13.1833 2.54329L12.2878 3.4631ZM13.241 9.02238C13.8267 8.43149 14.3048 7.95047 14.6416 7.52339C14.9864 7.08612 15.2349 6.64318 15.2976 6.1136L14.0227 5.96263C13.9993 6.16061 13.9065 6.38227 13.6335 6.7285C13.3525 7.08493 12.9361 7.50634 12.3292 8.11867L13.241 9.02238ZM14.0194 5.58864C14.0363 5.71267 14.0374 5.83831 14.0227 5.96263L15.2976 6.1136C15.3251 5.88139 15.323 5.64667 15.2913 5.41498L14.0194 5.58864Z" fill="#72777A" />
        </svg>
    )
}

function RightChevon() {
    return (
        <svg width="5" height="9" viewBox="0 0 5 9" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.183058 1.06694C-0.0610198 0.822864 -0.0610198 0.427136 0.183058 0.183058C0.427136 -0.0610196 0.822864 -0.0610196 1.06694 0.183058L4.81694 3.93306C5.05355 4.16967 5.06183 4.55066 4.83572 4.79733L1.39822 8.54732C1.16498 8.80177 0.76962 8.81896 0.515171 8.58572C0.260722 8.35247 0.243533 7.95712 0.476778 7.70267L3.50991 4.3938L0.183058 1.06694Z" />
        </svg>
    )
}

function DotsHorizontal() {
    return (

        <svg width="18" height="4" viewBox="0 0 18 4" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.65115 0.117188C9.59648 0.117187 10.3628 0.88353 10.3628 1.82886C10.3628 2.77419 9.59648 3.54054 8.65115 3.54054C7.70582 3.54054 6.93947 2.77419 6.93947 1.82886C6.93947 0.883531 7.70582 0.117188 8.65115 0.117188Z" />
            <path d="M1.80445 0.117188C2.74978 0.117187 3.51612 0.88353 3.51612 1.82886C3.51612 2.77419 2.74978 3.54054 1.80445 3.54054C0.859116 3.54054 0.0927735 2.77419 0.0927734 1.82886C0.0927734 0.883531 0.859116 0.117188 1.80445 0.117188Z" />
            <path d="M15.4978 0.117188C16.4432 0.117187 17.2095 0.88353 17.2095 1.82886C17.2095 2.77419 16.4432 3.54054 15.4978 3.54054C14.5525 3.54054 13.7862 2.77419 13.7862 1.82886C13.7862 0.883531 14.5525 0.117188 15.4978 0.117188Z" />
        </svg>

    )
}

function ChatBot() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_552_7695)">
                <path d="M16 18.9998C14.8449 19.0007 13.7076 18.7155 12.6897 18.1695C11.6719 17.6235 10.8051 16.8339 10.167 15.8711L11.833 14.7637C12.2892 15.4512 12.9084 16.0153 13.6355 16.4054C14.3625 16.7956 15.1749 16.9998 16 16.9998C16.8251 16.9998 17.6374 16.7956 18.3645 16.4054C19.0916 16.0153 19.7108 15.4512 20.167 14.7637L21.833 15.8711C21.1949 16.8339 20.3281 17.6235 19.3102 18.1695C18.2924 18.7155 17.1551 19.0007 16 18.9998Z" />
                <path d="M20 8.0001C19.6044 8.0001 19.2178 8.11739 18.8889 8.33716C18.56 8.55692 18.3036 8.86928 18.1522 9.23473C18.0009 9.60018 17.9613 10.0023 18.0384 10.3903C18.1156 10.7782 18.3061 11.1346 18.5858 11.4143C18.8655 11.694 19.2219 11.8845 19.6098 11.9617C19.9978 12.0388 20.3999 11.9992 20.7654 11.8479C21.1308 11.6965 21.4432 11.4401 21.6629 11.1112C21.8827 10.7823 22 10.3957 22 10.0001C22.0026 9.73673 21.9526 9.47549 21.853 9.23167C21.7535 8.98785 21.6062 8.76634 21.42 8.5801C21.2338 8.39387 21.0122 8.24665 20.7684 8.14706C20.5246 8.04746 20.2634 7.9975 20 8.0001Z" />
                <path d="M12 8.0001C11.6044 8.0001 11.2178 8.11739 10.8889 8.33716C10.56 8.55692 10.3036 8.86928 10.1522 9.23473C10.0009 9.60018 9.96126 10.0023 10.0384 10.3903C10.1156 10.7782 10.3061 11.1346 10.5858 11.4143C10.8655 11.694 11.2219 11.8845 11.6098 11.9617C11.9978 12.0388 12.3999 11.9992 12.7654 11.8479C13.1308 11.6965 13.4432 11.4401 13.6629 11.1112C13.8827 10.7823 14 10.3957 14 10.0001C14.0026 9.73673 13.9526 9.47549 13.853 9.23167C13.7534 8.98785 13.6062 8.76634 13.42 8.5801C13.2338 8.39387 13.0122 8.24665 12.7684 8.14706C12.5246 8.04746 12.2634 7.9975 12 8.0001Z" />
                <path d="M17.7358 30L16 29L20 22H26C26.2628 22.0004 26.523 21.949 26.7659 21.8487C27.0087 21.7483 27.2294 21.601 27.4152 21.4152C27.601 21.2294 27.7483 21.0087 27.8487 20.7659C27.949 20.523 28.0004 20.2628 28 20V6C28.0004 5.73723 27.949 5.47696 27.8487 5.2341C27.7483 4.99125 27.601 4.77059 27.4152 4.58479C27.2294 4.39898 27.0087 4.25168 26.7659 4.15133C26.523 4.05098 26.2628 3.99955 26 4H6C5.73723 3.99955 5.47696 4.05098 5.2341 4.15133C4.99125 4.25168 4.77059 4.39898 4.58479 4.58479C4.39898 4.77059 4.25168 4.99125 4.15133 5.2341C4.05098 5.47696 3.99955 5.73723 4 6V20C3.99955 20.2628 4.05098 20.523 4.15133 20.7659C4.25168 21.0087 4.39898 21.2294 4.58479 21.4152C4.77059 21.601 4.99125 21.7483 5.2341 21.8487C5.47696 21.949 5.73723 22.0004 6 22H15V24H6C5.47469 24.0001 4.9545 23.8967 4.46916 23.6957C3.98381 23.4947 3.54282 23.2001 3.17137 22.8286C2.79992 22.4572 2.50528 22.0162 2.30429 21.5308C2.10331 21.0455 1.99991 20.5253 2 20V6C1.99984 5.47467 2.1032 4.95445 2.30416 4.46908C2.50512 3.98371 2.79976 3.54269 3.17122 3.17122C3.54269 2.79976 3.98371 2.50512 4.46908 2.30416C4.95445 2.1032 5.47467 1.99984 6 2H26C26.5253 1.99984 27.0455 2.1032 27.5309 2.30416C28.0163 2.50512 28.4573 2.79976 28.8288 3.17122C29.2002 3.54269 29.4949 3.98371 29.6958 4.46908C29.8968 4.95445 30.0002 5.47467 30 6V20C30.0001 20.5253 29.8967 21.0455 29.6957 21.5308C29.4947 22.0162 29.2001 22.4572 28.8286 22.8286C28.4572 23.2001 28.0162 23.4947 27.5308 23.6957C27.0455 23.8967 26.5253 24.0001 26 24H21.1646L17.7358 30Z" />
            </g>
            <defs>
                <clipPath id="clip0_552_7695">
                    <rect width="32" height="32" />
                </clipPath>
            </defs>
        </svg>
    )
}

function ThumbsUp() {
    return (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.14979 10.056L9.53056 2.44922C10.203 2.44922 10.848 2.71636 11.3235 3.19187C11.799 3.66739 12.0661 4.31232 12.0661 4.9848V8.36557H16.8499C17.095 8.36279 17.3377 8.41332 17.5612 8.51366C17.7848 8.614 17.9839 8.76174 18.1446 8.94665C18.3054 9.13156 18.4241 9.34922 18.4924 9.58455C18.5608 9.81987 18.5771 10.0672 18.5403 10.3095L17.374 17.9162C17.3128 18.3193 17.1081 18.6867 16.7975 18.9508C16.4868 19.2148 16.0912 19.3577 15.6836 19.3531H6.14979M6.14979 10.056V19.3531M6.14979 10.056H3.61421C3.1659 10.056 2.73594 10.234 2.41893 10.5511C2.10192 10.8681 1.92383 11.298 1.92383 11.7463V17.6627C1.92383 18.111 2.10192 18.541 2.41893 18.858C2.73594 19.175 3.1659 19.3531 3.61421 19.3531H6.14979" stroke="#07213A" strokeWidth="1.01423" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function Copy() {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.10673" y="1.18094" width="7.09958" height="7.09958" stroke="#07213A" strokeWidth="1.01423" />
            <rect x="4.65723" y="4.73047" width="8.11381" height="8.11381" fill="#07213A" />
        </svg>
    )
}

function Download() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.3333 31.6667H50V11.6667H30V31.6667H16.6667L40 55L63.3333 31.6667ZM16.6667 61.6667V68.3333H63.3333V61.6667H16.6667Z" />
        </svg>
    )
}

function Tick() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#1AA5B9" />
            <path d="M7.0547 11.0428L4.2146 8.20266L4.92462 7.49263L7.0547 9.6227L11.6263 5.05115L12.3363 5.76117L7.0547 11.0428Z" fill="white" stroke="white" strokeWidth="0.392857" />
        </svg>
    )
}

function Puzzle() {
    return (

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_822_189)">
                <path d="M9.9375 15.9573C9.3875 15.8167 8.93125 15.4542 8.68125 14.9605C8.58125 14.7573 8.46875 14.3605 8.46875 14.198V14.0948H8H7.53125V13.3917V12.6886H7.63437C7.80625 12.6886 8.20937 12.573 8.41562 12.4636C8.66875 12.3323 9.05 11.9511 9.18125 11.698C9.3125 11.448 9.40625 11.0792 9.40625 10.8136C9.40625 10.548 9.3125 10.1761 9.18125 9.92922C9.04375 9.67297 8.66562 9.29485 8.41562 9.1636C8.20937 9.05422 7.80625 8.9386 7.63437 8.9386H7.53125V8.23547V7.53235H8.84062H10.15L10.0094 7.13547C9.8875 6.78547 9.87187 6.71047 9.88437 6.5386C9.92187 6.0261 10.2969 5.67297 10.8125 5.67297C11.3281 5.67297 11.7031 6.0261 11.7406 6.5386C11.7531 6.71047 11.7375 6.78547 11.6156 7.13547L11.475 7.53235H12.7844H14.0937V8.0011V8.46985H14.1969C14.3625 8.46985 14.7562 8.58235 14.9625 8.68547C15.3937 8.90422 15.7594 9.3261 15.9094 9.78547C16.0156 10.1136 16.0156 10.5761 15.9094 10.9042C15.7594 11.3636 15.3937 11.7855 14.9625 12.0042C14.7562 12.1073 14.3625 12.2198 14.1969 12.2198H14.0937V13.1573V14.0948H13.1562H12.2187V14.198C12.2187 14.3636 12.1062 14.7573 12.0031 14.9636C11.7906 15.3886 11.3875 15.7386 10.9375 15.898C10.65 15.998 10.2031 16.023 9.9375 15.9573Z" fill="#1AA5B9" />
                <path d="M6.07812 14.0156C3.2125 13.5938 0.9 11.5219 0.2 8.75625C0.1125 8.40938 0 7.75 0 7.575C0 7.5375 0.1125 7.53125 0.71875 7.53125H1.4375V7.63437C1.4375 7.80625 1.55312 8.20938 1.6625 8.41563C1.79375 8.66562 2.17187 9.04375 2.42812 9.18125C2.675 9.3125 3.04687 9.40625 3.3125 9.40625C3.57812 9.40625 3.94687 9.3125 4.19687 9.18125C4.45 9.05 4.83125 8.66875 4.9625 8.41563C5.07187 8.20938 5.1875 7.80625 5.1875 7.63437V7.53125H5.89062H6.59375V8.84063V10.15L6.99375 10.0094C7.33125 9.89375 7.41562 9.87188 7.56562 9.88438C7.90312 9.9125 8.20937 10.1188 8.36875 10.4188C8.4375 10.55 8.45 10.6188 8.45 10.8125C8.45 11.0063 8.4375 11.075 8.36875 11.2062C8.20937 11.5063 7.90312 11.7125 7.56562 11.7406C7.41562 11.7531 7.33125 11.7313 6.99375 11.6156L6.59375 11.475V12.7688V14.0625L6.47812 14.0594C6.4125 14.0563 6.23437 14.0375 6.07812 14.0156Z" fill="#1AA5B9" />
                <path d="M3.01553 8.41563C2.7124 8.30625 2.50928 8.09688 2.42178 7.80312C2.3499 7.55938 2.36553 7.42188 2.5124 6.99375L2.6499 6.59375H1.32178H-0.00634766L0.0155273 6.4C0.128027 5.35 0.443652 4.38438 0.959277 3.5125C1.94678 1.84688 3.51553 0.665625 5.35615 0.2C5.6374 0.128125 6.39678 0 6.54053 0C6.59053 0 6.59365 0.05625 6.59365 0.71875V1.4375H6.49053C6.31865 1.4375 5.91553 1.55313 5.70928 1.6625C5.45303 1.8 5.0749 2.17813 4.94365 2.42813C4.8124 2.67813 4.71865 3.04688 4.71865 3.3125C4.71865 3.57812 4.8124 3.94688 4.94365 4.19688C5.0749 4.44688 5.45303 4.825 5.70928 4.9625C5.91553 5.07188 6.31865 5.1875 6.49053 5.1875H6.59365V5.89062V6.59375H5.28428H3.9749L4.11553 6.99375C4.23428 7.3375 4.25303 7.41563 4.24053 7.58125C4.21553 7.93438 4.03115 8.21562 3.73115 8.3625C3.50928 8.47188 3.23115 8.49063 3.01553 8.41563Z" fill="#1AA5B9" />
                <path d="M7.53106 5.28745V3.97808L7.13418 4.11558C6.79043 4.23433 6.70918 4.24995 6.55293 4.23745C6.03418 4.19683 5.61543 3.72183 5.66543 3.23433C5.71231 2.79058 6.09668 2.42183 6.55918 2.38433C6.70606 2.37495 6.79668 2.3937 7.13418 2.50933L7.53106 2.64683V1.32183V-0.00317383L7.72793 0.0155762C10.9717 0.346826 13.5529 2.84683 14.0154 6.10933C14.0404 6.2812 14.0623 6.45933 14.0623 6.50933V6.5937H13.3748H12.6873V6.49058C12.6873 6.3187 12.5717 5.91558 12.4623 5.70933C12.3248 5.45308 11.9467 5.07495 11.6967 4.9437C11.4467 4.81245 11.0779 4.7187 10.8123 4.7187C10.5467 4.7187 10.1748 4.81245 9.92793 4.9437C9.67168 5.0812 9.29356 5.45933 9.16231 5.70933C9.05293 5.91558 8.93731 6.3187 8.93731 6.49058V6.5937H8.23418H7.53106V5.28745Z" fill="#1AA5B9" />
            </g>
            <defs>
                <clipPath id="clip0_822_189">
                    <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
                </clipPath>
            </defs>
        </svg>

    )
}

export {
    Tick,
    Puzzle,
    ThumbsUp,
    Copy,
    Download,
    RightChevon,
    ChatBot,
    FinyouIcon,
    ArrowRight,
    DotsHorizontal,
    Fordermittel, Bot, Partner, Unternehmen, Caret, Share,
    Overview,
    CheckList,
    Percent,
    EuroCoin,
    Calender,
    Clock,
    PiggyCoin,
    Loan,
    Plus,
    BookMark,
    VerticalDots,
    Swap,
    PeopleGroup,
    CalenderCheck,
    Signal,
    SpeedoMeter
};