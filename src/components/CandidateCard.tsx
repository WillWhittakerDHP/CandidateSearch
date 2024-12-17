import React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProps = {
  currentCandidate: Candidate;
  addToSavedList?: (() => void) | null;
  doNotAddToSavedList?: (() => void) | null;
  onSavedList?: boolean | null;
  removeFromStorage?:
    | ((
        // e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        // currentlyOnSavedList: boolean | null | undefined,
        id: string | null
      ) => void) 
    | null;
};

const CandidateCard = ({
  currentCandidate,
  addToSavedList,
  doNotAddToSavedList,
  onSavedList,
  removeFromStorage,
}: CandidateCardProps) => {
  return (
    <>
      {currentCandidate?.login ? (
        <section className='candidateCard'>
          <figure>
            <img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.login}`} />
          </figure>
          <article className='details'>
            <h2>{currentCandidate.login}</h2>
            <p>
              <strong>Name:</strong> {currentCandidate.name}
            </p>
            <p>
              <strong>login:</strong> {currentCandidate.login}
            </p>
            <p>
              <strong>Location:</strong> {currentCandidate.location}
            </p>
            <p>
              <strong>eMail:</strong> {currentCandidate.email}
            </p>
            <p>
              <strong>Link:</strong> {currentCandidate.html_url}
            </p>
            <p>
              <strong>company:</strong> {currentCandidate.company}
            </p>
          </article>
          {onSavedList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(/*e: React.MouseEvent<SVGSVGElement, MouseEvent>*/) =>
                  removeFromStorage?.(
                    // e,
                    // onSavedList,
                    currentCandidate.id
                  )
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToSavedList?.()}
              />
            {/* </aside>
            <aside className='icons'> */}
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={() => doNotAddToSavedList?.()}
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>
      )}
    </>
  );
};

export default CandidateCard;
