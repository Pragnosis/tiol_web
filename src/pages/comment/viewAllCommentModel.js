import React from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { CustomDialog } from '../../component/CustomDialog';
import { deleteCommentReeReply, deleteCommentReply, getAllComments, getCommentsReReplySecondLevel, getCommentsReplyOneLevel, postCommentsReplyOneLevel, postCommentsReplySecondLevel, updateComment, updateCommentReReply, updateCommentReply } from '../../services';
import { useMutation, useQuery } from 'react-query';
import { useEffect } from 'react';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Height } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// const replyArry = [
//     {
//         "id": 2,
//         "comment": "Hello This is First Reply Test on Comment",
//         "username": "Ankur",
//         "replyCount": 1
//     },
//     {
//         "id": 2,
//         "comment": "Hello This is Second Reply Test on Comment",
//         "username": "Aviyukt",
//         "replyCount": 1
//     },
//     {
//         "id": 2,
//         "comment": "Hello This is Third Reply Test on Comment",
//         "username": "Shreya",
//         "replyCount": 1
//     },
//     {
//         "id": 2,
//         "comment": "Hello This is Fourth Reply Test on Comment",
//         "username": "Aashi",
//         "replyCount": 1
//     }
// ]


export const ViewAllCommentModel = (props) => {
    const { togglerHandler, dynamicNewsID } = props;
    const userID = 1;
    const [commentData, setCommentData] = useState([])


    const [replyArry, setReplyArry] = useState([])
    const [reReplyArry, setReReplyArry] = useState([])
    const [getReplyData, setGetReplyData] = useState([])
    const [getReReplyData, setGetReReplyData] = useState([])
    const [replyModel, setReplyModel] = useState(false)
    const [replyModelTwo, setReplyModelTwo] = useState(false)
    const [commentID, setSommentID] = useState(null)
    const [commentReReplyID, setCommentReReplyID] = useState(null)
    const [pagedata, setPageData] = useState({ messege: "" })
    const [replyEnabled, setReplyEnabled] = useState(false)
    const [RereplyEnabled, setReReplyEnabled] = useState(false)
    const [dynamicTextFieldShow, setDynamicTextFieldShow] = useState(false)
    const [replyHideandShow, setReplyHideandShow] = useState(false)
    const [reReplyHideandShow, setReReplyHideandShow] = useState(false)
    const [checkType, setCheckType] = useState('')

    const handleClose = () => {
        togglerHandler(false)
    }

    const { data: getAllCommentsData, refetch } = useQuery(['GetAllComments'], () => getAllComments(dynamicNewsID), { enabled: true, retry: false })
    useEffect(() => {
        if (getAllCommentsData) {
            setCommentData(getAllCommentsData?.data)
        }
    }, [getAllCommentsData])

    const { data: getAllReplyCommentData, refetch: replyRefetch } = useQuery(['GetAllCommentReply'], () => getCommentsReplyOneLevel(commentID), { enabled: replyEnabled, retry: false })
    useEffect(() => {
        if (getAllReplyCommentData) {
            setReplyArry(getAllReplyCommentData?.data)
        }
    }, [getAllReplyCommentData])

    const { data: getAllReReplyCommentData } = useQuery(['GetAllCommentReReply'], () => getCommentsReReplySecondLevel(commentID), { enabled: RereplyEnabled, retry: false })
    useEffect(() => {
        if (getAllReReplyCommentData) {
            setReReplyArry(getAllReReplyCommentData?.data)
        }
    }, [getAllReReplyCommentData])



    const { mutate: postReplyOneLevelCommentMutate, refetch: reReplyRefetch } = useMutation(postCommentsReplyOneLevel, {
        onSuccess: (data, context, variable) => onSuccessdisLike(data, context, variable),
        onError: (data, context, variable) => onErrordisLike(data, context, variable),
    })
    const onSuccessdisLike = () => {
        setReplyModel(false)
        refetch();
    }
    const onErrordisLike = () => {
    }

    const { mutate: postReReplySecondLevelCommentMutate } = useMutation(postCommentsReplySecondLevel, {
        onSuccess: (data, context, variable) => onSuccesReReply(data, context, variable),
        onError: (data, context, variable) => onErrorReReply(data, context, variable),
    })
    const onSuccesReReply = (data) => {
        replyRefetch();
        refetch();
    }
    const onErrorReReply = () => {
    }

    const { mutate: updateCommentMutate } = useMutation(updateComment, {
        onSuccess: (data, context, variable) => onSuccessdisLikeUpdate(data, context, variable),
        onError: (data, context, variable) => onErrordisLikeUpdate(data, context, variable),
    })
    const onSuccessdisLikeUpdate = () => {
        setReplyModel(false)
        refetch();
    }
    const onErrordisLikeUpdate = () => {
    }

    const { mutate: updateCommentReplyMutate } = useMutation(updateCommentReply, {
        onSuccess: (data, context, variable) => onSuccessUpdateReply(data, context, variable),
        onError: (data, context, variable) => onErrorUpdateReply(data, context, variable),
    })
    const onSuccessUpdateReply = () => {
        replyRefetch();
        refetch();
    }
    const onErrorUpdateReply = () => {
    }

    const { mutate: updateCommentReReplyMutate } = useMutation(updateCommentReReply, {
        onSuccess: (data, context, variable) => onSuccessUpdateReReply(data, context, variable),
        onError: (data, context, variable) => onErrorUpdateReReply(data, context, variable),
    })
    const onSuccessUpdateReReply = () => {
        reReplyRefetch();
    }
    const onErrorUpdateReReply = () => {
    }


    const { mutate: deleteCommentReplyMutate } = useMutation(deleteCommentReply, {
        onSuccess: (data, context, variable) => onSuccessDeleteReply(data, context, variable),
        onError: (data, context, variable) => onErrorDeleteReply(data, context, variable),
    })
    const onSuccessDeleteReply = () => {
        replyRefetch();
        refetch();
    }
    const onErrorDeleteReply = () => {
    }

    const { mutate: deleteCommentReeReplyMutate } = useMutation(deleteCommentReeReply, {
        onSuccess: (data, context, variable) => onSuccessDeleteReeReply(data, context, variable),
        onError: (data, context, variable) => onErrorDeleteReeReply(data, context, variable),
    })
    const onSuccessDeleteReeReply = () => {
        replyRefetch();
        refetch();
    }
    const onErrorDeleteReeReply = () => {
    }


    const replyViewClickHandler = (item) => {
        setReplyHideandShow(!replyHideandShow)
        setSommentID(item?.id)
        setReplyEnabled(true)
    }

    const ReReplyViewClickHandler = (item, index) => {
        setReReplyEnabled(true)
        setSommentID(item?.id)
        setReReplyHideandShow(!reReplyHideandShow)
    }

    const replyClickHandler = (item, type) => {
        setCheckType(type)
        setSommentID(item?.id)
        setReplyModel(true)
    }

    const closeIconClickHandler = () => {
        setReplyModel(false)
    }


    const updateIconClickHandler = (item, type) => {
        setCheckType(type)
        setSommentID(item?.id)
        setReplyModel(true)
    }

    useEffect(() => {
        const localArray = replyArry?.map((item) => {
            return { ...item, dynamicTextFieldShow: false }
        })
        setGetReplyData(localArray)
    }, [replyArry])

    useEffect(() => {
        const localArray = reReplyArry?.map((item) => {
            return { ...item, dynamicTextFieldShow: false }
        })
        setGetReReplyData(localArray)
    }, [reReplyArry])

    const reReReplyClickHandler = (item, type, index) => {
        var localArray = [...getReplyData];
        localArray[index] = { ...item, dynamicTextFieldShow: true }
        setGetReplyData(localArray)
        setCheckType(type)
    }

    const updateIconClickHandlerReply = (item, type, index) => {
        var localArray = [...getReplyData];
        localArray[index] = { ...item, dynamicTextFieldShow: true }
        setGetReplyData(localArray)
        setCheckType(type)
        setSommentID(item?.id)
    }

    const closeIconModel = (item, type, index) => {
        if (type == "reply") {
            var localArray = [...getReplyData];
            localArray[index] = { ...item, dynamicTextFieldShow: false }
            setGetReplyData(localArray)
        } if (type == "reReply") {
            var localArray = [...getReReplyData];
            localArray[index] = { ...item, dynamicTextFieldShow: false }
            setGetReReplyData(localArray)
        }
    }

    const deleteIconClickHandlerReply = (item) => {
        deleteCommentReplyMutate({ url: `${userID}/${item?.id}` })
    }


    const updateIconClickHandlerReReply = (item, type, index) => {
        var localArray = [...getReReplyData];
        localArray[index] = { ...item, dynamicTextFieldShow: true }
        setGetReReplyData(localArray)
        setCheckType(type)
        setCommentReReplyID(item?.id)
    }

    const deleteIconClickHandlerReReply = (item) => {
        deleteCommentReeReplyMutate({ url: `${userID}/${item?.id}` })
    }


    const sendMessegeClickHandler = () => {
        if (checkType == 'update') {
            updateCommentMutate({ url: `${userID}/${commentID}/${pagedata?.messege}` })
        }
        else if (checkType == 'post') {
            postReplyOneLevelCommentMutate({ url: `${userID}/${pagedata?.messege}/${commentID}` })
        }
        else if (checkType == 'updateReply') {
            updateCommentReplyMutate({ url: `${userID}/${commentID}/${pagedata?.messege}` })
        } else if (checkType == 'postReReply') {
            postReReplySecondLevelCommentMutate({ url: `${userID}/${pagedata?.messege}/${commentID}` })
        }
        else if (checkType == 'updateReReply') {
            updateCommentReReplyMutate({ url: `${userID}/${commentReReplyID}/${pagedata?.messege}` })
        }
    }




    return <CustomDialog maxWidth="md" dialogTitle="Comment Box" open="true" handleClose={handleClose}>
        <Grid container>
            <Grid item xs='12' className='model-height-manage'>
                <Grid container item className='parent-box-joint'>
                    {
                        commentData?.length > 0 &&
                        commentData?.map((item, type, index) => {
                            return <>
                                <Box className='comment-box'>
                                    <Grid container item justifyContent='space-between' spacing={2}>
                                        <Grid item xs='10'>
                                            <Typography className='comment-by-userNme'>{item?.username}</Typography>
                                        </Grid>
                                        <Grid item xs='2'>
                                            <Grid container item justifyContent='space-around'>
                                                <EditIcon onClick={() => updateIconClickHandler(item, 'update', index)} className='edit-or-delete-icon' />
                                                <DeleteIcon className='edit-or-delete-icon' />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Typography className='messege-of-comment'>{item?.comment}</Typography>
                                    <Grid container item justifyContent='flex-end'>
                                        <Grid item xs='3'>
                                            <Grid container item justifyContent='space-between' alignItems='center'>
                                                <Typography className='reply-of-comment-view' onClick={() => replyViewClickHandler(item, index)}>
                                                    {item?.replyCount == 0 ? null : `${item?.replyCount} ${'Replies..'}`}                                                </Typography>
                                                <Typography className='reply-of-comment' onClick={() => replyClickHandler(item, 'post', index)}>Reply</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    {
                                        replyModel &&
                                        <Grid container item>
                                            <Grid item xs='12'>
                                                <Paper className='replyModel'>
                                                    <Grid container item>
                                                        <Grid item xs='12'>
                                                            <TextField
                                                                className='textField-effect'
                                                                type='text'
                                                                variant='outlined'
                                                                placeholder='Write a comment'
                                                                value={pagedata?.messege}
                                                                onChange={(e) => {
                                                                    setPageData({ ...pagedata, messege: e?.target?.value })
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                                <Grid item xs='12'>
                                                    <Grid container item justifyContent='flex-end'>
                                                        <Typography className='reply-send-or-close' onClick={closeIconClickHandler} >Close</Typography>
                                                        <Typography className='reply-send-or-close' onClick={sendMessegeClickHandler}>Send</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    }
                                </Box>


                            </>
                        })
                    }
                </Grid>
            </Grid>
            {
                replyHideandShow && <Grid item xs='12' style={{ paddingTop: "0px" }}>
                    <Grid container item justifyContent='flex-end'>
                        <Grid item xs='11'>
                            <Grid container item>
                                {
                                    getReplyData?.length > 0 &&
                                    getReplyData?.map((item, index) => {
                                        return <>
                                            <Box className='comment-box'>
                                                <Grid container item justifyContent='space-between' spacing={2}>
                                                    <Grid item xs='10'>
                                                        <Typography className='comment-by-userNme'>{item?.username}</Typography>
                                                    </Grid>
                                                    <Grid item xs='2'>
                                                        <Grid container item justifyContent='space-around'>
                                                            <EditIcon onClick={() => updateIconClickHandlerReply(item, 'updateReply', index)} className='edit-or-delete-icon' />
                                                            <DeleteIcon onClick={() => deleteIconClickHandlerReply(item, 'deleteReply', index)} className='edit-or-delete-icon' />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Typography className='messege-of-comment'>{item?.comment}</Typography>
                                                <Grid container item justifyContent='flex-end'>
                                                    <Grid item xs='3'>
                                                        <Grid container item justifyContent='space-between' alignItems='center'>
                                                            <Typography className='reply-of-comment-view' onClick={() => ReReplyViewClickHandler(item, index)}>
                                                                {item?.replyCount == 0 ? null : `${item?.replyCount} ${'Replies..'}`}
                                                            </Typography>
                                                            <Typography className='reply-of-comment' onClick={() => reReReplyClickHandler(item, 'postReReply', index)}>Reply</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                                {
                                                    item?.dynamicTextFieldShow &&
                                                    <Grid container item>
                                                        <Grid item xs='12'>
                                                            <Paper className='replyModel'>
                                                                <Grid container item>
                                                                    <Grid item xs='12'>
                                                                        <TextField
                                                                            className='textField-effect'
                                                                            type='text'
                                                                            variant='outlined'
                                                                            placeholder='Write a comment'
                                                                            value={pagedata?.messege}
                                                                            onChange={(e) => {
                                                                                setPageData({ ...pagedata, messege: e?.target?.value })
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Paper>
                                                            <Grid item xs='12'>
                                                                <Grid container item justifyContent='flex-end'>
                                                                    <Typography className='reply-send-or-close' onClick={() => closeIconModel(item, 'reply', index)} >Close</Typography>
                                                                    <Typography className='reply-send-or-close' onClick={sendMessegeClickHandler}>Send</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                }
                                            </Box>
                                        </>
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {
                reReplyHideandShow && <Grid item xs='12' style={{ paddingTop: "0px" }}>
                    <Grid container item justifyContent='flex-end'>
                        <Grid item xs='10'>
                            <Grid container item>
                                {
                                    getReReplyData?.length > 0 &&
                                    getReReplyData?.map((item, index) => {
                                        return <>
                                            <Box className='comment-box'>
                                                <Grid container item justifyContent='space-between' spacing={2}>
                                                    <Grid item xs='10'>
                                                        <Typography className='comment-by-userNme'>{item?.username}</Typography>
                                                    </Grid>
                                                    <Grid item xs='2'>
                                                        <Grid container item justifyContent='space-around'>
                                                            <EditIcon onClick={() => updateIconClickHandlerReReply(item, 'updateReReply', index)} className='edit-or-delete-icon' />
                                                            <DeleteIcon onClick={() => deleteIconClickHandlerReReply(item)} className='edit-or-delete-icon' />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Typography className='messege-of-comment'>{item?.comment}</Typography>
                                                {
                                                    item?.dynamicTextFieldShow &&
                                                    <Grid container item>
                                                        <Grid item xs='12'>
                                                            <Paper className='replyModel'>
                                                                <Grid container item>
                                                                    <Grid item xs='12'>
                                                                        <TextField
                                                                            className='textField-effect'
                                                                            type='text'
                                                                            variant='outlined'
                                                                            placeholder='Write a comment'
                                                                            value={pagedata?.messege}
                                                                            onChange={(e) => {
                                                                                setPageData({ ...pagedata, messege: e?.target?.value })
                                                                            }}
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Paper>
                                                            <Grid item xs='12'>
                                                                <Grid container item justifyContent='flex-end'>
                                                                    <Typography className='reply-send-or-close' onClick={() => closeIconModel(item, 'reReply', index)} >Close</Typography>
                                                                    <Typography className='reply-send-or-close' onClick={sendMessegeClickHandler}>Send</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                }
                                            </Box>
                                        </>
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }

        </Grid>
    </CustomDialog>
}