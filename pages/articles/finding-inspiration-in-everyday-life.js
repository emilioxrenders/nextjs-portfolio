import Head from 'next/head';
import Layout from '../../components/layout';
import Header from '../../components/header';
import HeaderImage from '../../components/headerImage';
import Link from 'next/link';

export default function TouchingGrass() {
  return (
    <>
    <Header />
    {/* Metadata */}
    <Head>
      <title>Finding Inspiration In Everyday Life: Unleashing Your Creative Potential</title>
    </Head>
    
    <Layout className='flex-col lg:pt-8 pt-8 gap-8 max-w-screen-lg'>
        <Link href='/' className='relative w-fit after:w-0 after:transition-all after:duration-200 after:left-0 after:absolute after:bg-black after:h-px after:hover:w-full after:ease-in-out after:bottom-0'>Go back</Link>

        <h1 className='text-4xl'>Finding Inspiration In Everyday Life: Unleashing Your Creative Potential</h1>
      
        <HeaderImage image='life.webp' alt='Inspiration' />

        <div class="flex flex-col">
            <p>Inspiration; it isn't something that can only be found in the moments that make you feel like you're having an
            existential crisis. Maybe you see someone having the job that you want, or maybe you see someone working out and it
            reminds you of your new year's resolutions. You get a new fire burning inside of you that wants to make a change, but
            after a few days or weeks it starts to burn out again.</p>
            <br/>
            <p>These types of occurrences aren't necessarily a bad thing. As a matter of fact, they mostly inspire you to make a
            positive change. It is however hardly something you would call sustainable. What if I told you that these big bursts of
            inspiration you've experienced before can be found in the simple things, like walking your dog, or by staring out of
            your window?</p>
            <br/>
            <p>Inspiration is not that hard to come by in your day to day life. It is everywhere around you. From the air that you
            breathe, to the little piece of greenery that you can see outside of your window. However, you might wonder: “Why should
            this be inspiring?” The answer to your question is relatively simple: by grounding yourself. To just be for a second
            and to really see the world around you. To take notice of the air filling your lungs, to feel the sensation of a soft
            fabric on your skin, we are all part of a bigger picture.</p>
            <br/>
            <p>By realising that you are part of a bigger picture, that everything around you is alive, you can feel more at ease with
            just being alive too. Why would someone working out or having the job that you want be any more inspiring than a
            steadfast tree standing its ground? Or a diligent bee, tirelessly working to safeguard an entire ecosystem? Being
            yourself and being in the moment will help you access your uncapped creative potential without any boundaries set on it
            by the troubles of modern life.</p>
        </div>
    </Layout>
    </>
  );
}
