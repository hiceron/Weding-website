"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export function ProgressCard() {
  const [progress, setProgress] = useState(0);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/tasks`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const totalTasks = querySnapshot.size;
        const completedTasks = querySnapshot.docs.filter(doc => doc.data().completed).length;
        const calculatedProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        setProgress(calculatedProgress);
      });
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>To-Do List Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-muted-foreground mt-2">{progress}% Complete</p>
      </CardContent>
    </Card>
  );
}