import { Paragraph } from "@repo/ui";
import { ComponentProps } from "react";

type HomeIconProps = ComponentProps<typeof Paragraph>;

export const HomeIcon = ({ style, ...props }: HomeIconProps) => (
  <Paragraph style={[{ fontSize: 28 }, style]} {...props}>
    👋
  </Paragraph>
);
