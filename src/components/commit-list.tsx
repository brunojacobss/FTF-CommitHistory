import React, { useCallback, useEffect } from 'react';
import { repoUrl } from '../constants';
import { useRequest } from '../hooks/use-request';

export const CommitList: React.FC = () => {
  const { doRequest, commits, error } = useRequest({
    url: repoUrl,
    method: 'GET',
  });

  const fetchCommits = useCallback(() => {
    doRequest();
  }, []);

  useEffect(() => {
    fetchCommits();
  }, []);

  const commitList = commits.map((commitData) => {
    return <li key={commitData.commit.message}>{commitData.commit.message}</li>;
  });

  const handleClick = () => {
    fetchCommits();
  };

  return (
    <div>
      <ul>{commitList}</ul>
      <button data-testid="getCommitsButton" onClick={handleClick}>
        get commits
      </button>
    </div>
  );
};
