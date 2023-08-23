import React from 'react'
import { CustomDialog } from '../../component/CustomDialog'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { useState } from 'react';
import { useMutation } from 'react-query';
import { postComments } from '../../services';

export const CommentModel = (props) => {
    const { togglerHandler, dynamicNewsID, allDataRefetch, setPostDone } = props;
    const userID = 1;

    const [pagedata, setPageData] = useState({
        messege: ""
    })

    const handleClose = () => {
        togglerHandler(false)
    }


    const { mutate: postCommentMutate } = useMutation(postComments, {
        onSuccess: (data, context, variable) => onSuccessdisLike(data, context, variable),
        onError: (data, context, variable) => onErrordisLike(data, context, variable),
    })

    const onSuccessdisLike = (data) => {
        togglerHandler(false)
        allDataRefetch();
        setPostDone(data?.data?.commentID)
    }
    const onErrordisLike = () => {

    }

    const postClickHandler = () => {
        postCommentMutate({ url: `${userID}/${pagedata?.messege}/${dynamicNewsID}` });
    }


    return <CustomDialog maxWidth="sm" dialogTitle="Comment" open="true" handleClose={handleClose} className='model-scroll'>
        <Grid container>
            <Grid item xs='12'>
                <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>DISCUSS THIS STORY</Typography>
            </Grid>
            <Grid item xs='12' style={{ paddingTop: "5px" }}>
                <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>Story Headline :</Typography>
            </Grid>
            <Grid item xs='12'>
                <Typography style={{ fontSize: "13px", color: "#006633" }}>Striking Down by One High Court - Binding on Other High Courts?</Typography>
            </Grid>
            {/* <Grid item xs='12' style={{ paddingTop: "20px" }}>
                <Grid container item alignItems='center' >
                    <Grid item xs='2'>
                        <Typography>Subject - </Typography>
                    </Grid>
                    <Grid item xs='10'>
                        <TextField
                            type='text'
                            fullWidth
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
            </Grid> */}
            <Grid item xs='12' style={{ paddingTop: "10px" }}>
                <Grid container item alignItems='center' >
                    <Grid item xs='2'>
                        <Typography>Message - </Typography>
                    </Grid>
                    <Grid item xs='10'>
                        <TextField
                            type='text'
                            fullWidth
                            variant='outlined'
                            value={pagedata?.messege}
                            onChange={(e) => {
                                setPageData({ ...pagedata, messege: e?.target?.value })
                            }}
                            multiline
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs='12' style={{ paddingTop: "20px" }}>
                <Grid container item alignItems='center' spacing={3}>
                    <Grid item xs='6'>
                        <Button fullWidth variant='contained' style={{ backgroundColor: "rgb(227, 118, 60)", color: "#fff" }}>Cancel</Button>
                    </Grid>
                    <Grid item xs='6'>
                        <Button fullWidth variant='contained' style={{ backgroundColor: "rgb(227, 118, 60)", color: "#fff" }} onClick={postClickHandler} >Post</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </CustomDialog>
}
