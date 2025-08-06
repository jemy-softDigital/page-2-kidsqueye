import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Building2,
  MapPin,
  FileText,
  CheckCircle2,
  Clock,
  Send,
  ArrowLeft,
  Shield,
} from "lucide-react";

export default function Index() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    authorized: false,
  });

  const steps = [
    { id: 1, title: "Account & Ownership", icon: Building2, status: "current" },
    { id: 2, title: "Email Verification", icon: Send, status: "pending" },
    { id: 3, title: "SMS Verification", icon: Send, status: "pending" },
    { id: 4, title: "Document Upload", icon: FileText, status: "pending" },
    {
      id: 5,
      title: "Submit for Approval",
      icon: CheckCircle2,
      status: "pending",
    },
  ];

  const centerInfo = {
    name: "Rainbow Children Center",
    address: "789 Pine Road, Springfield, IL",
    license: "Child Care Center #LICENSE-56dcca16",
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "pending";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                Claim Rainbow Children Center
              </h1>
              <div className="flex  flex-col text-sm text-muted-foreground">
                <div className="flex gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>789 Pine Road, Springfield, IL</span>
                </div>
                <div className="flex gap-1">
                  <Shield className="w-4 h-4" />
                  <span>child care center #LICENSE-56dcca16</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Center
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Free to Claim Notice */}
        <Card className="mb-8 border-accent/20 bg-accent/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-accent">Free to Claim</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Claiming is free. Messaging, tour booking, parent request
                  inbox, and additional seats are paid features—you'll see them
                  in your dashboard after approval.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">
              Step {currentStep} of 5: {steps[currentStep - 1].title}
            </h2>
            <div className="flex gap-2">
              {[2, 3, 4].map((step) => (
                <div
                  key={step}
                  className="flex items-center gap-1 text-xs text-muted-foreground"
                >
                  <Clock className="w-3 h-3" />
                  <span>Pending</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      getStepStatus(step.id) === "completed"
                        ? "bg-accent border-accent text-white"
                        : getStepStatus(step.id) === "current"
                          ? "bg-primary border-primary text-white"
                          : "bg-muted border-border text-muted-foreground"
                    }`}
                  >
                    {getStepStatus(step.id) === "completed" ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs text-center ${
                      getStepStatus(step.id) === "current"
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 ${
                      getStepStatus(step.id) === "completed"
                        ? "bg-accent"
                        : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Building2 className="w-5 h-5 text-primary" />
              Account & Ownership Declaration
            </CardTitle>
            <p className="text-muted-foreground">
              Provide your contact information and confirm your authority to
              represent this center.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role at Center *</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleInputChange("role", value)}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="director">Director</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="administrator">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white"
                />
                <p className="text-xs text-muted-foreground">
                  We'll send a verification code to this email
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-white"
                />
                <p className="text-xs text-muted-foreground">
                  We'll send a verification code via SMS
                </p>
              </div>
            </div>

            {/* Center Information */}
            <Card className="bg-muted/30 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Center Information
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                <div>
                  <span className="text-sm font-medium">Name:</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {centerInfo.name}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium">Address:</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {centerInfo.address}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium">License:</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {centerInfo.license}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Authorization Checkbox */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="authorized"
                    checked={formData.authorized}
                    onCheckedChange={(checked) =>
                      handleInputChange("authorized", checked as boolean)
                    }
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label
                      htmlFor="authorized"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I am authorized to represent this center *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      By checking this box, you confirm that you have the legal
                      authority to claim and manage this center's presence on
                      KidsQueue on behalf of the business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Button */}
            <div className="flex justify-end pt-4">
              <Button
                onClick={handleContinue}
                disabled={
                  !formData.fullName ||
                  !formData.email ||
                  !formData.phone ||
                  !formData.role ||
                  !formData.authorized
                }
                className="px-8"
              >
                Continue to Email Verification
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
