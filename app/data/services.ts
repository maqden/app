type Service = {
  target: string;
  title: string;
  cover: string;
};

let cache: Service[] = [];

export async function getServices() {
  if (cache.length === 0) {
    await new Promise((res) => setTimeout(res, 300));

    cache = [
      {target: 'account/service-1', cover: 'https://picsum.photos/id/292/1920/800', title: 'Torneiro Mecânico'},
      {target: 'account/service-2', cover: 'https://picsum.photos/id/367/1920/800', title: 'Torneiro Mecânico'},
      {target: 'account/service-3', cover: 'https://picsum.photos/id/787/1920/800', title: 'Torneiro Mecânico'},
    ];
  }

  return cache;
}