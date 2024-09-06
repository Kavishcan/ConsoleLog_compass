"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileForm from "@/components/features/profile-form";
import DocumentsForm from "../../components/features/documents-form";
import DecisionForm from "../../components/features/decision-form";

export default function Wizard() {
  const [activeTab, setActiveTab] = useState<string>("profile");

  const handleNext = () => {
    if (activeTab === "profile") {
      setActiveTab("documents");
    } else if (activeTab === "documents") {
      setActiveTab("decision");
    } else if (activeTab === "decision") {
      // Handle submission logic here
      console.log("Form submitted");
    }
  };

  const handlePrev = () => {
    if (activeTab === "decision") {
      setActiveTab("documents");
    } else if (activeTab === "documents") {
      setActiveTab("profile");
    }
  };

  const isPrevDisabled = activeTab === "profile";
  const isNextDisabled = activeTab === "profile" || activeTab === "documents"; // Add more validation if needed

  return (
    <div className="wizard-container">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-center space-x-2 mx-20">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="decision">Decision</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ProfileForm />
        </TabsContent>
        <TabsContent value="documents">
          <DocumentsForm />
        </TabsContent>
        <TabsContent value="decision">
          <DecisionForm />
        </TabsContent>
      </Tabs>
      <div className="flex justify-between mt-4 mx-20 mb-10 fixed bottom-0 left-0 right-0">
        <Button
          variant="outline"
          disabled={isPrevDisabled}
          onClick={handlePrev}
        >
          Previous
        </Button>
        <Button onClick={handleNext} disabled={isNextDisabled}>
          {activeTab === "decision" ? "Approve" : "Next"}
        </Button>
      </div>
    </div>
  );
}
