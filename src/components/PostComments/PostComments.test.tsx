import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

const addComment = (text) => {
  fireEvent.change(screen.getByTestId('comment-textarea'), {
    target: {
      value: text,
    },
  });
  fireEvent.click(screen.getByTestId('comment-button'));
};

describe('PostComment Test', () => {
  it('Should render correctly', () => {
    render(<PostComment />);
    expect(screen.getByTestId('comment-button')).toBeInTheDocument();
  });

  it('Should add 2 comments to the list', () => {
    render(<PostComment />);

    addComment('First comment added through tests');
    addComment('Second comment added through tests');

    expect(screen.getAllByTestId('post-comment-element')).toHaveLength(2);
  });
});
