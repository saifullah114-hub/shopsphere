import Flex from "../../components/Flex";
import Link from "../../components/Link";
import Text from "../../components/Text";
import Container from "../../components/Container";
import ReactSlider from "../../components/Slider";
import NextImage from "../../components/ImageShimmer";
import { convertObjectOfObjectsToArray } from "../../utils/global.utils";
import { SliderFlexStyleOverride } from "../../utils/assets";
import theme from "../../theme";

const ProductSlider = ({ sliderData }) => {
  const sliderItems = convertObjectOfObjectsToArray(sliderData?.productSlider);
  return (
    <section className="mt100">
      <Container>
        <Flex className="col-sm-12 col-md-3 sm-mt40">
          <Text
            textColor={theme.color.white}
            fontSize="h4"
            fontWeight="medium"
            textTransform="uppercase"
            fontFamily={`'IWC Gotham', Arial, sans-serif`}
          >
            new pilot&#39;s watches collection 2022
          </Text>
        </Flex>
        <Flex className="col-sm-12 col-md-9 sm-mt40 ph40">
          <ReactSlider>
            {sliderItems.map((item) => {
              return (
                <>
                  <SliderFlexStyleOverride
                    key={item.id}
                    height="100%"
                    maxHeight="283px"
                    margin="0 0 20px 0"
                  >
                    <Link
                      key={`iwc-link-${item.id}`}
                      href={item.ctaLinkExternal}
                      height="100%"
                      display="block"
                    >
                      <NextImage
                        key={`iwc-image-${item.id}`}
                        alt={item.id}
                        src={item.image.publishUrl}
                        imageHeight={298}
                        imageWidth={298}
                      />
                    </Link>
                  </SliderFlexStyleOverride>
                  <Link
                    key={`iwc-description-link-${item.id}`}
                    href={item.ctaLinkExternal}
                  >
                    {item.description.json.map((item, idx) => {
                      return (
                        <Text
                          className={`description-${idx}`}
                          key={`description-${idx}`}
                          textColor={theme.color.white}
                          fontSize={12}
                          lineHeight="20px"
                          letterSpacing="1"
                          textTransform={idx === 0 ? "uppercase" : ""}
                          fontFamily={`'IWC Gotham', Arial, sans-serif`}
                        >
                          {item.content[0].value}
                        </Text>
                      );
                    })}
                  </Link>
                </>
              );
            })}
          </ReactSlider>
        </Flex>
      </Container>
    </section>
  );
};

export default ProductSlider;
