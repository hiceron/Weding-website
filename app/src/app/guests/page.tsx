"use client";

import { GuestForm } from "@/components/guest-form";
import { GuestList } from "@/components/guest-list";

export default function GuestsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Guest List</h1>
      <div className="space-y-8">
        <GuestForm />
        <GuestList />
      </div>
    </div>
  );
}
