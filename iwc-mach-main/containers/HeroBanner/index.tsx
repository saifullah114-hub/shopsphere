import Flex from "../../components/Flex";
import Container from "../../components/Container";
import NextImage from "../../components/ImageShimmer";
import { useWidth } from "../../utils/hooks";

const HeroBanner = ({ bannerData }) => {
  const screenWidth = useWidth();
  return (
    <Container className="container-fluid ph0" rowClassName="mh0">
      <Flex
        className="col-md-12 mb100 ph0 sm-mb80"
        alignItem="center"
        justifyContent="center"
      >
        <NextImage
          alt="hero-banner"
          src={
            screenWidth < 768
              ? bannerData?.banner?.bannerImageMobile.publishUrl
              : bannerData?.banner?.bannerImage.publishUrl
          }
          imageWidth={screenWidth < 768 ? 750 : 1200}
          imageHeight={700}
          inlineWidth="100%"
        />
      </Flex>
    </Container>
  );
};

export default HeroBanner;
