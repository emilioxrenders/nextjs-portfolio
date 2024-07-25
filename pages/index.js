import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import Card from "../components/card";

export default function Home() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Emilioxrenders</title>
      </Head>

      {/* section */}
      <div className="flex justify-center items-center bg-gradient-to-b from-black via-medium via-75% to-light">
        <Layout
          className={
            "gap-10 flex-col-reverse lg:gap-20 lg:items-center lg:flex-row"
          }
        >
          <Image
            src="/images/profile.webp"
            width={1080}
            height={1080}
            alt="Profile"
            className="max-w-sm rounded-sm shadow w-full"
          />
          <div className="flex flex-col text-white gap-10">
            <h1 className="text-4xl">Turning Ideas into Stories</h1>
            <div className="flex flex-col gap-5">
              <p>
                Hi there! I'm Emilio, a passionate Creative Writer specialized
                in crafting engaging content and compelling copy.
                <br></br>
                <br></br>
                Whether you're looking for original articles, persuasive copy,
                or creative content solutions, you've come to the right place.
                Dive into my latest work below, or reach out to me directly at{" "}
                <a
                  href="mailto:emilioxrenders@gmail.com"
                  className="relative after:w-0 after:transition-all after:duration-200 after:left-0 after:absolute after:bg-white after:h-px after:hover:w-full after:ease-in-out after:bottom-0"
                >
                  emilioxrenders@gmail.com
                </a>
                !
              </p>
            </div>
          </div>
        </Layout>
      </div>

      {/* section */}
      <div className="flex justify-center items-center bg-light">
        <Layout className={"flex-col gap-10"}>
          <div className="flex flex-col gap-10 lg:w-1/2">
            <h2 className="text-3xl">Explore my Work</h2>
            <p>
              Discover various writing projects that showcase my skills and
              offer a unique perspective on different topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <Card
              link="/articles/finding-inspiration-in-everyday-life"
              image="life.webp"
              alt="Inspiration"
            >
              Finding Inspiration in Everyday Life
            </Card>

            <Card
              link="/articles/touching-grass"
              image="grass.webp"
              alt="Touching Grass"
            >
              Touching Grass: a Step by Step Guide
            </Card>

            <Card
              link="/articles/dungeons-and-dragons"
              image="dnd.webp"
              alt="Dungeons & Dragons"
            >
              Dungeons & Dragons: Enhancing Creativity, Cognition, and
              Connection
            </Card>

            <Card
              link="/articles/seasonal-affective-disorder"
              image="sad.webp"
              alt="Seasonal Affective Disorder"
            >
              Seasonal Affective Disorder: a Comprehensive Overview
            </Card>
          </div>
        </Layout>
      </div>

      {/* section */}
      <div className="flex justify-center items-center bg-white">
        <Layout className={"flex-col gap-10"}>
          <div className="flex flex-col gap-10 lg:w-1/2">
            <h2 className="text-3xl">Let's Collaborate</h2>
            <p>
              Ready to bring your ideas to life? Whether you need captivating
              articles, persuasive copy, or creative content solutions, I'm here
              to help. Feel free to connect with me directly at{" "}
              <a
                href="mailto:emilioxrenders@gmail.com"
                className="relative after:w-0 after:transition-all after:duration-200 after:left-0 after:absolute after:bg-black after:h-px after:hover:w-full after:ease-in-out after:bottom-0"
              >
                emilioxrenders@gmail.com
              </a>
              !
            </p>
          </div>
        </Layout>
      </div>
    </>
  );
}
