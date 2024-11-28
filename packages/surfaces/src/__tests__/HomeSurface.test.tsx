import { cleanup, render, screen } from "@testing-library/react-native";

import { HomeSurface } from "../home/HomeSurface";

afterEach(cleanup);

it("says Expo monorepo", () => {
  render(<HomeSurface />);
  expect(screen.getByText("Expo monorepo")).toBeDefined();
});
