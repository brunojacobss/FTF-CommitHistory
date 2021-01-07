import React, { useCallback, useEffect } from 'react';
import { repoUrl } from '../constants';
import { useRequest } from '../hooks/use-request';
import { Commit } from './commit';

export const CommitList: React.FC = () => {
  const { doRequest, commits, error } = useRequest({
    url: repoUrl,
    method: 'GET',
  });

  console.log(commits);

  const fetchCommits = useCallback(() => {
    doRequest();
  }, []);

  useEffect(() => {
    fetchCommits();
  }, []);

  const commitList = commits.map(({ author, commit, html_url }) => {
    return (
      <Commit
        key={commit.message}
        author={author}
        commit={commit}
        html_url={html_url}
      />
    );
  });

  const handleClick = () => {
    fetchCommits();
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {commitList}
      <button data-testid="getCommitsButton" onClick={handleClick}>
        get commits
      </button>
    </div>
  );
};
