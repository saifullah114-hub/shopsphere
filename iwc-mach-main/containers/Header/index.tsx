import styles from "./header.module.scss";
import React from "react";
import Image from "next/image";
import Flex from "../../components/Flex";
import Link from "../../components/Link";
import ServiceMenusNav from "../ServiceMenus";
import { useWidth } from "../../utils/hooks";
import theme from "../../theme";
import {
  CountryDiv,
  CountrySpan,
  ServiceMenus,
  ServiceMenusList,
} from "../../utils/assets";

const Header = () => {
  return (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      maxWidth='1920px'
      margin='0 auto'
      padding={useWidth() < 767 ? "6px 15px 0px" : "6px 30px 0px"}
      transition='transform 500ms cubic-bezier(0.23, 1, 0.32, 1)'
      top='0'
      minHeight='auto'
      background='black'
      position='sticky'
      zIndex={109}
      width='auto'
      className={styles.iwc_header}
    >
      <Flex
        alignItem='center'
        width='100%'
        divcolor={theme.color.white}
        className={styles.iwc_header_leftbar}
      >
        <CountryDiv tabIndex={0}>
          <span>Location: US</span>
          <CountrySpan>
            USD
            <Image
              src={"./images/arrow-down.svg"}
              alt='arrowdown'
              width={26}
              height={15}
              className={styles.headericons}
            />
          </CountrySpan>
        </CountryDiv>
        <Flex
          className={styles.callus}
          tabIndex={0}
        >
          <Image
            src={"./images/phone.svg"}
            alt='phone'
            width={22}
            height={16}
            className={styles.headericons}
          />
          <div className='iwc-HelveticaNeue'>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              color={theme.color.white}
              textDecoration='none'
            >
              {" "}
              CALL US{" "}
            </Link>
          </div>
        </Flex>
      </Flex>

      <div className={styles.iwc_header_mobile}>
        <div className={styles.menu}>
          <Image
            src={"./images/menu.svg"}
            alt='menu'
            height={40}
            width={21.164}
            className={styles.headericons}
          />
          <Image
            src={"./images/search-icon.svg"}
            alt='search'
            height={40}
            width={17.883}
            className={styles.headericons}
          />
        </div>

        <div
          className={styles.logo_mobile}
          tabIndex={0}
        >
          <Link
            href='https://www.iwc.com/us/en/home.html'
            color={theme.color.white}
            textDecoration='none'
          >
            <svg
              viewBox='0 0 109 42'
              xmlns='http://www.w3.org/2000/svg'
              className='iwc-logo-new-svg'
              role='img'
              aria-label='IWC Schaffhausen'
            >
              <title>IWC Schaffhausen</title>
              <g
                fill='none'
                fillRule='evenodd'
              >
                <g transform='translate(22.75 .154)'>
                  <path
                    d='M.195 23.832v-.603c1.805-.1 2.64-.5 2.64-2.005V3.038C2.836 1.533 2 1.098.363 1.03v-.6h8.424v.601c-1.604.068-2.44.502-2.44 2.007v18.186c0 1.505.836 1.905 2.642 2.005v.603H.195zM40.546 3.806l-7.454 20.192h-.6L27.207 8.82l-6.319 15.178h-.602L13.032 3.004c-.435-1.237-.97-1.872-2.674-1.973V.43h8.692v.601c-1.705.1-2.173.67-2.173 1.438 0 .401.234 1.137.468 1.771l4.546 13.206 4.514-10.999-1.272-3.744c-.4-1.137-1.035-1.571-2.54-1.672V.43h8.66v.601c-2.007.034-2.24.703-2.24 1.238 0 .367.133.935.367 1.57l4.548 13.139L38.24 5.243c.569-1.537.736-2.474.736-2.84 0-.904-.702-1.271-2.374-1.372V.43h7.456v.601c-1.773.1-2.708.635-3.512 2.775zM54.42 24.333c-7.254 0-11.433-5.115-11.433-12.203 0-4.279 2.575-11.934 11.535-11.934 4.045 0 5.114 1.57 6.518 1.57.535 0 .903-.267 1.002-1.27h.603l.266 7.122h-.7c-.904-4.08-3.878-6.085-7.388-6.085-1.84 0-3.544.635-4.883 2.006-1.703 1.738-2.774 4.613-2.774 8.591 0 6.185 2.742 10.599 8.023 10.599 3.544 0 5.75-1.405 7.49-4.146l.602.334c-1.773 3.443-4.714 5.416-8.861 5.416z'
                    fill='#000000'
                    mask='url(#b)'
                  ></path>
                </g>
                <path
                  d='M102.737 41.683h1.224v-5.037l3.904 5.037h1.043V34.6h-1.225v4.897L103.89 34.6h-1.153v7.082zm-9.145 0h5.3V40.57h-4.056v-1.902h3.55v-1.114h-3.55v-1.84h4.006V34.6h-5.25v7.082zm-6.1.101c1.487 0 2.53-.79 2.53-2.114v-.02c0-1.173-.77-1.71-2.267-2.074-1.366-.324-1.69-.566-1.69-1.113v-.02c0-.466.426-.84 1.154-.84.647 0 1.285.253 1.923.728l.667-.94c-.718-.577-1.538-.89-2.57-.89-1.406 0-2.418.839-2.418 2.053v.02c0 1.306.85 1.751 2.357 2.115 1.316.303 1.6.576 1.6 1.082v.02c0 .526-.486.89-1.256.89-.87 0-1.557-.333-2.235-.92l-.75.89a4.367 4.367 0 0 0 2.956 1.133zm-9.257.01c1.853 0 3.046-1.062 3.046-3.176V34.6h-1.244v4.077c0 1.306-.678 1.962-1.78 1.962-1.113 0-1.791-.697-1.791-2.012V34.6h-1.244v4.077c0 2.054 1.173 3.117 3.014 3.117zm-10.56-2.923l1.213-2.833 1.225 2.833h-2.437zm-2.458 2.812h1.275l.729-1.71h3.348l.718 1.71h1.315l-3.116-7.132h-1.153l-3.116 7.132zm-9.468 0h1.244v-2.984h3.379v2.984h1.243V34.6h-1.243v2.945h-3.38V34.6H55.75v7.082zm-8.7 0h1.244V38.8h3.571v-1.133h-3.57v-1.932h4.025v-1.134h-5.27v7.082zm-8.862 0h1.245V38.8h3.571v-1.133h-3.571v-1.932h4.026v-1.134h-5.27v7.082zm-8.193-2.812l1.214-2.833 1.223 2.833h-2.437zm-2.459 2.812h1.275l.729-1.71h3.348l.718 1.71h1.315l-3.116-7.132h-1.153l-3.116 7.132zm-9.195 0h1.244v-2.984h3.38v2.984h1.244V34.6h-1.245v2.945h-3.379V34.6H18.34v7.082zm-6.282.121c1.325 0 2.135-.485 2.873-1.254l-.799-.81c-.607.567-1.163.911-2.033.911-1.356 0-2.337-1.123-2.337-2.509v-.02c0-1.386.991-2.498 2.337-2.498.809 0 1.416.353 1.983.88l.799-.92c-.678-.648-1.467-1.103-2.772-1.103-2.145 0-3.652 1.648-3.652 3.661v.02c0 2.034 1.538 3.642 3.601 3.642zm-9.104-.02c1.487 0 2.529-.79 2.529-2.114v-.02c0-1.173-.769-1.71-2.266-2.074-1.366-.324-1.69-.566-1.69-1.113v-.02c0-.466.425-.84 1.154-.84.647 0 1.284.253 1.922.728l.667-.94c-.718-.577-1.537-.89-2.569-.89-1.406 0-2.418.839-2.418 2.053v.02c0 1.306.85 1.751 2.357 2.115 1.315.303 1.599.576 1.599 1.082v.02c0 .526-.486.89-1.255.89-.87 0-1.558-.333-2.235-.92L0 40.65a4.366 4.366 0 0 0 2.954 1.133z'
                  fill='#000000'
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </div>

      <div
        className={styles.iwc_header_logo}
        tabIndex={0}
      >
        <a href='https://www.iwc.com/us/en/home.html'>
          <svg
            viewBox='0 0 109 42'
            xmlns='http://www.w3.org/2000/svg'
            className='iwc-logo-new-svg'
            role='img'
            aria-label='IWC Schaffhausen'
          >
            <title>IWC Schaffhausen</title>
            <g
              fill='none'
              fillRule='evenodd'
            >
              <g transform='translate(22.75 .154)'>
                <path
                  d='M.195 23.832v-.603c1.805-.1 2.64-.5 2.64-2.005V3.038C2.836 1.533 2 1.098.363 1.03v-.6h8.424v.601c-1.604.068-2.44.502-2.44 2.007v18.186c0 1.505.836 1.905 2.642 2.005v.603H.195zM40.546 3.806l-7.454 20.192h-.6L27.207 8.82l-6.319 15.178h-.602L13.032 3.004c-.435-1.237-.97-1.872-2.674-1.973V.43h8.692v.601c-1.705.1-2.173.67-2.173 1.438 0 .401.234 1.137.468 1.771l4.546 13.206 4.514-10.999-1.272-3.744c-.4-1.137-1.035-1.571-2.54-1.672V.43h8.66v.601c-2.007.034-2.24.703-2.24 1.238 0 .367.133.935.367 1.57l4.548 13.139L38.24 5.243c.569-1.537.736-2.474.736-2.84 0-.904-.702-1.271-2.374-1.372V.43h7.456v.601c-1.773.1-2.708.635-3.512 2.775zM54.42 24.333c-7.254 0-11.433-5.115-11.433-12.203 0-4.279 2.575-11.934 11.535-11.934 4.045 0 5.114 1.57 6.518 1.57.535 0 .903-.267 1.002-1.27h.603l.266 7.122h-.7c-.904-4.08-3.878-6.085-7.388-6.085-1.84 0-3.544.635-4.883 2.006-1.703 1.738-2.774 4.613-2.774 8.591 0 6.185 2.742 10.599 8.023 10.599 3.544 0 5.75-1.405 7.49-4.146l.602.334c-1.773 3.443-4.714 5.416-8.861 5.416z'
                  fill='#000000'
                  mask='url(#b)'
                ></path>
              </g>
              <path
                d='M102.737 41.683h1.224v-5.037l3.904 5.037h1.043V34.6h-1.225v4.897L103.89 34.6h-1.153v7.082zm-9.145 0h5.3V40.57h-4.056v-1.902h3.55v-1.114h-3.55v-1.84h4.006V34.6h-5.25v7.082zm-6.1.101c1.487 0 2.53-.79 2.53-2.114v-.02c0-1.173-.77-1.71-2.267-2.074-1.366-.324-1.69-.566-1.69-1.113v-.02c0-.466.426-.84 1.154-.84.647 0 1.285.253 1.923.728l.667-.94c-.718-.577-1.538-.89-2.57-.89-1.406 0-2.418.839-2.418 2.053v.02c0 1.306.85 1.751 2.357 2.115 1.316.303 1.6.576 1.6 1.082v.02c0 .526-.486.89-1.256.89-.87 0-1.557-.333-2.235-.92l-.75.89a4.367 4.367 0 0 0 2.956 1.133zm-9.257.01c1.853 0 3.046-1.062 3.046-3.176V34.6h-1.244v4.077c0 1.306-.678 1.962-1.78 1.962-1.113 0-1.791-.697-1.791-2.012V34.6h-1.244v4.077c0 2.054 1.173 3.117 3.014 3.117zm-10.56-2.923l1.213-2.833 1.225 2.833h-2.437zm-2.458 2.812h1.275l.729-1.71h3.348l.718 1.71h1.315l-3.116-7.132h-1.153l-3.116 7.132zm-9.468 0h1.244v-2.984h3.379v2.984h1.243V34.6h-1.243v2.945h-3.38V34.6H55.75v7.082zm-8.7 0h1.244V38.8h3.571v-1.133h-3.57v-1.932h4.025v-1.134h-5.27v7.082zm-8.862 0h1.245V38.8h3.571v-1.133h-3.571v-1.932h4.026v-1.134h-5.27v7.082zm-8.193-2.812l1.214-2.833 1.223 2.833h-2.437zm-2.459 2.812h1.275l.729-1.71h3.348l.718 1.71h1.315l-3.116-7.132h-1.153l-3.116 7.132zm-9.195 0h1.244v-2.984h3.38v2.984h1.244V34.6h-1.245v2.945h-3.379V34.6H18.34v7.082zm-6.282.121c1.325 0 2.135-.485 2.873-1.254l-.799-.81c-.607.567-1.163.911-2.033.911-1.356 0-2.337-1.123-2.337-2.509v-.02c0-1.386.991-2.498 2.337-2.498.809 0 1.416.353 1.983.88l.799-.92c-.678-.648-1.467-1.103-2.772-1.103-2.145 0-3.652 1.648-3.652 3.661v.02c0 2.034 1.538 3.642 3.601 3.642zm-9.104-.02c1.487 0 2.529-.79 2.529-2.114v-.02c0-1.173-.769-1.71-2.266-2.074-1.366-.324-1.69-.566-1.69-1.113v-.02c0-.466.425-.84 1.154-.84.647 0 1.284.253 1.922.728l.667-.94c-.718-.577-1.537-.89-2.569-.89-1.406 0-2.418.839-2.418 2.053v.02c0 1.306.85 1.751 2.357 2.115 1.315.303 1.599.576 1.599 1.082v.02c0 .526-.486.89-1.255.89-.87 0-1.558-.333-2.235-.92L0 40.65a4.366 4.366 0 0 0 2.954 1.133z'
                fill='#000000'
              ></path>
            </g>
          </svg>
        </a>
      </div>

      <div className={styles.iwc_header_smmenus}>
        <ServiceMenus className={styles.iwc_header_navlinks}>
          <ServiceMenusList>
            <Link
              href='https://www.iwc.com/us/en/search.html'
              color={theme.color.white}
              textDecoration='none'
            >
              <Image
                src={"./images/search-icon.svg"}
                alt='serach'
                height={40}
                width={22}
                className={styles.headericons}
              />
            </Link>
          </ServiceMenusList>
          <ServiceMenusList>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              color={theme.color.white}
              textDecoration='none'
            >
              <Image
                src={"./images/profile.svg"}
                alt='profile'
                height={40}
                width={18}
                className={styles.headericons}
              />
            </Link>
          </ServiceMenusList>
          <ServiceMenusList>
            <Link
              href='https://www.iwc.com/us/en/secure/wishlist.html'
              color={theme.color.white}
              textDecoration='none'
            >
              <Image
                src={"./images/wishlist.svg"}
                alt='wishlist'
                height={40}
                width={20}
                className={styles.headericons}
              />
            </Link>
          </ServiceMenusList>
          <ServiceMenusList>
            <Link
              href='https://www.iwc.com/us/en/secure/shopping-bag.html'
              color={theme.color.white}
              textDecoration='none'
            >
              <Image
                src={"./images/bag.svg"}
                alt='bag'
                height={40}
                width={20}
                className={styles.headericons}
              />
            </Link>
          </ServiceMenusList>
        </ServiceMenus>
      </div>

      <ServiceMenusNav />
    </Flex>
  );
};
export default Header;
