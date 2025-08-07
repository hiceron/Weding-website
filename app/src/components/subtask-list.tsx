"use client";

import { useState } from "react";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

export function SubtaskList({ task }: { task: any }) {
  const [newSubtask, setNewSubtask] = useState("");
  const user = auth.currentUser;

  const handleAddSubtask = async () => {
    if (user && newSubtask.trim()) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, task.id);
      await updateDoc(taskRef, {
        subtasks: arrayUnion({ text: newSubtask, completed: false }),
      });
      setNewSubtask("");
    }
  };

  const handleToggleSubtask = async (subtask: any) => {
    if (user) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, task.id);
      await updateDoc(taskRef, {
        subtasks: task.subtasks.map((s: any) =>
          s.text === subtask.text ? { ...s, completed: !s.completed } : s
        ),
      });
    }
  };

  const handleDeleteSubtask = async (subtask: any) => {
    if (user) {
      const taskRef = doc(db, `users/${user.uid}/tasks`, task.id);
      await updateDoc(taskRef, {
        subtasks: arrayRemove(subtask),
      });
    }
  };

  return (
    <div className="space-y-2">
      {task.subtasks?.map((subtask: any, index: number) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={subtask.completed}
              onCheckedChange={() => handleToggleSubtask(subtask)}
            />
            <span className={`${subtask.completed ? "line-through text-muted-foreground" : ""}`}>
              {subtask.text}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => handleDeleteSubtask(subtask)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-4">
        <Input
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
          placeholder="Add a sub-task..."
        />
        <Button onClick={handleAddSubtask}>Add</Button>
      </div>
    </div>
  );
}
