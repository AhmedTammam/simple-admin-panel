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
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addCategory,
  CategoryProps,
  updateCategory,
} from "store/slices/category-slice";
import { v4 as uuidv4 } from "uuid";

type FormData = {
  englishName: string;
  arabicName: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  category?: CategoryProps;
};

const FormModal = ({ isOpen, onClose, category }: ModalProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = (values: FormData) => {
    if (category) {
      const updatedCategory = { ...category, ...values };
      dispatch(updateCategory(updatedCategory));
      toast({
        title: "category updated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      const newCategory = {
        id: uuidv4(),
        ...values,
      };

      dispatch(addCategory(newCategory));
      toast({
        title: "category added successfully",
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
        <ModalHeader>Add Category</ModalHeader>
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
                defaultValue={category?.englishName}
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
                defaultValue={category?.arabicName}
              />
              <FormErrorMessage>
                {errors.arabicName && errors.arabicName.message}
              </FormErrorMessage>
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={handleSubmit(onSubmit)}>
            {category ? "Edit" : "Add Product"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { FormModal };
