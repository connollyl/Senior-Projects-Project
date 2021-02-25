import React, { ReactNode, isValidElement, cloneElement } from 'react';
import Grid from '@material-ui/core/Grid';
import cn from 'classnames';
import Icon from '../Icon';
import Title from '../Title';
import SectionSubtitle from '../SectionSubtitle';

/**
 * Enables components to be placed together in a nice confind box with headers if desired
 * @param align: alignment of the title
 * @param border: Rather or not the section has a border
 * @param children: children placed inside of the component
 * @param classes: css classes injected into the component
 * @param containerBackground: rather or not a light grey background will appear on the component
 * @param containerPadding: rather or not padding is attached to the section wrapper
 * @param icon: icon used for the title of the section wrapper
 * @param id: unique id needed for the dom
 * @param subtitle: small text located under the title
 * @param title: Title located directly above the section wrapper
 */
export type Props = {
    align: Align;
    border: boolean;
    children: ReactNode;
    classes: any;
    containerBackground: boolean;
    containerPadding?: boolean;
    icon: string;
    id: string;
    title: string;
    subtitle: any; // TODO: get actual type
    sectionTitleVariant: any;
  };

const SectionWrapper = (props: Props) => {
  const getTitleVariant = () => {
    const { sectionTitleVariant } = props;
    if (sectionTitleVariant === 'primary') {
      return {
        size: 'medium',
        color: 'primary',
        variant: 'capitalize',
      };
    }
    if (sectionTitleVariant === 'secondary') {
      return {
        size: 'small',
        color: 'secondary',
        variant: 'uppercase',
      };
    }
    if (sectionTitleVariant === 'tertiary') {
      return {
        size: 'medium',
        color: 'agent',
        variant: 'capitalize',
      };
    }
    return {};
  };
  const {
    align,
    border,
    children,
    classes,
    containerBackground,
    containerPadding,
    icon,
    id,
    subtitle,
    title,
  } = props;
  const iconID = `icon-${icon}`;
  const variantProps = getTitleVariant();
  return (
    <div id={id} className={classes.root}>
      <Grid container className={classes.header} justify="flex-start">
        {icon && (
        <Grid item className={classes.icon}>
          <div>
            <Icon id={iconID} icon={icon} size="extraLarge" variant="copy" />
          </div>
        </Grid>
        )}
        <Grid item>
          {title && (
          <Grid item>
            <Title
              title={title}
              align={align}
              weight="normal"
              {...variantProps}
            />
          </Grid>
          )}
        </Grid>
        <Grid container className={classes.header} justify="flex-start">
          {subtitle && (
          <Grid item className={classes.subtitle}>
            {isValidElement(subtitle) ? (
              cloneElement(subtitle, {})
            ) : (
              <SectionSubtitle subtitle={subtitle} variant="tertiary" />
            )}
          </Grid>
          )}
        </Grid>
      </Grid>
      <Grid
        xs={12}
        container
        item
        className={cn(
          { [classes.section]: !containerBackground },
          { [classes.sectionBackground]: containerBackground },
          { [classes.noPadSection]: !containerPadding },
          { [classes.border]: border },
        )}
      >
        {children}
      </Grid>
    </div>
  );
};

SectionWrapper.defaultProps = {
  containerPadding: true,
  containerBackground: false,
  align: 'flex-start',
};

export { SectionWrapper };
