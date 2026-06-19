import PreviewRow from "./PreviewRow";

export default function Preview(){
  return (
    <div className="flex flex-col gap-y-6 pt-10">
      <div className="pl-4">
        <h2 className="text-[26px] tracking-[-0.01em] font-bold">Previews</h2>
      </div>
      <div className="flex items-center gap-x-2 pl-3 overflow-x-auto hidden-scrollbar">
        <PreviewRow category="top_rated" />
      </div>
    </div>
  );
}