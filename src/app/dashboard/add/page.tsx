"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = "/pdf/pdf.worker.min.js";

const JobDescriptionCard = () => {
  const [firstCardOption, setFirstCardOption] = useState("upload");
  const [secondCardOption, setSecondCardOption] = useState("upload");
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

            console.log("Extracted Text:", textContent);
            setResumeText(textContent);
          } catch (err) {
            console.error("Error parsing PDF:", err);
          }
        } else {
          console.error("File reading result is null.");
        }
      };

      fileReader.readAsArrayBuffer(resumeFile);
    } else {
      alert("Please upload a resume first!");
    }
  };

  interface ResumeSections {
    [key: string]: string[];
  }

  const formatResumeText = (text: string): ResumeSections => {
    const sections: ResumeSections = {
      Languages: [],
      Experience: [],
      Education: [],
      "Technical Skills": [],
      Certificates: [],
      "Soft Skills": [],
    };

    const lines = text.split("\n");
    let currentSection: string | null = null;

    const sectionHeaders = [
      "Languages",
      "Experience",
      "Education",
      "Technical Skills",
      "Certificates",
      "Soft Skills",
    ];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      console.log("Processing line:", trimmedLine);

      const isSectionHeader = sectionHeaders.some((header) =>
        trimmedLine.startsWith(header)
      );

      if (isSectionHeader) {
        currentSection =
          sectionHeaders.find((header) => trimmedLine.startsWith(header)) ||
          null;
      } else if (currentSection) {
        if (trimmedLine) {
          sections[currentSection].push(trimmedLine);
        }
      }
    });

    console.log("Formatted Resume Sections:", sections);
    return sections;
  };

  const formattedResume = formatResumeText(resumeText);

  return (
    <div className="w-full p-4">
      <p className="text-3xl font-bold mt-4">
        What Role are you evaluating for?
      </p>
      <Card className="w-full p-4 mt-4">
        <div className="flex justify-around mb-4">
          <Button
            onClick={() => setFirstCardOption("upload")}
            variant={firstCardOption === "upload" ? "default" : "outline"}
          >
            Upload Job Description
          </Button>
          <Button
            onClick={() => setFirstCardOption("paste")}
            variant={firstCardOption === "paste" ? "default" : "outline"}
          >
            Paste Description
          </Button>
        </div>
        {firstCardOption === "upload" && (
          <div className="mt-4">
            <p>Upload a job description in PDF or DOCX format.</p>
            <div className="mt-2">
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef1}
              />
              <Button
                className="w-32"
                variant="outline"
                onClick={() => triggerFileInput(fileInputRef1)}
              >
                {fileName || "Choose File"}
              </Button>
            </div>
          </div>
        )}
        {firstCardOption === "paste" && (
          <div className="mt-4">
            <p>Paste your job description below.</p>
            <Textarea className="w-full mt-2" rows={4} />
            <Button className="mt-2" variant="outline">
              Save
            </Button>
          </div>
        )}
      </Card>

      <p className="text-3xl font-bold mt-8">Who are you?</p>
      <Card className="w-full p-4 mt-4">
        <div className="flex justify-around mb-4">
          <Button
            onClick={() => setSecondCardOption("upload")}
            variant={secondCardOption === "upload" ? "default" : "outline"}
          >
            Upload Resume
          </Button>
          <Button
            onClick={() => setSecondCardOption("paste")}
            variant={secondCardOption === "paste" ? "default" : "outline"}
          >
            Paste Resume
          </Button>
        </div>
        {secondCardOption === "upload" && (
          <div className="mt-4">
            <p>Upload up to 10 resumes in PDF or DOCX format.</p>
            <div className="mt-2">
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileChange}
                ref={fileInputRef2}
              />
              <Button
                className="w-32"
                variant="outline"
                onClick={() => triggerFileInput(fileInputRef2)}
              >
                {fileName || "Add files"}
              </Button>
            </div>
          </div>
        )}
        {secondCardOption === "paste" && (
          <div className="mt-4">
            <p>Paste resume below.</p>
            <Textarea className="w-full mt-2" rows={4} />
            <Button className="mt-2" variant="outline">
              Save
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-8">
        <Button
          className="flex items-center text-white px-10 py-6 text-2xl"
          style={{
            backgroundColor: "#5151cd",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#6a6ae0")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#5151cd")
          }
          onClick={handleParseResume}
        >
          Let's Lie
          <img src="/magic.png" alt="Magic Icon" className="ml-3 w-6 h-6" />
        </Button>
      </div>

      {resumeText && (
        <div className="mt-4">
          <h3 className="text-2xl font-bold">Extracted Resume Information</h3>
          <div className="mt-2">
            {Object.entries(formattedResume).map(([section, items]) => (
              <div key={section} className="mb-4">
                <h4 className="text-xl font-semibold">{section}:</h4>
                <ul className="list-disc pl-5">
                  {items.map(
                    (item, index) => item && <li key={index}>{item}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDescriptionCard;
