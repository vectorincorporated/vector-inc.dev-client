import * as React from "react"

import styles from './BigVLogo.module.css';

function BigVLogo() {
    return (
        <svg width={569} height={423} viewBox="0 0 569 423" fill="none" className={styles.logo} >
            <g
                clipPath="url(#prefix__clip0)"
                filter="url(#prefix__filter0_d)"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path
                    d="M123.141 189.289l-7.468-14.83h107.813l7.452 14.83H123.141zm12.612 25.075l-7.466-14.83h107.791l7.452 14.83H135.753zm216.831 110.554l-7.458 14.832H198.815l-7.46-14.832h161.229zm12.608-25.075l-7.459 14.832H186.2l-7.458-14.832h186.45zm12.604-25.075l-7.458 14.83H173.595l-7.464-14.83h211.665zm12.601-25.075l-7.451 14.833H160.975l-7.459-14.833h236.881zm12.605-25.083l-7.458 14.843H148.368l-7.466-14.842 262.1-.001zm-130.04-60.394l7.466-14.829h160.393l-7.45 14.829H272.962zm-12.627 25.073l7.473-14.83h160.416l-7.459 14.83h-160.43zm-12.62 25.075l7.466-14.83h160.428l-7.451 14.83H247.715zm88.375-175.53L343.558 24h156.568l-7.279 14.833H336.09zm-12.628 25.073l7.475-14.83h156.88l-7.281 14.83H323.462zM310.833 88.99l7.474-14.842h157.201l-7.282 14.842H310.833zM47.459 38.83L40 24h107.895l7.449 14.833-107.885-.002zm12.62 25.075l-7.465-14.83h107.878l7.452 14.83H60.079zm12.615 25.082l-7.467-14.842h107.864l7.451 14.842H72.694zm37.833 75.224l-7.467-14.829h107.827l7.451 14.829H110.527z"
                    fill="#6E6E6E"
                />
                <path
                    d="M85.104 114.302l-5.447-10.832h107.925l5.438 10.832H85.104zm250.604 0l5.454-10.832h136.661l38.517-77.463 12.659-.207-43.984 88.502H335.708zM212.27 366.999l-6.091-12.089h146.619L450.7 158.026h12.578l-97.854 196.886h.074l-6.001 12.087H212.27z"
                    fill="#FFBDD1"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0">
                    <path fill="#fff" transform="translate(40 24)" d="M0 0h489v343H0z" />
                </clipPath>
                <filter
                    id="prefix__filter0_d"
                    x={0}
                    y={0}
                    width={569}
                    height={423}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feOffset dy={16} />
                    <feGaussianBlur stdDeviation={20} />
                    <feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.439216 0 0 0 0 0.556863 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default BigVLogo;
