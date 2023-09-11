import { Box, Button, Grid, Typography, makeStyles } from '@material-ui/core'
import React, { useRef } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom'
// import { dislikeDetails, getBookmarked, getDetailsData, getLikeDetails, likeDetails, postBookmarked, unpostBookmarked } from '../../../services';
import { useState } from 'react';
import { useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PrintIcon from '@material-ui/icons/Print';
import ReactToPrint from 'react-to-print';
import { dislikeDetails, getDetailsData, getLikeDetails, getNewsDetailsData, getNotificationDetailsData, likeDetails, postBookmarked } from '../../../../../services';
import { Layout } from '../../../../Layout';
import { CommentModel } from '../../../../comment/commentModel';
import { ViewAllCommentModel } from '../../../../comment/viewAllCommentModel';

export const NotificationDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const rowData = location?.state
    const caselawUrl = rowData?.caselawDesc?.replace(/\//g, '-')
    const userID = 1
    const componentRef = useRef();

    const [newsDetailsData, setNewsDetailsData] = useState([])
    const [bookmark, setBookmark] = useState(false)
    const [comment, setComment] = useState(false)
    const [allLikes, setAllLikes] = useState(null)
    const [likeEnabled, setLikeEnabled] = useState(true)
    const [viewAllComment, setViewAllComment] = useState(false)
    const [dynamicNewsID, setDynamicNewsID] = useState('')
    const [postDone, setPostDone] = useState(0)
    let apipath;  
    const  heading= "Notification"
    if(location?.pathname === '/notification_details' || location?.pathname === '/details'){
        const params = new URLSearchParams(location?.search);
        const page = params.get('page');
        apipath = atob(page);
       // heading = "View All Details2"
    } else {
        apipath = rowData?.url
    }

    const { data, refetch: allDataRefetch } = useQuery([''], () => getNotificationDetailsData(apipath), { enabled: true, retry: false })
    useEffect(() => {
        if (data) {
            setNewsDetailsData(data?.data?.notificationDesc)
            setAllLikes(data?.data?.likecount > 0 ? true : false)
            setDynamicNewsID(data?.data?.news_Id)
        }
    }, [data])

    const { data: getAllLikes, refetch: allLikesRefetch } = useQuery(['GetAllLikes'], () => getLikeDetails({ url: userID }), { enabled: likeEnabled, retry: false })
    useEffect(() => {
        if (getAllLikes && getAllLikes) {
            setAllLikes(getAllLikes?.data?.likecount)
            setLikeEnabled(false)
        }
    }, [getAllLikes])

    useEffect(() => {
        window.scrollTo(0, 400)
    }, [])

    const { mutate: likeMutate } = useMutation(likeDetails, {
        onSuccess: (data, context, variable) => onSuccessLike(data, context, variable),
        onError: (data, context, variable) => onErrorLike(data, context, variable),
    })

    const onSuccessLike = () => {
        allLikesRefetch();
        setLikeEnabled(false)
    }
    const onErrorLike = () => {

    }

    const { mutate: dislikeMutate } = useMutation(dislikeDetails, {
        onSuccess: (data, context, variable) => onSuccessdisLike(data, context, variable),
        onError: (data, context, variable) => onErrordisLike(data, context, variable),
    })

    const onSuccessdisLike = () => {

    }
    const onErrordisLike = () => {

    }

    const dislikeClickHandler = () => {
        dislikeMutate({ url: `${userID}/${caselawUrl}` });
    }

    const likeClickHandler = () => {
        likeMutate({ url: `${userID}/${caselawUrl}` });
    }


    const { mutate: bookmarkedMutatte } = useMutation(postBookmarked, {
        onSuccess: (data, context, variable) => onSuccessBookmarked(data, context, variable),
        onError: (data, context, variable) => onErrorBookmarked(data, context, variable),
    })

    const onSuccessBookmarked = () => {
        setBookmark(!bookmark)
    }
    const onErrorBookmarked = () => {

    }

    const bookmarkClickHandler = () => {
        bookmarkedMutatte({ url: `${userID}/${caselawUrl}` });
    }

    const postCommentClickHandler = () => {
        setComment(true)
    }

    const ViewAllCommentClickHandler = () => {
        setViewAllComment(true)
    }

    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <Grid container item>
                    <Grid item xs='2'>
                        <Grid container item justifyContent='center' alignItems='center'>
                            <Typography style={{ paddingRight: "20px" }}>{allLikes > 0 && allLikes}</Typography>
                            {
                                allLikes ? <Typography onClick={dislikeClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <ThumbDownIcon style={{ position: 'relative', top: '4px', left: '0px' }} /> &nbsp; Unlike
                                </Typography>
                                    : <Typography onClick={likeClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <ThumbUpIcon /> &nbsp; Like
                                    </Typography>
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs='2'>
                        <Grid container item justifyContent='center'>
                            {
                                bookmark ? <Typography style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <BookmarkIcon style={{ position: 'relative', top: '0px', left: '0px', color: "blue" }} />&nbsp; Bookmark
                                </Typography>
                                    : <Typography onClick={bookmarkClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <BookmarkBorderIcon /> &nbsp; Bookmark
                                    </Typography>
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs='3'>
                        <Grid container item justifyContent='center'>
                            <ReactToPrint
                                trigger={() => <Typography style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <PrintIcon style={{ position: 'relative', top: '0px', left: '0px' }} />&nbsp; Print this document
                                </Typography>}
                                content={() => componentRef.current}
                            />


                        </Grid>
                    </Grid>
                    <Grid item xs='3'>
                        <Grid container item justifyContent='center'>
                            <Typography style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <PrintIcon style={{ position: 'relative', top: '0px', left: '0px' }} />&nbsp; Download as Pdf
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Box ref={componentRef} m={3} dangerouslySetInnerHTML={{ __html: newsDetailsData }} />
            </Grid>
           
        </Grid>

        {
            comment &&
            <CommentModel togglerHandler={setComment} dynamicNewsID={dynamicNewsID} allDataRefetch={allDataRefetch} setPostDone={setPostDone} />
        }
        {
            viewAllComment &&
            <ViewAllCommentModel togglerHandler={setViewAllComment} dynamicNewsID={dynamicNewsID} />
        }

    </Box>
}
