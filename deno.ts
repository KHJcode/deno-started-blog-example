import { serve } from "https://deno.land/std@0.68.0/http/server.ts";

const server = serve({ port: 8000 }); // 원하는 Port 번호로 지정

for await (const req of server) {
  console.log('서버 실행 완료');
  req.respond({ body: 'Hello Deno!' });
}