// import React from 'react';
// import type Candidate from '../interfaces/Candidate.interface';
// import CandidateCard from './CandidateCard';

// interface CandidatesToSaveProps {
//   candidatesToSave: Candidate[];
//   removeFromStorage:
//     | ((
//         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//         currentlyOnSaveList: boolean | null | undefined,
//         title: string | null
//       ) => void)
//     | null;
// }

// const CandidatesToSaveList = ({
//   candidatesToSave,
//   removeFromStorage,
// }: CandidatesToSaveProps) => {
//   console.log(candidatesToSave);

//   return (
//     <>
//       <ul>
//         {candidatesToSave.map((candidate) => (
//           <CandidateCard
//             currentCandidate={candidate}
//             key={candidate.login}
//             onSavedList={true}
//             removeFromStorage={removeFromStorage}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default CandidatesToSaveList;
