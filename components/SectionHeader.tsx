import { Badge } from "@/components/ui/badge";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto mb-14 max-w-3xl text-center"
          : "mb-10 max-w-xl text-start"
      }
    >
      <Badge variant="secondary" className="mb-4">
        {eyebrow}
      </Badge>
      <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
