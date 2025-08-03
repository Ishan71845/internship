'use client';

import { useState } from 'react';
import { MaterialDownloadForm } from '@/components/material/MaterialDownloadForm';

export default function SampleMaterialPage() {
  const pdfs = [
    { file: "9Bioch1.pdf", title: "9th Biology Ch 1 - Fundamental Unit of Life" },
    { file: "9Chemch1.pdf", title: "9th Chemistry Ch 1 - Matter in Our Surrounding" },
    { file: "9Phych1.pdf", title: "9th Physics Ch 1 - Motion" },
    { file: "10Bioch1.pdf", title: "10th Biology Ch 1 - Life Processes" },
    { file: "10Chemch1.pdf", title: "10th Chemistry Ch 1 - Chemical Reactions & Equations" },
    { file: "10Phych4.pdf", title: "10th Physics Ch 4 - Light Reflection & Refraction" },
  ];

  const [selectedPDF, setSelectedPDF] = useState<{ title: string; file: string } | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Sample Study Material</h1>
      <ul className="space-y-4">
        {pdfs.map((pdf) => (
          <li key={pdf.file}>
            <button
              onClick={() => setSelectedPDF(pdf)}
              className="text-blue-600 hover:underline"
            >
              {pdf.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedPDF && (
        <MaterialDownloadForm
          material={selectedPDF}
          onClose={() => setSelectedPDF(null)}
        />
      )}
    </div>
  );
}
