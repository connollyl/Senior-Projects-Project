/* eslint-disable max-len */
export const helpPageContentDeveloper = [
  {
    header: 'Test Run',
    discription: [
      'New - Resets the page and starts the process over.  All fields will be emptied and need to be refilled.',
      'Last Run - Loads the last run that was passed through to Azure.  This will fill in all fields with the data from the previous run.',
    ],
  },
  {
    header: 'Developer',
    discription: [
      'Select the desired drive type and artfiact from the dropdown box.  Also, set how many runs the build should perform when it is queued.',
      'Email - Enter email addresses that will be on the CC list of the email when the build is queued.  Hitting \'Add\' will add the entered email address to the CC list and then another email can be added from there. \'Close\' will close the popup window and save the emails that were added to the CC list.',
    ],
  },
  {
    header: 'Firmware',
    discription: [
      'Select the desired firmware, power card, and application from the dropdown boxes.  Enter the artifacts into the text box next to the corresponding dropdown box.',
    ],
  },
  {
    header: 'Queue',
    discription: [
      'Sends the data in all of the fields to Azure in order to queue the pipeline to be ran.',
    ],
  },
];
export const helpPageContentExecution = [
  {
    header: 'Execution Table',
    discription: [
      'Displays all previously ran builds with the most recently ran displaying first.',
    ],
  },
];
export const helpPageContentTester = [
  {
    header: 'Test Run',
    discription: [
      'New - Resets the page and starts the process over.  All fields will be emptied and need to be refilled.',
      'Last Run - Loads the last run that was passed through to Azure.  This will fill in all fields with the data from the previous run.',
    ],
  },
  {
    header: 'Developer',
    discription: [
      'Select the desired drive type and artfiact from the dropdown box.  Also, set how many runs the build should perform when it is queued.',
      'Email - Enter email addresses that will be on the CC list of the email when the build is queued.  Hitting \'Add\' will add the entered email address to the CC list and then another email can be added from there. \'Close\' will close the popup window and save the emails that were added to the CC list.',
    ],
  },
  {
    header: 'Firmware',
    discription: [
      'Select the desired firmware, power card, and application from the dropdown boxes.  Enter the artifacts into the text box next to the corresponding dropdown box.',
    ],
  },
  {
    header: 'Tester Controls',
    discription: [
      'Select the desired test branch, test framework branch, framework configuration, and robot framework resource file from the dropdown boxes.',
      'Save - Saves the current test configuration selection for later use.',
      'Load - Loads a previously saved test configuration selection.',
    ],
  },
  {
    header: 'Queue',
    discription: [
      'Sends the data in all of the fields to Azure in order to queue the pipeline to be ran.',
    ],
  },
];
export const helpPageContentAdmin = [
  {
    header: 'Configure',
    discription: [
      'Add and delete drive types and test environments.',
    ],
  },
  {
    header: 'Map',
    discription: [
      'Add or delete unique build ids that map to a specific drive type and test environment.',
    ],
  },
];
export const LOADING_SPINNER_TEXT = 'Loading...';
