// src/components/SkeletonLoader.js
import React from 'react';
import { Box, Grid, GridItem, Skeleton, Stack } from '@chakra-ui/react';

export const SkeletonLoader = () => (
  <Box p={5} w="100%">
    <Skeleton height="40px" mb={5} />
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <Stack>
          <Skeleton height="40px" mb={2} />
          <Skeleton height="20px" mb={2} />
          <Skeleton height="20px" mb={2} />
          <Skeleton height="20px" mb={2} />
        </Stack>
      </GridItem>
      <GridItem colSpan={2}>
        <Stack spacing={4}>
          <Skeleton height="20px" mb={2} />
          <Skeleton height="20px" mb={2} />
          <Skeleton height="20px" mb={2} />
          <Skeleton height="20px" mb={2} />
        </Stack>
      </GridItem>
    </Grid>
    <Skeleton height="40px" mt={5} />
    <Grid templateColumns="repeat(7, 1fr)" gap={4}>
      {Array(7).fill(0).map((_, index) => (
        <GridItem key={index}>
          <Stack>
            <Skeleton height="20px" mb={2} />
            <Skeleton height="20px" mb={2} />
            <Skeleton height="20px" mb={2} />
            <Skeleton height="20px" mb={2} />
          </Stack>
        </GridItem>
      ))}
    </Grid>
  </Box>
);
