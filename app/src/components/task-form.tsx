"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const user = auth.currentUser;
    if (user) {
      await addDoc(collection(db, `users/${user.uid}/tasks`), {
        title,
        priority,
        completed: false,
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow"
      />
      <Select value={priority} onValueChange={setPriority}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit">Add Task</Button>
    </form>
  );
}
