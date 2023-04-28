import React from "react";
import Flex from "../../components/Flex";
import Text from "../../components/Text";
import Container from "../../components/Container";
import NextImage from "../../components/ImageShimmer";
import Link from "../../components/Link";
import { ExperienceSection } from "../../utils/assets";
import theme from "../../theme";

const ExperienceIwc = ({ experienceIwcData }) => {
  return (
    <ExperienceSection className='mt100 pv80'>
      <Container>
        <Flex
          flexDirection='column'
          alignContent='center'
          justifyContent='center'
          className='col-md-6'
        >
          <Text
            fontSize='h2'
            fontWeight='bold'
            textColor={theme.color.white}
            textTransform='uppercase'
            className='iwc-global-mach-Gotham'
          >
            {experienceIwcData?.productOverview5?.titleText.plaintext}
          </Text>
          <Text
            fontSize='smallText'
            fontWeight='regular'
            textColor={theme.color.white}
            margin='40px 0 0 0'
          >
            {experienceIwcData?.productOverview5?.description.plaintext}
          </Text>
          <Flex
            width='fit-content'
            margin='30px 0 0 0'
          >
            <Link href={experienceIwcData?.productOverview5?.ctaExternalLink}>
              <NextImage
                src={experienceIwcData?.productOverview5?.ctaImage?.publishUrl}
                alt='app-link'
                imageHeight={50}
                imageWidth={150}
              />
            </Link>
          </Flex>
        </Flex>
        <Flex
          className='col-md-6 sm-mt40'
          alignItem='center'
          justifyContent='center'
        >
          <NextImage
            alt='experience-iwc'
            src={experienceIwcData?.productOverview5?.image.publishUrl}
            imageWidth={623}
            imageHeight={637}
            sizes
          />
        </Flex>
      </Container>
    </ExperienceSection>
  );
};

export default ExperienceIwc;
