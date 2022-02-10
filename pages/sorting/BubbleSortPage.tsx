import { Paper, Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function BubbleSortPage() {
    return (
        <Box>
            <Paper>
                Bubble Sorting Page
            </Paper>
            <Box>
                <Link href={'/'}>
                    <Button> Home </Button>
                </Link>
            </Box>
        </Box>
    )
}