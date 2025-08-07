"use client";

import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SubtaskList } from "@/components/subtask-list";

export function TaskDetailModal({ task }: { task: any }) {
  const user = auth.currentUser;

  const handleNotesChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (user) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, task.id);
      await updateDoc(taskRef, { notes: e.target.value });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="font-semibold mb-2">Notes</h4>
            <Textarea
              defaultValue={task.notes}
              onChange={handleNotesChange}
              placeholder="Add your notes here..."
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sub-tasks</h4>
            <SubtaskList task={task} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
