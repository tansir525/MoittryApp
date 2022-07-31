import {
  Box,
  Button,
  Heading,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { Image } from "react-native";

import React from "react";
import Colors from "../color";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

function LoginScreen() {
  return (
    <Box
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
      flex={1}
      bg={Colors.red}
    >
      <Image
        flex={1}
        resizeMode="cover"
        size="lg"
        alt="logo"
        w="full"
        source={require("../../assets/image/backgroundn.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="20"
        px="6"
        justifyContent="center"
      >
        <Heading>Login</Heading>
        <VStack space={5} pt="6">
          {/* email login */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@moittry.com"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          {/* login Password */}
          <Input
            InputLeftElement={
              <AntDesign name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="********"
            w="70%"
            type="password"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{ bg: Colors.red }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
        >
          LOGIN
        </Button>
        <Pressable mt={0}>
          <Text color={Colors.deepstGray}>SIGN UP NOW !</Text>
        </Pressable>
      </Box>
    </Box>
    // </Box>
  );
}

export default LoginScreen;
