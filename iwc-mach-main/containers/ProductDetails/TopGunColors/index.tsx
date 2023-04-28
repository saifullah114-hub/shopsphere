import Flex from "../../../components/Flex";
import Text from "../../../components/Text";
import Link from "../../../components/Link";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import NextImage from "../../../components/ImageShimmer";
import { useWidth } from "../../../utils/hooks";
import theme from "../../../theme";

const TopGun43 = ({ topGunData, isIos }) => {
  const screenWidth = useWidth();
  return (
    topGunData?.productOverview1 && (
      <Container>
        {topGunData?.productOverview1?.image && (
          <Flex
            className="col-md-6"
            alignItem="center"
            justifyContent="center"
            flexDirection="column"
          >
            <NextImage
              src={topGunData?.productOverview1?.image.publishUrl}
              alt="top-gun-color"
              imageWidth={623}
              imageHeight={608}
              arLink={topGunData?.productOverview1?.arModel.publishUrl}
              isArTag={screenWidth < 768 ? true : false}
              isIos={isIos}
            />
          </Flex>
        )}

        <Flex
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          className="col-md-6 sm-mt40"
        >
          <Text
            fontSize={screenWidth < 767 ? "h3" : "h2"}
            fontWeight="bold"
            textColor={theme.color.white}
            textTransform="uppercase"
            className="iwc-global-mach-Gotham"
          >
            {topGunData?.productOverview1?.titleText.plaintext}
          </Text>
          <Text
            fontSize="smallText"
            fontWeight="regular"
            textColor={theme.color.white}
            margin="40px 0 0 0"
          >
            {topGunData?.productOverview1?.description.plaintext}
          </Text>
          <Flex width="fit-content" margin="40px 0 0 0">
            <Link
              href="/"
              display="inline-flex"
              textDecoration="none"
              fontFamily="IWC Gotham"
            >
              <Button
                kind="secondary"
                padding="15px 35px 14px"
                borderRadius="0px"
                border="none"
                fontSize="14px"
                lineHeight="21px"
                color="#010302"
                hoverBackgroundColor="black"
              >
                {topGunData?.productOverview1?.ctaText}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    )
  );
};

export default TopGun43;
