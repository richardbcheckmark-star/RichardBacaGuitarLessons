import type { FaqItem } from "@/types/content";

type FaqListProps = {
  items: FaqItem[];
};

export const FaqList = ({ items }: FaqListProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <details key={item.question} className="reveal rounded-2xl border border-brand-sand bg-white p-5 shadow-soft">
          <summary className="cursor-pointer list-none pr-4 font-semibold text-brand-ink">{item.question}</summary>
          <p className="mt-3 text-sm leading-relaxed text-brand-ink/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
};
