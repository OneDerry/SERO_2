import type { TextItem } from "@/data/texts";

interface TextsProps {
  item: TextItem;
}

export function Texts({ item }: TextsProps) {
  return (
    <p className="text-sm text-sero-dark whitespace-nowrap">
      <span>{item.icon}</span> {item.text}
    </p>
  );
}
