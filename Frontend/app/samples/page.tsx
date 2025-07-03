import { Download } from "lucide-react";

export default function SampleMaterialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Sample Study Material
      </h1>

      <div className="space-y-10">
        {/* NEET */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">NEET</h2>
          <div className="ml-6 space-y-4">
            <div>
              <h3 className="font-medium text-lg mb-1">Class 11</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <a
                    href="/sample-material/neet-class11-physics.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={18} /> Sample Physics Material
                  </a>
                </li>
                <li>
                  <a
                    href="/sample-material/neet-class11-chemistry.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={18} /> Sample Chemistry Material
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mt-4 mb-1">Class 12</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <a
                    href="/sample-material/neet-class12-full.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={18} /> Full Syllabus Notes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* JEE */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">JEE</h2>
          <div className="ml-6 space-y-4">
            <div>
              <h3 className="font-medium text-lg mb-1">Class 11</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <a
                    href="/sample-material/jee-class11-maths.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={18} /> Sample Maths Material
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mt-4 mb-1">Class 12</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  <a
                    href="/sample-material/jee-class12-physics.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={18} /> Sample Physics Material
                  </a>
                </li>
                <li>
                  <a
                    href="/sample-material/jee-class12-maths.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Download size={18} /> Sample Maths Material
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NDA */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">NDA</h2>
          <div className="ml-6">
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <a
                  href="/sample-material/nda-sample.pdf"
                  download
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Download size={18} /> Sample NDA Material
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MHT-CET */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">MHT-CET</h2>
          <div className="ml-6">
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <a
                  href="/sample-material/mhtcet-sample.pdf"
                  download
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Download size={18} /> Sample MHT-CET Material
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
