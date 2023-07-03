import Contacts from "../components/Contacts";
import { info } from "../info/info";

function ContactsPage(params) {
  const contactInfo = info.contactInfo;

  return <Contacts contactInfo={contactInfo} />;
}

export default ContactsPage;
