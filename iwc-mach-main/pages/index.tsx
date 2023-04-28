import { getSelectorsByUserAgent } from "react-device-detect";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import Flex from "../components/Flex";
import Loader from "../components/Loader";
import BasicLayout from "../components/Layout";
import Header from "../containers/Header";
import Dropdown from "../components/dropdown/dropdown";
import ProductDetails from "../containers/ProductDetails";
import HeroBanner from "../containers/HeroBanner";
import ProductCollection from "../containers/ProductDetails/ProductCollection";
import ProductSlider from "../containers/ProductSlider";
import ExperienceIwc from "../containers/ExperienceIwc";
import Footer from "../containers/Footer/footer";
import {
  fetchIwcProductsDataApi,
  fetchScriptTagApi,
  fetchWatchOverviewList,
} from "./api/iwcTopGunApi";
import { useLoading } from "../utils/hooks";

export async function getServerSideProps({ req, query }) {
  const param = query.param || "IW329801";
  const productData = await fetchIwcProductsDataApi(param).then((res) => {
    return res;
  });
  const scripts = await fetchScriptTagApi().then((script) => {
    return script;
  });

  const overviewlist = await fetchWatchOverviewList().then((data) => {
    return data;
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


export default function Home({ productData, scripts, overviewlist, isIos }) {
  const initialData = productData?.data?.iwcCfWwWatchOverviewList.items[0];
  const script = scripts?.data?.scriptTagList.items;
  const overview = overviewlist?.data.iwcCfWwWatchOverviewList.items;
  const isLoading = useLoading();
  const [data, setData] = useState(initialData);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleParamValue = async (evt) => {
    const newData = await fetchIwcProductsDataApi(evt).then((res) => {
      return res.data?.iwcCfWwWatchOverviewList.items[0];
    });
    setData(newData);
    // refreshData();
  };

  return (
    <BasicLayout>
      <NextSeo
        noindex={false}
        title={data.ogtitle}
        description={data.ogdescription}
        canonical={data.ogurl}
      />
      <Head>
        <title>Jet Black | IWC Schaffhausen</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon-96x96.png'
        />
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
            width='100%'
            height='100vh'
            alignItem='center'
            justifyContent='center'
            position='fixed'
            top='0'
            left='0'
            zIndex={99}
            background='#00000057'
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
            <ProductDetails
              productData={data}
              isIos={isIos}
            />
            <ProductCollection collectionData={data} />
            <ProductSlider sliderData={data} />
            <ExperienceIwc experienceIwcData={data} />
            <Footer />
          </>
        )}
      </main>
    </BasicLayout>
  );
}
