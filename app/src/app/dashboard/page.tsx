"use client";

import { CountdownTimer } from "@/components/countdown-timer";
import { ProgressCard } from "@/components/progress-card";
import { GuestSummaryCard } from "@/components/guest-summary-card";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CountdownTimer />
        <ProgressCard />
        <GuestSummaryCard />
      </div>
    </div>
  );
}
