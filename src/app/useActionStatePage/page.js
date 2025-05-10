"use client";
import { useActionState } from "react";
import { fetchUser2 } from "src/actions";

export default function UseActionStatePage() {
  const [user, submitAction, isPending] = useActionState(
    fetchUser2,
    "initial value",
    "https://github.com/bubucuo/next-apple"
  );

  return (
    <div>
      <h3 className="text-xl font-bold my-4">UseActionStatePage</h3>
      <form action={submitAction}>
        <input type="text" name="name" className="border" autoComplete="off" />
        <button type="submit" disabled={isPending}>
          {isPending ? "Updating.." : "Update"}
        </button>
      </form>

      <p>userName: {user}</p>
    </div>
  );
}
