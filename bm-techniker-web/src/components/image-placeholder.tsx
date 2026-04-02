import { cn } from "@/lib/utils";

type AspectRatio = "21/9" | "16/9" | "4/3" | "1/1";

const aspectClass: Record<AspectRatio, string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

type ImagePlaceholderProps = {
  label: string;
  aspectRatio?: AspectRatio;
  className?: string;
  /** Shown in aria-label for assistive tech */
  description?: string;
};

/**
 * Replace with `next/image` when assets are in `public/images/`.
 * Label documents intended subject and suggested pixel dimensions.
 */
export function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className,
  description,
}: ImagePlaceholderProps) {
  const aria = description ?? `Photography placeholder: ${label}`;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-sm border border-card-border bg-card",
        aspectClass[aspectRatio],
        className,
      )}
      role="img"
      aria-label={aria}
    >
      <div
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_11px,rgba(255,255,255,0.04)_1px)] opacity-50"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <p className="max-w-md text-center text-xs font-medium uppercase tracking-wide text-foreground/50">
          {label}
        </p>
      </div>
    </div>
  );
}
