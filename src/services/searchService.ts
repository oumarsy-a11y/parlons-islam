import { hadiths } from "@/data/hadiths";
import { fiqh } from "@/data/fiqh";


export interface SearchResult {

  id: number;
  title: string;
  type: string;
  path: string;
  description: string;

}



export function searchContent(
  query: string
): SearchResult[] {


  if (!query.trim()) {
    return [];
  }


  const normalizedQuery =
    query.toLowerCase();



  const results: SearchResult[] = [];




  // Recherche dans les Hadiths

  hadiths.forEach((hadith) => {


    const content = `
      ${hadith.title}
      ${hadith.text}
      ${hadith.explanation}
      ${hadith.category}
    `.toLowerCase();



    if (content.includes(normalizedQuery)) {


      results.push({

        id: hadith.id,

        title: hadith.title,

        type: "Hadith",

        path: `/hadiths/${hadith.id}`,

        description: hadith.text,

      });


    }


  });






  // Recherche dans le Fiqh malikite

  fiqh.forEach((article) => {


    const content = `
      ${article.title}
      ${article.category}
      ${article.content}
      ${article.source}
    `.toLowerCase();



    if (content.includes(normalizedQuery)) {


      results.push({

        id: article.id,

        title: article.title,

        type: "Fiqh malikite",

        path: `/fiqh-malikite/${article.id}`,

        description: article.content,

      });


    }


  });





  return results;

}