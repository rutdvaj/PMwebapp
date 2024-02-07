"use client";

import { Calendar } from "@/components/ui/calendar";
import React from "react";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className=" text-white font--poppins rounded-lg "
    />
  );
}
