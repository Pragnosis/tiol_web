import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom'
import { getDetailsData } from '../../../services';
import { useState } from 'react';
import { useEffect } from 'react';

export const DetailsCaselaw = () => {
    const location = useLocation();
    const rowData = location?.state

    const { data, error } = useQuery(['GetAllDetailsData'], () => getDetailsData(rowData?.caselaw_Url), { enabled: true, retry: false })


    console.log('data', data)

    return <Box>
        <Grid container>
            <Grid item xs='12'>
                <Box m={3} dangerouslySetInnerHTML={{ __html: data?.data?.caselawDesc }} />
            </Grid>
        </Grid>
    </Box>
}
