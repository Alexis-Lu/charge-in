import StatisticsCard from "../ReusableComponents/StatisticsCard";
import "./statisticsComponent.css";
import { Box, Grid } from "@mui/material";
import {
  InterfaceStatisticsCard1,
  InterfaceStatisticsCard2,
  InterfaceStatisticsCard3,
} from "../ReusableComponents/StatisticsCard";
import ComponentButtonSelect from "../ReusableComponents/ComponentButtonSelect";

const fakeData: (
  | InterfaceStatisticsCard1
  | InterfaceStatisticsCard2
  | InterfaceStatisticsCard3
)[] = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.3888 4.54078C22.0205 3.06352 20.1094 2.25 18 2.25C15.8794 2.25 13.962 3.05859 12.6 4.52672C11.2233 6.01102 10.5525 8.02828 10.71 10.2066C11.0222 14.5041 14.2925 18 18 18C21.7076 18 24.9722 14.5048 25.2893 10.208C25.4489 8.04937 24.7739 6.03633 23.3888 4.54078ZM30.375 33.75H5.62504C5.30108 33.7542 4.98026 33.6862 4.68592 33.5508C4.39157 33.4154 4.13111 33.2161 3.92347 32.9674C3.46644 32.4211 3.28222 31.6751 3.41863 30.9206C4.01207 27.6286 5.8641 24.8632 8.77504 22.9219C11.3611 21.1985 14.637 20.25 18 20.25C21.3631 20.25 24.6389 21.1992 27.225 22.9219C30.136 24.8625 31.988 27.6279 32.5814 30.9199C32.7178 31.6744 32.5336 32.4204 32.0766 32.9667C31.869 33.2155 31.6086 33.415 31.3142 33.5505C31.0199 33.686 30.699 33.7541 30.375 33.75Z"
          fill="url(#paint0_linear_2_3788)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_3788"
            x1="3.14087"
            y1="2"
            x2="39.1532"
            y2="23.4009"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
        </defs>
      </svg>
    ),
    id: 1,
    text: "Installateurs partenaires inscrits",
    number: 78,
    variable: -2,
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3800)">
          <g filter="url(#filter0_d_2_3800)">
            <path
              d="M4.6477 25.1016C4.43054 25.1017 4.21799 25.0389 4.03571 24.9209C3.85342 24.8029 3.7092 24.6346 3.62043 24.4364C2.54639 22.0377 2.08969 19.4083 2.29195 16.7879C2.49422 14.1675 3.34902 11.6393 4.77846 9.43384C6.20789 7.22835 8.16652 5.41563 10.4759 4.16087C12.7852 2.90611 15.3718 2.2492 18 2.25C18.2984 2.25 18.5846 2.36853 18.7955 2.57951C19.0065 2.79048 19.125 3.07663 19.125 3.375V18C19.1251 18.2172 19.0622 18.4298 18.9441 18.6121C18.8259 18.7944 18.6575 18.9386 18.4592 19.0273L5.10684 25.0003C4.96268 25.0662 4.80619 25.1007 4.6477 25.1016Z"
              fill="url(#paint0_linear_2_3800)"
            />
          </g>
          <g filter="url(#filter1_d_2_3800)">
            <path
              d="M22.0493 4.79394C21.9677 4.77739 21.8835 4.77916 21.8027 4.79911C21.7219 4.81905 21.6465 4.85668 21.582 4.90928C21.5175 4.96188 21.4655 5.02813 21.4297 5.10327C21.3939 5.17841 21.3752 5.26055 21.375 5.34378V18C21.3744 18.6514 21.1856 19.2887 20.8314 19.8354C20.4771 20.382 19.9724 20.8146 19.3781 21.0811L7.2513 26.5078C7.17613 26.5414 7.10924 26.591 7.05536 26.6533C7.00147 26.7155 6.9619 26.7888 6.93944 26.868C6.91698 26.9472 6.91217 27.0303 6.92535 27.1116C6.93854 27.1928 6.9694 27.2702 7.01575 27.3382C7.94382 28.7032 9.09581 29.9015 10.4231 30.8827C12.9378 32.7534 15.9908 33.7594 19.125 33.75C27.1891 33.75 33.75 27.1892 33.75 19.125C33.75 12.0621 28.717 6.15237 22.0493 4.79394Z"
              fill="url(#paint1_linear_2_3800)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2_3800"
            x="-13.7548"
            y="-9.75"
            width="48.8798"
            height="54.8516"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.689906 0 0 0 0 0.7425 0 0 0 0 0.739406 0 0 0 0.16 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_3800"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_3800"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_2_3800"
            x="-9.08191"
            y="-7.21729"
            width="58.8319"
            height="60.9673"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.689906 0 0 0 0 0.7425 0 0 0 0 0.739406 0 0 0 0.16 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_3800"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_3800"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_3800"
            x1="2.11034"
            y1="2.06864"
            x2="25.0948"
            y2="12.934"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_3800"
            x1="6.70365"
            y1="4.55281"
            x2="39.7808"
            y2="24.1605"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <clipPath id="clip0_2_3800">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    id: 2,
    text: "Abonnement en cours",
    secondText: "Nombre d'abonnement",
    numberAbo: 22,
    number: 261,
    taxe: "HT",
    variable: 2,
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3814)">
          <g filter="url(#filter0_d_2_3814)">
            <path
              d="M28.6875 6.75001H17.7265C17.3935 6.75107 17.0678 6.65318 16.7906 6.46876L14.8359 5.16165C14.1887 4.72881 13.4272 4.49848 12.6485 4.50001H7.3125C6.26855 4.50112 5.26768 4.91633 4.5295 5.65451C3.79132 6.39269 3.37611 7.39356 3.375 8.43751V10.125H32.625C32.625 7.95376 30.8587 6.75001 28.6875 6.75001ZM29.7949 31.5H6.20508C5.17191 31.4988 4.1806 31.0916 3.44493 30.3662C2.70926 29.6408 2.28818 28.6553 2.2725 27.6223L1.13765 16.039V16.0193C1.10049 15.555 1.15982 15.0881 1.31191 14.6479C1.464 14.2077 1.70556 13.8037 2.02138 13.4614C2.3372 13.1191 2.72046 12.8459 3.14703 12.6589C3.5736 12.4719 4.03425 12.3753 4.5 12.375H31.507C31.9727 12.3755 32.4332 12.4723 32.8596 12.6593C33.286 12.8464 33.669 13.1196 33.9847 13.4619C34.3004 13.8042 34.5418 14.2081 34.6938 14.6482C34.8458 15.0884 34.9051 15.5552 34.868 16.0193V16.039L33.7275 27.6223C33.7118 28.6553 33.2907 29.6408 32.5551 30.3662C31.8194 31.0916 30.8281 31.4988 29.7949 31.5Z"
              fill="url(#paint0_linear_2_3814)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2_3814"
            x="-14.8731"
            y="-7.5"
            width="65.7518"
            height="59"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.689906 0 0 0 0 0.7425 0 0 0 0 0.739406 0 0 0 0.16 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_3814"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_3814"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_3814"
            x1="0.857152"
            y1="4.28571"
            x2="35.1429"
            y2="31.7143"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <clipPath id="clip0_2_3814">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    id: 1,
    text: "Devis réalisés",
    number: 105,
    variable: -2,
    b2c: "##",
    b2b: "##",
  },
  {
    icon: (
      <svg
        width="187"
        height="36"
        viewBox="0 0 187 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2_3832)">
          <path
            d="M6.75 0C5.50547 0 4.5 1.00547 4.5 2.25V9H9V2.25C9 1.00547 7.99453 0 6.75 0ZM20.25 0C19.0055 0 18 1.00547 18 2.25V9H22.5V2.25C22.5 1.00547 21.4945 0 20.25 0ZM2.25 11.25C1.00547 11.25 0 12.2555 0 13.5C0 14.7445 1.00547 15.75 2.25 15.75V18C2.25 23.4422 6.11719 27.9844 11.25 29.025V33.75C11.25 34.9945 12.2555 36 13.5 36C14.7445 36 15.75 34.9945 15.75 33.75V29.025C16.6148 28.8492 17.4445 28.575 18.218 28.2164C18.0703 27.457 18 26.6766 18 25.875C18 20.2289 21.7828 15.4688 26.9508 13.9781C26.9859 13.8234 27 13.6617 27 13.5C27 12.2555 25.9945 11.25 24.75 11.25H2.25ZM30.375 36C33.0603 36 35.6357 34.9333 37.5345 33.0345C39.4333 31.1356 40.5 28.5603 40.5 25.875C40.5 23.1897 39.4333 20.6144 37.5345 18.7155C35.6357 16.8167 33.0603 15.75 30.375 15.75C27.6897 15.75 25.1144 16.8167 23.2155 18.7155C21.3167 20.6144 20.25 23.1897 20.25 25.875C20.25 28.5603 21.3167 31.1356 23.2155 33.0345C25.1144 34.9333 27.6897 36 30.375 36ZM33.743 20.1797C34.0453 20.4398 34.1227 20.8758 33.9258 21.2273L31.8094 25.0312H34.3125C34.6781 25.0312 35.0016 25.2633 35.1141 25.6078C35.2266 25.9523 35.107 26.332 34.8188 26.55L28.0688 31.6125C27.7523 31.8516 27.3094 31.8375 27.007 31.5703C26.7047 31.3031 26.6273 30.8742 26.8242 30.5227L28.9406 26.7188H26.4375C26.0719 26.7188 25.7484 26.4867 25.6359 26.1422C25.5234 25.7977 25.643 25.418 25.9312 25.2L32.6812 20.1375C32.9977 19.8984 33.4406 19.9125 33.743 20.1797Z"
            fill="url(#paint0_linear_2_3832)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2_3832"
            x1="-0.323671"
            y1="-0.285715"
            x2="44.1133"
            y2="31.7072"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <clipPath id="clip0_2_3832">
            <rect width="40.5" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    id: 1,
    text: "Points de charge",
    number: 450,
    variable: 18,
    b2c: "##",
    b2b: "##",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.625 18C22.1794 18 20.7816 17.3545 19.6875 16.1831C18.6237 15.0405 17.974 13.5169 17.8594 11.8941C17.7371 10.163 18.2651 8.57109 19.3458 7.41094C20.4265 6.25078 21.9375 5.625 23.625 5.625C25.3006 5.625 26.8158 6.26203 27.893 7.41937C28.9807 8.58797 29.5102 10.177 29.3879 11.8934C29.2704 13.5183 28.6214 15.0412 27.5597 16.1824C26.4685 17.3545 25.0714 18 23.625 18ZM32.8943 30.375H14.3564C14.0584 30.3766 13.764 30.3098 13.4958 30.1797C13.2276 30.0497 12.9929 29.8598 12.8096 29.6248C12.6152 29.37 12.4809 29.0745 12.4169 28.7605C12.3528 28.4464 12.3606 28.122 12.4397 27.8114C13.0318 25.4341 14.4985 23.4626 16.681 22.1105C18.6181 20.9109 21.0839 20.25 23.625 20.25C26.2161 20.25 28.6172 20.8828 30.5656 22.0816C32.753 23.4267 34.2218 25.4095 34.8111 27.8156C34.8892 28.1264 34.8961 28.4509 34.8314 28.7647C34.7666 29.0786 34.6318 29.3738 34.437 29.6283C34.2539 29.8622 34.0197 30.0512 33.7523 30.1806C33.4849 30.31 33.1914 30.3765 32.8943 30.375ZM10.336 18.2812C7.86168 18.2812 5.68621 15.9806 5.48442 13.1534C5.38457 11.7049 5.83598 10.3655 6.75004 9.3832C7.65426 8.41078 8.92973 7.875 10.336 7.875C11.7422 7.875 13.0079 8.41359 13.917 9.39164C14.8381 10.3816 15.2881 11.7183 15.1826 13.1548C14.9808 15.9813 12.8061 18.2812 10.336 18.2812ZM14.9527 20.4926C13.7159 19.8879 12.1107 19.5855 10.3367 19.5855C8.26528 19.5855 6.25364 20.1255 4.6716 21.1057C2.87793 22.2188 1.67137 23.8395 1.1841 25.7962C1.1128 26.0777 1.10605 26.3716 1.16438 26.6561C1.2227 26.9405 1.34458 27.2081 1.5209 27.4387C1.68821 27.6535 1.90255 27.8271 2.14743 27.946C2.39232 28.065 2.66123 28.1262 2.93348 28.125H10.7382C10.8699 28.125 10.9974 28.0787 11.0986 27.9943C11.1997 27.9099 11.268 27.7927 11.2915 27.663C11.2993 27.6187 11.3091 27.5745 11.3204 27.5309C11.9166 25.136 13.3137 23.1124 15.3781 21.6373C15.454 21.5825 15.5151 21.5097 15.5558 21.4254C15.5964 21.3411 15.6154 21.248 15.611 21.1545C15.6066 21.061 15.579 20.9701 15.5306 20.89C15.4822 20.8099 15.4145 20.7431 15.3338 20.6958C15.2234 20.6311 15.0968 20.5629 14.9527 20.4926Z"
          fill="url(#paint0_linear_2_3853)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_3853"
            x1="0.855395"
            y1="5.42857"
            x2="32.7733"
            y2="33.2828"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
        </defs>
      </svg>
    ),
    id: 1,
    text: "Points de charge supervisés",
    number: 432,
    variable: 18,
    b2c: "##",
    b2b: "##",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2_3872"
          maskUnits="userSpaceOnUse"
          x="2"
          y="3"
          width="32"
          height="30"
        >
          <path
            d="M3.75 6C3.75 5.60218 3.90804 5.22064 4.18934 4.93934C4.47064 4.65804 4.85218 4.5 5.25 4.5H14.25L18 9H30.75C31.1478 9 31.5294 9.15804 31.8107 9.43934C32.092 9.72064 32.25 10.1022 32.25 10.5V30C32.25 30.3978 32.092 30.7794 31.8107 31.0607C31.5294 31.342 31.1478 31.5 30.75 31.5H5.25C4.85218 31.5 4.47064 31.342 4.18934 31.0607C3.90804 30.7794 3.75 30.3978 3.75 30V6Z"
            fill="white"
            stroke="white"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            d="M12.75 18H23.25L19.5 14.25M23.25 22.5H12.75L16.5 26.25"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </mask>
        <g mask="url(#mask0_2_3872)">
          <path d="M0 0H36V36H0V0Z" fill="url(#paint0_linear_2_3872)" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2_3872"
            x1="-0.287707"
            y1="-0.285715"
            x2="42.2604"
            y2="26.9436"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
        </defs>
      </svg>
    ),
    id: 1,
    text: "Taux de conversion",
    number: 78,
    variable: -2,
    b2c: "##",
    b2b: "##",
  },
  {
    icon: (
      <svg
        width="187"
        height="36"
        viewBox="0 0 187 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.5 28.125H4.5C4.20163 28.125 3.91548 28.0065 3.7045 27.7955C3.49353 27.5845 3.375 27.2984 3.375 27C3.375 26.7016 3.49353 26.4155 3.7045 26.2045C3.91548 25.9935 4.20163 25.875 4.5 25.875H31.5C31.7984 25.875 32.0845 25.9935 32.2955 26.2045C32.5065 26.4155 32.625 26.7016 32.625 27C32.625 27.2984 32.5065 27.5845 32.2955 27.7955C32.0845 28.0065 31.7984 28.125 31.5 28.125ZM29.25 31.5H6.75C6.45163 31.5 6.16548 31.3815 5.9545 31.1705C5.74353 30.9595 5.625 30.6734 5.625 30.375C5.625 30.0766 5.74353 29.7905 5.9545 29.5795C6.16548 29.3685 6.45163 29.25 6.75 29.25H29.25C29.5484 29.25 29.8345 29.3685 30.0455 29.5795C30.2565 29.7905 30.375 30.0766 30.375 30.375C30.375 30.6734 30.2565 30.9595 30.0455 31.1705C29.8345 31.3815 29.5484 31.5 29.25 31.5ZM2.25 19.125H1.125V22.5C1.125 23.0967 1.36205 23.669 1.78401 24.091C2.20597 24.5129 2.77826 24.75 3.375 24.75H6.75V23.625C6.7487 22.4319 6.27417 21.2881 5.43054 20.4445C4.58691 19.6008 3.44307 19.1263 2.25 19.125Z"
          fill="url(#paint0_linear_2_3900)"
        />
        <path
          d="M33.75 16.875H34.875V12.375H33.75C31.9604 12.373 30.2447 11.6611 28.9793 10.3957C27.7139 9.13028 27.002 7.41458 27 5.625V4.5H9V5.625C8.99795 7.41458 8.28614 9.13028 7.02071 10.3957C5.75528 11.6611 4.03958 12.373 2.25 12.375H1.125V16.875H2.25C4.03958 16.877 5.75528 17.5889 7.02071 18.8543C8.28614 20.1197 8.99795 21.8354 9 23.625V24.75H27V23.625C27.002 21.8354 27.7139 20.1197 28.9793 18.8543C30.2447 17.5889 31.9604 16.877 33.75 16.875ZM18 21.375C16.665 21.375 15.3599 20.9791 14.2499 20.2374C13.1399 19.4957 12.2747 18.4415 11.7638 17.2081C11.2529 15.9747 11.1192 14.6175 11.3797 13.3081C11.6402 11.9988 12.283 10.796 13.227 9.85203C14.171 8.90802 15.3738 8.26515 16.6831 8.0047C17.9925 7.74425 19.3497 7.87792 20.5831 8.38881C21.8165 8.8997 22.8707 9.76487 23.6124 10.8749C24.3541 11.9849 24.75 13.29 24.75 14.625C24.748 16.4146 24.0361 18.1303 22.7707 19.3957C21.5053 20.6611 19.7896 21.373 18 21.375Z"
          fill="url(#paint1_linear_2_3900)"
        />
        <path
          d="M18 19.125C20.4853 19.125 22.5 17.1103 22.5 14.625C22.5 12.1397 20.4853 10.125 18 10.125C15.5147 10.125 13.5 12.1397 13.5 14.625C13.5 17.1103 15.5147 19.125 18 19.125Z"
          fill="url(#paint2_linear_2_3900)"
        />
        <path
          d="M29.25 23.625V24.75H32.625C33.2217 24.75 33.794 24.5129 34.216 24.091C34.6379 23.669 34.875 23.0967 34.875 22.5V19.125H33.75C32.5569 19.1263 31.4131 19.6008 30.5695 20.4445C29.7258 21.2881 29.2513 22.4319 29.25 23.625ZM33.75 10.125H34.875V6.75C34.875 6.15326 34.6379 5.58097 34.216 5.15901C33.794 4.73705 33.2217 4.5 32.625 4.5H29.25V5.625C29.2513 6.81807 29.7258 7.96191 30.5695 8.80554C31.4131 9.64917 32.5569 10.1237 33.75 10.125ZM6.75 5.625V4.5H3.375C2.77826 4.5 2.20597 4.73705 1.78401 5.15901C1.36205 5.58097 1.125 6.15326 1.125 6.75V10.125H2.25C3.44307 10.1237 4.58691 9.64917 5.43054 8.80554C6.27417 7.96191 6.7487 6.81807 6.75 5.625Z"
          fill="url(#paint3_linear_2_3900)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_3900"
            x1="0.873256"
            y1="19.0268"
            x2="15.2362"
            y2="42.4241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2_3900"
            x1="0.855274"
            y1="4.33929"
            x2="27.1577"
            y2="32.3937"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2_3900"
            x1="13.4281"
            y1="10.0536"
            x2="24.0651"
            y2="16.8609"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2_3900"
            x1="0.855274"
            y1="4.33929"
            x2="27.1577"
            y2="32.3937"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8BDFDA" />
            <stop offset="1" stop-color="#369C96" />
          </linearGradient>
        </defs>
      </svg>
    ),
    id: 3,
    text: "Chiffre d'affaires",
    number: 26100,
    taxe: "HT",
    variable: 6,
    b2c: "12 000€ HT",
    b2b: "22 045€ HT",
  },
];

function StatisticsComponent() {
  return (
    <div className="containerStatistics">
      <div className="containerStatisticsItems">
        <div className="statisticsTitle">
          Statistiques de <span className="statisticsName">charge-in</span>
        </div>
        <div>
          <ComponentButtonSelect />
        </div>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {fakeData.map((data, index) => (
              <Grid item xs={2} sm={3} md={3} key={index}>
                <StatisticsCard id={data.id} data={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default StatisticsComponent;
