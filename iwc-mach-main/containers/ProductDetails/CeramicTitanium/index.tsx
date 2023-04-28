import React from "react";
import Container from "../../../components/Container";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";
import NextImage from "../../../components/ImageShimmer";
import { useWidth } from "../../../utils/hooks";
import theme from "../../../theme";

const CeramicTitanium = ({ ceraminTitabiumData }) => {
  const screenWidth = useWidth();
  return (
    ceraminTitabiumData?.productOverview3 && (
      <Container>
        <Flex
          className='col-md-6 sm-mt40'
          order={2}
          alignItem='center'
          justifyContent='center'
        >
          <NextImage
            alt='ceramic-titanium'
            src={ceraminTitabiumData?.productOverview3?.image.publishUrl}
            imageHeight={542}
            imageWidth={555}
            sizes
          />
        </Flex>
        <Flex
          flexDirection='column'
          alignContent='center'
          justifyContent='center'
          className='col-md-6'
          order={1}
        >
          <Text
            fontSize={screenWidth < 767 ? "h3" : "h2"}
            fontWeight='bold'
            textColor={theme.color.white}
            textTransform='uppercase'
            className='iwc-global-mach-Gotham'
          >
            {ceraminTitabiumData?.productOverview3?.titleText.plaintext}
          </Text>
          <Text
            fontSize='smallText'
            fontWeight='regular'
            textColor={theme.color.white}
            margin='40px 0 0 0'
          >
            {ceraminTitabiumData?.productOverview3?.description.plaintext}
          </Text>
        </Flex>
      </Container>
    )
  );
};

export default CeramicTitanium;
