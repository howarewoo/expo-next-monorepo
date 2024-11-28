"use client";

import { Paragraph } from "@repo/ui";
import { Button, View } from "react-native";

import { useHomeContext } from "../context";

export function Counter() {
  const { count, incrementCount, decrementCount } = useHomeContext();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="-" onPress={decrementCount} />
      <Paragraph>Count: {count}</Paragraph>
      <Button title="+" onPress={incrementCount} />
    </View>
  );
}
