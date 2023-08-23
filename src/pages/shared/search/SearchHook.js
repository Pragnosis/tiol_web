import { useMutation } from 'react-query'
import { caseLawFilterdata } from '../../../services'
import { useState } from 'react'

export const useSearchHook = () => {
    const [oriData, setOriData] = useState([])

    const { mutate: dateFilterMutate } = useMutation(caseLawFilterdata, {
        onSuccess: (data, context, variables) => onSuccessFilterDate(data, context, variables),
        onError: (data, context, variables) => onErrorFilterDate(data, context, variables),
    })

    const onSuccessFilterDate = (data) => {
        setOriData(data?.data)
    }
    const onErrorFilterDate = () => {

    }


    const afterValidate = (callBack) => {
        var errorMszDom = [];
        setTimeout(() => {
            errorMszDom = document.getElementsByClassName("validornot");
            if (errorMszDom.length > 0) {
                callBack()
            }
        }, 1000);
    }

    return {
        dateFilterMutate,
        oriData,
        afterValidate,
    }
}