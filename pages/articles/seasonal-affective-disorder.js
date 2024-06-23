import Head from "next/head";
import Layout from "../../components/layout";
import HeaderImage from "../../components/headerImage";
import Back from "../../components/back";

export default function TouchingGrass() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>Seasonal Affective Disorder: A Comprehensive Overview</title>
      </Head>

      <Layout className="flex-col lg:pt-10 pt-10 gap-10 max-w-screen-lg">
        <Back />

        <h1 className="text-3xl">
          Seasonal Affective Disorder: A Comprehensive Overview
        </h1>

        <HeaderImage image="sad.webp" alt="Seasonal Affective Disorder" />

        <div class="flex flex-col">
          <h2 class="text-xl mb-2 font-normal">
            Seasonal shifts and mental health
          </h2>
          <p>
            As summer winds down and autumn is rearing its head, it's not only
            time to bring out the pumpkin(-spiced latte)s, but also a more
            sinister companion: the big SAD. For those scratching their heads,
            SAD stands for Seasonal Affective Disorder, a term used to describe
            a certain kind of depression in which symptoms become more apparent
            in specific seasons. While it is often referred to as “winter
            depression,” suggesting it's exclusive to cold weather, the reality
            is far more nuanced. In the paragraphs ahead, we'll delve into the
            intricate details of Seasonal Affective Disorder, exploring its
            symptoms and dispelling misconceptions that have been misinforming
            people since its mainstream awareness. Keep in mind that I'm just a
            writer and not a doctor, so if you're dealing with depression please
            seek professional guidance.
          </p>
          <br />
          <br />
          <h3 class="text-xl mb-2 font-normal">
            What is Seasonal Affective Disorder?
          </h3>
          <p>
            So, what exactly is Seasonal Affective Disorder (SAD)? SAD is an
            officially recognized subtype of major depressive disorder (MDD) in
            the Diagnostic and Statistical Manual of Mental Disorders, Fifth
            Edition (DSM-5), which is a widely used classification system for
            mental health disorders. Its classification as a subtype stems from
            its distinctive seasonal pattern. It's important to distinguish
            between experiencing clinical depression and feeling somewhat down
            during specific seasons, such as the winter months (or in some
            cases, summer, as we'll discuss later).
          </p>
          <br />
          <br />
          <h3 class="text-xl mb-2 font-normal">
            Identifying the Telltale Signs
          </h3>
          <p>
            Identifying the symptoms of SAD is crucial. Symptoms can be
            categorised into two groups: general symptoms associated with major
            depression, and specific symptoms related to the seasons. According
            to the National Institute of Mental Health, symptoms of SAD may
            include:
          </p>
          <br />
          <p className="mb-2 font-normal">
            General symptoms of Major Depression:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Feeling depressed most of the day, nearly every day</li>
            <li>Losing interest in activities you once enjoyed</li>
            <li>Experiencing changes in appetite or weight</li>
            <li>Having problems with sleep</li>
            <li>Feeling sluggish or agitated</li>
            <li>Having low energy</li>
            <li>Feeling hopeless or worthless</li>
            <li>Having difficulty concentrating</li>
            <li>Having frequent thoughts of death or suicide</li>
          </ul>
          <br />
          <p className="mb-2 font-normal">
            Those experiencing winter-pattern SAD might also notice:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Oversleeping (hypersomnia)</li>
            <li>Overeating, particularly with a craving for carbohydrates</li>
            <li>Weight gain</li>
            <li>Social withdrawal (feeling like “hibernating”)</li>
          </ul>
          <br />
          <p className="mb-2 font-normal">
            Those experiencing summer-pattern SAD might also notice:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>Trouble sleeping (insomnia)</li>
            <li>Poor appetite, leading to weight loss</li>
            <li>Restlessness and agitation</li>
            <li>Anxiety</li>
            <li>Irritability</li>
          </ul>
          <br />
          <p>
            If you think that you may be suffering from SAD, please seek the
            help of a healthcare provider to receive proper diagnosis and
            treatment.
          </p>
          <br />
          <br />
          <h3 class="text-xl mb-2 font-normal">
            Understanding the Underlying Factors
          </h3>
          <p>
            The specific cause behind seasonal depression is still a bit of a
            mystery, but there are several factors that are believed to
            contribute:
          </p>
          <br />
          <p>
            <span class="font-normal mb-1">Circadian Rhythm:</span> Reduced
            sunlight during the fall and winter months can disrupt our internal
            circadian rhythms. This disruption is believed to increase the
            production of the hormone melatonin, which can lead to feelings of
            lethargy and sluggishness. Conversely, increased sunlight during the
            summer months can suppress melatonin production, potentially
            resulting in insomnia.
          </p>
          <br />
          <p>
            <span class="font-normal mb-1">Activity Levels:</span> The colder
            months often mean more time indoors and less physical activity, both
            of which can contribute towards feelings of depression. In contrast,
            summer invites more outdoor activities, raising expectations to be
            more social. This can sometimes lead to increased anxiety and
            feelings of restlessness.
          </p>
          <br />
          <br />
          <h3 class="text-xl mb-2 font-normal">
            Awareness, Empowerment, and Support
          </h3>
          <p>
            Seasonal Affective Disorder underscores the connection between our
            environment and our mental well-being. As the seasons shift, so can
            our mood and energy. But with knowledge and awareness comes
            empowerment. By understanding the nuances of SAD, individuals can
            better identify its signs and seek timely intervention. While the
            causes and manifestations of SAD are complex, recognizing its
            presence is the first step towards managing it. Whether you or
            someone you know is struggling with these seasonal shifts in mood,
            remember that help is available, and no one has to navigate these
            feelings alone.
          </p>
        </div>
      </Layout>
    </>
  );
}
