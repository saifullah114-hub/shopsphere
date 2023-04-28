import React from "react";
import Image from "next/image";
import Flex from "../../components/Flex";
import Link from "../../components/Link";
import styles from "./footer.module.scss";
import theme from "../../theme";
import { NewsletterInput, NewsletterLabel } from "../../utils/assets";

const Footer = () => {
  return (
    <footer className={styles.iwcfooter}>
      <div className={styles.container}>
        <Flex
          divcolor={theme.color.white}
          flexWrap='wrap'
          rowGap='30px'
          className={styles.newsletter}
        >
          <NewsletterLabel>SUBSCRIBE TO OUR NEWSLETTER</NewsletterLabel>
          <Flex
            className={styles.newsletterwrapper}
            borderBottom='1px solid'
            position='relative'
            width='462px'
          >
            <NewsletterInput
              autoCapitalize='off'
              autoCorrect='off'
              name='iwcNewsletterEmail'
              type='email'
              placeholder='Email Address (required)'
              required={true}
              aria-describedby='iwc-fnl-email-help'
              aria-invalid='false'
            />

            <Image
              src={"./images/arrow-link.svg"}
              alt='fb'
              width={22}
              height={16}
              className={styles.newsltrrwrapperarrow}
            />
          </Flex>
        </Flex>
        <Flex
          flexWrap='wrap'
          className={styles.row}
        >
          <div className={styles.footercol}>
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Introduction to Our Services
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Returns & Refunds
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Orders & Shipping
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Payment Methods
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  FAQ <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Contact Us <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Privacy Policy <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Terms of Use <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Conditions of Sale <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Accessibility <div className={styles.slider}></div>{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footercol}>
            <h4>MADE AT IWC</h4>
            <ul>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  History <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Our Manufacture <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  The Journal <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Sustainability <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Swiss Luxury Watches <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Careers <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Press <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Terms of Use <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  IWC Schaffhausen Museum <div className={styles.slider}></div>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footercol}>
            <h4>VIEW WATCHES</h4>
            <ul>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  All Watches <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  IWC Collections <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Calibres <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Complications <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Straps and Bracelets <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Innovative Materials <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  Trade-In / Pre-owned <div className={styles.slider}></div>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footercol}>
            <h4>FOLLOW US</h4>
            <ul>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/facebook.svg"}
                    alt='fb'
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Facebook <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/instagram.svg"}
                    alt='fb'
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Instagram <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/twitter.svg"}
                    alt='fb'
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Twitter <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/youtube.svg"}
                    alt='fb'
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Youtube <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.iwc.com/us/en/home.html'
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/linked-in.svg"}
                    alt='fb'
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Linkedin <div className={styles.slider}></div>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </Flex>
      </div>
    </footer>
  );
};
export default Footer;
