import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Bot, Home, Settings, User } from "lucide-react";

const tabs = [  
    {    name: "Primeiro", content: "",  value: "home",    icon: Home, url: "https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  },  
    {    name: "Segundo", content: "",   value: "profile",    icon: User,  url: "https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},  
];

export function Projects () {
    return (
        <>  
            {/*<MapPin className="w-14 h-14 rounded-lg p-2 bg-red-500/10 text-red-500"/>*/}

            <h1 className="font-bold text-[2.25rem] mt-48">
                Recent projects.
            </h1>
            <p className="text-justify text-[0.875rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, culpa. Dolor est quod asperiores harum magnam. Non maiores nisi voluptatem, ducimus quos qui laboriosam, expedita nam dolor, veritatis illum quo.
            </p>

            <Tabs orientation="vertical" defaultValue={tabs[0].value} className="w-full flex mt-4 gap-6">

            <TabsList className="w-1/2 h-full flex flex-col bg-background">
                {tabs.map((tab) => (
                <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 py-2 text-left w-full block"
                >
                    <tab.icon className="h-5 w-5 me-2" />
                    <p>{tab.name}</p>
                    <p>conteudo aqui</p>
                </TabsTrigger>
                ))}
            </TabsList>

            <div className="w-1/2 flex items-center justify-center rounded-2xl">
                {tabs.map((tab) => (
                <TabsContent
                key={tab.value}
                value={tab.value}
                className="w-full h-full rounded-md"
                >
                <img src={tab.url} className="rounded-2xl"/>
                {tab.name} Content
                </TabsContent>
                ))}
            </div>

        </Tabs>

     
        </>
    )
}