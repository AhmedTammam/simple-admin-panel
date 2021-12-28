import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "store/slices/auth-slice";

const Header = ({ renderLinks }: { renderLinks: () => void }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Flex py="4" px="8" bg="blue" color="white">
      <Box>
        <Text>Admin Panel</Text>
      </Box>
      <Spacer />
      <Box>
        {renderLinks && renderLinks()}
        <Button
          size="sm"
          colorScheme="red"
          onClick={() => {
            dispatch(logout());
            history.push("/");
          }}
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export { Header };
