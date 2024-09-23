"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CandidateList({ onSelect }: { onSelect: () => void }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">Candidates</h1>
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex items-center justify-between border-b">
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={onSelect}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-lg">75</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Mohamed Guezmir</h2>
                <p className="text-gray-500">Front-End Developer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                added a few seconds ago
              </span>
              <Button variant="ghost" size="icon">
                <MoreVerticalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CandidateDetails() {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 p-8 overflow-auto">
        <div className="">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Mohamed Guezmir</h1>
              <p className="text-xl text-gray-600">Front-End Developer</p>
            </div>
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-600">75</span>
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Assessment</h2>
              <p className="text-gray-600">
                Mohamed has relevant experience in front-end development,
                particularly with Angular and related technologies. He has
                worked on multiple projects and has solid experience in
                developing responsive and interactive web applications and has
                worked in Agile/Scrum environments.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                <p className="text-gray-600">
                  Mohamed Amine Guezmir is a dedicated full-stack developer with
                  a strong focus on front-end technologies, particularly
                  Angular. He has experience in developing responsive and
                  interactive web applications and has worked in Agile
                  environments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Interview questions
                </h2>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    Can you elaborate on your experience with Angular in your
                    previous roles?
                  </li>
                  <li>
                    Do you have any experience with TypeScript and how have you
                    used it?
                  </li>
                  <li>
                    Can you provide some details about your role in Agile/Scrum
                    teams?
                  </li>
                  <li>
                    What strategies do you use to stay updated with the latest
                    front-end development trends?
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6 text-center">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-2">1</h3>
                <p className="text-gray-600">years of experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-2">2</h3>
                <p className="text-gray-600">jobs held</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-2">1</h3>
                <p className="text-gray-600">years per job</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Strengths</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    Experience with Angular and other front-end technologies
                  </li>
                  <li>Worked in Agile/Scrum environments</li>
                  <li>
                    Strong problem-solving skills and ability to create
                    user-friendly interfaces
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Weaknesses</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    Less than 3 years of professional experience as a Front-End
                    Developer
                  </li>
                  <li>
                    No mention of a Master's degree or equivalent experience
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>React</Badge>
                <Badge>Angular</Badge>
                <Badge>Vue.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express.js</Badge>
                <Badge>Django</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Firebase</Badge>
                <Badge>MySQL</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>Git</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <p className="text-gray-600">Kalil El Andalouss High School</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <div className="flex gap-2">
                <Badge>English</Badge>
                <Badge>French</Badge>
                <Badge>Arabic</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default function Component() {
  const [selected, setSelected] = useState(false);

  return selected ? (
    <CandidateDetails />
  ) : (
    <CandidateList onSelect={() => setSelected(true)} />
  );
}
