import { Box, Button, useDisclosure } from "@chakra-ui/react";

import { FormModal } from "./form-modal";

const AddCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box my="4" pos="relative" minH="30">
      <Button colorScheme="green" onClick={onOpen} pos="absolute" right="8">
        Add Category
      </Button>
      <FormModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export { AddCategory };
