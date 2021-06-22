const message = document.querySelector(".message");

export default function renderError(text) {
  message.textContent = text;
}

export function resetError() {
  message.textContent = "";
}

export function renderDiff(diff) {
  message.innerHTML = `<span>
    Года:${diff.years}
    Месяца:${diff.months}
    Дни:${diff.days}
  </span>`;
}

export function loadScript(src) {
  if (src instanceof Array) {
    src.forEach((script) => {
      let scriptEl = document.createElement("script");
      scriptEl.src = script;
      document.head.append(scriptEl);
    });
  } else if (src instanceof Function) {
    src();
  } else {
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
  }
}
