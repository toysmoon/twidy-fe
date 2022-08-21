interface ISection {
  title: string;
  detail: string;
}

export default function SubTitle({ title, detail }: ISection) {
  return (
    <section className="flex flex-col justify-center items-center py-10">
      <div className="w-full">
        <h2 className="font-nunito font-black text-4xl text-center whitespace-pre-line text-white">{title}</h2>
        <p className="font-pretendard text-base leading-5 text-gray4 pt-3 px-12 text-center">{detail}</p>
      </div>
    </section>
  );
}
