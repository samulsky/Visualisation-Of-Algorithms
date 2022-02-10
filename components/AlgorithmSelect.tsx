import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function AlgorithmSelect() {
    return (
        <Box>
            <Typography align="center" fontWeight='bold' fontSize={'40px'}>
                Algorithms Select
            </Typography>
            <Box marginTop={2} justifyContent={'space-evenly'} display='flex' flex-direction='column'>
                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Sorting </Typography>
                    <Link href={'../sorting/SortingSelect'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>
            </Box>
        </Box>
    )
}