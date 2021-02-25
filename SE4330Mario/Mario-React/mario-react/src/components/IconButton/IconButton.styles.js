import { createStyles } from '@material-ui/core/styles';
import { theme } from '../../config/theme';

const styles = () => createStyles({
  root: {
    width: '100%',
    minWidth: '6.25rem',
    border: '0',
    borderRadius: theme.border.shape.radius,
    cursor: 'pointer',
    fontFamily: theme.font.family.secondary,
    fontWeight: 700,
    fontSize: theme.font.size.primary,
    textAlign: 'center',
    letterSpacing: '.06rem',
    verticalAlign: 'bottom',
    textTransform: 'uppercase',
    webkitTransition: 'background-color 0.5s cubic-bezier(0.23, 1, 0.32, 1), color 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    transition: 'background-color 0.5s cubic-bezier(0.23, 1, 0.32, 1), color 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    overflow: 'hidden',
    '&:disabled': {
      pointerEvents: 'none',
      opacity: '0.5',
    },
  },
  primary: {
    backgroundColor: theme.background.color.main,
    color: theme.font.color.copy.secondary,
    border: `0.125rem solid ${theme.border.color.main}`,
    '&:focus, &:hover': {
      textDecoration: 'none',
      backgroundColor: theme.background.color.darkBlue,
      borderColor: theme.background.color.darkBlue,
      boxShadow: 'none',
      outline: 0,
    },
    '&:active': {
      backgroundColor: theme.background.color.main,
    },
  },
  secondary: {
    backgroundColor: theme.background.color.light,
    color: theme.font.color.primary.main,
    '&:focus, &:hover': {
      backgroundColor: theme.background.color.button,
      boxShadow: 'none',
      outline: 0,
    },
  },
  // TODO: update this to be 'outlinedPrimary'
  outline: {
    border: `0.125rem solid ${theme.border.color.main}`,
  },
  outlineSecondary: {
    // This is for white outlined buttons
    border: `0.125rem solid ${theme.background.color.light}`,
  },
  medium: {
    padding: '0.5rem 0.5rem',
  },
  large: {
    padding: '0.8125rem 1.25rem',
  },
});

export { styles };
