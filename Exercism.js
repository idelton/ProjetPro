//exercice Annalyn's Infiltration
export function canExecuteFastAttack(knightIsAwake) {
 return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
 return( (prisonerIsAwake&& !knightIsAwake && !archerIsAwake)   
  || (!archerIsAwake && petDogIsPresent)
  )

}

//exercices_2 lucians Lasagne  
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;
/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
   return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}
remainingMinutesInOven(30);
/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return  numberOfLayers * PREPARATION_MINUTES_PER_LAYER
}
/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
 return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

// Poetry Club Door Policy

export function frontDoorResponse(line) {
  return line[0]
}
export function frontDoorPassword(word) {

 return (word[0].toUpperCase() + word.slice(1).toLowerCase()); 
}
export function backDoorResponse(line) {
  return line.trim().slice(-1);
}
export function backDoorPassword(word) {
 return (word[0].toUpperCase() + word.slice(1).toLowerCase()) + ', please';
}

//MARKDOWN
//`<${tag}>${text}</${tag}> `
function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function isTag(text, tag) {
  return text.startsWith(`<${tag}>`);
}

function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

function parse__(markdown) {
  return parser(markdown, '__', 'strong');
}

function parse_(markdown) {
  return parser(markdown, '_', 'em');
}

function parseText(markdown, list) {
  const parsedText = parse_(parse__(markdown));
  if (list) {
    return parsedText;
  } else {
    return wrap(parsedText, 'p');
  }
}

function parseHeader(markdown, list) {
  let count = 0;
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] === '#') {
      count += 1;
    } else {
      break;
    }
  }
  if (count === 0 || count > 6) {
    return [null, list];
  }
  const headerTag = `h${count}`;
  const headerHtml = wrap(markdown.substring(count + 1), headerTag);
  if (list) {
    return [`</ul>${headerHtml}`, false];
  } else {
    return [headerHtml, false];
  }
}

function parseLineItem(markdown, list) {
  if (markdown.startsWith('*')) {
    const innerHtml = wrap(parseText(markdown.substring(2), true), 'li');
    if (list) {
      return [innerHtml, true];
    } else {
      return [`<ul>${innerHtml}`, true];
    }
  }
  return [null, list];
}

function parseParagraph(markdown, list) {
  if (!list) {
    return [parseText(markdown, false), false];
  } else {
    return [`</ul>${parseText(markdown, false)}`, false];
  }
}

function parseLine(markdown, list) {
  let [result, inListAfter] = parseHeader(markdown, list);
  if (result === null) {
    [result, inListAfter] = parseLineItem(markdown, list);
  }
  if (result === null) {
    [result, inListAfter] = parseParagraph(markdown, list);
  }
  if (result === null) {
    throw new Error('Invalid markdown');
  }
  return [result, inListAfter];
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let list = false;
  for (let i = 0; i < lines.length; i++) {
    let [lineResult, newList] = parseLine(lines[i], list);
    result += lineResult;
    list = newList;
  }
  if (list) {
    return result + '</ul>';
  } else {
    return result;
  }
}

import { AiOutlineFileAdd, AiOutlineSchedule, AiOutlineTeam, AiOutlineProject } from 'react-icons/ai';


export default function ProfessionalHomePage() {
 
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center">Home page Particulier</h1>

    <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Rechercher..."
        />
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Section Poster une nouvelle annonce */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Poster une nouvelle annonce</h2>
        <button className="flex items-center text-blue-500 hover:underline">
          <AiOutlineFileAdd className="mr-2" />
          Poster une annonce
        </button>
      </div>

      {/* Section Accès au planning */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Accès au planning</h2>
        <button className="flex items-center text-blue-500 hover:underline">
          <AiOutlineSchedule className="mr-2" />
          Voir le planning
        </button>
      </div>

      {/* Section Afficher les intervenants disponibles */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Afficher les intervenants disponibles</h2>
        <button className="flex items-center text-blue-500 hover:underline">
          <AiOutlineTeam className="mr-2" />
          Voir les intervenants
        </button>
      </div>

      {/* Section Gérer mes chantiers */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Gérer mes chantiers</h2>
        <button className="flex items-center text-blue-500 hover:underline">
          <AiOutlineProject className="mr-2" />
          Gérer mes chantiers
        </button>
      </div>

      {/* Section Calendrier ou Planning détaillé */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Calendrier détaillé</h2>
        <p className="text-gray-600">Affichage détaillé des travaux programmés...</p>
      </div>
    </div>
  </div>
);
}


