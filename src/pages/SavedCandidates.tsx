import React from "react";
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";
import { useEffect, useState } from "react";

interface SavedCandidatesProps {
  SavedCandidates: Candidate[];
  // removeFromStorage: 
  // | ((
  //   e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  //   currentlyOnSavedList: boolean | null | undefined,
  //   login: string | null
  // ) => void)
  // | null;
}

  const SavedCandidates = () => {
  // removeFromStorage,
  // }: SavedCandidatesProps) => {
    
    const [SavedCandidates, setSavedCandidates] = useState<Candidate[]> ([]);
    
  useEffect (() => {
  const data = JSON.parse(localStorage.getItem('SavedCandidates')) || [];
  setSavedCandidates(data);
}, []);


    const removeFromStorage = (id) => {
      console.log(id)
      const updatedData = SavedCandidates.filter(c=>c.id !== id)
      localStorage.setItem('SavedCandidates', JSON.stringify(updatedData));
      setSavedCandidates(updatedData);
      console.log(SavedCandidates);
    }
  
    return (
      <>
        <ul>
          {SavedCandidates.map((Candidate) => (
            <CandidateCard
              currentCandidate={Candidate}
              key={Candidate.login}
              onSavedList={true}
              removeFromStorage={removeFromStorage}
            /> 
          )
        )}
        </ul>
      </>
    );


  };
  
export default SavedCandidates;


// interface CandidatesInStorageProps {
//   storedCandidatesInStorage;
//   removeFromStorage:
//   | ((
//     e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//     currentlyOnSavedList: boolean | null | undefined,
//     login: string | null
//   ) => void)
//   | null;
// }

// // const ShowCandidatesInStorage = () => {
//   const CandidatesInStorage = ({
//     storedCandidatesInStorage,
//     removeFromStorage,
//   }: CandidatesInStorageProps) => {
//     if (storedCandidatesInStorage) {
//       let SavedCandidates: Candidate[] = [];
      
//       const currentlySavedCandidates = localStorage.getItem('SavedCandidates');
//       if (typeof currentlySavedCandidates === 'string') {
//         SavedCandidates = JSON.parse(currentlySavedCandidates);
//       }
//     console.log(SavedCandidates[0]);
    
//     return (
//       <>
//         <ul> CandidateCard
//           {SavedCandidates.map((Candidate) => (
//             <CandidateCard
//               currentCandidate={Candidate}
//               key={Candidate.login}
//               onSavedList={true}
//               removeFromStorage={removeFromStorage}
//             />
//           ))}
//         </ul>
//       </>
//     );
//   }
// };
// export default CandidatesInStorage;
