import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { sectionOne, sectionTwo } from '../../../../../services'
import { Layout } from '../../../../Layout'
import { Carts } from '../../carts'
import { NotificationDetails } from './detailsNotification'



export const NotificationDetailedLayout = () => {
    const [sectionOneListList, setSectionOneListList] = useState([])
    const [sectionTwoList, setSectionTwoList] = useState([])
    const [sectionAllList, setSectionAllList] = useState([])

    const commonReducer = useSelector((state) => state.commonReducer);

    const { data: sectionOneData } = useQuery(["SectionOne"], () => sectionOne(), { enabled: true, retry: false })

    useEffect(() => {
        if (sectionOneData) {
            setSectionOneListList(sectionOneData?.data)
        }
    }, [sectionOneData])

    const { data: sectionTwoData } = useQuery(["SectionTwo"], () => sectionTwo(), { enabled: true, retry: false })

    useEffect(() => {
        if (sectionTwoData) {
            setSectionTwoList(sectionTwoData?.data)
        }
    }, [sectionTwoData])



    useEffect(() => {
        if (sectionOneListList && sectionTwoList) {
            var localArray = sectionOneListList?.length > 0 &&
                sectionOneListList?.map((item, index) => {
                    return { ...item, ...sectionTwoList[index] }
                })
            setSectionAllList(localArray)
        }
    }, [sectionOneListList, sectionTwoList])

    return <Layout>
        <Grid container item>
            <Grid item xs='8'>
                <NotificationDetails />
            </Grid>
            <Grid item xs='4'>
                <Carts budjetList={commonReducer.budjetList} videList={commonReducer.videList} sectionTwoList={sectionAllList} setSectionTwoList={setSectionTwoList} />
            </Grid>
        </Grid>

    </Layout>
}
