import { Paper, Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function SelectionSortPage() {
    return (
        <Box>
            <Paper>
                Selection Sorting Page
            </Paper>
            <Box>
                <Link href={'/'}>
                    <Button> Home </Button>
                </Link>
            </Box>
        </Box>
    )
}