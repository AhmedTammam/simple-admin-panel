import { Badge, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeProduct } from "store/slices/product-slice";
import { Product } from "types/product";

import { EditeProduct } from "./components/edit-product";

const ProductItem = ({ product }: { product: Product }) => {
  const { id, englishName, weight, category, thumbnail } = product;
  const dispatch = useDispatch();
  return (
    <Flex
      flexDir="column"
      border="1px solid"
      borderRadius="4"
      borderColor="gray.200"
      p="4"
      data-testid={`product-item-${id}`}
    >
      <Image src={thumbnail} alt={englishName} />
      <Text my="2">{englishName}</Text>
      <Flex justifyContent="space-between">
        <Badge colorScheme="blue">{category}</Badge>
        <Heading as="h4" size="sm">
          Wieght <Badge fontSize="16px">{weight}</Badge>
        </Heading>
      </Flex>
      <Flex mt="2" justifyContent="space-between">
        <EditeProduct product={product} />
        <Button
          colorScheme="red"
          onClick={() => dispatch(removeProduct(id))}
          data-testid="delete-btn"
        >
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export { ProductItem };
