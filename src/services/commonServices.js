import axiosClient from "./AxiosClient";


//Here we are listing the general purpose apis such as fetch content and menu

export const getMenuItems = async (userId = 1) => {
    const response = await axiosClient.get(`/DynamicMenuItem/GetDynamicMenuItem/${userId}`);
    return response.data;
}

export const getHomepageSections = async () => {
    const response = await axiosClient.get("/HomePageSections/GetHomePageSections");
    return response.data;
}

export const getHomepageSectionsData = async () => {
    const response = await axiosClient.get("/HomePageSectionsData/GetHomePageSectionsData");
    return response.data;
}
export const getBannerData = async () => {
    const response = await axiosClient.get("/HomePageBannerVideo/GetHomePageBannerVideo");
    return response.data;
}