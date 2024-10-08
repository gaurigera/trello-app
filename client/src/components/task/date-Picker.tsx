"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@nextui-org/react";

interface DatePickerProps {
  date: Date;
}

export default function DatePicker(props?: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-[200px] justify-between bg-white",
            !props?.date && "text-muted-foreground"
          )}
        >
          {props?.date ? format(props?.date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props?.date}
          // onSelect={setDate}
          // initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
