import {
  Box, Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useToast
} from "@chakra-ui/react";
import HomeLayout from "Layout/HomeLayout";
import {useState} from 'react'

export default function Home() {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const handleSubmit =  async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      toast({
        title: "error",
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <HomeLayout>
      <Heading>Monolez Frontend</Heading>

      <Box onSubmit={handleSubmit} mt={"1rem"} width={"600px"} as="form">
        <FormControl mb={"1rem"}>
          <FormLabel>Docker image</FormLabel>
          <Input type='text' />
        </FormControl>

        <Flex justifyContent={"flex-end"}>
          <Button isLoading={loading} type="submit">Submit</Button>
        </Flex>

      </Box>
    </HomeLayout>
  );
}

