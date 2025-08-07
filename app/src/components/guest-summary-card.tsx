"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export function GuestSummaryCard() {
  const [guestCount, setGuestCount] = useState(0);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/guests`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setGuestCount(querySnapshot.size);
      });
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Guest List</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{guestCount}</p>
        <p className="text-sm text-muted-foreground">Guests Invited</p>
      </CardContent>
    </Card>
  );
}