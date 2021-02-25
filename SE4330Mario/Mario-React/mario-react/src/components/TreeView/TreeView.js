import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import cn from 'classnames';
import uuid from 'uuid/v4';

/**
* The purpose of this component is to gather an array of the files
* in a repo and allow the user to select one or more of those files.
* @param classes: css classes to the html components
* @param children: array of files and folders to display
*/
export type Props = {
    classes: any,
    children: any,
}

/*
TODO: figure out how to properly get multiselect to work and
learn how to be able to select folders as well.
*/
const Treeview = (props: Props) => {
  const {
    classes,
    children,
  } = props;

  const renderTree = (nodes) => {
    return (
      <TreeItem key={uuid()} nodeId={nodes.id} label={nodes.value}>
        {Array.isArray(nodes.nodes) ? nodes.nodes.map(node => renderTree(node)) : null}
      </TreeItem>
    );
  };
  return (
    <TreeView
      className={cn(classes.root, classes.item)}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      // multiselect
    >
      {renderTree(children)}
    </TreeView>
  );
};

export { Treeview };
