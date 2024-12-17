import React from "react";
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";
import { useEffect, useState } from "react";

const SavedCandidates = () => {

  const [SavedCandidates, setSavedCandidates] = useState<Candidate[]> ([]);
  
  useEffect (() => {
    const data = JSON.parse(localStorage.getItem('SavedCandidates') as string);
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