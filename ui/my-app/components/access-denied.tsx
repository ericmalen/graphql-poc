import { ShieldAlertIcon } from "lucide-react";

export default function AccessDenied() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col gap-2 w-3/4 h-3/4 items-center justify-center border-2 border-red-100 rounded-lg">
        <ShieldAlertIcon size={52} color="red" />
        <p className="text-3xl font-bold tracking-tight text-gray-900">
          Access Denied
        </p>
        <p className="text-gray-500">
          You don't have permission to access the API.
        </p>
      </div>
    </div>
  );
}
