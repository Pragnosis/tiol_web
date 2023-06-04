import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { useLocation } from 'react-router-dom'
import { dislikeDetails, getBookmarked, getDetailsData, likeDetails, postBookmarked, unpostBookmarked } from '../../../services';
import { useState } from 'react';
import { useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export const DetailsCaselaw = () => {
    const location = useLocation();
    const rowData = location?.state
    const caselawUrl = rowData?.caselaw_Url?.replace(/\//g, '-')
    const userID = 1

    console.log('rowData', rowData)

    const [like, setLike] = useState(false)
    const [bookmark, setBookmark] = useState(false)

    const { data, error } = useQuery(['GetAllDetailsData'], () => getDetailsData(rowData?.caselaw_Url), { enabled: true, retry: false })
    useEffect(() => {
        if (data) {
            setLike(data?.data?.likecount > 0 ? true : false)
        }
    }, [data])


    const { data: getBookedmarkData } = useQuery(['GetAllBookmarked'], () => getBookmarked({ url: `${userID}/${caselawUrl}` }), { enabled: true, retry: false })
    useEffect(() => {
        if (getBookedmarkData) {
            console.log('data', data)
        }
    }, [getBookedmarkData])


    const { mutate: likeMutate } = useMutation(likeDetails, {
        onSuccess: (data, context, variable) => onSuccessLike(data, context, variable),
        onError: (data, context, variable) => onErrorLike(data, context, variable),
    })

    const onSuccessLike = () => {
        setLike(!like)
    }
    const onErrorLike = () => {

    }

    const { mutate: dislikeMutate } = useMutation(dislikeDetails, {
        onSuccess: (data, context, variable) => onSuccessdisLike(data, context, variable),
        onError: (data, context, variable) => onErrordisLike(data, context, variable),
    })

    const onSuccessdisLike = () => {
        setLike(!like)
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

    const { mutate: unBookmarkMutate } = useMutation(unpostBookmarked, {
        onSuccess: (data, context, variable) => onSuccessUnbookmarked(data, context, variable),
        onError: (data, context, variable) => onErrorUnbookmarked(data, context, variable),
    })

    const onSuccessUnbookmarked = () => {
        setBookmark(!bookmark)
    }
    const onErrorUnbookmarked = () => {

    }


    const bookmarkClickHandler = () => {
        bookmarkedMutatte({ url: `${userID}/${caselawUrl}` });
    }


    const unbookmarkClickHandler = () => {
        unBookmarkMutate({ url: `${userID}/${caselawUrl}` });
    }


    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <Grid container item>
                    <Grid item xs='3'>
                        <Grid container item justifyContent='center'>
                            {
                                like ? <Typography onClick={dislikeClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <ThumbDownIcon style={{ position: 'relative', top: '4px', left: '0px' }} /> &nbsp; Unlike
                                </Typography>
                                    : <Typography onClick={likeClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <ThumbUpIcon /> &nbsp; Like
                                    </Typography>
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs='3'>
                        <Grid container item justifyContent='center'>
                            {
                                bookmark ? <Typography onClick={unbookmarkClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <BookmarkIcon style={{ position: 'relative', top: '0px', left: '0px' }} /> &nbsp; UnBookmark
                                </Typography>
                                    : <Typography onClick={bookmarkClickHandler} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <BookmarkBorderIcon /> &nbsp; Bookmark
                                    </Typography>
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Box m={3} dangerouslySetInnerHTML={{ __html: data?.data?.caselawDesc }} />
            </Grid>
        </Grid>
    </Box>
}
