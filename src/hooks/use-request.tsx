import { useState } from 'react';
import { CommitData } from '../models/commitData';
import commitService from '../services/commits';

interface Props {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT';
  body?: any; // In case it is needed for the request
  onSuccess?: (commits: CommitData[]) => void; //In case we need to do something else, e.g: Move to a different route
}

export const useRequest = ({ method, url, body, onSuccess }: Props) => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [commits, setCommits] = useState<CommitData[]>([]);

  const doRequest = async () => {
    try {
      setError(null);
      setCommits([]);
      setLoading(true);
      const response = await commitService.getCommits(url);
      setCommits(commits.concat(response));
      setLoading(false);
      if (onSuccess) {
        onSuccess(commits);
      }
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };
  return { doRequest, error, commits, loading } as const;
};
