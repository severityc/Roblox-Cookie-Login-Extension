var _a;
(_a = document.querySelector(".button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", async (Event) => {
    const useValue = document.querySelector(".cookie-input").value.replace(/\s+/, '');
    const useButton = Event.target;
    const useInput = document.querySelector('.cookie-input');
    useButton.disabled = true;
    const [tab] = await chrome.tabs.query({ active: true });
    if (useValue.length < 500)
        return document.querySelector('.error').textContent = 'Invalid Cookie Provided.', document.querySelector('.error').className += " shown", useInput.classList.add("errored"), useButton.disabled = false;
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    return chrome.cookies.set({ url: tab.url, domain: "roblox.com", name: ".ROBLOSECURITY", value: useValue, expirationDate: date.getTime(), path: '/', secure: true, httpOnly: true}), chrome.tabs.reload();
});
export {};
