import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { deleteBookmarked, getAllBookmarked } from '../../../services'
import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export const CaselawBookMark = () => {
    const userID = 1

    const [AllBookmarkData, setAllBookmarkData] = useState([])


    const { data, refetch } = useQuery(['GetAllBookmarked'], () => getAllBookmarked({ url: userID }), { enabled: true, retry: false })
    useEffect(() => {
        if (data && data) {
            setAllBookmarkData(data?.data)
        }
    }, [data])

    const { mutate: deleteBookmarkMutate } = useMutation(deleteBookmarked, {
        onSuccess: (data, context, variable) => onSuccessUnbookmarked(data, context, variable),
        onError: (data, context, variable) => onErrorUnbookmarked(data, context, variable),
    })

    const onSuccessUnbookmarked = () => {
        refetch();
    }
    const onErrorUnbookmarked = () => {

    }



    const deleteBookmarClickHandler = (item) => {
        deleteBookmarkMutate({ url: `${userID}/${item?.bookMarkID}` });
    }


    return <Box>
        <Grid container>
            {
                AllBookmarkData?.length > 0 &&
                AllBookmarkData?.map((item) => {
                    return item?.subBookMark?.length > 0 &&
                        item?.subBookMark?.map((item) => {
                            return <Grid item xs='8'>
                                <Grid container item alignItems='center'>
                                    <Typography style={{ border: "1px solid red", padding: "10px" }}>{item?.url}</Typography>
                                    <DeleteIcon onClick={() => deleteBookmarClickHandler(item)} style={{ cursor: "pointer" }} />
                                </Grid>
                            </Grid>
                        })
                })
            }
        </Grid>
    </Box>
}
