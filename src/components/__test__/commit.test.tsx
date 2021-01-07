import { fireEvent, render } from '@testing-library/react';
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

  test('should render the details of the commit when the button is clicked', () => {
    const component = render(<Commit commitData={commitData} index={0} />);

    const accordionItem = component.getByTestId('commitDiv');
    fireEvent.click(accordionItem);
    expect(accordionItem).toHaveTextContent('test@test.com');
    expect(accordionItem).toHaveTextContent('Author: test login');
    expect(accordionItem).toHaveTextContent(
      'Commit url: Take me to the commit!'
    );
  });
});
