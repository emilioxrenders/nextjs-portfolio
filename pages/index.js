import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/header';
import Image from 'next/image';
import Card from '../components/card';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
    <Header />
    {/* Metadata */}
    <Head>
      <title>Emilioxrenders</title>
    </Head>

    {/* section */}
    <div className='flex justify-center items-center bg-gradient-to-b from-black via-dark via-75% to-white'>
      <Layout className={'gap-10 flex-col-reverse lg:gap-20 lg:items-center lg:flex-row'}>
        <Image src='/images/profile.webp' width={1080} height={1080} alt="Profile" className='max-w-sm rounded shadow w-full' />
        <div className='flex flex-col text-white gap-8'>
          <h1 className='text-4xl'>Exploring the Art of Creative Tech</h1>
          <div className='flex flex-col gap-5'>
            <p>Hey there! I'm Emilio, a passionate Front-end Developer and Creative writer. Welcome to my portfolio, where creativity meets technical expertise. Scroll down to explore my latest projects and see how I bring concepts to life through code and storytelling.</p>
          </div>
        </div>
      </Layout>
    </div>

    {/* section */}
    <div className='flex justify-center items-center bg-gradient-to-b from-black via-dark via-50% to-white'>
      <Layout className={'flex-col gap-10'}>
        <div className='flex flex-col text-white gap-8 lg:w-1/2'>
          <h2 className='text-4xl'>Explore my Articles</h2>
          <p>Dive into my latest blog posts, where I share my perspective on various topics and hopefully provide you with some unique insights. Feel free to connect, share your thoughts, or discuss the world of writing with me at <a href="mailto:emilioxrenders@gmail.com" className='underline'>emilioxrenders@gmail.com</a>.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          <Card link="/articles/touching-grass" image="grass.webp" alt="Touching Grass">Touching Grass: a Step by Step Guide</Card>

          <Card link="/articles/dungeons-and-dragons" image="dnd.webp" alt="Dungeons & Dragons">Dungeons & Dragons: Enhancing Creativity, Cognition, and Connection</Card>

          <Card link="/articles/seasonal-affective-disorder" image="sad.webp" alt="Seasonal Affective Disorder">Seasonal Affective Disorder: a Comprehensive Overview</Card>
         
          <Card link="/articles/finding-inspiration-in-everyday-life" image="life.webp" alt="Inspiration">Finding Inspiration In Everyday Life: Unleashing Your Creative Potential</Card>
        </div>
      </Layout>
    </div>

    {/* section */}
    <div className='flex justify-center items-center bg-gradient-to-b from-black via-dark via-50% to-white'>
      <Layout className={'flex-col gap-10'}>
        <div className='flex flex-col text-white gap-8 lg:w-1/2'>
          <h2 className='text-4xl'>Explore my Development Projects</h2>
          <p>Discover my latest development projects that showcase my skills in front-end development and creative tech. If you'd like to connect, share your thoughts, or discuss the world of creative tech, feel free to reach out to me at <a href="mailto:emilioxrenders@gmail.com" className='underline'>emilioxrenders@gmail.com</a>.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          <Card link="https://nextjs-pexels.vercel.app/" image="pexels.webp" alt="Nextjs" blank="true">Nextjs Pexels project</Card>
        </div>
      </Layout>
    </div>

    <Footer />
    </>
  );
}
