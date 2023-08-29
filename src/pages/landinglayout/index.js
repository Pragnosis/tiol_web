import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { HomeCard } from '../shared/homeCard'
import { HomeCards2 } from '../shared/homeCards2'
import { VideoSection } from '../shared/videoSection'
import { useQuery } from 'react-query'
// import { Footer } from '../footer'
import { useSelector } from 'react-redux'
import BudjetSection from '../shared/budjetSection'
import { useLocation } from 'react-router-dom'
import LandingDetailLayout from './landing/caselaw'
import { Container, Grid } from '@material-ui/core'
import { Carts } from './landing/carts'
import LandingCaseLaw from './landing/caselaw'
import { sectionOne, sectionTwo } from '../../services'
import { LandingNotification } from './landing/notification/landingNotification'
import { NotificationDetails} from './landing/notification/detailsNotification/detailsNotification'
import { NewsDetails } from './landing/news/details/newsDetails'
import { DetailsCaselaw } from '../detaillayout/detail/caselaw'



export const LandingLayout = (props) => {
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

    const renderPage = (page) =>{
        if(page === "/notifications" || page === "/viewall" ){
            return <LandingNotification />
        } else if(page === "/income_tax/caselaws/sc_cases" || page === "/details"){
            return <LandingCaseLaw />
        } else if(page==="/notification_details" || page === "/notification" ){
            return <NotificationDetails />
        } else if(page === "/news_details"){
            return <NewsDetails/>
        } else if(page === "/caselaws_details"){
            return <DetailsCaselaw />
        }else {
            return null
        }
    }

    return <Container>
        <Layout>
            <Grid container item>
                <Grid item xs='8'>
                    {
                        renderPage(location?.pathname)
                    }
                </Grid>
                <Grid item xs='4'>
                    <Carts budjetList={commonReducer.budjetList} videList={commonReducer.videList} sectionTwoList={sectionAllList} setSectionTwoList={setSectionTwoList} />
                </Grid>
            </Grid>
        </Layout>
    </Container>
}
