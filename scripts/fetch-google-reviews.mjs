import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
  console.error('GOOGLE_PLACES_API_KEY e GOOGLE_PLACE_ID precisam estar definidos.');
  process.exit(1);
}

const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
url.searchParams.set('place_id', placeId);
url.searchParams.set('fields', 'rating,user_ratings_total,reviews');
url.searchParams.set('language', 'pt-BR');
url.searchParams.set('key', apiKey);

const response = await fetch(url);
const data = await response.json();

if (data.status !== 'OK') {
  console.error(`Google Places API retornou status ${data.status}: ${data.error_message ?? 'sem detalhes'}`);
  process.exit(1);
}

const result = data.result;

const output = {
  rating: result.rating ?? null,
  userRatingsTotal: result.user_ratings_total ?? null,
  reviews: (result.reviews ?? [])
    .filter((review) => review.rating >= 4)
    .slice(0, 6)
    .map((review) => ({
      id: `${review.author_name}-${review.time}`,
      name: review.author_name,
      text: review.text?.trim() || '',
      rating: review.rating,
    }))
    .filter((review) => review.text.length > 0),
  updatedAt: new Date().toISOString(),
};

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'data',
  'google-reviews.json',
);

await writeFile(outPath, `${JSON.stringify(output, null, 2)}\n`, 'utf-8');

console.log(`Avaliações atualizadas: nota ${output.rating}, ${output.userRatingsTotal} avaliações, ${output.reviews.length} textos salvos.`);
