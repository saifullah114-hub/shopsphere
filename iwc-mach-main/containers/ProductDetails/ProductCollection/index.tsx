import React from "react";
import Container from "../../../components/Container";
import Flex from "../../../components/Flex";
import Image from "../../../components/ImageShimmer";
import Link from "../../../components/Link";
import Text from "../../../components/Text";
import { convertObjectOfObjectsToArray } from "../../../utils/global.utils";
import { ListView, ProductCollectionSection } from "../../../utils/assets";
import theme from "../../../theme";

const ProductCollection = ({ collectionData }) => {
  const productObject = convertObjectOfObjectsToArray(
    collectionData?.productCollection
  );

  return (
    <ProductCollectionSection className='mt100 pv80'>
      <Container>
        <Flex
          className='col-md-12'
          justifyContent='center'
        >
          <ListView>
            {productObject.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.ctaLinkExternal}>
                    <Image
                      key={`${item.id}_image`}
                      src={item.image.publishUrl}
                      alt={item.id}
                      imageHeight={264}
                      imageWidth={200}
                      sizes
                    />
                    <Text
                      textColor={theme.color.white}
                      fontSize='smallText'
                      lineHeight='17px'
                      fontWeight='regular'
                      margin='40px auto 0'
                      width='fit-content'
                      className='iwc-global-mach-Gotham'
                    >
                      {item.ctaText}
                    </Text>
                  </Link>
                </li>
              );
            })}
          </ListView>
        </Flex>
      </Container>
    </ProductCollectionSection>
  );
};

export default ProductCollection;
