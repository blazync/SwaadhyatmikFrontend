import Link from "next/link";
import React from "react";

const AuhtorizationError = () => {
  return (
    <div>
      <h1 className="flex flex-col text-center h-20 mt-40 text-3xl">
        Authorization Error
      </h1>
      <p>Goto Login:</p>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default AuhtorizationError;
