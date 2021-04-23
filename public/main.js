getJs.onclick = () => {
    const xml2 = new XMLHttpRequest();
    xml2.open('GET', './2.js');
    xml2.onload = () => {
        console.log('xml2.response');
        console.log(xml2.response);
        const script = document.createElement('script');
        script.innerHTML = xml2.response;
        document.body.appendChild(script);
    };
    xml2.onerror = () => {
        console.log('出错了');

    };
    xml2.send();
}
getCss.onclick = () => {
    const xml = new XMLHttpRequest();
    xml.open('GET', '/style.css');
    xml.onload = () => {
        console.log('xml.response');
        console.log(xml.response);
        const style = document.createElement('style');
        style.innerHTML = xml.response;
        document.head.appendChild(style);
    };
    xml.onerror = () => {
        console.log('出错了');

    };
    xml.send();
}
getHtml.onclick = () => {
    const xml3 = new XMLHttpRequest();
    xml3.open('GET', './3.html');
    xml3.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = xml3.response;
        document.body.appendChild(div);
    };
    xml3.onerror = () => {
        console.log('出错了');

    };
    xml3.send();
}
getXml.onclick = () => {
    const xml4 = new XMLHttpRequest();
    xml4.open('GET', './4.xml');
    xml4.onreadystatechange = () => {
        if (xml4.readyState === 4 && xml4.status === 200) {
            console.log(xml4.responseXML);
            const dom = xml4.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text);
        }
    };
    xml4.onerror = () => {
        console.log('出错了');

    };
    xml4.send();
}
getJSON.onclick = () => {
    const xml5 = new XMLHttpRequest();
    xml5.open('GET', './5.json');
    xml5.onreadystatechange = () => {
        if (xml5.readyState === 4 && xml5.status === 200) {
            console.log(xml5.response);
            myName.textContent = JSON.parse(xml5.response).name;
        }
    };
    xml5.onerror = () => {
        console.log('出错了');

    };
    xml5.send();
}
let n = 1;
getPage.onclick = () => {
    const xml6 = new XMLHttpRequest();
    xml6.open('GET', `/page${n + 1}`);
    xml6.onreadystatechange = () => {
        if (xml6.readyState === 4 && xml6.status === 200) {
            const arr = JSON.parse(xml6.response);
            arr.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        };
    };

    xml6.send();
}