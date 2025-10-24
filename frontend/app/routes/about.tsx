import Navbar from "~/components/Navbar";
import LeadGenerationForm from "~/components/LeadGenerationForm";

import MathiasHaugsbøBilde from "~/assets/portraits/Mathias-Haugsbø.jpg";
import SarahSleemanBilde from "~/assets/portraits/Sarah-Sleeman.jpg";
import NjålEliassonBilde from "~/assets/portraits/Njal-Eliasson.jpg";
import ErikHoffmannDahlBilde from "~/assets/portraits/Erik-Hoffmann-Dahl.jpeg";
import EndreNesvollJenssen from "~/assets/portraits/Endre-Nesvoll-Jenssen.jpeg";
import Footer from "~/components/Footer";
import DAbout from "~/components/ui/sharedPages/About";
import TeamPhotoPicture from "~/assets/portraits/Teambilde.webp";

export default function About() {
  const teamMembers = [
    {
      fullName: "Sarah Sleeman",
      role: "Daglig leder",
      description:
        "Sarah har solid bakgrunn fra både eiendom og bank, og lang erfaring som eiendomsmegler. Hun kombinerer operativ innsikt med kommersiell teft og jobber for å gjøre eiendomsforvaltning enklere, smartere og mer lønnsom.",
      image: SarahSleemanBilde,
      phone: "+47 412 79 878",
      email: "sarah@digihome.no",
    },
    {
      fullName: "Njål Eliasson",
      role: "Analytiker & forretningsutvikler",
      description:
        "Njål er siviløkonom fra NHH og grunnla Heimby - forgjengeren til DigiHome i 2022. Han har en bred erfaring innenfor tech startups, finans, logistikk og AI.",
      image: NjålEliassonBilde,
      phone: "",
      email: "njal@digihome.no",
    },
    {
      fullName: "Endre Nesvoll-Jenssen",
      role: "Salgsagent",
      description:
        "Endre er en erfaren salgsagent med bakgrunn fra eiendom og teknologi. Han brenner for å hjelpe kunder med å finne de beste løsningene for sine behov, og jobber tett med teamet for å utvikle innovative tjenester.",
      image: EndreNesvollJenssen,
      phone: "+47 481 31 461",
      email: "endre@digihome.no",
    },

    {
      fullName: "Mathias Haugsbø",
      role: "Teknisk sjef",
      description:
        "Med utdanning i økonomi og IT, er Mathias en kommersiell utvikler og bygger system som gjør utleien autonom for deg. Mathias har vært med på å bygge opp startups og scale-ups helt fra bunn. Som gründer er han hjernen bak vår teknologiske plattform.",
      image: MathiasHaugsbøBilde,
      phone: "",
      email: "mathias@digihome.no",
    },
    {
      fullName: "Erik Hoffmann-Dahl",
      role: "Styreleder",
      description:
        "Erik er styreleder og har lang erfaring som advokat, og er en viktig støttespiller for DigiHome.",
      image: ErikHoffmannDahlBilde,
      phone: "",
      email: "",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar isTransparent={false} />
        <DAbout
          teamMembers={teamMembers}
          TeamPhotoPicture={TeamPhotoPicture}
          leadGenerationForm={<LeadGenerationForm />}
        />
        <Footer width="max-w-4xl" px="px-4" />
      </div>
    </>
  );
}
