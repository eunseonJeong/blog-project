import os from "os"; //노드 APIs

export default function Home() {
  console.log("서버에서 실행 되려나?~~");
  console.log(os.hostname());
  return <div>안녕하세요. 홈입니다.</div>;
}
