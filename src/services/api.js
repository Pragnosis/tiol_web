//import { headerArr } from "../utill/MenuItems"
import { apiConstant } from "./apiConstants"
import { Request } from "./service"


export const getHeaderData = () => {
    return Request(apiConstant.getMenuItems, "Get",);
}

export const getFooterList = () => {
    return Request(apiConstant.getFooterList, "Get",);
}

export const sectionOne = () => {
    return Request(apiConstant.sectionOne, "Get",);
}

export const sectionTwo = () => {
    return Request(apiConstant.sectionTwo, "Get",);
}

export const sectionThree = () => {
    return Request(apiConstant.sectionThree, "Get",);
}

export const getVideoItems = () => {
    return Request(apiConstant.getVideoItems, "Get",);
}
export const caseLawDynamicdata = (params) => {
    return Request(params, "Get",);
}
export const SGSTDynamicdata = (params) => {
    return Request(params, "Get",);
}

export const getDetailsData = (params) => {
    return Request(params, "Post",);
}

export const caseLawFilterdata = (params) => {
    return Request(params, "Get",);
}
export const SGSTFilterdata = (params) => {
    return Request(params, "Get",);
}

export const likeDetails = (params) => {
    return Request(`${apiConstant.likeDetails}/${params?.url}`, "Post",);
}
export const dislikeDetails = (params) => {
    return Request(`${apiConstant.dislikeDetails}/${params?.url}`, "Delete",);
}

export const getLikeDetails = (params) => {
    return Request(`${apiConstant.getLikeDetails}/${params?.url}`, "Get",);
}

export const postBookmarked = (params) => {
    return Request(`${apiConstant.postBookmarked}/${params?.url}`, "Post",);
}


export const getAllBookmarked = (params) => {
    return Request(`${apiConstant.getAllBookmarked}/${params?.url}`, "Get",);
}

export const deleteBookmarked = (params) => {
    return Request(`${apiConstant.deleteBookmarked}/${params?.url}`, "Delete",);
}



export const newsDynamicdata = (params) => {
    return Request(params, "Get",);
}

export const getNewsDetailsData = (params) => {
    return Request(params, "Get",);
}

export const getAllComments = (params) => {
    return Request(`${apiConstant?.getAllComments}/${params}`, "Get",);
}
export const postComments = (params) => {
    return Request(`${apiConstant.postComments}/${params?.url}`, "Post",);
}
export const postCommentsReplyOneLevel = (params) => {
    return Request(`${apiConstant.postCommentsReplyOneLevel}/${params?.url}`, "Post",);
}

export const postCommentsReplySecondLevel = (params) => {
    return Request(`${apiConstant.postCommentsReplySecondLevel}/${params?.url}`, "Post",);
}

export const getCommentsReplyOneLevel = (params) => {
    return Request(`${apiConstant?.getCommentsReplyOneLevel}/${params}`, "Get",);
}


export const updateComment = (params) => {
    return Request(`${apiConstant.updateComment}/${params?.url}`, "Put",);
}
export const updateCommentReply = (params) => {
    return Request(`${apiConstant.updateCommentReply}/${params?.url}`, "Put",);
}

export const deleteCommentReply = (params) => {
    return Request(`${apiConstant.deleteCommentReply}/${params?.url}`, "Delete",);
}

export const getCommentsReReplySecondLevel = (params) => {
    return Request(`${apiConstant?.getCommentsReReplySecondLevel}/${params}`, "Get",);
}

export const updateCommentReReply = (params) => {
    return Request(`${apiConstant.updateCommentReReply}/${params?.url}`, "Put",);
}

export const deleteCommentReeReply = (params) => {
    return Request(`${apiConstant.deleteCommentReeReply}/${params?.url}`, "Delete",);
}

export const notificationDynamicdata = (params) => {
    return Request(params, "Get",);
}

export const getNotificationDetailsData = (params) => {
    return Request(params, "Get",);
}




// export const deleteDepartmentInConfigrution = (id) => commonDeleteService(id, 'departmentInConf');
