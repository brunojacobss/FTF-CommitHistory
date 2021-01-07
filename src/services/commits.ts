import { request } from '@octokit/request';
import { CommitData } from '../models/commitData';

const getCommits = async (url: string) => {
  try {
  } catch (error) {}
  let commits: CommitData[] = [];
  const requestWithAuth = request.defaults({
    headers: {
      authorization: 'token 4a742187365902d9e015b44e39b880b1beee7cc0',
    },
  });
  const response = await requestWithAuth(`GET ${url}`);
  for (const commitData of response.data) {
    const { author, commit, html_url } = commitData;
    commits.push({ author, commit, html_url });
  }
  return commits;
};

const commitService = { getCommits };

export default commitService;
