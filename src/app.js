/* 
 * BetterTaskMgr v.0.1.0
 * Coded by Kenan238 and SuspectAverage5
*/


const tabs = {
    processes: 0,
    performance: 1,
};

const topbar_options = {
    file: 0,
    options: 1,
    view: 2,
    help: 3
};

var currentButton     = null;
var currentTab        = tabs[Object.keys(tabs)[0]];
const mainDiv         = document.getElementById("main");
const menu            = document.getElementById("menu");
const os_utils        = require('node-os-utils')
const psnode          = require('ps-node');
const os              = require('os');
const nodeDiskInfo    = require('node-disk-info');
const { ipcRenderer } = require('electron')
const { exec }        = require("child_process");
const {
    inverseColors,
    generateRandomArabicSpam, 
    o_o,
    among_sus,
    top_things_to_do_after_installing_fart_night,
    eggs,
    jerma_sus
}   = require("./addons.js");

const { clear, Console } = require('console');
const { app } = require('electron');
require("v8-compile-cache");

var performance_interval = null;
var shared_performance = {
    "cpu": 0,
    "mem": 0,
};

var showingMorePerfomance = { do: false };
var refreshSpeeds = {
    "high": 100,
    "medium": 1000,
    "low": 5000,
};

var refreshSpeed = refreshSpeeds["medium"];


Math.percent = (partialVal, totalVal) => (100 * partialVal) / totalVal;
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
menu.style["display"] = "none";

var menuHandleClick = e => {
    console.log(e.target.parentNode);
    var accepted_click = 
        (
            e.target === menu 
            && 
            e.target.id == "topbar_button"
        )
        || e.target.parentNode.id == "topbar" 
        || e.target.parentNode.id == "menu";

    if (!accepted_click)
        menu.style["display"] = "none";
}

const prompt = (message, callback) => {
    var html_ = `
    <center>
        <p id="prompt_msg">${message}</p>
        <input id="prompt_input" type="text" />
        <br>
        <button id="prompt_button">OK</button>
    </center>
    `;
    if (!document.getElementById("prompt_")) {
        var prompt_elem = document.createElement("DIV");
        prompt_elem.innerHTML = html_;
        prompt_elem.id = "prompt_";

        mainDiv.insertBefore(prompt_elem, mainDiv.firstChild);
    } 
    else {
        document.getElementById("prompt_").innerHTML = html_;
        document.getElementById("prompt_").style["display"] = "block";
    }

    document.getElementById("prompt_button").onclick = () => {
        var prompt_elem = document.getElementById("prompt");
        document.getElementById("prompt_").style["display"] = "none";
        if (callback) callback(document.getElementById("prompt_input").value);
        else {
            console.warn("Cannot callback for prompt.");
            console.log({prompt: document.getElementById("prompt_input").value});
        }
    };
};

const alert = message => {
    var html_ = `
    <center>
        <p id="prompt_msg">${message}</p>
        <br>
        <button id="prompt_button">OK</button>
    </center>
    `;
    if (!document.getElementById("prompt_")) {
        var prompt_elem = document.createElement("DIV");
        prompt_elem.innerHTML = html_;
        prompt_elem.id = "prompt_";

        mainDiv.insertBefore(prompt_elem, mainDiv.firstChild);
    } 
    else {
        document.getElementById("prompt_").innerHTML = html_;
        document.getElementById("prompt_").style["display"] = "block";
    }

    document.getElementById("prompt_button").onclick = () => {
        var prompt_elem = document.getElementById("prompt");
        document.getElementById("prompt_").style["display"] = "none";
    };
};

document.addEventListener("click", menuHandleClick);

const displayProcesses = () => {
    mainDiv.innerHTML = "<p>Fetching processes...</p>"
    
    var html_content = `
    <table id="processes_table">
        <thead>
            <tr>
                <th>PID</th>
                <th>COMMANDS</th>
                <th>ARGUMENTS</th>
            </tr>
        </thead>
        <tbody>
    `;
    psnode.lookup({}, function(err, resultList) {
        resultList.forEach(process => {
            var pid       = process.pid;
            var command   = process.command;
            var arguments = process.arguments;
            html_content += `
            <tr>
                <th>${pid}</th>
                <th>${command}</th>
                <th>${arguments}</th>
            </tr>
            `;
        });
        html_content += "</tbody></table>";
        mainDiv.innerHTML = html_content;
    });
};

