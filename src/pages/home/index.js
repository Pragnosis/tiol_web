import { Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { Footer } from '../footer'
import { HomeCard } from '../shared/homeCard'
import { HomeCards2 } from '../shared/homeCards2'
import { VideoSection } from '../shared/videoSection'
import { getVideoItems, sectionOne, sectionThree, sectionTwo } from '../../services'
import { useQuery } from 'react-query'
import Newsupdate from './Newsupdate'
import MainHeader from '../header/MainHeader'
// import { Footer } from '../footer'
import { Drawer } from '@mui/material'
import Sidebar from '../header/MobileHeader'



export const Home = () => {

    const [videList, setVideList] = useState([])
    const [budjetList, setBudjetList] = useState([])
    const [sectionOneListList, setSectionOneListList] = useState([])
    const [sectionTwoList, setSectionTwoList] = useState([])
    const [sectionAllList, setSectionAllList] = useState([])
    const [headlines, setHeadlines] = useState("")
    const [footerList, setFooterList] = useState([])


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

    const { data: getVideoData, error: getVideoError } = useQuery(["VideoItems"], () => getVideoItems(), { enabled: true, retry: false })

    // useEffect(async () => {
    //     var a = await getVideoItems()
    //     a.then((res) => {
    //         // setVideList(res?.data)

    //     })

    // }, [])


    useEffect(() => {
        if (getVideoData) {
            setVideList(getVideoData?.data)
        }
    }, [getVideoData])


    const { data: budjetSection, error: sectionOneErrorError } = useQuery(["BudjetSection"], () => sectionThree(), { enabled: true, retry: false })

    useEffect(() => {
        if (budjetSection) {
            setBudjetList(budjetSection?.data)
        }
    }, [budjetSection])


    useEffect(() => {
        if (sectionOneListList && sectionTwoList) {
            var localArray = sectionOneListList?.length > 0 &&
                sectionOneListList?.map((item, index) => {
                    return { ...item, ...sectionTwoList[index] }
                })
            setSectionAllList(localArray)
        }
    }, [sectionOneListList, sectionTwoList])

    const [drawerOpenFlag, setDrawerOpenFlag] = React.useState(false)

    console.log('videList', videList)

    return <Layout>
        <MainHeader setDrawerOpenFlag={setDrawerOpenFlag} drawerOpenFlag={drawerOpenFlag} footerList={footerList} />
        <Newsupdate videList={videList} budjetList={budjetList} />
        <HomeCard sectionOneListList={sectionAllList} setSectionOneListList={setSectionOneListList} />
        <VideoSection videList={videList} />
        <HomeCards2 budjetList={budjetList} videList={videList} sectionTwoList={sectionAllList} setSectionTwoList={setSectionTwoList} />
        <Footer videList={videList} budjetList={budjetList} footerList={footerList} setFooterList={setFooterList} />
        <Drawer
            anchor="left"
            open={drawerOpenFlag}
            onClose={() => setDrawerOpenFlag(false)}
        >
            <Sidebar />
        </Drawer>
    </Layout>
}
