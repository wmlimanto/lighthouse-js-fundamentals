const smartGarbage = function (trash, bins) {
  let bin = {
    waste: 0,
    recycling: 0,
    compost: 0
  }
  if (trash === 'waste') {
    bin.waste = bins.waste + 1;
    bin.recycling = bins.recycling;
    bin.compost = bins.compost;
  } else if (trash === 'recycling') {
    bin.waste = bins.waste;
    bin.recycling = bins.recycling + 1;
    bin.compost = bins.compost;
  } else {
    bin.waste = bins.waste;
    bin.recycling = bins.recycling;
    bin.compost = bins.compost + 1;
  }
  return bin;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
