/* eslint-disable react/prop-types */
import "./Card.css";
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Image, Text, Button, ButtonGroup } from "@chakra-ui/react";


export default function CardList({ nombre, precio, categoria, img }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={img} alt={nombre} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nombre}</Heading>
          <Text>{categoria}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            comprar ahora
          </Button>
          <Button variant="ghost" colorScheme="blue">
            añadir al carito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
