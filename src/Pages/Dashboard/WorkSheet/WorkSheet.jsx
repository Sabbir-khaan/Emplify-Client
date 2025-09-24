import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label } from "@/components/ui/label";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "@/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      task: "",
      hours: "",
      date: new Date(),
    },
  });

  const formattedDate = selectedDate.toISOString().split("T")[0];
  const { data: worksheets = [], refetch } = useQuery({
    queryKey: ["my-worksheet", user?.email, formattedDate],
    enabled: !!user?.email, // ✅ only run query if user is logged in
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/worksheet?email=${user.email}&date=${formattedDate}`
      );
      return res.data;
    },
  });
  console.log(worksheets);

  const onSubmit = async (data) => {
    const res = await axiosSecure.post("/worksheet", {
      ...data,
      date: new Date(data.date).toISOString().split("T")[0],
      email: user.email, // 👈 Make sure to store who added it
    });
    if (res.data._id) {
      Swal.fire({
        title: "Task Added Successfully",
        icon: "success",
        draggable: true,
      });
      refetch(); // 🔁 Refresh tasks after adding new one
    }
    reset();
  };

  return (
    <section className="lg:max-w-[90%] mx-auto lg:mt-12 mt-6 p-2.5 lg:p-0 font-epunda">
      {/* Table */}
      <div className="border lg:p-12 bg-gray-50 p-3 lg:rounded-2xl rounded">
        <Table>
          <TableHeader className="bg-gray-300">
            <TableRow>
              <TableHead>Tasks</TableHead>
              <TableHead>Worked Hours</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Edit</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {worksheets.map((task) => (
              <TableRow key={task._id}>
                <TableCell className="font-medium">{task.task}</TableCell>
                <TableCell>{task.hours}</TableCell>
                <TableCell>
                  {new Date(task.date).toLocaleDateString("en-CA")}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="none">
                          <FaPen size={18} className="text-green-600" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Task</DialogTitle>
                          <DialogDescription>
                            Make changes to your task here. Click save when
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="task-name">Task</Label>
                            <Input id="task-name" defaultValue={task.task} />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="worked-hours">Worked Hours</Label>
                            <Input
                              id="worked-hours"
                              defaultValue={task.hours}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </TableCell>
                <TableCell>
                  <MdDelete size={22} className="text-red-600" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Form */}
      <div className="border lg:p-6 p-4 rounded lg:rounded-2xl lg:mt-12 mt-6">
        <h1 className="lg:text-5xl text-3xl lg:mt-2 font-bold text-center text-gray-600">
          Add Your Tasks
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:mt-8 mt-4 lg:flex items-center lg:gap-10">
            {/* Tasks */}
            <div className="w-full">
              <label className="label opacity-70">Tasks</label>
              <Controller
                name="task"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full opacity-70 mt-2 mb-3">
                      <SelectValue placeholder="Select Your Tasks" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="content">Content</SelectItem>
                        <SelectItem value="paper-work">Paper-Work</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="testing">Testing</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Worked Hours */}
            <div className="w-full">
              <label className="label opacity-70">Worked Hours</label>
              <Input
                type="number"
                placeholder="Please add your worked hours"
                className="input input-info w-full mt-2 opacity-70 rounded-lg mb-3"
                {...register("hours", {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                })}
              />
            </div>

            {/* Date */}
            <div className="w-full flex flex-col justify-center">
              <label className="label opacity-70">Date</label>
              <Controller
                name="date"
                control={control}
                defaultValue={new Date()}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => {
                      field.onChange(date);
                      setSelectedDate(date);
                    }}
                    className="w-full rounded-lg border-gray-300 opacity-50 mt-1"
                    dateFormat="yyyy-MM-dd"
                  />
                )}
              />
            </div>

            {/* Submit */}
            <div>
              <Button
                type="submit"
                variant="none"
                className="py-4 px-6 w-full bg-[#08325A] rounded-lg text-white font-bold text-lg mt-8"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WorkSheet;
