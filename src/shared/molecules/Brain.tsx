import React, { useRef } from "react";
import BrainImage from "../../app/assets/brain.webp";
import { m } from "framer-motion";

const partAnimation = (index: number, duration: number = 0.3) => ({
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    type: "spring",
    duration: duration,
    bounce: 0.25,
    delay: 0.3 + 0.1 * index,
  },
});

export const Brain = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<SVGPathElement>) => {
    if (ref.current) {
      const value = e.currentTarget.ariaLabel || "Your ad";
      ref.current.style.visibility = "visible";
      ref.current.style.top = e.clientY + window.scrollY + "px";
      ref.current.style.left = e.clientX + "px";
      ref.current.innerText = value;
    }
  };

  const onMouseLeave = () => {
    if (ref.current) {
      ref.current.style.visibility = "hidden";
    }
  };
  return (
    <>
      <m.svg
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 md:w-[750px] w-[350px] text-[3.5rem] select-none"
        width="750"
        height="750"
        viewBox="0 0 2000 2000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          mass: 0.5,
          delay: 0.2,
        }}
      >
        <rect width="2000" height="2000" fill="url(#pattern0)" />
        <m.path
          d="M656 1188L566.5 1278.5L529 1277L438.5 1290L318.5 1278.5L269 1255L195 1145.5L200.5 1118.5L172.5 1095L160.5 984L205.5 804L245.5 712.5L279.5 660.5L329 632.5L356 583L510 485.5L626.5 425.5L689 412.5L800.5 393.5L901 376L973.5 396L1031.5 379.5L1119.5 385.5L1253.5 410L1205.5 449L1146.5 483V549L1045.5 591.5L979.5 642L968 700.5L998.5 742L991.5 753.5L929 767.5L851.5 836L820.5 978.5L849 1055L844.5 1078.5L853.5 1146.5L838.5 1165.5L703 1168L656 1188Z"
          className="fill-cyan-400/50"
          {...partAnimation(0, 1.2)}
        />

        <m.g className="group " {...partAnimation(0)}>
          <path
            d="M970 698.5L994 741.5L928 770.5L853 834.5L819.5 975L853 1052L845 1085.5L854.5 1149.5L834 1167.5L696 1172L654.5 1194.5L566.5 1274.5L520 1236L483 1234.5L414.5 1215.5L374.5 1180L366.5 1145L416 1089L451 1025L486.5 1015L568 1001L616 972L688 949.5L689.5 813.5L633.5 778.5L585.5 720.5L590.5 647L617.5 575L664 536.5L753.5 520.5L827.5 549.5L866 583L875.5 631L966.5 666.5L970 698.5Z"
            className="fill-black/0 hover:fill-cyan-800/70 transition-[fill] group-hover:fill-cyan-800/70"
            aria-label="React"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M76.6796 1383.69C26.5278 1262.57 0.677787 1132.78 0.600098 1001.69L100.6 1001.63C100.67 1119.61 123.935 1236.42 169.072 1345.43L76.6796 1383.69Z"
            className="fill-cyan-400/50 group-hover:fill-cyan-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="2" dx="115" fill="white">
            <textPath href="#textcircle">React</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(1)}>
          <path
            d="M520 1237.5L565 1276L445 1293.5L326.5 1281L265.5 1253.5L196.5 1143.5V1114.5L171 1097L166.5 1021.5L195 1044L185.5 1015L249.5 913L293 855L320 845.5L345.5 868L397 874.5L421 842.5L405 813.5L401.5 765.5L419 727L456 701.5L523 687L473.5 644L481.5 618.5L520 596L582.5 560.5L665.5 536.5L621 572L587.5 640.5L584 716L635.5 780L693 815L685 951L624 967L561.5 1004L451 1025L421 1082.5L365 1141.5L374.5 1178.5L416 1217L520 1237.5Z"
            className="fill-black/0 hover:fill-cyan-800/70 transition-[fill] group-hover:fill-cyan-800/70"
            aria-label="Next.js"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M0.600098 1000.69C0.653358 869.943 26.3471 740.473 76.2269 619.611L168.664 657.76C123.772 766.536 100.648 883.059 100.6 1000.73L0.600098 1000.69Z"
            className="fill-cyan-400/50 group-hover:fill-cyan-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="30" dx="70" fill="white">
            <textPath href="#textcircle-reverse">Next.js</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(2)}>
          <path
            d="M161.5 1015L187 1039V1013.5L228.5 938.5L293 860L323 842.5L337.5 863L398.5 876L421 841L409.5 813.5L400 768.5L417.5 728.5L461 703L523 684L475 645.5L481.5 620L526.5 596L515 541.5L563.5 501.5L614.5 479L638.5 448.5L621 428L357 583L334.5 628L281.5 658.5L204.5 804L161.5 981.5V1015Z"
            className="fill-black/0 hover:fill-cyan-800/70 transition-[fill] group-hover:fill-cyan-800/70"
            aria-label="Redux"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M76.606 618.687C126.735 497.564 200.19 387.479 292.79 294.695L363.571 365.336C280.231 448.841 214.121 547.918 169.005 656.928L76.606 618.687Z"
            className="fill-cyan-400/50 group-hover:fill-cyan-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="30" dx="480" fill="white">
            <textPath href="#textcircle-reverse">Redux</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(3)}>
          <path
            d="M508 568L523.5 592.5L587 559.5L664 537L753 521L828.5 549.5L863.5 581L879 632.5L971 669.5L978.5 647L1042 595.5L1146.5 545.5V484L1255 410L1127 382.5L1030.5 381.5L974 398L904.5 376.5L714 402L629 431.5L641 449L607.5 476.5L521.5 531L508 568Z"
            className="fill-black/0 hover:fill-cyan-800/70 transition-[fill] group-hover:fill-cyan-800/70"
            aria-label="Framer Motion"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M293.496 293.987C386.189 201.295 496.202 127.733 617.275 77.4845L655.607 169.846C546.641 215.069 447.629 281.276 364.206 364.698L293.496 293.987Z"
            className="fill-cyan-400/50 group-hover:fill-cyan-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="30" dx="850" fill="white">
            <textPath href="#textcircle-reverse">Framer</textPath>
          </text>
        </m.g>

        {/* 2 */}
        <m.path
          d="M939.5 1085.5L853 1148L845 1081L851.5 1057L821 973.5L853 836L928 768.5L997 744.5L968 703L978 647L1038.5 599L1149 546L1147.5 487L1254.5 412L1376.5 460L1429 496.5L1515.5 528.5L1602 605.5L1632.5 660L1699.5 765.5L1770 857L1763.5 919L1746 965.5H1727L1707.5 962.5L1679 1066.5L1639 1084L1584.5 1087V1050.5L1571.5 1041L1520.5 1090.5L1439 1097L1375 1058.5L1349 1009L1370 865L1368.5 767L1309 759L1277 802.5L1206.5 845.5L1179.5 983L1134.5 1028H1029L939.5 1085.5Z"
          className="fill-amber-400/50"
          {...partAnimation(4, 1.2)}
        />
        <m.g className="group" {...partAnimation(4)}>
          <path
            d="M852.5 1141L954.5 1068.5L919 1014L917.5 979.5L889.5 935L902.5 880.5L938 833.5L982.5 831L1047.5 850L1092 748L1133.5 691L1301.5 628.5L1271 534.5L1305.5 504L1371.5 503L1416 517L1436.5 501.5L1401 475L1252 411L1149 485L1147.5 546L1039.5 595.5L981 649L968.5 706.5L995 749.5L925 771L852.5 833.5L821 981L851.5 1058.5L846.5 1075L852.5 1141Z"
            className="fill-black/0 hover:fill-amber-800/70 transition-[fill] group-hover:fill-amber-800/70"
            aria-label="Jest"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M618.203 77.1023C739.015 27.1039 868.46 1.28305 999.21 1.10144L999.349 101.101C881.674 101.265 765.174 124.504 656.442 169.502L618.203 77.1023Z"
            className="fill-amber-400/50 group-hover:fill-amber-800/70 transition-[fill]"
            strokeLinejoin="round"
          />

          <text dy="35" dx="1250" fill="white">
            <textPath href="#textcircle-reverse">Jest</textPath>
          </text>
        </m.g>

        <m.g className="group" {...partAnimation(5)}>
          <path
            d="M1397 724L1371.5 759.5L1309 761L1272.5 805.5L1207.5 842.5L1184.5 978.5L1135 1028L1033.5 1025.5L955.5 1061L917.5 1015.5L913.5 976L891 936.5L892 907L916.5 850L935.5 833.5H982.5L1046 848.5L1095.5 739.5L1135 688.5L1298 632.5L1348.5 635L1481 705L1444 709L1397 724Z"
            className="fill-black/0 hover:fill-amber-800/70 transition-[fill] group-hover:fill-amber-800/70"
            aria-label="Storybook"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1000.4 1.10024C1131.49 1.07354 1261.3 26.8203 1382.45 76.8756L1344.27 169.298C1235.23 124.248 1118.4 101.076 1000.42 101.1L1000.4 1.10024Z"
            className="fill-amber-400/50 group-hover:fill-amber-800/70 transition-[fill]"
            strokeLinejoin="round"
          />

          <text dy="30" dx="1550" fill="white">
            <textPath href="#textcircle-reverse">Storybook</textPath>
          </text>
        </m.g>

        <m.g className="group" {...partAnimation(6)}>
          <path
            d="M1745.5 965.5L1715 959.5V931.5L1694.5 859L1673 824.5L1608 776L1572.5 773.5L1552 766L1498.5 757V735.5L1481 706.5L1428.5 678.5L1337 631L1301.5 627.5L1270 534.5L1299 503L1366.5 500.5L1416 517L1446.5 500.5L1520.5 534.5L1605.5 609.5L1629.5 649L1694.5 759.5L1768.5 856.5L1762 927.5L1745.5 965.5Z"
            className="fill-black/0 hover:fill-amber-800/70 transition-[fill] group-hover:fill-amber-800/70"
            aria-label="Nx"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1383.37 77.2587C1504.48 127.435 1614.53 200.932 1707.28 293.569L1636.61 364.322C1553.14 280.949 1454.09 214.802 1345.1 169.643L1383.37 77.2587Z"
            className="fill-amber-400/50 group-hover:fill-amber-800/70 transition-[fill]"
            strokeLinejoin="round"
          />

          <text dy="30" dx="2040" fill="white">
            <textPath href="#textcircle-reverse">Nx</textPath>
          </text>
        </m.g>

        <m.g className="group" {...partAnimation(7)}>
          <path
            d="M1392 725.5L1370 766L1371.5 838.5L1365 893L1347.5 1014L1375.5 1058.5L1432.5 1100.5L1523 1089L1570 1043L1582.5 1048.5L1590 1089L1637.5 1090.5L1683 1061L1717.5 950.5L1693 854L1671.5 820.5L1614.5 778.5L1570 773.5L1548.5 763.5L1498.5 759.5V733L1478.5 705H1448L1392 725.5Z"
            className="fill-black/0 hover:fill-amber-800/70 transition-[fill] group-hover:fill-amber-800/70"
            aria-label="Webpack/Vite"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1707.99 294.275C1800.41 386.766 1873.79 496.483 1923.98 617.215L1831.64 655.604C1786.47 546.945 1720.43 448.2 1637.25 364.958L1707.99 294.275Z"
            className="fill-amber-400/50 group-hover:fill-amber-800/70 transition-[fill]"
            strokeLinejoin="round"
          />

          <text dy="30" dx="2340" fill="white">
            <textPath href="#textcircle-reverse">Webpack</textPath>
          </text>
        </m.g>

        {/* 3 */}
        <m.path
          d="M1509 1428L1399 1417L1431 1404L1482 1359.5L1487 1311.5L1467.5 1229.5L1503 1253.5L1538 1242.5L1583 1196L1591 1159.5L1592.5 1089L1647 1085.5L1680.5 1063L1714 961L1747.5 969L1773.5 874.5L1786 925.5L1835.5 1017L1843.5 1111.5L1832.5 1156L1834 1223.5L1810 1295.5L1749.5 1390L1683.5 1404L1664.5 1426.5L1554 1441L1509 1428Z"
          className="fill-purple-400/50"
          {...partAnimation(8, 0.6)}
        />

        <m.g className="group" {...partAnimation(8)}>
          <path
            d="M1467 1234L1484.5 1307.5L1529 1313L1654 1281L1673 1264.5V1226.5L1704.5 1196L1729 1192L1777 1166.5L1834.5 1168L1846 1115.5L1835.5 1016.5L1787.5 925L1774.5 873L1746.5 967L1715 962L1682 1061L1648.5 1084L1593 1095.5L1584 1198.5L1537 1243L1501 1253L1467 1234Z"
            className="fill-black/0 hover:fill-purple-800/70 transition-[fill] group-hover:fill-purple-800/70"
            aria-label="Nest.js"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1924.36 618.138C1974.56 739.231 2000.47 869.012 2000.6 1000.1L1900.6 1000.2C1900.48 882.221 1877.17 765.417 1831.99 656.434L1924.36 618.138Z"
            className="fill-purple-400/50 group-hover:fill-purple-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="25" dx="2720" fill="white">
            <textPath href="#textcircle-reverse">Nest.js</textPath>
          </text>
        </m.g>

        <m.g className="group" {...partAnimation(9)}>
          <path
            d="M1529 1310.5L1487 1307.5L1481 1352L1463 1374L1398 1417L1469.5 1428.5L1551 1437.5L1652.5 1428.5L1685.5 1409.5L1758 1386.5L1818 1282.5L1837 1218.5L1830.5 1165.5H1776L1729 1192L1701 1197L1673 1226.5L1676.5 1257L1659 1278.5L1529 1310.5Z"
            className="fill-black/0 hover:fill-purple-800/70 transition-[fill] group-hover:fill-purple-800/70"
            aria-label="Node.js"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M2000.6 1001.1C2000.6 1132.19 1974.83 1261.99 1924.75 1383.14L1832.33 1344.93C1877.41 1235.9 1900.6 1119.08 1900.6 1001.1H2000.6Z"
            className="fill-purple-400/50 group-hover:fill-purple-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="3" dx="2710" fill="white">
            <textPath href="#textcircle">Node.js</textPath>
          </text>
        </m.g>

        {/* 4 */}
        <m.g className="group" {...partAnimation(10)}>
          <path
            d="M1192.5 1574L1102.5 1490.5L1253 1463.5L1389 1418.5L1479 1425L1551 1441L1664.5 1428L1610 1522.5L1463 1596L1373 1617L1275.5 1615.5L1192.5 1574Z"
            className="fill-pink-400/50 hover:fill-pink-800/70 transition-[fill] group-hover:fill-pink-800/70"
            aria-label="MongoDB"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1924.36 1384.06C1874.29 1504.84 1801.02 1614.63 1708.69 1707.22L1637.89 1636.61C1720.98 1553.28 1786.92 1454.47 1831.99 1345.77L1924.36 1384.06Z"
            className="fill-pink-400/50 group-hover:fill-pink-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="5" dx="2350" fill="white">
            <textPath href="#textcircle">MongoDB</textPath>
          </text>
        </m.g>

        {/* 5 */}
        <m.path
          d="M702.5 1167.5H838.5L858 1143.5L1029 1029.5L1134.5 1031L1187.5 977L1205 841L1280.5 796L1322 756L1367 757.5L1370 772L1371.5 858.5L1349 1017L1371.5 1057L1435.5 1100L1522 1085.5L1576.5 1044L1591 1077.5V1151.5L1579.5 1196L1541 1242.5L1501 1252L1471 1233L1488.5 1313L1479 1351.5L1429 1404L1381 1417L1251.5 1463.5L1048 1498.5L954 1545L821 1578.5L720 1564L579.5 1484L545.5 1414L531.5 1349.5L569.5 1281L654.5 1189.5L702.5 1167.5Z"
          className="fill-emerald-400/50"
          {...partAnimation(11, 1.2)}
        />
        <m.g className="group" {...partAnimation(11)}>
          <path
            d="M1270 1231.5L1268.5 1145L1325.5 1068.5L1343.5 1010L1373 1058.5L1439 1100.5L1529 1087.5L1575 1040.5L1590 1082.5L1584 1196L1539.5 1246.5L1502.5 1254.5L1468 1231.5L1361.5 1243L1270 1231.5Z"
            className="fill-black/0 hover:fill-emerald-800/70 transition-[fill] group-hover:fill-emerald-800/70"
            aria-label="SASS/SCSS"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1707.99 1707.93C1615.33 1800.65 1505.35 1874.26 1384.3 1924.56L1345.93 1832.21C1454.88 1786.95 1553.86 1720.7 1637.25 1637.24L1707.99 1707.93Z"
            className="fill-emerald-400/50 group-hover:fill-emerald-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="10" dx="2000" fill="white">
            <textPath href="#textcircle">SASS</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(12)}>
          <path
            d="M1030.5 1029.5L907.5 1109.5L919 1133.5L1024.5 1156.5L1051 1152.5L1086.5 1126L1139 1112L1175.5 1091.5L1222.5 1105.5L1271 1142.5L1329.5 1065L1350 1007.5L1369 879L1366.5 759.5L1314.5 761L1280 800.5L1207.5 845L1184.5 977L1135 1029.5H1030.5Z"
            className="fill-black/0 hover:fill-emerald-800/70 transition-[fill] group-hover:fill-emerald-800/70"
            aria-label="HTML/CSS"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1383.37 1924.94C1262.27 1975.12 1132.48 2001 1001.39 2001.1L1001.31 1901.1C1119.29 1901.01 1236.1 1877.72 1345.09 1832.56L1383.37 1924.94Z"
            className="fill-emerald-400/50 group-hover:fill-emerald-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="9" dx="1570" fill="white">
            <textPath href="#textcircle">HTML/CSS</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(13)}>
          <path
            d="M1264.5 1143.5L1270 1231.5L1214 1272L1155.5 1285L1058.5 1307.5L1006.5 1296.5L971 1235.5L906 1222.5L888.5 1208.5L845 1194.5L841.5 1165.5L905 1109.5L917.5 1131L949.5 1141L1025.5 1155L1081.5 1128.5L1131 1114.5L1177 1089L1220 1104.5L1264.5 1143.5Z"
            className="fill-black/0 hover:fill-emerald-800/70 transition-[fill] group-hover:fill-emerald-800/70"
            aria-label="TailwindCSS"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M1000.4 2001.1C869.649 2001.07 740.173 1975.41 619.301 1925.55L657.431 1833.11C766.216 1877.98 882.744 1901.08 1000.42 1901.1L1000.4 2001.1Z"
            className="fill-emerald-400/50 group-hover:fill-emerald-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="3" dx="1210" fill="white" className="text-[3rem]">
            <textPath href="#textcircle">Tailwind</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(14)}>
          <path
            d="M954.5 1544.5L852.5 1571L858 1554.5L894.5 1520L915 1455L954.5 1436L1022 1438.5L1001.5 1398L1006.5 1301.5L1034.5 1310.5L1089 1301.5L1208.5 1272L1273.5 1234L1359 1238L1465.5 1235.5L1487 1313L1483.5 1355L1412 1409.5L1258.5 1461.5L1043.5 1496L954.5 1544.5Z"
            className="fill-black/0 hover:fill-emerald-800/70 transition-[fill] group-hover:fill-emerald-800/70"
            aria-label="JavaScript"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M618.371 1925.17C497.238 1875.06 387.138 1801.63 294.335 1709.05L364.962 1638.26C448.484 1721.58 547.574 1787.67 656.594 1832.76L618.371 1925.17Z"
            className="fill-emerald-400/50 group-hover:fill-emerald-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="3" dx="800" fill="white" className="text-[3rem]">
            <textPath href="#textcircle">JavaScript</textPath>
          </text>
        </m.g>
        <m.g className="group" {...partAnimation(15)}>
          <path
            d="M845 1196L840 1168L704 1171.5L652 1192L570.5 1276L531 1349.5L540 1402L582 1487L721.5 1567L819.5 1580L849 1571L854 1550.5L877 1545.5L896 1519L913.5 1452.5L950.5 1431L1020.5 1433.5L999 1402L1002.5 1358.5L1005.5 1300L969.5 1235.5L910 1225L877 1203.5L845 1196Z"
            className="fill-black/0 hover:fill-emerald-800/70 transition-[fill] group-hover:fill-emerald-800/70"
            aria-label="TypeScript"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />
          <path
            d="M293.628 1708.34C200.918 1615.67 127.333 1505.67 77.0601 1384.61L169.414 1346.26C214.659 1455.21 280.886 1554.21 364.325 1637.62L293.628 1708.34Z"
            className="fill-emerald-400/50 group-hover:fill-emerald-800/70 transition-[fill]"
            strokeLinejoin="round"
          />
          <text dy="2" dx="435" fill="white" className="text-[3rem]">
            <textPath href="#textcircle">TypeScript</textPath>
          </text>
        </m.g>

        <path
          d="M34.303,1001.1a961.414,961.414 0 1,0 1922.828,0a961.414,961.414 0 1,0 -1922.828,0"
          fill="none"
          id="textcircle"
        />
        <path
          d="M34.302999999999884,1001.1A961.414,961.414 0 1 11957.1309999999999,1001.1A961.414,961.414 0 1 134.303,1001.1"
          fill="none"
          id="textcircle-reverse"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image" transform="scale(0.0005)" />
          </pattern>
          <m.image
            id="image"
            width="2000"
            height="2000"
            xlinkHref={BrainImage}
          />
        </defs>
      </m.svg>
      <div
        ref={ref}
        style={{ visibility: "hidden" }}
        className="absolute bg-stone-700 rounded-lg px-2 py-1 -translate-x-1/2 -translate-y-12 opacity-80 text-stone-300 text-sm"
      >
        hello
      </div>
    </>
  );
};
