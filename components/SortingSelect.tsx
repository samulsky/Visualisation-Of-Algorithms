import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SortingSelect() {
    return (
        <Box>
            <Typography align="center" fontWeight='bold' fontSize={'40px'}>
                    Sorting Algorithms
            </Typography>

            <Box marginTop={2} justifyContent={'space-evenly'} display='flex' flex-direction='column'>
                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Bubble </Typography>
                    <Link href={'sorting/BubbleSortPage'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>

                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Heap </Typography>
                    <Link href={'sorting/HeapSortPage'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>

                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Quick </Typography>
                    <Link href={'sorting/QuickSortPage'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>

                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Merge </Typography>
                    <Link href={'sorting/MergeSortPage'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>

                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Selection </Typography>
                    <Link href={'sorting/SelectionSortPage'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>

                <Paper sx={{
                    padding: '5px',
                    boxShadow: 5
                }}>
                    <Typography> Insertion </Typography>
                    <Link href={'sorting/InsertionSortPage'}>
                        <Image height={200} width={200} src='/images/3840.jpg' />
                    </Link>
                </Paper>
            </Box>
        </Box>
    )
}