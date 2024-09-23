"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { UploadIcon, ZapIcon } from "lucide-react";

GlobalWorkerOptions.workerSrc = "/pdf/pdf.worker.min.js";

export default function Component() {
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const fileInputRef1 = useRef<HTMLInputElement | null>(null);
  const fileInputRef2 = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setResumeFile(file);
    }
  };

  const triggerFileInput = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const handleParseResume = async () => {
    if (resumeFile) {
      const fileReader = new FileReader();

      fileReader.onload = async function () {
        const result = fileReader.result;
        if (result) {
          const typedArray = new Uint8Array(result as ArrayBuffer);

          try {
            const pdf = await getDocument(typedArray).promise;
            let textContent = "";

            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const text = await page.getTextContent();
              text.items.forEach((item: any) => {
                textContent += item.str + " ";
              });
            }

            setResumeText(textContent);
          } catch (err) {
            console.error("Error parsing PDF:", err);
          }
        }
      };

      fileReader.readAsArrayBuffer(resumeFile);
    } else {
      alert("Please upload a resume first!");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-semibold mb-6">
          What role are you evaluating candidates for?
        </h1>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList>
              <TabsTrigger value="upload">Upload job description</TabsTrigger>
              <TabsTrigger value="paste">Paste description</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <p className="text-sm text-gray-600 mb-2">
                Upload a job description in PDF or DOCX format.
              </p>
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef1}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => triggerFileInput(fileInputRef1)}
              >
                <UploadIcon className="mr-2 h-4 w-4" />
                {fileName || "Select file"}
              </Button>
            </TabsContent>
            <TabsContent value="paste">
              <textarea
                className="w-full h-32 p-2 border rounded-md"
                placeholder="Paste your job description here..."
              ></textarea>
            </TabsContent>
          </Tabs>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Who are you evaluating?</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList>
              <TabsTrigger value="upload">Upload resume</TabsTrigger>
              <TabsTrigger value="paste">Paste resume</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <p className="text-sm text-gray-600 mb-2">
                Upload up to 10 resumes in PDF or DOCX format.
              </p>
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef2}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => triggerFileInput(fileInputRef2)}
              >
                <UploadIcon className="mr-2 h-4 w-4" />
                {fileName || "Add files"}
              </Button>
            </TabsContent>
            <TabsContent value="paste">
              <textarea
                className="w-full h-32 p-2 border rounded-md"
                placeholder="Paste the resume content here..."
              ></textarea>
            </TabsContent>
          </Tabs>
        </div>

        <Button className="w-full" onClick={handleParseResume}>
          <ZapIcon className="mr-2 h-4 w-4" />
          Evaluate candidate
        </Button>

        {resumeText && (
          <div className="mt-4">
            <h3 className="text-2xl font-bold">Extracted Resume Information</h3>
            <div className="mt-2">
              <p className="text-sm">{resumeText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
