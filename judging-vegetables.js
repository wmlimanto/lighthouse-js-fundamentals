//For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).
//Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

const judgeVegetable = function (vegetables, metric) {
  let metricScore = [];
  let metrics = [];
  let highestScore = 0;
  let result = '';

  for (let i = 0; i < vegetables.length; i++) {

    metrics = (Object.keys(vegetables[i]));

    for (let j = 0; j < metrics.length; j++) {
      if (metrics[j] == metric) {
        metricScore.push(vegetables[i][metric]);
      }
    }
    highestScore = Math.max.apply(null,metricScore)
    for (let i = 0; i < vegetables.length; i++) {
      if (highestScore == vegetables[i][metric]) {
        result = vegetables [i]['submitter'];
      }
    }
  }
  return result;
}