import Header from "../components/Header";
import Stack from "../components/Stack";

import { info } from "../info/info";

function HeaderPage(params) {
  const header = info.header;
  const stack = info.stack;

  return (
    <>
      <Header header={header} />
      <Stack stack={stack} />
    </>
  );
}

export default HeaderPage;
