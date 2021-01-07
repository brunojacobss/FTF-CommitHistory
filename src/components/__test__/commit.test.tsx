import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
} from '@testing-library/react';
import { CommitData } from '../../models/commitData';
import { Commit } from '../commit';

describe('Blog component', () => {
  let commitData: CommitData;
  beforeEach(() => {
    commitData = {
      commit: {
        committer: {
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
    };
  });

  test('should only render message and avatar by default', () => {
    const component = render(
      <Commit
        author={commitData.author}
        commit={commitData.commit}
        html_url={commitData.html_url}
      />
    );
    const div = component.getByTestId('commitDiv');
    expect(div).toHaveTextContent('test message');
    expect(div).not.toHaveTextContent('test login');
    expect(div).not.toHaveTextContent('test.com');
  });

  test('should render the details of the commit when the button is clicked', () => {
    const component = render(
      <Commit
        author={commitData.author}
        commit={commitData.commit}
        html_url={commitData.html_url}
      />
    );

    const button = component.getByTestId('expand');
    fireEvent.click(button);
    const div = component.getByTestId('togglable');
    expect(div).toHaveTextContent('test@test.com');
    expect(div).toHaveTextContent('Author: test login');
    expect(div).toHaveTextContent('Commit url: Take me to the commit!');
  });
});
