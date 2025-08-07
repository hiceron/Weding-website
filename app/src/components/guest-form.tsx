"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function GuestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const user = auth.currentUser;
    if (user) {
      await addDoc(collection(db, `users/${user.uid}/guests`), {
        name,
        email,
        status: "Pending",
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Guest's Name"
        className="flex-grow"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Guest's Email"
        type="email"
        className="flex-grow"
      />
      <Button type="submit">Add Guest</Button>
    </form>
  );
}