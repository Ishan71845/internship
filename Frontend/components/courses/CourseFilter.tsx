"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Props = {
  onFilterChange: (filters: {
    targetExam: string;
    programType: string;
    board: string;
    classLevel: string;
  }) => void;
};

export function CourseFilter({ onFilterChange }: Props) {
  const [filters, setFilters] = useState({
    targetExam: "",
    programType: "",
    board: "",
    classLevel: "",
  });

  function updateFilter(key: string, value: string) {
    const newFilters = { ...filters, [key]: value };

    if (key === "targetExam") {
      if (value === "Foundation") {
        newFilters.programType = "";
      } else {
        newFilters.board = "";
        newFilters.classLevel = "";
      }
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  }

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select onValueChange={(val) => updateFilter("targetExam", val)}>
        <SelectTrigger className="w-48">
          {filters.targetExam || "Target Exam"}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="JEE">JEE</SelectItem>
          <SelectItem value="NEET">NEET</SelectItem>
          <SelectItem value="NDA">NDA</SelectItem>
          <SelectItem value="CET">CET</SelectItem>
          <SelectItem value="Foundation">Foundation</SelectItem>
        </SelectContent>
      </Select>

      {filters.targetExam && filters.targetExam !== "Foundation" && (
        <Select onValueChange={(val) => updateFilter("programType", val)}>
          <SelectTrigger className="w-48">
            {filters.programType || "Program Type"}
          </SelectTrigger>
          <SelectContent>
            {filters.targetExam === "JEE" && (
              <>
                <SelectItem value="One Year">One Year</SelectItem>
                <SelectItem value="Two Year">Two Year</SelectItem>
                <SelectItem value="Dropper">Dropper</SelectItem>
              </>
            )}
            {filters.targetExam === "NEET" && (
              <>
                <SelectItem value="One Year">One Year</SelectItem>
                <SelectItem value="Two Year">Two Year</SelectItem>
                <SelectItem value="Dropper">Dropper</SelectItem>
              </>
            )}
            {filters.targetExam === "CET" && (
              <>
                <SelectItem value="One Year">One Year</SelectItem>
                <SelectItem value="Two Year">Two Year</SelectItem>
                <SelectItem value="Dropper">Dropper</SelectItem>
              </>
            )}
            {filters.targetExam === "NDA" && (
              <>
                <SelectItem value="One Year">One Year</SelectItem>
                <SelectItem value="Two Year">Two Year</SelectItem>
                <SelectItem value="Dropper">Dropper</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
      )}

      {filters.targetExam === "Foundation" && (
        <>
          <Select onValueChange={(val) => updateFilter("board", val)}>
            <SelectTrigger className="w-48">
              {filters.board || "Target Board"}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CBSE">CBSE</SelectItem>
              <SelectItem value="ICSE">ICSE</SelectItem>
              <SelectItem value="MH Board">MH Board</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={(val) => updateFilter("classLevel", val)}>
            <SelectTrigger className="w-48">
              {filters.classLevel || "Select Class"}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="11">11</SelectItem>
              <SelectItem value="12">12</SelectItem>
            </SelectContent>
          </Select>
        </>
      )}
    </div>
  );
}
