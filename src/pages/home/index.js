import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { HomeCard } from '../shared/homeCard'
import { HomeCards2 } from '../shared/homeCards2'
import { VideoSection } from '../shared/videoSection'
import { sectionOne, sectionTwo } from '../../services'
import { useQuery } from 'react-query'
import { Box, Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import BudjetSection from '../shared/budjetSection'



export const Home = () => {
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
        <BudjetSection budjetList={commonReducer.budjetList} />
        <HomeCard sectionOneListList={sectionAllList} setSectionOneListList={setSectionOneListList} />
        <VideoSection videList={commonReducer.videList} />
        <HomeCards2 budjetList={commonReducer.budjetList} videList={commonReducer.videList} sectionTwoList={sectionTwoList} setSectionTwoList={setSectionTwoList} />
        </Box></Container>
    </Layout>
}
