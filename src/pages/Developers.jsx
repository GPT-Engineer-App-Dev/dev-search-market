import { useState } from "react";
import { Input, Stack, Select, Box, Heading, Text, Wrap, Tag, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const developers = [
  {
    id: 1,
    name: "John Smith",
    location: "New York",
    technologies: ["React", "Node.js"],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "San Francisco",
    technologies: ["Angular", ".NET"],
  },
  {
    id: 3,
    name: "Michael Lee",
    location: "Chicago",
    technologies: ["React", "Go"],
  },
];

export default function Developers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const locations = [...new Set(developers.map((d) => d.location))];
  const technologies = [...new Set(developers.flatMap((d) => d.technologies))];

  const filteredDevelopers = developers.filter((dev) => (dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || dev.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))) && (selectedLocation === "" || dev.location === selectedLocation) && (selectedTechnologies.length === 0 || selectedTechnologies.every((t) => dev.technologies.includes(t))));

  return (
    <Box>
      <Heading as="h1" mb={8}>
        Developers
      </Heading>

      <Stack spacing={4} mb={8}>
        <Input placeholder="Search by name or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Select placeholder="Filter by location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </Select>
        <Select placeholder="Filter by technology" multiple value={selectedTechnologies} onChange={(e) => setSelectedTechnologies(Array.from(e.target.selectedOptions, (o) => o.value))}>
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </Select>
      </Stack>

      {filteredDevelopers.map((dev) => (
        <Box key={dev.id} p={4} borderWidth={1} mb={4}>
          <Heading as="h2" size="lg">
            <Link to={`/developers/${dev.id}`}>{dev.name}</Link>
          </Heading>
          <Text>{dev.location}</Text>
          <Wrap>
            {dev.technologies.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Wrap>
          <Button mt={4}>Contact</Button>
        </Box>
      ))}
    </Box>
  );
}
