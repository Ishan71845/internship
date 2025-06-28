"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  selectedProgram: string;
  contacted: boolean;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([
    { id: 1, name: "Aryan Sharma", email: "aryan@gmail.com", phone: "9876543210", selectedProgram: "JEE", contacted: false },
    { id: 2, name: "Priya Verma", email: "priya@yahoo.com", phone: "9123456780", selectedProgram: "NEET", contacted: true },
    { id: 3, name: "Rahul Singh", email: "rahul@gmail.com", phone: "9988776655", selectedProgram: "Foundation", contacted: false },
  ]);

  const [filter, setFilter] = useState<string>("All");

  const filteredLeads = filter === "All" ? leads : leads.filter(lead => lead.selectedProgram === filter);

  const toggleContacted = (id: number) => {
    setLeads(prev =>
      prev.map(lead => 
        lead.id === id ? { ...lead, contacted: !lead.contacted } : lead
      )
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Leads</h1>
        <Select value={filter} onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Programs</SelectItem>
            <SelectItem value="JEE">JEE</SelectItem>
            <SelectItem value="NEET">NEET</SelectItem>
            <SelectItem value="NDA">NDA</SelectItem>
            <SelectItem value="CET">CET</SelectItem>
            <SelectItem value="Foundation">Foundation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Program</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map(lead => (
              <tr key={lead.id}>
                <td className="p-2 border">{lead.name}</td>
                <td className="p-2 border">{lead.email}</td>
                <td className="p-2 border">{lead.phone}</td>
                <td className="p-2 border">{lead.selectedProgram}</td>
                <td className="p-2 border">
                  {lead.contacted ? (
                    <span className="text-green-600 font-semibold">Contacted</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Not Contacted</span>
                  )}
                </td>
                <td className="p-2 border">
                  <Button size="sm" onClick={() => toggleContacted(lead.id)}>
                    Mark {lead.contacted ? "Not Contacted" : "Contacted"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
