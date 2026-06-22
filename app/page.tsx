import Link from "next/link";
import Image from "next/image";

export default function HomePage(){
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Home Page (Test)</h1>
      <p>この画面が表示されれば、ルーティングやフォルダ構成は正常です！</p>
      <p>原因は MovieRow などのAPIフェッチ側のコードにあります。</p>
    </div>
  ); 
}
// import { redirect } from 'next/navigation'

// export default function Page() {


//   return (
//     <>
//       <h1>This is Home Page</h1>
//     </>
//   );
// }