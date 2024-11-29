"use client";

import { Paragraph, Strong } from "@repo/ui";
import { View, ViewProps } from "react-native";

import { Counter } from "./components/Counter";
import { HomeProvider } from "./context";

type HomeSurfaceProps = ViewProps;

export const HomeSurface = (props: HomeSurfaceProps) => (
  <HomeProvider>
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
  </HomeProvider>
);
