import { headerArr } from "../utill/MenuItems"
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

export const getDetailsData = (params) => {
    return Request(params, "Get",);
}

export const caseLawFilterdata = (params) => {
    return Request(params, "Get",);
}


// export const deleteDepartmentInConfigrution = (id) => commonDeleteService(id, 'departmentInConf');
