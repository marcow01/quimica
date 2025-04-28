import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, AtSign, Phone } from "lucide-react";

export function Contact() {
    return (
        <>
            <div className="flex flex-col md:flex-row mt-48 mb-6 gap-6">
                <div className="w-full md:w-1/2">
                    <h1 className="font-bold text-[2.25rem]">
                        Contact us.
                    </h1>
                    <p className="text-justify text-[0.875rem] mb-4">Please fill out the form below and we will get back to you shortly.</p>
                    
                    <form className="mt-2">
                        <Label htmlFor="name">Name</Label>
                        <Input type="name" placeholder="marcos corrêa" className="mt-1 mb-2"/>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="marcow@email.com" className="mt-1 mb-2"/>
                        <Label htmlFor="message">Message</Label>
                        <Textarea placeholder="Type your message here." className="mt-1 mb-4"/>
                        <Button className="w-full">Send message</Button>
                    </form>
                    
                </div>
                <div className="w-full md:w-1/2 items-center flex">
                    <div>
                        <MapPin className="w-10 h-10 rounded-lg p-2 bg-red-500/10 mb-2 text-red-500"/>
                        <p className="mb-4 text-[0.875rem]">
                            Rua Augusto Corrêa - Guamá<br/>
                            N01 - 66075-100 <br/>
                            Belém - Pará - Brasil
                        </p>

                        <AtSign className="w-10 h-10 rounded-lg p-2 bg-red-500/10 mb-2 text-red-500"/>
                        <p className="mb-4 text-[0.875rem]">
                            robotech@ufpa.br <br/>
                            robotech@ufpa.br
                        </p>

                        <Phone className="w-10 h-10 rounded-lg p-2 bg-red-500/10 mb-2 text-red-500"/>
                        <p className="text-[0.875rem]">
                            (94) 99999-9999 <br/>
                            (94) 99999-9999
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}