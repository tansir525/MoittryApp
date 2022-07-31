import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import Colors from "../color";
import products from "../data/Products";
import Rating from "./Rating";

function HomeProducts() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        // flexWrap="wrap"
        // diraction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            key={product._id}
            w="100%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h="150px"
              resizeMode="contain"
            />
            <Box px={6} pt={0}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={15} mt={0} isTruncated w="full">
                {product.name}
              </Text>
              {/* rating */}
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
