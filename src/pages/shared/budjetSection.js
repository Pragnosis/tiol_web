// import { Box, Card, Container, Grid, Typography } from '@material-ui/core'
// import React, { useEffect, useState } from 'react'
// import { useQuery } from 'react-query';
// import img1 from '../../images/logo.png';
// import { sectionOne, sectionThree } from '../../services';


// export const HomeCard3 = () => {


//     const [sectionOneListList, setSectionOneListList] = useState([])

//     const { data: sectionOneData, error: sectionOneErrorError } = useQuery(["SectionOne"], () => sectionThree(), { enabled: true, retry: false })

//     useEffect(() => {
//         if (sectionOneData) {
//             setSectionOneListList(sectionOneData?.data)
//         }
//     }, [sectionOneData])

//     return <>
//         <Container>
//             <Grid container justifyContent='space-between'>
//                 {
//                     sectionOneListList.length > 0 &&
//                     sectionOneListList?.map((item) => {
//                         return <Grid item xs='4' style={{ padding: "20px 10px 20px 10px", borderRadius: "20px", borderBottom: "1px solid #efefef" }} spacing={5} >
//                             <Box style={{ borderRight: "1px solid #efefef", borderLeft: "1px solid #efefef", height: "820px" }} >
//                                 <Box p={1} justifyContent='center' display='flex' alignItems='center' color="orangered" bgcolor='#efefef' border="1px solid #efefef" borderRadius="20px 20px 0px 0px" style={{ height: "10vh" }}>
//                                     <Typography variant='h5'>{item?.categoryName}</Typography>
//                                 </Box>
//                                 {
//                                     item?.secOtherdata?.length > 0 &&
//                                     item?.secOtherdata?.map((item) => {
//                                         return <> <Box p={2} >
//                                             <Grid item xs='12'>
//                                                 <Typography>
//                                                     <Box color='orangered'>{item.sections}</Box>
//                                                 </Typography>
//                                             </Grid>
//                                         </Box>

//                                         </>

//                                     })
//                                 }
//                             </Box>
//                         </Grid>
//                     })
//                 }
//             </Grid>
//         </Container>
//     </>
// }
