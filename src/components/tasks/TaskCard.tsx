import type { Task } from "@/types/index";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react/jsx-runtime";

type TaskCardProps = {
  task: Task;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <>
      <li>
        <div></div>
        <div></div>
      </li>
    </>
  );
}
