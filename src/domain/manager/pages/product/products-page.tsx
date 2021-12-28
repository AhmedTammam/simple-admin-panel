import { Grid } from "@chakra-ui/react";
import { ProductItem } from "components/shared/product-item";
import { AddProduct } from "components/shared/product-item/components/add-product";
import { useSelector } from "react-redux";
import { selectProducts } from "store/slices/product-slice";

const ProductsPage = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      <AddProduct />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={6}
        p="8"
      >
        {products.length
          ? products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))
          : "There are no products"}
      </Grid>
    </>
  );
};

export { ProductsPage };