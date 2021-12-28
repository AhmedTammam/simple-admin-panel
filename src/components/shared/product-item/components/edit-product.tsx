import { Button, useDisclosure } from "@chakra-ui/react";
import { Product } from "types/product";

import { FormModal } from "./form-modal";

const EditeProduct = ({ product }: { product: Product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Edit
      </Button>
      <FormModal isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export { EditeProduct };
