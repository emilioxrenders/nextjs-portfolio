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
      <title>Touching Grass: a Step by Step Guide</title>
    </Head>
    
    <Layout className='flex-col lg:pt-8 pt-8 gap-8 max-w-screen-lg'>
      <Link href='/' className='relative w-fit after:w-0 after:transition-all after:duration-200 after:left-0 after:absolute after:bg-black after:h-px after:hover:w-full after:ease-in-out after:bottom-0'>Go back</Link>

      <h1 className='text-4xl'>Touching Grass: a Step by Step Guide</h1>
      
      <HeaderImage image='grass.webp' alt='Touching Grass' />

      <div className="flex flex-col">
          <p>I lived in the city of Assen for a bit. Its province is famous for the nature surrounding it, but when I looked out of
          my apartment, all I could see was a sea of grey buildings—not a single tree in sight. No birds singing outside of my
          window, no owls advertising their territories. When I went for a walk to try to keep up with my 10k steps a day goal, I
          had to walk quite a bit to see a little bit of greenery to spark that joy of nature inside of me. Why am I telling you
          this? Partly just because I'm still a bit salty about it, but mostly because this is a perfect example of how we as
          humans have become detached from nature. But have we really? Is this a bad thing? How can I touch more grass? Don't
          worry, fellow greenery enjoyer, I'm gonna tell you all about it in this article.</p>
          <br/>
          <p>Let me start off by saying that I'm not gonna be spewing scientific information in your face. I think this topic is also
          being discussed by people much smarter than me, and there are a lot of great sources out there that actually look at the
          scientific data available. I just want to share my perspective on the matter, discuss my experiences, thoughts,
          reflections, and hopefully inspire you to stop and enjoy the flowers on the side of the bike lane every now and then.</p>
          <br/><br/>
          <h2 class="text-2xl mb-2 font-normal">Have we become detached from nature?</h2>
          <p>So, have we lost our roots to nature? To answer this, let's take a look at history. Back in the day, enormous
          corporations like supermarkets weren't a thing, and food delivery services weren't invented yet—I think. It would be
          cool if, for example, in ancient Greece, you got bread and olives delivered on a four-wheeled cart pulled by an ox.</p>
          <br/>
          <p>We had to cultivate our own food, or at least buy it from a local farmer, and prepare everything from scratch.
          Minute-ready microwave meals? Sorry dear, don't know her. This allowed us to be much closer connected to the food we
          ate, which in turn brings us much closer to all the beautiful things nature can provide for us.</p>
          <br/>
          <p>Our living situations changed a lot too. Sure, big cities have existed since the dawn of humanity, and small villages
          are still a thing today. However, I think it's fair to say that with the amount of people that are living on earth right
          now, the majority of people aren't living in a house surrounded by gardens, forests, trees, and so forth. We mostly live
          in densely populated areas, in big apartment blocks. It's hard to ground yourself when you're living six flights up.</p>
          <br/><br/>
          <h2 class="text-2xl mb-2 font-normal">The positive benefits of being connected with nature</h2>
          <p>Is this necessarily a bad thing? Well, dear reader, I'm of the opinion that it is. A deep connection with nature is one
          of the most valuable things we as humans can have. There is plenty of research pointing towards nature having an
          enormous impact on improving mental health. Taking a walk through a forest is quite literally therapy for your mind, and
          soul if you believe in that stuff.</p>
          <br/>
          <p>Living closer in line with nature also implies being physically outside—unless you have a room full of houseplants, but
          even then there is still merit to going outside. I mention this, since physical activity has also drastically gone down
          over the past few decades. Caring for your potatoes, picking strawberries from the fields, even just taking a walk
          through the forest. I actually drove through a forest once with my car—not the same experience, wouldn't recommend it.
          Living in line with nature not only nurtures our minds, but it also keeps us in shape.</p>
          <br/>
          <p>This whole being physically outside thing has more positives than we zoomers might give it credit for. I don't think
          it'll be a surprise when I say that we as humans are becoming more lonely, which is a subject I'll probably cover more
          in-depth in a future article. Thankfully, being outside, having our anxiety levels lowered, letting our mood be
          heightened by the subtle breeze that touches our skin while seeing a sea of green, also lets us meet new people. Even if
          it's just a little chit-chat, or just saying hi, human interaction is a vital part of who we as humans are, and nature
          helps us not only connect to ourselves, but to our fellow humans.</p>
          <br/><br/>
          <h2 class="text-2xl mb-2 font-normal">Top 5 ways to connect with nature</h2>
          <p>With all this information on why touching grass is so important for us, let's look at my top 5 ways you can easily
          invite more nature into your life.</p>
          <br/>
          <ol class="font-normal mb-1" start="1">
              <li>Take a walk</li>
          </ol>
          <p>Sounds obvious, right? It is, but it's also something we're statistically not doing enough of. Research suggests that us
          Europeans walk a little over 5k steps a day on average, which isn't that bad, but it's also not great. As a side note, I
          believe people tend to forget the obvious: try taking a walk in a place where there is greenery. Search for a park,
          drive a little to your nearest forest (if you have one nearby).</p>
          <br/>
          <ol class="font-normal mb-1" start="2">
              <li>Shop locally</li>
          </ol>
          <p>And I don't mean 'support your local skate shop'—although that is still a good thing, but a topic for another day. Go to
          your local farmers market, visit local farms to shop for your veggies and fruits. Learn what's in season in your area,
          eat what nature is screaming at you to eat.</p>
          <br/>
          <ol class="font-normal mb-1" start="3">
              <li>Reserve some time—if the weather allows it—to read a book outside</li>
          </ol>
          <p>Aside from the general positive benefits reading gives us, it's a perfect opportunity to really experience the world
          around us, and be still for a moment. Maybe you're not actively engaged with your surroundings when reading a book, but
          you don't have to. You still hear birds chirping in the background. You still smell the scent of flowers blowing past
          your nose. You still feel the breeze on your skin.</p>
          <br/>
          <ol class="font-normal mb-1" start="4">
              <li>Earthing (grounding)</li>
          </ol>
          <p>This is probably the most 'spiritual' point in my list, but you should still try it if you're not into all of that
          stuff. Earthing, or grounding as some people call it, is the act of touching the ground (preferably grass) with your
          bare feet. The idea behind it is that your neurons merge with the energy of the earth and ground you in the here and
          now. Sounds vague, but I'd recommend giving it a try.</p>
          <br/>
          <ol class="font-normal mb-1" start="5">
              <li>Breathe</li>
          </ol>
          <p>Okay so what do I mean by this? Well exactly what it states: breathe. Take time to just inhale, exhale, and appreciate
          the things around you. Look up at the sky, see how the clouds are slowly travelling. Look out your window, observe what
          beauty there is in this world. Nature is all around us, if you look for it.</p>
          <br/><br/>
          <h2 class="text-2xl mb-2 font-normal">Wrapping up</h2>
          <p>And with that last point I want to wrap up this article. I hope you're equipped with some more knowledge on how we as
          humans can feel more connected with the world around us. Even in big grey cities like Assen, there is nature to be
          found, and a way for us to connect with it. I'm just really glad I can finally see trees again when I look out my
          window.</p>
      </div>
    </Layout>
    </>
  );
}
