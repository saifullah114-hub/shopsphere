import React, { useEffect } from "react";
import Link from "../../components/Link";
import styles from "./servicemenus.module.scss";
import { ListMenus, ListMenusUl } from "../../utils/assets";
import theme from "../../theme";

const ServiceMenusNav = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        const scrollPosition = document.documentElement.scrollTop;
        const serviceMenu = document.getElementById("menuService");

        if (scrollPosition >= 130) {
          serviceMenu.classList.add("iwc-animate-menus");
        } else {
          serviceMenu.classList.remove("iwc-animate-menus");
        }
      });
    }
  }, []);

  return (
    <div
      className={styles.iwc_service_menus}
      id='menuService'
    >
      <nav>
        <ListMenusUl>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              WATCHES
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              ACCESSORIES
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              SERVICES
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              WATCHMAKING
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              COMMUNITY
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              SUSTAINABILITY
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              STORES
            </Link>
          </ListMenus>
        </ListMenusUl>
      </nav>
    </div>
  );
};
export default ServiceMenusNav;
