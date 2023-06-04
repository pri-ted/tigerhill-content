import { Box, SkeletonCircle, Skeleton, Flex, Stack } from '@chakra-ui/react'

const CardSkeleton = () => {
  return <Box boxShadow="lg" bg="white" borderRadius={"8px"} pb="12px" overflow="hidden" marginTop="0.75rem" maxW="sm">
    <Box position="relative">
      <Skeleton height="166px" />
      <Skeleton height="40px" borderRadius="0 0 8px" startColor="#000000bb" endColor="black.300" position="absolute" top="0" left="0" width="35%" />
      <Flex px="8px" position="absolute" bottom={"10%"} w="100%" justifyContent={"space-between"} alignItems="center">
        <SkeletonCircle size="8" startColor="#000000bb" endColor="black.300" />
        <Skeleton height="24px" startColor="#000000bb" endColor="black.300" width="60px" borderRadius="16px" />
      </Flex>
    </Box>
    <Stack mt={2} spacing='3' padding='0.5rem'>
      <Stack position="relative" width="100%">
        <Skeleton height="14px" width="100%" />
        <Skeleton height="14px" width="25%" />
      </Stack>
      <Stack position="relative" width="100%">
        <Skeleton height="19px" width="100%" />
        <Skeleton height="19px" width="75%" />
      </Stack>
    </Stack>
    <Stack position="relative" width="100%" p="0.5rem">
      <Skeleton height="12px" width="50%" />
      <Skeleton height="12px" width="40%" />
    </Stack>
    <Flex p="0.5rem" alignItems="center" justifyContent="flex-end" width="100%" gap={3}>
      <Skeleton height="20px" width="20px" />
      <Skeleton height="20px" width="20px" />
    </Flex>
  </Box>
}
export default CardSkeleton;;