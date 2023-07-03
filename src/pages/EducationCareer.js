import CareerSummary from "../components/CareerSummary";
import Education from "../components/Education";

import { info } from "../info/info";

function EducationCareerPage(params) {
  const educationalInstitutions = info.educationalInstitutions;
  const careerSummaryEntires = info.careerSummaryEntires;

  return (
    <>
      <Education educationalInstitutions={educationalInstitutions} />
      <CareerSummary careerSummaryEntires={careerSummaryEntires} />
    </>
  );
}

export default EducationCareerPage;
