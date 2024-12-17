import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';

import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [candidateArray, setCandidateArray] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    login: '',
    id: '',
    location: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
  });  
  
  const collectCandidates = async () => {
    const candidatesForTheArray = await searchGithub();
    setCandidateArray(candidatesForTheArray);
  };
    
    const displayNextCandidate = useCallback (() => {
      setCurrentCandidate(candidateArray[currentIndex] || {});
      async () => {
        await searchGithubUser(currentCandidate);
      }
    },[candidateArray, currentIndex, currentCandidate]);
    
    useEffect(() => {collectCandidates();}, []);
    useEffect(() => {displayNextCandidate();}, [displayNextCandidate]);
    
    const moveToNextIndex = () => {
      setCurrentIndex((oldCurrentIndex) => oldCurrentIndex + 1);
      if (currentIndex > candidateArray.length) {
        console.log("No more candidates to display: better luck dehumanizing developers next time");
      }
    };
  
    const addToSavedList = () => {
      let parsedSavedCandidates: Candidate[] = [];
      const storedSavedCandidates = localStorage.getItem('SavedCandidates');
      if (typeof storedSavedCandidates === 'string') {
        parsedSavedCandidates = JSON.parse(storedSavedCandidates);
      }
      parsedSavedCandidates.push(currentCandidate);
      localStorage.setItem('SavedCandidates', JSON.stringify(parsedSavedCandidates));
      moveToNextIndex();
      displayNextCandidate();
    };

    const doNotAddToSavedList = () => {
      moveToNextIndex();
      displayNextCandidate();
    };
  

  return (
    <>
    <CandidateCard 
      currentCandidate={currentCandidate}
      addToSavedList={addToSavedList}
      doNotAddToSavedList={doNotAddToSavedList}
      />
    </>
  );
};

export default CandidateSearch;

/*
// TODO: WHEN the candidate search page loads, the information for one candidate should be displayed
// TODO: WHEN I click the "+" button, the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
// TODO: WHEN I click the "-" button, the next candidate's information should be displayed without saving the current candidate
TODO: WHEN there are no candidates available to review, an appropriate message should be shown indicating no more candidates are available
// TODO: WHEN the "saved candidates" page loads, the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company
// TODO: WHEN the page reloads, the list of potential candidates should persist and be available for viewing
TODO: WHEN there are no potential candidates, an appropriate message should be displayed indicating no candidates have been accepted
*/