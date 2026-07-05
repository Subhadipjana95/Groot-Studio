"use client";

import { Button } from "@workspace/ui/components/button"; // Adjust the path to match your project's structure
import { Toaster } from "@workspace/ui/registry/radix-nova/pebble-toast/pebble-toast"; // Adjust the path to match your project's structure
import { toast } from "sonner";

export default function PebbleToastPreview() {
    return (
        <div className="relative w-full flex flex-col pebble-preview-container">
            {/* CSS to isolate local and global toasters */}
            <style jsx global>{`
                /* Hide global toast stacks only when interacting with the main preview container */
                div.relative.flex.flex-col:has(.pebble-preview-container:hover) > div.fixed.z-9999.pointer-events-none,
                div.relative.flex.flex-col:has(.pebble-preview-container:focus-within) > div.fixed.z-9999.pointer-events-none {
                    display: none !important;
                }
            `}</style>
            
            <div className="w-full relative min-h-[300px] overflow-hidden" style={{ transform: "translate(0, 0)" }}>
                <Toaster position="top-center" />
            </div>
            <div className="flex flex-wrap h-fit w-full items-center justify-center gap-1.5 border-t px-2 py-3">
                <Button
                    variant="outline"
                    onClick={() => { toast("This is a toast")}}
                >
                    Toast
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.info("Event has been created", {
                            position: "top-center", description: "Monday, January 3rd at 6:00pm"
                        });
                    }}
                >
                    Description
                </Button>
                <Button
                    variant="outline"
                    onClick={() => { toast.success("Event has been created") }}
                >
                    Success
                </Button>
                <Button
                    variant="outline"
                    onClick={() => { toast.warning("Amount cannot be less than $25") }}
                >
                    Warning
                </Button>
                <Button
                    variant="outline"
                    onClick={() => { toast.error("Event has not been created") }}
                >
                    Error
                </Button>
                <Button
                    variant="outline"
                    onClick={() => { toast.info("Reach 10 minutes before time") }}
                >
                    Info
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.promise<{ name: string }>(
                            () =>
                                new Promise((resolve) =>
                                    setTimeout(() => resolve({ name: "Event" }), 2000)
                                ),
                            {
                                loading: "Loading...",
                                success: (data) => `${data.name} has been created`,
                                error: "Error",
                            }
                        )
                    }}
                >
                    Promise
                </Button>
            </div>
        </div>
    );
}
