import React from 'react';
import cn from 'classnames/bind';

export type Props = {
  alignment: AnimationPlaybackEventInit;
  classes: any;
  subtitle: string;
  variant: any;
}

/**
 * This component contains the subtitle of the current section
 * @param subtitle: content of the subtitle
 * @param alignment: alignment of the subtitle, left or center
 * @param variant: variant of the subtitle
 * @param classes: css class component
 */

const SectionSubtitle = (props: Props) => {
  const {
    alignment,
    classes,
    subtitle,
    variant,
  } = props;

  return (
    <div className={cn(classes.root, classes[alignment], classes[variant])}>{subtitle}</div>
  );
};

SectionSubtitle.defaultProps = {
  variant: 'primary',
  alignment: 'left',
};

export { SectionSubtitle };
