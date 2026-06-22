import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/userselect');

  return (
    <>
      <h1>This is Home Page</h1>
    </>
  );
}