import { ReactNode } from 'react';

interface ISection {
  title: string;
  detail: string;
  children: ReactNode;
}

export default function Section({ title, detail, children }: ISection) {
  return (
    <section>
      <div className="w-full">
        <h2 className="font-nunito font-black text-5xl my-5 text-center whitespace-pre-line text-white">
          {title}
        </h2>
        <p className="font-roboto text-base leading-5 text-gray4 px-12 text-center">
          {detail}
        </p>
      </div>
      {children}
    </section>
  );
}
