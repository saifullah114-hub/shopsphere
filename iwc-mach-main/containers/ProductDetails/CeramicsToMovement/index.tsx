import React from "react";
import Container from "../../../components/Container";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";
import NextImage from "../../../components/ImageShimmer";
import { useWidth } from "../../../utils/hooks";
import theme from "../../../theme";

const CeramicToMovement = ({ ceramicMovementData }) => {
  return (
    <>
      <Container>
        <Flex
          className='col-md-12'
          alignItem='center'
          justifyContent='center'
        >
          <NextImage
            alt='watch-movement'
            src={ceramicMovementData?.banner2?.bannerImage.publishUrl}
            imageHeight={642}
            imageWidth={1140}
            sizes
          />
        </Flex>
      </Container>
      <Container>
        <Flex
          flexDirection='column'
          alignContent='center'
          justifyContent='center'
          className='col-md-6'
          margin='40px 0 0 0'
        >
          <Text
            fontSize={useWidth() < 767 ? "h3" : "h2"}
            fontWeight='bold'
            textColor={theme.color.white}
            textTransform='uppercase'
            className='iwc-global-mach-Gotham'
          >
            {ceramicMovementData?.bannerText2?.bannerText.plaintext}
          </Text>
          <Text
            fontSize='smallText'
            fontWeight='regular'
            textColor={theme.color.white}
            margin='40px 0 0 0'
          >
            {ceramicMovementData?.bannerText2?.description.plaintext}
          </Text>
        </Flex>
      </Container>
    </>
  );
};

export default CeramicToMovement;
