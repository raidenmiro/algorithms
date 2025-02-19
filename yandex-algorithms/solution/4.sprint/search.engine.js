// @link https://contest.yandex.ru/contest/24414/run-report/139463889/

/**
 * -- ПРИНЦИП РАБОТЫ --
 * Каждый документ разбивается на слова. Затем каждое слово добавляется в индекс. Который
 * хранит информацию о частоте встречи слова в документах Map<number, Map<number, number>>.
 * В обработке запросов предложение разбивается на слова. Слова уникальные, удаляются дубликаты.
 * Для каждого слова запроса ищутся соответствующие документы в индексе, в последующем вычисляется
 * релеватность каждого документа как сумма вхождений всех слов запроса.
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * - Все документы обрабатываются при индексировании.
 * - Учет уникальных слов запроса
 * - Все слова запроса учитываются при расчете релевантности
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * Построение индекса: O(N), где N - общее количество слов во всех документах
 * Обработка запросов: O(m * (k * n + n log n)), где:
 *  m - количество запросов,
 *  k - среднее количество уникальных слов в запросе,
 *  n - количество документов
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * O(U * d), где:
 * U - количество уникальных слов во всех документах,
 * d - среднее количество документов, содержащих слово
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineNumber = 0;
let n, m;
const documents = [];
const requests = [];

/**
 * @see https://contest.yandex.ru/contest/24414/problems/?success=139358015#51450/2021_01_14/vpped1t2Rn
 */
rl.on('line', (line) => {
  if (lineNumber === 0) {
    n = parseInt(line);
  } else if (lineNumber <= n) {
    documents.push(line);
  } else if (lineNumber === n + 1) {
    m = parseInt(line);
  } else if (lineNumber <= n + m + 1) {
    requests.push(line);
  }
  lineNumber++;
}).on('close', () => {
  const index = makeIndex(documents);
  const results = requests.map(request => processRequest(index, request));

  results.forEach(result => {
    console.log(result.join(' '));
  });
});

function makeIndex(documents) {
  const indexes = new Map();

  for (let docId = 0; docId < documents.length; docId++) {
    const words = documents[docId].split(' ');
    const wordCount = new Map();

    for (const word of words) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (const [word, count] of wordCount) {
      if (!indexes.has(word)) {
        indexes.set(word, new Map());
      }
      indexes.get(word).set(docId, count);
    }
  }

  return indexes;
}

function processRequest(index, request) {
  const LIMIT = 5;
  const words = new Set(request.split(' '));
  const scores = new Map();

  for (const word of words) {
    if (index.has(word)) {
      for (const [docId, count] of index.get(word)) {
        scores.set(docId, (scores.get(docId) || 0) + count);
      }
    }
  }

  return Array.from(scores.entries())
    .map(([docId, score]) => ({ docId, score }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.docId - b.docId;
    })
    .slice(0, LIMIT)
    .map(item => item.docId + 1);
}
