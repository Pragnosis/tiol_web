import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { useLocation } from 'react-router-dom'
import { dislikeDetails, getDetailsData, likeDetails } from '../../../services';
import { useState } from 'react';
import { useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export const DetailsCaselaw = () => {
    const location = useLocation();
    const rowData = location?.state
    const caselawUrl = rowData?.caselaw_Url?.replace(/\//g, '-')
    const userID = 1

    console.log('rowData', rowData)

    const [like, setLike] = useState(false)

    const { data, error } = useQuery(['GetAllDetailsData'], () => getDetailsData(rowData?.caselaw_Url), { enabled: true, retry: false })
    useEffect(() => {
if(data){
    setLike(data?.data?.likecount > 0 ? true : false)
}
    }, [data])


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


    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <Grid container item>
                    <Grid item xs='4'>
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
                </Grid>
                <Box m={3} dangerouslySetInnerHTML={{ __html: data?.data?.caselawDesc }} />
            </Grid>
        </Grid>
    </Box>
}
