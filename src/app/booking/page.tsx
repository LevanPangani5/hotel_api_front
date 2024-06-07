import React from "react";
import jwt from "jsonwebtoken";
import Bookings from "@/components/Bookings";
const page = () => {
  const res = jwt.decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjdlNzJiZGE2LWEzMWItNGI3MC04NDg1LTA1MTBhMTRjMzY4YiIsIlVzZXJOYW1lIjoidXNlckBlZXhhbXBsZS5jb20iLCJJc0FkbWluIjoiRmFsc2UiLCJQaG9uZU51bWJlciI6IjU5ODE5NzUyOCIsIlJvbGUiOiJVc2VyIiwiZXhwIjoxNzE3ODE1NDExLCJpc3MiOiJXZWJBcHBsaWNhdGlvbjEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3Mjc0LyJ9.SI8CwsBcG6al-CJOhj23PcvoeZx_GnZvGltDhYI7j0A"
  );
  console.log(res);
  return (
    <div>
      <Bookings />
    </div>
  );
};

export default page;
