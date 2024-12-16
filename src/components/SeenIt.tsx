import React from 'react';
import { useEffect
  // , useState 
} from 'react';
// import CandidatesAlreadySeen from '../components/CandidatesAlreadySeen';
import type Candidate from '../interfaces/Candidate.interface';

// const RemoveCandidate = () => {
//   const [candidateToBeRemoved, setCandidateToBeRemoved] = useState<Candidate[]>([]);

  function RemoveCandidate(e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  currentlySavedCandidate: boolean | null | undefined,
  // currentlyOnRemoveCandidateList: boolean | null | undefined,
  login: string | null) {
  e.preventDefault();
  if (currentlySavedCandidate) {
    console.log(login);
    let parsedSavedCandidates: Candidate[] = [];

    const storedSavedCandidates = localStorage.getItem('SavedCandidates');
    if (typeof storedSavedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(storedSavedCandidates);
    }
    parsedSavedCandidates = parsedSavedCandidates.filter(
      (Candidate) => Candidate.login !== login
    );
    localStorage.setItem('SavedCandidates', JSON.stringify(parsedSavedCandidates));
    // } else if (currentlyOnRemoveCandidateList) {
    //   let parsedAlreadySeenCandidates: Candidate[] = [];
    //   const storedAlreadySeenCandidates = localStorage.getItem('alreadySeenCandidates');
    //   if (typeof storedAlreadySeenCandidates === 'string') {
    //     parsedAlreadySeenCandidates = JSON.parse(storedAlreadySeenCandidates);
    //   }
    // parsedAlreadySeenCandidates = parsedAlreadySeenCandidates.filter(
    //   (Candidate) => Candidate.login !== login
    // );
    // setCandidateToBeRemoved(parsedAlreadySeenCandidates);
    // localStorage.setItem(
    //   'alreadySeenCandidates',
    //   JSON.stringify(parsedAlreadySeenCandidates)
    // );
  }
}

useEffect(() => {
  const parsedCandidateToBeRemoved = JSON.parse(
    localStorage.getItem('alreadySeenCandidates') as string
  );
  RemoveCandidate(parsedCandidateToBeRemoved);
}, []);

// return (
  //   // <>
  //   //   <h1 className='pageHeader'>Seen It</h1>
  //   //   {(!candidateToBeRemoved?.length || candidateToBeRemoved.length === 0) ? (
    //   //     <h1 style={{ margin: '16px 0' }}>
    //   //       Add Candidates you've already seen here.
    //   //     </h1>
    //   //   ) : (
      //   //     <CandidatesAlreadySeen
      //   //       candidateToBeRemoved={candidateToBeRemoved}
      //   //       removeFromStorage={removeFromStorage}
      //   //     />
      //   //   )}
      //   // </>
      // );
      // };
      
      export default RemoveCandidate;
