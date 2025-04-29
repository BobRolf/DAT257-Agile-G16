import Card from "./Card";

const FactsCard: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white", // Add a white background
        padding: "2rem", // Add padding around the content
        marginBottom: "2rem", // Add margin to prevent content from being too close to the bottom
      }}
    >
      <Card
        image="/src/assets/solar-chart.PNG"
        title="Facts about Solar-panels and environmental impacts"
        text={
          "The idea behind solar power began in 1839 with the discovery of the photovoltaic effect. In 1954, the first efficient solar cell was developed by Bell Labs. Over time, solar technology became more affordable and widespread, especially from the 2000s onward.\n\n" +
          "Solar panels generate electricity by converting sunlight into energy using photovoltaic (PV) cells. When sunlight hits these cells, it creates an electric current, which is then converted from direct current (DC) to usable alternating current (AC) by an inverter. This clean energy can power homes or be stored in batteries for later use.\n\n" +
          "Solar panels are good for the environment because they produce clean energy without pollution. They reduce reliance on fossil fuels, lower greenhouse gas emissions, and use minimal water. This makes them a key solution for fighting climate change and achieving UN Goal 7: affordable and clean energy for all.\n\n" +
          "You can use the button below to calculate your solar energy needs, how you can benefit the environment and see how much you can save by switching to solar power."
        }
        buttonText="To Solar Calculator"
        buttonLink="/calculator"
      >
        <div className="additional-info" style={{ marginTop: "1rem" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>Did you know?</h1>
            <h5 style={{ fontStyle: "italic" }}>
              How Solar panels impact the environment?
            </h5>
          </div>
          <ul style={{ fontWeight: "bold" }}>
            <div style={{ marginLeft: "1rem" }}>{"Positive impacts"}</div>
            <ul style={{ fontWeight: "normal", maxWidth: "700px" }}>
              <li>
                Unlike fossil fuels (coal, oil, natural gas), solar panels
                produce electricity without releasing carbon dioxide (CO₂) or
                other harmful gases into the atmosphere.
              </li>
              <li>
                Solar energy helps cut down smog, acid rain, and respiratory
                health issues caused by burning fossil fuels.
              </li>
              <li>
                Traditional power plants (especially nuclear and coal) require
                enormous amounts of water for cooling. Solar panels, especially
                rooftop solar, use minimal to no water during operation.
              </li>
              <li>
                Solar installations can coexist with farming (e.g.,
                "agrivoltaics" — growing crops under solar panels), making more
                efficient use of land.
              </li>
            </ul>
            <br />
            <div style={{ marginLeft: "1rem" }}>{"Negative impacts"}</div>
            <ul style={{ fontWeight: "normal", maxWidth: "700px" }}>
              <li>
                Manufacturing solar panels requires energy and resources, which
                can lead to pollution if not managed properly.
              </li>
              <li>
                Some solar farms can disrupt local ecosystems, especially if
                built on previously undeveloped land.
              </li>
              <li>
                Disposal of old or damaged solar panels can pose environmental
                challenges if not recycled properly.
              </li>
            </ul>
          </ul>
          <div>
            <h5 style={{ fontStyle: "italic", textAlign: "center" }}>
              What UN goal number 7 was?
            </h5>
            <p
              style={{
                fontStyle: "italic",
                textAlign: "center",
                margin: "0 auto",
                maxWidth: "700px",
                lineHeight: "1.5",
              }}
            >
              "The Global Goals and the 2030 Agenda for Sustainable Development
              seek to end poverty and hunger, realise the human rights of all,
              achieve gender equality and the empowerment of all women and
              girls, and ensure the lasting protection of the planet and its
              natural resources. The Global Goals are integrated and
              indivisible, and balance the three dimensions of sustainable
              development: the economic, social and environmental." - Government
              Offices of Sweden
            </p>
            <div style={{ textAlign: "center" }}>
              <img
                src="/src/assets/theglobalgoals_icons_color_goal_7.png"
                alt="UN Goal 7"
                style={{ width: "50%", height: "auto", marginTop: "1rem" }}
              />
              <br />
              <p
                style={{
                  textAlign: "left",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: "1.5",
                }}
              >
                UN Sustainable Development Goal 7 (SDG 7) is about ensuring
                access to affordable, reliable, sustainable, and modern energy
                for all. It focuses on expanding access to electricity,
                increasing the use of renewable energy sources like solar and
                wind, and improving energy efficiency. The goal also encourages
                international cooperation and investment in clean energy
                infrastructure, especially in developing countries where
                millions of people still live without electricity. This goal is
                important because energy is essential for nearly every aspect of
                daily life — from lighting homes and powering schools to running
                hospitals and businesses. Without reliable energy, economic
                development, education, and health systems struggle to grow. At
                the same time, using fossil fuels to meet energy needs
                contributes to climate change and environmental damage. SDG 7
                supports a global shift toward clean energy, which helps reduce
                poverty, improve public health, and protect the planet for
                future generations.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          <h5>Sources:</h5>
          <ul
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <li>
              United Nations Sustainable Development Goals - Goal 7: Affordable
              and Clean Energy.{" "}
              <a
                href="https://www.un.org/sustainabledevelopment/energy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.un.org/sustainabledevelopment/energy/
              </a>
            </li>
            <li>
              Government Offices of Sweden - The Global Goals and the 2030
              Agenda for Sustainable Development.{" "}
              <a
                href="https://www.government.se/government-policy/the-global-goals-and-the-2030-agenda-for-sustainable-development/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.government.se/government-policy/the-global-goals-and-the-2030-agenda-for-sustainable-development/
              </a>
            </li>
            <li>
              Bell Labs - History of Solar Cells.{" "}
              <a
                href="https://www.bell-labs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bell-labs.com/
              </a>
            </li>
            <li>
              National Renewable Energy Laboratory (NREL) - Solar Energy Basics.{" "}
              <a
                href="https://www.nrel.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.nrel.gov/
              </a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};
export default FactsCard;
