import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";

export default function Component() {
  return (
    <div>
      <div className="flex-1 p-8 ">
        <div>
          <h1 className="text-3xl font-bold mb-6">Billing</h1>
          <p className="text-xl mb-8">You have 3 credits remaining.</p>

          <h2 className="text-2xl font-semibold mb-4">Buy credits</h2>
          <p className="mb-6">One credit is used per applicant evaluation.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { credits: 20, price: 19 },
              { credits: 50, price: 39 },
              { credits: 100, price: 69 },
            ].map((plan) => (
              <Card key={plan.credits} className="bg-indigo-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {plan.credits} CREDITS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">${plan.price}</p>
                  <p className="text-sm mt-2">One-time purchase.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-400">
                    Buy {plan.credits} credits
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-6">
            Frequently asked questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">What is a credit?</h3>
              <p className="text-gray-600">
                Each applicant evaluation costs 1 credit. With 20 credits,
                you'll be able to review 20 resumes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you allow refunds?</h3>
              <p className="text-gray-600">
                Yes. If you're unsatisfied,{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  get in touch
                </a>{" "}
                within 14 days of purchase for a prorated refund for your
                remaining credits.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Are payments secure?</h3>
              <p className="text-gray-600">
                Yes. Payments are processed by{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Lemon Squeezy
                </a>{" "}
                and follow industry standards for security.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Other questions?</h3>
              <p className="text-gray-600">
                Feel free to{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  send us an email
                </a>{" "}
                and we'll answer as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
