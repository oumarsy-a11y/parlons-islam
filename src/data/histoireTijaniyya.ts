export interface SectionTijaniyya {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  source?: string;
}


export const histoireTijaniyya: SectionTijaniyya[] = [

  {
    id: "contexte-avant-tijaniyya",

    title: "1. Le monde musulman avant l'apparition de la Ṭarîqa Tijāniyya",

    subtitle: "Le contexte religieux et spirituel du XVIIIᵉ siècle",

    content: [
      "Avant l'apparition de la Ṭarîqa Tijāniyya, le monde musulman traversait une période importante de son histoire.",
      "La transmission du savoir religieux demeurait vivante à travers les mosquées, les écoles et les savants.",
      "Dans les régions du Maghreb, l'école malikite occupait une place centrale dans l'enseignement religieux.",
      "De nombreux musulmans recherchaient également la purification du cœur et le degré de l'Iḥsân.",
      "Les voies spirituelles transmettaient le dhikr, l'éducation du comportement et le cheminement intérieur.",
      "Plusieurs ṭuruq existaient déjà avant la Ṭarîqa Tijāniyya.",
      "Les maîtres du Taṣawwuf rappelaient que la spiritualité authentique reste liée à la Sharîʿa.",
      "C'est dans cet environnement que Cheikh Aḥmad at-Tijânî رضي الله عنه allait apparaître."
    ],

    source:
      "Jawāhir al-Maʿānī - Sources historiques du Maghreb islamique"
  }

];


export default histoireTijaniyya;