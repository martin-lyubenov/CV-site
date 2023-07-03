import Card from "../UI/Card";
import Heading from "../UI/Heading";
import Section from "../UI/Section";

const EducationalInstitutionCard = ({ institution }) => {
  return (
    <div>
      <h2 className="font-bold pb-4 md:text-xl lg:text-2xl">{institution.name}</h2>
      <p className="pb-4 md:text-xl lg:text-2xl">{institution.classType}</p>
      <ul className=" list-disc">
        {institution.listTitle ? <p className="md:text-xl lg:text-2xl">{institution.listTitle}</p> : null}
        {institution.list.map((listItem, i) => (
          <li key={i} className="md:text-xl lg:text-2xl">{listItem.module}</li>
        ))}
      </ul>
    </div>
  );
};

function Education({ educationalInstitutions }) {
  return (
    <Section index={0}>
      <Heading projectName="Educational Trainin" index={0} />
      <Card index={0}>
        {educationalInstitutions.map((institution, i) => (
          <EducationalInstitutionCard key={i} institution={institution} />
        ))}
      </Card>
    </Section>
  );
}

export default Education;