const displayMorePerformanceF = what => {
    var cpuModel = os.cpus()[0].model;
    var cpuCores = os.cpus().length;
    var cpuSpeed = os.cpus()[0].speed;
    var cpu = os_utils.cpu;
    var mem = os_utils.mem;
    var more_info = document.getElementById("more_info");
    more_info.innerHTML = `Fetching...`;

    if (what == "cpu") {
        more_info.innerHTML = `
            <div id="info_wrapper">
                <div id="info_mp">
                    <p>Usage</p>
                    <p>${shared_performance["cpu"]}%</p>
                </div>
                <div id="info_mp">
                    <p>Model</p>
                    <p>${cpuModel}</p>
                </div>
                <div id="info_mp">
                    <p>Cores</p>
                    <p>${cpuCores}</p>
                </div>
                <div id="info_mp">
                    <p>Speed</p>
                    <p>${cpuSpeed}</p>
                </div>
            </div>
        `;
    }

    if (what == "mem") {
        more_info.innerHTML = `
            <div id="info_wrapper">
                <div id="info_mp">
                    <p>Usage (%)</p>
                    <p>${shared_performance["mem"]["percent"]}</p>
                </div>
                <div id="info_mp">
                    <p>Usage (GB)</p>
                    <p>${shared_performance["mem"]["used"]}/${shared_performance["mem"]["total"]} GB</p>
                </div>
            </div>
        `;
    }

    if (what == "net") {
        more_info.innerHTML = '';
        var intersk = shared_performance["net"]["interfaces_keys"];
        var inters = shared_performance["net"]["interfaces"];
        for (let i = 0; i < intersk.length; i++) {
            var interk = intersk[i];
            var interfamilies = inters[interk];
            
            more_info.innerHTML += `
                <div id="info_wrapper">
                    <div id="info_mp">
                        <p>Address IPv4 (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv4").address}</p>
                    </div>
                    <div id="info_mp">
                        <p>Address IPv6 (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv6").address}</p>
                    </div>
                    <div id="info_mp">
                        <p>CIDR IPv4 (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv4").cidr}</p>
                    </div>
                    <div id="info_mp">
                        <p>CIDR IPv6 (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv6").cidr}</p>
                    </div>
                    <div id="info_mp">
                        <p>Internal (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv4").internal}</p>
                    </div>
                    <div id="info_mp">
                        <p>MAC IPv4 (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv4").mac}</p>
                    </div>
                    <div id="info_mp">
                        <p>MAC IPv6 (${interk})</p>
                        <p>${interfamilies.find(f => f.family == "IPv6").mac}</p>
                    </div>
                </div>
            `;
        }
    }

    if (what == "drive") {
        more_info.innerHTML = '';
        for(var drive of shared_performance["drives"]) {
            more_info.innerHTML += `
                <div id="info_wrapper">
                    <div id="info_mp">
                        <p>Capacity (GB)</p>
                        <p>${drive.capacity}</p>
                    </div>
                    <div id="info_mp">
                        <p>Mount letter</p>
                        <p>${drive.mounted}</p>
                    </div>
                </div>
            `;
        }
    }
};

const displayMorePerformance = w => {
    showingMorePerfomance["do"] = true;
    showingMorePerfomance["what"] = w;
    displayMorePerformanceF(w);
};

