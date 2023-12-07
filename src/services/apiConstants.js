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


  getLikeDetails: baseUrl + "/CaselawIndexPage/GetCaselawById",//auth
  likeDetails: baseUrl + "/Utility/PostLike",//auth
  dislikeDetails: baseUrl + "/Utility/PostDisLike",//auth


  getAllBookmarked: baseUrl + "/Utility/GetBooKMark",//auth
  postBookmarked: baseUrl + "/Utility/PostBookMark",//auth
  deleteBookmarked: baseUrl + "/Utility/DeleteBooKMark",//auth


  getAllComments: baseUrl + "/Utility/GetComments",//auth
  postComments: baseUrl + "/Utility/PostComment",//auth
  postCommentsReplyOneLevel: baseUrl + "/Utility/PostCommentReply",//auth
  postCommentsReplySecondLevel: baseUrl + "/Utility/PostCommentReReply",//auth


  getCommentsReplyOneLevel: baseUrl + "/Utility/GetCommentReply",//auth
  getCommentsReReplySecondLevel: baseUrl + "/Utility/GetCommentReReply",//auth


  updateComment: baseUrl + "/Utility/UpdateComment",//auth
  updateCommentReply: baseUrl + "/Utility/UpdateCommentReply",//auth
  updateCommentReReply: baseUrl + "/Utility/UpdateCommentReReply",//auth
  deleteCommentReply: baseUrl + "/Utility/DeleteCommentReply",//auth
  deleteCommentReeReply: baseUrl + "/Utility/DeleteCommentReReply",//auth


  ///////
  getNewsCategory: baseUrl + "/Utility/GetNewsCategory",
  getNewsIndexPagesAdvSearch: baseUrl + "/AdvSearchNews/GetNewsIndexPagesAdvSearch",//auth
  getNewsTypeAuthor: baseUrl + "/Utility/GetNewsTypeAuthor",

  getNotificationCategory: baseUrl + "/Utility/GetNotificationCategory",//auth
  getNotificationAdvSearch: baseUrl + "/AdvSearchNotification/GetNotificationAdvSearch",//auth
  getNotificationSubCategory: baseUrl + "/Utility/GetNotificationSubCategory",
  getNotificationLevel1: baseUrl + "/Utility/GetNotificationLevel1",//auth
  getNotificationLevel2: baseUrl + "/Utility/GetNotificationLevel2",//auth

  getSGSTState: baseUrl + "/SGSTIndexPage/GetSGSTState",//auth
  getSGSTUT: baseUrl + "/SGSTIndexPage/GetSGSTUT",//auth
  getSGSTIndexPage: baseUrl + "/SGSTIndexPage/GetSGSTIndexPage/GST Act (multiple years)",//auth


  userChangePassword: userBaseUrl + "/LoginMasters/ChangePassword",//auth
  userForgotPassword: userBaseUrl + "/LoginMasters/ForgetPassword",
  userChangePasswordPolicy: userBaseUrl + "/LoginMasters/ChangePasswordPolicy",

  // userLogin: userBaseUrl + "/Login?userName",
  userLogin: baseUrl + "/login/ValidateUser",

  boolUserName: baseUrl + "/Utility/BoolUsername",

  // userRegistration: userBaseUrl + "/RegisterOnline/PostTblRegistrationOnline",
  userRegistration: baseUrl + "/UserManagement/RegisterOnline",

}


// api/HomePageBannerVideo/GetHomePageBannerVideo

// "proxy": "http://3.89.105.249",