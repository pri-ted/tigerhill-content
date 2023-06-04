import { Card, Image, CardBody, Box, Progress, CardFooter, Stack, Heading, Text, Flex, ButtonGroup, Button } from '@chakra-ui/react'
import { cardHeadingStyle, cardTextStyle, authorNameStyle, contentTimeStyle, authorCompanyStyle, userProgressTextStyle } from "./styles";
import { FiShare2, FiBookmark } from "react-icons/fi"
import UserProgress from '../userProgress';
import { FaBookOpen, FaHeadphones } from "react-icons/fa"
import { useMemo } from 'react';
const ContentCard = (props) => {

  const typeIcon = useMemo(() => {
    switch (props.data.type) {
      case "PODCAST":
        return <FaHeadphones color="white" fontSize="20px" />;
      case "EBOOK":
        return <FaBookOpen color='white' fontSize="20px" />;
      default:
        return <FiBookmark />
    }
  }, [props.data.type])
  return <Card maxW='sm' variant="content" overflow="hidden">
    <CardBody position="relative" >
      <Box position="relative">
        <Image w="100%"
          src={props.data.imageObj.url}
          alt={props.data.imageObj.alt}
        />
        <Flex alignItems="center" justifyContent="flex-start" position="absolute" top="0" left="0" bg="white" borderRadius="0 0 8px" px="0.5rem">
          <UserProgress progress={parseInt(props.data.contentCompleted.replace("%", ""))} /> <Text sx={userProgressTextStyle}>{props.data.contentCompleted} Completed</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" position="absolute" bottom="10%" left="0" bg="white" borderRadius="0 0 8px" width="100%" px="0.5rem">
          <Box p="5px" bg="#FF5900" borderRadius="100%">
            {typeIcon}
          </Box>
          <Box p="5px 10px" bg="rgba(0,0,0,0.7)" borderRadius="16px" color="white">
            <Text sx={contentTimeStyle} >{props.data.totalContentTime}</Text>
          </Box>
        </Flex>
      </Box>
      <Progress value={parseInt(props.data.contentCompleted.replace("%", ""))} colorScheme="orange" height="2px" />
      <Stack mt='2' spacing='3' padding='0.5rem' >
        <Heading size='md' sx={cardHeadingStyle}>{props.data.categories.join(", ")}</Heading>
        <Text sx={cardTextStyle}>
          {props.data.title} : {props.data.subTitle}
        </Text>
        <Flex>
          {props.data.experts.map((expert, index) => <Flex flexDirection="column" key={index}><Text sx={authorNameStyle}>{expert.name}</Text><Text sx={authorCompanyStyle}>{expert.company || "Company"}</Text></Flex>)}
        </Flex>
      </Stack>
    </CardBody >
    <CardFooter justifyContent="flex-end" pt="0.75rem" >
      <ButtonGroup spacing='2' >
        <Button variant='iconButtons'>
          <FiShare2 />
        </Button>
        <Button variant='iconButtons'>
          <FiBookmark />
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card >
}

export default ContentCard;




