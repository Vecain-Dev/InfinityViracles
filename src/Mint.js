import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SlideshowWithPagination from "react-slideshow-with-pagination";


const CARDS_DETAILS = [
  { image: './assets/images/jeans (60).png', title: "1" },
  { image: './assets/images/jeans (60).png', title: "2" },
  { image: './assets/images/jeans (60).png', title: "3" },
  { image: './assets/images/jeans (60).png', title: "4" },
  { image: './assets/images/jeans (60).png', title: "5" },
  { image: './assets/images/jeans (60).png', title: "6" },
  { image: './assets/images/jeans (60).png', title: "7" },
  { image: './assets/images/jeans (60).png', title: "8" },
]

const assets = [
      {
        image: '12.png', attribute :  { 
        BG: 'BG1',
        Cap: 'party',
        Head: 'YelloRight',
        Horn: 'greanligo',
        Jeans: 'light',
        Shirt: 'abri',
        Shoes: 'cape',
        Tail: 'rong',
      },
    },{
          image: '12.png', attribute :  { 
            BG: 'BG1',
          Cap: 'party',
          Head: 'YelloRight',
          Horn: 'greanligo',
          Jeans: 'light',
          Shirt: 'abri',
          Shoes: 'cape',
          Tail: 'rong',
        },
      },{
          image: '12.png', attribute :  { BG: 'BG1',
          Cap: 'party',
          Head: 'YelloRight',
          Horn: 'greanligo',
          Jeans: 'light',
          Shirt: 'abri',
          Shoes: 'cape',
          Tail: 'rong',
        },
      },
      {
        image: '12.png', attribute :  { BG: 'BG1',
        Cap: 'party',
        Head: 'YelloRight',
        Horn: 'greanligo',
        Jeans: 'light',
        Shirt: 'abri',
        Shoes: 'cape',
        Tail: 'rong',
      },
    },{
          image: '12.png', attribute :  { BG: 'BG1',
          Cap: 'party',
          Head: 'YelloRight',
          Horn: 'greanligo',
          Jeans: 'light',
          Shirt: 'abri',
          Shoes: 'cape',
          Tail: 'rong',
        },
      },{
          image: '12.png', attribute :  { BG: 'BG1',
          Cap: 'party',
          Head: 'YelloRight',
          Horn: 'greanligo',
          Jeans: 'light',
          Shirt: 'abri',
          Shoes: 'cape',
          Tail: 'rong',
        },
      },{
        image: '12.png', attribute :  { BG: 'BG1',
        Cap: 'party',
        Head: 'YelloRight',
        Horn: 'greanligo',
        Jeans: 'light',
        Shirt: 'abri',
        Shoes: 'cape',
        Tail: 'rong',
      },
    },
  
];

