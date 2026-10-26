import Image from "next/image";

type AvatarProps = {
  size?: "xs" | "sm" | "lg";
  priority?: boolean;
  className?: string;
};

const DIMENSIONS: Record<NonNullable<AvatarProps["size"]>, number> = {
  xs: 40,
  sm: 72,
  lg: 256,
};

const SIZE_CLASSES: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "h-10 w-10 rounded-full",
  sm: "h-[72px] w-[72px] rounded-2xl",
  lg: "h-36 w-36 rounded-2xl lg:h-auto lg:w-full lg:max-w-xs",
};

export const Avatar = ({ size = "lg", priority = false, className = "" }: AvatarProps) => {
  const dimension = DIMENSIONS[size];

  return (
    <Image
      src="/profile.jpeg"
      alt="Victor Elexpe"
      width={dimension}
      height={dimension}
      priority={priority}
      className={`aspect-square shrink-0 object-cover ${SIZE_CLASSES[size]} ${className}`}
    />
  );
};
