"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const JobDescriptionCard = () => {
  const [firstCardOption, setFirstCardOption] = useState("upload");
  const [secondCardOption, setSecondCardOption] = useState("upload");
  const [fileName, setFileName] = useState("");
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleFileChange = (e, card) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const triggerFileInput = (ref) => {
    ref.current.click();
  };

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
                onChange={(e) => handleFileChange(e, "first")}
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
                onChange={(e) => handleFileChange(e, "second")}
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
        >
          Let's Lie
          <img src="/magic.png" alt="Magic Icon" className="ml-3 w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default JobDescriptionCard;
