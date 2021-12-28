import {
  Box,
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, Roles } from "store/slices/auth-slice";

const validUserNames = {
  khaled: {
    role: "manager",
  },
  ahmed: {
    role: "editor",
  },
};

type FormData = {
  userName: keyof typeof validUserNames;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>();

  const dispatch = useDispatch();

  const onSubmit = (values: FormData) => {
    const { userName } = values;
    const isManager = validUserNames[userName]?.role === "manager";
    const isEditor = validUserNames[userName]?.role === "editor";

    if (isManager) {
      dispatch(login(Roles.MANAGER));
    } else if (isEditor) {
      dispatch(login(Roles.EDITOR));
    }
  };
  return (
    <Box
      bg="white"
      p="4"
      borderRadius={4}
      w={["100%", "400px"]}
      shadow="base"
      h="auto"
    >
      <Center> login form</Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.userName} my="4">
          <FormLabel htmlFor="userName">User Name</FormLabel>
          <Input
            id="userName"
            bg="white"
            placeholder="userName"
            {...register("userName", {
              required: "This is required",
              minLength: { value: 5, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.userName && errors.userName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="password"
            bg="white"
            {...register("password", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          w="100%"
          colorScheme="blue"
          isLoading={isSubmitting}
          type="submit"
        >
          Login
        </Button>
        <ButtonGroup variant="solid" spacing="6" my="4">
          <Button
            type="submit"
            colorScheme="green"
            onClick={() => {
              setValue("userName", "khaled");
              setValue("password", "kh@led");
            }}
          >
            login as manager
          </Button>
          <Button
            type="submit"
            colorScheme="green"
            onClick={() => {
              setValue("userName", "ahmed");
              setValue("password", "@hmed");
            }}
          >
            login as an editor
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export { LoginForm };
