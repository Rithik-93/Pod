"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/podcastCard";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks)

  
  
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white-1">
          {tasks?.map(({_id})=> <div key={_id}></div> )}
        </div>
        <div className="podcast_grid">
          
        </div>
      </section>
    </div>
  )
}

export default Home