import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaComments, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={6}>
            Hire Top Software Talent on Particles
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles is the leading marketplace for companies to find and hire vetted software developers specializing in web technologies.
          </Text>
          <Button size="lg" colorScheme="teal">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Benefits */}
      <Box py={24}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
            <Box>
              <Flex color="teal.500" mb={4}>
                <FaCode size={48} />
              </Flex>
              <Heading size="lg" mb={4}>
                Top Developers
              </Heading>
              <Text>Access to a curated pool of top software developers.</Text>
            </Box>

            <Box>
              <Flex color="teal.500" mb={4}>
                <Image src="https://images.unsplash.com/photo-1550376026-33cbee34f79e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGxhbmd1YWdlcyUyMGxvZ29zfGVufDB8fHx8MTcxMzA1ODE3MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Languages" />
              </Flex>
              <Heading size="lg" mb={4}>
                Wide Range of Expertise
              </Heading>
              <Text>Find developers specializing in React, Node.js, .NET, Go, JavaScript and more.</Text>
            </Box>

            <Box>
              <Flex color="teal.500" mb={4}>
                <FaHandshake size={48} />
              </Flex>
              <Heading size="lg" mb={4}>
                Streamlined Hiring
              </Heading>
              <Text>Efficient process to find, message and hire the right developers.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box bg="gray.50" py={24}>
        <Container maxW="container.lg">
          <Heading textAlign="center" size="2xl" mb={16}>
            How It Works
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
            <Stack spacing={6}>
              <Flex>
                <Text fontSize="2xl" fontWeight="bold" color="teal.500" mr={4}>
                  1
                </Text>
                <Box>
                  <Heading size="lg">Browse Developer Listings</Heading>
                  <Text>Search our vetted pool of top software developers.</Text>
                </Box>
              </Flex>

              <Flex>
                <Text fontSize="2xl" fontWeight="bold" color="teal.500" mr={4}>
                  2
                </Text>
                <Box>
                  <Heading size="lg">Filter by Skills and Location</Heading>
                  <Text>Narrow down to developers with the right expertise in your timezone.</Text>
                </Box>
              </Flex>

              <Flex>
                <Text fontSize="2xl" fontWeight="bold" color="teal.500" mr={4}>
                  3
                </Text>
                <Box>
                  <Heading size="lg">Message Developers</Heading>
                  <Text>Contact your top candidates to discuss fit and availability.</Text>
                </Box>
              </Flex>

              <Flex>
                <Text fontSize="2xl" fontWeight="bold" color="teal.500" mr={4}>
                  4
                </Text>
                <Box>
                  <Heading size="lg">Hire and Start Project</Heading>
                  <Text>Hire your selected developer and kick off the engagement.</Text>
                </Box>
              </Flex>
            </Stack>

            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjBjb2xsYWJvcmF0aW5nfGVufDB8fHx8MTcxMzAzMTYyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers" />
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
