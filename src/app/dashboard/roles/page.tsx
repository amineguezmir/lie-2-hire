import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export default function Component() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Roles</h1>
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium">
            x1
          </div>
          <div>
            <h2 className="text-lg font-semibold">Front-End Developer</h2>
            <p className="text-sm text-gray-500">added 17 hours ago</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <PlusIcon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Pencil1Icon className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
