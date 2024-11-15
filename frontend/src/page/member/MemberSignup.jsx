import { Box, Input, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "../../components/ui/field.jsx";
import { Button } from "../../components/ui/button.jsx";
import { useState } from "react";
import axios from "axios";
import { toaster } from "../../components/ui/toaster.jsx";
import { useNavigate } from "react-router-dom";

export function MemberSignup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  function handleSaveClick() {
    axios
      .post("/api/member/signup", { id, password, description })
      .then((res) => {
        console.log("잘됨, 페이지 이동, 토스트 출력");

        const message = res.data.message;
        toaster.create({
          type: message.type,
          description: message.text,
        });

        // TODO: login 으로 이동
        navigate("/");
      })
      .catch((e) => {
        console.log("안됐을 대 해야하는 일, 토스트 출력");

        const message = e.response.data.message;
        toaster.create({
          type: message.type,
          description: message.text,
        });
      })
      .finally(() => {
        console.log("성공이든 실패든 무조건 실행");
      });
  }

  return (
    <Box>
      <h3>회원 가입</h3>
      <Stack gap={5}>
        <Field label={"아이디"}>
          <Input value={id} onChange={(e) => setId(e.target.value)} />
        </Field>
        <Field label={"암호"}>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Field label={"자기소개"}>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Field>

        <Box>
          <Button onClick={handleSaveClick}>가입</Button>
        </Box>
      </Stack>
    </Box>
  );
}
