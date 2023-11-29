// export const apiUrl = "https://bp.lawclerk.legal";
// export const apiUrl = "";

export const apiUrl = "http://34.229.120.75:8081";
export const userApiUrl = "http://34.229.120.75:8091";
// export const apiUrl = "http://34.299.120.75:8081";
const apiUrlPrefix = `${apiUrl}/api`;
export const baseUrl = `${apiUrl}/api`;
export const userBaseUrl = `${userApiUrl}/api`;


export const apiConstant = {
  getMenuItems: baseUrl + "/DynamicMenuItem/GetDynamicMenuItem/1",
  getFooterList: baseUrl + "/FooterMenu/GetDynamicFooterItem",
  sectionOne: baseUrl + "/HomePageSectionsData/GetHomePageSectionsData",
  sectionTwo: baseUrl + "/HomePageSectionsData/GetHomePageSectionsData",
  getVideoItems: baseUrl + "/HomePageBannerVideo/GetHomePageBannerVideo",
  sectionThree: baseUrl + "/HomePageOtherSectionData/GetHomePageOtherSectionsData",


  getLikeDetails: baseUrl + "/CaselawIndexPage/GetCaselawById",
  likeDetails: baseUrl + "/Utility/PostLike",
  dislikeDetails: baseUrl + "/Utility/PostDisLike",


  getAllBookmarked: baseUrl + "/Utility/GetBooKMark",
  postBookmarked: baseUrl + "/Utility/PostBookMark",
  deleteBookmarked: baseUrl + "/Utility/DeleteBooKMark",


  getAllComments: baseUrl + "/Utility/GetComments",
  postComments: baseUrl + "/Utility/PostComment",
  postCommentsReplyOneLevel: baseUrl + "/Utility/PostCommentReply",
  postCommentsReplySecondLevel: baseUrl + "/Utility/PostCommentReReply",


  getCommentsReplyOneLevel: baseUrl + "/Utility/GetCommentReply",
  getCommentsReReplySecondLevel: baseUrl + "/Utility/GetCommentReReply",


  updateComment: baseUrl + "/Utility/UpdateComment",
  updateCommentReply: baseUrl + "/Utility/UpdateCommentReply",
  updateCommentReReply: baseUrl + "/Utility/UpdateCommentReReply",
  deleteCommentReply: baseUrl + "/Utility/DeleteCommentReply",
  deleteCommentReeReply: baseUrl + "/Utility/DeleteCommentReReply",


  ///////
  getNewsCategory: baseUrl + "/Utility/GetNewsCategory",
  getNewsIndexPagesAdvSearch: baseUrl + "/AdvSearchNews/GetNewsIndexPagesAdvSearch",
  getNewsTypeAuthor: baseUrl + "/Utility/GetNewsTypeAuthor",

  getNotificationCategory: baseUrl + "/Utility/GetNotificationCategory",
  getNotificationAdvSearch: baseUrl + "/AdvSearchNotification/GetNotificationAdvSearch",
  getNotificationSubCategory: baseUrl + "/Utility/GetNotificationSubCategory",
  getNotificationLevel1: baseUrl + "/Utility/GetNotificationLevel1",
  getNotificationLevel2: baseUrl + "/Utility/GetNotificationLevel2",

  getSGSTState: baseUrl + "/SGSTIndexPage/GetSGSTState",
  getSGSTUT: baseUrl + "/SGSTIndexPage/GetSGSTUT",
  getSGSTIndexPage: baseUrl + "/SGSTIndexPage/GetSGSTIndexPage/GST Act (multiple years)",


  userChangePassword: userBaseUrl + "/LoginMasters/ChangePassword",
  userForgotPassword: userBaseUrl + "/LoginMasters/ForgetPassword",
  userChangePasswordPolicy: userBaseUrl + "/LoginMasters/ChangePasswordPolicy",
  userLogin: userBaseUrl + "/Login?userName",
  boolUserName: baseUrl + "/Utility/BoolUsername",
  userRegistration: userBaseUrl + "/RegisterOnline/PostTblRegistrationOnline"



}


// api/HomePageBannerVideo/GetHomePageBannerVideo

// "proxy": "http://3.89.105.249",