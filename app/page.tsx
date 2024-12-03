import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/suit-pic22.jpg"
          alt="Profile photo"
          className="rounded-full  block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 "
          //className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
  
          unoptimized
          width={200}
          height={270}
          priority
          
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        A Software Developer
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
         Hello nice to see you! Actually you are reading my virtual POV.
        </p>
        <p>
         I have earned a Bachelor's degree in the field of Computer Science.
         </p> 
         <p>
         As a tech enthusiast I Believe this is a decade of Gen AI.
         </p> 
         {/* {" "}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p> 
         {/* <p> 
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a> {*/}
          
      
      </div>
    </section>
  );
}
