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
};

export const BulkDeleteUsersDialog = ({ onDelete }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Trash2 className="size-4" />
          選択したユーザーの一括削除
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>選択したユーザーの一括削除</DialogTitle>
          <DialogDescription>
            選択したユーザーをまとめて削除します
          </DialogDescription>
        </DialogHeader>
        <div>
          <p className="text-base">
            選択したユーザーを一括で削除します。
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
