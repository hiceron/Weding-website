"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { TaskItem } from "@/components/task-item";

export function TaskList() {
  const [tasks, setTasks] = useState<any[]>([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/tasks`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData: any[] = [];
        querySnapshot.forEach((doc) => {
          tasksData.push({ id: doc.id, ...doc.data() });
        });
        setTasks(tasksData);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const highPriorityTasks = tasks.filter((task) => task.priority === "high");
  const mediumPriorityTasks = tasks.filter((task) => task.priority === "medium");
  const lowPriorityTasks = tasks.filter((task) => task.priority === "low");

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">High Priority</h3>
        <div className="space-y-2">
          {highPriorityTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Medium Priority</h3>
        <div className="space-y-2">
          {mediumPriorityTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Low Priority</h3>
        <div className="space-y-2">
          {lowPriorityTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
