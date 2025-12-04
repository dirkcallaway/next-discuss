import { Skeleton } from '@nextui-org/react';

export default function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="w-48 h-8" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-32 h-6" />
      </div>
    </div>
  )
}