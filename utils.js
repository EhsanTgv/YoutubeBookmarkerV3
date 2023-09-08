async function getActiveTabURL() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tab.queryParameters(queryOptions);
    return tab;
}