"use client";

import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { TaskDetailModal } from "./task-detail-modal";

export function TaskItem({ task }: { task: any }) {
  const user = auth.currentUser;

  const handleToggle = async () => {
    if (user) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, task.id);
      await updateDoc(taskRef, { completed: !task.completed });
    }
  };

  const handleDelete = async () => {
    if (user) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, task.id);
      await deleteDoc(taskRef);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-lg">
      <div className="flex items-center gap-4">
        <Checkbox checked={task.completed} onCheckedChange={handleToggle} />
        <span className={`${task.completed ? "line-through text-muted-foreground" : ""}`}>
          {task.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <TaskDetailModal task={task} />
        <Button variant="ghost" size="icon" onClick={handleDelete}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}