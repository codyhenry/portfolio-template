import { PropsWithChildren } from "react";
import Container from "@mui/material/Container";

export default function ContentContainer({ children }: PropsWithChildren) {
  return <Container maxWidth="lg">{children}</Container>;
}
