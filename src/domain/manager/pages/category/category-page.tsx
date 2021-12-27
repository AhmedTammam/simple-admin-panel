import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectCategories } from "store/slices/category-slice";

import { AddCategory } from "./add-category";
import { CategoryItem } from "./category-item";

const CategoryPage = () => {
  const categories = useSelector(selectCategories);
  return (
    <>
      <AddCategory />
      {categories.length ? (
        <Box border="1px solid" borderColor="gray.200">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>English Name</Th>
                <Th>Arabic Name</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {categories.map((category) => (
                <CategoryItem category={category} key={category.id} />
              ))}
            </Tbody>
          </Table>
        </Box>
      ) : (
        "There are no categories"
      )}
    </>
  );
};

export { CategoryPage };