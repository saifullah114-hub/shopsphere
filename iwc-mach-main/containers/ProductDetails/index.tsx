import React from "react";
import Text from "../../components/Text";
import Container from "../../components/Container";
import TopGunColors from "./TopGunColors";
import CeramicPioneer from "./CeramicPioneer";
import CeramicTitanium from "./CeramicTitanium";
import CeramicToMovement from "./CeramicsToMovement";
import JetBlack from "./JetBlack";
import { useWidth } from "../../utils/hooks";
import theme from "../../theme";

const ProductDetails = ({ productData, isIos }) => {
  const screenWidth = useWidth();

  return (
    <section className='iwc-productDetails'>
      <Container>
        <div className='col-md-12 mb100'>
          {productData?.bannerText?.bannerText.json.map((item) => {
            return item.content.map((title, idx) => {
              return (
                <Text
                  key={idx}
                  fontSize={screenWidth < 767 ? "h3" : "h2"}
                  fontWeight='bold'
                  textColor={theme.color.white}
                  textTransform='uppercase'
                  fontFamily={`'IWC Gotham', Arial, sans-serif`}
                  letterSpacing='3px'
                  className='iwc-global-mach-Gotham'
                >
                  {title.value}
                </Text>
              );
            });
          })}
        </div>
      </Container>
      <section className='mb100'>
        <TopGunColors
          topGunData={productData}
          isIos={isIos}
        />
      </section>
      <section className='mb100'>
        <JetBlack jetBlackData={productData} />
      </section>
      <section className='mb100'>
        <CeramicPioneer ceramicPioneerData={productData} />
      </section>
      <section className='mb100'>
        <CeramicTitanium ceraminTitabiumData={productData} />
      </section>
      <section>
        <CeramicToMovement ceramicMovementData={productData} />
      </section>
    </section>
  );
};

export default ProductDetails;
