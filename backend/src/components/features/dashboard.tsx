"use client";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  const router = useRouter();
  const applications = [
    {
      applicant: "John Doe",
      visaId: "123456",
      type: "Tourist",
      country: "USA",
      submissionDate: "2024-09-01",
      state: "Approved",
    },
    {
      applicant: "Jane Smith",
      visaId: "654321",
      type: "Business",
      country: "Canada",
      submissionDate: "2024-08-30",
      state: "Pending",
    },
    {
      applicant: "John Doe",
      visaId: "123456",
      type: "Tourist",
      country: "USA",
      submissionDate: "2024-09-01",
      state: "Rejected",
    },
    // Add more applications as needed
  ];

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Recent Visa Applications</CardTitle>
        <CardDescription>
          Here you can find the latest visa application statuses and details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Visa Applicant</TableHead>
              <TableHead className="hidden sm:table-cell">Visa ID</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Country</TableHead>
              <TableHead className="text-right">Submission Date</TableHead>
              <TableHead className="text-right">State</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application, index) => {
              const isDisabled =
                application.state === "Approved" ||
                application.state === "Rejected";

              return (
                <TableRow key={index}>
                  <TableCell>{application.applicant}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {application.visaId}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {application.type}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {application.country}
                  </TableCell>
                  <TableCell className="text-right">
                    {new Date(application.submissionDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge>{application.state}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <button
                      type="button"
                      className={`btn btn-primary ${
                        isDisabled ? "cursor-not-allowed opacity-50" : ""
                      }`}
                      onClick={() => !isDisabled && router.push("/wizard")}
                      aria-label={`View more details for ${application.visaId}`}
                      disabled={isDisabled}
                    >
                      View More
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
