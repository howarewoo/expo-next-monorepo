"use client";

import { Paragraph, Strong } from "@repo/ui";
import { ComponentProps } from "react";
import { View } from "react-native";

import { Counter } from "./components/Counter";

type HomeSurfaceProps = ComponentProps<typeof View>;

export const HomeSurface = (props: HomeSurfaceProps) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      height: "100%",
    }}
    {...props}
  >
    <Paragraph style={[{ fontSize: 28 }]}>👋</Paragraph>
    <Paragraph {...props}>
      Hello from an <Strong>Expo monorepo</Strong>!
    </Paragraph>
    <Counter />
  </View>
);
