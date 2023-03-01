import { useRouter } from "next/router";
import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Center, Input, Text, Button } from "@chakra-ui/react";

const Subscribe = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/");
  };

  return (
    <div>
      <Center>
        <Text fontSize="30px" marginBottom="10px">
          ユーザー登録
        </Text>
      </Center>
      <Center>
        <form onSubmit={subscribe}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            marginBottom="20px"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password(6文字以上)"
            marginBottom="20px"
          />

          <Button type="submit" float="right" color="green">
            登録
          </Button>
        </form>
      </Center>
    </div>
  );
};

export default Subscribe;
