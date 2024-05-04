import Image from "next/image";

import TeamSection from "./../../../components/sections/whatido";
import DefaultLayout from "../../layout/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <TeamSection />
    </DefaultLayout>
  );
}
