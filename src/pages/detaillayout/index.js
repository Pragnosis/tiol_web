import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { HomeCard } from '../shared/homeCard'
import { HomeCards2 } from '../shared/homeCards2'
import { VideoSection } from '../shared/videoSection'
import { sectionOne, sectionTwo } from '../../services'
import { useQuery } from 'react-query'
// import { Footer } from '../footer'
import { useSelector } from 'react-redux'
import BudjetSection from '../shared/budjetSection'
import { useLocation } from 'react-router-dom'
import { Grid, Box, Container } from '@material-ui/core'
import { Carts } from '../landinglayout/landing/carts'
import { DetailsCaselaw } from './detail/caselaw'
import { NotificationDetailedLayout } from '../landinglayout/landing/notification/detailsNotification/notificationDetailsLayout'



export const DetailedLayout = () => {
    const location = useLocation();
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
        <Container>
        <Box my={1}>
        <Grid container item>
            <Grid item xs='8'>
                {
                    location.pathname == "/notifications/details" ? <NotificationDetailedLayout />
                        : location.pathname == "/incometax/caselaw/sccases/details" ? <DetailsCaselaw />
                            : null
                }

            </Grid>
            <Grid item xs='4'>
                <Carts budjetList={commonReducer.budjetList} videList={commonReducer.videList} sectionTwoList={sectionAllList} setSectionTwoList={setSectionTwoList} />
            </Grid>
        </Grid>
</Box></Container>
    </Layout>
}
