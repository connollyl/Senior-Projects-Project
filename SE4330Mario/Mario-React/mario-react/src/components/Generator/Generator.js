/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';
import cloneDeep from 'lodash/cloneDeep';
import SectionWrapper from '../SectionWrapper';
import Input from '../Input';
import SelectBox from '../SelectBox';
import Tooltip from '../Tooltip';

/**
 * WIP NOT DONE----------------------------------------------------------
 * Generates components from json object with the associated handlers and ids
 * @param classes: css injected into the component
 * @param componentJson: json object used to generate the component
 */
export type Props = {
    classes: any,
    componentJson: any,
}

const Generator = (props: Props) => {
  const {
    classes,
    componentJson,
  } = props;
  const componentJsonClone = cloneDeep(componentJson);

  /**
   * Searches for the inputted item in the json body
   * @param {Object} searchableItem Item you are looking for
   * @return {Object} if the item is found the item, otherwise null
   */
  const searchForComponent = (searchableItem) => {
    // Todo search json object for searchableItem
    const foundItem = componentJsonClone.components.find((item) => {
      if (!item) {
        return null;
      }
      return item.name === searchableItem.name && item.id === searchableItem.id;
    });
    return foundItem;
  };

  /**
   * Takes an event and assigns the new value to the json body
   * Note may not be working as intended
   * @param {SyntheticEvent} event event fired by component
   * @return none
   */
  const findAndEdit = (event) => {
    const modifiedItem = event.target;
    const { value } = modifiedItem;
    const foundItem = searchForComponent(modifiedItem);
    if (foundItem) {
      foundItem.value += value;
    }
  };

  /**
   * Generates select boxes
   * WIP
   * @param {Object} component component object from json body used to
   * generate the select box
   * @return {JSX.Element} generated select box
   */
  const renderSelectBox = (component) => {
    return (
      <SelectBox
        things={component.things}
        name={component.title}
        id={component.id}
      />
    );
  };

  /**
   * Generates text boxes from json object
   * WIP
   * @param {Object} component component from json body
   * @return rendered input box
   */
  const renderInput = (component) => {
    if (!component.value) {
      component.value = '';
    }
    const onChange = (event) => {
      findAndEdit(event);
    };
    return (
      <Input
        color="primary"
        label={component.name}
        id={component.id}
        value={component.value}
        name={component.name}
        multiline={false}
        onChange={onChange}
        placeholder={component.placeholder}
        variant="outlined"
      />
    );
  };

  /**
   * Adds tool tips to component if the component specifies it
   * @param {Object} component component object from json body
   * @return {JSX.Element} tool tipped element
   */
  const renderToolTips = (component) => {
    return (
      <Tooltip title={component.tooltip} placement="bottom-start">
        <Fragment key={component.id}>
          {component.type === 'Input' && (
            renderInput(component)
          )}
          {component.type === 'SelectBox' && (
            renderSelectBox(component)
          )}
        </Fragment>
      </Tooltip>
    );
  };

  /**
   * Adds grids onto the object, fills up the box if they are full or
   * half for non mobile devices if half is specified (full otherwise)
   * @param {Object} component component object from the json body
   * @return {JSX.Element} generated component with grid surrounding it
   */
  const renderGridComponents = (component) => {
    return (
      <Fragment>
        { component.width === 'full'
          && (
          <Grid item xs={12}>
            {renderToolTips(component)}
          </Grid>
          )}
        { component.width === 'half'
          && (
          <Grid item xs={12} sm={6}>
            {renderToolTips(component)}
          </Grid>
          )}
      </Fragment>
    );
  };

  /**
   * Handles mapping of the inputted json object to individuals components
   * @return {JSX.Element} generated components from json body
   */
  const renderComponents = () => {
    const { components } = componentJsonClone;
    return (
      <Fragment>
        {components.map(component => (
          <Fragment key={uuid()}>
            {renderGridComponents(component)}
          </Fragment>
        ))}
      </Fragment>
    );
  };

  return (
    <div className={classes.root} >
      <SectionWrapper
        border
        title={componentJsonClone.sectionTitle}
        icon={componentJsonClone.sectionIcon || 'code'}
        sectionTitleVariant="primary"
      >
        <Grid container spacing={1}>
          {renderComponents()}
        </Grid>
      </SectionWrapper>
    </div>
  );
};

export { Generator };
