import { request } from '@octokit/request';
import { CommitData } from '../models/commitData';

const getCommits = async (url: string) => {
  try {
  } catch (error) {}
  let commits: CommitData[] = [];
  const response = await request(`GET ${url}`);
  for (const commitData of response.data) {
    const { author, commit, html_url } = commitData;
    commits.push({ author, commit, html_url });
  }
  return commits;
};

const commitService = { getCommits };

export default commitService;
