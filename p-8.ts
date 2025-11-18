function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];
  const combined: (string | number)[] = [...arr1, ...arr2];

  for (let i = 0; i < combined.length; i++) {
    const value = combined[i];
    if (value === undefined) continue;

    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = value;
    }
  }

  return result;
}
