import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

export default function Developer() {
  const { id } = useParams();

  return (
    <Box>
      <Heading as="h1">Developer {id}</Heading>
    </Box>
  );
}
