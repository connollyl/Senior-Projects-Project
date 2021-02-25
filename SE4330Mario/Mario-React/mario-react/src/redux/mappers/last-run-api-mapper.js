import set from 'lodash/set';
/**
 * Maps the values returned from the backend to specific variables so they can be called later
 * @param lastBuild: last build that the user queued
 */
export const mapBuild = (lastBuild) => {
  const populateValues = { name: '', driveType: '', testEnv: '' };
  set(populateValues, 'name', lastBuild.data.value[0].definition.name);
  const parseName = populateValues.name.split(' ');
  const parseAttributes = parseName[0].split('][');
  if (parseAttributes[0] === '[DRIVEMEULATOR') {
    populateValues.testEnv = 'Emulator';
  } else if (parseAttributes[0] === '[HIL') {
    populateValues.testEnv = 'HIL';
  } else if (parseAttributes[0] === '[REALMOTOR') {
    populateValues.testEnv = 'Real Motors';
  }
  if (parseAttributes[1] === 'LEAN]') {
    populateValues.driveType = 'Lean';
  } else if (parseAttributes[1] === 'RACK]') {
    populateValues.driveType = 'Rack';
  }
  return populateValues;
};
