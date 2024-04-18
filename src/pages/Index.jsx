import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, List, ListItem, Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [courses, setCourses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddCourse = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Error",
        description: "Course name can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setCourses([...courses, inputValue]);
    setInputValue("");
  };

  const handleDeleteCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Curriculum Builder
        </Heading>
        <FormControl>
          <FormLabel htmlFor="course-input">Add New Course</FormLabel>
          <Flex>
            <Input id="course-input" placeholder="Enter course name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <IconButton colorScheme="blue" aria-label="Add course" icon={<FaPlus />} onClick={handleAddCourse} ml={2} />
          </Flex>
        </FormControl>
        <Box w="full">
          <Heading as="h2" size="lg">
            Courses List
          </Heading>
          <List spacing={3}>
            {courses.map((course, index) => (
              <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
                <Text>{course}</Text>
                <IconButton aria-label="Delete course" icon={<FaTrash />} onClick={() => handleDeleteCourse(index)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
