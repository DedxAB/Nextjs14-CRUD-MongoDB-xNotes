"use client";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RemoveComment = ({ comment, note }) => {
  const [conformationMessage, setConformationMessage] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  //   console.log(comment);
  //   console.log(note);

  const deleteComment = async () => {
    if (conformationMessage) {
      try {
        toast.success("Comment Deleted Successfully.");
        router.refresh();
      } catch (e) {
        toast.error("Failed to Delete Comment.");
        console.log(e.message);
      }
      setConformationMessage(false);
    }
  };

  if (
    session?.user?.id === comment?.author?._id ||
    session?.user?.id === note?.author?._id
  ) {
    return (
      <>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              onClick={() => setConformationMessage(true)}
              variant="outline"
              size="icon"
            >
              <Trash2 className="w-4 text-red-500" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription className={`font-bold`}>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                className={`font-bold`}
                onClick={() => setConformationMessage(false)}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className={`font-bold`}
                onClick={deleteComment}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  } else {
    return null;
  }
};

export default RemoveComment;