const displayPerformance = () => {
    var cpu = os_utils.cpu;
    var mem = os_utils.mem;
    var cpuModel = os.cpus()[0].model;
    var cpuCores = os.cpus().length;

    var html_content = `
    <div id="main_p_bar">
        <div class="info_categ" tabindex="1" onclick="displayMorePerformance('cpu')">
            <p id="info_categ_title">CPU</p>
            <progress id="cpu_progress" value="0" max="100" style="--fillcolor: #1f6bb8;"></progress>
            <p id="info_categ_desc">
                <span id="icd_cpu">Fetching...</span><br>
            </p>
        </div>
        <div class="info_categ" tabindex="1" onclick="displayMorePerformance('mem')">
            <p id="info_categ_title">Memory</p>
            <progress id="mem_progress" value="0" max="100" style="--fillcolor: #6e4a82;"></progress>
            <p id="info_categ_desc" id="icd_mem">
                <span id="icd_mem">Fetching...</span>
            </p>
        </div>
    </div>
    <div id="separator"></div>
    <div id="more_info"></div>
    `;

    const displayInfo = () => {
        cpu.usage().then(usage => {
            shared_performance["cpu"] = usage;
            document.getElementById("cpu_progress").value = shared_performance["cpu"];
            document.getElementById("icd_cpu").innerHTML = "CPU Usage: " + shared_performance["cpu"] + "%";
        });

        mem.info().then(info => {
            var usedMemToGb = (info.usedMemMb / 1024).toFixed(1);
            var totalMemToGb = (info.totalMemMb / 1024).toFixed(1);
            var percent = Math.percent(usedMemToGb, totalMemToGb).toFixed(1);

            shared_performance["mem"] = {
                "used": usedMemToGb,
                "total": totalMemToGb,
                "percent": percent
            };

            document.getElementById("mem_progress").value = percent;
            document.getElementById("icd_mem").innerHTML = `${usedMemToGb}/${totalMemToGb} GB (${percent}%)`;
        });

        nodeDiskInfo.getDiskInfo().then(drives => {
            shared_performance["drives"] = drives;
            var index = 0;
            for (var drive of drives) {
                var id_mount = drive.mounted.replace(/\//g, "");
                var id = `info_categ_desc_${id_mount}`;
            
                if (!document.getElementById(id)) {
                    var html_content = `
                    <div class="info_categ" id="${id}" tabindex="1" onclick="displayMorePerformance('drive')">
                        <p id="info_categ_title">Disk ${index} (${drive.mounted})</p>
                        <p id="info_categ_desc" id="icd_drv">
                        <span id="icd_mem">CAPCACITY: ${drive.capacity}</span>
                        <progress value="${drive.capacity.replace(/%/g, "")}" max="100" style="--fillcolor: green;"></progress>
                        </p>
                    </div>
                    `;
                    document.getElementById("main_p_bar").innerHTML += html_content;
                    index++;
                }
            }
        });

        var interfaces = os.networkInterfaces();
        var interfaces_keys = Object.keys(interfaces);
        shared_performance["net"] = {
            "interfaces": interfaces,
            "interfaces_keys": interfaces_keys
        };

        for (let i = 0; i < interfaces_keys.length; i++) {
            var interk = interfaces_keys[i];
            var interfamilies = interfaces[interk];
            var inter = interfamilies.find(inter => inter.family === "IPv4");
            var id = `info_categ_netstat_${interk}`;

            if (!document.getElementById(id)) {
                var html_content = `
                <div class="info_categ" id="${id}" tabindex="1" onclick="displayMorePerformance('net')">
                    <p id="info_categ_title">NET ${interk}</p>
                    <p id="info_categ_desc" id="icd_mem">
                    <span id="icd_mem">ADDR: ${inter.address}</span>
                    </p>
                </div>
                `;
                document.getElementById("main_p_bar").innerHTML += html_content;
            }
        }

        if (showingMorePerfomance["do"]) {
            displayMorePerformance(showingMorePerfomance["what"]);
        }
    };
    performance_interval = setInterval(displayInfo, refreshSpeed);
    mainDiv.innerHTML = html_content;
};

const displayTab = tab => {
    if (performance_interval) {
        clearInterval(performance_interval);
        performance_interval = null;
    }

    showingMorePerfomance["do"] = false;

    switch (tab) {
        case tabs.processes:
            displayProcesses();
            break;

        case tabs.performance:
            displayPerformance();
            break;
    }
};

const TopBarActions = action => {
    if (action == "newtask") {
        prompt("Enter executable path or executable name if in environment path", e => {
            exec(e, (error, stdout, stderr) => {
                if (error) {
                    alert("While trying to execute: " + error);
                    return;
                }

                if (stderr) {
                    alert("STDERR while trying to execute: " + stderr);
                    return;
                }

                if (stdout)
                    alert("STDOUT: " + stdout);
            });
        });
    }

    if (action == "exit")
        ipcRenderer.invoke("quit");

    if (action == "alwaysontop")
        ipcRenderer.invoke("alwaysOnTop");

    if (action == "dalwaysontop")
        ipcRenderer.invoke("disableAlwaysOnTop");

    if (action == "refresh_speed") {
        var selectedRefreshSpeed = document.getElementById("refresh_speed").value;
        refreshSpeed = refreshSpeeds[selectedRefreshSpeed];
        displayTab(currentTab);
    }

    if (action == "about") {
        var memUsage = process.memoryUsage();
        alert(`
            BetterTaskMgr v0.1.0<br>
            Coded by Kenan238 and SuspectAverage5.<br>
            Github: <strong style=\"color: blue;\">https://github.com/SuspectAverage5/BetterTaskMgr</strong><br>
            <h3>Information</h3>
            <strong>App Version</strong><br>
            ${window.clientInformation.appVersion}<br><br>
            <strong>Platform</strong><br>
            ${window.clientInformation.platform}<br><br>
            <strong>Current Memory Usage</strong><br>
            <p><strong>RSS: </strong>${(memUsage.rss / 1048576).toFixed(3)} MB</p>
            <p><strong>Array Buffers: </strong>${(memUsage.arrayBuffers / 1048576).toFixed(3)} MB</p>
            <p><strong>Heap Total: </strong>${(memUsage.heapTotal / 1048576).toFixed(3)} MB</p>
            <p><strong>Heap Used: </strong>${(memUsage.heapUsed / 1048576).toFixed(3)} MB</p>
            <p><strong>External: </strong>${(memUsage.external / 1048576).toFixed(3)} MB</p>
            `
        );
    }
};

const switchTab = tab => {
    mainDiv.innerHTML = "";
    currentTab = tab;
    displayTab(tab);
};

const clickTopBar = btn => {
    var btn_str = null;
    for(var [key, value] of Object.entries(topbar_options)) {
        if (value === btn)
            btn_str = capitalizeFirstLetter(key);
    }

    var offsets = null;
    document.querySelectorAll("#topbar_button").forEach(button => {
        if (button.textContent === btn_str) {
            offsets = button.getBoundingClientRect();
        }
    });

    var top = offsets.top;
    var left = offsets.left;

    menu.style["top"] = (top + 20)+"px";
    menu.style["left"] = left+"px";
    menu.style["display"] = "block";
    menu.focus();

    currentButton = btn;
    if (btn === topbar_options.file) {
        menu.innerHTML = `
        <button id='task' class="menu_btn" onclick="TopBarActions('newtask')">New Task</button><br>
        <button id='exit' class="menu_btn" onclick="TopBarActions('exit')">Exit</button>`;
    }

    if (btn === topbar_options.options) {
        menu.innerHTML = `
        <input type='checkbox' onchange="if (this.checked) { TopBarActions('alwaysontop') } else { TopBarActions('dalwaysontop') }">Always on Top</input><br>
        `;
    }

    if (btn === topbar_options.view) {
        menu.innerHTML = `
        <button id='refresh' class="menu_btn" onclick="window.location.reload();">Refresh</button><br>
        <button>Refresh speed</button>
        <select onchange="TopBarActions('refresh_speed')" id="refresh_speed">
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
        </select>
        `;
    }

    if (btn === topbar_options.help) {
        menu.innerHTML = `
        <button id="about" class="menu_btn" onclick="TopBarActions('about')">About</button>
        `;
    }
};

const clickButton = btn => {
    switch (btn) {
        case topbar_options.file:
            clickTopBar(topbar_options.file);
            break;

        case topbar_options.options:
            clickTopBar(topbar_options.options);
            break;

        case topbar_options.view:
            clickTopBar(topbar_options.view);
            break;

        case topbar_options.help:
            clickTopBar(topbar_options.help);
            break;
    }
};

window.onload = () => {
    $("table").resizable({
        store: window.store
    });

    // Assign onclick to options tab buttons
    document.querySelectorAll("#optionsbar_button").forEach(button => {
        var tab = tabs[button.textContent.toLowerCase()];
        button.onclick = () => switchTab(tab);
    });

    // Assign onclick to topbar buttons
    document.querySelectorAll("#topbar_button").forEach(button => {
        var btn = topbar_options[button.textContent.toLowerCase()];
        button.onclick = () => clickButton(btn);
    });

    // Topbar
    let minimize = document.getElementById("minimize");
    let maximize = document.getElementById("maximize");
    let close = document.getElementById("close");

    minimize.onclick = () => {
        console.log("Minimized Window.");
        ipcRenderer.invoke("minimize");
    };

    maximize.onclick = () => {
        console.log("Maximized Window.");
        ipcRenderer.invoke("maximize");
    };

    close.onclick = () => {
        ipcRenderer.invoke("quit");
    };
};
