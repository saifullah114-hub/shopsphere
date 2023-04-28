import axiosClient from "../../utils/axiosClient";

export const fetchIwcProductsDataApi = async (param) => {
  const {data} = await axiosClient({
    url: `https://publish-p104103-e979259.adobeaemcloud.com/graphql/execute.json/IWC/searchByReference;reference=${param}?q=${Date.now()}`,
    method: 'GET'
  })
  return data;
}

export const fetchWatchOverviewList = async () => {
  const {data} = await axiosClient({
    url: `https://publish-p104103-e979259.adobeaemcloud.com/graphql/execute.json/IWC/ww-watches?q=${Date.now()}`,
    method: 'GET'
  })
  return data;
};

export const fetchScriptTagApi = async() => {
  const {data} = await axiosClient({
    url: `https://publish-p104103-e979259.adobeaemcloud.com/graphql/execute.json/IWC/script-to-inject?q=${Date.now()}`,
    method: 'GET'
  })
  return data;
};
