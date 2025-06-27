type Searched = {
  name: string;
};

let searched: Searched[] = [];

export async function getMostSearched() {
  if (searched.length === 0) {
    await new Promise((res) => setTimeout(res, 300)); // Simulate delay

    searched = [
      {name: 'torno'},
      {name: 'furadeira'},
      {name: 'maqden'},
      {name: 'mecanico'},
    ];
  }

  return searched;
}