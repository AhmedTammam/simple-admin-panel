import { Button, useDisclosure } from "@chakra-ui/react";
import { Category } from "types/category";

import { FormModal } from "../add-category/form-modal";

const EditeCategory = ({ category }: { category: Category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" onClick={onOpen} size="sm" mr="2">
        Edit
      </Button>
      <FormModal isOpen={isOpen} onClose={onClose} category={category} />
    </>
  );
};

export { EditeCategory };
