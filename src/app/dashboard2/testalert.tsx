import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import msgimg from "../../../public/images/Vectormsg.png";
import { useState } from "react";
import { useComments } from "./database";
import TextareaDemo from "./textarea";
import { useUser } from "../auth/authorizaiton";

export function AlertDialogDemo() {
  const [comment, setComment] = useState<string>("");
  const comments = useComments();
  const { current: loggedInUser } = useUser();
  const handleContinue = async () => {
    // Check if the comment is not empty
    if (comment.trim() !== "") {
      try {
        // Add the comment using the add function from useComments hook
        await comments.add({
          user_id: loggedInUser?.id, // Replace with the actual user ID
          content: comment,
          timestamp: Date.now(),
        });
        setComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
        // Handle error
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="alert-img">
          <Image src={msgimg} alt="" />
        </div>
      </AlertDialogTrigger>
      <div className="filler">
        <div className="alert-test bg-darkmode outline-none border-none">
          <AlertDialogContent className="bg-verydark">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Got Something to share? Type Here
              </AlertDialogTitle>
              <TextareaDemo
                value={comment}
                onChange={(e: any) => setComment(e.target.value)}
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleContinue}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </div>
      </div>
    </AlertDialog>
  );
}
