type ContentsProps = {
  children: React.ReactNode
}

export default function Contents({ children }: ContentsProps){
  return(
    <main>
      {children}
    </main>
  );
}