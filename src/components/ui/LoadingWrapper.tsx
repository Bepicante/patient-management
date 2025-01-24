"use client";

import React from "react";

export default function LoadingWrapper({ isLoading, children }) {
    if (isLoading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
                <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return <>{children}</>;
}
