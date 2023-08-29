import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import React, { useRef } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useLocation,useNavigate } from 'react-router-dom'
import { dislikeDetails, getBookmarked, getDetailsData, getLikeDetails, likeDetails, postBookmarked, unpostBookmarked } from '../../../services';
import { useState } from 'react';
import { useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PrintIcon from '@material-ui/icons/Print';
import ReactToPrint from 'react-to-print';

export const DetailsCaselaw = () => {
    const location = useLocation();
    const rowData = location?.state
    const caselawUrl = rowData?.caselaw_Url?.replace(/\//g, '-')
    const userID = 1
    const componentRef = useRef();

    const [bookmark, setBookmark] = useState(false)
    const [allLikes, setAllLikes] = useState(null)
    const [likeEnabled, setLikeEnabled] = useState(true)

    const navigate = useNavigate();

    let apipath;  
    let  heading= "Notification"
    if(location?.pathname === '/caselaws_details'){
        const params = new URLSearchParams(location?.search);
        const page = params.get('page');
        apipath = atob(page);
        heading = "View All news Details"
    } else {
        apipath = rowData?.caselaw_Url
    }

    const { data, error } = useQuery(['GetAllDetailsData'], () => getDetailsData(apipath), { enabled: true, retry: false })
    useEffect(() => {
        if (data) {
            setAllLikes(data?.data?.likecount > 0 ? true : false)
        }
    }, [data])

    const { data: getAllLikes, refetch: allLikesRefetch } = useQuery(['GetAllLikes'], () => getLikeDetails({ url: userID }), { enabled: likeEnabled, retry: false })
    useEffect(() => {
        if (getAllLikes && getAllLikes) {
            setAllLikes(getAllLikes?.data?.likecount)
            setLikeEnabled(false)
        }
    }, [getAllLikes])


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
                <Box ref={componentRef} m={3} dangerouslySetInnerHTML={{ __html: data?.data?.caselawDesc }} />
            </Grid>
        </Grid>
    </Box>
}
