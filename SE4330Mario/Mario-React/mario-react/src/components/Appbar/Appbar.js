import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';
import * as tooltips from '../../constants/tooltip-constants';
import Button from '../IconButton';
import Tooltip from '../Tooltip';
import Drawer from '../Drawer';
import SelectBox from '../SelectBox';

/**
 * The purpose of this component is to act as a top
 * menu bar
 * Typical uses are whenever there is a need for a customer to navigate
 * a different menu or section of the program
 * @param classes: css classes passed to the html component
 * @param children: to add more components to the appbar
 * @param typography: title of the menu
 */

type Props = {
    classes: any,
    typography: String,
    homeOnClick: () => {},
    navigateHelp: () => {},
    reposOnChange: (value) => {},
    repos: Array,
    Projects: any,
    onProjectsChange: (newProject) => {},
};
/*
Increase size of text for project selector and change the text color.
*/
const Appbar = (props: Props) => {
  const {
    classes,
    typography,
    homeOnClick,
    navigateHelp,
    repos,
    reposOnChange,
    Projects,
    onProjectsChange,
  } = props;
  const [project, setProjectsData] = useState('');
  const [open, setOpen] = useState(false);
  const [repo, setReposData] = useState('');

  useEffect(() => {
    setProjectsData(Projects[0]);
    setReposData(repos[0]);
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRepoSelect = (event) => {
    const newRepo = event.target.value;
    setReposData(newRepo);
    reposOnChange(newRepo);
  };
  const handleProjectSelect = (event) => {
    const newProject = event.target.value;
    setProjectsData(newProject);
    onProjectsChange(newProject);
  };

  return (
    <div className={cn(classes[typography])}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                Project Mario
          </Typography>
          <Grid item sm={3}>
            <SelectBox
              value={repo || repos[0]}
              name="Repo Select"
              things={repos}
              onChange={handleRepoSelect}
              id={uuid()}
            />
          </Grid>
          <Grid item sm={3}>
            <Tooltip title={tooltips.PROJECT_SELECT} placement="bottom">
              <SelectBox
                value={project || Projects[0]}
                name="Project Select"
                things={Projects}
                onChange={handleProjectSelect}
                id={uuid()}
              />
            </Tooltip>
          </Grid>
          <Grid item sm={1} >
            <Tooltip title={tooltips.HOME} placement="bottom">
              <Button icon="home" onClick={homeOnClick} />
            </Tooltip>
          </Grid>
          <Grid item sm={1} >
            <Tooltip title={tooltips.HELP} placement="bottom-start">
              <Button icon="help" onClick={navigateHelp} />
            </Tooltip>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
    </div>
  );
};

Appbar.defaultProps = {
  typography: 'Project1',
};

export { Appbar };
