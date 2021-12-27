import { Box } from "@chakra-ui/react";
import { ReactChild } from "react";

const MainLayout = ({ children }: { children: ReactChild }) => (
  <Box bg="gray.50" h="100vh">
    {children}
  </Box>
);

export { MainLayout };