const Mint = () => {
    const [input, setInput] = useState(1);
    const price = 1000;

    const responsive = {
      1200: { items: 4 },
      900: { items: 3 },
      600: { items: 2 },
      300: { items: 1 },
      0: { items: 1 },
    }

    const increase = () => {
      if (input < 10) {
        setInput(input + 1);
      }
    };
  
    const decrease = () => {
      if (input > 1) {
        setInput(input - 1);
      }
    };
  
    const getmax = () => {
      setInput(10);
    };

    // const [assets, setAssets] = useState(assets);

    return (
        <div className="mint-page">
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <Link to='/'>
                            <img src="assets/images/mark.png" className="d-hide top-d" alt="" />
                        </Link>
                    </div>
                    <Navbar /> 
                    <div className="menu-bar">
                       <ul>
                           <li>
                            <Link to='/'>HOME</Link>
                           </li>
                           <li><a href="#mint">MINT</a></li>
                           <li><a href="#assets">ASSETS</a></li>
                           {/* <li><a>WALLET CONNCECT</a></li> */}
                       </ul>
                       <svg width="52" height="56" viewBox="0 0 52 56" fill="none">
                        <a target="_blank">
                          <g filter="url(#filter0_d_71:6434)">
                            <circle cx="26" cy="26" r="26" fill="#9CB0FF" />
                          </g>
                          <mask id="path-2-outside-1_71:6434" maskUnits="userSpaceOnUse" x="10" y="14" width="32"
                            height="24" fill="black">
                            <rect fill="white" x="10" y="14" width="32" height="24" />
                            <path
                              d="M37.2981 17.6223C33.6221 14.9247 30.1002 15.0005 30.1002 15.0005L29.7403 15.4038C34.1104 16.6895 36.1413 18.5802 36.1413 18.5802C29.8888 15.2044 21.9248 15.2286 15.4215 18.5802C15.4215 18.5802 17.5294 16.5886 22.1568 15.3028L21.8998 15.0002C21.8998 15.0002 18.4035 14.9247 14.7019 17.622C14.7019 17.622 11 24.1512 11 32.1932C11 32.1932 13.1596 35.8235 18.8408 36C18.8408 36 19.7919 34.8908 20.5631 33.9329C17.2984 32.975 16.0643 30.9833 16.0643 30.9833C18.1155 32.242 20.1894 33.0297 22.774 33.5296C26.9789 34.3783 32.2094 33.5057 36.116 30.9833C36.116 30.9833 34.8306 33.0253 31.4629 33.958C32.2341 34.8908 33.1596 35.9748 33.1596 35.9748C38.8408 35.7984 41 32.168 41 32.1935C40.9997 24.1515 37.2981 17.6223 37.2981 17.6223ZM21.2056 29.8489C19.7659 29.8489 18.5835 28.6136 18.5835 27.0759C18.6887 23.393 23.7489 23.4043 23.8278 27.0759C23.8278 28.6136 22.6707 29.8489 21.2056 29.8489ZM30.5884 29.8489C29.1487 29.8489 27.9663 28.6136 27.9663 27.0759C28.0818 23.4003 33.0787 23.3987 33.2106 27.0759C33.2106 28.6136 32.0538 29.8489 30.5884 29.8489Z" />
                          </mask>
                          <path
                            d="M37.2981 17.6223C33.6221 14.9247 30.1002 15.0005 30.1002 15.0005L29.7403 15.4038C34.1104 16.6895 36.1413 18.5802 36.1413 18.5802C29.8888 15.2044 21.9248 15.2286 15.4215 18.5802C15.4215 18.5802 17.5294 16.5886 22.1568 15.3028L21.8998 15.0002C21.8998 15.0002 18.4035 14.9247 14.7019 17.622C14.7019 17.622 11 24.1512 11 32.1932C11 32.1932 13.1596 35.8235 18.8408 36C18.8408 36 19.7919 34.8908 20.5631 33.9329C17.2984 32.975 16.0643 30.9833 16.0643 30.9833C18.1155 32.242 20.1894 33.0297 22.774 33.5296C26.9789 34.3783 32.2094 33.5057 36.116 30.9833C36.116 30.9833 34.8306 33.0253 31.4629 33.958C32.2341 34.8908 33.1596 35.9748 33.1596 35.9748C38.8408 35.7984 41 32.168 41 32.1935C40.9997 24.1515 37.2981 17.6223 37.2981 17.6223ZM21.2056 29.8489C19.7659 29.8489 18.5835 28.6136 18.5835 27.0759C18.6887 23.393 23.7489 23.4043 23.8278 27.0759C23.8278 28.6136 22.6707 29.8489 21.2056 29.8489ZM30.5884 29.8489C29.1487 29.8489 27.9663 28.6136 27.9663 27.0759C28.0818 23.4003 33.0787 23.3987 33.2106 27.0759C33.2106 28.6136 32.0538 29.8489 30.5884 29.8489Z"
                            fill="white" />
                          <path
                            d="M37.2981 17.6223L38.168 17.1291L38.0624 16.9428L37.8897 16.8161L37.2981 17.6223ZM30.1002 15.0005L30.0787 14.0008L29.6438 14.0101L29.3541 14.3347L30.1002 15.0005ZM29.7403 15.4038L28.9942 14.738L27.9418 15.9171L29.458 16.3632L29.7403 15.4038ZM36.1413 18.5802L35.6662 19.4601L36.8227 17.8483L36.1413 18.5802ZM15.4215 18.5802L14.7347 17.8533L15.8796 19.4691L15.4215 18.5802ZM22.1568 15.3028L22.4245 16.2663L23.9312 15.8477L22.9191 14.6556L22.1568 15.3028ZM21.8998 15.0002L22.6621 14.353L22.371 14.0102L21.9214 14.0004L21.8998 15.0002ZM14.7019 17.622L14.113 16.8138L13.9385 16.9409L13.832 17.1287L14.7019 17.622ZM11 32.1932H10V32.4682L10.1406 32.7045L11 32.1932ZM18.8408 36L18.8097 36.9995L19.2882 37.0144L19.5999 36.6509L18.8408 36ZM20.5631 33.9329L21.342 34.56L22.2803 33.3946L20.8446 32.9733L20.5631 33.9329ZM16.0643 30.9833L16.5873 30.131L15.2143 31.51L16.0643 30.9833ZM22.774 33.5296L22.9718 32.5493L22.9639 32.5478L22.774 33.5296ZM36.116 30.9833L36.9622 31.516L35.5735 30.1432L36.116 30.9833ZM31.4629 33.958L31.196 32.9943L29.7091 33.4061L30.6922 34.5952L31.4629 33.958ZM33.1596 35.9748L32.399 36.6241L32.7107 36.9893L33.1906 36.9743L33.1596 35.9748ZM41 32.1935L40 32.1936L42 32.1935H41ZM18.5835 27.0759L17.5839 27.0473L17.5835 27.0616V27.0759H18.5835ZM23.8278 27.0759H24.8278V27.0651L24.8275 27.0544L23.8278 27.0759ZM27.9663 27.0759L26.9668 27.0445L26.9663 27.0602V27.0759H27.9663ZM33.2106 27.0759H34.2106V27.0579L34.2099 27.04L33.2106 27.0759ZM37.8897 16.8161C35.9239 15.3735 33.9953 14.6697 32.5517 14.3269C31.8298 14.1554 31.2271 14.0737 30.798 14.0349C30.5833 14.0155 30.4116 14.0068 30.2896 14.003C30.2285 14.0011 30.1799 14.0005 30.1445 14.0003C30.1268 14.0003 30.1124 14.0003 30.1014 14.0004C30.0959 14.0005 30.0912 14.0005 30.0874 14.0006C30.0855 14.0006 30.0839 14.0007 30.0824 14.0007C30.0817 14.0007 30.081 14.0007 30.0804 14.0007C30.0801 14.0007 30.0796 14.0007 30.0795 14.0007C30.0791 14.0008 30.0787 14.0008 30.1002 15.0005C30.1217 16.0003 30.1213 16.0003 30.121 16.0003C30.1209 16.0003 30.1205 16.0003 30.1203 16.0003C30.1199 16.0003 30.1196 16.0003 30.1193 16.0003C30.1187 16.0004 30.1183 16.0004 30.1181 16.0004C30.1177 16.0004 30.1181 16.0004 30.1194 16.0004C30.122 16.0003 30.1278 16.0003 30.1368 16.0003C30.1547 16.0004 30.1854 16.0008 30.2278 16.0021C30.3128 16.0047 30.445 16.0111 30.6179 16.0268C30.964 16.0581 31.4715 16.126 32.0896 16.2728C33.3259 16.5664 34.9963 17.1735 36.7064 18.4285L37.8897 16.8161ZM29.3541 14.3347L28.9942 14.738L30.4863 16.0697L30.8463 15.6664L29.3541 14.3347ZM29.458 16.3632C31.5552 16.9802 33.0777 17.7383 34.0645 18.3313C34.5581 18.6279 34.9181 18.8835 35.1492 19.0597C35.2647 19.1479 35.348 19.2162 35.3996 19.2598C35.4254 19.2817 35.4433 19.2973 35.4533 19.3063C35.4583 19.3107 35.4614 19.3135 35.4625 19.3145C35.463 19.315 35.4631 19.315 35.4627 19.3147C35.4625 19.3145 35.4621 19.3141 35.4617 19.3137C35.4614 19.3135 35.4612 19.3133 35.4609 19.313C35.4607 19.3129 35.4605 19.3127 35.4604 19.3126C35.4602 19.3124 35.4599 19.3121 36.1413 18.5802C36.8227 17.8483 36.8224 17.848 36.8221 17.8477C36.822 17.8476 36.8217 17.8474 36.8215 17.8472C36.8211 17.8468 36.8207 17.8464 36.8202 17.846C36.8193 17.8451 36.8182 17.8441 36.817 17.843C36.8146 17.8407 36.8116 17.8381 36.8082 17.835C36.8014 17.8287 36.7925 17.8207 36.7816 17.811C36.7597 17.7916 36.7297 17.7654 36.6914 17.733C36.6149 17.6683 36.5054 17.5788 36.3622 17.4696C36.0759 17.2512 35.655 16.9537 35.0947 16.617C33.9735 15.9433 32.2954 15.1132 30.0225 14.4445L29.458 16.3632ZM36.6164 17.7002C30.0596 14.1602 21.7461 14.1957 14.9634 17.6913L15.8796 19.4691C22.1036 16.2615 29.7179 16.2486 35.6662 19.4601L36.6164 17.7002ZM15.4215 18.5802C16.1082 19.3071 16.108 19.3073 16.1077 19.3076C16.1076 19.3076 16.1074 19.3079 16.1072 19.308C16.1069 19.3083 16.1067 19.3085 16.1064 19.3088C16.1059 19.3092 16.1056 19.3096 16.1054 19.3098C16.1049 19.3102 16.1049 19.3101 16.1055 19.3096C16.1066 19.3086 16.1098 19.3057 16.115 19.301C16.1253 19.2917 16.1439 19.2753 16.1707 19.2524C16.2243 19.2066 16.3109 19.135 16.4313 19.0427C16.6721 18.8582 17.0482 18.5911 17.5657 18.2827C18.6002 17.6664 20.2023 16.8838 22.4245 16.2663L21.8891 14.3393C19.4838 15.0076 17.7183 15.8637 16.542 16.5646C15.9541 16.9149 15.5139 17.226 15.2149 17.4551C15.0654 17.5696 14.9512 17.6637 14.8715 17.7318C14.8316 17.7659 14.8003 17.7935 14.7776 17.814C14.7662 17.8242 14.7569 17.8327 14.7498 17.8392C14.7462 17.8425 14.7432 17.8454 14.7406 17.8477C14.7394 17.8489 14.7383 17.8499 14.7373 17.8509C14.7368 17.8513 14.7363 17.8518 14.7359 17.8522C14.7357 17.8524 14.7354 17.8527 14.7353 17.8528C14.735 17.853 14.7347 17.8533 15.4215 18.5802ZM22.9191 14.6556L22.6621 14.353L21.1375 15.6474L21.3945 15.9501L22.9191 14.6556ZM21.8998 15.0002C21.9214 14.0004 21.921 14.0004 21.9206 14.0004C21.9204 14.0004 21.92 14.0004 21.9197 14.0004C21.9191 14.0004 21.9184 14.0004 21.9177 14.0004C21.9162 14.0003 21.9145 14.0003 21.9126 14.0003C21.9088 14.0002 21.9042 14.0002 21.8987 14.0001C21.8877 14 21.8733 14 21.8557 14C21.8204 14.0002 21.772 14.0008 21.7112 14.0027C21.5898 14.0065 21.4189 14.0152 21.2051 14.0347C20.7779 14.0735 20.1775 14.1553 19.4573 14.3268C18.017 14.6698 16.09 15.3732 14.113 16.8138L15.2908 18.4302C17.0155 17.1735 18.6874 16.566 19.9206 16.2724C20.5372 16.1256 21.0423 16.0577 21.3862 16.0265C21.5581 16.0108 21.6893 16.0044 21.7735 16.0018C21.8156 16.0004 21.8459 16.0001 21.8636 16C21.8725 16 21.8782 16 21.8807 16C21.8819 16 21.8823 16.0001 21.8819 16.0001C21.8817 16 21.8813 16 21.8807 16C21.8804 16 21.88 16 21.8796 16C21.8794 16 21.8791 16 21.879 16C21.8786 16 21.8782 16 21.8998 15.0002ZM14.7019 17.622C13.832 17.1287 13.8319 17.129 13.8317 17.1293C13.8316 17.1294 13.8315 17.1297 13.8313 17.1299C13.8311 17.1304 13.8307 17.131 13.8303 17.1317C13.8295 17.1331 13.8285 17.1349 13.8273 17.1371C13.8248 17.1415 13.8215 17.1475 13.8173 17.155C13.8089 17.1701 13.7971 17.1915 13.7821 17.219C13.7522 17.2739 13.7096 17.3534 13.656 17.4561C13.549 17.6615 13.3983 17.9601 13.2186 18.3421C12.8594 19.1058 12.3831 20.205 11.9074 21.5607C10.958 24.2663 10 28.0249 10 32.1932H12C12 28.3195 12.8929 24.7925 13.7946 22.2229C14.2443 20.9411 14.6935 19.9053 15.0284 19.1935C15.1957 18.8377 15.3342 18.5634 15.4297 18.3804C15.4774 18.2888 15.5143 18.2202 15.5386 18.1755C15.5507 18.1532 15.5597 18.1369 15.5653 18.1268C15.5681 18.1218 15.5701 18.1183 15.5712 18.1163C15.5717 18.1153 15.5721 18.1148 15.5722 18.1146C15.5722 18.1145 15.5722 18.1145 15.5722 18.1146C15.5721 18.1146 15.5721 18.1148 15.572 18.1148C15.5719 18.115 15.5718 18.1152 14.7019 17.622ZM11 32.1932C10.1406 32.7045 10.1409 32.705 10.1412 32.7055C10.1413 32.7056 10.1416 32.7062 10.1418 32.7065C10.1423 32.7073 10.1427 32.7081 10.1432 32.7089C10.1443 32.7107 10.1455 32.7126 10.1468 32.7148C10.1494 32.7191 10.1526 32.7243 10.1563 32.7303C10.1638 32.7424 10.1736 32.7579 10.1857 32.7766C10.2098 32.814 10.2432 32.8642 10.2863 32.9253C10.3723 33.0475 10.4972 33.214 10.6638 33.4103C10.9968 33.8026 11.4987 34.3164 12.1932 34.8328C13.5907 35.8721 15.7452 36.9043 18.8097 36.9995L18.8718 35.0005C16.2552 34.9192 14.4893 34.048 13.3867 33.228C12.8311 32.8149 12.4381 32.41 12.1886 32.1161C12.064 31.9693 11.9757 31.8508 11.9215 31.7738C11.8944 31.7353 11.8759 31.7073 11.8656 31.6914C11.8605 31.6835 11.8574 31.6786 11.8564 31.6769C11.8559 31.6761 11.8559 31.6761 11.8564 31.6769C11.8567 31.6773 11.857 31.678 11.8575 31.6788C11.8578 31.6792 11.8581 31.6797 11.8584 31.6802C11.8586 31.6805 11.8588 31.6809 11.8589 31.681C11.8592 31.6815 11.8594 31.682 11 32.1932ZM18.8408 36C19.5999 36.6509 19.5999 36.6509 19.5999 36.6509C19.5999 36.6509 19.5999 36.6509 19.6 36.6509C19.6 36.6508 19.6001 36.6507 19.6001 36.6507C19.6003 36.6505 19.6005 36.6503 19.6007 36.65C19.6012 36.6494 19.602 36.6485 19.6029 36.6474C19.6048 36.6452 19.6076 36.6419 19.6113 36.6376C19.6187 36.629 19.6294 36.6164 19.6434 36.6001C19.6713 36.5674 19.7119 36.5198 19.763 36.4598C19.8652 36.3397 20.0094 36.1697 20.1778 35.9696C20.514 35.5702 20.9498 35.0471 21.342 34.56L19.7841 33.3058C19.4051 33.7765 18.9799 34.287 18.6477 34.6817C18.4819 34.8786 18.3401 35.0458 18.2398 35.1637C18.1897 35.2226 18.15 35.2691 18.1229 35.3009C18.1093 35.3167 18.0989 35.3289 18.092 35.337C18.0885 35.3411 18.0858 35.3441 18.0841 35.3462C18.0832 35.3472 18.0826 35.3479 18.0822 35.3484C18.082 35.3486 18.0818 35.3488 18.0817 35.3489C18.0817 35.349 18.0817 35.349 18.0816 35.349C18.0816 35.3491 18.0816 35.3491 18.0816 35.3491C18.0816 35.3491 18.0816 35.3491 18.8408 36ZM20.8446 32.9733C19.3637 32.5388 18.3631 31.8765 17.7423 31.3414C17.4308 31.0729 17.2135 30.8352 17.0789 30.6724C17.0117 30.591 16.9653 30.5286 16.9382 30.4906C16.9247 30.4717 16.9161 30.4589 16.9122 30.453C16.9102 30.45 16.9094 30.4488 16.9098 30.4494C16.91 30.4496 16.9105 30.4504 16.9112 30.4516C16.9116 30.4522 16.9121 30.4529 16.9126 30.4537C16.9128 30.4542 16.9131 30.4546 16.9134 30.4551C16.9136 30.4553 16.9138 30.4557 16.9139 30.4558C16.9141 30.4562 16.9144 30.4566 16.0643 30.9833C15.2143 31.51 15.2145 31.5104 15.2148 31.5109C15.2149 31.511 15.2151 31.5114 15.2153 31.5117C15.2157 31.5123 15.2161 31.513 15.2165 31.5136C15.2173 31.5149 15.2182 31.5164 15.2192 31.5179C15.2212 31.5211 15.2235 31.5247 15.2261 31.5288C15.2313 31.5369 15.2379 31.547 15.2458 31.5589C15.2615 31.5826 15.2826 31.6135 15.3092 31.6509C15.3624 31.7256 15.4379 31.8263 15.5374 31.9466C15.7362 32.1871 16.0314 32.5072 16.4366 32.8563C17.249 33.5565 18.4978 34.369 20.2815 34.8924L20.8446 32.9733ZM15.5413 31.8356C17.7038 33.1626 19.8924 33.9908 22.5841 34.5114L22.9639 32.5478C20.4864 32.0686 18.5271 31.3213 16.5873 30.131L15.5413 31.8356ZM22.5761 34.5098C27.0295 35.4087 32.5267 34.4911 36.6584 31.8234L35.5735 30.1432C31.8921 32.5202 26.9283 33.3479 22.9718 32.5493L22.5761 34.5098ZM36.116 30.9833C35.2697 30.4506 35.2699 30.4502 35.2702 30.4498C35.2703 30.4497 35.2705 30.4493 35.2706 30.4491C35.2709 30.4486 35.2712 30.4481 35.2715 30.4477C35.272 30.4469 35.2725 30.4462 35.2729 30.4456C35.2736 30.4444 35.2741 30.4437 35.2742 30.4435C35.2745 30.443 35.2737 30.4443 35.2716 30.4475C35.2673 30.4537 35.2582 30.467 35.244 30.4866C35.2157 30.5258 35.1671 30.5901 35.0969 30.6736C34.9565 30.8407 34.7304 31.0838 34.407 31.357C33.7624 31.9015 32.7258 32.5706 31.196 32.9943L31.7298 34.9217C33.5676 34.4127 34.8575 33.5945 35.6976 32.8848C36.1166 32.5309 36.4222 32.2053 36.6281 31.9603C36.731 31.8378 36.8092 31.7353 36.8643 31.6591C36.8918 31.6211 36.9136 31.5896 36.9299 31.5655C36.938 31.5534 36.9447 31.5432 36.9501 31.535C36.9528 31.5308 36.9552 31.5272 36.9572 31.524C36.9582 31.5224 36.9591 31.521 36.96 31.5197C36.9604 31.519 36.9608 31.5184 36.9612 31.5178C36.9614 31.5175 36.9616 31.517 36.9617 31.5169C36.962 31.5165 36.9622 31.516 36.116 30.9833ZM30.6922 34.5952C31.0812 35.0657 31.508 35.5731 31.8368 35.9619C32.0014 36.1565 32.1418 36.3219 32.2411 36.4387C32.2907 36.4971 32.3301 36.5433 32.3572 36.575C32.3707 36.5909 32.3811 36.6031 32.3882 36.6114C32.3917 36.6155 32.3944 36.6187 32.3962 36.6208C32.3971 36.6219 32.3978 36.6227 32.3983 36.6233C32.3985 36.6235 32.3987 36.6237 32.3988 36.6239C32.3989 36.624 32.3989 36.624 32.399 36.6241C32.399 36.6241 32.399 36.6241 32.399 36.6241C32.399 36.6241 32.399 36.6241 33.1596 35.9748C33.9201 35.3255 33.9201 35.3255 33.9201 35.3255C33.9201 35.3255 33.9201 35.3255 33.9201 35.3255C33.9201 35.3255 33.92 35.3254 33.92 35.3254C33.9199 35.3253 33.9197 35.3251 33.9195 35.3248C33.9191 35.3243 33.9184 35.3236 33.9176 35.3226C33.9158 35.3205 33.9132 35.3175 33.9098 35.3135C33.9029 35.3054 33.8927 35.2934 33.8794 35.2778C33.8528 35.2466 33.8139 35.2009 33.7647 35.1431C33.6664 35.0274 33.5272 34.8635 33.364 34.6705C33.0373 34.2841 32.6158 33.7831 32.2336 33.3208L30.6922 34.5952ZM33.1906 36.9743C36.2552 36.8792 38.4091 35.847 39.8057 34.8118C40.4998 34.2974 41.001 33.7868 41.3329 33.3998C41.4991 33.2061 41.6228 33.0433 41.707 32.9267C41.7491 32.8683 41.7806 32.8226 41.8006 32.7931C41.8047 32.7871 41.8102 32.7791 41.8121 32.7762C41.8154 32.7714 41.8157 32.7711 41.8147 32.7724C41.8142 32.7732 41.812 32.7764 41.8087 32.781C41.8062 32.7844 41.7983 32.7954 41.7872 32.8096C41.7817 32.8167 41.7715 32.8296 41.7582 32.8451C41.7482 32.8567 41.7193 32.8902 41.6777 32.9285C41.6554 32.9485 41.5965 32.9959 41.5593 33.0222C41.496 33.0617 41.3043 33.1459 41.1731 33.1783C40.9299 33.1909 40.4187 33.0071 40.2006 32.7943C40.0932 32.6151 40.0064 32.3062 40 32.1935H42C41.9936 32.0807 41.9067 31.7718 41.7993 31.5926C41.5812 31.3796 41.0699 31.1958 40.8267 31.2085C40.6955 31.2408 40.5037 31.3252 40.4402 31.3647C40.4029 31.3911 40.3439 31.4385 40.3215 31.4586C40.2796 31.4973 40.2504 31.5311 40.24 31.5431C40.2263 31.5592 40.2157 31.5725 40.2096 31.5804C40.1898 31.6058 40.174 31.6287 40.1725 31.6309C40.1648 31.6419 40.1526 31.66 40.1481 31.6666C40.1338 31.6876 40.1133 31.7174 40.0853 31.7562C40.0292 31.8339 39.9398 31.952 39.8148 32.0978C39.5643 32.3898 39.1706 32.7931 38.6148 33.2051C37.5115 34.0228 35.7451 34.894 33.1285 34.9753L33.1906 36.9743ZM42 32.1935C41.9998 28.0252 41.0418 24.2666 40.0925 21.5611C39.6168 20.2053 39.1406 19.1062 38.7814 18.3425C38.6017 17.9604 38.451 17.6618 38.344 17.4564C38.2904 17.3537 38.2478 17.2743 38.2179 17.2193C38.2029 17.1918 38.1911 17.1705 38.1827 17.1554C38.1785 17.1478 38.1752 17.1419 38.1727 17.1375C38.1715 17.1353 38.1705 17.1335 38.1697 17.1321C38.1693 17.1314 38.169 17.1308 38.1687 17.1303C38.1685 17.13 38.1684 17.1297 38.1683 17.1296C38.1681 17.1293 38.168 17.1291 37.2981 17.6223C36.4282 18.1155 36.428 18.1153 36.4279 18.1151C36.4279 18.1151 36.4278 18.1149 36.4278 18.1149C36.4278 18.1148 36.4278 18.1148 36.4278 18.1149C36.4279 18.115 36.4282 18.1156 36.4288 18.1166C36.4299 18.1185 36.4319 18.1221 36.4347 18.1271C36.4403 18.1372 36.4493 18.1535 36.4614 18.1758C36.4857 18.2204 36.5226 18.2891 36.5703 18.3806C36.6657 18.5637 36.8042 18.838 36.9716 19.1938C37.3064 19.9056 37.7556 20.9414 38.2053 22.2232C39.1069 24.7928 39.9998 28.3198 40 32.1936L42 32.1935ZM21.2056 28.8489C20.3667 28.8489 19.5835 28.1111 19.5835 27.0759H17.5835C17.5835 29.116 19.1651 30.8489 21.2056 30.8489V28.8489ZM19.5831 27.1044C19.6025 26.4258 19.8412 25.9968 20.1199 25.7356C20.4101 25.4637 20.8039 25.3175 21.2144 25.318C21.6249 25.3184 22.0166 25.4655 22.3034 25.7362C22.5786 25.996 22.8135 26.4226 22.828 27.0973L24.8275 27.0544C24.8026 25.8934 24.3753 24.9417 23.6763 24.2818C22.9888 23.6329 22.0941 23.3189 21.2166 23.318C20.339 23.317 19.4431 23.629 18.7525 24.2761C18.0504 24.9339 17.6171 25.8845 17.5839 27.0473L19.5831 27.1044ZM22.8278 27.0759C22.8278 28.1176 22.0637 28.8489 21.2056 28.8489V30.8489C23.2776 30.8489 24.8278 29.1095 24.8278 27.0759H22.8278ZM30.5884 28.8489C29.7495 28.8489 28.9663 28.1111 28.9663 27.0759H26.9663C26.9663 29.116 28.5479 30.8489 30.5884 30.8489V28.8489ZM28.9658 27.1073C28.9872 26.4271 29.2255 25.9966 29.5024 25.7352C29.7898 25.4638 30.178 25.3186 30.5824 25.3186C30.9868 25.3185 31.3768 25.4636 31.6668 25.7363C31.9463 25.999 32.1868 26.4309 32.2112 27.1117L34.2099 27.04C34.1684 25.8822 33.7349 24.9354 33.0367 24.2791C32.3491 23.6326 31.4579 23.3184 30.5821 23.3186C29.7064 23.3187 28.8155 23.6332 28.1294 24.281C27.4327 24.9387 27.0031 25.8868 26.9668 27.0445L28.9658 27.1073ZM32.2106 27.0759C32.2106 28.1176 31.4468 28.8489 30.5884 28.8489V30.8489C32.6608 30.8489 34.2106 29.1095 34.2106 27.0759H32.2106Z"
                            fill="black" mask="url(#path-2-outside-1_71:6434)" />
                          <defs>
                            <filter id="filter0_d_71:6434" x="0" y="0" width="52" height="56" filterUnits="userSpaceOnUse"
                              >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix"
                                values="0 0 0 0 0.313726 0 0 0 0 0.380392 0 0 0 0 0.65098 0 0 0 1 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_71:6434" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_71:6434" result="shape" />
                            </filter>
                          </defs>
                        </a>
                      </svg>
                      <svg width="52" height="56" viewBox="0 0 52 56" fill="none">
                        <a target="_blank">
                          <g filter="url(#filter0_d_183:24)">
                            <circle cx="26" cy="26" r="26" fill="#8EDCFF" />
                          </g>
                          <path
                            d="M41.2051 17.9072L42.1586 16.4771L40.5868 17.1727C40.1515 17.3653 39.7031 17.531 39.2427 17.6683C39.7918 17.0307 40.217 16.2832 40.4784 15.4627L40.8776 14.2098L39.7468 14.881C38.7363 15.4808 37.6262 15.929 36.4444 16.1888C35.2959 15.0669 33.7231 14.375 31.9977 14.375C28.4816 14.375 25.6368 17.2273 25.6368 20.742C25.6368 21.0097 25.652 21.2752 25.6839 21.5372C21.2149 21.1414 17.2682 18.9259 14.591 15.6314L14.1342 15.0692L13.7705 15.6957C13.2252 16.6352 12.9098 17.7326 12.9098 18.8953C12.9098 20.4436 13.4656 21.8652 14.3857 22.9703C14.1143 22.8718 13.8537 22.7519 13.6062 22.6129L12.8614 22.1946V23.0488V23.1215C12.8614 25.4132 14.0698 27.4186 15.8824 28.5398C15.7599 28.5244 15.6389 28.5046 15.5196 28.4803L14.6843 28.3104L14.9437 29.1225C15.6186 31.2351 17.3696 32.8664 19.5512 33.3779C17.8272 34.4432 15.7934 35.0578 13.6157 35.0578C13.1648 35.0578 12.7183 35.0289 12.2758 34.9765L11.9442 35.8921C14.6089 37.6269 17.7851 38.625 21.1901 38.625C32.3194 38.625 38.3829 29.397 38.3829 21.4262C38.3829 21.2548 38.3802 21.0834 38.3749 20.9135C39.4758 20.0784 40.4349 19.0625 41.2051 17.9072Z"
                            fill="white" stroke="black" />
                          <defs>
                            <filter id="filter0_d_183:24" x="0" y="0" width="52" height="56" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix"
                                values="0 0 0 0 0.263676 0 0 0 0 0.682706 0 0 0 0 0.870732 0 0 0 1 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_183:24" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_183:24" result="shape" />
                            </filter>
                          </defs>
                        </a>
                      </svg>
                      <span className="wallet-connect">wallet connect</span>
                    </div>
                </div> 
            </div>
            <section className="mint" id="mint">
               <div className="section-title">
                  <span></span>Mint<span></span>
                </div>
                <div className="mint-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                           <div className="mint-img">
                               <img className="img-responsive" src="assets/images/about.gif" />
                           </div>
                        </div>
                        <div className="col-md-6 mint-outer">
                          <div className="mint-wrap">
                            <div className="token-available-wrap">
                              <div className="available-wrap">
                                <span>avalilable</span> <span className="mint-count">10000 / 10000</span>
                              </div>
                              {/* <div className="price-wrap">
                                  <button className="btn-decrease" onClick={decrease}> - </button>
                                  <span>{input}</span>
                                  <button className="btn-decrease" onClick={increase}> + </button>  
                              </div>
                              <div className="price-value">
                                <span>price : </span><span>{input * price} VET</span>
                              </div> */}
                            </div>
                            {/* <button className="btn-common">mint</button> */}
                            <div className='mint-date'>
                                  First Mint Date: 26th of Febrary 2022 12 UTC + 0</div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="assets" id="assets">
              <div className="section-title">
                <span></span>Your assets<span></span>
              </div>
              <div className="container">
              
                <div className="assets-list">
                  <div className="no-assets" >You should first connect to wallet.</div>
                {/* <AliceCarousel 
                  mouseTracking
                   responsive={responsive}
                    // disableDotsControls
                    disableButtonsControls
                >
                    {assets.map((asset, idx) => 
                      <div className="assets-item">
                        <div className="assets-info-wrap">
                          <div className="assets-img-wrap">
                            <img className="img-responsive" src={"assets/images/" + asset.image} />
                          </div>
                          <div className="assets-info">
                                <p className="text-cente ai-title">Attributes</p>
                                {Object.entries(asset.attribute).map(([key, value]) => 
                                  <p><span>{key}:</span><span>{value}</span></p>
                                )}
                          </div>
                        </div>
                        <div className="item-name">InfinityViracles#800{idx}</div>
                        <div className="transfer-outer">
                          <div className="transfer-wrap">
                              <input type="text" className="" defaultValue=""/>
                              <button>transfer</button>
                          </div>       
                        </div>
                      </div>
                    )}
                  </AliceCarousel>     */}
                </div>
              </div>
            </section>
            <div className="footer"></div>
        </div>    
    )
}

export default Mint