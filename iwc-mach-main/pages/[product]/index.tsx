import { NextSeo } from "next-seo";
import Head from "next/head";
import React, { useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import Dropdown from "../../components/dropdown/dropdown";
import Flex from "../../components/Flex";
import BasicLayout from "../../components/Layout";
import Loader from "../../components/Loader";
import ExperienceIwc from "../../containers/ExperienceIwc";
import Footer from "../../containers/Footer/footer";
import Header from "../../containers/Header";
import HeroBanner from "../../containers/HeroBanner";
import ProductDetails from "../../containers/ProductDetails";
import ProductCollection from "../../containers/ProductDetails/ProductCollection";
import ProductSlider from "../../containers/ProductSlider";
import { useLoading } from "../../utils/hooks";
import {
  fetchIwcProductsDataApi,
  fetchScriptTagApi,
  fetchWatchOverviewList,
} from "../api/iwcTopGunApi";

export async function getServerSideProps({ req, query }) {
  let productWatchId='';  
  const scripts = await fetchScriptTagApi().then((script) => {
    return script;
  });
  const overviewlist = await fetchWatchOverviewList().then((data) => {
    return data;
  });
  overviewlist.data.iwcCfWwWatchOverviewList.items.map((dt) => {
    if(typeof(dt.seourl)==='string'){
      if(dt.seourl.trim() === query.product){
        productWatchId=dt.watchReference
      }
    }
  });
  const productData = await fetchIwcProductsDataApi(productWatchId).then((res) => {
    return res;
  });

  const userAgent = req.headers["user-agent"] || "";
  const { isIOS } = getSelectorsByUserAgent(userAgent);

  return {
    props: {
      productData,
      scripts,
      isIos: isIOS,
      overviewlist,
    },
  };
}

const Index = ({ productData, scripts, overviewlist, isIos }) => {
  console.log(productData);
  const initialData = productData?.data?.iwcCfWwWatchOverviewList.items[0];
  const script = scripts?.data?.scriptTagList.items;
  const overview = overviewlist?.data.iwcCfWwWatchOverviewList.items;
  const isLoading = useLoading();
  const [data, setData] = useState(initialData);
  const handleParamValue = async (evt) => {
    const newData = await fetchIwcProductsDataApi(evt).then((res) => {
      return res.data?.iwcCfWwWatchOverviewList.items[0];
    });
    setData(newData);
    // refreshData();
  };

  return (
    <>
      <BasicLayout>
        <NextSeo
          noindex={false}
          title={data.ogtitle}
          description={data.ogdescription}
          canonical={data.ogurl}
        />
        <Head>
          <title>Jet Black | IWC Schaffhausen</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon-96x96.png" />
          {script.map((script, idx) => (
            <script
              key={`script-${idx}`}
              dangerouslySetInnerHTML={{ __html: script.headscript }}
            />
          ))}
        </Head>
        <main>
          {isLoading ? (
            <Flex
              width="100%"
              height="100vh"
              alignItem="center"
              justifyContent="center"
              position="fixed"
              top="0"
              left="0"
              zIndex={99}
              background="#00000057"
            >
              <Loader />
            </Flex>
          ) : (
            <>
              <Header />
              <Dropdown
                overviewlistsData={overview}
                handleParamValue={handleParamValue}
                data={data}
              />
              <HeroBanner bannerData={data} />
              <ProductDetails productData={data} isIos={isIos} />
              <ProductCollection collectionData={data} />
              <ProductSlider sliderData={data} />
              <ExperienceIwc experienceIwcData={data} />
              <Footer />
            </>
          )}
        </main>
      </BasicLayout>
    </>
  );
};

export default Index;
