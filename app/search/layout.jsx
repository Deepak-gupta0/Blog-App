import { Suspense } from "react";
import SearchLayout from "./SearchLayout";

export default function layout({children}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchLayout />
      <div className="p-4">{children}</div>
    </Suspense>
  )
}
