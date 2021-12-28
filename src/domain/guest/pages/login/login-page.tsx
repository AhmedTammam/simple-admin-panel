import { Flex } from "@chakra-ui/react";

import { LoginForm } from "./components/login-form";

const LoginPage = () => (
  <Flex justifyContent="center" alignItems="center" h="100vh" bg="gray.50">
    <LoginForm />
  </Flex>
);

export { LoginPage };
