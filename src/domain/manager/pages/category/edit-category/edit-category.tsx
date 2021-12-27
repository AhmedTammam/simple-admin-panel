import { Button, useDisclosure } from "@chakra-ui/react";
import { CategoryProps } from "store/slices/category-slice";

import { FormModal } from "../add-category/form-modal";

const EditeCategory = ({ category }: { category: CategoryProps }) => {
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
