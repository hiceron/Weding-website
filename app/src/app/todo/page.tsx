"use client";

import { TaskForm } from "@/components/task-form";
import { TaskList } from "@/components/task-list";

export default function TodoPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-8">To-Do List</h1>
      <div className="space-y-8">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}
