import Head from "next/head";
import Layout from "../../components/layout";
import HeaderImage from "../../components/headerImage";
import Back from "../../components/back";

export default function TouchingGrass() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Finding Inspiration in Everyday Life</title>
      </Head>

      <Layout className="flex-col lg:pt-10 pt-10 gap-10 max-w-screen-lg">
        <Back />

        <h1 className="text-3xl">Finding Inspiration in Everyday Life</h1>

        <HeaderImage image="life.webp" alt="Inspiration" />

        <div class="flex flex-col">
          <p>
            I think I can speak for most of us when I say that sometimes it's
            hard to feel inspired. You want to feel motivated, go after your
            dreams, chase that physique you always wanted, but somehow you feel
            tired, lacking the energy necessary to accomplish all of these
            things. Let me start out by saying that chasing goals and wanting
            the next thing isn't always what gives you satisfaction in life. In
            this article I want to share a different perspective to what meaning
            we give the word 'inspiration', and how we can feel inspired by the
            mundane tasks of life.
          </p>
          <br />
          <br />
          <h2 class="text-xl mb-2 font-normal">
            The difference between motivation and inspiration
          </h2>
          <p>
            Let us first take a small detour in explaining what the difference
            between motivation and inspiration is, since I will be using both
            terms quite a lot during this article. Motivation refers to the
            process that initiates, guides, and sustains goal-oriented
            behaviors. It is the drive to act and achieve specific goals.
            Inspiration on the other hand, refers to a sudden burst of
            creativity or insight that often comes from an external source or an
            internal realization.
          </p>
          <br />
          <br />
          <h2 class="text-xl mb-2 font-normal">Why do we feel motivated?</h2>
          <p>
            People that know me will sigh at what I'm about to say, since I
            can't seem to shut up about it, but I love bouldering. So much that
            it's getting its own article very soon. When I started bouldering,
            my progression went very fast. I was going multiple times a week,
            and it felt like every week I could climb higher and higher grades.
            It was motivating, thrilling, and it made me feel inspired to keep
            training hard, day after day.
          </p>
          <br />
          <p>
            After a few months, however, things started to slow down a bit. I
            was still getting stronger, and I was still having fun, but the
            grades weren't really going up anymore. I hit my first plateau, and
            while my passion was still there, I felt my motivation dropping a
            little bit. Why am I telling you this? Is this just another excuse
            to flex my boulder progression? No, this is a perfect example of how
            dopamine works in our brains and how it affects our motivation, and
            in turn how inspired we feel.
          </p>
          <br />
          <h2 class="text-xl mb-2 font-normal">Chasing dopamine</h2>
          <p>
            Getting better at things and increasing grades we can climb gives us
            huge hits of dopamine. These hits of dopamine reward us for our
            behavior, and gets us fired up to climb the next grade for our next
            hit. This continuous chase for dopamine makes us goal-oriented,
            needing accomplishments to feel happy.
          </p>
          <p>
            I'm not saying this is entirely a bad thing, since having goals and
            feeling good about accomplishments is, well, kind of healthy right?
            Yes, but the problem is with balance. What if we still work hard,
            but we're stuck at our current grade? Shouldn't we still be happy?
            Is our self worth only tied to the things we accomplish?
          </p>
          <br />
          <p>
            Relying on dopamine for our happiness is becoming a dangerous thing
            in this world, with external sources drowning us in dopamine
            whenever we want. Aside from dopamine, we also shouldn't let our
            accomplishments define who we are as persons. We are all complex
            characters with unique roads to travel, and our self worth isn't
            tied to our destinations. This is where the title of the article
            comes in, since I believe there is a way to feel inspired without
            endlessly chasing the next thing.
          </p>
          <br />
          <br />
          <h2 class="text-xl mb-2 font-normal">Detachment from our goals</h2>
          <p>
            We can accomplish this by detaching ourselves from our goals. By
            doing this, we can create space to enjoy our actions instead of our
            accomplishments. By focusing on the feeling of grabbing plastic
            rocks, instead of what the sequence of plastic rocks is graded as. I
            will admit however, that applying this concept is harder than it
            sounds, but with practice everything becomes possible.
          </p>
          <p>
            We can practice this by applying mindfulness, or meditative
            practices to our everyday life. Meditation isn't just sitting in
            lotus pose with your eyes closed, but encompasses an extremely wide
            range of practices for our mind.
          </p>
          <br />
          <p>
            My favorite way of doing this is going for a walk. Instead of
            thinking about how many steps you still have to take today to hit
            your 10k, focus instead on your environment. What flowers are
            growing next to the sidewalk? Can you see the insects that inhabit
            the greenery around you? What about the air, did you notice how it
            fills your lungs? How does it feel against your skin? These are all
            sensations we so easily miss when we're so stuck in our own head.
          </p>
          <br />
          <br />
          <h2 class="text-xl mb-2 font-normal">Conclusion</h2>
          <p>
            We get too hung up on what we accomplish, that we forgot to truly
            experience what we do. By enjoying the process, focussing on our
            actions instead of our outcomes, we can find inspiration in these
            otherwise mundane tasks and motivate us to experience the world as
            it is. We don't control our outcomes, we just control our actions,
            so let us focus on that and let the outcome be whatever it is meant
            to be.
          </p>
        </div>
      </Layout>
    </>
  );
}
