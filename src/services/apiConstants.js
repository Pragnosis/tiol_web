// export const apiUrl = "https://bp.lawclerk.legal";

// export const apiUrl = "";
export const apiUrl = "http://3.91.84.76:8081";
const apiUrlPrefix = `${apiUrl}/api`;
export const baseUrl = `${apiUrl}/api`;


export const apiConstant = {
  getMenuItems: baseUrl + "/DynamicMenuItem/GetDynamicMenuItem/1",
  getFooterList: baseUrl + "/FooterMenu/GetDynamicFooterItem",
  sectionOne: baseUrl + "/HomePageSectionsData/GetHomePageSectionsData",
  sectionTwo: baseUrl + "/HomePageSections/GetHomePageSections",
  getVideoItems: baseUrl + "/HomePageBannerVideo/GetHomePageBannerVideo",
  sectionThree: baseUrl + "/HomePageOtherSectionData/GetHomePageOtherSectionsData",
  likeDetails: baseUrl + "/Utility/PostLike",
  dislikeDetails: baseUrl + "/Utility/PostDisLike",
};

// api/HomePageBannerVideo/GetHomePageBannerVideo

// "proxy": "http://3.89.105.249",