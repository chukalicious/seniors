const Vaccines = () => {
  return (
    <div>
      <div
        className="hero min-h-[45vh] border-t-8 border-neutral "
        style={{
          backgroundImage: `url("https://live.staticflickr.com/65535/52540022217_541008c386_z.jpg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mt-40 uppercase font-semibold text-primary-secondary">
              For older adults, vaccines provide a pathway to connection.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="p-2 text-justify">
          Many older adults were Isolated in the pandemic. Social centers for
          ageing adults were forced to close in-person services and health
          concerns made it difficult to see friends and family members.
        </p>
        <p className="p-2 text-justify">
          As older adults navigate the world in the age of COVID-19, getting
          vaccinted and boosted can be first step to normalcy, and is literally
          the ticket to most opportunities to socialize. Vaccines have provied a
          pathway to more safely interact with others in person, and about 85%
          of Californians aged 65 and above are fully vaccinated. They want to
          regain their social lives, and for many, that desire was a major
          contributor in their desition to get vaccinated.
        </p>
        <p className="p-2 text-justify">
          Gilbert King, a participant in one of the 271 adult day centers in
          California, said that while he loves his dog, Gorgeous, interacting
          with his pet was not the same as being with friends. He's a pool shark
          and loves fitness-centered group activities.{" "}
        </p>
        <p className="p-2 text-justify">
          When asked what it was like to get back to the center, he said, "It's
          been good to come back and talk and learn new things. I'm thankful to
          be here."
        </p>
        <p className="p-2 text-justify">
          Tsiliy Tankover, another adult center participant, was delighted when
          she learned members could return if they were vaccinated.
        </p>
        <p className="p-2 text-justify">
          <span className="font-bold text-lg text-primary-content">
            "It (the center) is a place full of life... I'm just so hapy to be
            around my friends."
          </span>
        </p>
        <p className="p-2 text-justify">
          The onus to get vaccinated and boosted does not just fall on the older
          populaton. By keeping up with vaccinations of all kinds for COVID-19
          and for other illnesses, younger adults in California will also help
          ensure that the older population stays healthy, active, and connected.
        </p>
        <p className="p-2 text-justify">
          Regardless of insurance or immigration status, older adults can now
          get their free vaccination or booster shot. Free transportation and
          in-home appointments are also available. Visit{" "}
          <a
            className="hover:font-bold underline"
            href="https://myturn.ca.gov/"
            target="_"
          >
            www.myturn.ca.gov
          </a>{" "}
          or call{" "}
          <a href="tel:8334224255" className="underline hover:font-bold">
            (833)-422-4255
          </a>{" "}
          for more information.{" "}
        </p>
      </div>
    </div>
  );
};

export default Vaccines;
