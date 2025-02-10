import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getEmployees } from "../fetch";
import { DownloadIcon, PreviewIcon } from "../icons";
import { TrashIcon } from "@/assets/icons";

export async function Employees({ className }: { className?: string }) {
  const data = await getEmployees();

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Employees
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[120px] !text-left">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="!text-right">Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((channel, i) => (
            <TableRow
              className="text-center text-base font-medium text-dark dark:text-white"
              key={channel.name + i}
            >
              <TableCell className="flex min-w-fit items-center gap-3">
                
                <div className="">{channel.name}</div>
              </TableCell>

              <TableCell>{channel.email}</TableCell>

              <TableCell className="!text-right text-green-light-1">
                {channel.phone}
              </TableCell>

              <TableCell>{channel.is_active}</TableCell>

              <TableCell>{channel.is_active}</TableCell>
              <TableCell> <div className="flex items-center justify-end gap-x-3.5">
                                <button className="hover:text-primary">
                                  <span className="sr-only">View Invoice</span>
                                  <PreviewIcon />
                                </button>
              
                                <button className="hover:text-primary">
                                  <span className="sr-only">Delete Invoice</span>
                                  <TrashIcon />
                                </button>
              
                                <button className="hover:text-primary">
                                  <span className="sr-only">Download Invoice</span>
                                  <DownloadIcon />
                                </button>
                              </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
