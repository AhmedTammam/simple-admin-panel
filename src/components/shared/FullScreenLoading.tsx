import { Spinner, Heading, VStack } from "@chakra-ui/react";

export function FullScreenLoading() {
  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      spacing="8"
      position="absolute"
      t={0}
      l={0}
      zIndex="99999"
      bg="white"
    >
      <Spinner size="xl" thickness="3px" />

      <Heading fontWeight="medium" size="lg">
        Loading Your Awesome App...
      </Heading>
    </VStack>
  );
}
