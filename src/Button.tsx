/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  outline?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  ${({ primary, outline }) => {
    if (primary) {
      return `
        background-color: #3b82f6; /* blue-500 */
        color: white;
        &:hover {
          background-color: #2563eb; /* blue-600 */
        }
      `;
    }
    if (outline) {
      return `
        background-color: transparent;
        color: #3b82f6;
        border-color: #3b82f6;
        &:hover {
          background-color: #ebf4ff; /* light blue background */
        }
      `;
    }
    // default button
    return `
      background-color: #e5e7eb; /* gray-200 */
      color: #111827; /* gray-900 */
      &:hover {
        background-color: #d1d5db; /* gray-300 */
      }
    `;
  }}
`;

const Button: React.FC<ButtonProps> = ({ primary, outline, children, ...props }) => {
  return (
    <StyledButton primary={primary} outline={outline} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
