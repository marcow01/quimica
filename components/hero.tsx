import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero(){
    return (
        <>  
            <main className="min-h-[calc(100vh-60px)] flex items-center">
                <div>
                    <h1 className="font-bold text-[2.25rem] text-center">
                        Powering AI With The Best
                        <br />
                        Data &
                        Infrastructure.
                    </h1>

                    <p className="text-[0.875rem] text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, culpa. Dolor est quod asperiores harum magnam. Non maiores nisi voluptatem, ducimus quos qui laboriosam, expedita nam dolor, veritatis illum quo.
                    </p>

                    <div className="flex justify-center gap-2 mt-4">
                        <Button>
                            See the projects
                        </Button>

                        <Button>
                            Become a partner
                        </Button>
                    </div>
                </div>
            </main>
        </>
    )
}