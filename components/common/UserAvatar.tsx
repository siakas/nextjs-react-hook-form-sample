import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Props = {
  src: string | undefined;
  username: string;
  size?: "sm" | "md" | "lg";
  isUpperCase?: boolean;
};

export const UserAvatar = ({
  src,
  username,
  size = "md",
  isUpperCase = false,
}: Props) => {
  return (
    <Avatar className={cn(size === "lg" && "size-20")}>
      <AvatarImage src={src} alt={username} />
      <AvatarFallback>
        {isUpperCase ? username[0].toUpperCase() : username[0]}
      </AvatarFallback>
    </Avatar>
  );
};
