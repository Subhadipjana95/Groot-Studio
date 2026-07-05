"use client";

import { Button } from "@workspace/ui/components/button"; // Adjust the path to match your project's structure
import { toast } from "sonner";

export default function PebbleToastPreview() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-3">
            <div className="flex flex-wrap gap-1.5">
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.success("Event Created", {
                            position: "top-left",
                            duration: 2000
                        })
                    }}
                >
                    Top Left
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.success("Event Created", {
                            position: "top-center",
                            duration: 2000
                        })
                    }}
                >
                    Top Center
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.success("Event Created", {
                            position: "top-right",
                            duration: 2000
                        })
                    }}
                >
                    Top Right
                </Button>
            </div>
            <div className="flex flex-wrap gap-1.5">
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.success("Event Created", {
                            position: "bottom-left",
                            duration: 2000
                        })
                    }}
                >
                    Bottom Left
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.success("Event Created", {
                            position: "bottom-center",
                            duration: 2000
                        })
                    }}
                >
                    Bottom Center
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast.success("Event Created", {
                            position: "bottom-right",
                            duration: 2000
                        })
                    }}
                >
                    Bottom Right
                </Button>
            </div>
        </div>
    );
}