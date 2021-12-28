import { Button, useDisclosure } from "@chakra-ui/react";
import { ProductProps } from "types/product";

import { FormModal } from "./form-modal";

const EditeProduct = ({ product }: { product: ProductProps }) => {
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
