import type { Metadata } from "next";
import { RigidSignIn } from "@/components/rigid-signin/RigidSignIn";

export const metadata: Metadata = {
  title: "Sign in – Rigid",
  description: "Sign in with your Rigid Account.",
};

export default function SignInPage() {
  return <RigidSignIn />;
}
