"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProject from "./add-task";
import { useRef, useState } from "react";
import { Plus, FolderKanban, Clock, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export type FormObj = {
  projectName?: string;
  description?: string;
  type?: string;
  status?: string;
  priority?: string;
};
function ProjectsSummary() {
  const [totalCount, setTotalCount] = useState<number>(24);
  const [inProgressCount, setInProgressCount] = useState<number>(8);
  const [completedCount, setCompletedCount] = useState<number>(16);
  function handleClick({
    projectName,
    description,
    type,
    status,
    priority,
  }: FormObj) {
    status === "todo"
      ? setTotalCount((prev) => prev + 1)
      : status === "in-progress"
        ? setInProgressCount((prev) => prev + 1)
        : setCompletedCount((prev) => prev + 1);
    handleScroll1();
  }
  const section2Ref = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const handleScroll = function (): void {
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll1 = function (): void {
    section1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        ref={section1Ref}
        className="flex min-h-screen items-center justify-center scroll-smooth"
      >
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
                    {totalCount}
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
                    {inProgressCount}
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
                    {completedCount}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>

          <CardFooter className="justify-end">
            <Button className="gap-2 " onClick={handleScroll}>
              <Plus className="size-4" />
              Add Project
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div ref={section2Ref}>
        <AddProject handleClick={handleClick} />
      </div>
    </>
  );
}

export default ProjectsSummary;
