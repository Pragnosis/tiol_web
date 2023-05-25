import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { getVideoItems, sectionThree } from '../../services';
import { updateState } from '../../redux/commonSlice';
import { Footer } from '../footer'
import Newsupdate from './Newsupdate'
import MainHeader from '../header/MainHeader'
// import { Footer } from '../footer'
import { Drawer } from '@mui/material'
import Sidebar from '../header/MobileHeader'

export const Layout = (props) => {
    const dispatch = useDispatch();

    const [videList, setVideList] = useState([])
    const [budjetList, setBudjetList] = useState([])
    const [footerList, setFooterList] = useState([])
    const [drawerOpenFlag, setDrawerOpenFlag] = React.useState(false)

    const { data: getVideoData, error: getVideoError } = useQuery(["VideoItems"], () => getVideoItems(), { enabled: true, retry: false })
    useEffect(() => {
        if (getVideoData) {
            setVideList(getVideoData?.data);
            dispatch(updateState({ videList: getVideoData?.data}))

        }
    }, [getVideoData])


    const { data: budjetSection, error: sectionOneErrorError } = useQuery(["BudjetSection"], () => sectionThree(), { enabled: true, retry: false })
    useEffect(() => {
        if (budjetSection) {
            setBudjetList(budjetSection?.data)
            dispatch(updateState({ budjetList: budjetSection?.data}))

        }
    }, [budjetSection])


    return <>
        <MainHeader setDrawerOpenFlag={setDrawerOpenFlag} drawerOpenFlag={drawerOpenFlag} footerList={footerList} />
        <Newsupdate videList={videList} budjetList={budjetList} />
        {props.children}
        <Footer videList={videList} budjetList={budjetList} footerList={footerList} setFooterList={setFooterList} />
            <Drawer
            anchor="left"
            open={drawerOpenFlag}
            onClose={() => setDrawerOpenFlag(false)}
        >
            <Sidebar />
        </Drawer>
    </>
}
