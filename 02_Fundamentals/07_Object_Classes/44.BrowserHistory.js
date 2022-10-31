function browserHistory(browser, commandsArray) {
    for (let i = 0; i < commandsArray.length; i++) {
        let currentAction = commandsArray[i].split(' ')[0];
        let currentSite = commandsArray[i].split(' ').slice(1).join(' ');
        if (currentAction == 'Open') {
            browser['Open Tabs'].push(currentSite);
            browser[`Browser Logs`].push(commandsArray[i]);
        } else if (currentAction == 'Close') {
            let openedTabsArray = browser['Open Tabs'];
            for (let j = 0; j < openedTabsArray.length; j++) {
                let index = openedTabsArray.indexOf(currentSite);
                if (index != -1) {
                    openedTabsArray.splice(index, 1);
                    browser['Open Tabs'] = openedTabsArray;
                    browser['Recently Closed'].push(currentSite);
                    browser[`Browser Logs`].push(commandsArray[i]);
                    break;
                }
            }

        } else if (commandsArray[i] == 'Clear History and Cache') {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser[`Browser Logs`] = [];
        }
    }
    console.log(browser['Browser Name']);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);
}
browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google", "Open Facebook", "Open Facebook","Open Facebook","Close Facebook"]
);