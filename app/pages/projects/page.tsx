import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Plus, FolderKanban, Clock, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectsSummary() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Projects Overview</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Type</TableHead>
                <TableHead className="text-center">Count</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <FolderKanban className="size-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Total Projects
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-3xl font-bold">
                  24
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-amber-500/10 p-3">
                      <Clock className="size-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      In Progress
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-3xl font-bold">
                  8
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <div className="flex flex-col items-center gap-2">
                    <div className="rounded-full bg-emerald-500/10 p-3">
                      <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Complete
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center text-3xl font-bold">
                  16
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter className="justify-end">
          <Button className="gap-2">
            <Plus className="size-4" />
            <Link href="/pages/add-project">Add Project</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProjectsSummary;
