import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('PostComment Test', () => {
  it('Should render correctly', () => {
    render(<PostComment />);
    expect(screen.getByTestId('comment-button')).toBeInTheDocument();
  });

  it('Should add 2 comments to the list', () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId('comment-textarea'), {
      target: {
        value: 'First comment added through tests',
      },
    });
    fireEvent.click(screen.getByTestId('comment-button'));

    fireEvent.change(screen.getByTestId('comment-textarea'), {
      target: {
        value: 'Second comment added through tests',
      },
    });
    fireEvent.click(screen.getByTestId('comment-button'));

    expect(screen.getAllByTestId('post-comment-element')).toHaveLength(2);
  });
});
