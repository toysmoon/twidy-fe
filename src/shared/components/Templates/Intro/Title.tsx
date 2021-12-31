interface ISection {
  title: string;
  detail: string;
}

export default function Title({ title, detail }: ISection) {
  return (
    <section className="flex flex-col justify-center items-center mt-16 pt-5">
      <div className="w-full">
        <h2 className="font-nunito font-black text-5xl my-5 text-center whitespace-pre-line text-white">
          {title}
        </h2>
        <p className="font-roboto text-base leading-5 text-gray4 px-12 text-center">
          {detail}
        </p>
      </div>
    </section>
  );
}
