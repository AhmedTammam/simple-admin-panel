import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCategory } from "store/slices/category-slice";
import { Category } from "types/category";

import { EditeCategory } from "../edit-category";

const CategoryItem = ({ category }: { category: Category }) => {
  const { id, englishName, arabicName } = category;
  const dispatch = useDispatch();
  return (
    <Tr>
      <Td>{englishName}</Td>
      <Td>{arabicName}</Td>
      <Td isNumeric>
        <EditeCategory category={category} />
        <Button
          colorScheme="red"
          size="sm"
          onClick={() => dispatch(removeCategory(id))}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};

export { CategoryItem };
