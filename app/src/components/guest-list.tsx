"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Trash2 } from "lucide-react";

export function GuestList() {
  const [guests, setGuests] = useState<any[]>([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, `users/${user.uid}/guests`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const guestsData: any[] = [];
        querySnapshot.forEach((doc) => {
          guestsData.push({ id: doc.id, ...doc.data() });
        });
        setGuests(guestsData);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleDelete = async (guestId: string) => {
    if (user) {
      await deleteDoc(doc(db, `users/${user.uid}/guests`, guestId));
    }
  };

  const handleSendInvite = (email: string, name: string) => {
    const subject = encodeURIComponent("You're Invited! | Our Wedding");
    const body = encodeURIComponent(`Dear ${name},

You are cordially invited to our wedding! More details to follow.

Best regards,
[Your Names]`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest.id}>
              <TableCell className="font-medium">{guest.name}</TableCell>
              <TableCell>{guest.email}</TableCell>
              <TableCell>{guest.status}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSendInvite(guest.email, guest.name)}
                  className="mr-2"
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(guest.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}