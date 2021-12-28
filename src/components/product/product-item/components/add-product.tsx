import { Box, Button, useDisclosure } from "@chakra-ui/react";

import { FormModal } from "./form-modal";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt="4" pos="relative" minH="30">
      <Button colorScheme="green" onClick={onOpen} pos="absolute" right="8">
        Add Product
      </Button>
      <FormModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export { AddProduct };
