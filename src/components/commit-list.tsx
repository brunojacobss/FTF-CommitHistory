/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Skeleton from 'react-loading-skeleton';
import { repoUrl } from '../constants';
import { useRequest } from '../hooks/use-request';
import { Commit } from './commit';

export const CommitList: React.FC = () => {
  const { doRequest, commits, error, loading } = useRequest({
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

  const commitList = commits.map((commitData, index) => {
    return (
      <Commit
        key={commitData.commit.message}
        commitData={commitData}
        index={index}
      />
    );
  });

  const handleClick = () => {
    fetchCommits();
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button
        variant="dark"
        onClick={handleClick}
        disabled={loading}
        data-testid="getCommitsButton"
        style={{ marginBottom: 24 }}
      >
        {loading ? 'Loading...' : 'Get commits'}
      </Button>
      <Accordion style={{ marginBottom: 24 }}>
        {loading ? <Skeleton count={20} /> : commitList}
      </Accordion>
    </div>
  );
};
