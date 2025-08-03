"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const EventsLayout = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <div className="h-full w-full overflow-y-scroll mb-15 scrollbar-hide">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default EventsLayout;
