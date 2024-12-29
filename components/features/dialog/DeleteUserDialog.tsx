import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  onDelete: () => void;
  username?: string;
};

export const DeleteUserDialog = ({ onDelete, username }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" size="icon" aria-label={`${username}を削除`}>
          <Trash2 className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ユーザーの削除</DialogTitle>
          <DialogDescription>選択したユーザーを削除します</DialogDescription>
        </DialogHeader>
        <div>
          <p className="text-base">
            {username && `${username}を削除します。`}
            <br />
            削除したユーザーは元に戻せません。削除してよろしいですか？
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DialogClose>
          <Button onClick={onDelete}>削除</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
