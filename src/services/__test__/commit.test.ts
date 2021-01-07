import commitService from '../commits';
import { repoUrl } from '../../constants';
import { CommitData } from '../../models/commitData';
import nock from 'nock';

const testData: CommitData[] = [
  {
    commit: {
      commiter: {
        email: 'test@test.com',
        date: new Date().toString(),
      },

      message: 'test message',
    },
    html_url: 'test.com',
    author: {
      login: 'test login',
      avatar_url: 'avatar.com',
      html_url: 'author.com',
    },
  },
];

it('returns correct data', async () => {
  const scope = nock('https://api.github.com')
    .get(repoUrl)
    .reply(200, testData);

  const response = await commitService.getCommits(repoUrl);
  expect(response).toEqual(testData);
  scope.done();
});
