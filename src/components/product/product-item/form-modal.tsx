import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Select,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "store/slices/category-slice";
import {
  addProduct,
  ProductProps,
  updateProduct,
} from "store/slices/product-slice";
import { v4 as uuidv4 } from "uuid";

type FormData = {
  englishName: string;
  arabicName: string;
  weight: number;
  category: string;
  thumbnail: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductProps;
};

const FormModal = ({ isOpen, onClose, product }: ModalProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = (values: FormData) => {
    if (product) {
      const updatedProduct = { ...product, ...values };
      dispatch(updateProduct(updatedProduct));
      toast({
        title: "Product updated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      const newProduct = {
        id: uuidv4(),
        ...values,
      };

      dispatch(addProduct(newProduct));
      toast({
        title: "Product added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    reset();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.englishName}>
              <FormLabel>English Name</FormLabel>
              <Input
                bg="white"
                placeholder="English Name"
                {...register("englishName", {
                  required: "This is required",
                })}
                defaultValue={product?.englishName}
              />
              <FormErrorMessage>
                {errors.englishName && errors.englishName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.arabicName} my="4">
              <FormLabel>Arabic Name</FormLabel>
              <Input
                placeholder="Arabic Name"
                bg="white"
                {...register("arabicName", {
                  required: "This is required",
                  pattern: {
                    value:
                      /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufbc1]|[\ufbd3-\ufd3f]|[\ufd50-\ufd8f]|[\ufd92-\ufdc7]|[\ufe70-\ufefc]|[\uFDF0-\uFDFD]/,
                    message: "enter arabic numbers",
                  },
                })}
                defaultValue={product?.arabicName}
              />
              <FormErrorMessage>
                {errors.arabicName && errors.arabicName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.category}>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select Category"
                {...register("category", {
                  required: "This is required",
                })}
                defaultValue={product?.category}
              >
                {categories.length
                  ? categories.map((category) => (
                      <option value={category.englishName} key={category.id}>
                        {category.englishName}
                      </option>
                    ))
                  : "there are no categories"}
              </Select>
              <FormErrorMessage>
                {errors.category && errors.category.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.weight} my="4">
              <FormLabel>Weight</FormLabel>
              <NumberInput>
                <NumberInputField
                  placeholder="Weight"
                  bg="white"
                  {...register("weight", {
                    required: "This is required",
                  })}
                  defaultValue={product?.weight}
                />
              </NumberInput>
              <FormErrorMessage>
                {errors.weight && errors.weight.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.thumbnail}>
              <FormLabel>Thumbnail</FormLabel>
              <Input
                placeholder="Thumbnail"
                bg="white"
                {...register("thumbnail", {
                  required: "enter valid url",
                })}
                defaultValue={product?.thumbnail}
              />
              <FormErrorMessage>
                {errors.thumbnail && errors.thumbnail.message}
              </FormErrorMessage>
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={handleSubmit(onSubmit)}>
            {product ? "Edit" : "Add Product"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { FormModal };
