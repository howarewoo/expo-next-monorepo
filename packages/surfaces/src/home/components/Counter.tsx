"use client";

import { Paragraph } from "@repo/ui";
import { useState } from "react";
import { Button, View } from "react-native";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="-" onPress={() => setCount(count - 1)} />
      <Paragraph>Count: {count}</Paragraph>
      <Button title="+" onPress={() => setCount(count + 1)} />
    </View>
  );
}
