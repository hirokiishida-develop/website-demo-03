type InnerProps = {
  children: React.ReactNode;
}

export default function Inner({ children }: InnerProps){
  return (
    <div className="px-4 lg:px-8">
      {children}
    </div>
  );
}