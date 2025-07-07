const skillHTML = document.querySelector('[data-skill="HTML"]');
const skillCSS = document.querySelector('[data-skill="CSS"]');
const skillJavaScript = document.querySelector('[data-skill="JavaScript"]');
const skillTailwind = document.querySelector('[data-skill="Tailwindcss"]');
const skillWordpress = document.querySelector('[data-skill="Wordpress"]');
const skillReact = document.querySelector('[data-skill="ReactJs"]');
const htmlBar = document.getElementById('html-bar');
const cssBar = document.getElementById('css-bar');
const javaScriptBar = document.getElementById('js-bar');
const tailwindcssBar = document.getElementById('tailwind-bar');
const wordpressBar = document.getElementById('wordpress-bar');
const reactBar = document.getElementById('react-bar');

let htmlCurrentValue = document.getElementById("html-bar").getAttribute('value');
let cssCurrentValue = document.getElementById('css-bar').getAttribute('value');
let jsCurrentValue = document.getElementById('js-bar').getAttribute('value');
let tailwindCurrentValue = document.getElementById('tailwind-bar').getAttribute('value');
let wordpressCurrentValue = document.getElementById('wordpress-bar').getAttribute('value');
let reactCurrentValue = document.getElementById('react-bar').getAttribute('value');

const skills = [
    {
        name : "HTML5",
        level: 95
    },
    {
        name: "CSS3",
        level: 90
    },
    {
        name : "JavaScript",
        level: 75
    },
    {
        name : "Tailwindcss",
        level: 85
    },
    {
        name : "Wordpress",
        level: 75
    },
    {
        name: "ReactJS",
        level: 70
    }
];


const skillElements = {
    HTML5: skillHTML,
    CSS3: skillCSS,
    JavaScript: skillJavaScript,
    Tailwindcss: skillTailwind,
    Wordpress: skillWordpress,
    ReactJS: skillReact
};

/**
 * Populates the skill containers with the skill name and level percentage.
 * For each skill in the `skills` array, creates a paragraph and span element,
 * sets their text content to the skill's name and level, and appends them to
 * the corresponding container in `skillElements`.
 *
 * Assumes `skills` is an array of objects with `name` and `level` properties,
 * and `skillElements` is an object mapping skill names to DOM elements.
 */
const fillProgressBars = () => {
    for (const skill of skills) {
        const p = document.createElement('p');
        const span = document.createElement('span');
        p.textContent = skill.name;
        span.textContent = skill.level + "%";
        const container = skillElements[skill.name];
        if (container) {
            container.append(p, span);
        }
    }
};

fillProgressBars()


const barElements = {
    HTML5: htmlBar,
    CSS3: cssBar,
    JavaScript: javaScriptBar,
    Tailwindcss: tailwindcssBar,
    Wordpress: wordpressBar,
    ReactJS: reactBar
};

let barValues = {
    HTML5: Number(htmlCurrentValue),
    CSS3: Number(cssCurrentValue),
    JavaScript: Number(jsCurrentValue),
    Tailwindcss: Number(tailwindCurrentValue),
    Wordpress: Number(wordpressCurrentValue),
    ReactJS: Number(reactCurrentValue)
};

/**
 * Animates the progress bars for each skill by incrementally updating their values
 * until they reach the target skill level, creating a smooth animation effect.
 *
 * Assumes the existence of:
 * - `skills`: an array of skill objects, each with a `name` and `level` property.
 * - `barElements`: an object mapping skill names to their corresponding progress bar DOM elements.
 * - `barValues`: an object mapping skill names to their current numeric values.
 *
 * @function
 * @returns {void}
 */
const simulateSmoothAnimation = () => {
    skills.forEach(skill => {
        const bar = barElements[skill.name];
        let currentValue = barValues[skill.name];
        const interval = setInterval(() => {
            if (currentValue < skill.level) {
                currentValue++;
                bar.setAttribute('value', currentValue);
                bar.setAttribute('aria-valuenow', currentValue);
            } else {
                clearInterval(interval);
            }
        }, 10);
    });
};
simulateSmoothAnimation()
