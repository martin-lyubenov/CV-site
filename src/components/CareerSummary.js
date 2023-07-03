import Card from "../UI/Card";
import Heading from "../UI/Heading";
import Section from "../UI/Section";

const CareerSummaryCard = ({ entry }) => {
  return (
    <div>
      <h2 className=" font-bold md:text-xl lg:text-2xl">{entry.name}</h2>
      <p className="md:text-xl lg:text-2xl">{entry.company}</p>
      <ul className="list-disc">
        {entry.listTitle && (
          <p className="md:text-xl lg:text-2xl">{entry.listTitle}</p>
        )}
        {entry.list.map((listItem, i) => (
          <li className="md:text-xl lg:text-2xl" key={i}>
            {listItem.info}
          </li>
        ))}
      </ul>
    </div>
  );
};

function CareerSummary({ careerSummaryEntires }) {
  return (
    <Section index={1}>
      <Heading projectName="Career Summary" index={1} />
      <Card index={1}>
        {careerSummaryEntires.map((entry, i) => (
          <CareerSummaryCard key={i} entry={entry} />
        ))}
      </Card>
    </Section>
  );
}

export default CareerSummary;
