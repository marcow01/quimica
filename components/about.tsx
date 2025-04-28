import { AvatarCircles } from "@/components/magicui/avatar-circles";

export function About() {

    const avatars = [
        {
          imageUrl: "https://avatars.githubusercontent.com/u/16860528",
          profileUrl: "https://github.com/dillionverma",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/20110627",
          profileUrl: "https://github.com/tomonarifeehan",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/106103625",
          profileUrl: "https://github.com/BankkRoll",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/59228569",
          profileUrl: "https://github.com/safethecode",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/59442788",
          profileUrl: "https://github.com/sanjay-mali",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/89768406",
          profileUrl: "https://github.com/itsarghyadas",
        },
      ];

    return (
        <>     
            <div className="flex justify-center mb-2 mt-24">
                <AvatarCircles numPeople={99} avatarUrls={avatars} />
            </div>

            <h1 className="font-bold text-center text-[2.25rem] mb-2">
                Dont just ask questions, give objectives.
            </h1>
            <p className="text-center text-[1.125rem]">
                Cognosys can do more than answer questions. It's capable of breaking down complex objectives by creating tasks for itself and accomplishing them autonomously.
            </p>

            <div className="flex flex-col md:flex-row mt-6 mb-6 gap-6">
                <div className="w-full md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1743078344181-6eeea5796e8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl"></img>
                    <p className="p-4 text-justify text-[0.875rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quasi perferendis voluptatibus aperiam suscipit dolore corporis, distinctio accusantium officia voluptatem ipsa.</p>
                    <img src="https://images.unsplash.com/photo-1734700920704-1e8000437a00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl"></img>
                </div>
                <div className="w-full md:w-1/2 mt-20">
                    <p className="p-4 text-justify text-[0.875rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quasi perferendis voluptatibus aperiam suscipit dolore corporis, distinctio accusantium officia voluptatem ipsa.</p>
                    <img src="https://images.unsplash.com/photo-1742198810079-49bb51d1c5af?q=80&w=1369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl"></img>
                </div>
            </div>
        </>
    )
}