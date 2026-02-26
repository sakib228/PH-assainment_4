let buttonClick = 'all';
const tabActive = ["bg-black", "border-navy", "text-white"];
const tabInActive = ["bg-transparent", "text-slate-800", "border-state-200", "text-black"];
function buttonSwitch(tab) {
    console.log(tab);
    const tabs = ['all', 'interview', 'rejected'];
    for (const tabButton of tabs) {
        const tabName = document.getElementById("tab-" + tabButton);
        if (tabButton === tab) {
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInActive);
        }

    }

}
buttonSwitch(buttonClick);
